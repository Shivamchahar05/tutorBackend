"use strict";
const constant = require("../../config/constant");
const { CommonHelper } = require("../../util/common.helper");
const { UserService } = require("./../services/index");

class UserController {

  /**
   * @swagger
   * /user/v1/country-code:
   *   get:
   *     description: To fetch the result of countries list
   *     tags:
   *       - auth
   *     produces:
   *       - application/json
   *
   *
   *     responses:
   *       200:
   *         description: To fetch the result of countries list
   */
  signIn = async (req, res, next) => {
    try {
      console.log(req.body, "req.body")
      const response = await UserService.signInUser(req.body);

      return CommonHelper.sendSuccess(res, true, constant.STATUS_CODE.HTTP_200_OK, "Successfully Registred User");
    } catch (e) {
      next(e);
      console.error('Error in sign-in:', e);

      return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_500_INTERNAL_SERVER_ERROR, e);
    }
  }


  login = async (req, res, next) => {
    try {
      console.log(req.body, "req.body")
      const response = await UserService.loginUser(req.body);

      return CommonHelper.sendSuccess(res, true, constant.STATUS_CODE.HTTP_200_OK, "Successfully Login User", response);
    } catch (e) {
      next(e);
      console.error('Error in sign-in:', e);
      res.status(500).json({ message: 'Internal Server Error', error: e });

      // return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_500_INTERNAL_SERVER_ERROR, e);
    }
  }


  fetchProfile= async (req, res, next) => {
    try {
      const response = await UserService.userProfile(req.body);

      return CommonHelper.sendSuccess(res, true, constant.STATUS_CODE.HTTP_200_OK, "Successfully fetch User profile", response);
    } catch (e) {
      next(e);
      console.error('Error in sign-in:', e);
      return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_500_INTERNAL_SERVER_ERROR, e);
    }
  }

}

module.exports = new UserController();
