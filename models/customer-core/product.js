const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    item_image:{
        data:Buffer,
        contentType:String

    },
    },{timestamps:true});
    
    module.exports = mongoose.model("web-products",productSchema);