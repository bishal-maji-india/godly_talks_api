const { default: mongoose } = require("mongoose");
const paymentsSchema=mongoose.Schema({
    user_payment_id: {
        type:Number,
        required:true,
},


})