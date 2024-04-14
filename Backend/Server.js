const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
require("dotenv").config();
const authMiddleware = require("./middleware/authMiddleware");
const app = express();
app.use(express.json());
app.use('/img', express.static(path.join(__dirname, '/organizerImage')));
// Import routes
const authRoutes = require("./routes/auth");
const CampaignRoute = require("./routes/CampaignRoute");
const VolunteerRoute = require("./routes/VolunteerRoute");
const OrganizerRoute = require("./routes/OrganizerRoute");

//  routes
app.use("/api/auth", authRoutes);
app.use("/Campaign", CampaignRoute);
app.use("/Volunteer", VolunteerRoute);
app.use("/Organizer", OrganizerRoute);

// api protected
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    msg: `Welcome ${req.user.username}, you have accessed a protected route!`,
  });
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
