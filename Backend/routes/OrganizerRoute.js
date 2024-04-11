const express = require("express");
const app = express();
const cors = require("cors");
const OrganizerModel = require("../models/Organizers");
app.use(express.json());
app.use(cors());
const multer = require("multer");
const path = require("path");

//show all organizers
app.get("/AllOrganizers", async (req, res) => {
  try {
    const getData = await OrganizerModel.find();
    res.send(getData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//show single Organizer
app.get("/single/:id", async (req, res) => {
  try {
    const data = await OrganizerModel.findOne({
      _id: req.params.id,
    });
    if (!data) {
      return res.status(404).json({ error: "Organizer not found" });
    }
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// image
const imageLocation = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "organizerImage");
  },
  filename: (req, file, cb) => {
    // console.log(file);
    // cb(null, Date.now() +path.extname(file.originalname));
    cb(null, file.originalname);
  },
});
const uploadimg = multer({ storage: imageLocation });
//add organizer
app.post("/addorganizer", uploadimg.single("image"), async (req, res) => {
  try {
    const newData = new OrganizerModel({
      Name: req.body.Name,
      Phone: req.body.Phone,
      Address: req.body.Address,
      Emaail: req.body.Emaail,
      website: req.body.website,
      profileImage: req.file.filename,
    });
    const saveData = await newData.save();
    res.json({
      status: "success",
      message: "successfully added",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//update organizer
app.put("/update/:id", async (req, res) => {
  try {
    const updateData = await OrganizerModel.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (updateData.nModified === 0) {
      return res.status(404).json({ error: "No organizer updated" });
    }
    res.json({
      status: "success",
      message: "successfully updated",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//delete organizer
app.delete("/delete/:id", async (req, res) => {
  try {
    const deleteData = await OrganizerModel.deleteOne({ _id: req.params.id });
    if (deleteData.deletedCount === 0) {
      return res.status(404).json({ error: "No organizer deleted" });
    }
    res.json({
      status: "success",
      message: "successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// total organizer
app.get("/total", async (req, res) => {
  try {
    const totalorganizer = await OrganizerModel.find().countDocuments();
    res.send({ totalorganizer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
