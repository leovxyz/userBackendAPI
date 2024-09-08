const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

//@desc Register new user
//@route GET /api/users/register
//@access Public
const registerUser  = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);        
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password is ", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    console.log(`User created is ${user}`);
    if(user) {
        res.status(201).json({_id: user.id, email: user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message: "Register the user"})
});

//@desc User login
//@route GET /api/users/login
//@access Public
const loginUser  = asyncHandler(async (req, res) => {
    res.json({message: "Login  user"})
});

//@desc Current user ifno
//@route GET /api/users/current
//@access Private
const currentUser  = asyncHandler(async (req, res) => {
    res.json({message: "Current user information"})
});

module.exports = {registerUser, loginUser, currentUser}
