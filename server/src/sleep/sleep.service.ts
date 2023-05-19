import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SleepServiceBase } from "./base/sleep.service.base";

@Injectable()
export class SleepService extends SleepServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
