import {
  AssortmentCategory,
  AssortmentImage,
} from "./AssortmentItem";


export type AssortmentCreateItemDto = {
  name: string;
  description: string;
  size_conditional: string;
  price: number;
  category: AssortmentCategory;
  image: AssortmentImage[];
};

export type AssortmentUpdateItemDto = AssortmentCreateItemDto & {
  id: string;
};
