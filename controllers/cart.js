// API / Functions
const {Cart} = require('../models/Cart');

const {Product} = require('../models/Product')

//CRUD Operations
//HTTP Post - Create - post the data
//HTTP Get - Read - retrives the data
//HTTP PUT/POST - Update - updates the data
//HTTP DELETE/GET/POST - Delete - Deletes the data

// create the cart
exports.cart_create_get=(req,res) => { 
    let addProduct = req.query.id;
    // each user have one cart get the user cart
    Cart.findOne({userId:req.user._id})
    .then(cr=>{
        // if the user have a cart then push the data directly
        if (cr){
            cr.products.push(addProduct);

            cr.save()
        
            .then (() => { 
          
          
                res.redirect("/product/indexP")
            })
            
        }
        // if the user does not have a cart make a new one
        else{
            // console.log(addProduct);
        
            let cart = new Cart({userId:req.user._id})
        
            cart.products.push(addProduct);
            console.log(cart.products);
    
            cart.save()
        
            .then (() => { 
              res.redirect("/product/indexP")
          })
        }
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
   

// get the user cart
exports.cart_index_get=(req,res) => { 

 Cart.findOne({userId:req.user._id}).populate('products')

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


// delete a product from the cart
exports.cart_delete_get=(req,res) => { 

    console.log(req.query.id); 
    console.log("User"+req.user._id);
    Cart.findOne({userId:req.user._id})
   
    .then ((cart)=> {
        console.log("cart"+cart);
        for(let i=0;i<cart.products.length;i++){
            
            if(cart.products[i].toString()==req.query.id){
                console.log("Working");
                cart.products.splice(i,1);
            }
        }
        Cart.findByIdAndUpdate(cart._id,cart)
        .then(()=>{
            res.redirect("/cart/indexC"); 
        })
        .catch(err=>{
            console.log(err);
        })
    
    
    })
    
    .catch((err) => { 
    
        console.log(err);
    })
    
    }
    

exports.cart_update_put=(req,res) => { 
    console.log(req.body.id); 

    Cart.findByIdAndUpdate(req.body.id, req.body)

    .then (() => { 

        res.redirect("/cart/indexC")
    })

    .catch ((err) => { 

        console.log(err);
    })
}


