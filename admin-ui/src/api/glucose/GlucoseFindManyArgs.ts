import { GlucoseWhereInput } from "./GlucoseWhereInput";
import { GlucoseOrderByInput } from "./GlucoseOrderByInput";

export type GlucoseFindManyArgs = {
  where?: GlucoseWhereInput;
  orderBy?: Array<GlucoseOrderByInput>;
  skip?: number;
  take?: number;
};
