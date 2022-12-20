import { User } from "../User";
import { UserCreateDto } from "../UserDto";

export interface IUserRepo {
  create: (user: UserCreateDto) => Promise<User>;
}