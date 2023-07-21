const { json } = require('express');
const express = require('express');
const connectDB = require('./config/ConnectionDb');
const errorHandler = require('./middleware/errorHandler');
const dotenv=require("dotenv").config();

const app = express();
const port=process.env.PORT || 5006;

connectDB();

 // or any port of your choice
app.use(express.json());
// app.use("/",(req,res)=>{
//   res.send("sob thick ache, request pathaw");
// });
app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/experts",require("./routes/expertRoute"));
app.use("/api/otp", require("./routes/otpRoutes")); 
app.use(errorHandler);


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
//192.168.43.197- for android app in place of localhost

//express async handler install