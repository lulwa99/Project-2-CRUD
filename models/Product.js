//moongose dependancy
const mongoose = require('mongoose');

//schema initilizing

const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    image:String,
    description:String, //text area
    reviews:String, // should be array & a seperate model
    category:String, // should be array & a seperate model
    details:String, // text area / size and weight for example
},{
    timestamps:true,
}
);
// create model
const Product = mongoose.model('Product',productSchema);

//export model
module.exports = {Product};