import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Meal = {
  carbs: number | null;
  createdAt: Date;
  description: string | null;
  fat: number | null;
  id: string;
  ingredients: JsonValue;
  mealType?: "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Other" | null;
  protein: number | null;
  updatedAt: Date;
  user?: User | null;
};
