const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route for handling form submissions
app.post('/send_message', (req, res) => {
  const { name, email, subject, description } = req.body;
  // Create a transporter using Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: 'faatimaapdirahmaanali@gmail.com', // Receiver's email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nDescription: ${description}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('There was a problem sending your message. Please try again later.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Message sent successfully');
    }
  });
});
module.exports = app;