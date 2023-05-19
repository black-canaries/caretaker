import { Module } from "@nestjs/common";
import { SleepModuleBase } from "./base/sleep.module.base";
import { SleepService } from "./sleep.service";
import { SleepController } from "./sleep.controller";
import { SleepResolver } from "./sleep.resolver";

@Module({
  imports: [SleepModuleBase],
  controllers: [SleepController],
  providers: [SleepService, SleepResolver],
  exports: [SleepService],
})
export class SleepModule {}
