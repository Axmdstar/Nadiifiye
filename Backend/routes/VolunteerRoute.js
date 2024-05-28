const express = require("express");
const app = express();
const cors = require("cors");
const VolunteerModel = require("../models/Volunteers");
const JoinedModel = require("../models/Joined");
const CampaignsModel = require("../models/Campaigns");
app.use(express.json());
app.use(cors());
const multer = require("multer");
const path = require("path");

//show all volunteers
app.get("/AllVolunteers", async (req, res) => {
  try {
    const getData = await VolunteerModel.find();
    res.send(getData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//show single volunteer
app.get("/single/:id", async (req, res) => {
  try {
    const data = await VolunteerModel.findOne({
      _id: req.params.id,
    });
    if (!data) {
      return res.status(404).json({ error: "volunteer not found" });
    }
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// image
const imageLocation = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/VolunteerImage");
  },
  filename: (req, file, cb) => {
    // console.log(file);
    // cb(null, Date.now() +path.extname(file.originalname));
    cb(null, file.originalname);
  },
});
const uploadimg = multer({ storage: imageLocation });

//add volunteer
app.post(
  "/addVolunteer",
  uploadimg.single("profileImage"),
  async (req, res) => {
    try {
      console.log('req.body :>> ', req.body);
      const newData = new VolunteerModel({
        Name: req.body.Name,
        Phone: req.body.Phone,
        Address: req.body.Address,
        Emaail: req.body.Emaail,
        TypeOfInterest: req.body.TypeOfInterest,
        numOfEvent: req.body.numOfEvent,
        profileImage: req.file.filename,
        Campaigns: req.body.Campaigns
      });
      const saveData = await newData.save();

      // after save is done 
      const campaignName = await CampaignsModel.findOne({_id: req.body.Campaigns});
      const joind = await new JoinedModel({
        CampaignId: campaignName._id,
        CampaignName: campaignName.Name,
        OrganizerName: campaignName.Organizer,
        VolunteerId: saveData._id,
        VolunteerName: saveData.Name,
      }).save();

      
      res.json({
        status: "success",
        VolunteerId:saveData._id,
        VolunteerName:saveData.Name,
        message: "successfully added",
      });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

//update volunteer
app.put("/update/:id", async (req, res) => {
  try {
    const updateData = await VolunteerModel.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (updateData.nModified === 0) {
      return res.status(404).json({ error: "No volunteer updated" });
    }
    res.json({
      status: "success",
      message: "successfully updated",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//delete volunteer
app.delete("/delete/:id", async (req, res) => {
  try {
    const deleteData = await VolunteerModel.deleteOne({ _id: req.params.id });
    if (deleteData.deletedCount === 0) {
      return res.status(404).json({ error: "No volunteer deleted" });
    }
    res.json({
      status: "success",
      message: "successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// total volunteer
app.get("/total", async (req, res) => {
  try {
    const totalvolunteers = await VolunteerModel.find().countDocuments();
    res.send({ totalvolunteers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
