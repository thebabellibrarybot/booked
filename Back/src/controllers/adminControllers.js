//const TombModel = require('../data_models/tombModel');
//const PageModel = require('../data_models/tombPage');

// get 
const getAdmin = (req, res) => {
    res.send('got admin')
}

// post
const postAdmin = (req, res) => {
    res.send('post admin')
}

// put
const putAdmin = (req, res) => {
    res.send('put admin')
}

// delete
const deleteAdmin = (req, res) => {
    res.send('delet admin')
}

module.exports = {
    getAdmin,
    postAdmin,
    putAdmin,
    deleteAdmin
}