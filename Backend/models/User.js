const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ["admin", "user"], default: "user" },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});
module.exports = mongoose.model("User", userSchema);
