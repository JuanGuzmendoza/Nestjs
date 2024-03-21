import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VideosModule } from './videos/videos.module';

async function bootstrap() {
  const app = await NestFactory.create(VideosModule);
  await app.listen(3000);
}
bootstrap();
