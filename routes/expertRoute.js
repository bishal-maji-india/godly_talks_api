const express = require("express");
const router = express.Router(); // Corrected the variable name from expert_router to router
const { registerExpert } = require("../controllers/expertController");

router.post("/register", registerExpert);
// router.get("/current", currentUser);
module.exports = router; // Corrected the export variable name to router
