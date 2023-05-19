import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GlucoseServiceBase } from "./base/glucose.service.base";

@Injectable()
export class GlucoseService extends GlucoseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
