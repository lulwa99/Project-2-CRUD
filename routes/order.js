// express 

const express = require('express');

// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));


//require index controller
const orderCntrl = require('../controllers/order');

// create get 


router.get("/add"/*, isLoggedIn*/, orderCntrl.order_create_get);

// create post 

router.post("/add"/*, isLoggedIn*/, orderCntrl.order_create_post)



// index get 


router.get("/index", orderCntrl.order_index_get)

// show get 


router.get("/detail", orderCntrl.order_show_get)


// edit get 


router.get("/edit", orderCntrl.order_edit_get)


// delete get 


router.get("/delete", orderCntrl.order_delete_get)



// update put 


router.post("/update", orderCntrl.order_update_put)

//export router
module.exports = router;

