import {
  UnitCreateDto,
  UnitUpdateDto,
} from "../AssortmentDto";
import { IUnitRepo } from "./IUnitRepo";
import { PrismaClient, Unit } from "@prisma/client";

export class UnitRepo implements IUnitRepo {

  private prisma = new PrismaClient();

  async create(dto: UnitCreateDto): Promise<Unit> {
    return this.prisma.unit.create({ data: dto });
  }

  async update(dto: UnitUpdateDto): Promise<Unit> {
    return this.prisma.unit.update({
      data: dto,
      where: { id: dto.id }
    });
  }
}