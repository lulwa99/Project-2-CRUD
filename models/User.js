const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId:{
        type: String,
        require: true
    },
    email: String,
    avatar: String
},{
    timestamps: true

});

//Export
module.exports = mongoose.model('User',userSchema);