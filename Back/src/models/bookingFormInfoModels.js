const mongoose = require('mongoose');

const bookingFormInfoSchema = new mongoose.Schema({
    adminId: { type: String, required: true, unique: true },
    tattooInfo: { type: Object, required: true },
    adminInfo: { type: Object, required: true },
    themesInfo: { type: Object, required: true },
    calendarInfo: { type: Object, required: true },
});

const BookingFormInfoModel = mongoose.model('bookingFormInfo', bookingFormInfoSchema);

module.exports = BookingFormInfoModel;