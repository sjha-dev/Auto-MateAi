import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const protect =async (req,res,next)=>{
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(404).json({message:"Unauthorized"})
        }
        const decoded=jwt.verify(token,Process.env.JWT_SECRET)
        const user=await user.findById(decoded.userId)
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        req.user=user
        next()
        
    } catch (error) {
        return res.status(500).json({message:`protect middleware error ${error}`})
        
    }
}

export default protect