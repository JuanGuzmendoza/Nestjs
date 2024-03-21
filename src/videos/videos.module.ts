


import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { profesores } from './UNI.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      port: 3306,
      database: 'users',
      entities: [profesores], 
      synchronize: true, // Esto sincronizará automáticamente las entidades con la base de datos (solo para desarrollo)
    }),
    TypeOrmModule.forFeature([profesores]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class VideosModule {}

