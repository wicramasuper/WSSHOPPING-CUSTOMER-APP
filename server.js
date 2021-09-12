const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
//const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//validations
const expressValidator = require('express-validator'); //i put this after
//middlewares
app.use(morgan('dev'));
//app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());  //i put here after
app.use(cors());
app.use (express.json());
app.use(express.urlencoded({extended:true}));


//import the routes
const authRoutes = require('./routes/user/auth');
const userRoutes = require('./routes/user/user');

//routes middleware
app.use('/api', authRoutes);  
app.use('/api', userRoutes);                        

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