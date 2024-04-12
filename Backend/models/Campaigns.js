const mongoose = require("mongoose");

const CampaignsModel = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Organizer: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  DateTime : {
    type: Date,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  NumOfPeople: {
    type: Number,
    required: true
  },
  Image: {
    type: String,
    required: true
}
}, { timestamps: true });
module.exports = mongoose.model("Campaigns", CampaignsModel);



