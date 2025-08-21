import { INestiaConfig } from '@nestia/sdk';

const config: INestiaConfig = {
  input: ['src/**/**.controller.ts'],
  swagger: {
    openapi: '3.1',
    decompose: true,
    output: 'swagger.json',
    security: {
      bearer: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    info: {
      version: '1.0.0',
      title: 'nestia headers error',
      description: `error review
      `,
      contact: {
        name: 'dona',
        url: 'https://addline.info',
        email: 'windofwind@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'local Server',
      },
    ],
    beautify: false,
  },
  e2e: 'test/e2e',
  output: 'test/e2e/api',
};

export default config;
