// const mongoose = require("mongoose");

// const teamMemberSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   role: { type: String, required: true },
//   image: { type: String, required: true },
//   bio: { type: String, required: true },
//   expertise: { type: [String], default: [] }, // Array of expertise fields
// });

// const TeamMember = mongoose.model("TeamMember", teamMemberSchema);
// module.exports = TeamMember;



// models/TeamMember.js
const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    default: function() {
      return `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(this.name)}`;
    }
  },
  bio: {
    type: String,
    required: true
  },
  expertise: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);

module.exports = TeamMember;