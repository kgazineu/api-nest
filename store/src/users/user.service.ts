import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListUserDTO } from './dto/listUser.dto';
import { UpdateUsersDto } from './dto/updateUser.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(userEntity: UserEntity) {
    await this.userRepository.save(userEntity);
  }

  async findAllUsers() {
    const savedUsers = await this.userRepository.find();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const listUser = savedUsers.map(
      (user) => new ListUserDTO(user.id, user.name),
    );
    return listUser;
  }

  async updateUser(id: string, userEntity: UpdateUsersDto) {
    await this.userRepository.update(id, userEntity);
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
  }
}
