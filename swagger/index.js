const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: "3.0.3",
    info: {
        title: 'Dolled Up APIs',
        version: "3.0.3",
        description: 'Dolled Up API Information',
    },
    servers: [
        {
            url: "https://lycqpxmftl.execute-api.ap-south-1.amazonaws.com/dev",
        },
        {
            url: "http://localhost:3000/dev",
        }
    ],
    components: {
        securitySchemes:
            {

                authorization:
                    {
                        type: "apiKey",
                        name: 'authorization',
                        scheme: "",
                        bearerFormat: "JWT",
                        in: "header"
                    }
            },
    },
    security: [
        {
            client: [],
            access_token: []
        },
    ],

};

const swaggersSpec = swaggerJSDoc({
    swaggerDefinition,
    apis: ['./users/**/*.js','./posts/**/*.js','./stories/**/*.js','./products/**/*.js', './swagger/elastic.template.js','./cart/**/*.js','./payment/**/*.js','./order/**/*.js','./explore/**/*.js']

});

module.exports = (app) => {
    app.get('/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggersSpec);
    });
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggersSpec));
}



