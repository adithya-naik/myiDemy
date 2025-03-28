const Testimonial = require("../models/testimonial-schema");

const getAllTestimonials = async (req, res) => {
  try {
     const response = await Testimonial.find();
     if (!response) {
       res.status(200).json({ data: "No data found" });
     }
     res.status(200).json({ response });
   } catch (error) {
     console.log("Error in getting services list : ", error);
   }
 };
 
 module.exports = { getAllTestimonials };