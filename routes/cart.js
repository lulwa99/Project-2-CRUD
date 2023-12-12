// express 

const express = require('express')

// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));

const cartCntrl = require('../controllers/cart')
// create get 


router.get("/addC"/*, isLoggedIn*/, cartCntrl.cart_create_get);

// create post 

router.post("/addC"/*, isLoggedIn*/, cartCntrl.cart_create_post)



// index get 


router.get("/indexC", cartCntrl.cart_index_get)

// show get 


router.get("/detailC", cartCntrl.cart_show_get)


// edit get 


router.get("/editC", cartCntrl.cart_edit_get)


// delete get 


router.get("/deleteC", cartCntrl.cart_delete_get)



// update put 


router.post("/updateC", cartCntrl.cart_update_put)


//export router
module.exports = router;

