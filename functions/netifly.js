const express = require('express');
const app = express();
const usersHandler = require('../users/handler');  
const tutorHandler = require('../tutor/handler');  
const BookingHandler = require('../booking/handler');  

exports.handler = async function(event, context) {
    if (event.path.startsWith('/.netlify/functions/netifly/user')) {
        return usersHandler.handler(event, context);  
    } else if(event.path.startsWith('/.netlify/functions/netifly/tutor')) {
        return tutorHandler.handler(event, context);  
    } else if(event.path.startsWith('/.netlify/functions/netifly/booking')) {
        return BookingHandler.handler(event, context);  
    }

    return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Not Found' }),
    };
};
