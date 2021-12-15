const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const chalk = require('chalk');
const port = process.env.PORT || 7676;
const home = require('./controllers/homerouter');
const products = require('./controllers/products');
const bodyParser = require('body-parser');
//set the view engine
app.set('view engine','ejs');

//set morgan as a middleware to have it log messages to the console on different routes
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(home);
app.use('/products',products);

app.listen(port,()=>{
    console.log(`Listening on port: ${chalk.blue.italic.bold(port)}`)
})