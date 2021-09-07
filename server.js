const express = require('express');

const mongoose = require('mongoose');
const bodyParser= require("body-parser");
const cors= require("cors");
const dotenv= require("dotenv");
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.json());

//const URL= process.env.MONGO_URL;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}).then(()=>{
    console.log("database connection established");
});

//shopping cart
const shoppingroute= require("./routes/customer-cart/shoppingcart.js");

app.use("/shoppingcart",shoppingroute); 

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})

//demo changing

//branch changing