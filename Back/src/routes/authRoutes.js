const express = require('express');
const router = express.Router();
const passport = require('passport');

// @desc    Auth with google
// @route   GET /auth/google

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/admin')
})

module.exports = router;