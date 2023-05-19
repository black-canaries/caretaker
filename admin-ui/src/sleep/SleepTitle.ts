import { Sleep as TSleep } from "../api/sleep/Sleep";

export const SLEEP_TITLE_FIELD = "id";

export const SleepTitle = (record: TSleep): string => {
  return record.id || String(record.id);
};
