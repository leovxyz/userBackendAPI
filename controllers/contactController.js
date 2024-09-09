const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
const mongoose = require('mongoose');
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts  = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

//@desc Create contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    // console.log("The request body is ", req.body);
    const {name, email, mobile} = req.body;
    if(!name || !email || !mobile) {
        res.status(400);
        throw new Error("All fields are mandatory");
    };      
    // Check if user is set
    if (!req.user) {
        res.status(401);
        throw new Error("User not authenticated");
    };
    const contact = await Contact.create({
        name,
        email,
        mobile,
        user_id: req.user.id
    });

    // Add a log message for successful contact creation
    console.log(`Contact created: ${contact.name} (ID: ${contact._id}) by ${req.user.username} (ID: ${req.user.id})`);

    res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contacts/id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // Validate if the id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error("Invalid contact ID");
    }

    const contact = await Contact.findById(id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Check if the contact belongs to the authenticated user
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to access this contact");
    }

    res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/id
//@access private
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id)  {
        res.status(403);
        throw new Error("User don't have perimisson to update others contacts");
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
    // Add a log message for successful contact update
    console.log(`Contact updated: ${updatedContact.name} (ID: ${updatedContact._id}) for user ${req.user.username} (ID: ${req.user.id})`);

    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id)  {
        res.status(403);
        throw new Error("User don't have perimisson to update others contacts");
    }

    await Contact.deleteOne({_id: req.params.id});
    
    // Add a log message for successful contact deletion
    console.log(`Contact deleted: ${contact.name} (ID: ${contact._id}) by ${req.user.username} (ID: ${req.user.id})`);

    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    createContact,          
    getContact,
    updateContact,                                                         
    deleteContact
};
