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
    cb(null, "uploads/CampaignImage");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadimg = multer({ storage: imageLocation });

//create campaign
app.post("/addCampaign", uploadimg.single("Image"), async (req, res) => {
  try {
    const newData = new CampaignsModel({
      Name: req.body.Name,
      Description: req.body.Description,
      Organizer: req.body.Organizer,
      Location: req.body.Location,
      DateTime: req.body.DateTime,
      Type: req.body.Type,
      NumOfPeople: req.body.NumOfPeople,
      currentNumOfPeople:req.body.currentNumOfPeople,
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









// campaign current num of peaple
app.patch("/Join/:id", async (req, res) => {
  try {
    const campaignId = req.params.id;
    const campaign = await CampaignsModel.findById(campaignId);

    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    // Check if the campaign has ended
    if (campaign.currentNumOfPeople >= campaign.NumOfPeople) {
      return res.status(400).json({ error: "Campaign has ended" });
    }

    // Increment the currentNumOfPeople col
    campaign.currentNumOfPeople += 1;
    await campaign.save();

    res.json({
      status: "success",
      message: "Campaign joined successfully",
      currentNumOfPeople: campaign.currentNumOfPeople,
      NumOfPeople: campaign.NumOfPeople,
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


app.get("/OrgCampaign/:Organizer", async (req, res) => {
  try {
    const OrgCampaigns = await CampaignsModel.find({Organizer: req.params.Organizer});
    res.send(OrgCampaigns)    
  } catch (err) {
    res.status(500).json({err: error.message})
  }
})




// total Campaigns
app.get("/total", async (req, res) => {
  try {
    const totalCampaigns = await CampaignsModel.find().countDocuments();
    res.send({ totalCampaigns });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//show last 2 added campaigns
app.get("/lastTwoCampaigns", async (req, res) => {
  try {
    const lastTwoCampaigns = await CampaignsModel.find()
      .sort({ DateTime: -1 }) // Sort by DateTime field in ascending order (1)
      .limit(2); // Limit the result to 2 documents

    res.send(lastTwoCampaigns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// finished campaigns count
app.get("/finishedCampaigns", async (req, res) => {
  try {
    const finishedCampaignsCount = await CampaignsModel.aggregate([
      {
        $match: { $expr: { $eq: ['$currentNumOfPeople', '$NumOfPeople'] } }
      },
      {
        $count: "totalFinishedCampaigns"
      }
    ]);
    if (finishedCampaignsCount.length > 0) {
      res.send({ totalFinishedCampaigns: finishedCampaignsCount[0].totalFinishedCampaigns });
    } else {
      res.send({ totalFinishedCampaigns: 0 }); // No finished campaigns found
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});









module.exports = app;
