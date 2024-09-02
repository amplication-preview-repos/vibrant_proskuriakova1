/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Farmer as PrismaFarmer,
  Produce as PrismaProduce,
} from "@prisma/client";

export class FarmerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FarmerCountArgs, "select">): Promise<number> {
    return this.prisma.farmer.count(args);
  }

  async farmers(args: Prisma.FarmerFindManyArgs): Promise<PrismaFarmer[]> {
    return this.prisma.farmer.findMany(args);
  }
  async farmer(
    args: Prisma.FarmerFindUniqueArgs
  ): Promise<PrismaFarmer | null> {
    return this.prisma.farmer.findUnique(args);
  }
  async createFarmer(args: Prisma.FarmerCreateArgs): Promise<PrismaFarmer> {
    return this.prisma.farmer.create(args);
  }
  async updateFarmer(args: Prisma.FarmerUpdateArgs): Promise<PrismaFarmer> {
    return this.prisma.farmer.update(args);
  }
  async deleteFarmer(args: Prisma.FarmerDeleteArgs): Promise<PrismaFarmer> {
    return this.prisma.farmer.delete(args);
  }

  async findProduces(
    parentId: string,
    args: Prisma.ProduceFindManyArgs
  ): Promise<PrismaProduce[]> {
    return this.prisma.farmer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .produces(args);
  }
}
