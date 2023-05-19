import { UserUpdateManyWithoutSleepsInput } from "./UserUpdateManyWithoutSleepsInput";

export type SleepUpdateInput = {
  end?: Date;
  quality?: number | null;
  start?: Date;
  users?: UserUpdateManyWithoutSleepsInput;
};
