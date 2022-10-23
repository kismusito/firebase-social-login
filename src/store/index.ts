import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { logout } from "modules/auth/actions";

// Reducers
import auth from "modules/auth";
import posts from "modules/posts";

const combinedReducers = combineReducers({ auth, posts });

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === logout.fulfilled.toString()) {
    state = {} as RootState;
  }
  return combinedReducers(state, action);
};

const store = configureStore({
  reducer: { auth, posts },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
