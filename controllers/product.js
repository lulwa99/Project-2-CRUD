//API / Functions
const {Product}=require('../models/Product')
const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime');
const { default: mongoose } = require('mongoose');
dayjs.extend(relativeTime);

//CRUD Operations
//HTTP Post - Create - post the data
//HTTP Get - Read - retrives the data
//HTTP PUT/POST - Update - updates the data
//HTTP DELETE/GET/POST - Delete - Deletes the data

//render product page
exports.product_create_get=(req,res) => { 
    res.render('product/addP');
}

//update the prodcut
exports.product_create_post=(req,res) => { 
console.log(req.body);
let product = new Product(req.body);
console.log(req.file);
// req.file.filename += ".jpg"

//if there exist a file upload otherwise set as default
if(req.file){
product.image = req.file.filename;
}
else{
    product.image = "default.png"
}
product.save()
.then(()=>{
    res.redirect('/product/indexP')
})
.catch(err=>{
    console.log(err);
})

}

// view all products 
exports.product_index_get=(req,res) => { 
    Product.find()
    .then(allProducts=>{
        res.render('product/indexP',{allProducts,dayjs})
    })
    .catch(err=>{
        console.log(err);
    })
}

// view one product
exports.product_show_get=(req,res) => { 

    Product.findById(req.query.id)
    .then(singleProduct=>{
        res.render('product/detailP',{singleProduct,dayjs})
    })
    .catch(err=>{
        console.log(err);
    })

}

//render the product edit page with the correct data
exports.product_edit_get=(req,res) => { 
Product.findById(req.query.id)
.then(editProduct=>{
    res.render('product/editP',{editProduct,dayjs})
})
.catch(err=>{
    console.log(err);
})

}

// delete product
exports.product_delete_get=(req,res) => { 
Product.findByIdAndDelete(req.query.id)
.then(()=>{
    res.redirect('/product/indexP');
})
.catch(err=>{
    console.log(err);
})

}
// update the product
exports.product_update_put=(req,res) => {
    //if there exist an image upload
    if(req.file){
        req.body.image = req.file.filename;
        }
Product.findByIdAndUpdate(req.body.id,req.body)
.then(()=>{
    res.redirect('/product/indexP');
})
.catch(err=>{
    console.log(err);
})

}


