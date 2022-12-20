
export type AssortmentItem = {
  id: string;
  name: string;
  description: string;
  size_conditional: string;
  price: number;
  category: AssortmentCategory;
  image: AssortmentImage[];
};

export type AssortmentCategory = {
  id: string;
  name: string;
};

export type AssortmentImage = {
  id: string;
  name: string;
};
