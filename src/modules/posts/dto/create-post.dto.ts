import { Post } from "../schemas/post.schema";

export type CreatePostDTO = Pick<Post, "body" | "title">;
