// expertController
const asyncHandler = require("express-async-handler");
const Expert = require("../models/expertModel");

//@desc Register Experts
//@route POST /api/experts/register
//@access public
const registerExpert = asyncHandler(async (req, res) => {  const {
    phone, name, gender, address, city, location, pincode,
    experience, charge, language, profile_pic, profile_galary
  } = req.body;

  if (!phone || !name || !gender || !address || !city || !pincode ||
    !experience || !charge || !profile_galary ||
    !language || !profile_pic || !location) {
    return res.status(400).json({ status:"error", message:"All fields are required" });
  }

  let expert = await Expert.findOne({ phone });

  if (!expert) {
    expert = await Expert.create({
      name, phone, gender, address, city, pincode,
      experience, charge, profile_galary, language,
      profile_pic, location, coins: 5, total_order: 10,
      total_sms: 0, total_calls: 0, live_id: "",
    });
  }
  res.status(200).json({ status: "success", data: expert });
});

module.exports = { registerExpert };
