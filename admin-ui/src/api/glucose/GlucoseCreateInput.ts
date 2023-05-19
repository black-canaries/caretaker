import { UserCreateNestedManyWithoutGlucosesInput } from "./UserCreateNestedManyWithoutGlucosesInput";

export type GlucoseCreateInput = {
  glucoseLevel: number;
  users?: UserCreateNestedManyWithoutGlucosesInput;
};
