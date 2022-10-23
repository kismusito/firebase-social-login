import { Post } from "../schemas/post.schema";

export type PostInitialState = {
  posts: Post[];
  loading?: boolean;
  error?: string;
};
