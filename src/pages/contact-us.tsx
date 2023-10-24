import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import { phone } from "phone";
import "react-phone-input-2/lib/style.css";

import Loader from "../components/loader/LoadingIcon";
import dynamic from "next/dynamic";
const DesiredServices = dynamic(
  () => import("../components/form/desired-services"),
  { ssr: false }
);
import { postContactFormDetails } from "../services/contact-us";
import {
  ContactUsValidationSchema,
  customInputValidationTest,
} from "../validation/contact-us";
import { ContactUsType } from "../types/components/form-schema/contact-us.types";
import { CountryDetail } from "../types/components/data/phone-country";
import { EnquiryEnum } from "../enums/enquiry.enum";
import config from "../constants";

import ImgLocationAhmedabad from "../../public/images/staticmap-512x512-ahmedabad.png";
import ImgLocationAhmedabadBSquare2 from "../../public/images/staticmap-512x512-ahmedabad-bsquare-2.png";
import ImgLocationNaviMumbai from "../../public/images/staticmap-512x512-cyber-one.png";
import {
  convertToBase64,
  decrypt,
  encrypt,
} from "@/utils/common/encrypt-decrypt";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-types";
import SuccessIcon from "@/components/common/Success";
import { getStoredUserJsonData } from "@/utils/common/utility-functions";
import { GetStaticProps } from "next";
import { setInquiryType } from "@/slices/inquirySlice";
import { loadRecaptcha, removeRecaptcha } from "@/utils/url/recaptcha";
import WhatHappenNext from "../fixtures/what-happens-next.json";

