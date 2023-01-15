import {
  AssortmentCreateDto,
  AssortmentUpdateDto,
  CategoryCreateDto,
  CategoryUpdateDto,
  UnitCreateDto,
  UnitUpdateDto,
} from "./AssortmentDto";
import { AssortmentRepo } from "./repository/AssortmentRepo";
import { CategoryRepo } from "./repository/CategoryRepo";
import { UnitRepo } from "./repository/UnitRepo";
import {
  Assortment,
  Category,
  CategoryWithAssortment,
  Unit,
} from "./Type";

export class AssortmentService {
  private assortmentRepo = new AssortmentRepo();
  private categoryRepo = new CategoryRepo();
  private unitRepo = new UnitRepo();

  async createAssortment(dto: AssortmentCreateDto): Promise<Assortment> {
    return this.assortmentRepo.create(dto);
  }

  async updateAssortment(dto: AssortmentUpdateDto): Promise<Assortment> {
    return this.assortmentRepo.update(dto);
  }

  async getAssortmentList(): Promise<Assortment[]> {
    return this.assortmentRepo.getList();
  }

  async createCategory(dto: CategoryCreateDto): Promise<Category>{
    return this.categoryRepo.create(dto);
  }

  async updateCategory(dto: CategoryUpdateDto): Promise<Category>{
    return this.categoryRepo.update(dto);
  }

  async getCategoryList(): Promise<Category[]> {
    return this.categoryRepo.getList();
  }

  async getCategoryListWithAssortment(): Promise<CategoryWithAssortment[]> {
    const list =  await this.categoryRepo.getListWithAssortment();
    const result = list.map((category) => {
      return {
        ...category,
        assortment: category.assortment.map((assortment) => assortment.assortment)
      }
    });

    return result;
  }

  async createUnit(dto: UnitCreateDto): Promise<Unit> {
    return this.unitRepo.create(dto);
  }

  async updateUnit(dto: UnitUpdateDto): Promise<Unit> {
    return this.unitRepo.update(dto);
  }
}