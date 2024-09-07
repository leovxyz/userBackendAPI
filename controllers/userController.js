const asyncHandler = require('express-async-handler');
//@desc Get all users
//@route GET /api/users
//@access Public
const getUsers  = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get all users"});
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
    res.status(201).json({message: "Create user"});
});

//@desc Get user
//@route GET /api/users/:id
//@access Public
const getUser = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Get user for ${req.params.id}`});
});

//@desc Update user
//@route PUT /api/users/:id
//@access Public
const updateUser = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update user for ${req.params.id}`});
});

//@desc Delete user
//@route DELETE /api/users/:id
//@access Public
const deleteUser = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete user for ${req.params.id}`});
});

module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
};

