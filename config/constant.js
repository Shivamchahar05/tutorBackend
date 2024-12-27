"use strict";

const config = require("./config");

require("dotenv").config();
module.exports = {
    STATUS_CODE: {
        HTTP_200_OK: 200,
        HTTP_201_CREATED: 201,
        HTTP_202_ACCEPTED: 202,
        HTTP_204_NO_CONTENT: 204,
        HTTP_400_BAD_REQUEST: 400,
        HTTP_401_UNAUTHORIZED: 401,
        HTTP_403_FORBIDDEN: 403,
        HTTP_404_NOT_FOUND: 404,
        HTTP_405_METHOD_NOT_ALLOWED: 405,
        HTTP_409_CONFLICT: 409,
        HTTP_500_INTERNAL_SERVER_ERROR: 500,
        HTTP_498_TOKEN_EXPIRED: 498,
        HTTP_422_UNPROCESSABLE_ENTITY: 422
    },
    CREATE_PROFILE: {
        STEP0: 0,
        STEP1: 1,
        STEP2: 2,
        STEP3: 3,
        STEP4: 4,
        STEP5: 5
    },
    BRAND_LIST_TYPE: {
        BRAND_REQUEST: 1,
        BRAND_APPROVED: 2
    },
    UPDATE_QUERY_RESPONSE_TYPE: {
        UPDATED: 1,
        NOT_UPDATED: 0
    },
    ACTIVATE_DEACTIVATE_TYPE: {
        ACTIVATE: 1,
        DEACTIVATE: 2,
    },
    HIGHLIGHT_STORY_ACTION_TYPE: {
        ADD: 1,
        REMOVE: 2,
    },
    FOLLOWER_FOLLOWING_INCREMENT: {
        INCREMENT_BY_ONE: 1,
        DECREMENT_BY_ONE: -1
    },
    STORY_LIKE_UNLIKE_TYPE: {
        LIKE: 1,
        UNLIKE: 2,
    },
    INFLUENCER_TYPE: {
        INFLUENCER_APPROVED: 2,
        INFLUENCER_REQUEST: 1,
    },
    REPORT_TYPE: {
        USER: 1,
        POST: 2,
        BLOG_ARTICLES: 3,
        STORY: 4
    },
    FILTER_TYPE: {
        ALL: 1,
        ACTIVE: 2,
        INACTIVE: 3,
        DELETED: 4
    },
    STATUS_TYPE: {
        ACTIVE: 1,
        INACTIVE: 0
    },
    PERSONALIZE_TYPE: {
        PERSONALIZE_FEED: "personalizeFeed",
        PERSONALIZE_CONTENT: "personalizeContent"
    },
    ACCOUNT_TYPE: {
        PERSONAL: "PERSONAL",
        INFLUENCER: "INFLUENCER",

    },
    AWS_METHOD_TYPE: {
        GET_OBJECT: "getObject",
        PUT_OBJECT: "putObject",
    },

    AWS_SIGNED_URL_TYPE: {
        GET: "get",
        PUT: "put",
    },
    CATEGORY_THEME_TYPE: {
        CATEGORY: 1,
        THEME: 2
    },
    ACCOUNT_UPGRADE_TYPE: {
        ACCOUNT_UPDATE: 1,
        ACCOUNT_NOT_UPDATED: 0
    },

    ELASTIC_INDEXES: {
        USER: 'full-access-user',
        POST: 'full-access-post',
        PRODUCT: 'full-access-product'
    },
    ELASTIC_SCRIPTS: {
        UPDATE_USER_DETAILS: 'update-user-details',
        UPDATE_BLOCK_UNBLOCK: 'update-block-unblock',
        EXPLORE_GET_USER:'explore-get-user',
        EXPLORE_GET_PRODUCT:'explore-get-product',
        EXPLORE_GET_POST:'explore-get-post',
        UPDATE_USER_STATUS:'update-user-status',
        GET_USER_TEMPLATE:'get-user-template',
        PROFILE_POST_TEMPLATE:'profile-post-template',
        UPDATE_USER_PROFILE_DETAILS:'update-user-profile-details'
    },

    CATEGORY_THEME_STATUS_FILTER_TYPE: {
        ACTIVE: 1,
        INACTIVE: 2
    },
    FOLDER_PINNED_TYPE: {
        PINNED: true,
        UNPINNED: false
    },

    FOLLOW_UNFOLLOW_TYPE: {
        FOLLOW: 1,
        UNFOLLOW: 2
    },

    USER_STATUS: {
        ACTIVE: 1,
        INACTIVE: 0,
        DELETED: 1,
        NOT_DELETED: 0
    },
    INFLUENCER_STATUS: {
        REQUESTED: 1,
        APPROVED: 2,
        REJECTED: 3,
        INFLUENCER_VERIFIED: 1,
        INFLUENCER_UNVERIFIED: 0
    },


    REGISTRATION_TYPE: {
        PHONE: 2,
        EMAIL: 1,

    },
    USER_TYPE_ID: {
        BRAND_USER: 2,
        ADMIN_USER: 1,
        PERSONAL: 4,
        INFLUENCER: 3
    },

    CONSTANT_VALUE: {
        ONE: 1,
        ZERO: 0,
        TWO: 2
    },
    GEOLOCATION: {
        MIN_LATITUDE: -90.0,
        MAX_LATITUDE: 90.0,
        MIN_LONGITUDE: -180.0,
        MAX_LONGITUDE: 180.0,
    },
    USER_LOGIN_SIGNUP: {
        LOGIN: 1,
        SIGNUP: 2
    },
    BRAND_STATUS: {
        REQUEST_PENDING: 1,
        REQUEST_APPROVED: 2,
        REQUEST_REJECTED: 3,
        BRAND_USER_VERIFIED: 1
    },

    DEVICE_PLATEFORM: {
        ANDROID: 1,
        IOS: 2,
        WEB: 3,
    },
    PROCEDURE_METHOD: {
        FETCH: "FETCH"
    },

    COUNTRY_TYPE: {
        IND: 1,
        CAD: 2,
        AUS: 3,
    },
    AD_TYPE: {
        SHOP_NOW: 1,
        SEND_MESSAGE: 2,
        CONTACT_NOW: 3

    },

    FOLDER_FILTER_TYPE: {
        PRODUCT: 1,
        POST_IMAGE: 2,
        POST_VIDEO: 3,
        BLOG_ARTICLES: 4,
        ALL_ITEMS: 5,
        POST_IMAGE_VIDEO: 6,

    },
    FOLDER_SORT_BY: {
        ALPHABETS: 1,
        LATEST_CREATED: 2
    },
    COUNT_INCREASE: {
        ONE: 1
    },
    COUNT_DECREASE: {
        MINUS_ONE: -1
    },
    SAVE_FOLDER_THUMBNAIL_TYPE: {
        PRODUCT: 1,
        POST_IMAGE: 2,
        POST_VIDEO: 3,
        BLOG_ARTICLES: 4
    },

    FOLLOWED_INTEREST_TYPE: {
        FOLLOWED_CATEGORY: 1,
        FOLLOWED_THEME: 2,
        FOLLOWED_CATEGORY_THEME: 3
    },
    BUCKET_FOLDER_NAME: {
        POST: "post",
        BLOG: "blog",
        STORY: "story",
        PROFILE: "profile",
        PRODUCT: "product",
        CATEGORY: "category-images",
        THEMES: "theme",
        ATTRIBUTE: "attribute",
        BRAND: "brand",
        ASSETS:"assets"
    },
    SALT_ROUNDS: 10,
    JWT: {
        VERIFICATION_TOKEN_LIFE: config.JWT.VERIFICATION_TOKEN_LIFE,
        OTP_TOKEN_LIFE: config.JWT.OTP_TOKEN_LIFE,
        TOKEN_LIFE: config.JWT.JWT_TOKEN_LIFE, // Note: in seconds!,(min*sec)
        REFRESH_TOKEN_LIFE: config.JWT.JWT_REFRESH_TOKEN_LIFE, // Note: in seconds!, (day*hr*min*sec)
        SECRET: config.JWT.JWT_TOKEN_SECRET,
        REFRESH_TOKEN_SECRET: config.JWT.JWT_REFRESH_TOKEN_SECRET,
        INFLUENCER_RETRY_APPROVAL_TOKEN_SECRET: config.JWT.INFLUENCER_RETRY_APPROVAL_TOKEN_SECRET,
        INFLUENCER_RETRY_APPROVAL_TOKEN_LIFE : config.JWT.INFLUENCER_RETRY_APPROVAL_TOKEN_LIFE
    },
    COINS_PERCENT_OF_DISCOUNT: config.COINS_PERCENT_OF_DISCOUNT,
    CONVENIENCE_FEE : config.CONVENIENCE_FEE,
    ITEM_PER_PAGE: config.ITEM_PER_PAGE,
    MEDIA_TYPE: {
        IMAGE: 1,
        VIDEO: 2,
    },
    ERROR_MESSAGE: {
        USER_DELETED: { message: "DATABASE.USER_DELETED", status: 400 },
        USER_BLOCKED: { message: "DATABASE.USER_BLOCKED", status: 400 },
        PAYLOAD_NOT_DEFINED: { message: "DATABASE.PAYLOAD_NOT_DEFINED", status: 400 },
        INACTIVE_USER: { message: "DATABASE.INACTIVE_USER", status: 400 },
        USER_NAME_EXISTS: { message: "DATABASE.USER_NAME_EXISTS", status: 400 },
        INVALID_INPUT: { message: "DATABASE.INVALID_INPUT", status: 400 },
        INVALID_CREDENTIALS: { message: "DATABASE.INVALID_CREDENTIALS", status: 400 },
        

        REFRESH_TOKEN_EXPIRED: { message: "DATABASE.REFRESH_TOKEN_EXPIRED", status: 400 },
        BRAND_USER_NOT_VERIFIED: { message: "DATABASE.BRAND_USER_NOT_VERIFIED", status: 400 },
        INVALID_REFRESH_TOKEN: { message: "DATABASE.INVALID_REFRESH_TOKEN", status: 400 },
        OTP_NOT_VERIFIED: { message: "DATABASE.OTP_NOT_VERIFIED", status: 400 },
        VERIFICATION_TOKEN_EXPIRED: { message: "DATABASE.VERIFICATION_TOKEN_EXPIRED", status: 400 },
        INVALID_OTP: { message: "DATABASE.INVALID_OTP", status: 400 },

        EMAIL_ALREADY_EXIST: { message: "DATABASE.EMAIL_ALREADY_EXIST", status: 400 },
        USER_NOT_EXIST: { message: "DATABASE.USER_NOT_EXIST", status: 400 },
        INVALID_USER: { message: "DATABASE.INVALID_USER", status: 400 },
        SequelizeForeignKeyConstraintError: { message: "DATABASE.FOREIGN_KEY_ERROR", status: 400 },
        INFLUENCER_PROFILE_UNDER_REVIEW : { message: "DATABASE.INFLUENCER_PROFILE_UNDER_REVIEW", status: 202 },
        INFLUENCER_PROFILE_REJECTED : { message: "DATABASE.INFLUENCER_PROFILE_REJECTED", status: 403 }
    },
    NATS_TOPIC: {
        PRODUCT_FTECH: config.NATS_TOPIC.PRODUCT_FTECH,
        PRODUCT_SYNC: config.NATS_TOPIC.PRODUCT_SYNC,
        PRODUCT_SYNC_QUEUE: config.NATS_TOPIC.PRODUCT_SYNC_QUEUE,
    },
    STRIPE_PAYMENT_TYPE: {
        CARD: ['card'],
        APPLE_PAY: ['card'],
        AFTER_PAY: ['afterpay_clearpay']
    },
    PAYMENT_TYPE: {
        CARD: 'CARD',
        APPLE_PAY: 'APPLE_PAY',
        AFTER_PAY: 'AFTER_PAY',
    },
    STRIPE_CURRENCY: 'USD',
    STRIPE_REQUEST_FROM: {
        APP: 1,
        WEB: 2
    },
    PAYMENT_METHOD: {
        STRIPE: 1
    },
    COUPON_TYPE: {
        PERCENT: 1,
        FIXED: 2
    },
    DELETE_ACCOUNT: {
        FULL_NAME: 'Dolledup User',
        EMAIL: 'delete@dolledup.com',
        MOBILE_NUMBER: '0000000000',
        ALTERNATE_MOBILE_NUMBER: '0000000000'
    },
    QUCICK_BLOX_TAG: {
        USER : 'user',
        INFLUENCER : 'influencer'
    },
    STRIPE_CONSTANT:{
        ACCOUNT_TYPE:'express',
        BUSINESS_TYPE:'individual',
        STANDARD_TYPE:'standard',
        CREATE_LINK_TYPE: 'account_onboarding'
    },
    NOTIFICATION_TITLE: {
        ORDER_PLACE: "Order Placed!",
        RETURN_INITIATED: "your order return has been initiated.",
        RETURN: "your order has been received successfully and refund have been initiated.",
        REPLACE: "Replace item.",
        REFUND: "Refund initiated.",
        POST_LIKE: "Post liked.",
        COMMENT_LIKE: "Comment liked",
        POST_COMMENT: "Comment",
        COMMENT_REPLY: "Comment reply"

    },
    NOTIFICATION_BODY: {
        ORDER_PLACE: "Your order has been placed successfully.",
        RETURN_INITIATED: "your order return has been initiated.",
        RETURN: "your order has been received successfully and refund have been initiated.",
        REPLACE: "Item received successfully.",
        REFUND: "your refund amount has been initiated.",
        POST_LIKE: "[] liked your post.",
        COMMENT_LIKE: "[] liked your comment.",
        POST_COMMENT: "[] commented on your post.",
        COMMENT_REPLY: "[] replied on your comment."

    },
    NOTIFICATION_TYPE: {
        ORDER_DETAILS: '1',
        POST_LIKE:'2',
        COMMENT_LIKE: '3',
        COMMENT:'4'
    },
    USER_COIN :{
        SIGNUP_REFERRED_REWARD_COIN :25,
        REFERRED_REWARD_COIN :25,
        MIN_COINS_TO_REDEEM: 2000,
        DU_COIN_RATE: 20,
        MIN_VALUE_TO_REDEEM_COINS: 300
    },
    COIN_EARNED_TYPE :{
        ORDER :1,
        OWN_REFERRED :2,
        OTHER_REFERRED :3
    },
    SOCIAL_TYPE: {
        INSTAGRAM: 1,
        TIKTOK: 2,
        UNSYNC_INSTAGRAM: 3,
        UNSYNC_TIKTOK: 4
    },
    POST_ACTION_TYPE: {
        POST_LIKE: 1,
        COMMENT_LIKE: 2
    },
    SAVE_FOLDER_ITEM_TYPE: {
        PRODUCT: 1,
        POST_IMAGE: 2,
        POST_VIDEO: 3
    },
    COUPON_MESSAGE : {
        INVALID_COUPON : "INVALID_COUPON"
    },
    POST_PINNED_TYPE: {
        PINNED: true,
        UNPINNED: false
    },
    FCM_JSON_FILE : config.FCM_JSON || null,
    AES_CRYPTO_ALGO : "aes-256-cbc",
    TWILIO :{
        SMS_TEXT : "Your DolledUp verification code is: ",
        EMAIL_TEXT : "Your DolledUp verification code"
    },
    OTP :'800008',
    POST_TYPE: {
        IMAGE: 1,
        VIDEO: 2

    },
    OTP_TOKEN_TYPE :{
        PHONE:'PHONE',
        EMAIL :"EMAIL"

    }
};
