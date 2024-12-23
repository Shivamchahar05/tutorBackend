'use strict'
const express = require('express');
const app = express();
const cors = require("cors");
const language = require("i18n");
app.set("trust proxy", 2);
app.disable("x-powered-by");
app.use(cors({ origin: "*", credentials: true }));
const mongoConnect = require('./config/db.config')

language.configure({
    locales: ["en"],
    defaultLocale: "en",
    autoReload: true,
    directory: __dirname + "/locales",
    queryParameter: "lang",
    objectNotation: true,
    syncFiles: true,
});
app.use(language.init);

app.set('view engine', 'ejs');

// app.use('/payment/v1/webhook', express.raw({ type: 'application/json' }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// adding route for home page
app.get('/', (req, res) => {
    res.send('<center><h2><b>Hi, This is Dolled Up Service.<br><i> How can i help you ;)</i></b></h2></center>');
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const originalSend = res.send;
    res.send = function (data) {
        if (res.statusCode > 500) {
            console.error("************* Error on middleware ****************");
            console.error(" headers =>", JSON.stringify(req.headers));
            console.error(" path => ", req.path);
            console.error(" Authorization => ", req.headers?.access_token);
            console.error(" Query Params =>", req.query);
            console.error(" Request Body =>", req.body);
            console.error(" Error => ", data);
            console.error("************* Error on middleware ****************");
        }
        originalSend.call(this, data);
    };
    next();
});


process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
    const stack = err.stack;
    console.log("LOGGING ERROR  " + stack);
});

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

module.exports = app
