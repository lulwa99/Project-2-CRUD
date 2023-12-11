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
exports.user_index_get=(req,res) =>{
    User.find()
    .then(alluser=>{
        res.render('user/indexU',{alluser})
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.user_show_get=(req,res) =>{
    User.findById(req.query.id)
    .then(Suser=>{
        res.render('user/detailU',{Suser})
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.user_edit_get=(req,res) =>{
    User.findById(req.body.id)
    .then(editUser=>{
        res.render('user/edit',{editUser})
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.user_delete_get=(req,res)=>{
    User.findByIdAndDelete(req.query.id)
    .then(()=>{
        res.redirect('/user/indexU');
    
    })
    .catch(err=>{
        console.log(err);
    })
}


exports.user_update_post=(req,res)=>{
    User.findByIdAndUpdate(req.body.id,req.body)
    .then(()=>{
        res.redirect('/user/indexU');
    })
    .catch(err=>{
        console.log(err);
    })
}
    



