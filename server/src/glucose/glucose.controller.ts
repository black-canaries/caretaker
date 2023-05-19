import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GlucoseService } from "./glucose.service";
import { GlucoseControllerBase } from "./base/glucose.controller.base";

@swagger.ApiTags("glucoses")
@common.Controller("glucoses")
export class GlucoseController extends GlucoseControllerBase {
  constructor(
    protected readonly service: GlucoseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
