import { User } from "../User";
import { UserCreateDto } from "../UserDto";

export interface IUserRepo {
  create(user: UserCreateDto): Promise<User>;
  findByName(name: string): Promise<User>;
  getUserByName(name: string): Promise<User>;
}