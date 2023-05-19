import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealCreateInput = {
  carbs?: number | null;
  description?: string | null;
  fat?: number | null;
  ingredients?: InputJsonValue;
  mealType?: "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Other" | null;
  protein?: number | null;
  user?: UserWhereUniqueInput | null;
};
