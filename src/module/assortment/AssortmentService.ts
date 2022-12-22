import {
  AssortmentCreateDto,
  AssortmentUpdateDto,
  CategoryCreateDto,
  CategoryUpdateDto,
  UnitCreateDto,
  UnitUpdateDto,
} from "./AssortmentDto";
import {
  Assortment,
  Category,
  Unit,
} from "./Type";

export class AssortmentService {
  async createAssortment(dto: AssortmentCreateDto): Promise<Assortment> {
    return;
  }

  async updateAssortment(dto: AssortmentUpdateDto): Promise<Assortment> {
    return;
  }

  async getAssortmentList(): Promise<Assortment[]> {
    return [];
  }

  async createCategory(dto: CategoryCreateDto): Promise<Category>{
    return;
  }
  async updateCategory(dto: CategoryUpdateDto): Promise<Category>{
    return;
  }

  async createUnit(dto: UnitCreateDto): Promise<Unit> {
    return;
  }

  async updateUnit(dto: UnitUpdateDto): Promise<Unit> {
    return;
  }
}