const mongoose = require('mongoose');


const advertisementSchema = new mongoose.Schema({

    adImage:{
        data:Buffer,
        contentType:String

    },
    },{timestamps:true});
    
    module.exports = mongoose.model("advertisement",advertisementSchema);