const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { SALT_ROUNDS } = require("../config/constant")
const config = require("../config/config");
const constant = require("../config/constant");


class CommonHelper {

    /**
     * Method: aesEncrypt
     * Purpose: encrypt a string value using AES-256-CBC
     * @param {*} plaintext
     * @response {*} encrypted string
     */
    aesEncript = async (planText) => {
        try {
  
            if (typeof planText == "number") {
                planText = (planText).toString();
            } else if (!planText) {
                return planText;
            }
            //iv needs to be 16bytes long, key is 32bytes. And we changed createCipher to createCipheriv.
            const iv = Buffer.from(config.AES_CONFIG.SECRETIV_KEY);
            const key = Buffer.from(config.AES_CONFIG.SECRET_KEY);
            const cipher = crypto.createCipheriv(constant.AES_CRYPTO_ALGO, key, iv);
            const encryptedData = cipher.update(planText, "utf8", "hex") + cipher.final("hex");
            return encryptedData;
            // }

        } catch (e) {
            return "";
        }
    };

    /**
     * Method: aesDecrypt
     * Purpose: Decrypt an encrypted string using AES-256-CBC
     * @param {*} encryptedText
     * @response {*} decrypted string
     */
    aesDecript = async (encryptedText) => {
        try {

            if (typeof encryptedText !== "string") {
                return "";
            }
            const iv = Buffer.from(config.AES_CONFIG.SECRETIV_KEY);
            const key = Buffer.from(config.AES_CONFIG.SECRET_KEY);
            const cipher = crypto.createDecipheriv(constant.AES_CRYPTO_ALGO, key, iv);
            let decryptedText = cipher.update(encryptedText, "hex", "utf8") + cipher.final("utf8");
            return decryptedText;
        } catch (e) {
            return "";

        }
    };

    /**
     * Method: sendValidationError
     * Purpose: error response formate
     * @param {*} res
     * @param {*} status
     * @param {*} response
     * @response {*} http response
     */
    sendValidationError = (res, status, statusCode, message, data = {}) => {
        res.status(statusCode).json({
            statusCode: statusCode,
            success: status,
            message: typeof message === "string" ? message : "",
            data: data,
        });
    };

    /**
     * Method: sendSuccess
     * Purpose: response format creation
     * @param {*} res
     * @param {*} successStatus
     * @param {*} statusCode
     * @param {*} message
     * @param {*} data
     * @param {*} total
     * @response {*} http response
     */
    sendSuccess = (res, successStatus, statusCode, message = null, data, total = null) => {
        const resData = {
            success: successStatus,
            data,
            ...(total && { total }),
            ...(message && {
                message: typeof message === "string" ? res.__(message) : res.__(message.key, message.value)
            })
        };
        res.status(statusCode).json(resData);
    }


    /**
     * Method: sendError
     * Purpose: error response formate
     * @param {*} res
     * @param {*} status
     * @param {*} response
     * @response {*} http response
     */
    sendError = (res, status, statusCode, message, data = {}) => {
        console.log(res.__(message), "res")
        console.log(status, "status")
        console.log(message, "message")
        res.status(statusCode).json({
            success: status,
            status:statusCode,
            message:
                typeof message === "string"
                    ? res.__(message)
                    : res.__(message.key, message.value),
            data: data,
        });
    };

    /**
     * Method: asyncForEach
     * Purpose : async ForEach loop
     */
    asyncForEach = async (array, callback) => {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    };

    /**
     * Method: hashingPassword
     * Purpose : hash password
     */
    async hashingPassword(password) {
        if (password) {
            const hash = bcrypt.hashSync(password, SALT_ROUNDS);
            return hash;
        } else {
            return null;
        }
    }

    /**
     * Method: hashingComparePassword
     * Purpose : hash compare password
     */
    async hashingComparePassword(password, hashPassword) {
        if (password) {
            const hash = bcrypt.compareSync(password, hashPassword);
            return hash;
        } else {
            return null;
        }
    }

    /**
     * Method: randomString
     * Purpose : Generate random string
     * Note : non-security-related tasks pseudorandom number generator
     */
    async randomString() {
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 9; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    /**
     * Method: randomOtp
     * Purpose : Generate random otp
     */
    async randomOtp(length = 6) {
        const min = Math.pow(10, length - 1);
        const max = Math.pow(10, length) - 1;
        const randomValue = Math.floor(min + Math.random() * (max - min + 1));
        return randomValue.toString();
    }

    async getCloudFrontUrl(key) {
        return ((config.AWS_CLOUDFRONT_URL ?? '') + key);

    }


    processCursorDataAndSetResponse = async (cursorResponse) => {
        try {
            let responseArray = [];
            await this.asyncForEach(cursorResponse[1], async (inputElement) => {
                if (inputElement.command == constant.PROCEDURE_METHOD.FETCH) {
                    responseArray.push(inputElement.rows)
                }
            });
            return responseArray;
        } catch (e) {
            throw e;
        }
    };

    /**
      * Method: randomString
      * Purpose : Generate random string
      * Note : non-security-related tasks pseudorandom number generator
      */
    async generateUniqueID() {
        const min = BigInt("100000000000000"); // Minimum value for the bigint range
        const max = BigInt("999999999999999"); // Maximum value for the bigint range
        const randomString = await this.randomString()
        const randomID = min + BigInt(Math.floor(Math.random() * (Number(max) - Number(min) + 1)))+randomString;
        return randomID.toString();

    }

     replacePlaceholders = (text, ...values) =>{
        let index = 0;
        return text.replace(/\[\]/g, () => values[index++]);
      }

    async randomSessionId() {
        return crypto.randomBytes(32).toString('hex');
    }

    async convertIntoBoolean(value){
        if (typeof value === 'boolean') {
            // If the value is already a boolean, return it as is
            return value;
          }
          if (typeof value === 'string') {
            // Convert common string representations to boolean
            const lowercaseValue = value.toLowerCase();
            
            if (lowercaseValue === 'true' || lowercaseValue === '1') {
              return true;
            }
            
            if (lowercaseValue === 'false' || lowercaseValue === '0') {
              return false;
            }
          }
          return false;
    }
}

module.exports.CommonHelper = new CommonHelper();
    