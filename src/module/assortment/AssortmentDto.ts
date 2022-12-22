import {
  Assortment,
  Category,
  Unit,
} from "./Type";

export type AssortmentCreateDto = {
  name: Assortment["name"];
  description?: Assortment["description"];
  size?: Assortment["size"];
  price?: Assortment["price"];
  category?: Assortment["category"];
  image?: Assortment["image"];
};

export type AssortmentUpdateDto = AssortmentCreateDto & {
  id: Assortment["id"];
};

export type CategoryCreateDto = {
  name: Category["name"];
};

export type CategoryUpdateDto = CategoryCreateDto & {
  id: Category["id"];
};

export type UnitCreateDto = {
  name: Unit["name"];
};

export type UnitUpdateDto = UnitCreateDto & {
  id: Unit["id"];
};
