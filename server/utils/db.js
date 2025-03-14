const mongoose = require("mongoose")
// to use this we need to use env middleware(and we need to config it) in server as same as json middleware
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async ()=>{
  try {
    await mongoose.connect(MONGO_URI);
    console.log("\n\n\n\nDB Connected Successfully !! 😊")
  } catch (error) {
    console.log("\n\nError in Connecting to DB 💀" , error);
    process.exit(0);
  }
}


module.exports = connectDB;