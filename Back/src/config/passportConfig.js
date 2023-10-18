const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const AdminModel = require('../models/adminModels');
const passport = require('passport');
const bcrypt = require('bcryptjs');

module.exports = function (passport) {
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile, 'profile')
            const newUser = {
                googleId: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value
            }
            try {
                let user = await AdminModel.findOne({ googleId: profile.id })
                if (user) {
                    done(null, user)
                } else {
                    user = await AdminModel.create(newUser)
                    done(null, user)
                }
            } catch (err) {
                console.error(err)
            }
        }
    )   
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        AdminModel.findById(id, (err, user) => done(err, user))
    })
}
