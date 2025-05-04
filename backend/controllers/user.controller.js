const users=require('../db/model/user')
const bcrypt=require('bcryptjs');
let {validationResult}= require('express-validator')
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
let signinUser= async (req,res)=>{
    let error= validationResult(req).errors;
    if(error && error.length)
    {
        return res.status(400).json({success:false,message:error[0].msg})
    }
    try {
        let body=req.body;
        let user=await users.findOne({email: body.email});
        if(!user)
        {
            return res.status(400).json({success:false, message:"User not found"})
        }
        const isPasswordMatched= await bcrypt.compare(body.password, user.password)
        console.log(isPasswordMatched)
        if(!isPasswordMatched)
        {
            return res.status(404).json({success:false, message:"Incorrect password"});
        }
        const payload={
            userId:user._id,
            name:user.name
        }
        const secretToken=process.env.SECRET_TOKEN;
        jwt.sign(payload,secretToken,{
            expiresIn:3600
        }, (err,token)=>{
            if(err)
            {
                res.status(500).json({success:false,message:err.message})
            }
            res.status(200).json({success:true, token:token})
        })  
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

let signupUser= async (req,res)=>{
    let error= validationResult(req).errors;
    let body=req.body;
    if(error && error.length)
    {
        return res.status(400).json({success:false, message:error[0].msg})
    }
    console.log(error)
    let existingUser= await users.findOne({
        email:body.email
    })
    console.log(existingUser)
    if(existingUser && Object.keys(existingUser).length)
    {
        return res.status(400).json({success:false, message:"User already signed up"})
    }
    const salt=await bcrypt.genSalt(11);
    try {
        let newUser= new users({
            name: body.name,
            email: body.email,
            password: await bcrypt.hash(body.password, salt),
            phone: body.phone
        })
        await newUser.save();
        return res.status(201).json({success:true, message:"User Signed up"})
    } catch (error) {
        return res.status(500).json({success:false, message:error})
    }
}

let signoutUser=()=>{
    console.log("Post")
}

let updateUser=()=>{
    console.log("Patch")
}

let deleteUser=()=>{
    console.log("Delete")
}

module.exports={signinUser, signoutUser, updateUser, deleteUser, signupUser}