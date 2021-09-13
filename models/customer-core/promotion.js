const mongoose = require('mongoose');


const promotionSchema = new mongoose.Schema({

    promoImage:{
        data:Buffer,
        contentType:String

    },
    },{timestamps:true});
    
    module.exports = mongoose.model("promotion",promotionSchema);