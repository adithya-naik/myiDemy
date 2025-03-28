const express = require("express");
const router = express.Router();
const teamMemberController = require("../controllers/teamMember-contoller");


router.route("/getAll").get(teamMemberController.fetchTeamMembers);

module.exports = router;