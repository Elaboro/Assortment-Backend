import {
  AssortmentCreateDto,
  AssortmentUpdateDto,
} from "../AssortmentDto";
import { Assortment } from "../Type";

export interface IAssortmentRepo {
  getList: () => Promise<Assortment[]>;
  create: (dto: AssortmentCreateDto) => Promise<Assortment>;
  update: (dto: AssortmentUpdateDto) => Promise<Assortment>;
}