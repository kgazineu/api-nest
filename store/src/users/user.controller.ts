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
import { CreateUsersDto } from './dto/createUser.dto';
import { ListUserDTO } from './dto/listUser.dto';
import { UpdateUsersDto } from './dto/updateUser.dto';
import { UserEntity } from './entities/user.entity';
import { UsersRepository } from './user.repository';
import { UserService } from './user.service';

@Controller('/users')
export class UsersController {
  constructor(
    private usersRepository: UsersRepository,
    private userService: UserService,
  ) {}

  @Post()
  async criaUsuario(@Body() userData: CreateUsersDto) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.name = userData.name;
    userEntity.id = uuid();
    this.userService.createUser(userEntity);
    return {
      usuario: new ListUserDTO(userEntity.id, userEntity.name),
      message: 'Usuário criado com sucesso',
    };
  }

  @Get()
  async findUsers() {
    const savedUser = await this.userService.findAllUsers();
    return savedUser;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() userData: UpdateUsersDto) {
    const updatedUser = await this.userService.updateUser(id, userData);
    return {
      user: updatedUser,
      message: 'Usuário atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.deleteUser(id);
    return {
      message: 'Usuário deletado com sucesso',
    };
  }
}
