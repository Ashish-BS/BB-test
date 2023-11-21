import config from "@/constants";
import { BlogReturnType } from "../types/services/blog";
import { fetchGet } from "./service-clients";

export const fetchBlogs = async (filter?: {
  [key: string]: any;
}): Promise<BlogReturnType> => {
  let url = `${process.env.NEXT_PUBLIC_CONTENT_API_URL}/posts?populate=*&sort=publishDate:desc&filters[publishingPlatforms][$eq]=Bombay Bees`;
  if (filter) {
    const { page, pageSize, searchBlog, isFeaturedBlog, category } = filter;
    if (page) {
      url += `pagination[page]=${page}&`;
    }
    if (pageSize) {
      url += `pagination[pageSize]=${pageSize}`;
    }
    if (searchBlog && searchBlog.trim().length) {
      url += `&filters[$or][0][title][$containsi]=${searchBlog}&filters[$or][1][content][$containsi]=${searchBlog}`;
    }
    if (isFeaturedBlog) {
      url += `&filters[isFeaturedPost][$eq]=true`;
    }
    if (isFeaturedBlog === false) {
      url += `&filters[isFeaturedPost][$ne]=true`;
    }
    if (category && category.trim().length) {
      url += `&filters[category][slug]=${category}`;
    }
  } else {
    url += `pagination[pageSize]=${config.DEFAULT_PAGE_SIZE}`;
  }
  return await fetchGet(url);
};

export const fetchBlog = async (slug: string): Promise<BlogReturnType> => {
  return await fetchGet(
    `${process.env.NEXT_PUBLIC_CONTENT_API_URL}/posts?populate=*&filters[slug][$eq]=${slug}`
  );
};
