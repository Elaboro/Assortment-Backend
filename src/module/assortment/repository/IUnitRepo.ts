import {
  UnitCreateDto,
  UnitUpdateDto,
} from "../AssortmentDto";
import { Unit } from "../Type";

export interface IUnitRepo {
  create(dto: UnitCreateDto): Promise<Unit>;
  update(dto: UnitUpdateDto): Promise<Unit>;
}