import { Request } from "express";
import Joi from "Joi";
import {
  AssortmentCreateDto,
  AssortmentUpdateDto,
  CategoryCreateDto,
  CategoryUpdateDto,
  UnitCreateDto,
  UnitUpdateDto,
} from "./AssortmentDto";

export const validateAssortmentCreateDto = (req: Request): AssortmentCreateDto => {
  const body = req.body as AssortmentCreateDto;

  const schema = Joi.object<AssortmentCreateDto>({
    name: Joi.string().required(),
    description: Joi.string(),
    size: Joi.number(),
    price: Joi.number(),
    category: Joi.array().items(
      Joi.string().uuid({ version: "uuidv4" })
    ),
    image: Joi.array().items(
      Joi.string().uuid({ version: "uuidv4" })
    ),
  }).unknown(false);

  const dto = Joi.attempt(body, schema) as AssortmentCreateDto;

  return dto;
};

export const validateAssortmentUpdateDto = (req: Request): AssortmentUpdateDto => {
  const body = req.body as AssortmentUpdateDto;

  const schema = Joi.object<AssortmentUpdateDto>({
    id: Joi.string().uuid({ version: "uuidv4" }).required(),
    name: Joi.string().required(),
    description: Joi.string(),
    size: Joi.number(),
    price: Joi.number(),
    category: Joi.array().items(
      Joi.string().uuid({ version: "uuidv4" })
    ),
    image: Joi.array().items(
      Joi.string().uuid({ version: "uuidv4" })
    ),
  }).unknown(false);

  const dto = Joi.attempt(body, schema) as AssortmentUpdateDto;

  return dto;
};

export const validateCategoryCreateDto = (req: Request): CategoryCreateDto => {
  const body = req.body as CategoryCreateDto;

  const schema = Joi.object<CategoryCreateDto>({
    name: Joi.string().required(),
  }).unknown(false);

  const dto = Joi.attempt(body, schema) as CategoryCreateDto;

  return dto;
};

export const validateCategoryUpdateDto = (req: Request): CategoryUpdateDto => {
  const body = req.body as CategoryUpdateDto;

  const schema = Joi.object<CategoryUpdateDto>({
    id: Joi.string().uuid({ version: "uuidv4" }).required(),
    name: Joi.string().required(),
  }).unknown(false);

  const dto = Joi.attempt(body, schema) as CategoryUpdateDto;

  return dto;
};

export const validateUnitCreateDto = (req: Request): UnitCreateDto => {
  const body = req.body as UnitCreateDto;

  const schema = Joi.object<UnitCreateDto>({
    name: Joi.string().required(),
  }).unknown(false);

  const dto = Joi.attempt(body, schema) as UnitCreateDto;

  return dto;
};

export const validateUnitUpdateDto = (req: Request): UnitUpdateDto => {
  const body = req.body as UnitUpdateDto;

  const schema = Joi.object<UnitUpdateDto>({
    id: Joi.string().uuid({ version: "uuidv4" }).required(),
    name: Joi.string().required(),
  }).unknown(false);

  const dto = Joi.attempt(body, schema) as UnitUpdateDto;

  return dto;
};
