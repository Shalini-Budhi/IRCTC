const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB)
    console.log("Mongodb connected successfully....")
  } catch (error) {
    console.log("Mongodb connected NOT successfully....")
    process.exit(1)
  }
}
module.exports=connectToDb;