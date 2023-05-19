import { GlucoseCreateNestedManyWithoutUsersInput } from "./GlucoseCreateNestedManyWithoutUsersInput";
import { InsulinCreateNestedManyWithoutUsersInput } from "./InsulinCreateNestedManyWithoutUsersInput";
import { MealCreateNestedManyWithoutUsersInput } from "./MealCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SleepCreateNestedManyWithoutUsersInput } from "./SleepCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  glucose?: GlucoseCreateNestedManyWithoutUsersInput;
  insulin?: InsulinCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  meals?: MealCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  sleep?: SleepCreateNestedManyWithoutUsersInput;
  username: string;
};
