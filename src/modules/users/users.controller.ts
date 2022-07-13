import { Body, Controller, Post } from '@nestjs/common';
import { ICreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  public create(@Body() data: ICreateUserDto) {
    return this.usersService.create(data);
  }
}
