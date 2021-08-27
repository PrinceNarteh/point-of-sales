import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
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
    return 'User Created.';
  }
}
