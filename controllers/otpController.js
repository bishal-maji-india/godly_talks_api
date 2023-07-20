const asyncHandler = require("express-async-handler");
const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Twilio Auth Token
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio Phone Number
const client = twilio(accountSid, authToken);

// @desc Send OTP
// @route POST /api/otp/send
// @access public
const sendOTP = asyncHandler(async (req, res) => {
  const userPhoneNumber = req.params.phone; // User's phone number

  // Generate a random OTP (you can use your own OTP generation logic)
  const otp = Math.floor(1000 + Math.random() * 9000);

  try {
    // Send OTP via Twilio
    await client.messages.create({
      body: `Your OTP for Godly Talks is: ${otp}`,
      from: twilioPhoneNumber,
      to: userPhoneNumber,
    });

    res.json({ success: true, message: otp });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message});
  }
});

module.exports = { sendOTP };