export default function ContanctUs() {
  const [loading, setLoading] = useState(false);
  const defaultUserData = getStoredUserJsonData(
    config.LOCAL_STORAGE_VARIABLES.USER_DATA
  );
  const [other, setOther] = useState(
    defaultUserData?.desiredService?.[7] ? true : false
  );
  const isDarkMode = useAppSelector((state) => state.theme.darkMode);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [encryptedCountryName, setEncryptedCountryName] = useState("");

  const [country, setCountry] = useState<CountryDetail>();
  const [defaultCountry, setDefaultCountry] = useState(
    decrypt(encryptedCountryName)?.toLowerCase() || "in"
  );

  const [phoneNumber] = useState(
    defaultUserData ? defaultUserData.phoneNumber : ""
  );
  const { inquiryType } = useAppSelector((state) => state.inquiry);
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  // this hook form is responsible for `sales` form submission
  const {
    register: salesForm,
    handleSubmit: handleSalesFormSubmit,
    formState: { errors: salesFormErrors },
    setValue: setSalesFormValue,
    setError: setSalesFormError,
    clearErrors: clearSalesFormError,
  } = useForm<ContactUsType>({
    resolver: yupResolver(ContactUsValidationSchema),
    defaultValues: defaultUserData
      ? { ...defaultUserData, formType: EnquiryEnum.SALES }
      : null,
  });
  const submitFormHandler = async (data: ContactUsType) => {
    setLoading(true);

    try {
      // `+` is required in-order to support validation with country name
      let isValid;
      if (country) {
        isValid = phone("+" + data.phoneNumber, {
          country: country.iso2,
        }).isValid;
      }
      if (!isValid && data.formType === EnquiryEnum.SALES) {
        setSalesFormError("phoneNumber", { message: "Invalid Phone Number" });
        return;
      }
      if (!other) {
        data.desiredService[7] = "";
      }
      if (!customInputValidationTest(data.desiredService)) {
        setSalesFormError("desiredService", {
          message: "At least one desired service must be selected",
        });
        return;
      }

      const filterDesiredServices = data.desiredService.filter(
        (service) => service && service
      );
      const filterCommunicationMode = data.communicationMode.filter(
        (service) => service && service
      );
      const contactData: ContactUsType = {
        ...data,
        desiredService: filterDesiredServices,
        communicationMode: filterCommunicationMode,
      };
      // @ts-ignore
      grecaptcha.ready(function () {
        // @ts-ignore
        grecaptcha
          .execute(process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY, {
            action: "submit",
          })
          .then(async function (token: any) {
            const response = await postContactFormDetails(contactData);
            if (response.success) {
              setShowSuccessIcon(true);
              typeof localStorage !== "undefined" &&
                localStorage.setItem(
                  convertToBase64(
                    config.LOCAL_STORAGE_VARIABLES.USER_DATA
                  ) as string,
                  encrypt(
                    JSON.stringify({ ...defaultUserData, ...data })
                  ) as string
                );
              setLoading(false);
              setTimeout(() => {
                router.push({
                  pathname: "/thank-you",
                  query: { page: router.pathname, q: data.formType },
                });
              }, 1000);
            } else {
              toast(config.MESSAGE.GENERIC_ERROR, config.TOASTER_OPTIONS.ERROR);
              setLoading(false);
            }
          });
      });
    } catch (error: any) {
      console.log("error", error);
      toast(config.MESSAGE.GENERIC_ERROR, config.TOASTER_OPTIONS.ERROR);
      setShowSuccessIcon(false);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyAddress = (
    e: React.MouseEvent<HTMLButtonElement>,
    message: string
  ) => {
    if (navigator) {
      const target = e.target as HTMLButtonElement;
      if (target && target.parentElement && target.parentElement.textContent) {
        navigator.clipboard.writeText(target.parentElement.textContent);
        target.classList.add("copied");
        toast.dismiss();
        toast(message, config.TOASTER_OPTIONS.SUCCESS);
      }
    }
  };

  useEffect(() => {
    const encryptedLocale = localStorage.getItem(
      convertToBase64(config.LOCAL_STORAGE_VARIABLES.COUNTRY) as string
    );
    let locale;
    if (encryptedLocale) {
      setEncryptedCountryName(encryptedLocale);
      try {
        locale = decrypt(encryptedLocale)?.toLowerCase();
      } catch (error) {
        console.log(error);
      }
    }
    if (locale) {
      setDefaultCountry(locale);
    }
    dispatch(
      setInquiryType(
        typeof window !== "undefined"
          ? decrypt(
              localStorage.getItem(
                convertToBase64(
                  config.LOCAL_STORAGE_VARIABLES.CHOSEN_PURPOSE
                ) as string
              )
            )
          : ""
      )
    );
    loadRecaptcha();
    return () => {
      removeRecaptcha();
    };
  }, []);

  return (
    <>
      <section className="b-contact-section" data-testid="b-contact-section">
        <div className="b-contact-form">
          <div className="container">
            <h1 className="b-tagline">
              <span className="contact-heading">CONTACT</span>
              <span className="b-bordered-text">US</span>
            </h1>
            <div className="row">
              {inquiryType !==
              config.LOCAL_STORAGE_VARIABLES.INQUIRY.HIRING_INQUIRY ? (
                <div className="col-lg-12 col-xl-8">
                  <div className="b-inquiry-section">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-sales-inquiry-tab"
                        role="tabpanel"
                        aria-labelledby="pills-sales-inquiry"
                      >
                        <div className="b-project-estimate">
                          <h2>Get Project Estimate.</h2>
                          <p>
                            We support you in all areas and try to meet your
                            project requirements in the best way possible.
                          </p>
                        </div>
                        <form
                          onSubmit={handleSalesFormSubmit(submitFormHandler)}
                        >
                          <div className="b-inquire-form">
                            <div className="row">
                              <div
                                className="col-sm-12 col-xxl-4"
                                data-testid="full-name"
                              >
                                <label htmlFor="">Full Name</label>
                                <span className="text-danger"> *</span>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    salesFormErrors.fullName ? "is-invalid" : ""
                                  }`}
                                  placeholder="John Smith"
                                  {...salesForm("fullName")}
                                />
                                {salesFormErrors.fullName && (
                                  <span className="text-danger">
                                    {salesFormErrors.fullName.message}
                                  </span>
                                )}
                              </div>
                              <div
                                className="col-sm-12 col-xxl-4"
                                data-testid="email"
                              >
                                <label htmlFor="">E-mail</label>
                                <span className="text-danger"> *</span>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    salesFormErrors.email ? "is-invalid" : ""
                                  }`}
                                  placeholder="johnsmith@example.com"
                                  {...salesForm("email")}
                                />
                                {salesFormErrors.email && (
                                  <span className="text-danger">
                                    {salesFormErrors.email.message}
                                  </span>
                                )}
                              </div>
                              <div
                                className="col-sm-12 col-xxl-4"
                                data-testid="phone-number"
                              >
                                <label htmlFor="">Phone Number</label>
                                <span className="text-danger"> *</span>
                                <PhoneInput
                                  country={defaultCountry}
                                  value={phoneNumber}
                                  inputClass={`b-contact-input b-border w-100 ${
                                    salesFormErrors.phoneNumber
                                      ? "is-invalid"
                                      : ""
                                  } `}
                                  specialLabel=""
                                  isValid={(_, country) => {
                                    setCountry(country as CountryDetail);
                                    return true;
                                  }}
                                  buttonClass="b-border b-flag-dropdown"
                                  containerClass="b-react-tel"
                                  dropdownClass="b-react-tel-dropdown"
                                  onChange={(data) => {
                                    setSalesFormValue("phoneNumber", data);
                                    let isValid;
                                    if (country) {
                                      isValid = phone("+" + data, {
                                        country: country.iso2,
                                      }).isValid;
                                    }
                                    if (!isValid) {
                                      setSalesFormError("phoneNumber", {
                                        message: "Invalid Phone Number",
                                      });
                                    } else {
                                      clearSalesFormError("phoneNumber");
                                    }
                                  }}
                                />

                                {salesFormErrors.phoneNumber && (
                                  <span className="text-danger">
                                    {salesFormErrors.phoneNumber.message}
                                  </span>
                                )}
                              </div>
                              <DesiredServices
                                salesForm={salesForm}
                                salesFormErrors={salesFormErrors}
                                other={other}
                                setOther={setOther}
                                defaultUserData={defaultUserData}
                                setSalesFormValue={setSalesFormValue}
                                clearSalesFormError={clearSalesFormError}
                              />
                              <div>
                                <div
                                  className="b-project-timeline"
                                  data-testid="b-project-timeline"
                                >
                                  <div className="b-project-timeline-heading">
                                    <span>Project Timeline </span>
                                    <span className="text-danger"> *</span>
                                  </div>
                                  <div className="d-flex flex-wrap gap-2">
                                    <div className="d-flex align-items-center b-project-timeline-list">
                                      <input
                                        type="radio"
                                        value="1-3 Months"
                                        {...salesForm("projectTimeline")}
                                        name="projectTimeline"
                                        id="1-3-months"
                                      />
                                      <label
                                        className="mb-0"
                                        htmlFor="1-3-months"
                                      >
                                        1-3 Months
                                      </label>
                                    </div>
                                    <div className="d-flex align-items-center b-project-timeline-list">
                                      <input
                                        type="radio"
                                        value="3-6 Months"
                                        {...salesForm("projectTimeline")}
                                        name="projectTimeline"
                                        id="3-6-months"
                                      />
                                      <label
                                        className="mb-0"
                                        htmlFor="3-6-months"
                                      >
                                        3-6 Months
                                      </label>
                                    </div>
                                    <div className="d-flex align-items-center b-project-timeline-list">
                                      <input
                                        type="radio"
                                        value="6-12 Months"
                                        {...salesForm("projectTimeline")}
                                        name="projectTimeline"
                                        id="6-12-months"
                                      />
                                      <label
                                        className="mb-0"
                                        htmlFor="6-12-months"
                                      >
                                        6-12 Months
                                      </label>
                                    </div>
                                    <div className="d-flex align-items-center b-project-timeline-list">
                                      <input
                                        type="radio"
                                        value=">1 Year"
                                        {...salesForm("projectTimeline")}
                                        name="projectTimeline"
                                        id="greater-than-1-year"
                                      />
                                      <label
                                        className="mb-0"
                                        htmlFor="greater-than-1-year"
                                      >
                                        {">"}1 Year
                                      </label>
                                    </div>
                                    <div className="d-flex align-items-center b-project-timeline-list">
                                      <input
                                        type="radio"
                                        value="Not sure"
                                        {...salesForm("projectTimeline")}
                                        name="projectTimeline"
                                        id="not-sure"
                                      />
                                      <label
                                        className="mb-0"
                                        htmlFor="not-sure"
                                      >
                                        Not sure
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                {salesFormErrors.projectTimeline && (
                                  <span className="text-danger">
                                    {salesFormErrors.projectTimeline.message}
                                  </span>
                                )}
                              </div>
                              <div
                                className="b-hear-about-us col-lg-12"
                                data-testid="hear-about-us"
                              >
                                <label htmlFor="">
                                  How did you find us?
                                  <span className="text-danger"> *</span>
                                </label>
                                <select
                                  className={`form-control form-select shadow-none b-inquire-form-input ${
                                    isDarkMode ? "dark-dropdown-svg" : ""
                                  }`}
                                  {...salesForm("channel")}
                                >
                                  <option value="">Select</option>
                                  <option value="Google">Google</option>
                                  <option value="Word of mouth">
                                    Word of mouth
                                  </option>
                                  <option value="LinkedIn">LinkedIn</option>
                                  <option value="Other Social Media">
                                    Other social media
                                  </option>
                                  <option value="Email Newsletter">
                                    Email/Newsletter
                                  </option>
                                  <option value="Other">Other</option>
                                </select>
                                {salesFormErrors.channel && (
                                  <span className="text-danger">
                                    {salesFormErrors.channel.message}
                                  </span>
                                )}
                              </div>
                              <div
                                className="b-desired-service"
                                data-testid="b-communication-mode"
                              >
                                <div className="mb-1">
                                  <span className="b-desired-service-heading">
                                    Preferred Communication
                                  </span>
                                  <span className="b-desired-service-heading text-danger">
                                    {" "}
                                    *
                                  </span>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                  <div className="d-flex align-items-center b-desired-service-list">
                                    <input
                                      type="checkbox"
                                      value="Email"
                                      id="email"
                                      {...salesForm("communicationMode.0")}
                                      onChange={() => {
                                        {
                                          setSalesFormValue(
                                            "communicationMode.0",
                                            "Email"
                                          );
                                        }
                                        clearSalesFormError(
                                          "communicationMode"
                                        );
                                      }}
                                    />
                                    <label
                                      className="mb-0 b-preferred-communication-label"
                                      htmlFor="email"
                                    >
                                      Email
                                    </label>
                                  </div>
                                  <div className="d-flex align-items-center b-desired-service-list">
                                    <input
                                      type="checkbox"
                                      value="Phone call"
                                      id="phone-call"
                                      {...salesForm("communicationMode.1")}
                                      onChange={() => {
                                        {
                                          setSalesFormValue(
                                            "communicationMode.1",
                                            "Phone call"
                                          );
                                        }
                                        clearSalesFormError(
                                          "communicationMode"
                                        );
                                      }}
                                    />
                                    <label
                                      className="mb-0 b-preferred-communication-label"
                                      htmlFor="phone-call"
                                    >
                                      Phone call
                                    </label>
                                  </div>
                                  <div className="d-flex align-items-center b-desired-service-list">
                                    <input
                                      type="checkbox"
                                      value="WhatsApp"
                                      id="whatsapp"
                                      {...salesForm("communicationMode.2")}
                                      onChange={() => {
                                        {
                                          setSalesFormValue(
                                            "communicationMode.2",
                                            "WhatsApp"
                                          );
                                        }
                                        clearSalesFormError(
                                          "communicationMode"
                                        );
                                      }}
                                    />
                                    <label
                                      className="mb-0 b-preferred-communication-label"
                                      htmlFor="whatsapp"
                                    >
                                      WhatsApp
                                    </label>
                                  </div>
                                  <div className="d-flex align-items-center b-desired-service-list">
                                    <input
                                      type="checkbox"
                                      value="Any"
                                      id="any"
                                      {...salesForm("communicationMode.3")}
                                      onChange={() => {
                                        {
                                          setSalesFormValue(
                                            "communicationMode.3",
                                            "Any"
                                          );
                                        }
                                        clearSalesFormError(
                                          "communicationMode"
                                        );
                                      }}
                                    />
                                    <label
                                      className="mb-0 b-preferred-communication-label"
                                      htmlFor="any"
                                    >
                                      Any
                                    </label>
                                  </div>
                                </div>
                                {salesFormErrors.communicationMode && (
                                  <span className="text-danger">
                                    {salesFormErrors.communicationMode.message}
                                  </span>
                                )}
                              </div>
                              <div className="col-lg-12">
                                <div className="b-contact-btn">
                                  <button
                                    className="btn"
                                    disabled={loading || showSuccessIcon}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="col-lg-12 col-xl-4">
                <div className="b-contact-form-right">
                  <div className="b-what-happen-next">
                    <div className="b-what-happen-next-heading">
                      <h2>What Happens Next?</h2>
                    </div>
                    <div className="b-what-happen-next-content">
                      {WhatHappenNext.map((whatHappenNextContent) => (
                        <div
                          className="d-flex gap-2"
                          key={whatHappenNextContent.id}
                        >
                          <span>
                            {
                              <img
                                src={
                                  darkMode
                                    ? "/images/arrow-circle-right.svg"
                                    : "/images/arrow-circle-right-light.svg"
                                }
                                alt="arrow-circle-right"
                              />
                            }
                          </span>
                          <div className="text-start b-what-happen-next-individual-content">
                            {whatHappenNextContent.content}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-secondary">
                      <small>
                        This site is protected by reCAPTCHA and the Google
                        Privacy Policy and Terms of Service apply.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="b-section-title">
          <h1>
            <span className="b-custom-underline">Contact </span>Us
          </h1>
          {inquiryType ===
          config.LOCAL_STORAGE_VARIABLES.INQUIRY.HIRING_INQUIRY ? (
            <p>
              If you are interested in exploring career opportunities with our
              organization, please visit our dedicated careers page by clicking{" "}
              <Link href="/career" className="b-click-here-btn">
                here.
              </Link>
            </p>
          ) : (
            <p>
              Get answer to your questions about our sales, services, and
              support.
            </p>
          )}
        </div> */}
        {/* <div className="container">
          <div
            className={`b-contact-map-section ${
              inquiryType ===
              config.LOCAL_STORAGE_VARIABLES.INQUIRY.HIRING_INQUIRY
                ? "b-no-contact-form"
                : ""
            }`}
          >
            <div className="row">
              <div className="col-lg-4">
                <div className="b-contact-map-item">
                  <div className="b-map-image">
                    <Image
                      width={512}
                      height={512}
                      src={ImgLocationNaviMumbai.src}
                      alt="Mumbai-location-address-image"
                    />
                  </div>
                  <div className="b-map-content">
                    <div className="b-map-content-head">
                      <h4>Mumbai, India</h4>
                      <Link
                        href={`https://www.google.com/maps/place/Awfis+Vashi+Navi+Mumbai+Cyber+One/@19.0675499,72.9882881,17z/data=!3m1!5s0x3be7c7c3e5efd2c7:0x34bfa5f3735ade36!4m10!1m2!2m1!1s18th+Floor,+Cyberone+Sector30,+Vashi,+Navi+Mumbai,+Maharashtra+400703!3m6!1s0x3be7c6b4ac0f5b23:0x6af27035076ef01f!8m2!3d19.0675499!4d72.9930517!15sCkUxOHRoIEZsb29yLCBDeWJlcm9uZSBTZWN0b3IzMCwgVmFzaGksIE5hdmkgTXVtYmFpLCBNYWhhcmFzaHRyYSA0MDA3MDNaQyJBMTh0aCBmbG9vciBjeWJlcm9uZSBzZWN0b3IzMCB2YXNoaSBuYXZpIG11bWJhaSBtYWhhcmFzaHRyYSA0MDA3MDOSAQ9jb3dvcmtpbmdfc3BhY2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTm5NWFpFZEdoQlJSQULgAQA!16s%2Fg%2F11c1xg577g`}
                        target="_blank"
                      >
                        <Image
                          width={512}
                          height={512}
                          src="images/map-icon.svg"
                          style={{ cursor: "pointer" }}
                          alt="Mumbai-location-address-image"
                        />
                      </Link>
                    </div>
                    <p>
                      18th Floor, Cyberone Sector 30, Vashi, Navi Mumbai, MH
                      <button
                        className="btn btn-copy"
                        title="Copy Address"
                        onClick={(e) =>
                          handleCopyAddress(
                            e,
                            config.MESSAGE.MUMBAI_OFFICE_ADDRESS
                          )
                        }
                      ></button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="b-contact-map-item">
                  <div className="b-map-image">
                    <Image
                      width={512}
                      height={512}
                      src={ImgLocationAhmedabad.src}
                      alt="Ahmedabad-bsquare1-location-address-image"
                    />
                  </div>
                  <div className="b-map-content">
                    <div className="b-map-content-head">
                      <h4>Ahmedabad, India</h4>
                      <Link
                        href={`https://www.google.com/maps/place/Bombay+Softwares/@23.0284121,72.4963239,17z/data=!3m1!4b1!4m6!3m5!1s0x395e9b6461cf038d:0x86781b3bfb4a5da4!8m2!3d23.0284121!4d72.4988988!16s%2Fg%2F11g0sxv72d`}
                        target="_blank"
                      >
                        <Image
                          width={34}
                          height={34}
                          src="images/map-icon.svg"
                          style={{ cursor: "pointer" }}
                          alt="Ahmedabad-bsquare1-location-address-image"
                        />
                      </Link>
                    </div>
                    <p>
                      1106-1107, BSquare - 1, Vikram Nagar, Ahmedabad, GJ
                      <button
                        className="btn btn-copy"
                        title="Copy Address"
                        onClick={(e) =>
                          handleCopyAddress(
                            e,
                            config.MESSAGE.AHMEDABAD_BSQUARE_1_OFFICE_ADDRESS
                          )
                        }
                      ></button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="b-contact-map-item">
                  <div className="b-map-image">
                    <Image
                      width={512}
                      height={512}
                      src={ImgLocationAhmedabadBSquare2.src}
                      alt="Ahmedabad-bsquare2-location-address-image"
                    />
                  </div>
                  <div className="b-map-content">
                    <div className="b-map-content-head">
                      <h4>Ahmedabad, India</h4>
                      <Link
                        href={`https://www.google.com/maps/place/Bsquare+2,+Vikram+Nagar,+Ahmedabad,+Gujarat+380054/@23.0284438,72.4994505,17z/data=!4m9!1m2!2m1!1s308+BSquare+2,+Vikram+Nagar+Iskon,+Ambli+Rd,+near+Neptune+House,+Ahmedabad,+Gujarat+380058!3m5!1s0x395e9b3fab526553:0x96ffd2dd7c59f989!8m2!3d23.0283454!4d72.4994996!16s%2Fg%2F11qs97rd17`}
                        target="_blank"
                      >
                        <Image
                          width={34}
                          height={34}
                          src="images/map-icon.svg"
                          style={{ cursor: "pointer" }}
                          alt="Ahmedabad-bsquare2-location-address-image"
                        />
                      </Link>
                    </div>
                    <p>
                      308, BSquare - 2, Vikram Nagar, Ahmedabad, GJ
                      <button
                        className="btn btn-copy"
                        title="Copy Address"
                        onClick={(e) =>
                          handleCopyAddress(
                            e,
                            config.MESSAGE.AHMEDABAD_BSQUARE_2_OFFICE_ADDRESS
                          )
                        }
                      ></button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY}`} /> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      metaTitle: "Contact us | Get in Touch for Inquiries & Support",
      metaDescription:
        "Feel free to contact us for any queries; we will ensure you receive prompt support.",
      metaKeywords:
        "Bombay Softwares, Contact us, Sales inquiry, Hiring inquiry, Support",
    },
  };
};
