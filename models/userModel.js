const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     username: {
         type: String,
         required: [true, "Please add a username"]
     },
     email: {
         type: String,
         required: [true, "Please add an email"]
     },
     password: {
         type: String,
         required: [true, "Please add a password"]
     }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('User', userSchema);