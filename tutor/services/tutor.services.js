'use strict';
const Tutor = require('../../config/modals/tutors-modal');
const TutorBooked = require('../../config/modals/tutor-booked-modal');

const { CommonHelper } = require('../../util/common.helper');
const { JWTHelper } = require('../../util/jwt.token.helper');


class TutorService {

    createTutorProfile = async (data) => {
        try {
            const existingTutor = await Tutor.findOne({ phoneNumber: data.phoneNumber });
            if (existingTutor) {
                throw new Error("Tutor Already register")
            }
            const result = await Tutor.create(data);
            return result
        } catch (e) {
            throw e
        }
    }


    fetchTutorProfiles = async () => {
        try {
            const result = await Tutor.find();
            return result
        } catch (e) {
            throw e
        }
    }


    

    Tutorbooked = async (data) => {
        try {
            const result = await TutorBooked.create(data);
            return result
        } catch (e) {
            throw e
        }
    }

}

module.exports = new TutorService();
