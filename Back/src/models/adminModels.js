const mongoose = require('mongoose');

const Schema = mongoose.Schema

const adminSchema = new Schema (
    {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    transactionHistory: { type: Object, required: false },
    token: { type: String, required: false },
    theme: { type: String, required: false },
    }
);

const AdminModel = mongoose.model('userdata', adminSchema);

module.exports = AdminModel;