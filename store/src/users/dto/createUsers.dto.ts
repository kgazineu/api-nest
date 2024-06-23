import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailAlreadyExists } from '../validations/email-already-exists.validator';

export class CreateUsersDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;

  @EmailAlreadyExists({ message: 'Email já cadastrado' })
  @IsEmail(undefined, { message: 'O Email inserido é inválido' })
  email: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;
}
