import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="errorPage ">
        <section className="b-banner-section b-error-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="b-error-content ">
                  <h1>
                    Page <span className="b-custom-underline">Not</span> Found!
                  </h1>
                  <p>
                    Oops! You were not supposed to see this. Try to forget this
                    like your bad dream and remember you never visited this
                    page!
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
      </div>
    </>
  );
}
