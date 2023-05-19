import { User } from "../user/User";

export type Insulin = {
  createdAt: Date;
  dose: number;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
