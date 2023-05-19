import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SleepWhereInput = {
  end?: DateTimeFilter;
  id?: StringFilter;
  quality?: IntNullableFilter;
  users?: UserListRelationFilter;
};
