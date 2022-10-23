import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { login, loginWithThirdPartyApp, register, setUser } from "./actions";
import { authPrefix } from "./types";
import { AuthInitialState } from "./types/initial-state.type";

const initialState: AuthInitialState = {};

const authSlice = createSlice({
  name: authPrefix,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
    builder.addMatcher(
      isAnyOf(login.pending, register.pending, loginWithThirdPartyApp.pending),
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        login.fulfilled,
        register.fulfilled,
        loginWithThirdPartyApp.fulfilled
      ),
      (state, action) => {
        state.loading = false;
        state.user = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(
        login.rejected,
        register.rejected,
        loginWithThirdPartyApp.rejected
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export default authSlice.reducer;
