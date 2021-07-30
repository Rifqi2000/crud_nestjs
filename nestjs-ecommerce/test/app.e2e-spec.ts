import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { HttpStatus } from '@nestjs/common';
import { RegisterDTO } from 'src/auth/auth.dto';
import { ConnectableObservable } from 'rxjs';

const app = 'http://localhost:3000';

describe('ROOT', () => {
  it('should ping', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

describe('AUTH', () => {
  it('should register',() => {
    const user: RegisterDTO = {
      username: 'username',
      password: 'password'
    };

    return request(app)
      .post('/auth/register')
      .set('Accept', 'application/json')
      .send(user)
      .expect(({body}) => {
        console.log(body);
      })
      .expect(HttpStatus.CREATED);
  });
});
