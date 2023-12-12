// express 
const express = require('express');
// initilize router functionality from express framework
const router=express.Router();

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


//IMPORTANT
router.use(express.urlencoded({extended:true}));


//require index controller
const productCtrl = require('../controllers/product');

// create get 

router.get("/addP" /*, isLoggedIn*/, productCtrl.product_create_get);

// create post 

router.post("/addP"/*, isLoggedIn*/,upload.single('image'), productCtrl.product_create_post)



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

