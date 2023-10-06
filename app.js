const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes');

//MiddleWears
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/register', userRoutes);


module.exports = app;

