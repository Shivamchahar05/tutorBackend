const rateLimit = require('express-rate-limit');

const apiRequestLimiter =  (maxLimit) => rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: maxLimit, // Limit each IP to the specified number of requests per `window` (here, per hour)
    message: 'Too many requests found from this IP, please try again after an hour',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

module.exports = {  apiRequestLimiter: apiRequestLimiter };
