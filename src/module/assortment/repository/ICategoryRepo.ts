import {
  CategoryCreateDto,
  CategoryUpdateDto,
} from "../AssortmentDto";
import { Category } from "../Type";

export interface ICategoryRepo {
  create(dto: CategoryCreateDto): Promise<Category>;
  update(dto: CategoryUpdateDto): Promise<Category>;
}