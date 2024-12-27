'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const serverless = require('serverless-http');


const usersHandler = require('../users/route');

// Middlewares
app.use(bodyParser.json());

// Mount user routes to '/user/v1' path
app.use('/v1', usersHandler);

app.all('*', (req, res) => {
    res.status(404).send('Page Not found 404'); 
});
app.use((err, res, req, next) => {
     console.log("err>>>>>>>",err)
    errorHandler(err, req, res);
});



// Export the app as serverless handler
module.exports.handler = serverless(app);
