import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import html from "remark-html";
import { remark } from "remark";
import jsDom from "jsdom";

import { EnquiryEnum } from "../../enums/enquiry.enum";
import { NewsletterValidationSchema } from "../../validation/newsletter";
import { NewsletterType } from "../../types/components/form-schema/newsletter.types";
import { subscribeToNewsletter } from "@/services/contact-us";
import Loader from "../../components/loader/LoadingIcon";
import config from "../../constants";
import getUserAgentInfo from "../../utils/common/user-agent";

import ImgSocialFacebook from "../../../public/images/social-facebook.svg";
import ImgSocialLinkedin from "../../../public/images/social-linkedin.svg";
import ImgSocialTwitter from "../../../public/images/social-twitter.svg";
import ImgSocialWhatsApp from "../../../public/images/social-whatsapp.svg";

import { fetchBlog, fetchBlogs } from "@/services/blogs";
import { BlogDetailsPageProps } from "@/types/page-types/blog";
import { getLocaleDate } from "@/utils/date";
import { BlogAPIResponseType } from "@/types/data/blog";
import {
  getStoredUserJsonData,
  isSet,
  rgbToHex,
  getAverageRGB,
  formatName,
} from "@/utils/common/utility-functions";
import { generateImageTags } from "@/utils/common/parseHtml";
import SuccessIcon from "@/components/common/Success";
import { convertToBase64, encrypt } from "@/utils/common/encrypt-decrypt";
import { loadRecaptcha, removeRecaptcha } from "@/utils/url/recaptcha";

