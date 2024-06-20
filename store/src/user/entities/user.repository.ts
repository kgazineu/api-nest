export class UsersRepository {
  private users = [];

  async save(user) {
    this.users.push(user);
  }
}
