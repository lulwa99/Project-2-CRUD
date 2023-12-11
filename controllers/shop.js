//API / Functions

const {Shop} = require('../models/Shop');


exports.shop_create_get=(req,res) => { 

res.render('shop/addS');
}


// post here stop

exports.shop_create_post = (req,res)=> {

    console.log(req.body); 

    let shop = new Shop(req.body)


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
    res.render('shop/indexS')
}

exports.shop_show_get=(req,res) => { 

}

exports.shop_edit_get=(req,res) => { 

}

exports.shop_delete_get=(req,res) => { 

}

exports.shop_update_put=(req,res) => { 

}