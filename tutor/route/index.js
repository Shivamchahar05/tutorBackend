"use strict";
const express = require("express");
const router = express.Router();
const { TutorController } = require("../controller");
const TokenMiddleware = require("../../middleware/token.middleware");
const { tutorRequestSchema } = require("../request-schema")


router.post("/tutor", tutorRequestSchema.validate(tutorRequestSchema.createTutorSchema()),
    TutorController.createTutor);


router.get("/tutor",
    TutorController.fetchTutors);

router.post("/booked-tutor", TokenMiddleware.authorize, tutorRequestSchema.validate(tutorRequestSchema.tutorBookingSchema()),
    TutorController.tutorBooking);


module.exports = router