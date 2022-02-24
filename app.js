const express = require("express");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const app = express();




// app.use(bodyParser.json());
app.use(express.json());
 app.use(cookieParser());


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