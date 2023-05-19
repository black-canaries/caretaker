import { UserCreateNestedManyWithoutInsulinsInput } from "./UserCreateNestedManyWithoutInsulinsInput";

export type InsulinCreateInput = {
  dose: number;
  users?: UserCreateNestedManyWithoutInsulinsInput;
};
