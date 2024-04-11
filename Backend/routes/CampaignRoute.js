const express = require("express");
const app = express();
const cors = require("cors");
const CampaignsModel = require("../models/Campaigns");
app.use(express.json());
app.use(cors());
const multer = require("multer");
const path = require("path");

//show all campaigns
app.get("/AllCampaigns", async (req, res) => {
  try {
    const getData = await CampaignsModel.find();
    res.send(getData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//show single campaign
app.get("/single/:id", async (req, res) => {
  try {
    const data = await CampaignsModel.findOne({
      _id: req.params.id,
    });
    if (!data) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// image
const imageLocation = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "CampaignImage");
  },
  filename: (req, file, cb) => {
    // console.log(file);
    // cb(null, Date.now() +path.extname(file.originalname));
    cb(null, file.originalname);
  },
});
const uploadimg = multer({ storage: imageLocation });
//create campaign
app.post("/addCampaign", uploadimg.single("image"), async (req, res) => {
  try {
    const newData = new CampaignsModel({
      Name: req.body.Name,
      Organizer: req.body.Organizer,
      Location: req.body.Location,
      DateTime: req.body.DateTime,
      Type: req.body.Type,
      NumOfPeople: req.body.NumOfPeople,
      Image: req.file.filename,
    });
    const saveData = await newData.save();
    res.json({
      status: "success",
      message: "successfully created",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//update campaigns
app.put("/update/:id", async (req, res) => {
  try {
    const updateData = await CampaignsModel.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (updateData.nModified === 0) {
      return res.status(404).json({ error: "No campaign updated" });
    }
    res.json({
      status: "success",
      message: "successfully updated",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//delete campaings
app.delete("/delete/:id", async (req, res) => {
  try {
    const deleteData = await CampaignsModel.deleteOne({ _id: req.params.id });
    if (deleteData.deletedCount === 0) {
      return res.status(404).json({ error: "No campaign deleted" });
    }
    res.json({
      status: "success",
      message: "successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// total Campaigns
app.get("/total", async (req, res) => {
  try {
    const totalCampaigns = await CampaignsModel.find().countDocuments();
    res.send({ totalCampaigns });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
