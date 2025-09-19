import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitando CORS
  app.enableCors({
    origin: ['http://localhost:3000', process.env.FRONTEND_URL], // substitua pelas origens permitidas
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // se precisar enviar cookies ou Authorization headers
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ignora propriedades extras
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
