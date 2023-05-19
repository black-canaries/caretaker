import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type InsulinWhereInput = {
  dose?: FloatFilter;
  id?: StringFilter;
  users?: UserListRelationFilter;
};
