const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    name:{
        type: String,
        description: 'dskj',

    },
    phone:{
        type: Number,
        required: [true,"Phone number is required"],
        unique:[true,"Phone Number should be unique"],
    },
    gender:{
        type: String,
        description: 'dskj',

    },
    dob:{
        type: String,
        description: 'dskj',
    },
    pob:{
        type: String,
        description: 'dskj',
    },
    tob:{
        type: String,
        description: 'dskj',
    },
    address:{
        type: String,
        description: 'dskj',
    },
    city:{
        type: String,
        description: 'dskj',
    },
    pincode:{
        type: Number,
        description: 'dskj',
    },
    image:{
        type: String,
        description: 'dskj',
    },
    coins:{
        type: Number,
        description: 'dskj',
    },


},
{
    timestamps: true,
}
);
module.exports=mongoose.model("users",userSchema); 