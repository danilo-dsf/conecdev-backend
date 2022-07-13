import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { ICreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findById(id: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException(`No user found for id [${id}]`);
    }

    return user;
  }

  public async create(createUserDto: ICreateUserDto): Promise<User> {
    const userAlreadyExists = await this.prismaService.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (userAlreadyExists) {
      throw new HttpException('Given email is already in use', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = bcrypt.hashSync(createUserDto.password, 10);

    delete createUserDto.password_confirmation;

    const user = await this.prismaService.user.create({
      data: { ...createUserDto, password: hashedPassword },
    });

    return user;
  }
}
