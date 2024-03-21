
import { Controller, Get ,Post,Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { profesores } from './UNI.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async createUser(@Body() data: profesores[]): Promise<profesores[]> {
    return this.usersService.createUsers(data);
  }
  @Get('find')
   findAll(): Promise<profesores[]> {
    return this.usersService.findAll();
  }

}