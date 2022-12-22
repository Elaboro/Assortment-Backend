import { Request } from "express";
import Joi from "Joi";
import {
  UserCreateDto,
  UserLoginDto,
} from "./UserDto";

export const validateUserCreateDto = (req: Request): UserCreateDto => {
  const body = req.body as UserCreateDto;

  const schema = Joi.object<UserCreateDto>({
    name: Joi.string().required(),
    password: Joi.string().required(),
    password_repeat: Joi.string().required(),
  }).unknown(false);

  const dto = Joi.attempt(body, schema) as UserCreateDto;

  return dto;
};

export const validateUserLoginDto = (req: Request): UserLoginDto => {
  const body = req.body as UserLoginDto;

  const schema = Joi.object<UserLoginDto>({
    name: Joi.string().required(),
    password: Joi.string().required(),
  }).unknown(false);

  const dto = Joi.attempt(body, schema) as UserLoginDto;

  return dto;
};