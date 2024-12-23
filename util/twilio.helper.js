
const {TWILIO_CONFIG , TWILIO_EMAIL_ENV,TWILIO_SMS_ENV, SENDGRID_API_KEY} = require("../config/config");
const client = require("twilio")(TWILIO_CONFIG.ACCOUNT_SID, TWILIO_CONFIG.AUTH_TOKEN);
//  SETUP FOR SEND EMAIL TO USER  (WORKING PERFECTLY NO ERROR FOUND BUT STATUS MESSAGE 202)
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);
const { CommonHelper } = require("./common.helper");

/**
 * Utility class for handling JWT tokens.
 */
class TwilioHelper {
 
    async sendSms(countyCode,phoneNumber,body) {
        try {
        if(!await CommonHelper.convertIntoBoolean(TWILIO_SMS_ENV)) { return ;}
       await client.messages
            .create({ body: body, from: TWILIO_CONFIG.FROM_NUMBER, to: '+'+countyCode+phoneNumber })
        
        }catch(e){
           console.log("*** ERR  TWILIO SMS **",e)
        }
    }

    async sendEmail(toEmailAddress,body='',html='') {
        try {
        if(!await CommonHelper.convertIntoBoolean(TWILIO_EMAIL_ENV)) { return ;}
       await sgMail.send({
            to: toEmailAddress,
            from: TWILIO_CONFIG.FROM_EMAIL,
            subject: body,
            html: html
        })
    }catch(e){
        console.log("*** sendEmail ****", e)
    }
    }
    async sendVerificationCode(countyCode, phoneNumber) {
        try {
            console.log(countyCode, phoneNumber)
            await client.verify.v2.services(TWILIO_CONFIG.SERVICE_ID).verifications.create({
                to: '+'+countyCode + phoneNumber,
                channel: 'sms',
            });

        } catch (error) {
            console.log('***** sendVerificationCode *****',error)
            if(error.message == 'Max send attempts reached') throw new Error('MAX_SEND_ATTEMPTS_REACHED')
            
        }
    }

    async checkVerificationCode(countyCode, phoneNumber, verificationCode) {
        try {
            const verificationCheck = await client.verify.v2.services(TWILIO_CONFIG.SERVICE_ID).verificationChecks.create({
                to: '+'+countyCode + phoneNumber,
                code: verificationCode,
            });
           if(verificationCheck.status !== 'approved') { throw new Error('UNABLE_TO_VERIFY_OTP')}
        } catch (error) {
            console.log('***** checkVerificationCode *****',error)
            throw new Error('UNABLE_TO_VERIFY_OTP');
        }
    }

}
module.exports.TwilioHelper = new TwilioHelper();