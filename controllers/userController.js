const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    // console.log("Hashed password is ", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    console.log(`New user created: ${user}`);
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
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({email});
    console.log("New login:", user);
    //Compare password with hashed password
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30m' } // expiry time
        );
        res.status(200).json({accessToken});
    } else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});

//@desc Current user ifno
//@route GET /api/users/current
//@access Private
const currentUser  = asyncHandler(async (req, res) => {
    console.log("Current user:", req.user);
    res.json(req.user);
});

module.exports = {registerUser, loginUser, currentUser}
