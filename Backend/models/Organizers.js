const mongoose = require("mongoose");

const OrganizerModel = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Emaail: {
      type: String,
      required: true,
    },
    orgType: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      default: "None",
    },
    profileImage: {
      type: String,
      required: true,
    },
    status: { type: String, enum: ["pending", "approved","rejected"], default: "approved" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Organizers", OrganizerModel);
