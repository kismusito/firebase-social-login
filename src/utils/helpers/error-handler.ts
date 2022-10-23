import { AxiosError } from "axios";
import { FirebaseError } from "firebase/app";

export const customErrorHandler = (error: any): string => {
  if (
    error instanceof FirebaseError ||
    error instanceof Error ||
    error instanceof AxiosError
  ) {
    return error.message;
  }

  return "Something strange happens";
};
