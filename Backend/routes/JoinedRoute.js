const express = require("express");
const app = express();
const cors = require("cors");
const JoinedModel = require("../models/Joined");
app.use(express.json());
app.use(cors());
const multer = require("multer");
const path = require("path");

app.get("/AllJoinedDsh", async (req, res) => {
  try {
    const getData = await JoinedModel.find();
    res.send(getData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/AllJoined:Org", async (req, res) => {
    try {
      const getData = await JoinedModel.find({OrganizerName: req.params.Org});
      res.send(getData);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  


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

app.post("/AddJoined",uploadimg.single("Image"), async (req, res) => {
    try {
        console.log('req.body :>> ', req.body);
        const newData = new JoinedModel({
            CampaignId: req.body.CampaignId,
            CampaignName: req.body.CampaignName,
            OrganizerName: req.body.OrganizerName,
            VolunteerId: req.body.VolunteerId,
            VolunteerName: req.body.VolunteerName,
        });

        const saveData = await newData.save();
        res.json({
            status: "success",
            message: "successfully added",
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = app;
// const JoinedModel = mongoose.Schema({
//     CampaignId: {
//         type: String,
//         required: true,
//     },
//     OrganizerName: {
//         type: String,
//         required: true,
//     },
//     VolunteerId: {
//         type: String,
//         required: true,
//     },
//     VolunteerName: {
//         type: String,
//         required: true,
//     }
// },{ timestamps: true }
// )