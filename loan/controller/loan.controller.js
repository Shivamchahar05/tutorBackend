"use strict";
const constant = require("../../config/constant");
const { CommonHelper } = require("../../util/common.helper");
const { AesCryptoHelper } = require("../../util/aes.crypto.helper");
const { ExploreService } = require("../service/index");

class ExploreController {
    /**
     * @swagger
     * /dev/explore/v1/brand-of-week:
     *   get:
     *     description: Retrieve the brand of the week
     *     tags:
     *       - explore
     *     responses:
     *       '200':
     *         description: Successful operation
     *       '401':
     *         description: Authentication failed
     *       '500':
     *         description: Internal server error
     */

    

}

module.exports = new ExploreController();
