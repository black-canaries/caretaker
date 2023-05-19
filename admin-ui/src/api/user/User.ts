import { Glucose } from "../glucose/Glucose";
import { Insulin } from "../insulin/Insulin";
import { Meal } from "../meal/Meal";
import { JsonValue } from "type-fest";
import { Sleep } from "../sleep/Sleep";

export type User = {
  createdAt: Date;
  firstName: string | null;
  glucose?: Array<Glucose>;
  id: string;
  insulin?: Array<Insulin>;
  lastName: string | null;
  meals?: Array<Meal>;
  roles: JsonValue;
  sleep?: Array<Sleep>;
  updatedAt: Date;
  username: string;
};
