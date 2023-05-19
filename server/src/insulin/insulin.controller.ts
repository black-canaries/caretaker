import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InsulinService } from "./insulin.service";
import { InsulinControllerBase } from "./base/insulin.controller.base";

@swagger.ApiTags("insulins")
@common.Controller("insulins")
export class InsulinController extends InsulinControllerBase {
  constructor(
    protected readonly service: InsulinService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
