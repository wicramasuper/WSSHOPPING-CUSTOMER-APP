const mongoose= require('mongoose'); //import mongoose

// initiating a copy of mongoose schema with our schema
const Schema= mongoose.Schema;
 const shcartschema= new mongoose.Schema({
       
       itemname:{
           type: String,
       } ,
       userid:{
         type:  String,
       },
       quantity:{
           type:Number,
       } ,
       price:{
            type:Number,
       },
 })

 /*can write as,
 name:{
     type: String,
     required:true   //used as vallidator
 }, */ 

 //convert schema to model
 const shoppingcart=mongoose.model("shoppingcart", shcartschema );
 
//export model
module.exports=shoppingcart;

//var routes = require('./routes/shoppingcart');