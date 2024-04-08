const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
//const authRoutes = require('./routes/auth');
// Use routes
app.use('/api/auth', authRoutes);

// api protected
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ msg: `Welcome ${req.user.username}, you have accessed a protected route!` });
  });

// Test Api 
// app.get("/api/test",(req, res) => {
//   res.send("Hello");
// })

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
