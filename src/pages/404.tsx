import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <section className="b-banner-section b-error-page">
        <div className="b-banner-card">
          <svg className="icon" viewBox="0 0 700 900">
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
          </svg>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="b-error-content">
                <h1>
                  Page <span className="b-custom-underline">Not</span> Found!
                </h1>
                <p>
                  Oops! You were not supposed to see this. Try to forget this
                  like your bad dream and remember you never visited this page!
                </p>
                <Link href="/" className="">
                  <button className="b-common-btn">Go to Home</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 b-error-image-container">
              <div className="b-error-image">
                <Image
                  width={50}
                  height={50}
                  src="/images/404-error.svg"
                  alt="Error-icon"
                  style={{
                    width: "auto",
                    height: "auto",
                    display: "block",
                    maxWidth: "100%",
                    marginLeft: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
