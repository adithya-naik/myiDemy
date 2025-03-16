const Service = require("../models/service-schema");
const mongoose = require("mongoose");


const Services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(200).json({ data: "No data found" });
    }
    res.status(200).json({ response });
  } catch (error) {
    console.log("Error in getting services list : ", error);
  }
};


const ServiceById = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the request parameters
    console.log("Received ID:", id); // Log the received ID

    // Convert the string ID to ObjectId using 'new'
    const response = await Service.findOne({ _id: new mongoose.Types.ObjectId(id) }); 

    if (!response) {
      console.log("No service found with this ID."); // Log if no service is found
      return res.status(404).json({ message: "No data found" }); // Return 404 if no service is found
    }

    res.status(200).json({ response }); // Return the found service
  } catch (error) {
    console.log("Error in getting service by ID: ", error);
    res.status(500).json({ message: "Internal server error" }); // Return 500 for server errors
  }
};


module.exports = { Services, ServiceById };