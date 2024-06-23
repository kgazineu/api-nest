import { Body, Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async findAll() {
    return this.users;
  }

  async findByEmail(email: string) {
    // eslint-disable-next-line prettier/prettier
    const userVerify = this.users.find(user => user.email === email);
    return userVerify !== undefined;
  }

  private findById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateUser(id: string, @Body() updateUser: Partial<UserEntity>) {
    const user = this.findById(id);

    Object.entries(user).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      user[key] = value;
    });
    return user;
  }

  async deleteUser(id: string) {
    const user = this.findById(id);
    this.users = this.users.filter((saveUser) => saveUser.id !== user.id);
  }
}
