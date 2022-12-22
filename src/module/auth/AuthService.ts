import {
  UserCreateDto,
  UserLoginDto,
} from "../user/UserDto";

export class AuthService {
  async register(dto: UserCreateDto): Promise<string> {
    return "token";
  }

  async login(dto: UserLoginDto): Promise<string> {
    return "token";
  }
}