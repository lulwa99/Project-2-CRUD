// express 
const express = require('express');
// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));


//require index controller
const productCtrl = require('../controllers/product');

// create get 

router.get("/add" /*, isLoggedIn*/, productCtrl.product_create_get);

// create post 

router.post("/add"/*, isLoggedIn*/, productCtrl.product_create_post)



// index get 


router.get("/index", productCtrl.product_index_get)

// show get 


router.get("/detail", productCtrl.product_show_get)


// edit get 


router.get("/edit", productCtrl.product_edit_get)


// delete get 


router.get("/delete", productCtrl.product_delete_get)



// update put 


router.post("/update", productCtrl.product_update_put)



module.exports = router;

