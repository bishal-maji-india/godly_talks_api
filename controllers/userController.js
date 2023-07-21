// User controller
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt=require("jsonwebtoken");

//@desc Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { phone,otp } = req.body;
   //here we will match the user opt -backend otp validation
 

  if (!phone || !otp) {
    res.status(400);
    throw new Error("All fields are required");
    // return res.status(400).json({ success: false, message: "Something is missing in your request" });
  }

//now here we will check the opt from the backend
  let user = await User.findOne({ phone });

  if (!user) {
    res.status(500);
    throw new Error("Failed to add a new user");
  //  return res.status(500).json({ success: false, message:"Failed to add a new user"});
  }
  if(user.otp!=otp){
    return res.status(401).json({ success: false, message:"OTP did not matched"});
  }

  accessToken=jwt.sign({
    user:{
      id:user.id,
      phone:user.phone,
      name:user.name,
     
    }
  },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"5m"});

 res.status(200).json({ success: true, data:accessToken});
});

//@desc  Current User
//@route Get /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  // Fetch the current user information (you can add the logic here)
  const currentUserData = req.user;
  res.status(200).json({ status: "success", data: currentUserData });
});

module.exports = { currentUser, loginUser };
