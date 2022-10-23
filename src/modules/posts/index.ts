import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { createPost, getPosts, removePost, updatePost } from "./actions";
import { postsPrefix } from "./types";
import { PostInitialState } from "./types/initial-state.type";

const initialState: PostInitialState = {
  posts: [],
};

const postSlice = createSlice({
  name: postsPrefix,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload, ...state.posts];
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
    });
    builder.addCase(removePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    });
    builder.addMatcher(
      isAnyOf(
        getPosts.rejected,
        createPost.rejected,
        updatePost.rejected,
        removePost.rejected
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export default postSlice.reducer;
