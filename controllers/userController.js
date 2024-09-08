const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
//@desc Get all users
//@route GET /api/users
//@access Public
const getUsers  = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users);
});

//@desc Create user
//@route POST /api/users
//@access Public
const createUser = asyncHandler(async (req, res) => {
    console.log("The request body is ", req.body)
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await User.create({name, email, password});
    res.status(201).json(user);
});

//@desc Get user
//@route GET /api/users/:id
//@access Public
const getUser = asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404)
        throw new Error("User not found");
    }
    res.status(200).json(user);
});

//@desc Update user
//@route PUT /api/users/:id
//@access Public
const updateUser = asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404)
        throw new Error("User not found");
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedUser);
});

//@desc Delete user
//@route DELETE /api/users/:id
//@access Public
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("User not found");
    }

    await User.findByIdAndDelete(req.params.id); // Edited line
    res.status(200).json(user);
});

module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
};

