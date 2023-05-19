import { Module } from "@nestjs/common";
import { InsulinModuleBase } from "./base/insulin.module.base";
import { InsulinService } from "./insulin.service";
import { InsulinController } from "./insulin.controller";
import { InsulinResolver } from "./insulin.resolver";

@Module({
  imports: [InsulinModuleBase],
  controllers: [InsulinController],
  providers: [InsulinService, InsulinResolver],
  exports: [InsulinService],
})
export class InsulinModule {}
