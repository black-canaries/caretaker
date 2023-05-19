import { GlucoseUpdateManyWithoutUsersInput } from "./GlucoseUpdateManyWithoutUsersInput";
import { InsulinUpdateManyWithoutUsersInput } from "./InsulinUpdateManyWithoutUsersInput";
import { MealUpdateManyWithoutUsersInput } from "./MealUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SleepUpdateManyWithoutUsersInput } from "./SleepUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  glucose?: GlucoseUpdateManyWithoutUsersInput;
  insulin?: InsulinUpdateManyWithoutUsersInput;
  lastName?: string | null;
  meals?: MealUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  sleep?: SleepUpdateManyWithoutUsersInput;
  username?: string;
};
