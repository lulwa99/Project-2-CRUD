// express 

const express = require('express')

const isLoggedIn = require('../config/isLoggendin');

// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));

//import cart controller

const cartCntrl = require('../controllers/cart')
// create get 


router.get("/addC", isLoggedIn, cartCntrl.cart_create_get);

// create post 

router.post("/addC", isLoggedIn, cartCntrl.cart_create_post)

// index get 

router.get("/indexC", cartCntrl.cart_index_get)

// show get 

router.get("/detailC", cartCntrl.cart_show_get)

// edit get 

router.get("/editC", isLoggedIn, cartCntrl.cart_edit_get)

// delete get 

router.get("/deleteC", isLoggedIn, cartCntrl.cart_delete_get)

// update put 

router.post("/updateC", isLoggedIn, cartCntrl.cart_update_put)

//export router
module.exports = router;

