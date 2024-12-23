// for getting all user
/**
 * @swagger
 * /read-user/_search/template:
 *   get:
 *     summary: Get influencer/brand/etc templates by type
 *     description: Retrieve influencer/brand/etc templates by userType using Elasticsearch search templates . templates are [get-user-template -> for user searching ]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "get-user-template"
 *               params:
 *                 type: object
 *                 properties:
 *                   userType:
 *                     type: integer
 *                     example: 4
 *                     description: The type of user to retrieve
 *                   searchString:
 *                     type: string
 *                     example: abc
 *                     description: not for all user template
 *                   from:
 *                     type: integer
 *                     example: 0
 *                     description: Starting index for pagination
 *                   size:
 *                     type: integer
 *                     example: 10
 *                     description: Number of results to return per page
 *             required:
 *               - id
 *               - params
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - basicAuth: []
 *     servers:
 *       - url: https://search-dolledup-mlpufjbc6rhvkmaqnbuzhifzgq.ap-south-1.es.amazonaws.com
 *     tags:
 *       - Elastic Template
 */



// for profile post api
/**
 * @swagger
 * /read-post/_search/template:
 *   get:
 *     summary: Get posts for a user
 *     description: Retrieve posts for a given user using Elasticsearch search templates ids-> [profile-post-template,get-home-post,influencer-posts,get-post-by-productId]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "profile-post-template"
 *               params:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                     example: "63daf8192c9892aaebd79763947e14de"
 *                     description: The ID of the user whose posts to retrieve
 *                   influencerUserId:
 *                     type: string
 *                     example: "63daf8192c9892aaebd79763947e14de"
 *                     description: The ID of the influencer whose posts to retrieve
 *                   productId:
 *                     type: string
 *                     example: "63daf8192c9892aaebd79763947e14de"
 *                     description: The ID of the product whose posts to retrieve
 *                   from:
 *                     type: integer
 *                     example: 0
 *                     description: Starting index for pagination
 *                   size:
 *                     type: integer
 *                     example: 10
 *                     description: Number of results to return per page
 *             required:
 *               - id
 *               - params
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hits:
 *                   type: object
 *                   properties:
 *                     hits:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Post'
 *                     total:
 *                       type: integer
 *                       example: 50
 *     security:
 *       - basicAuth: []
 *     servers:
 *       - url: https://search-dolledup-mlpufjbc6rhvkmaqnbuzhifzgq.ap-south-1.es.amazonaws.com
 *     tags:
 *       - Elastic Template
 */


// for post product search by query api
/**
 * @swagger
 * /read-product/_search/template:
 *   get:
 *     summary: Get posts for a product
 *     description: Retrieve posts for a given user using Elasticsearch search templates
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "product-search-by-name"
 *               params:
 *                 type: object
 *                 properties:
 *                   brandUserId:
 *                     type: string
 *                     example: "67c07e73d7a6d9ff5aaf685199caa5a1"
 *                     description: The user ID of the brand whose posts to retrieve
 *                   from:
 *                     type: integer
 *                     example: 0
 *                     description: Starting index for pagination
 *                   size:
 *                     type: integer
 *                     example: 10
 *                     description: Number of results to return per page
 *                   searchString:
 *                     type: string
 *                     example: "jeans"
 *                     description: String that need to search
 *                   categoryIds:
 *                     type: string
 *                     example: "67c07e73d7a6d9ff5aaf685199caa5a1"
 *                     description: the categoryId for which data is needed
 *             required:
 *               - id
 *               - params
 *     responses:
 *       200:
 *         description: OK
 *     security:
 *       - basicAuth: []
 *     servers:
 *       - url: https://search-dolledup-mlpufjbc6rhvkmaqnbuzhifzgq.ap-south-1.es.amazonaws.com
 *     tags:
 *       - Elastic Template
 */