import { User } from "./User";

export type UserCreateDto = {
  name: User["name"];
  password: User["password"];
  password_repeat: User["password"];
};

export type UserLoginDto = {
  name: User["name"];
  password: User["password"];
};