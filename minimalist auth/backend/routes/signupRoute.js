const express = require('express')
const userModel = require('../models/userSchema')

registerRouter = express.Router()

registerRouter.post('/register', async (req,res,next)=>{
    console.log(req.body)
    try{
        const {firstName, lastName, email, password} = req.body
        const user = await userModel.findOne({email})
        if(user){
            return res.status(400).json({
                "message": "user already registred"
            })
    
        }
        const newUser = new userModel({firstName, lastName, email, password})
        try{
            await newUser.save();
            res.status(100).json({
                "message": "user created successfully"
            })

        }catch(error){
            res.status(500).json({ message: 'Internal server error' });













        }
        
    }catch(error){

    }
    
})

module.exports = registerRouter