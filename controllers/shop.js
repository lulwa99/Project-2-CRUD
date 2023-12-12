//API / Functions

const {Shop} = require('../models/Shop');

const {Product} = require('../models/Product');
const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime)

exports.shop_create_get=(req,res) => { 


    Product.find()
    .then(prd=>{
        res.render('shop/addS',{prd});
    })
    .catch(err=>{
console.log(err);
    })



}


// post here stop

exports.shop_create_post = (req,res)=> {

    console.log(req.body); 

    let shop = new Shop(req.body)
    
    shop.image = req.file.filename;
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

exports.shop_index_get=(req,res) => { 

    Shop.find().populate('products')

    .then((shop) => { 


        res.render("shop/indexS", {shop,dayjs})
    })
.catch(err=>{
    console.log(err);
})




}

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

exports.shop_edit_get=(req,res) => { 

    Shop.findById(req.query.id).populate('products')
    .then((shop) => { 

        res.render("shop/editS", {shop})
    })

    .catch (err => { 


        console.log(err);
    })



}

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

exports.shop_update_put=(req,res) => { 
    req.body.image = req.file.filename;
    Shop.findByIdAndUpdate (req.body.id, req.body)
    .then (() => { 

        res.redirect("/shop/indexS")
    })
    .catch ((err) => { 

        console.log(err);
    })



}