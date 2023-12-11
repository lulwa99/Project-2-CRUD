//API / Functions
const {Order}=require('../models/Order')

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
    res.redirect('/order/indexO')
})
.catch(err=>{
    console.log(err);
})

           
      
}

exports.order_index_get=(req,res) => { 
 Order.find()
 .then((corder)=>{
    res.render("order/indexO",{corder});
 })
 .catch((err)=>{
    console.log(err);
    
 });


}

exports.order_show_get=(req,res) => { 
console.log(req.query.id);
Order.findById(req.query.id)
  .then((sorder)=>{
    res.render("order/detailO",{sorder})
  })
  .catch((err)=>{
    console.log(err);
  })
}

exports.order_edit_get=(req,res) => { 
 order.findById(req.query.id)
 .them((editorder)=>{
    res.render("/order/editO",{editorder});
 })
 .catch((err)=>{
    console.log(err);
   
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
       
     })
}