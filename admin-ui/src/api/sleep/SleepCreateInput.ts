import { UserCreateNestedManyWithoutSleepsInput } from "./UserCreateNestedManyWithoutSleepsInput";

export type SleepCreateInput = {
  end: Date;
  quality?: number | null;
  start: Date;
  users?: UserCreateNestedManyWithoutSleepsInput;
};
