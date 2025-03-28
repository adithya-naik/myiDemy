const express = require("express");
const router = express.Router();
const testimonialController = require("../controllers/testimonial-controller");


router.route("/getAll").get(testimonialController.getAllTestimonials);

module.exports = router;