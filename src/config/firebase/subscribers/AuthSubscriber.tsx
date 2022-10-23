import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { useAppDispatch } from "store";
import { logout, setUser } from "modules/auth/actions";

import { auth } from "..";

import { Children } from "utils/types/children.type";

export const AuthSubscriber = ({ children }: Children): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(logout());
      }
    });

    subscriber();
  }, [dispatch]);

  return children;
};
