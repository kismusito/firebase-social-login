import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CONFIG } from "config";
import { logout } from "modules/auth/actions";
import { RootState } from "store";
import { customErrorHandler } from "utils/helpers/error-handler";
import { CreatePostDTO } from "./dto/create-post.dto";
import { UpdatePostDTO } from "./dto/update-post.dto copy";

import { Post } from "./schemas/post.schema";
import { postTypes } from "./types";

export const getPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
  postTypes.GET_POSTS,
  async (_, thunkApi) => {
    try {
      const request = await axios.get(`${CONFIG.API_URL}/posts`);
      return request.data.data;
    } catch (error) {
      throw thunkApi.rejectWithValue(customErrorHandler(error));
    }
  }
);

export const createPost = createAsyncThunk<
  Post,
  CreatePostDTO,
  { state: RootState; rejectValue: string }
>(postTypes.CREATE_POST, async ({ body, title }: CreatePostDTO, thunkApi) => {
  try {
    const user = thunkApi.getState().auth.user;
    if (user) {
      const request = await axios.post(`${CONFIG.API_URL}/posts`, {
        title,
        body,
        user_uuid: user.uid,
      });
      return request.data.data;
    }

    return thunkApi.dispatch(logout());
  } catch (error) {
    throw thunkApi.rejectWithValue(customErrorHandler(error));
  }
});

export const updatePost = createAsyncThunk<
  Post,
  UpdatePostDTO,
  { state: RootState; rejectValue: string }
>(
  postTypes.UPDATE_POST,
  async ({ body, title, id }: UpdatePostDTO, thunkApi) => {
    try {
      const user = thunkApi.getState().auth.user;
      if (user) {
        const request = await axios.put(
          `${CONFIG.API_URL}/posts`,
          {
            title,
            body,
          },
          { params: { id } }
        );
        return request.data.data;
      }

      return thunkApi.dispatch(logout());
    } catch (error) {
      throw thunkApi.rejectWithValue(customErrorHandler(error));
    }
  }
);

export const removePost = createAsyncThunk<
  Post,
  Pick<Post, "id">,
  { state: RootState; rejectValue: string }
>(postTypes.REMOVE_POST, async (id: Pick<Post, "id">, thunkApi) => {
  try {
    const user = thunkApi.getState().auth.user;
    if (user) {
      const request = await axios.delete(`${CONFIG.API_URL}/posts`, {
        params: { id },
      });
      return request.data.data;
    }

    return thunkApi.dispatch(logout());
  } catch (error) {
    throw thunkApi.rejectWithValue(customErrorHandler(error));
  }
});
