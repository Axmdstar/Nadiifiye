const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcrypt");
const path = require("path");
const ApplicationModel = require("../models/applications");
const UserModel = require("../models/User");
const OrganizerModel = require("../models/Organizers");
const sendEmail = require("../utils/mail");

app.use(express.json());
app.use(cors());

// Image upload configuration
const imageLocation = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/ApplicationProfileImages");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadimg = multer({ storage: imageLocation });

// Routes
// Get all applications
app.get("/", async (req, res) => {
  try {
    const allApplications = await ApplicationModel.find();
    res.status(200).json(allApplications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single application by ID
app.get("/:id", async (req, res) => {
  try {
    const application = await ApplicationModel.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update application by ID
app.put("/:id", async (req, res) => {
  try {
    const updatedApplication = await ApplicationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json({
      message: "Application updated successfully",
      data: updatedApplication,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete application by ID
app.delete("/:id", async (req, res) => {
  try {
    const deletedApplication = await ApplicationModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json({
      message: "Application deleted successfully",
      data: deletedApplication,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new application
app.post(
  "/addaplicant",
  uploadimg.single("profilePicture"),
  async (req, res) => {
    try {
      const newData = new ApplicationModel({
        orgName: req.body.orgName,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        orgType: req.body.orgType,
        profilePicture: req.file.filename,
        website: req.body.website,
        whyOrganizer: req.body.whyOrganizer,
        motivation1: req.body.motivation1,
        motivation2: req.body.motivation2,
        username: req.body.username,
        password: req.body.password,
      });
      const saveData = await newData.save();
      res.json({
        status: "success",
        message: "successfully created",
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);
// Example of backend routes for application approval and rejection
app.put("/approve/:id", async (req, res) => {
  try {
    const application = await ApplicationModel.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    application.status = "approved";
    await application.save();
    // If the user exists, update their status to "active"
    const user = await UserModel.findOne({ email: application.email });
    if (user) {
      user.status = "active";
      await user.save();
    }
    // If the organization exists, update their status to "approved"
    const organization = await OrganizerModel.findOne({
      Emaail: application.email,
    });
    if (organization) {
      organization.status = "approved";
      await organization.save();
    }
    // Save user data to users table if it doesn't already exist
    const existingUser = await UserModel.findOne({ email: application.email });
    if (!existingUser) {
      const newUser = new UserModel({
        username: application.username,
        email: application.email,
        password: application.password,
        status: "active",
      });
      await newUser.save();
    }

    // Save application data to organizer table if it doesn't already exist
    const existingOrganizer = await OrganizerModel.findOne({
      Emaail: application.email,
    });
    if (!existingOrganizer) {
      const newOrganizer = new OrganizerModel({
        Name: application.orgName,
        Phone: application.phone,
        Address: application.address,
        Emaail: application.email,
        orgType: application.orgType,
        website: application.website,
        profileImage: application.profilePicture,
        status: "approved",
      });
      await newOrganizer.save();
    }

    res.status(200).json({ message: "Application approved successfully" });
    await sendEmail({
      to: application.email, // Replace with applicant's email
      subject: "Application Approved",
      text: " Congratulations, your application has been approved. now you can login using your email and password",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/reject/:id", async (req, res) => {
  try {
    const application = await ApplicationModel.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    if (application.status === "rejected") {
      return res
        .status(400)
        .json({ message: "Application is already rejected" });
    }

    application.status = "rejected"; // Update status to rejected
    await application.save();

    // Check if the user exists in the users table
    const user = await UserModel.findOne({ email: application.email });
    if (user) {
      user.status = "inactive"; // Update user status to inactive
      await user.save();
    }

    // Check if the organization exists in the organizer table
    const organization = await OrganizerModel.findOne({
      Emaail: application.email,
    });
    if (organization) {
      organization.status = "rejected"; // Update organization status to rejected
      await organization.save();
    }

    res.status(200).json({ message: "Application rejected successfully" });
    const applicantEmail = application.email; // Assuming email is a property of the applicant object
    await sendEmail({
      to: applicantEmail, // Replace with applicant's email
      subject: "Application Rejected",
      text: "Your application has been rejected. We apologize for any inconvenience.",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
