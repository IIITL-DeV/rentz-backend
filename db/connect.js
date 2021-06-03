const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/project1",{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err)
    console.log("connected");
    else console.log("not connected");
})

module.exports = mongoose;