import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealWhereInput = {
  carbs?: FloatNullableFilter;
  fat?: FloatNullableFilter;
  id?: StringFilter;
  ingredients?: JsonFilter;
  mealType?: "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Other";
  protein?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
