import { Meal as TMeal } from "../api/meal/Meal";

export const MEAL_TITLE_FIELD = "id";

export const MealTitle = (record: TMeal): string => {
  return record.id || String(record.id);
};
