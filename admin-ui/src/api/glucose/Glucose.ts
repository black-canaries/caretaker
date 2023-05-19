import { User } from "../user/User";

export type Glucose = {
  createdAt: Date;
  glucoseLevel: number;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
