const jwt = require('jsonwebtoken');
const constant = require("../config/constant");


/**
 * Utility class for handling JWT tokens.
 */
class JWTHelper {
    /**
     * Generates an access token and an optional refresh token.
     * @param {Object} payload - The payload to include in the token.
     * @param {Number} expireTime - The expiration time in seconds.
     * @param {Boolean} [isRefreshToken=false] - Whether to include a refresh token.
     * @returns {Object} - The access token and refresh token (if any).
     * @throws {Error} If payload is not defined.
     */
    generateToken = async (payload, expireTime, isRefreshToken = true) => {
        try {
            if (!payload) { throw new Error ("PAYLOAD_NOT_DEFINED"); }
            const options = { expiresIn: expireTime };
            console.log(payload, "payload")
            console.log(options, "options")
            console.log(constant.JWT.SECRET, "constant.JWT.SECRET")
            const accessToken = jwt.sign(payload, constant.JWT.SECRET, options);
            console.log(accessToken, "accessToken")
             console.log(constant.JWT.REFRESH_TOKEN_SECRET, "constant.JWT.REFRESH_TOKEN_SECRET")
             console.log(constant.JWT.REFRESH_TOKEN_LIFE,"constant.JWT.REFRESH_TOKEN_LIFE")
            const refreshToken = isRefreshToken
                ? jwt.sign(payload, constant.JWT.REFRESH_TOKEN_SECRET, { expiresIn: constant.JWT.REFRESH_TOKEN_LIFE })
                : null;

            return { accessToken  , refreshToken};
        } catch (err) {
            throw err;
        }
    }

    /**
    * Generates an Otp token.
    * @param {Object} payload - The payload to include in the token.
    * @param {Number} expireTime - The expiration time in seconds.
    * @param {Boolean} [isRefreshToken=false] - Whether to include a refresh token.
    * @returns {Object} - The access token and refresh token (if any).
    * @throws {Error} If payload is not defined.
    */

    
    generateOtpToken = (payload, expireTime) => {
        try {
            if (!payload) { throw new Error ("PAYLOAD_NOT_DEFINED"); }
            const options = { expiresIn: NumbgenerateTokener(expireTime) };
            const otpToken = jwt.sign(payload, constant.JWT.SECRET, options);
            return otpToken;
        } catch (err) {
            throw err;
        }
    }

    generateVerificationToken = async (payload, expireTime) => {
     
        try {
            if (!payload) { throw new Error ("PAYLOAD_NOT_DEFINED"); }
            const options = { expiresIn: Number(expireTime) };
            const verificationToken = jwt.sign(payload, constant.JWT.SECRET, options);
            return verificationToken;
        } catch (err) {
            throw err;
        }
    }



    /**
     * Verifies the given access token.
     * @param {String} accessToken - The access token to verify.
     * @returns {Promise<Object>} - The decoded token payload.
     * @throws {Error} If accessToken is not defined.
     * @rejects "NO_TOKEN_FOUND" if accessToken is not defined.
     */
 
    verify = async (accessToken) => {
        try {
            if (!accessToken) { throw new Error ("ACCESS_TOKEN_NOT_DEFINED");  }
            const decoded = jwt.verify(accessToken, constant.JWT.SECRET);
            // const decoded = jwt.verify(accessToken, constant.JWT.SECRET,{ignoreExpiration:true});
            return decoded;
        } catch (err) {
            switch (err.name || err ) {
                case 'TokenExpiredError':
                    err = 'TokenExpiredError';
                    break;
                case 'JsonWebTokenError':
                    err = 'JsonWebTokenError';
                    break;
                case 'ACCESS_TOKEN_NOT_DEFINED':
                     err = 'ACCESS_TOKEN_NOT_DEFINED';
                    break;
                default:
                    err = "JsonWebTokenError";
                    break;
            }
            throw err;
        }
    }
 /**
     * Method: verifyOtpToken
     * Purpose: verify OTP token
     * @param {string} otpToken - The OTP token to verify
     * @returns {Promise<string>} - A promise that resolves to "VALID" if the token is valid, or rejects with an error message otherwise.
     */

