const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Twilio Auth Token
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio Phone Number
const client = twilio(accountSid, authToken);

// @desc Send OTP
// @route POST /api/otp/send
// @access public
const sendOTP = asyncHandler(async (req, res) => {
  const phone = req.body.phone;

  if (!phone) {
    return res.status(400).json({ status: "error", message: "Something is missing in your request" });
  }

  // Generate a random OTP (you can use your own OTP generation logic)
  const otp = Math.floor(1000 + Math.random() * 9000);

  try {
    // Send OTP via Twilio
    await client.messages.create({
      body: `Your OTP for Godly Talks is: ${otp}`,
      from: twilioPhoneNumber,
      to: phone,
    });
    
// now here we  will create a new user 
  let user = await User.findOne({ phone });

  if (!user) {
    user = await User.create({
      name:"",
      phone,
      otp,
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
  res.json({ success: true, message: otp });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message});
  }
});
module.exports = { sendOTP};
