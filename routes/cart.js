// express 

const express = require('express')

// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));

const cartCntrl = require('../controllers/cart')
// create get 


router.get("/add"/*, isLoggedIn*/, cartCntrl.cart_create_get);

// create post 

router.post("/add"/*, isLoggedIn*/, cartCntrl.cart_create_post)



// index get 


router.get("/index", cartCntrl.cart_index_get)

// show get 


router.get("/detail", cartCntrl.cart_show_get)


// edit get 


router.get("/edit", cartCntrl.cart_edit_get)


// delete get 


router.get("/delete", cartCntrl.cart_delete_get)



// update put 


router.post("/update", cartCntrl.cart_update_put)


//export router
module.exports = router;

