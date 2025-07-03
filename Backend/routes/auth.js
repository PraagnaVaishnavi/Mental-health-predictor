const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router=express.Router();

router.post("/signup",async (req,res)=>{
  const {email,password}=req.body;
 try{ const isexistemail=await User.findOne({email});
  if(isexistemail)
    return res.status(400).json({msg:"User already exists!"});
    const hashedPW=await bcrypt.hash(password,10);
    const newUser=new User({email,password:hashedPW});
    await newUser.save();
    return res.status(200).json({msg:"Success"});
}
    catch(error){
  res.status(500).json({ msg: "Server error" });
    }
});
  
router.post('/signin',async (req,res)=>{
    const {email,password}=req.body;
    try{const user=await User.findOne({email});
    if(!user)return res.status(400).json({ msg: "User not found" });
    const isMatch=await bcrypt.compare(password,user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
    res.json({token});}
    catch(error){
        res.status(500).json({ msg: "Server error" });
    }
})
module.exports=router;