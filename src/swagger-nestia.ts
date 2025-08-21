import { NestiaSwaggerComposer } from '@nestia/sdk';
import { INestApplication } from '@nestjs/common';
import { OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import config from '../nestia.config';

export const swaggerNestia = async (app: INestApplication) => {
  if (process.env.NODE_ENV !== 'production') {
    const document = await NestiaSwaggerComposer.document(app, {
      ...config.swagger,
    });

    SwaggerModule.setup('api', app, document as OpenAPIObject, {
      swaggerOptions: {
        showRequestDuration: true,
        // defaultModelsExpandDepth: 10,
        defaultModelExpandDepth: 10,
        filter: true,
        displayRequestDuration: true,
        docExpansion: 'list',
      },
    });
  }
};
