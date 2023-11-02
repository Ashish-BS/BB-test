import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShortDescription from "../common/ShortDescription";
import { getLocaleDate } from "@/utils/date";
import { formatName, isSet } from "@/utils/common/utility-functions";
import { BlogCardPropType } from "@/types/component-types/blog-card";
import removeMarkdown from "remove-markdown";

const BlogCard: React.FC<BlogCardPropType> = ({ blog, isFeatured }) => {
  return (
    <div className="b-blog-item" data-testid="b-blog-item">
      <div className="b-blog-image-container">
        {isSet(blog.attributes.featuredImage) &&
          isSet(blog.attributes.featuredImage.data) && (
            <>
              <div className="b-blog-image">
                <Link href={`/blog/${blog.attributes.slug}`}>
                  <Image
                    width={570}
                    height={281}
                    src={
                      blog.attributes.featuredImage.data.attributes.url.includes(
                        process.env.NEXT_PUBLIC_BLOG_IMAGES_DOMAIN as string
                      )
                        ? `${blog.attributes.featuredImage.data.attributes.url}`
                        : `${process.env.NEXT_PUBLIC_IMAGES_URL}${blog.attributes.featuredImage.data.attributes.url}`
                    }
                    alt={
                      blog.attributes.featuredImage.data.attributes
                        .alternativeText
                    }
                  />
                </Link>
              </div>
              {isFeatured && <span className="b-featured-tag">Featured</span>}
            </>
          )}
        {blog.attributes.category?.data && (
          <ul className="b-blog-category">
            <li>
              <span className="badge">
                {blog.attributes.category.data?.attributes?.name}
              </span>
            </li>
          </ul>
        )}
      </div>
      <div className="b-blog-content">
        <ul className="b-blog-date">
          {blog.attributes?.publishDate && (
            <li>{getLocaleDate(blog.attributes.publishDate)}</li>
          )}
          {blog.attributes.author.data && (
            <li>
              {formatName(blog.attributes?.author?.data?.attributes?.fullname)}
            </li>
          )}
        </ul>
        {blog.attributes.slug && blog.attributes.title && (
          <Link href={`/blog/${encodeURI(blog.attributes.slug)}`}>
            <h2>{blog.attributes.title}</h2>
          </Link>
        )}
        {blog.attributes.content && (
          <div className="b-blog-desc">
            <ShortDescription
              text={removeMarkdown(blog.attributes.content)}
              numberOfCharactersToShow={25}
            />
          </div>
        )}
        <Link
          href={`/blog/${encodeURI(blog.attributes.slug)}`}
          className="b-read-more"
        >
          Keep Reading
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
