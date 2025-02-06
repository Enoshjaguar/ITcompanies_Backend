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



app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true, 
    })
  );
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
 
app.use('/company',companyroutes)
app.use("/public", express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));
