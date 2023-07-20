const express = require('express');
const { route } = require('../routes/userRoutes');
const connectDB = require('./config/ConnectionDb');
const errorHandler = require('./middleware/errorHandler');
const dotenv=require("dotenv").config();
const router=express.Router();

const app = express();
const port=process.env.PORT || 5006;

connectDB();

 // or any port of your choice
app.use(express.json());
router.get("/",(req,res)=>{
    res.send("app is running");
})
router.post("/api/users",require("./routes/userRoutes"));
router.post("/api/experts",require("./routes/expertRoute"));
router.post("/api/otp", require("./routes/otpRoutes")); 
// app.use(errorHandler);
app.use('/.netlify/functions/api',router);



// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
//192.168.43.197- for android app in place of localhost

//express async handler install