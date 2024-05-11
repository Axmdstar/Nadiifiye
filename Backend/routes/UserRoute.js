const express = require("express");
const app = express();
const cors = require("cors");
const userSchema = require("../models/User");
app.use(express.json());
app.use(cors());
const multer = require("multer");
const path = require("path");

app.get("/AllUsers", async (req, res) => {
  try {
    const users = await userSchema.find(); // Fetch all users from the database
    res.json(users); // Send the users as a JSON response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle errors
  }
});

module.exports = app;
