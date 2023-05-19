import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SleepService } from "./sleep.service";
import { SleepControllerBase } from "./base/sleep.controller.base";

@swagger.ApiTags("sleeps")
@common.Controller("sleeps")
export class SleepController extends SleepControllerBase {
  constructor(
    protected readonly service: SleepService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
