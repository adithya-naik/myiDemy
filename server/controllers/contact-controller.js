const Contact = require("../models/contact-schema");
const { validationResult } = require("express-validator");

const contact = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  
  // If there are validation errors, return them
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false,
      errors: errors.array()
    });
  }

  try {
    const data = req.body;
    await Contact.create(data);
    res.status(201).json({ 
      success: true,
      msg: "Message sent successfully!" 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    // 500 - internal server error
    res.status(500).json({ 
      success: false,
      msg: "Message sending failed. Please try again later." 
    });
  }
};

module.exports = { contact };