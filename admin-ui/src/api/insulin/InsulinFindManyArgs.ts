import { InsulinWhereInput } from "./InsulinWhereInput";
import { InsulinOrderByInput } from "./InsulinOrderByInput";

export type InsulinFindManyArgs = {
  where?: InsulinWhereInput;
  orderBy?: Array<InsulinOrderByInput>;
  skip?: number;
  take?: number;
};
