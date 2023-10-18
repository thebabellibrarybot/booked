const express = require('express');
const router = express.Router();
const { getAdmin, postAdmin, putAdmin, deleteAdmin } = require('../controllers/adminControllers');

// get user info
router.get('/getAdmin/:id', getAdmin);

// create user
router.post('/postAdmin', postAdmin);

// update user
router.put('/putAdmin/:id', putAdmin);

// delete user
router.delete('/deleteAdmin/:id', deleteAdmin);
 
module.exports = router; 