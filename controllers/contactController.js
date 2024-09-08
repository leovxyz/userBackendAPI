const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts  = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
});

//@desc Create contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is ", req.body)
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const contact = await Contact.create({name, email, password});
    res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);/// latest, 
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id); // Edited line
    // await Contact.remove();
    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    createContact,          
    getContact,
    updateContact,                                                         
    deleteContact
};

// change to contactController.js
