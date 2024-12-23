const constant = require("../config/constant");
const { CommonHelper } = require("../util/common.helper");
const { JWTHelper } = require("../util/jwt.token.helper");
const compose = require('composable-middleware');


/**
 * Middleware function to authorize requests using JWT token
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware function
 */
const authorize = async (req, res, next) => {
    // console.log(req.allowedUser)
    // Get the access token from the request headers
    const accessToken = req.headers["authorization"] || "";
    req.headers.authorization = accessToken;

    try {
        // Verify the access token using the JWT token helper
        const decoded = await JWTHelper.verify(accessToken);
        console.log('decoded: ', decoded);
        

        req.body.userId = Buffer.isBuffer(decoded.userId) ? decoded.userId.toString() : decoded.userId;
         
        //    need to add get the user data for user_type in here and test 
        if (req?.allowedUser?.length) {
            console.log('------>', decoded.userTypeId);

            if (!req.allowedUser.find(x => x == decoded.userTypeId)) {
                throw new Error('UNAUTHORIZED_USER');
            }

            

        }

        return next();
    } catch (err) {
        console.log("err", err)
        // Send appropriate error response based on the type of error
        switch (err.message || err) {
            case "SESSION_EXPIRED":
                return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_401_UNAUTHORIZED, "VALIDATION.SESSION_EXPIRED", []);
            case "UNAUTHORIZED_USER":
                return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_401_UNAUTHORIZED, "VALIDATION.UNAUTHORIZED_USER", []);
            case "AUTHENTICATION_FAILED":
                return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_401_UNAUTHORIZED, "VALIDATION.AUTHENTICATION_FAILED", []);
            case "INVALID_USER":
                return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_401_UNAUTHORIZED, "VALIDATION.INVALID_USER", []);
            case "INACTIVE_USER":
                return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_401_UNAUTHORIZED, "VALIDATION.INACTIVE_USER", []);
            case "ACCESS_TOKEN_NOT_DEFINED":
                return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_401_UNAUTHORIZED, "VALIDATION.AUTH_TOKEN_REQUIRED", []);
            case "TokenExpiredError":
                return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_498_TOKEN_EXPIRED, "VALIDATION.TOKEN_EXPIRED", []);
            case "JsonWebTokenError":
                return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_401_UNAUTHORIZED, "VALIDATION.INVALID_TOKEN", []);
            default:
                return CommonHelper.sendError(res, false, constant.STATUS_CODE.HTTP_500_INTERNAL_SERVER_ERROR, "SERVER.SOMETHING_WENT_WRONG", []);
        }
    }
};

const Middleware = {
    Authenticate: (userTypes) => {
        return new compose()
            .use((req, res, next) => {
                req.allowedUser = userTypes;
                next();
            })
            .use(authorize);
    },
    authorize
}
module.exports = Middleware




