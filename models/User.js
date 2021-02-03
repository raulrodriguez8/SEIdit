const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be 5 characters or more'],
        },
        password: {
        type: String,
        requied: true,
        minlength: [8, 'Password must be 8 characters or more']
        },
    });
    
module.exports = mongoose.model('User', userSchema);