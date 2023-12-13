//API / Functions
const {User}= require('../models/User')

//CRUD Operations
//HTTP Post - Create - post the data
//HTTP Get - Read - retrives the data
//HTTP PUT/POST - Update - updates the data
//HTTP DELETE/GET/POST - Delete - Deletes the data

exports.user_create_get=(req,res) =>{
    res.render('user/addU');
}

exports.user_create_post=(req,res)=>{
    let user = new User(req.body);
    user.save()
    .then(()=>{
        res.redirect('/user/indexU')
    })
    .catch(err=>{
        console.log(err);
    })
}

//get all useres in the system
exports.user_index_get=(req,res) =>{
    User.find()
    .then(alluser=>{
        res.render('user/indexU',{alluser})
    })
    .catch(err=>{
        console.log(err);
    })
}
// render one user information in page
exports.user_show_get=(req,res) =>{
    User.findById(req.query.id)
    .then(Suser=>{
        res.render('user/detailU',{Suser})
    })
    .catch(err=>{
        console.log(err);
    })
}

// render one user information to be edited in page
exports.user_edit_get=(req,res) =>{
    User.findById(req.query.id)
    .then(editUser=>{
        res.render('user/editU',{editUser})
    })
    .catch(err=>{
        console.log(err);
    })
}

//delete user
exports.user_delete_get=(req,res)=>{
    User.findByIdAndDelete(req.query.id)
    .then(()=>{
        res.redirect('/user/indexU');
    
    })
    .catch(err=>{
        console.log(err);
    })
}
// update user info
exports.user_update_put=(req,res)=>{
    console.log(req.body.xid);
    // if there is an image upload
    if(req.file){
    req.body.avatar = "/images/"+req.file.filename;
    }
    User.findByIdAndUpdate(req.body.xid,req.body)
    .then(()=>{
        res.redirect('/user/indexU');
    })
    .catch(err=>{
        console.log(err);
    })
}
    



