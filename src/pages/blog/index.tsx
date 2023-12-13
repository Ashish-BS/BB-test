import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { BlogPageProps } from "@/types/page-types/blog";
import ResultnotFound from "../../components/common/ResultNotFound";
import ShortDescription from "../../components/common/ShortDescription";
import NoResponseFromCms from "../../components/common/NoResponse";
import { fetchBlogs } from "../../services/blogs";
import { getLocaleDate } from "@/utils/date";
import { BlogAPIResponseType } from "@/types/data/blog";
import config from "@/constants";
import {
  formatName,
  isSet,
  sortObjectArrayBasedOnBooleanProp,
} from "@/utils/common/utility-functions";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { fetchAllBlogsCategories } from "@/services/categories";
import BlogCard from "@/components/card/blog-card";
import { debounce } from "lodash";
import removeMarkdown from "remove-markdown";
import { CategoryType } from "@/types/data/category";
import { BlogReturnType } from "@/types/services/blog";
import { CategoryReturnType } from "@/types/services/category";

const Blogs: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  console.log(props.blogs);
  let categoryIndex = -1;
  props.category &&
    props.categories &&
    props.category.trim().length &&
    props.categories.forEach((category, index) => {
      if (category.attributes.slug === props.category) {
        categoryIndex = index;
      }
    });
  const router = useRouter();
  const [searchedKeywordsOrText, setSearchedKeywordsOrText] = useState(
    props.searchBlog && props.searchBlog.trim().length ? props.searchBlog : ""
  );
  const [featuredBlogs] = useState<BlogAPIResponseType[] | null>(
    props.featuredBlogs && props.featuredBlogs.length > 0
      ? props.featuredBlogs
      : null
  );

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    slug: string
  ) => {
    event.preventDefault();
    router.push(`/blog/${slug}`);
  };

  const searchBlog = useCallback(
    debounce((searchTerm: string) => {
      if (props.blogs) {
        router.replace({
          pathname: config.PAGE_NAME.BLOG,
          query: { search: searchTerm },
        });
      }
    }, 1000),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedKeywordsOrText(e.target.value);
    searchBlog.cancel();
    if (searchedKeywordsOrText.trim().length > 0) {
      searchBlog(e.target.value);
    }
  };

  const filterByCategory = (category: string) => {
    setSearchedKeywordsOrText("");
    if (props.blogs) {
      if (category && category.length) {
        router.push({ pathname: config.PAGE_NAME.BLOG, query: { category } });
      } else {
        router.replace({ pathname: config.PAGE_NAME.BLOG });
      }
    }
  };

  return (
    <>
      <section className="b-blog-section" data-testid="b-blog-section">
        <div className={props.blogs ? "container" : ""}>
          <div className="b-section-title">
            <h1>
              <span className="b-custom-underline">Blog</span>
            </h1>
            <p>
              Boost your online presence with our expertly crafted digital
              marketing blogs. Stay ahead with the latest trends and strategies.
            </p>
          </div>
          {!props.blogs ? (
            <NoResponseFromCms
              description={config.MESSAGE.NO_RESPONSE_FROM_CMS}
              className="b-no-content"
            />
          ) : (
            featuredBlogs &&
            featuredBlogs.length && (
              <>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  initialSlide={0}
                  loop={true}
                  centeredSlides={true}
                  navigation={true}
                  pagination={{
                    el: ".swiper-pagination-3",
                    clickable: true,
                  }}
                  breakpoints={{
                    0: {
                      centeredSlides: true,
                    },
                    575: {
                      centeredSlides: true,
                    },
                    991: {
                      centeredSlides: true,
                    },
                  }}
                >
                  {featuredBlogs.map((featuredBlog, index) => (
                    <SwiperSlide key={featuredBlog.id + index.toString()}>
                      <div className="b-blog-container">
                        <div className="b-blog-left">
                          {isSet(featuredBlog.attributes.featuredImage) &&
                            isSet(
                              featuredBlog.attributes.featuredImage.data
                            ) && (
                              <div className="b-blog-image">
                                <Link
                                  href={`/blog/${encodeURI(
                                    featuredBlog.attributes.slug
                                  )}`}
                                >
                                  <Image
                                    width={468}
                                    height={435}
                                    priority
                                    src={
                                      featuredBlog.attributes.featuredImage.data.attributes.url.includes(
                                        process.env
                                          .NEXT_PUBLIC_BLOG_IMAGES_DOMAIN as string
                                      )
                                        ? `${featuredBlog.attributes.featuredImage.data.attributes.url}`
                                        : `${process.env.NEXT_PUBLIC_IMAGES_URL}${featuredBlog.attributes.featuredImage.data.attributes.url}`
                                    }
                                    alt={
                                      featuredBlog.attributes.featuredImage.data
                                        .attributes.alternativeText
                                    }
                                  />
                                </Link>
                              </div>
                            )}
                          {featuredBlog.attributes?.category?.data && (
                            <div className="b-blog-category">
                              <span className="badge">
                                {
                                  featuredBlog.attributes.category?.data
                                    ?.attributes?.name
                                }
                              </span>
                            </div>
                          )}
                          <span className="b-featured-tag">Featured</span>
                        </div>
                        <div className="b-blog-right">
                          {featuredBlog.attributes?.slug &&
                            featuredBlog.attributes?.title && (
                              <Link
                                href={`/blog/${encodeURI(
                                  featuredBlog.attributes.slug
                                )}`}
                                className="b-read-more"
                              >
                                <h2>{featuredBlog.attributes.title}</h2>
                              </Link>
                            )}
                          {featuredBlog.attributes?.publishDate && (
                            <h3>
                              {getLocaleDate(
                                featuredBlog.attributes.publishDate
                              )}{" "}
                              |{" "}
                              {formatName(
                                featuredBlog.attributes?.author?.data
                                  ?.attributes?.fullname
                              )}
                            </h3>
                          )}
                          {featuredBlog.attributes?.content && (
                            <p>
                              <ShortDescription
                                text={removeMarkdown(
                                  featuredBlog.attributes.content
                                )}
                                numberOfCharactersToShow={50}
                              />
                            </p>
                          )}
                          <button
                            className="b-blog-btn"
                            onClick={(e) =>
                              handleClick(e, featuredBlog.attributes.slug)
                            }
                          >
                            Keep Reading
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="swiper-pagination-3"></div>
              </>
            )
          )}
          {props.blogs && props.blogs.length > 0}
          <div className="b-blog-list">
            <div className="b-blog-head row">
              {props.categories && props.categories.length ? (
                <>
                  <div className="b-blog-head-left col-lg-9 col-md-10">
                    <ul className="b-blog-head-left-list">
                      <li onClick={() => filterByCategory("")}>
                        <span
                          className={`${props.category === "" ? "active" : ""}`}
                        >
                          All
                        </span>
                      </li>
                      {props.categories &&
                        props.categories.length &&
                        props.categories.slice(0, 3).map((category, index) => (
                          <li
                            onClick={() =>
                              filterByCategory(category.attributes.slug)
                            }
                            key={`${index}-${category.id}`}
                          >
                            <span
                              className={`${
                                props.category === category.attributes.slug
                                  ? "active"
                                  : ""
                              }`}
                            >
                              {category.attributes.name}
                            </span>
                          </li>
                        ))}
                      <li>
                        <div
                          className={`b-blog-head-select ${
                            categoryIndex > 2 ? "active" : ""
                          }`}
                        >
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {categoryIndex > 2
                                ? `${props.selectedCategoryName}`
                                : `More`}
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              {props.categories &&
                                props.categories.length &&
                                props.categories.slice(3).map((category) => (
                                  <li key={category.id}>
                                    <button
                                      className={`dropdown-item ${
                                        props.category ===
                                        category.attributes.slug
                                          ? "selected"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        filterByCategory(
                                          category.attributes.slug
                                        )
                                      }
                                    >
                                      {category.attributes.name}
                                    </button>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="b-case-filters b-blogs-filters col-lg-4 col-md-5 col-sm-12">
                    <div className="b-case-select">
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {props.selectedCategoryName &&
                          props.selectedCategoryName.length
                            ? `${props.selectedCategoryName}`
                            : `All`}
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <button
                              className={`dropdown-item ${
                                props.category === "" ? "selected" : ""
                              }`}
                              onClick={() => filterByCategory("")}
                            >
                              All
                            </button>
                          </li>
                          {props.categories &&
                            props.categories.length &&
                            props.categories.map((category) => (
                              <li key={category.id}>
                                <button
                                  className={`dropdown-item ${
                                    props.category === category.attributes.slug
                                      ? "selected"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    filterByCategory(category.attributes.slug)
                                  }
                                >
                                  {category.attributes.name}
                                </button>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              <div className="b-blog-head-right col-lg-3 col-md-6 col-sm-12">
                <a className="active">
                  <div className="b-search-input">
                    <Image
                      width={24}
                      height={24}
                      src="/images/search-normal.svg"
                      alt="Search-icon"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      onChange={(e) => handleSearchChange(e)}
                      value={searchedKeywordsOrText}
                    />
                  </div>
                </a>
              </div>
            </div>
            {props.blogs && (
              <div className="b-blog-listing">
                <div className="row">
                  {props.blogs.length === 0 ? (
                    <>
                      <ResultnotFound
                        textMessage={
                          props.selectedCategoryName &&
                          props.selectedCategoryName.length > 0
                            ? config.MESSAGE.BLOG_NOT_FOUND_WITH_CATEGORY +
                              `"${props.selectedCategoryName}"`
                            : searchedKeywordsOrText &&
                              searchedKeywordsOrText.length > 0
                            ? config.MESSAGE.BLOG_NOT_FOUND_WITH_CATEGORY +
                              `"${searchedKeywordsOrText}"`
                            : config.MESSAGE.BLOG_NOT_FOUND_GENERIC
                        }
                        pageName={config.PAGE_NAME.BLOG}
                        multiple={
                          featuredBlogs && featuredBlogs.length > 1
                            ? true
                            : false
                        }
                      />
                      {featuredBlogs &&
                        featuredBlogs.length &&
                        featuredBlogs.map((blog, index) => (
                          <div
                            className="col-lg-6"
                            key={blog.id + index + Math.random()}
                          >
                            <BlogCard blog={blog} isFeatured />
                          </div>
                        ))}
                    </>
                  ) : (
                    props.blogs &&
                    props.blogs.length &&
                    props.blogs.map((blog, index) => {
                      console.log(blog); // Add your console.log statement here
                      return (
                        <div
                          className="col-lg-6"
                          key={blog.id + index + Math.random()}
                        >
                          <BlogCard blog={blog} />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async (
  context
) => {
  context.res.setHeader(
    config.HEADERS.CACHE_CONTROL.KEY,
    config.HEADERS.CACHE_CONTROL.VALUE
  );
  let selectedCategoryName = "",
    sortedCategories: CategoryType[];

  const searchBlog = (context.query["search"] as string) || "";
  const category = (context.query["category"] as string) || "";

  const filter = { searchBlog, category };

  const promisesArray = [
    fetchBlogs({ isFeaturedBlog: true }),
    fetchAllBlogsCategories(),
  ];
  if (searchBlog.trim().length || category.trim().length) {
    promisesArray.push(fetchBlogs({ ...filter }));
  } else {
    promisesArray.push(fetchBlogs({ ...filter, isFeaturedBlog: false }));
  }
  const settledPromises = await Promise.allSettled(promisesArray);
  const awaitedData = settledPromises.map((data) => {
    if (data.status === "fulfilled") {
      return data.value;
    }
  });

  const featuredBlogResponse =
    awaitedData[0] && awaitedData[0].data
      ? (awaitedData[0] as BlogReturnType)
      : null;
  const allCategoriesResponse =
    awaitedData[1] && awaitedData[1].data
      ? (awaitedData[1] as CategoryReturnType)
      : null;
  const response =
    awaitedData[2] && awaitedData[2].data
      ? (awaitedData[2] as BlogReturnType)
      : null;

  if (
    allCategoriesResponse &&
    allCategoriesResponse.data &&
    allCategoriesResponse.data.length
  ) {
    allCategoriesResponse.data.forEach((item) => {
      if (item.attributes.slug === category) {
        selectedCategoryName = item.attributes.name;
      }
    });
  }
  if (allCategoriesResponse) {
    sortedCategories = sortObjectArrayBasedOnBooleanProp(
      allCategoriesResponse.data,
      "attributes",
      "isFeatured"
    );
  } else {
    sortedCategories = [];
  }
  if (response && response.data) {
    return {
      props: {
        blogs: response.data,
        featuredBlogs:
          featuredBlogResponse && featuredBlogResponse.data
            ? featuredBlogResponse.data
            : null,
        categories:
          allCategoriesResponse &&
          allCategoriesResponse.data &&
          allCategoriesResponse.data.length &&
          sortedCategories
            ? sortedCategories
            : [],
        metaData: response.meta,
        searchBlog,
        category,
        selectedCategoryName,
        metaTitle: "Blog | Digital Marketing Trends To Boost Brand",
        metaDescription:
          "Stay ahead with the latest trends and expert strategies in digital marketing. Boost your brand and capture your audience's attention effectively.",
        metaKeywords:
          "Digital marketing, online presence, brand boosting, marketing trends, expert strategies, target audience, SEO, online strategy, content marketing, social media, digital advertising, audience engagement.",
      },
    };
  }
  return {
    props: {},
  };
};
