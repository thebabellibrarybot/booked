const BookingFormInfoModel = require('../models/bookingFormInfoModels');
const AdminModel = require('../models/adminModels');

const getBookingFormInfo = async (req, res) => {

    console.log('getBookingFormInfo fired')

    const { id } = req.params;

    console.log(id, 'id from getBookingFormInfo at /bookingFormInfo/:id')

    try {
        const bookingFormInfo = await BookingFormInfoModel.findOne({ adminId: id });
        res.status(200).send({message: 'success', body: bookingFormInfo})
    } catch (error) {
        console.log(error, 'error from getBookingFormInfo at /bookingFormInfo/:id')
        res.status(400).send('error', error)
    }

}

const putBookingFormInfo = async (req, res) => {
    
    console.log('putBookingFormInfo fired')
    const { id } = req.params;
    const bookingFormInfo = {
        adminId: id,
        tattooInfo: req.body.tattooInfo,
        adminInfo: req.body.adminInfo,
        themesInfo: req.body.themesInfo,
        calendarInfo: req.body.calendarInfo,
    }
    const updatedBookingInfoForm = await BookingFormInfoModel.findOneAndUpdate({ adminId: id }, bookingFormInfo);
    res.status(200).send('bookingFormInfo updated', updatedBookingInfoForm)

}

const postBookingFormInfo = async (req, res) => {
        
    console.log('postBookingFormInfo fired')

    const bookingFormInfo = {
        adminId: req.body.adminId,
        tattooInfo: req.body.tattooInfo,
        adminInfo: req.body.adminInfo,
        themesInfo: req.body.themesInfo,
        calendarInfo: req.body.calendarInfo,
    }

    // check if adminId already exists for admin, if so update, if not create
    try {
        const bookingFormStatus = await BookingFormInfoModel.findOne({ adminId: req.body.adminId });
        if (bookingFormStatus) {
            console.log('bookingFormStatus exists, updating')
            const updatedBookingInfoForm = await BookingFormInfoModel.findOneAndUpdate({ adminId: req.body.adminId }, bookingFormInfo);
            res.status(200).send({message: 'bookingFormInfo updated', body: updatedBookingInfoForm})
        } else {
            console.log('bookingFormStatus does not exist, creating')
            const newBookingInfoForm = await BookingFormInfoModel.create(bookingFormInfo);
            res.status(200).send({message: 'bookingFormInfo created', body: newBookingInfoForm})
        }
    } catch (error) {
        console.log(error, 'error from postBookingFormInfo at /bookingFormInfo/:id')
        res.status(400).send('error', error)
    }
}

const deleteBookingFormInfo = async (req, res) => {
                
        console.log('deleteBookingFormInfo fired')
        const { id } = req.params;
        
        const deletedBookingFormInfo = await BookingFormInfoModel.findOneAndDelete({ adminId: id });
        res.status(200).send('bookingFormInfo deleted', deletedBookingFormInfo)
    
    }


module.exports = { getBookingFormInfo, putBookingFormInfo, postBookingFormInfo, deleteBookingFormInfo };