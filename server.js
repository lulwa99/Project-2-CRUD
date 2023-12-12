// Dependncies
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const expressLayouts = require('express-ejs-layouts')

//initialize express
const app = express()

app.use(expressLayouts)

// app.use(express.urlencoded({extended:true}));
app.use(express.json());

// dotenv configration
require('dotenv').config();

//NodeJS to look for all static files
app.use(express.static(__dirname + '/public'));

//port configration 
const port = process.env.PORT;

//Nodejs to look for all statice  file in public folder 
app.use(express.static("public"));

//passport model config
require('./config/passport');

//set up middleware
app.use(session ({
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized: true
}));

//initialize passport 
app.use(passport.initialize());
// request session information
app.use(passport.session());

app.use(function(req,res,next){
    console.log(req.user)
    res.locals.user = req.user;
    next();
});

//Nodejs to look into the folder called views for all the ejs files
app.set("view engine","ejs");

//Database configration
const db = require("./config/db");

//import Routes
const indexRouter = require("./routes/index");
const productRouter = require("./routes/product");
const shopRouter = require('./routes/shop');
const orderRouter =require('./routes/order');
const cartRouter = require('./routes/cart');
const multer = require("multer");
const upload = multer({ dest: "./public/images" });


//mount routes
app.use('/',indexRouter);
app.use('/product',productRouter);
app.use('/shop',shopRouter);
app.use('/order',orderRouter);
app.use('/cart', cartRouter);


//connection  to port
app.listen(port,() =>{
    console.log(`Construction app is running on ${port}`);
})




