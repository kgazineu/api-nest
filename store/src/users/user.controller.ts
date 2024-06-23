import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { v7 as uuid } from 'uuid';
import { CreateUsersDto } from './dto/createUsers.dto';
import { ListUserDTO, UpdatedUserDto } from './dto/listUser.dto';
import { UpdateUsersDto } from './dto/updateUser.dto';
import { UserEntity } from './entities/user.entity';
import { UsersRepository } from './user.repository';

@Controller('/users')
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

  @Post()
  async criaUsuario(@Body() userData: CreateUsersDto) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.name = userData.name;
    userEntity.id = uuid();
    this.usersRepository.save(userEntity);
    return {
      usuario: new ListUserDTO(userEntity.id, userEntity.name),
      message: 'Usuário criado com sucesso',
    };
  }

  @Get()
  async findUsers() {
    const savedUser = await this.usersRepository.findAll();
    const userList = savedUser.map(
      (user) => new ListUserDTO(user.id, user.name),
    );
    return userList;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() userData: UpdateUsersDto) {
    const updatedUser = await this.usersRepository.updateUser(id, userData);
    return {
      usuario: new UpdatedUserDto(
        updatedUser.name,
        updatedUser.email,
        updatedUser.id,
      ),
      message: 'Usuário atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    await this.usersRepository.deleteUser(id);
    return {
      message: 'Usuário deletado com sucesso',
    };
  }
}
