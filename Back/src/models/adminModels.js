const mongoose = require('mongoose');

const Schema = mongoose.Schema

const adminSchema = new Schema (
    {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String, required: false },
    theme: { type: String, required: false },
    adminId: { type: String, required: false },
    transactionId: { type: String, required: false },
    }
);

const AdminModel = mongoose.model('admindata', adminSchema);

module.exports = AdminModel;