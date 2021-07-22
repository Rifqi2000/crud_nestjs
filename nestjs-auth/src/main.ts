import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as sessison from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
