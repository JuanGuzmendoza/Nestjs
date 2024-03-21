// users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { profesores } from './UNI.entity';
import { parseArgs } from 'util';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(profesores)
    private usersRepository: Repository<profesores>,
  ) {}

  async createUsers(data: Partial<profesores>[]): Promise<profesores[]> {
    const formattedData = data.map(item => {
      // Asegurarse de que el campo 'id' sea un número
      item.id = typeof item.id === 'string' ? parseInt(item.id) : item.id;
      
      // Asegurarse de que el campo 'name' sea una cadena de texto
      if (typeof item.name !== 'string') {
        item.name = String(item.name);
      }
      // Asegurarse de que el campo 'email' sea una cadena de texto
      if (typeof item.email !== 'string') {
        item.email = String(item.email);
      }
      return item;
    });

    return this.usersRepository.save(formattedData);
  }
  async findAll(): Promise<profesores[]> {
    return this.usersRepository.find();
  }
}