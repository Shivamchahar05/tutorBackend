'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const { appCheck } = require('firebase-admin');
const app = express();

const mongoConnect = require('../config/db.config')
const { errorHandler } = require('../middleware/error.middleware');



mongoConnect().then(async (db) => {
    // console.log(db, "db")
      if (db) {
  
        app.listen(3200, () => {
          console.log('Server is running on port 3000');
        });
    
        console.log('MongoDB connected successfully');
      } else {
        console.error('Failed to connect to database. Server not started.');
      }
    }).catch(err => {
      console.error('MongoDB connection error:', err);
      process.exit(1); 
    });
const userRoute = require('../tutor/route'); 

app.use(bodyParser.json());

app.use('/.netlify/functions/tutor/v1', userRoute);

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found 404');
});


app.use((err, res, req, next) => {
    console.log("err>>>>>>>",err)
   errorHandler(err, req, res);
});


module.exports.handler = serverless(app);
