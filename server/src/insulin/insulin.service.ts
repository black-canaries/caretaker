import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InsulinServiceBase } from "./base/insulin.service.base";

@Injectable()
export class InsulinService extends InsulinServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
