const mongoose = require("mongoose");
const expertSchema = mongoose.Schema({
    phone: {
        type: Number,
        required: [true, "Phone number is required"],
        unique: [true, "Phone Number should be unique"],
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    gender: {
        type: String,
        required: [true, "Gender is required"],
        description: 'dskj',
    },

    address: {
        type: String,
        required: [true, "Address is required"],
        description: 'dskj',
    },
    city: {
        type: String,
        required: [true, "City is required"],
        description: 'dskj',
    },
    pincode: {
        type: Number,
        required: [true, "Pincode is required"],
        description: 'dskj',
    },

    experience: {
        type: Number,
        required: [true, "Experience is required"],
    },
    charge: {
        type: Number,
        required: [true, "Chargable amount is required"],
    },
  
    language: {
        type: [String],
        required: [true, "At least one language is required"],
        validate: {
          validator: function (value) {
            return value && value.length > 0;
          },
          message: "At least one language is required",
        },
      },
    profile_pic: {
        type: String,
        required: [true, "Profile is required"],
        description: 'dskj',
    },
    profile_galary: {
        type: [String],
        default:null,
    },
    location: {
        type: [Number], // Array of two numbers: [longitude, latitude]
       required:true,
        index: '2d', // Index for supporting 2D geospatial queries or simply double value
      },
    coins: {
        type: Number,
        description: 'dskj',
        default:5,
    },  
    total_order: {
        type: Number,
        description: 'dskj',
        default:0,
    },
    total_sms: {
        type: Number,
        description: 'dskj',
        default:0,

    },
    total_calls: {
        type: Number,
        description: 'dskj',
        default:0,

    },
    
    live_id: {
        type: String,
        description: 'dskj',
        default:null,
    },
    is_active:{
        type: Boolean,
        description: "expert is active or not",
        default: false,
    },
    is_godly_employee:{
        type: Boolean,
        description: "is that expert an eployee of this org.",
        default:false,
    }

},
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("experts", expertSchema); 