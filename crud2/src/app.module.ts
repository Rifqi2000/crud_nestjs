import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilekitaModule } from './filekita/filekita.module';
import 'dotenv/config';
import { APP_FILTER } from '@nestjs/core';
import {HttpErrorFilter} from './shared/http-error.filter'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    FilekitaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, {
      provide: APP_FILTER,
      useClass : HttpErrorFilter
    }
  
  ],
})
export class AppModule {}
