import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

import { auth } from "config/firebase";

import { AuthThirdPartyAppProvider } from "utils/enums/provider-keys";
import { customErrorHandler } from "utils/helpers/error-handler";
import { AuthDTO } from "./dto/auth.dto";
import { thirdPartyAppProviders } from "./providers";
import { authTypes } from "./types";

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  authTypes.LOGOUT,
  async (_, thunkApi) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkApi.rejectWithValue(customErrorHandler(error));
    }
  }
);

export const setUser = createAction<User>(authTypes.SET_USER);

export const login = createAsyncThunk<User, AuthDTO, { rejectValue: string }>(
  authTypes.LOGIN,
  async ({ email, password }: AuthDTO, thunkApi) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(customErrorHandler(error));
    }
  }
);

export const register = createAsyncThunk<
  User,
  AuthDTO,
  { rejectValue: string }
>(authTypes.REGISTER, async ({ email, password }: AuthDTO, thunkApi) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    return thunkApi.rejectWithValue(customErrorHandler(error));
  }
});

export const loginWithThirdPartyApp = createAsyncThunk<
  User,
  AuthThirdPartyAppProvider,
  { rejectValue: string }
>(
  authTypes.LOGIN_WITH_THIRD_PARTY_APP,
  async (provider: AuthThirdPartyAppProvider, thunkApi) => {
    try {
      const { user } = await signInWithPopup(
        auth,
        thirdPartyAppProviders[provider]
      );
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(customErrorHandler(error));
    }
  }
);
