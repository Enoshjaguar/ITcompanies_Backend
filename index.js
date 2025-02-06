const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const companyroutes = require('./Routes/companyroutes')
const app = express()
dotenv.config()
const port = process.env.PORT
const mongourl = process.env.MONGO_URI
app.listen(port,()=>{
    console.log("server initiated and running at",port)
})
app.use(express.json())
app.use(cors())
app.use('/company',companyroutes)
app.use("/public", express.static(path.join(__dirname, "public")));

mongoose.connect(mongourl)
    .then(()=>{
        console.log("database connected successfullly")
    })
    .catch((err)=>{
        console.log("failed to connect to database",err)
    })