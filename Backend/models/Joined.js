const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const JoinedModel = mongoose.Schema({
    CampaignId: {
        type: String,
        required: true,
    },
    CampaignName: {
        type: String,
        required: true,
    },
    OrganizerName: {
        type: String,
        required: true,
    },
    VolunteerId: {
        type: String,
        required: true,
    },
    VolunteerName: {
        type: String,
        required: true,
    },
    Attended:{
        type: Boolean,
        default: false
    }
},{ timestamps: true }
)

module.exports = mongoose.model("Joineds", JoinedModel);