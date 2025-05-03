const express=require('express')
const {check} = require('express-validator')
const {signinUser, signoutUser, updateUser, deleteUser, signupUser}=require('../controllers/user.controller');
let userRouter=express.Router();

userRouter.post('/signin', signinUser)
userRouter.post('/signup', [check('email').notEmpty().withMessage("Email is required").isEmail().withMessage("Please enter a valid email"), check('password').not().isEmpty().isStrongPassword()] , signupUser)
userRouter.get('/signout', [check('email').notEmpty().withMessage("Email is required").isEmail().withMessage("Enter a valid email"), check('password').not().isEmpty().isStrongPassword()],signoutUser)
userRouter.get('/delete',deleteUser)
userRouter.get('/update',updateUser)

module.exports={userRouter}