const JoinedModel = require("../models/Joined");
const CampaignsModel = require("../models/Campaigns");
const OrganizerModel = require("../models/Organizers");
const VolunteerModel = require("../models/Volunteers");

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const multer = require("multer");
const path = require("path");

app.get("/DshCounts", async (req, res) => {
  try {
    const totalVolunteers = await VolunteerModel.countDocuments();
    const totalJoined = await JoinedModel.countDocuments();
    const totalCampaigns = await CampaignsModel.countDocuments();
    const totalOrganizers = await OrganizerModel.countDocuments();

    res.json({
      totalVolunteers,
      totalJoined,
      totalCampaigns,
      totalOrganizers,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
