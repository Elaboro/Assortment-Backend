import {
  AssortmentCreateItemDto,
  AssortmentUpdateItemDto,
} from "../AssortmentDto";
import { AssortmentItem } from "../AssortmentItem";

export interface IAssortmentRepo {
  getAssortment: () => Promise<AssortmentItem[]>;
  createItem: (item: AssortmentCreateItemDto) => Promise<AssortmentItem>;
  updateItem: (item: AssortmentUpdateItemDto) => Promise<AssortmentItem>;
}