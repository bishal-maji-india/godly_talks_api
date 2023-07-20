// User controller
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ status: "error", message: "Phone number is required" });
  }

  let user = await User.findOne({ phone });

  if (!user) {
    user = await User.create({
      name:"",
      phone,
      gender: "",
      dob: "",
      pob: "",
      tob: "",
      address: "",
      city: "",
      pincode: 0,
      image: "",
      coins: 5,
    });
  }

  res.status(200).json({ status: "success", data: user });
});

//@desc Get Current User
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  // Fetch the current user information (you can add the logic here)
  const currentUserData = { /* Current user data */ };

  res.status(200).json({ status: "success", data: currentUserData });
});

module.exports = { currentUser, loginUser };
