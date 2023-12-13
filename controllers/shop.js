//API / Functions
//require models
const {Shop} = require('../models/Shop');

const {Product} = require('../models/Product');
const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime)

//CRUD Operations
//HTTP Post - Create - post the data
//HTTP Get - Read - retrives the data
//HTTP PUT/POST - Update - updates the data
//HTTP DELETE/GET/POST - Delete - Deletes the data

// render the page with all prodcts
exports.shop_create_get=(req,res) => { 
    Product.find()
    .then(prd=>{
        res.render('shop/addS',{prd});
    })
    .catch(err=>{
console.log(err);
    })
}


// create the shop
exports.shop_create_post = (req,res)=> {

    console.log(req.body); 

    let shop = new Shop(req.body)
    // if an image is uploaded otherwise set as default image
    if(req.file){
    shop.image = req.file.filename;
    } 
    else{
        shop.image = "default.png"
    }
    // save Shop
    shop.save()
    .then ( () => { 
    res.redirect("/shop/indexS")

})

.catch((err) => { 

    console.log(err); 

    res.send("Please try again later!!")
})

} 
// display all shops
exports.shop_index_get=(req,res) => { 

    Shop.find().populate('products')

    .then((shop) => { 
        res.render("shop/indexS", {shop,dayjs})
    })
.catch(err=>{
    console.log(err);
})
}
//display one shop
exports.shop_show_get=(req,res) => { 

    console.log(req.query.id);


    Shop.findById(req.query.id).populate('product')

    .then((shop) => { 
        res.render("shop/detailS", {shop})
    })

    .catch ((err)=> { 

        console.log(err);
    })

}

// edit get shop information
exports.shop_edit_get=(req,res) => { 

    Shop.findById(req.query.id).populate('products')
    .then((shop) => { 
        Product.find()
        .then(prd=>{
            res.render("shop/editS", {shop,prd})
        })
        .catch(err=>{
            console.log(err);
        })
        
    })

    .catch (err => { 


        console.log(err);
    })



}

//delete shop
exports.shop_delete_get=(req,res) => { 

    console.log(req.query.id);

    Shop.findByIdAndDelete(req.query.id)

    .then(() => { 


        res.redirect("/shop/indexS");
    })

    .catch((err) => { 

        console.log(err);
    })

}

//update the shop
exports.shop_update_put=(req,res) => { 
    //if there exist a image in post request change it
    if(req.file){
    req.body.image = req.file.filename;
    }
    Shop.findByIdAndUpdate (req.body.id, req.body)
    .then (() => { 

        res.redirect("/shop/indexS")
    })
    .catch ((err) => { 

        console.log(err);
    })



}