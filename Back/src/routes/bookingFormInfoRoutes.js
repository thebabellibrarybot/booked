const express = require('express');
const router = express.Router();
const { getBookingFormInfo, putBookingFormInfo, postBookingFormInfo, deleteBookingFormInfo } = require('../controllers/bookingFormInfoController');

// get user info
router.get('/:id', getBookingFormInfo);

// put user info // will need to add an auth to this at some point
router.put('/:id', putBookingFormInfo);

// post user info // will need to add an auth to this at some point
router.post('/:id', postBookingFormInfo);

// delete user info // will need to add an auth to this at some point
router.delete('/:id', deleteBookingFormInfo);
 
module.exports = router; 