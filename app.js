const express = require("express");
const bodyParser = require("body-parser");

const app = express();



app.use(bodyParser.json());

//Routes import Product
const product = require('./routes/productRoute');
app.use('/api/v1',product);


module.exports = app