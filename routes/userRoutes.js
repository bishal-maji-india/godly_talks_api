const express=require("express");
const router=express.Router();
const { loginUser,currentUser} = require("../controllers/userController");
const validateToken = require("../middleware/tokenValidationHandler");

router.post("/login",loginUser);
router.get("/current",validateToken,currentUser);
module.exports=router;