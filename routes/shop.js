// express 

const express = require('express')

// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));


//require index controller
const shopCntrl = require('../controllers/shop');

// create get 


router.get("/addS"/*, isLoggedIn*/, shopCntrl.shop_create_get);

// create post 

router.post("/addS"/*, isLoggedIn*/, shopCntrl.shop_create_post)



// index get 


router.get("/indexS", shopCntrl.shop_index_get)



// show get 


router.get("/detailS", shopCntrl.shop_show_get)


// edit get 


router.get("/editS", shopCntrl.shop_edit_get)


// delete get 


router.get("/deleteS", shopCntrl.shop_delete_get)



// update put 


router.post("/updateS", shopCntrl.shop_update_put)



module.exports = router;

