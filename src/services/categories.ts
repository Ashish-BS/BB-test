import { CategoryReturnType } from "@/types/services/category";
import { fetchGet } from "./service-clients";

export const fetchAllBlogsCategories =
  async (): Promise<CategoryReturnType> => {
    const url = `${process.env.NEXT_PUBLIC_CONTENT_API_URL}/categories?populate=*&filters[publishingPlatforms][$eq]=Bombay Bees`;
    return await fetchGet(url);
  };

export const fetchAllCaseStudiesCategories =
  async (): Promise<CategoryReturnType> => {
    const url = `${process.env.NEXT_PUBLIC_CONTENT_API_URL}/case-study-categories?populate=*&filters[publishingPlatforms][$eq]=Bombay Bees`;
    return await fetchGet(url);
  };
