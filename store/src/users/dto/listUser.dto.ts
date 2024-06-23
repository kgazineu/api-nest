export class ListUserDTO {
  constructor(
    readonly id: string,
    readonly name: string,
  ) {}
}

export class UpdatedUserDto {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly id: string,
  ) {}
}
