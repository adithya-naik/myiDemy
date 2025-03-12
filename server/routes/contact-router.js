const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact-controller");
const { body } = require("express-validator");

// Contact form validation middleware
const contactValidation = [
  body("message")
    .trim()
    .notEmpty().withMessage("Message is required")
    .isLength({ min: 10 }).withMessage("Message must be at least 10 characters long")
    .isLength({ max: 1000 }).withMessage("Message cannot exceed 1000 characters")
];

router.route("/contact").post(contactValidation, contactController.contact);

module.exports = router;