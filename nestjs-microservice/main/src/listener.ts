import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,  {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://gyfcvozw:AWatj9GN7ZUJLM4q_YIINmq2OLNeiGy2@snake.rmq2.cloudamqp.com/gyfcvozw'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.listen();
}
bootstrap();
