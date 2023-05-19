import { Module } from "@nestjs/common";
import { GlucoseModuleBase } from "./base/glucose.module.base";
import { GlucoseService } from "./glucose.service";
import { GlucoseController } from "./glucose.controller";
import { GlucoseResolver } from "./glucose.resolver";

@Module({
  imports: [GlucoseModuleBase],
  controllers: [GlucoseController],
  providers: [GlucoseService, GlucoseResolver],
  exports: [GlucoseService],
})
export class GlucoseModule {}
