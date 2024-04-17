const express = require('express');
const cors = require('cors');
const subscriptionRoutes = require('../models/subscription');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
    
        // Check if the email is already subscribed
        const existingSubscription = await subscriptionRoutes.findOne({ email });
        if (existingSubscription) {
          return res.status(400).json({ error: 'Email is already subscribed' });
        }
    
        // Create a new subscription
        const newSubscription = new subscriptionRoutes({ email, subscribed: true });
        await newSubscription.save();
    
        // Send a success response
        res.status(201).json({ message: 'Subscription successful' });
      } catch (error) {
        console.error('Error subscribing:', error);
        res.status(500).json({ error: 'Server error' });
      }
  });

module.exports = app;
