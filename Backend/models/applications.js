const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const ApplicationrModel = mongoose.Schema(
  {
    orgName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    orgType: { type: String, required: true },
    profilePicture: { type: String, required: true }, // For storing images
    website: { type: String, default: "none" },
    whyOrganizer: { type: String, required: true },
    motivation1: { type: String, required: true },
    motivation2: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, enum: ["pending", "approved","rejected"], default: "pending" },
  },
  { timestamps: true }
);
ApplicationrModel.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
module.exports = mongoose.model("Applications", ApplicationrModel);
