import { UserUpdateManyWithoutGlucosesInput } from "./UserUpdateManyWithoutGlucosesInput";

export type GlucoseUpdateInput = {
  glucoseLevel?: number;
  users?: UserUpdateManyWithoutGlucosesInput;
};
