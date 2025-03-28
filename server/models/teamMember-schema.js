const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  bio: { type: String, required: true },
  expertise: { type: [String], default: [] }, // Array of expertise fields
});

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);
module.exports = TeamMember;
