import { User } from "firebase/auth";

export type AuthInitialState = {
  loading?: boolean;
  error?: string | undefined;
  user?: User | undefined;
};
