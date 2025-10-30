const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    refreshToken: String,
}, { timestamps: true});

const User = mongoose.model('User', UserSchema);
module.exports = User;