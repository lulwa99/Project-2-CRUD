// mongoose dependanciy
const mongoose = require('mongoose');
require('dotenv').config();

// connection to the monogoDb cloud database
mongoose.connect(process.env.DATABSEURL)
.then(()=>{
    const db = mongoose.connection
    console.log(`MongoDB connected to DB ${db.name} at host ${db.host} at port ${db.port}!`);
})
.catch((err)=>{
    console.log('MongoDB not connected '+err);
})