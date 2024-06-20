import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './entities/user.repository';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  private usersRepository = new UsersRepository();

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const createdUser = this.usersRepository.save(createUserDto);
    return createdUser;
    // return this.userService.create(createUserDto);
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
