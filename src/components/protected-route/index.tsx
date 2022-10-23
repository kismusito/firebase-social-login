import { Navigate } from "react-router-dom";

import { useAppSelector } from "store";

import { getUser } from "modules/auth/selectors";
import { Children } from "utils/types/children.type";

export const ProtectedRoute = ({ children }: Children): JSX.Element => {
  const user = useAppSelector(getUser);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
