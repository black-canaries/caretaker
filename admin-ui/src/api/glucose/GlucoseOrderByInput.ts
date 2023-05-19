import { SortOrder } from "../../util/SortOrder";

export type GlucoseOrderByInput = {
  createdAt?: SortOrder;
  glucoseLevel?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
