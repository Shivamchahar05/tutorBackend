'use strict'
const serverless = require('serverless-http');
const app = require('../server')
const { errorHandler } = require('../middleware/error.middleware');
// app.use("/booking/v1", require("./route"));

// app.get('*', (req, res) => {
//     res.send('Page Not found 404', 404);
// });
// app.use((err, res, req, next) => {
//      console.log("err>>>>>>>",err)
//     errorHandler(err, req, res);
// });
// module.exports.handler = serverless(app);

const handler = serverless(app);

module.exports.handler = async (event, context) => {
    console.log("Event in handler:", event); 
    return handler(event, context);  
}


