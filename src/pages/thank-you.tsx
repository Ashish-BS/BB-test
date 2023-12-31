import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import greetingTextData from "../fixtures/thank-you-text.json";
import {
  redirectToUrl,
  translateLocalizedText,
} from "@/utils/common/utility-functions";
import config from "@/constants";

const SuccessPage = () => {
  const router = useRouter();
  const pageSource = router.query["page"] as string;
  const redirectionUrl = redirectToUrl(router);
  const [, setLoading] = useState(false);
  const [greetingText, setGreetingText] = useState("Thank you!");
  useEffect(() => {
    translateLocalizedText(greetingTextData, setLoading, setGreetingText);
    if (!pageSource) {
      router.push("/");
    }
  }, []);

  return (
    <section className="b-thankyou b-error-page">
      <div className="b-banner-card">
        {/* <svg className="icon" viewBox="0 0 700 900">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#02ed5e">
                <animate
                  attributeName="stop-color"
                  attributeType="CSS"
                  values="#02ed5e;#333;#02ed5e;"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#0b76e0">
                <animate
                  attributeName="stop-color"
                  attributeType="CSS"
                  values="#0b76e0;#FECF39;#0b76e0;"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <g className="gradient">
            <path
              className="st0 is-active"
              d="M165.09,739.34l100.19-99.99c32.5-33.07,32.5-85.96,0-119.03l-21.44-21.44l-45-44.52L27.5,631.37
                      c0,0-43.27,35,11.44,92.97L65,753.38C96.82,771.17,137.69,766.07,165.09,739.34z"
            />
            <path
              className="st1 is-active"
              d="M452.28,458.78l78.36-80.19c-0.1-0.1,0.38-0.87,1.25-2.02c7.02-9.9,38.36-54.03-12.11-111.34L291.81,38.52
                      c0,0-49.71-52.21-107.01,10.19l-21.63,19.71c-9.61,24.33-11.25,47.59-6.15,69.9c4.23,17.21,12.4,33.75,23.94,49.71L452.28,458.78z"
            />
            <path
              className="st2 is-active"
              d="M66.35,754.92c0.1,0,0.19,0.1,0.29,0.19l-1.44-1.44L66.35,754.92z"
            />
            <path
              className="st3 is-active"
              d="M452.28,458.78l-0.67,0.67L180.95,188.8c-11.73-16.25-19.9-32.98-23.94-50.48
                      c-5.48-22.59-4.04-46.34,6.15-71.34l-56.15,50.96l-24.23,24.23l-11.44,10.86l-27.4,27.4c-32.5,32.5-32.5,85.96,0,119.03
                      l20.38,19.71l179.51,179.7l22.5,22.31c32.5,33.07,32.5,85.96,0,119.13L165.09,740.3c-26.06,26.63-66.63,31.82-98.45,14.81
                      l114.42,114.22c32.5,32.5,86.15,32.5,118.65,0l222.58-221.62c33.17-33.07,33.17-86.63,0-119.03L452.28,458.78z"
            />
            <path
              className="st4 is-active"
              d="M64.9,753.38l0.19,0.19L64.9,753.38C65,753.38,64.9,753.38,64.9,753.38z"
            />
            <path
              className="st5 is-active"
              d="M165.09,740.3l101.24-99.99c32.5-33.07,32.5-85.96,0-119.13l-22.5-22.31l21.44,21.44
                      c32.5,33.07,32.5,85.96,0,119.03l-100.19,99.99c-27.4,26.73-68.17,31.82-100.09,14.04l0.19,0.19l1.44,1.44
                      C98.46,772.13,139.03,766.94,165.09,740.3z"
            />
            <path
              className="st6 is-active"
              d="M451.61,459.46l0.67-0.67L181.05,188.03c-11.54-15.96-19.81-32.5-23.94-49.71
                      c4.04,17.4,12.21,34.23,23.94,50.48L451.61,459.46z"
            />
          </g>
        </svg> */}
        {/* <img className="icon" src="../images/bb-icon2.svg" alt="Description" /> */}
        {/* <svg
          className="icon"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 700 900"
        >
          <defs>
            <style>
              {
                `
        .cls-1 {
          fill: #010101;
        }

        .cls-1,
        .cls-2,
        .cls-3 {
          stroke-width: 0px;
        }

        .cls-2 {
          fill: #ffce17;
        }

        .cls-3 {
          fill: #231f20;
        }
      ` as any
              }
            </style>
          </defs>
          <path
            class="cls-2"
            d="M527.4,498.9v42.2c-12.9-6.7-26.9-12.4-42.8-16.3v-.9c16.8-6.4,31-14.9,42.8-25Z"
          />
          <path
            class="cls-3"
            d="M728.3,336.9c0,5.8-2.2,12.1-7.2,18.5-3.8,4.8-7.7,9.2-12.1,13.1h-67.5v22.8c-10.8-1.6-21.6-5.5-32.6-12.4-21.3-13.6-37.5-31.1-49.9-51.8-.3-.3-.4-.6-.4-.9-1.6-3.2-3.4-6.1-5.3-9.1-2.8-5.1-5.3-10.4-7.6-15.9-4.5-10.8-6.7-19-6.7-24.2s.6-4.8,1.5-6.3c1.2-2,3.7-4.1,9.2-5.7,1-.3,2.2-.6,3.4-.7h44.8c28.9,3.7,60.5,12.7,89.7,28.5,11.8,6.3,23.1,15.2,32.3,25.1,6,6.4,8.5,12.7,8.5,19Z"
          />
          <path
            class="cls-1"
            d="M360.8,951.3c2.2-.1,4.5-.3,6.9-.3,5.1-18,10.2-35.8,15.9-56.1h-38.9c5.8,20.6,11,38.6,16.1,56.4Z"
          />
          <path
            class="cls-2"
            d="M484.6,660.7c0,24.4-9.3,42.8-28.2,55.5-18.7,12.7-44.1,19-76.1,19h-94.3v-150.6h95.2c34.2,0,60,6.7,77.4,20.3,17.4,13.4,26,32.1,26,55.8Z"
          />
          <path
            class="cls-1"
            d="M456,835.4c-26.9,30.2-58.3,47.6-91.9,47.6s-63.2-16.5-89.5-45.1h140.5c14.5,0,28-.9,40.9-2.5Z"
          />
          <path
            class="cls-2"
            d="M458.2,421.6c0,22.6-8.6,39.9-25.7,51.7-17.1,11.8-38,17.8-62.9,17.8h-83.5v-138.3h76.2c64,0,96,22.9,96,68.8Z"
          />
          <path
            class="cls-1"
            d="M483.8,34.2c-2.9.6-72.4,15.5-72.4,69.4l-.3,3.4c40.6,18.5,68.9,59.6,68.9,107.2s-3.7,32.1-9.8,46.5c-2.9-.7-5.8-1.5-8.9-2.2-4.7-1-9.3-2.2-14.2-3-19.1-3.4-40.3-5-63.4-5h-133.1c-3.8-11.5-6-23.5-6-36.2,0-45.7,26.2-85.4,64.3-105-.7-1.8-1-3.7-1-5.6,0-54.3-71.7-69.2-72.4-69.4-9.2-2.2-15.1-11.5-12.8-20.8,2-8.9,10.7-14.6,19.5-13.1,33.8,6.7,96.6,35.6,100,97.7,6.6-1,13.1-1.6,20-1.6s9.9.3,14.9.9C381.2,35.7,443.8,7,477,.2c9.4-1.6,18.2,4.7,19.9,14.2,1.6,8.9-4.1,17.7-13.1,19.7Z"
          />
          <path
            class="cls-3"
            d="M189.1,277c.1,5.3-2,13.4-6.6,24.2-13.7,32.1-33.7,58.9-63.4,77.7-10.8,6.9-21.9,10.8-32.6,12.4h-.1c-.4,0-.7.1-1.2.1-3.2.4-6.3.6-9.3.6-26.2.1-51-13.7-68.8-36.6-5-6.4-7.1-12.7-7.1-18.5s2.5-12.5,8.3-19c9.3-9.9,20.6-18.8,32.4-25.1,34.3-18.5,71.5-27.7,104.1-29.9,1.3-.1,2.5-.3,3.7-.3h5.6c3.2,0,6.3,0,9,.3,9.5.4,16.2,1.9,20,4,2.5,1.1,3.8,2.5,4.7,3.9.7,1.5,1.3,3.2,1.3,6.3Z"
          />
          <path
            class="cls-3"
            d="M728.3,336.9c0,5.8-2.2,12.1-7.2,18.5-3.8,4.8-7.7,9.2-12.1,13.1-16.2,15-36.1,23.7-56.7,23.5-3.7,0-7.2-.3-10.8-.7-10.8-1.6-21.6-5.5-32.6-12.4-21.3-13.6-37.5-31.1-49.9-51.8-.3-.3-.4-.6-.4-.9-1.9-2.9-3.7-6-5.3-9.1-2.8-5.1-5.3-10.4-7.6-15.9-4.5-10.8-6.7-19-6.7-24.2s.6-4.8,1.5-6.3c1.2-2,3.7-4.1,9.2-5.7,1-.3,2.2-.6,3.4-.7,5.3-1.2,12.4-1.8,21-1.8h5.7c5.8.3,12,.9,18.1,1.8,28.9,3.7,60.5,12.7,89.7,28.5,11.8,6.3,23.1,15.2,32.3,25.1,6,6.4,8.5,12.7,8.5,19Z"
          />
        </svg> */}
        {/* <svg
          className="icon"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 735.4 958.3"
        >
          <defs></defs>
          <path
            className="cls-1"
            d="M530.9,502.2v42.2c-12.9-6.7-26.9-12.4-42.8-16.3v-.9c16.8-6.4,31-14.9,42.8-25h0Z"
          />
          <path
            className="cls-4"
            d="M364.3,954.6c2.2,0,4.5-.3,6.9-.3,5.1-18,10.2-35.8,15.9-56.1h-38.9c5.8,20.6,11,38.6,16.1,56.4h0Z"
          />
          <path
            className="cls-1"
            d="M488.1,664c0,24.4-9.3,42.8-28.2,55.5-18.7,12.7-44.1,19-76.1,19h-94.3v-150.6h95.2c34.2,0,60,6.7,77.4,20.3,17.4,13.4,26,32.1,26,55.8h0Z"
          />
          <path
            className="cls-4"
            d="M459.5,838.7c-26.9,30.2-58.3,47.6-91.9,47.6s-63.2-16.5-89.5-45.1h140.5c14.5,0,28-.9,40.9-2.5Z"
          />
          <path
            className="cls-1"
            d="M461.7,424.9c0,22.6-8.6,39.9-25.7,51.7-17.1,11.8-38,17.8-62.9,17.8h-83.5v-138.3h76.2c64,0,96,22.9,96,68.8h0Z"
          />
          <path
            className="cls-2"
            d="M487.3,37.5c-2.9.6-72.4,15.5-72.4,69.4l-.3,3.4c20.3,9.2,37.5,24.1,49.7,42.7,17.4,26.5,18.6,51.8,19.2,64.5,1.2,24.5-5.4,38.4-6.9,41.3-1.1,2.2-2.2,4-2.9,5.2-29.9-6.4-67.7-11.9-111.4-12.1-39.2-.1-73.4,4-101.3,9.3-6.1-10.9-12.1-25.7-12.9-43.6-2.9-62.5,60.2-102.5,64.3-105-.7-1.8-1-3.7-1-5.6,0-54.3-71.7-69.2-72.4-69.4-9.2-2.2-15.1-11.5-12.8-20.8,2-8.9,10.7-14.6,19.5-13.1,33.8,6.7,96.6,35.6,100,97.7,6.6-1,13.1-1.6,20-1.6s9.9.3,14.9.9c4.1-61.7,66.7-90.4,99.9-97.2,2.4-.5,18.2,4.3,19.9,14.2,1.2,6.6-4.2,14.2-13.1,19.8Z"
          />
          <path
            className="cls-3"
            d="M192.6,280.3c.1,5.3-2,13.4-6.6,24.2-13.7,32.1-33.7,58.9-63.4,77.7-10.8,6.9-21.9,10.8-32.6,12.4h0c-.4,0-.7.1-1.2.1-3.2.4-6.3.6-9.3.6-26.2.1-51-13.7-68.8-36.6-5-6.4-7.1-12.7-7.1-18.5s2.5-12.5,8.3-19c9.3-9.9,20.6-18.8,32.4-25.1,34.3-18.5,71.5-27.7,104.1-29.9,1.3-.1,2.5-.3,3.7-.3h5.6c3.2,0,6.3,0,9,.3,9.5.4,16.2,1.9,20,4,2.5,1.1,3.8,2.5,4.7,3.9.7,1.5,1.3,3.2,1.3,6.3h0Z"
          />
          <path
            className="cls-3"
            d="M731.9,340.2h-.1c0,5.8-2.2,12.1-7.2,18.5-3.8,4.8-7.7,9.2-12.1,13.1-16.2,15-36.1,23.7-56.7,23.5-3.7,0-7.2-.3-10.8-.7-10.8-1.6-21.6-5.5-32.6-12.4-21.3-13.6-37.5-31.1-49.9-51.8-.3-.3-.4-.6-.4-.9-1.6-3.2-3.4-6.1-5.3-9.1-2.8-5.1-5.3-10.4-7.6-15.9-4.5-10.8-6.7-19-6.7-24.2s.6-4.8,1.5-6.3c1.2-2,3.7-4.1,9.2-5.7,1-.3,2.2-.6,3.4-.7h44.8c28.9,3.7,60.5,12.7,89.7,28.5,11.8,6.3,23.1,15.2,32.3,25.1,6,6.4,8.5,12.7,8.5,19Z"
          />
          <path
            className="cls-5"
            d="M556.8,320.4c1.9,3,3.7,5.9,5.3,9.1-1.9-2.9-3.7-6-5.3-9.1Z"
          />
          <path
            className="cls-5"
            d="M601.4,267.6h-44.8c5.3-1.2,12.4-1.8,21-1.8h5.7c5.8.3,12,.9,18.1,1.8Z"
          />
        </svg> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="b-error-content b-thanks-page">
              <h1>
                <span className="b-custom-underline">{greetingText}</span>
              </h1>
              <p>
                Your message has been received. We appreciate your interest and
                will be in touch soon.
              </p>
              <Link href="/blog">
                <button className="b-common-btn">Continue reading...</button>
              </Link>
              {/* {pageSource &&
              pageSource.includes(config.PAGE_NAME.CONTACT_US) ? (
                <>
                  <h1>
                    <span className="b-custom-underline">{greetingText}</span>
                  </h1>
                  <p>
                    Your message has been received. We appreciate your interest
                    and will be in touch soon.
                  </p>
                </>
              ) : null} */}
              {/* <Link href={redirectionUrl}>
                {pageSource && pageSource.includes(config.PAGE_NAME.BLOG) ? (
                  <>
                    <h1>
                      <span className="b-custom-underline">Subscribed</span>
                    </h1>
                    <p>
                      Welcome to our community. We are excited to serve you with
                      the best.
                    </p>
                    <button className="b-common-btn">
                      Continue reading...
                    </button>
                  </>
                ) : (
                  <button className="b-common-btn">Go to Home</button>
                )}
              </Link> */}
            </div>
          </div>
          {/* <div className="col-lg-6 b-error-image-container">
            <div className="b-error-image">
              <Image
                width={200}
                height={200}
                src="images/error-success.svg"
                alt="Greeting-image"
                style={{
                  width: "auto",
                  height: "auto",
                  display: "block",
                  maxWidth: "100%",
                  marginLeft: "auto",
                }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
