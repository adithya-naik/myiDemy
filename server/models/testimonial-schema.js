const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
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
  initials: {
    type: String,
    required: true,
    maxlength: 2
  },
  bgColor: {
    type: String,
    default: 'bg-blue-100'
  },
  textColor: {
    type: String,
    default: 'text-blue-600'
  },
  quote: {
    type: String,
    required: true,
    maxlength: 500
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);