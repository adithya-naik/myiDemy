const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  service: { type: String, required: true }, // Course Name
  description: { type: String, required: true }, // Course Description
  price: { type: String, required: true }, // Price Range (₹X - ₹Y)
  provider: { type: String, default: "MyiDemy" } // Provider (Default: MyiDemy)
});

module.exports = mongoose.model("Service", serviceSchema);
