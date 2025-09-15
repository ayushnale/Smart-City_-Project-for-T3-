// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.js";

const app = express()

dotenv.config({
    path: './.env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000,() => {
        console.log(`server running on PORT :${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`MONGODB Connection failed!!!\n`, err)
})