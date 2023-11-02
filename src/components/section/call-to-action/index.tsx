import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/hooks/redux-types";
import config from "@/constants";
import { useRouter } from "next/router";

const CallToAction: React.FC = () => {
  const inquiryType = useAppSelector((state) => state.inquiry.inquiryType);
  const router = useRouter();

  return (
    <>
      <section
        className={
          inquiryType !== config.LOCAL_STORAGE_VARIABLES.INQUIRY.HIRING_INQUIRY
            ? "b-call-to-action"
            : "b-call-to-action b-connect-with"
        }
        data-testid="b-call-to-action"
      >
        <div className="container">
          {inquiryType ===
            config.LOCAL_STORAGE_VARIABLES.INQUIRY.SALES_INQUIRY ||
          inquiryType === config.LOCAL_STORAGE_VARIABLES.INQUIRY.INFORMATION ||
          inquiryType === "" ? (
            <div className="b-call-to-action-content">
              <div className="b-section-title">
                <h2>
                  <span className="b-custom-underline">Ready</span> to Get
                  Started?
                </h2>
                <p>{`Let's transform your vision into an innovation led product.`}</p>
              </div>
              <div className="text-center">
                <button
                  className="btn b-common-btn"
                  onClick={() => router.push("/contact-us")}
                >{`Let's discuss your requirements`}</button>
              </div>
            </div>
          ) : null}
          {inquiryType ===
          config.LOCAL_STORAGE_VARIABLES.INQUIRY.HIRING_INQUIRY ? (
            <div className="b-call-to-action-content">
              <div className="b-section-title">
                <h2>
                  <span className="b-custom-underline">Connect</span> with us!
                </h2>
                <p>{`Let's get to know each other in a better way.`}</p>
              </div>
              <div className="b-connect-buttons">
                {inquiryType ===
                  config.LOCAL_STORAGE_VARIABLES.INQUIRY.HIRING_INQUIRY ||
                inquiryType ===
                  config.LOCAL_STORAGE_VARIABLES.INQUIRY.INFORMATION ||
                inquiryType === "" ? (
                  <Link href="/career" className="">
                    <button className="btn b-common-btn">{`Join our team`}</button>
                  </Link>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default CallToAction;
