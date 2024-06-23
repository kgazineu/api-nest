import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailAlreadyExists } from '../validations/email-already-exists.validator';

export class UpdateUsersDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsOptional()
  name: string;

  @EmailAlreadyExists({ message: 'Email já cadastrado' })
  @IsEmail(undefined, { message: 'O Email inserido é inválido' })
  @IsOptional()
  email: string;

  @IsOptional()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  password: string;
}
