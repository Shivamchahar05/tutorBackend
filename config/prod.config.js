"use strict";
require("dotenv").config();
module.exports = {
    AES_CONFIG: {
        SECRET_KEY: process.env.PROD_SECRET_KEY,
        SECRETIV_KEY: process.env.PROD_SECRETIV_KEY,
    },
    DB_CONFIG: {
        USER: process.env.PROD_DB_USER,
        PASSWORD: process.env.PROD_DB_PASSWORD,
        HOST: process.env.PROD_DB_HOST,
        DATABASE_NAME: process.env.PROD_DATABASE_NAME,
        PORT: process.env.PROD_DB_PORT,
        DIALECT: process.env.PROD_DB_DIALECT,
        POOL_MAX: process.env.PROD_DB_POOL_MAX,
        POOL_MIN: process.env.PROD_DB_POOL_MIN,
        ACQUIRE: process.env.PROD_DB_ACQUIRE,
        IDLE: process.env.PROD_DB_IDLE,
    },
    AWS_CLOUDFRONT_URL: process.env.AWS_CLOUDFRONT_URL,

    AWS_CONFIG: {
        AWS_ACCESS_KEY: process.env.AWSS3_ACCESS_KEY,
        AWS_SECRET_KEY: process.env.AWSS3_SECRET_KEY,
        AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
        AWS_REGION: process.env.AWS_REGION
    },
    ELASTIC_SEARCH: {
        URL: process.env.ELASTIC_URL,
        USER_NAME: process.env.ELASTIC_USER_NAME,
        PASSWORD: process.env.ELASTIC_PASSWORD
    },
    STRIPE: {
        STRIPE_TEST_SECRET_KEY: process.env.STRIPE_TEST_SECRET_KEY,
        STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        STRIPE_APP_SUCCESS_URL: process.env.STRIPE_APP_SUCCESS_URL,
        STRIPE_APP_CANCEL_URL: process.env.STRIPE_APP_CANCEL_URL,

        STRIPE_WEB_SUCCESS_URL: process.env.STRIPE_WEB_SUCCESS_URL,
        STRIPE_WEB_CANCEL_URL: process.env.STRIPE_WEB_CANCEL_URL
    },
    NATS: {
        URL: process.env.NATS_URL,
        USER: process.env.NATS_USER,
        PASSWORD: process.env.NATS_PASSWORD
    },
    QUICK_BLOX: {
        API_KEY: process.env.QUICKBLOX_API_KEY
    },
    RATE_LIMITER: {
        LIMIT: process.env.RATE_LIMIT
    },
    JWT: {
        VERIFICATION_TOKEN_LIFE: process.env.VERIFICATION_TOKEN_LIFE,
        OTP_TOKEN_LIFE: process.env.OTP_TOKEN_LIFE,
        JWT_TOKEN_LIFE: process.env.JWT_TOKEN_LIFE, 
        JWT_REFRESH_TOKEN_LIFE: process.env.JWT_REFRESH_TOKEN_LIFE,
        JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET,
        JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
        INFLUENCER_RETRY_APPROVAL_TOKEN_SECRET: process.env.INFLUENCER_RETRY_APPROVAL_TOKEN_SECRET,
        INFLUENCER_RETRY_APPROVAL_TOKEN_LIFE : process.env.INFLUENCER_RETRY_APPROVAL_TOKEN_LIFE
    },
    ITEM_PER_PAGE: process.env.ITEM_PER_PAGE,
    COINS_PERCENT_OF_DISCOUNT: process.env.COINS_PERCENT || 10,
    CONVENIENCE_FEE: process.env.CONVENIENCE_FEE || 0,
    FCM_JSON: process.env.FCM_JSON,
    NATS_TOPIC:{
        PRODUCT_FTECH: process.env.PRODUCT_FTECH,
        PRODUCT_SYNC: process.env.PRODUCT_SYNC,
        PRODUCT_SYNC_QUEUE: process.env.PRODUCT_SYNC_QUEUE,
    },
    NATS_SCRIPT_URL:process.env.NATS_SCRIPT_URL,
    TWILIO_CONFIG:{
        ACCOUNT_SID:process.env.TWILIO_ACCOUNT_SID,
        AUTH_TOKEN:process.env.TWILIO_AUTH_TOKEN,
        FROM_EMAIL: process.env.TWILIO_FROM_EMAIL,
        FROM_NUMBER : process.env.TWILIO_FROM_NUMBER,
        SERVICE_ID : process.env.TWILIO_SERVICE_ID
    },
    SENDGRID_API_KEY : process.env.SENDGRID_API_KEY,
    TWILIO_ENV: process.env.TWILIO_ENV,
    TWILIO_SMS_ENV : process.env.TWILIO_SMS_ENV || false,
    TWILIO_EMAIL_ENV : process.env.TWILIO_EMAIL_ENV || false

};