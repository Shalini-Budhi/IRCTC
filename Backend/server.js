const express = require("express");
const connectToDb = require("./Config/db");
const cors = require('cors');
require("dotenv").config();

const authRoute = require('./Routes/authRoute.js')
const app = express()
connectToDb()
app.use(cors())
app.use(express.json())
const port = process.env.PORT

app.use('/api/v1',authRoute)
app.listen(port,()=>{
  console.log("Server Is Rinning....",port)
})
