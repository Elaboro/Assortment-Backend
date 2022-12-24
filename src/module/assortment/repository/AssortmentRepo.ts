import {
  Assortment,
  Prisma,
  PrismaClient,
} from "@prisma/client";
import {
  AssortmentCreateDto,
  AssortmentUpdateDto,
} from "../AssortmentDto";
import { IAssortmentRepo } from "./IAssortmentRepo";

export class AssortmentRepo implements IAssortmentRepo {
  private prisma = new PrismaClient();

  async getList(): Promise<Assortment[]> {
    return this.prisma.assortment.findMany({
      include: { category: true }
    });
  }

  async create({
    name,
    description,
    price,
    size,
    category,
    image,
  }: AssortmentCreateDto): Promise<Assortment> {
    const category_id_list = category.map(
      (v): Prisma.CategoryOnAssortmentUncheckedCreateWithoutAssortmentInput => 
      { return { category_id: v }}
    ); 

    const assortment = this.prisma.assortment.create({
      include: { category: true},
      data: {
        name,
        description,
        price,
        size,
        category: {
          create:  category_id_list
        },
      }
    });

    return assortment;
  }
  async update({
    id,
    name,
    description,
    price,
    size,
    category,
    image,
  }: AssortmentUpdateDto): Promise<Assortment> {
    const category_id_list = category.map(
      (v): Prisma.CategoryOnAssortmentUncheckedCreateWithoutAssortmentInput => 
      { return { category_id: v }}
    ); 

    return this.prisma.assortment.update({
      include: { category: true },
      data: {
        name,
        description,
        price,
        size,
        category: {
          deleteMany: { "category_id": {} },
          create: category_id_list
        },
      },
      where: { id }
    });
  }
}