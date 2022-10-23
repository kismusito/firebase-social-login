import { Post } from "../schemas/post.schema";

export type UpdatePostDTO = Pick<Post, "body" | "title" | "id">;