    verifyOtpToken = async (otpToken) => {
        try{
        if (!otpToken) { throw new Error( "INVALID_OTP") }
            const decoded = jwt.verify(otpToken, constant.JWT.SECRET);
            return decoded;
        } catch (err) {
            switch (err.name) {
                case 'TokenExpiredError':
                    err = 'OTP_EXPIRED';
                    break;
                case 'JsonWebTokenError':
                    err = 'INVALID_OTP';
                    break;
                default:
                    err = "INVALID_OTP";
                    break;
            }
            throw err;
        }
    }
 /**
     * Method: verifyVerificationToken
     * Purpose: verify verification token
     * @param {string} VerificationToken - verify verification token
     * @returns {Promise<string>} - A promise that resolves to "VALID" if the token is valid, or rejects with an error message otherwise.
     */

    verifyVerificationToken = async (VerificationToken) => {
        try {
            if (!VerificationToken) { throw new Error("INVALID_VERIFICATION_TOKEN"); }
            const decoded = jwt.verify(VerificationToken, constant.JWT.SECRET);
            return decoded;
        } catch (err) {
            switch(err.name){
                case 'TokenExpiredError':
                 err = "VERIFICATION_TOKEN_EXPIRED";
                 break ;

                 case 'JsonWebTokenError':
                    err = 'INVALID_VERIFICATION_TOKEN'
                    break ;
                 default:
                    err = 'INVALID_VERIFICATION_TOKEN'
                    break;
            }
            throw err;
        }
    }

    /**
     * Method: verifyRefreshToken
     * Purpose: verify refresh token
     * @param {string} refreshToken - The refresh token to verify
     * @returns {Promise<string>} - A promise that resolves to "VALID" if the token is valid, or rejects with an error message otherwise.
     */
    verifyRefreshToken = async (refreshToken) => {
        try {
            if (!refreshToken) { throw new Error( "NO_TOKEN_FOUND") }
            const decoded = jwt.verify(refreshToken, constant.JWT.REFRESH_TOKEN_SECRET);
            return decoded;
        } catch (err) {
            switch(err.name){
                case 'TokenExpiredError':
                 err = "REFRESH_TOKEN_EXPIRED";
                 break ;

                 case 'JsonWebTokenError':
                    err = 'INVALID_REFRESH_TOKEN'
                    break ;
                 default:
                    err = 'INVALID_REFRESH_TOKEN'
                    break;
            }
            throw err;
        }
    }

    generateInfluencerRetryApprovalToken = async (payload, expireTime) => {
        try {
            if (!payload) { throw new Error ("PAYLOAD_NOT_DEFINED"); }
            const options = { expiresIn: Number(expireTime) };
            const influencerRetryToken = jwt.sign(payload, constant.JWT.INFLUENCER_RETRY_APPROVAL_TOKEN_SECRET, options);
            return influencerRetryToken;
        } catch (err) {
            throw err;
        }
    }


    /**
     * Method: verifyRetryApprovalVerificationToken
     * Purpose: verify retry approval verification token
     * @param {string} VerificationToken - verify retry approval verification token
     * @returns {Promise<string>} - A promise that resolves to "VALID" if the token is valid, or rejects with an error message otherwise.
     */

    verifyRetryApprovalVerificationToken = async (VerificationToken) => {
        try {
            if (!VerificationToken) { throw new Error("INVALID_VERIFICATION_TOKEN"); }
            const decoded = jwt.verify(VerificationToken, constant.JWT.INFLUENCER_RETRY_APPROVAL_TOKEN_SECRET);
            return decoded;
        } catch (err) {
            switch(err.name){
                case 'TokenExpiredError':
                 err = "VERIFICATION_TOKEN_EXPIRED";
                 break ;

                 case 'JsonWebTokenError':
                    err = 'INVALID_VERIFICATION_TOKEN'
                    break ;
                 default:
                    err = 'INVALID_VERIFICATION_TOKEN'
                    break;
            }
            throw err;
        }
    }


}
module.exports.JWTHelper = new JWTHelper();
