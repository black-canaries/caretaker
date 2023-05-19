import { Insulin as TInsulin } from "../api/insulin/Insulin";

export const INSULIN_TITLE_FIELD = "id";

export const InsulinTitle = (record: TInsulin): string => {
  return record.id || String(record.id);
};
