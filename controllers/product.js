//API / Functions
const {Product}=require('../models/Product')
const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime);

//CRUD Operations
//HTTP Post - Create - post the data
//HTTP Get - Read - retrives the data
//HTTP PUT/POST - Update - updates the data
//HTTP DELETE/GET/POST - Delete - Deletes the data

exports.product_create_get=(req,res) => { 
    res.render('product/addP');
}


exports.product_create_post=(req,res) => { 
console.log(req.body);
let product = new Product(req.body);

product.save()
.then(()=>{
    res.redirect('/product/indexP')
})
.catch(err=>{
    console.log(err);
})

}

exports.product_index_get=(req,res) => { 
    Product.find()
    .then(allProducts=>{
        res.render('product/indexP',{allProducts,dayjs})
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.product_show_get=(req,res) => { 

    Product.findById(req.query.id)
    .then(singleProduct=>{
        res.render('product/detailP',{singleProduct,dayjs})
    })
    .catch(err=>{
        console.log(err);
    })

}

exports.product_edit_get=(req,res) => { 
Product.findById(req.query.id)
.then(editProduct=>{
    res.render('product/editP',{editProduct})
})
.catch(err=>{
    console.log(err);
})

}

exports.product_delete_get=(req,res) => { 
Product.findByIdAndDelete(req.query.id)
.then(()=>{
    res.redirect('/product/indexP');
})
.catch(err=>{
    console.log(err);
})

}

exports.product_update_put=(req,res) => { 
Product.findByIdAndUpdate(req.body.id,req.body)
.then(()=>{
    res.redirect('/product/indexP');
})
.catch(err=>{
    console.log(err);
})

}