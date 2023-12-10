// express 

const express = require('express')

// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));


//require index controller
const shopCntrl = require('../controllers/shop');

// create get 


router.get("/add"/*, isLoggedIn*/, shopCntrl.shop_create_get);

// create post 

router.post("/add"/*, isLoggedIn*/, shopCntrl.shop_create_post)



// index get 


router.get("/", shopCntrl.shop_index_get)

// show get 


router.get("/detail", shopCntrl.shop_show_get)


// edit get 


router.get("/edit", shopCntrl.shop_edit_get)


// delete get 


router.get("/delete", shopCntrl.shop_delete_get)



// update put 


router.post("/update", shopCntrl.shop_update_put)



module.exports = router;

