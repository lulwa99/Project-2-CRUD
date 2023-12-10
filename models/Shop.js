//moongose dependancy
const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name:String,
    email:String,
    phoneNumber:String,
    address:String,
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
},{
    timestamp:true
}
);

//creating model

const Shop=mongoose.model("Shop",shopSchema);

//export model
module.exports ={Shop}
