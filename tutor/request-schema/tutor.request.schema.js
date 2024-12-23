

const Joi = require('joi');
const { CommonHelper } = require("../../util/common.helper");
const constant = require('../../config/constant');

class TutorRequest {
    createTutorSchema() {
        return Joi.object({
            name: Joi.string().trim().required().messages({
                'string.empty': 'Name is required',
                'any.required': 'Name is required'
            }),
            specialization: Joi.string().trim().required().messages({
                'string.empty': 'Specialization is required',
                'any.required': 'Specialization is required'
            }),
            experienceYears: Joi.number().min(1).required().messages({
                'number.base': 'Experience years must be a number',
                'any.required': 'Experience years are required'
            }),
            phoneNumber: Joi.string().trim().required().pattern(/^[0-9]{10}$/).messages({
                'string.empty': 'Phone number is required',
                'string.pattern.base': 'Phone number must be a 10-digit number',
                'any.required': 'Phone number is required'
            }),
            email: Joi.string().trim().email().required().messages({
                'string.email': 'Invalid email format',
                'string.empty': 'Email is required',
                'any.required': 'Email is required'
            }),
            classes: Joi.array().items(
                Joi.object({
                    className: Joi.string().trim().required().messages({
                        'string.empty': 'Class name is required',
                        'any.required': 'Class name is required'
                    }),
                    subjects: Joi.array().items(Joi.string().trim().required()).required().messages({
                        'array.base': 'Subjects must be an array of strings',
                        'any.required': 'Subjects are required'
                    }),
                    rate: Joi.number().min(0).required().messages({
                        'number.base': 'Rate must be a number',
                        'any.required': 'Rate is required'
                    })
                })
            ).required().messages({
                'array.base': 'Classes must be an array of objects with className, subjects, and rate',
                'any.required': 'Classes are required'
            }),
            location: Joi.string().trim().required().messages({
                'string.empty': 'Location is required',
                'any.required': 'Location is required'
            })
        });
    }




    tutorBookingSchema() {
        return Joi.object({
            // Student Name
            studentName: Joi.string().min(3).required().messages({
                'string.empty': 'Student name is required',
                'string.min': 'Student name must be at least 3 characters long',
                'any.required': 'Student name is required'
            }),
            tutor: Joi.string().required().messages({
                'string.empty': 'tutor is required',
                'any.required': 'tutor is required'
            }),
            userId: Joi.string().required().messages({
                'string.empty': 'userId is required',
                'any.required': 'userId is required'
            }),

            // Student Phone
            studentPhone: Joi.string().pattern(/^(\+?\d{10,15})$/).required().messages({
                'string.empty': 'Student phone number is required',
                'string.pattern.base': 'Student phone number must be a valid phone number (10-15 digits)',
                'any.required': 'Student phone number is required'
            }),

            // Student Class
            studentClass: Joi.string().required().messages({
                'string.empty': 'Student class is required',
                'any.required': 'Student class is required'
            }),

            // Your Name
            name: Joi.string().min(3).required().messages({
                'string.empty': 'Your name is required',
                'string.min': 'Your name must be at least 3 characters long',
                'any.required': 'Your name is required'
            }),

            // Your Email
            email: Joi.string().email().required().messages({
                'string.empty': 'Email is required',
                'string.email': 'Please enter a valid email address',
                'any.required': 'Email is required'
            }),

            // Subject
            subject: Joi.array().required().messages({
                'string.empty': 'Subject selection is required',
                'any.required': 'Subject selection is required'
            }),

            // Session Date (Date)
            sessionDate: Joi.date().iso().required().messages({
                'string.empty': 'Session date is required',
                'date.base': 'Please provide a valid date for the session',
                'any.required': 'Session date is required'
            }),

            // Status
            status: Joi.string().valid('pending', 'confirmed', 'completed', 'canceled').default('pending').messages({
                'any.only': 'Status must be one of [pending, confirmed, completed, canceled]',
                'any.default': 'Default status is pending'
            }),

            // Payment Status
            paymentStatus: Joi.string().valid('unpaid', 'paid').default('unpaid').messages({
                'any.only': 'Payment status must be one of [unpaid, paid]',
                'any.default': 'Default payment status is unpaid'
            })
        });

    }







    validate(schema) {
        return (req, res, next) => {
            const { error } = schema.validate(req.body);
            if (error) {
                return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_500_INTERNAL_SERVER_ERROR, error.details[0].message);
            }
            next();
        };
    }
}

module.exports = new TutorRequest();

