const mongoose=require("mongoose");
const phoneUtil = require('libphonenumber-js'); // Require the library for phone number validation
const userSchema=mongoose.Schema({
    name:{
        type: String,
        description: 'dskj',
        default: null, 

    },
    phone: {
        type: String,
        required: [true,"Phone number is required"],
        validate: {
          validator: (value) => {
            try {
              const phoneNumber = phoneUtil.parsePhoneNumberFromString(value);
              return phoneNumber.isValid();
            } catch (error) {
              return false;
            }
          },
          message: (props) => `${props.value} is not a valid phone number`,
        },
      },
    gender:{
        type: String,
        description: 'dskj',
        default: null, 

    },
    dob:{
        type: String,
        description: 'dskj',
        default: null, 
    },
    pob:{
        type: String,
        description: 'dskj',
        default: null, 
    },
    tob:{
        type: String,
        description: 'dskj',
        default: null, 
    },
    address:{
        type: String,
        description: 'dskj',
        default: null, 
    },
    city:{
        type: String,
        description: 'dskj',
        default: null,  
    },
    pincode:{
        type: Number,
        description: 'dskj',
        default: null, 
    },
    image:{
        type: String,
        description: 'dskj',
        default: null, 
    },
    coins:{
        type: Number,
        description: 'dskj',
        default: 5, 
        
    },
    otp: { 
        type: String,
        default: null, // Store the OTP temporarily as null when not generated or sent
      },


},
{
    timestamps: true,
}
);
module.exports=mongoose.model("users",userSchema); 