const Service = require("../models/service-schema");

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

module.exports = { Services };