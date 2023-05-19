import { User } from "../user/User";

export type Sleep = {
  createdAt: Date;
  end: Date;
  id: string;
  quality: number | null;
  start: Date;
  updatedAt: Date;
  users?: Array<User>;
};
