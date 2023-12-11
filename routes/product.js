// express 
const express = require('express');
// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));


//require index controller
const productCtrl = require('../controllers/product');

// create get 

router.get("/addP" /*, isLoggedIn*/, productCtrl.product_create_get);

// create post 

router.post("/addP"/*, isLoggedIn*/, productCtrl.product_create_post)



// index get 


router.get("/indexP", productCtrl.product_index_get)

// show get 

router.get("/detailP", productCtrl.product_show_get)


// edit get 


router.get("/editP", productCtrl.product_edit_get)


// delete get 


router.get("/deleteP", productCtrl.product_delete_get)



// update put 


router.post("/updateP", productCtrl.product_update_put)



module.exports = router;

