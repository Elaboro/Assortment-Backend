
export type Assortment = {
  id: string;
  name: string;
  description?: string;
  size?: number;
  price?: number;
  category?: Category[];
  image?: Image[];
  unit?: Unit;
};

export type Category = {
  id: string;
  name: string;
};

export type CategoryWithAssortment = {
  id: string;
  name: string;
  assortment: Assortment[];
};

export type Image = {
  id: string;
  name: string;
};

export type Unit = {
  id: string;
  name: string;
}
