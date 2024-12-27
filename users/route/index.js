"use strict";
const express = require("express");
const router = express.Router();
const { UserController } = require("../controller");
const TokenMiddleware = require("../../middleware/token.middleware");
const { userRequestSchema } = require("../request-schema/index")



router.post("/userRegister", userRequestSchema.validate(userRequestSchema.createUserSchema()),
    UserController.signIn);

router.post("/login", userRequestSchema.validate(userRequestSchema.loginUserSchema()),
    UserController.login);

router.get("/user-profile",TokenMiddleware.authorize, userRequestSchema.validate(userRequestSchema.UserSchema()),
    UserController.fetchProfile);


module.exports = router