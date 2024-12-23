'use strict'
const serverless = require('serverless-http');
const app = require('../server')
const { errorHandler } = require('../middleware/error.middleware');

app.use("/loan/v1", require("./route"));
// The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
    res.send('Page Not found 404', 404);
});
app.use((err, req, res, next) => {
    console.log(err, "err>>>>>>")
    errorHandler(err, res, req);
});

module.exports.handler = serverless(app);