//load express module
const express =require('express')

// initilize router functionality from express framework
const router=express.Router();

const passport= require('passport')

//require index controller
const indexCtrl = require('../controllers/index');

//routes

router.get('/',indexCtrl.index_get);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
      // Requesting the user's profile and email
      scope: ['profile', 'email'],
      prompt: "select_account"
      // Optionally force pick account every time
      // prompt: "select_account"
    }
  ));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/',
      failureRedirect: '/'
    }
  ));

// OAuth logout route
router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/');
    });
  });

//export router
module.exports =router;