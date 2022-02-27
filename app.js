const express = require("express");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const app = express();




// 
app.use(express.json());
 app.use(cookieParser());
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(fileUpload());


//Routes import Product
const product = require('./routes/productRoute');
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoute');

app.use('/api/v1',product);
app.use('/api/v1',user);
app.use('/api/v1',order);

//Middleware For Errors
app.use(errorMiddleware);

module.exports = app