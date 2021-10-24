import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  // authAction: {
  //   JWT: {
  //     name: 'JWT',
  //     schema: { type: 'apiKey', in: 'header', name: 'Authorization', description: '' },
  //     value: 'Bearer <JWT>',
  //   },
  // },
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0.0',
    },
  },
  apis: ['src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;
