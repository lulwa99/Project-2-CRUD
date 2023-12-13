// express 
const express = require('express')

const isLoggedIn = require('../config/isLoggendin');

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + extension)
    }
  })
  
  const upload = multer({ storage: storage })

// initilize router functionality from express framework
const router=express.Router();
//IMPORTANT
router.use(express.urlencoded({extended:true}));



//require index controller
const shopCntrl = require('../controllers/shop');

// create get 


router.get("/addS", isLoggedIn, shopCntrl.shop_create_get);

// create post 

router.post("/addS", isLoggedIn,upload.single('image'), shopCntrl.shop_create_post)



// index get 


router.get("/indexS", shopCntrl.shop_index_get)



// show get 


router.get("/detailS", shopCntrl.shop_show_get)


// edit get 


router.get("/editS", isLoggedIn, shopCntrl.shop_edit_get)


// delete get 


router.get("/deleteS", isLoggedIn, shopCntrl.shop_delete_get)



// update put 


router.post("/updateS", isLoggedIn,upload.single('image'), shopCntrl.shop_update_put)



module.exports = router;

