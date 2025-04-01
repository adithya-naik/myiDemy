const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,  // Changed to String to handle currency symbols
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  modeOfLearning: {
    type: String,
    required: true
  },
  overallRating: {
    type: Number,
    default: 0
  },
  totalReviews: {
    type: Number,
    default: 0
  },
  skillLevel: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', serviceSchema);