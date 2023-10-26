// basic app env
const express = require('express');
const cors = require('cors')
const { ServerApiVersion } = require('mongodb');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const corsOptions = require('./src/config/corsOptions');
const credentials = require('./src/middleware/credentials');
const mongoose = require('mongoose');
const passport = require('passport');
require('./src/config/passportConfig')(passport);
const session = require('express-session');

// app routes
// user routes
const bookingFormInfoRoutes = require('./src/routes/bookingFormInfoRoutes');
// auth routes
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

// basic app env 
const app = express();
const Port = process.env.PORT || 5000
console.log(Port, 'port')
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body, 'server msg from port')
    next()
});


// session midleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// passport midleware
app.use(passport.initialize());
app.use(passport.session());


// dev
// mongoDB conn
const uri = process.env.MONGO_URI 
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('md conn')
})

// routes admin \\
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// routes user \\
app.use('/bookingFormInfo', bookingFormInfoRoutes);

// serve static assests for production
/*
app.use(express.static('client/build')) 

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
*/

// port and clear run statements;
app.listen(Port, () => {
    console.log(`listening on ${Port}`)
});