//mongoose depandency
const mongoose = require('mongoose');

//schema create
const cartSchema= mongoose.Schema({
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
},{
    timestamps:true
}
);

//create model
const Cart = mongoose.model('Cart',cartSchema);

//export
module.exports={Cart};