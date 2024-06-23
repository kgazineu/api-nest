import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersRepository } from './user.repository';
import { emailAlreadyExists } from './validations/email-already-exists.validator';

@Module({
  controllers: [UsersController],
  providers: [UsersRepository, emailAlreadyExists],
})
export class UsersModule {}
