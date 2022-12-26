import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UniqueEmail } from './Validator/unique-email.validator';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, UniqueEmail],
})

export class UserModule { }
