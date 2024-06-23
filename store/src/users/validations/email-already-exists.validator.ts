import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class emailAlreadyExists implements ValidatorConstraintInterface {
  constructor(private usersRepository: UsersRepository) {}

  async validate(
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const userAlreadyExists = await this.usersRepository.findByEmail(value);
    return !userAlreadyExists;
  }
}

export const EmailAlreadyExists = (validationOptions: ValidationOptions) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: emailAlreadyExists,
    });
  };
};
