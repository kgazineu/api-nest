import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UsersController } from './user.controller';
import { UsersRepository } from './user.repository';
import { UserService } from './user.service';
import { emailAlreadyExists } from './validations/email-already-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UserService, UsersRepository, emailAlreadyExists],
})
export class UsersModule {}
