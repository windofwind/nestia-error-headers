import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerNestia } from './swagger-nestia';
import { NestExpressApplication } from '@nestjs/platform-express';
import cookieParser from 'cookie-parser';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.disable('x-powered-by');

  app.useBodyParser('json', { limit: '50mb' });
  app.useBodyParser('urlencoded', { limit: '50mb', extended: true });
  app.use(compression());
  app.use(cookieParser());
  app.set('trust proxy', 1);
  await swaggerNestia(app);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
