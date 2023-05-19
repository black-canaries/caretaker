import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GlucoseListRelationFilter } from "../glucose/GlucoseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InsulinListRelationFilter } from "../insulin/InsulinListRelationFilter";
import { MealListRelationFilter } from "../meal/MealListRelationFilter";
import { SleepListRelationFilter } from "../sleep/SleepListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  glucose?: GlucoseListRelationFilter;
  id?: StringFilter;
  insulin?: InsulinListRelationFilter;
  lastName?: StringNullableFilter;
  meals?: MealListRelationFilter;
  sleep?: SleepListRelationFilter;
  username?: StringFilter;
};
