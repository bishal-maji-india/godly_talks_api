// expertController
const asyncHandler = require("express-async-handler");
const Expert = require("../models/expertModel");

//@desc Register Experts
//@route POST /api/experts/register
//@access public
const registerExpert = asyncHandler(async (req, res) => {  const {
    phone, name, gender, address, city, location, pincode,
    experience, charge, language, profile_pic
  } = req.body;

  if (!phone || !name || !gender || !address || !city || !pincode ||
    !experience || !charge ||  
    !language || !profile_pic || !location) {
      res.status(400);
      throw new Error("All fields are required");
  
  }

  let expert = await Expert.findOne({ phone });

  if (!expert) {
    expert = await Expert.create({
      name, phone, gender, address, city, pincode,
      experience, charge, language,
      profile_pic, location, 
    });
  }
  res.status(200).json({ status: "success", data: expert });
});

module.exports = { registerExpert };
