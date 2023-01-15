import { PrismaClient } from "@prisma/client";
import {
  CategoryCreateDto,
  CategoryUpdateDto,
} from "../AssortmentDto";
import { Category } from "../Type";
import { ICategoryRepo } from "./ICategoryRepo";

export class CategoryRepo implements ICategoryRepo {
  
  private prisma = new PrismaClient();

  async create(dto: CategoryCreateDto): Promise<Category> {
    return this.prisma.category.create({ data: dto });
  }

  async update(dto: CategoryUpdateDto): Promise<Category> {
    return this.prisma.category.update({
      data: dto,
      where: { id: dto.id }
    });
  }

  async getList() {
    return this.prisma.category.findMany();
  }

  async getListWithAssortment() {
    return this.prisma.category.findMany({
      include: { assortment: { include: { assortment: true }}}
    });
  }
}