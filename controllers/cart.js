
const {Cart} = require('../models/Cart');

const {Product} = require('../models/Product')

exports.cart_create_get=(req,res) => { 

    let addProduct = req.query.id;

    console.log(addProduct);

    let cart = new Cart()

    cart.products.push(addProduct);
console.log(cart.products);




    cart.save ()

  .then (() => { 


      res.redirect("/product/indexP")
  })

//   res.render('Cart/addC');

  .catch ((err) => 
    
  console.log(err)
  )}


exports.cart_create_post=(req,res) => { 

    console.log(req.body); 

    let cart = new Cart(req.body)


    // save Cart

    cart.save()

    .then ( () => { 

   

    res.redirect("/cart/indexC")

})

.catch((err) => { 

    console.log(err); 

    res.send("Please try again later!!")
})

} 
   


exports.cart_index_get=(req,res) => { 


    Cart.find().populate('products')

 .then((cart)=>{

    console.log(cart);
    
    res.render("cart/indexC",{cart});
 })
 .catch((err)=>{
    console.log(err);
    
 });


}


exports.cart_show_get=(req,res) => { 

    console.log(req.query.id);



Cart.findById(req.query.id).populate('product') 

.then((cart) => { 

res.render("cart/detailC", {cart})

})

.catch((err) => {

    console.log(err);

})


}


exports.cart_edit_get=(req,res) => { 


Cart.findById(req.query.id)

.then ((cart) => { 

    res.render("cart/editC", {cart})
})



.catch (err => { 

    console.log(err);
})

}



exports.cart_delete_get=(req,res) => { 



    console.log(req.query.id); 

    Cart.findByIdAndDelete(req.query.id)
    
    .then (()=> {
    
    res.redirect("/cart/indexC"); 
    
    })
    
    .catch((err) => { 
    
        console.log(err);
    })
    
    }
    

exports.cart_update_put=(req,res) => { 
    console.log(req.body.id); 

    Article.findByIdAndUpdate(req.body.id, req.body)

    .then (() => { 

        res.redirect("/cart/indexC")
    })

    .catch ((err) => { 

        console.log(err);
    })
}

