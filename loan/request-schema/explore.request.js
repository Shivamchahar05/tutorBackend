const Joi = require('joi');

class ExploreRequest {
    paginationInput =  (t, input) => {
        return Joi.object({
            pageSize: Joi.number().integer().required().min(1),
            pageNo: Joi.number().integer().required().min(1)
        }).messages({
            'any.required': t('VALIDATION.IS_REQUIRED'),
            'any.only': t('VALIDATION.ONLY_ALLOW'),
        });
    };

}

module.exports = new ExploreRequest();
