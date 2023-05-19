import { Glucose as TGlucose } from "../api/glucose/Glucose";

export const GLUCOSE_TITLE_FIELD = "id";

export const GlucoseTitle = (record: TGlucose): string => {
  return record.id || String(record.id);
};
