import { SortOrder } from "../../util/SortOrder";

export type MealOrderByInput = {
  carbs?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  fat?: SortOrder;
  id?: SortOrder;
  ingredients?: SortOrder;
  mealType?: SortOrder;
  protein?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
