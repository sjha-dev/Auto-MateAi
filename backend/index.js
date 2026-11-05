import express from "express" 
import dotenv from "dotenv"
import connectDb from "./config/db.js"

dotenv.config()

const app=express()
const port=process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.json("message hello how are you all !! ")
})

app.listen(port,()=>{
    connectDb()
    console.log("server started at",port)
})
