const express=require('express')
const {check} = require('express-validator')
const {signinUser, signoutUser, updateUser, deleteUser, signupUser}=require('../controllers/user.controller');
let userRouter=express.Router();

userRouter.post('/signin', [check('email').notEmpty().withMessage("Email is required").isEmail().withMessage("Please enter a valid email"), check('password').notEmpty()] , signinUser)
userRouter.post('/signup', [check('name').notEmpty().withMessage("Name is required"), check('email').notEmpty().withMessage("Email is required").isEmail().withMessage("Please enter a valid email"), check('password').notEmpty().isStrongPassword().withMessage('Password must be strong (uppercase, lowercase, number, symbol, min 8 chars)')] , signupUser)
userRouter.get('/signout',signoutUser)
userRouter.get('/delete',deleteUser)
userRouter.get('/update',updateUser)

module.exports={userRouter}