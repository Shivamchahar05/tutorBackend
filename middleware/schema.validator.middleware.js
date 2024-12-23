const constant = require("../config/constant");
const { CommonHelper } = require("../util/common.helper");
const { joiErrorFormatter } = require("../util/joi.error.helper");
const validateRequest = (schema) => {

    return async (req, res, next) => {
        let input = Object.assign({}, req.body, req.query, req.params);
        const { error, value } = (await schema(req.__, input)).validate(input);
        req.value = value;
        if (error) {
            return CommonHelper.sendValidationError(res, false, constant.STATUS_CODE.HTTP_400_BAD_REQUEST, joiErrorFormatter(error, req.__), []);
        }
        next();
    };
};


module.exports = { validateRequest }
