"use strict";
require("dotenv").config();
const env = process.env.NODE_ENV || 'dev';
const config = require(`./${env}.config`);
module.exports = config;
