const mongoose = require("mongoose");

const VolunteerModel = mongoose.Schema(
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
    TypeOfInterest: {
      type: String,
      required: true,
    },
    numOfEvent: {
      type: Number,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Volunteers", VolunteerModel);
