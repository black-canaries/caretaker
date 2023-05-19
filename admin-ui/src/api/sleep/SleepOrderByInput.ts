import { SortOrder } from "../../util/SortOrder";

export type SleepOrderByInput = {
  createdAt?: SortOrder;
  end?: SortOrder;
  id?: SortOrder;
  quality?: SortOrder;
  start?: SortOrder;
  updatedAt?: SortOrder;
};
