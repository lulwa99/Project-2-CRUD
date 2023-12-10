// API / functions

exports.index_get = (req,res) =>{
    res.render("Home/index",{
        message:"Welcome to Online Shop"
    })
}