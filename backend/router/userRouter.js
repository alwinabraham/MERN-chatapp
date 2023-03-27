const express = require('express')
const User = require('../models/userModel');
const { registerUser,authUser } = require('../controllers/userControllers')

const router=require('express').Router();

router.route('/').post(registerUser)
router.post('/login',authUser)

  // router.post('/register',async(req,res)=>{
  //   console.log(req.body);
  //   console.log('reached');
  //    try {
         
  //   const{name,email,password}=req.body
  //     const newUser= new User({
  //       name,
  //       email,
  //       password
  //     })
  //     const user=await newUser.save()
  //    console.log('user',user);
  //     res.send('user inserted')
  //    } catch (error) {
  //       console.log(error);
  //        res.send(error)
  //    }
  // })

  module.exports=router