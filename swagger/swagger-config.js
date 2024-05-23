const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Event Board',
      version: '1.0.0',
      description:
        'An app with an event schedule where you can choose and register for an event',
      contact: {
        name: 'Viktoriia Cherkashyna',
        url: 'https://github.com/Viktoriia-Ch08',
      },
    },
  },
  apis: ['./routes/*.js'],
  servers: [{ url: 'https://events-board-rest-api.onrender.com/api' }],
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
