"use strict";
const constant = require("../../config/constant");
const { CommonHelper } = require("../../util/common.helper");
const { TutorService } = require("./../services/index");

class TutorController {

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



  createTutor = async (req, res, next) => {
    try {
      console.log(req.body, "req.body")
      const response = await TutorService.createTutorProfile(req.body);
      return CommonHelper.sendSuccess(res, true, constant.STATUS_CODE.HTTP_200_OK, "Successfully Register Tutors" , );
    } catch (e) {
      next(e);
      console.error('Error in sign-in:', e);
      return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_500_INTERNAL_SERVER_ERROR, e);
    }
  }

  fetchTutors =async (req, res, next) => {
    try {
      const response = await TutorService.fetchTutorProfiles();
      return CommonHelper.sendSuccess(res, true, constant.STATUS_CODE.HTTP_200_OK, "Successfully fetched Tutors" , response);
    } catch (e) {
      next(e);
      console.error('Error in sign-in:', e);
      return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_500_INTERNAL_SERVER_ERROR, e);
    }
  }




  tutorBooking =async (req, res, next) => {
    try {
      const response = await TutorService.Tutorbooked(req.body);
      return CommonHelper.sendSuccess(res, true, constant.STATUS_CODE.HTTP_200_OK, "Successfully booked Tutors" , );
    } catch (e) {
      next(e);
      console.error('Error in sign-in:', e);
      return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_500_INTERNAL_SERVER_ERROR, e);
    }
  }
}





module.exports = new TutorController();
