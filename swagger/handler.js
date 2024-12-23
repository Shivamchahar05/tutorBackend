'use strict'
const serverless = require('serverless-http');
const app = require("../server");
const swagger = require("../swagger");

swagger(app);

app.listen(4000, ()=> {
    console.log("App listen at port 4000")
});

module.exports.handler = serverless(app);
