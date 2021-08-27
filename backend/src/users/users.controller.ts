import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dtos';
import { UsersService } from './users.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  findAllUsers() {
    return 'All Users';
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    return 'Single User';
  }

  @Post()
  createUSer(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }
}
