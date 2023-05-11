const express = require('express')
const userModel = require('../models/userSchema')
const mongoose = require('mongoose');
const loginRouter = express.Router()

loginRouter.post('/login', async (req,res)=>{
    console.log(req.body)
    try{
            const {email, password } = req.body
            if(!email && !password){
                res.status(400).json({
                    "message": "username password not found"
                })
                }
            const user = await userModel.findOne({email})
            if (!user) {
                // User not found
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            const isPasswordValid = await user.comparePassword(password);

            if (!isPasswordValid) {
                // Invalid password
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            return  res.json(user);
    } catch(error){
        console.log(error)
    }
        
    })

module.exports= loginRouter