//API / Functions
const {Order}=require('../models/Order')
const{Cart}= require('../models/Cart')
const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
//create
exports.order_create_get=(req,res) => { 
    res.render("order/addO");
}


exports.order_create_post=(req,res) => { 
console.log(req.body);
let order = new Order(req.body);

// save order
order.save()
.then(()=>{
    req.body.order.forEach(cart => {
        Cart.findById(cart)
        .then((cart)=>{
            cart.order.push(order);
            cart.save();
        })
        .catch(err => {
            console.log(err)
        })
    })
    res.redirect("/order/indexO");
})
.catch((err)=>{
    console.log(err);
    res.send("please try again later!!")
})

}

exports.order_index_get=(req,res) => { 
 Order.find().populate('product')
 .then((order)=>{
    res.render("order/indexO",{order});
 })
 .catch((err)=>{
    console.log(err);
    res.render("order/indexO",{order:[]});
 });


}

exports.order_show_get=(req,res) => { 
console.log(req.query.id);
Order.findById(req.query.id).populate('product')
  .then((order)=>{
    res.render("product/detail",{order})
  })
  .catch((err)=>{
    console.log(err);
  })
}

exports.order_edit_get=(req,res) => { 
 order.findByIdAndUpdate(req.query.id).populate("product")
 .them((order)=>{
    res.render("/order/indeO",{order});
 })
 .catch((err)=>{
    console.log(err);
    res.redirect("/order/indexO");
 })

}

exports.order_delete_get=(req,res) => { 
order.findByIdAndDelete(req.query.id)
.then(()=>{
    res.redirect("/order/indexO");
})
.catch((err)=>{
    console.log(err)
    res.send("please try again later !!");
})

}

exports.order_update_put= (req,res) => { 
Order.findByIdAndUpdate(req.body.id,req.body)
     .then(()=>{
        res.redirect("/order/indexO");
     })
     .catch(err =>{
        console.log(err);
        res.redirect("/order/indeO");
     })
}