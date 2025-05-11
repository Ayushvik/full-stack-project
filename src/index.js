//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import express from "express"
import app from "./app.js"
// import mongoose from "mongoose"
// import {DB_NAME} from "./constants"
import connectDB  from "./db/index.js"
//in the new version of node you don't need to add the path to config the dotenv file 
dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
         
      
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed!!",error)
})









/*
import express from ",/express"
const app = express()

(async()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_UR}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
      })

      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
      })
    } catch(error){
        console.error("ERROR:",error)
        throw error
    }
})()*/