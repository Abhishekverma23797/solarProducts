const express = require("express");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const app = express();



// app.use(bodyParser.json());
app.use(express.json());
//Routes import Product
const product = require('./routes/productRoute');
app.use('/api/v1',product);

//Middleware For Errors
app.use(errorMiddleware);

module.exports = app