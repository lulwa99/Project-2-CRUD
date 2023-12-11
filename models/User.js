const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

//
const User = mongoose.model('User',userSchema);

//Export
module.exports = {User}