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


app.use(cors({
  origin: "https://it-companies-frontend.vercel.app/", // Allow requests from your Vercel frontend
  methods: ["GET", "POST"],
  credentials: true
}));

app.use('/company',companyroutes)
app.use("/public", express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));
