const express=require("express");
const router=express.Router();
const { loginUser,currentUser} = require("../controllers/userController");

router.post("/login",loginUser);
router.get("/current",currentUser);
module.exports=router;