const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: { type: String, required: true },
    displayName: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    image: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    createdAt: { type: Date, required: false, default: Date.now }
});

const UserModel = mongoose.model('userdata', userSchema);

module.exports = UserModel;