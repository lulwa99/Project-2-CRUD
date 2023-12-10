// express 

const express = require('express')

// create get 


router.get("/add" /*, isLoggedIn*/, prdCntrl.prd_create_get);

// create post 

router.post("/add"/*, isLoggedIn*/, prdCntrl.prd_create_post)



// index get 


router.get("/index", prdCntrl.prd_index_get)

// show get 


router.get("/detail", prdCntrl.prd_show_get)


// edit get 


router.get("/edit", prdCntrl.prd_edit_get)


// delete get 


router.get("/delete", prdCntrl.prd_delete_get)



// update put 


router.post("/update", prdCntrl.prd_update_put)



module.exports = router;

