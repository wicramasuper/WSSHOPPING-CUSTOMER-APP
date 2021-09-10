const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

//middleware
const morgan = require('morgan');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());



//import the routes
const homeRoute = require('./routes/customer-core/home');
//routes middlware
app.use("/",homeRoute);


const port = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database connection established");
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});


//demo changing

//branch changing