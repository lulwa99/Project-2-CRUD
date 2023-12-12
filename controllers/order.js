//API / Functions
const { Cart } = require('../models/Cart');
const {Order}=require('../models/Order')

const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime)
//create
exports.order_create_get=(req,res) => { 
    res.render("order/addO");
}


exports.order_create_post=(req,res) => { 
   Cart.findOne({userId:req.user._id})
   .then(cart =>{
      let order = new Order({
         name:"Order",
         startDate: Date.now(),
         status:"Pending",
         products:cart.products
      });
      // save order
      order.save()
      .then(()=>{
         cart.products = []
         cart.save().then(
            ()=>res.redirect('/order/indexO')
         )
          
      })
      .catch(err=>{
          console.log(err);
      })
      
   })
   // console.log(req.body);
   // let order = new Order(req.body);
   .catch(err=>{
       console.log(err);
   })


           
      
}

exports.order_index_get=(req,res) => { 
 Order.find().populate('products')
 .then((corder)=>{
    res.render("order/indexO",{corder,dayjs});
 })
 .catch((err)=>{
    console.log(err);
    
 });


}

exports.order_show_get=(req,res) => { 
console.log(req.body.id);
Order.findById(req.query.id)
  .then((sorder)=>{
    res.render("order/detailO",{sorder})
  })
  .catch((err)=>{
    console.log(err);
  })
}

exports.order_edit_get=(req,res) => {
   console.log(req.query.id) 
 Order.findById(req.query.id)
 .then((editorder)=>{
   console.log(editorder)
   res.render("order/editO",{editorder});
   
 })
 .catch((err)=>{
    console.log(err);
   
 })

}

exports.order_delete_get=(req,res) => { 
   Order.findByIdAndDelete(req.query.id)
.then(()=>{
    res.redirect("/order/indexO");
})
.catch((err)=>{
    console.log(err)
    res.send("please try again later !!");
})

}

exports.order_update_post= (req,res) => { 
 Order.findByIdAndUpdate(req.body.id,req.body)
     .then(()=>{
        res.redirect("/order/indexO");
     })
     .catch(err =>{
        console.log(err);
       
     })
}