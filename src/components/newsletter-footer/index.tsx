import Link from "next/link";
import React, { useState } from "react";
import { subscribeToNewsletter } from "@/services/contact-us";
import { NewsletterType } from "../../types/components/form-schema/newsletter.types";
import { convertToBase64, encrypt } from "@/utils/common/encrypt-decrypt";
import config from "../../constants";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import {
  getStoredUserJsonData,
  isSet,
  rgbToHex,
  getAverageRGB,
  formatName,
} from "@/utils/common/utility-functions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewsletterValidationSchema } from "../../validation/newsletter";
import { EnquiryEnum } from "../../enums/enquiry.enum";
import instagramIcon from "../../../public/images/instagramBB.svg";
import facebookIcon from "../../../public/images/facebookBB.svg";
import youtubeIcon from "../../../public/images/youtubeBB.svg";
import twitterIcon from "../../../public/images/twitterBB.svg";
import Image from "next/image";

const SlugPageFooter: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCheckIcon, setShowCheckIcon] = useState(false);

  const defaultUserData = getStoredUserJsonData(
    config.LOCAL_STORAGE_VARIABLES.USER_DATA
  );

  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  // const submitFormHandler = (e: any) => {
  //   e.preventDefault();
  //   console.log("Submitted email:", email);
  //   setEmail("");
  //   formSubmitHandler(formData);
  // };

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
            data.source = "bombaybees.com";
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
    handleSubmit: handleFormSubmit,
  } = useForm<NewsletterType>({
    resolver: yupResolver(NewsletterValidationSchema),
    defaultValues: {
      formType: EnquiryEnum.NEWSLETTER,
      email: defaultUserData?.email,
    },
  });

  return (
    <>
      <footer className="bb-footerContainer ">
        <div className="bb-footer container">
          <div className="content col-lg-10 col-md-8">
            <h2 className="b-tagline">
              <span className="contact-heading">JOIN OUR</span>
              <span className="b-bordered-text">NEWSLETTER</span>
            </h2>
            <p className="bb-newsLetter-para">
              Get insights on the latest trends in digital marketing and
              industry, delivered straight to your inbox.
            </p>
            <div className="bb-footer-input">
              <form onSubmit={handleFormSubmit(formSubmitHandler)}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleInputChange}
                  className="bb-footerEmail"
                />
                <button
                  data-bs-dismiss="offcanvas"
                  className="b-common-btn-no-arrow"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
        {/*icons*/}
        <div className="position container">
          <div className="footer-social icons col-lg-2 col-md-4 ">
            <div className="socialMedia-container ">
              <div className="followUs">
                <h4 className="bb-followUS-tag">Follow us</h4>
              </div>
              <div className="middle">
                <Link
                  href="https://www.facebook.com/bombaybeesofficial"
                  target="_blank"
                  className="btn-social"
                >
                  <Image
                    src={facebookIcon}
                    alt="facebook"
                    width={23}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/bombaybees"
                  target="_blank"
                  className="btn-social"
                >
                  <Image
                    src={instagramIcon}
                    alt="instagram"
                    width={26}
                    height={22}
                  />
                </Link>
                <Link
                  href="https://twitter.com/bombay_bees"
                  target="_blank"
                  className="btn-social"
                >
                  <Image
                    src={twitterIcon}
                    alt="twitter"
                    width={24}
                    height={19}
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCeFJdgdX7bSG64Fc_xEQVJQ?sub_confirmation=1"
                  target="_blank"
                  className="btn-social"
                >
                  <Image
                    src={youtubeIcon}
                    alt="youtube"
                    width={22}
                    height={19}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="b-footer-margin">
          <div className="b-footer">
            All Copyrights Reserved &#169; BombayBees
          </div>
        </div>
      </footer>
    </>
  );
};

export default SlugPageFooter;
