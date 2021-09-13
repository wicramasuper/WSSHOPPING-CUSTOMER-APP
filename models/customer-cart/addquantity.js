const mongoose= require('mongoose'); //import mongoose

// initiating a copy of mongoose schema with our schema
const Schema= mongoose.Schema;
 const qschema= new mongoose.Schema({
       
       itemname:{
           type: String,
       } ,
       userid:{
         type:  String,
       },
       losequantity:{
           type:Number,
       } ,
       prequantity:{
            type:Number,
       },
 })

 

 //convert schema to model
 const addquantity=mongoose.model("addquantity", qschema);
 
//export model
module.exports=addquantity;

//var routes = require('./routes/shoppingcart');