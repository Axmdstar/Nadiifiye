const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
const crypto = require('crypto');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const sendEmail = require('../utils/mail');
app.use(express.json());
app.use(cors());




// User Registration
app.post("/register", async (req, res) => {
  const { username, email, password, userType } = req.body;
  console.log('req.body :>> ', req.body);
  try {
    let user = await User.findOne({ email }); 
    if (user) return res.status(400).json({ msg: "User already exists" });

    user = new User({ username, email, password, userType });
    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// User Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // console.log('req.body :>> ', req.body);
  try {
    let user = await User.findOne({ email });
    
    // if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    console.log(user);
    res.json({ user });
    
    // const payload = { user: { id: user.id } };
    // jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
    //   if (err) throw err;
    // });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   console.log('res.body :>> ', res.body);
//   try {
//     let user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

//     // Instead of just the token, send user data along with it
//     const payload = { user: { id: user.id } };
//     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//       if (err) throw err;
//       res.json({ token, user: { id: user.id, username: user.username, email: user.email, userType: user.userType } });
//     });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });


app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'No user found with that email' });
    }

    const token = crypto.randomBytes(20).toString('hex'); // Generate a reset token
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now
    await user.save();

    await sendEmail({
      to: email,
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             http://${req.headers.host}/reset-password/${token}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`
    });

    res.json({ message: 'An email has been sent to ' + email + ' with further instructions.' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending the password reset email' });
    console.error(error);
  }
});

app.post('/reset-password/:token', async (req, res) => {
  const { password } = req.body;
  try {
    const user = await User.findOne({ 
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Password reset token is invalid or has expired.' });
    }

    // If token has not expired, and the user is there, set the new password
    user.password = password; // Make sure to hash the password before saving
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    // Log the user in, or send a confirmation email that the password was changed
    res.json({ message: 'Password successfully reset.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = app;
