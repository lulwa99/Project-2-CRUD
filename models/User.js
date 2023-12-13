//require mongoose
const mongoose = require('mongoose');
// define a Schema based on mongoose schema
const Schema = mongoose.Schema;

//create user schema
const userSchema = new Schema({
    name: String,
    googleId:{
        type: String,
        require: true
    },
    email: String,
    avatar: String,
    userType:String,
},{
    timestamps: true

});

//make a model out of schema
const User = mongoose.model('User',userSchema);

//Export
module.exports = {User};
