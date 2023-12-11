const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const {User} = require('../models/User');

passport.use(new GoogleStrategy(
    //config
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    async function(accessToken,refreshToken,profile,cb){
        try{
            console.log("Google")
            //Look to see if the user exists
            let user = await User.findOne({
               googleId: profile._id
            });
            //if there is a user, return it
            if(user){
    console.log("user0", user)

                return cb(null,user);
            }else{
                //else, create a new User
                user = await User.create({
                    name: profile.displayName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value,
                    userType:"Admin"
                });
                // Return the new user
                return cb(null,user);
            }
        }catch(err){
            return cb(err);
        }
    }));

passport.serializeUser(function(user,cb){
    console.log("user", user)
    cb(null,user._id);  
});

passport.deserializeUser(async function(userId, cb){
    console.log("userId", userId)
    //It's nice to be able to use await in-line!
    cb(null,await User.findById(userId));
});