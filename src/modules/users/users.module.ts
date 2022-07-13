import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from './users.service';

@Module({
  imports: [],
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
  exports: [],
})
export class UsersModule {}
