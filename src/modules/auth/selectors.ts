import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

const authState = (state: RootState) => state.auth;

export const getUser = createSelector(authState, (auth) => auth.user);
