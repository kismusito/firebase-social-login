import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

const postState = (state: RootState) => state.posts;

export const getPostItems = createSelector(
  postState,
  (state) => state.posts
);
