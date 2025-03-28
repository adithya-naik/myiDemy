const teamMember = require("../models/teamMember-schema");

const fetchTeamMembers = async (req, res) => {
  try {
    const response = await teamMember.find();
    if (!response) {
      res.status(200).json({ data: "No data found" });
    }
    res.status(200).json({ response });
  } catch (error) {
    console.log("Error in getting Team list : ", error);
  }
};

module.exports = { fetchTeamMembers };