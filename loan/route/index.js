"use strict";
const express = require("express");
const router = express.Router();
const { ExploreController } = require("../controller");
const TokenMiddleware = require("../../middleware/token.middleware");
const { ExploreRequestSchema } = require("../request-schema");
const { validateRequest } = require("../../middleware/schema.validator.middleware");
const {USER_TYPE_ID} = require("../../config/constant");


module.exports = router;