const BlogDetails: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const [relatedBlogs] = useState<BlogAPIResponseType[]>(props.relatedBlogs);
  const [titleImageBgColor, setTitleImageBgColor] = useState(
    config.COLOR_PALETTE.BG_PRIMARY_COLOR
  );
  const router = useRouter();

  const defaultUserData = getStoredUserJsonData(
    config.LOCAL_STORAGE_VARIABLES.USER_DATA
  );

  const { isDesktop } = getUserAgentInfo();

  const sectionHeaderClass = isSticky
    ? "b-blog-details-header b-blog-sticky-header"
    : "b-blog-details-header";

  const formSubmitHandler = async (data: NewsletterType) => {
    try {
      setLoading(true);
      //@ts-ignore
      grecaptcha.ready(function () {
        //@ts-ignore
        grecaptcha
          .execute(process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY, {
            action: "submit",
          })
          .then(async function (token: any) {
            const response = await subscribeToNewsletter(data);
            if (response.success) {
              setLoading(false);
              setShowCheckIcon(true);
              typeof localStorage !== "undefined" &&
                localStorage.setItem(
                  convertToBase64(
                    config.LOCAL_STORAGE_VARIABLES.USER_DATA
                  ) as string,
                  encrypt(
                    JSON.stringify({ ...defaultUserData, ...data })
                  ) as string
                );
              setTimeout(() => {
                router.push(
                  {
                    pathname: "/thank-you",
                    query: {
                      page: router.pathname,
                      redirectedFrom: data.formType,
                      q: router.query["slug"],
                    },
                  },
                  "/thank-you"
                );
              }, 1000);
            } else {
              toast(config.MESSAGE.GENERIC_ERROR, config.TOASTER_OPTIONS.ERROR);
              setLoading(false);
            }
          });
      });
    } catch (error: any) {
      console.log("error", error);
      setShowCheckIcon(false);
      toast(config.MESSAGE.GENERIC_ERROR, config.TOASTER_OPTIONS.ERROR);
      setLoading(false);
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewsletterType>({
    resolver: yupResolver(NewsletterValidationSchema),
    defaultValues: {
      formType: EnquiryEnum.NEWSLETTER,
      email: defaultUserData?.email,
    },
  });

  const setTitleImageHexValue = () => {
    const img = document.querySelector(
      ".b-blog-details-image img"
    ) as HTMLImageElement;
    if (img) {
      const { r, g, b } = getAverageRGB(img);
      if (r === 0 && g === 0 && b === 0) {
        setTitleImageBgColor(config.COLOR_PALETTE.BG_PRIMARY_COLOR);
      } else {
        const hexColor = rgbToHex(r, g, b);
        setTitleImageBgColor(hexColor);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop >= 100);
    };
    window.addEventListener("scroll", handleScroll);

    const copyButton = document.querySelectorAll(
      ".btn-copy"
    ) as unknown as HTMLButtonElement[];
    const copyCodeContent = (btn: HTMLButtonElement) => {
      const textContent = btn.nextSibling?.textContent;
      btn.classList.add("copied");
      if (textContent) {
        window.navigator.clipboard.writeText(textContent);
        toast.dismiss();
        toast(
          config.MESSAGE.CODE_COPIED_SUCCESSFULLY,
          config.TOASTER_OPTIONS.SUCCESS
        );
      }
    };
    const copyCode = () => {
      copyButton.forEach((btn) => {
        btn.addEventListener("click", () => copyCodeContent(btn));
      });
    };
    copyCode();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      copyButton.forEach((btn) => {
        btn.removeEventListener("click", () => copyCodeContent(btn));
      });
    };
  }, [router]);

  useEffect(() => {
    loadRecaptcha();
    return () => {
      removeRecaptcha();
    };
  }, []);

  return (
    <>
      <section className={sectionHeaderClass}>
        <div className="container">
          <div className="b-blog-header-row">
            <div className="b-blog-header-left">
              {props.blog?.attributes?.title && (
                <h1>{props.blog.attributes.title}</h1>
              )}
              <ul>
                {props.blog?.attributes?.publishDate && (
                  <li>{getLocaleDate(props.blog.attributes.publishDate)}</li>
                )}
                {props.blog?.attributes?.author?.data && (
                  <li>
                    {formatName(
                      props.blog.attributes?.author?.data?.attributes?.fullname
                    )}
                  </li>
                )}
              </ul>
            </div>
            <div className="b-blog-header-right">
              <span>Share</span>
              <ul>
                <li>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://www.bombaysoftwares.com/props.blog/${encodeURI(
                      router.query["slug"] as string
                    )}`}
                    target="_blank"
                    className=""
                  >
                    <Image
                      width={25}
                      height={25}
                      src={ImgSocialFacebook.src}
                      alt="Facebook-icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://www.linkedin.com/share?text=https://www.bombaysoftwares.com/blog/${encodeURI(
                      router.query["slug"] as string
                    )}`}
                    target="_blank"
                    className=""
                  >
                    <Image
                      width={25}
                      height={25}
                      src={ImgSocialLinkedin.src}
                      alt="LinkedIn-icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://twitter.com/intent/tweet?url=https://bombaysoftwares.com/blog/${encodeURI(
                      router.query["slug"] as string
                    )}`}
                    target="_blank"
                    className="twitter-share-button"
                  >
                    <Image
                      width={25}
                      height={25}
                      src={ImgSocialTwitter.src}
                      alt="Twitter-icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      isDesktop
                        ? `${
                            config.STATIC_URL.WHATSAPP.DESKTOP
                          }/blog/${encodeURI(router.query["slug"] as string)}`
                        : `${
                            config.STATIC_URL.WHATSAPP.MOBILE
                          }/blog/${encodeURI(router.query["slug"] as string)}`
                    }
                    target="_blank"
                    data-action="share/whatsapp/share"
                    className=""
                  >
                    <Image
                      width={25}
                      height={25}
                      src={ImgSocialWhatsApp.src}
                      alt="WhatsApp-icon"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="b-blog-details-section">
        <div className="container">
          <div className="b-blog-detail-head">
            <div className="b-section-title">
              {props.blog?.attributes?.title && (
                <h1>{props.blog.attributes.title}</h1>
              )}
              {props.blog?.attributes?.publishDate && (
                <p>
                  {getLocaleDate(props.blog.attributes.publishDate)} |{" "}
                  {
                    props.blog?.attributes?.author?.data?.attributes?.fullname.split(
                      " "
                    )[0]
                  }{" "}
                  {props.blog?.attributes?.author?.data?.attributes?.fullname.split(
                    " "
                  ).length > 1
                    ? props.blog?.attributes?.author?.data?.attributes?.fullname
                        .split(" ")[1]
                        .slice(0, 1) + "."
                    : ""}
                </p>
              )}
              <ul className="b-blog-category">
                {props.blog.attributes.category.data && (
                  <li>
                    <span className="badge">
                      {props.blog.attributes.category.data.attributes.name}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {isSet(props.blog.attributes.featuredImage) &&
            isSet(props.blog.attributes.featuredImage?.data) && (
              <div
                className="b-blog-details-image"
                style={{ backgroundColor: titleImageBgColor }}
              >
                <Image
                  width={1170}
                  height={695}
                  onLoad={setTitleImageHexValue}
                  priority
                  src={
                    props.blog.attributes.featuredImage.data.attributes.url.includes(
                      process.env.NEXT_PUBLIC_BLOG_IMAGES_DOMAIN as string
                    )
                      ? `${props.blog.attributes.featuredImage.data.attributes.url}`
                      : `${process.env.NEXT_PUBLIC_IMAGES_URL}${props.blog.attributes.featuredImage.data.attributes.url}`
                  }
                  alt={
                    props.blog.attributes.featuredImage.data.attributes
                      .alternativeText
                  }
                />
              </div>
            )}
          <div className="b-blog-details">
            <div className="b-blog-detail-item b-custom-blog-style">
              <span
                dangerouslySetInnerHTML={{
                  __html: props.blog.attributes.content,
                }}
              />
            </div>
            {props.blog.attributes.quote &&
              props.blog.attributes.quoteAuthor && (
                <div className="b-quote-section">
                  <p>{props.blog.attributes.quote}</p>
                  <span>{props.blog.attributes.quoteAuthor}</span>
                </div>
              )}
          </div>
        </div>
      </section>
      {relatedBlogs && relatedBlogs.length ? (
        <section className="b-latest-blogs">
          <div className="container">
            <div className="b-section-title">
              <h2>Related Blogs</h2>
            </div>
            <div className="row">
              {relatedBlogs &&
                relatedBlogs.length &&
                relatedBlogs.map((blog, index) => (
                  <div className="col-lg-6" key={`blog_${index}`}>
                    <div className="b-blog-item">
                      {blog.attributes.featuredImage &&
                        blog.attributes.featuredImage.data && (
                          <div className="b-blog-image-container">
                            <div className="b-blog-image">
                              <Link href={`/blog/${blog.attributes.slug}`}>
                                <Image
                                  width={570}
                                  height={281}
                                  src={
                                    blog.attributes.featuredImage.data.attributes.url.includes(
                                      process.env
                                        .NEXT_PUBLIC_BLOG_IMAGES_DOMAIN as string
                                    )
                                      ? `${blog.attributes.featuredImage.data.attributes.url}`
                                      : `${process.env.NEXT_PUBLIC_IMAGES_URL}${blog.attributes.featuredImage.data.attributes.url}`
                                  }
                                  alt={`${blog.attributes.title}-image`}
                                />
                              </Link>
                            </div>
                          </div>
                        )}
                      {blog.attributes.category.data && (
                        <ul className="b-blog-category">
                          <li>
                            <span className="badge">
                              {blog.attributes.category.data.attributes?.name}
                            </span>
                          </li>
                        </ul>
                      )}
                      <div className="b-blog-content">
                        <ul className="b-blog-date">
                          {blog.attributes?.publishDate && (
                            <li>
                              {getLocaleDate(blog.attributes.publishDate)}
                            </li>
                          )}
                          {blog.attributes?.author?.data && (
                            <li>
                              By{" "}
                              {formatName(
                                blog.attributes?.author?.data?.attributes
                                  ?.fullname
                              )}
                            </li>
                          )}
                        </ul>
                        {blog.attributes?.slug && blog.attributes?.title && (
                          <Link href={`/blog/${blog.attributes.slug}`}>
                            <h3>{blog.attributes.title}</h3>
                          </Link>
                        )}
                        {blog.attributes?.content && (
                          <div className="b-blog-desc">
                            <p>
                              {blog.attributes.content.slice(0, 50)}
                              {"..."}
                            </p>
                          </div>
                        )}
                        <Link
                          href={`/blog/${blog.attributes.slug}`}
                          className="b-read-more"
                        >
                          Keep Reading
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="b-blog-button">
              <Link href="/blog" className="btn b-common-btn">
                Browse all blogs
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default BlogDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetchBlogs();
  if (response && response.data && response.data.length) {
    const paths = response.data.map((blog) => ({
      params: { slug: blog.attributes.slug },
    }));
    return { paths, fallback: "blocking" };
  }
  return { paths: [], fallback: false };
};

export const getStaticProps: GetStaticProps<BlogDetailsPageProps> = async (
  appContext
) => {
  const convertMarkdownToHTML = async (
    data: string,
    textOnly: boolean
  ): Promise<string> => {
    const response = await remark().use(html).process(data);
    const textContent = response.value as string;
    const { JSDOM } = jsDom;
    const doc = new JSDOM(textContent);
    return generateImageTags(doc, textOnly);
  };

  if (appContext && appContext.params) {
    const slug = appContext.params["slug"] as string;
    const response = await fetchBlog(slug);
    if (response && response.data && response.data.length) {
      const markdownBlog = response.data[0];

      const blogContent = await convertMarkdownToHTML(
        markdownBlog.attributes.content,
        false
      );
      const blogData: BlogAPIResponseType = {
        id: markdownBlog.id,
        attributes: { ...markdownBlog.attributes, content: blogContent },
      };

      const relatedBlogs: BlogAPIResponseType[] = [];
      const relatedPost1 =
        markdownBlog.attributes.relatedPost1.data &&
        markdownBlog.attributes.relatedPost1.data.length > 0 &&
        markdownBlog.attributes.relatedPost1.data[0];
      const relatedPost2 =
        markdownBlog.attributes.relatedPost2.data &&
        markdownBlog.attributes.relatedPost2.data.length > 0 &&
        markdownBlog.attributes.relatedPost2.data[0];
      if (relatedPost1) {
        const firstRelatedBlogContent = await convertMarkdownToHTML(
          relatedPost1.attributes.content,
          true
        );
        relatedBlogs.push({
          id: markdownBlog.id,
          attributes: {
            ...markdownBlog.attributes,
            content: firstRelatedBlogContent,
          },
        });
      }
      if (relatedPost2) {
        const secondRelatedPostContent = await convertMarkdownToHTML(
          relatedPost2.attributes.content,
          true
        );
        relatedBlogs.push({
          id: markdownBlog.id,
          attributes: {
            ...markdownBlog.attributes,
            content: secondRelatedPostContent,
          },
        });
      }
      return {
        props: {
          blog: blogData,
          relatedBlogs,
          metaData: response.meta,
          metaTitle: blogData?.attributes?.metaTitle
            ? blogData?.attributes?.metaTitle
            : null,
          metaDescription: blogData?.attributes?.metaDescription
            ? blogData?.attributes?.metaDescription
            : null,
          metaImage: blogData?.attributes?.featuredImage?.data?.attributes?.url
            ? blogData?.attributes?.featuredImage?.data?.attributes?.url
            : null,
          metaKeywords: blogData?.attributes?.metaKeywords
            ? blogData?.attributes?.metaKeywords
            : null,
        },
        revalidate: config.REVALIDATE_MS,
      };
    }
  }
  return {
    notFound: true,
  };
};
