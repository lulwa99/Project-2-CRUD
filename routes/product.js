// express 
const express = require('express');
// load the log in config
const isLoggedIn = require('../config/isLoggendin');
// initilize router functionality from express framework
const router=express.Router();

//require multer for images
const multer = require("multer");
// inititlizing multer storage from documentation
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //Setting the path for the images
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        //get the file extenstion from file mime type
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + extension)
    }
  })
  
  //using multer storage as an upload 
  const upload = multer({ storage: storage })


//IMPORTANT
router.use(express.urlencoded({extended:true}));


//require Product controller
const productCtrl = require('../controllers/product');

// create get 

router.get("/addP" , isLoggedIn, productCtrl.product_create_get);

// create post 

router.post("/addP", isLoggedIn,upload.single('image'), productCtrl.product_create_post)

// index get 

router.get("/indexP", productCtrl.product_index_get)

// show get 

router.get("/detailP", productCtrl.product_show_get)

// edit get 

router.get("/editP", isLoggedIn, productCtrl.product_edit_get)

// delete get 

router.get("/deleteP", isLoggedIn, productCtrl.product_delete_get)

// update put 

router.post("/updateP", isLoggedIn,upload.single('image'), productCtrl.product_update_put)

// export router
module.exports = router;

