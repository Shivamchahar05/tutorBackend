// const Joi = require('joi');
// const {
//     DEVICE_PLATEFORM,
//     CREATE_PROFILE,
//     ACCOUNT_TYPE,
//     COUNTRY_TYPE,
//     USER_TYPE_ID,
//     AWS_SIGNED_URL_TYPE,
//     FOLLOWED_INTEREST_TYPE
// } = require('../.././config/constant');
// const { AesCryptoHelper } = require("../../util/aes.crypto.helper");
const constant = require('../../config/constant');

// class UserRequest {

//     createUserSchema() {
//         console.log("shivam")
//         return Joi.object({
//             name: Joi.string().trim().required().messages({
//                 'string.empty': 'Name is required',
//                 'any.required': 'Name is required'
//             }),
//             email: Joi.string().trim().email().required().messages({
//                 'string.email': 'Invalid email format',
//                 'string.empty': 'Email is required',
//                 'any.required': 'Email is required'
//             }),
//             phoneNumber:Joi.number().required().messages({
//                 'string.empty': 'Phone Number is required',
//                 'any.required': 'Phone Number is required'
//             }),
//             password: Joi.string().min(6).required().messages({
//                 'string.min': 'Password should be at least 6 characters',
//                 'string.empty': 'Password is required',
//                 'any.required': 'Password is required'
//             })
//         });
//     }
   
// }

// module.exports = new UserRequest();


// validation/userRequest.js
const Joi = require('joi');
const { CommonHelper } = require("../../util/common.helper");


class UserRequest {
  createUserSchema() {
    return Joi.object({
      name: Joi.string().trim().required().messages({
        'string.empty': 'Name is required',
        'any.required': 'Name is required'
      }),
      email: Joi.string().trim().email().required().messages({
        'string.email': 'Invalid email format',
        'string.empty': 'Email is required',
        'any.required': 'Email is required'
      }),
      phoneNumber: Joi.number().required().messages({
        'string.empty': 'Phone Number is required',
        'any.required': 'Phone Number is required'
      }),
      password: Joi.string().min(6).required().messages({
        'string.min': 'Password should be at least 6 characters',
        'string.empty': 'Password is required',
        'any.required': 'Password is required'
      })
    });
  }


  loginUserSchema() {
    return Joi.object({
      phoneNumber: Joi.number().required().messages({
        'string.empty': 'Phone Number is required',
        'any.required': 'Phone Number is required'
      }),
      password: Joi.string().min(6).required().messages({
        'string.min': 'Password should be at least 6 characters',
        'string.empty': 'Password is required',
        'any.required': 'Password is required'
      })
    });
  }


  UserSchema() {
    return Joi.object({
      userId: Joi.string().required().messages({
        'string.empty': 'userId  is required',
        'any.required': 'userId  is required'
      }),
     
    });
  }


  validate(schema) {
    return (req, res, next) => {
      const { error } = schema.validate(req.body);
      if (error) {
        return CommonHelper.sendError(res, false , constant.STATUS_CODE.HTTP_500_INTERNAL_SERVER_ERROR, error.details[0].message );
      }
      next();
    };
  }
}

module.exports = new UserRequest();

