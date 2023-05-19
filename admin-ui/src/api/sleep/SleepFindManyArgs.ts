import { SleepWhereInput } from "./SleepWhereInput";
import { SleepOrderByInput } from "./SleepOrderByInput";

export type SleepFindManyArgs = {
  where?: SleepWhereInput;
  orderBy?: Array<SleepOrderByInput>;
  skip?: number;
  take?: number;
};
