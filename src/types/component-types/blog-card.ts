import { BlogAPIResponseType } from "../data/blog";

export interface BlogCardPropType {
  blog: BlogAPIResponseType;
  isFeatured?: boolean;
}
