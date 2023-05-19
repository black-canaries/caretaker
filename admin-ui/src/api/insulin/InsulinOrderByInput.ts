import { SortOrder } from "../../util/SortOrder";

export type InsulinOrderByInput = {
  createdAt?: SortOrder;
  dose?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
