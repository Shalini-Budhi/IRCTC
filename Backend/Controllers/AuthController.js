const bcrypt = require('bcrypt')
const User = require('../Model/User.js')
const jwt = require('jsonwebtoken')


const Register = async(req,res) =>{
  try {
    const{UserName,FullName,Password,Email,Mobile} = req.body
    if(!(UserName || FullName || Password || Email || Mobile)){
      return res.status(404).json({
        message : "Please Fill The All Details"
      })
    }
    const existingUser = await User.findOne({Email})
    if(existingUser){
      return res.status(401).json({
        message : "Email is Already Existing"
      })
    }
    const hashPassword = await bcrypt.hash(Password,10)
    const newUser = new User({
      UserName,FullName,Password:hashPassword,Email,Mobile
    })
    await newUser.save();
    return res.status(201).json({
      message : "User Is Successfully Register...",
      success : true
    })
  } catch (error) {
    console.log("Error while Registering",error.message)
    return res.status(500).json({
      message : "Internal Server Error"
    })
  }
}


const Login = async(req,res) =>{
  try {
    const {Email,Password} = req.body

    if(!(Email || Password)){
       return res.status(400).json({
        message:"Please Enter Email and Password...."
       })
    }

    const user = await User.findOne({Email})
    if(!user){
      return res.status(404).json({
        message:"User Not Found......"
      })
    }
    const token = jwt.sign({
      id:user._id,username:user.UserName
    },
    process.env.MYSCERETEKEY,{expiresIn:'2d'}
  )
  return res.status(200).json({
    message:"User login successfully Completed....",
    status:true,
    token
  })
  } catch (error) {
    console.log("Error",error.message)
    return res.status(500).json({
      message:"Internal Server Error....",
      status:false,
    })
  }
}
module.exports = {Register,Login}