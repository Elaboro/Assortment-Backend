import { PrismaClient } from "@prisma/client";
import { User } from "../User";
import { UserCreateDto } from "../UserDto";
import { IUserRepo } from "./IUserRepo";

export class UserRepo implements IUserRepo {
  
  private prisma = new PrismaClient();

  create(user: UserCreateDto): Promise<User> {
    const { name, password } = user;

    return this.prisma.user.create({
      data: {
        name,
        password
      }
    });
  }

  findByName(name): Promise<User> {
    return this.prisma.user.findFirst({ where: { name }});
  }

  getUserByName(name): Promise<User> {
    return this.findByName(name);
  }
}