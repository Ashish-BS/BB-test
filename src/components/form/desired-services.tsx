import React from "react";
import { IDesiredServiceProps } from "@/types/components/form-schema/contact-us.types";

const DesiredServices: React.FC<IDesiredServiceProps> = ({
  salesForm,
  other,
  setOther,
  salesFormErrors,
  defaultUserData,
  setSalesFormValue,
  clearSalesFormError,
}) => {
  return (
    <div className="b-desired-service col-lg-12">
      <div className="mb-1">
        <span className="b-desired-service-heading">Desired Services</span>
        <span className="b-desired-service-heading text-danger"> *</span>
      </div>
      <div>
        <div className="d-flex flex-wrap gap-2">
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Website Development"
              {...salesForm("desiredService.0")}
              id="website-development"
              onChange={(e) => {
                {
                  if (e.target.checked) {
                    setSalesFormValue(
                      "desiredService.0",
                      "Website Development"
                    );
                  } else {
                    setSalesFormValue("desiredService.0", false);
                  }
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="website-development">
              Website Development
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Seo"
              {...salesForm("desiredService.1")}
              id="seo"
              onChange={(e) => {
                {
                  if (e.target.checked) {
                    setSalesFormValue("desiredService.1", "Seo");
                  } else {
                    setSalesFormValue("desiredService.1", false);
                  }
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="seo">
              SEO
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Search Engine Marketing"
              {...salesForm("desiredService.2")}
              id="search-engine-marketing"
              onChange={(e) => {
                {
                  if (e.target.checked) {
                    setSalesFormValue(
                      "desiredService.2",
                      "Search Engine Marketing"
                    );
                  } else {
                    setSalesFormValue("desiredService.2", false);
                  }
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="search-engine-marketing">
              Search Engine Marketing
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Social Media Marketing"
              {...salesForm("desiredService.3")}
              id="social-media-marketing"
              onChange={(e) => {
                {
                  if (e.target.checked) {
                    setSalesFormValue(
                      "desiredService.3",
                      "Social Media Marketing"
                    );
                  } else {
                    setSalesFormValue("desiredService.3", false);
                  }
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="social-media-marketing">
              Social Media Marketing
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Others (please specify)"
              id="others"
              onClick={() => setOther((prev) => !prev)}
              {...salesForm("desiredService.4")}
              checked={other}
            />
            <label className="mb-0" htmlFor="others">
              Others (please specify)
            </label>
          </div>
          <input
            className="b-desired-service-checkbox hidden"
            type="checkbox"
            value="Social Media Marketing"
            {...salesForm("desiredService.5")}
            id="social-media-marketing"
            onChange={(e) => {
              {
                if (e.target.checked) {
                  setSalesFormValue(
                    "desiredService.5",
                    "Social Media Marketing"
                  );
                } else {
                  setSalesFormValue("desiredService.5", false);
                }
              }
              clearSalesFormError("desiredService");
            }}
          />
          <input
            className="b-desired-service-checkbox hidden"
            type="checkbox"
            value="Social Media Marketing"
            {...salesForm("desiredService.6")}
            id="social-media-marketing"
            onChange={(e) => {
              {
                if (e.target.checked) {
                  setSalesFormValue(
                    "desiredService.6",
                    "Social Media Marketing"
                  );
                } else {
                  setSalesFormValue("desiredService.6", false);
                }
              }
              clearSalesFormError("desiredService");
            }}
          />
          <input
            className="b-desired-service-checkbox hidden"
            type="checkbox"
            value="Social Media Marketing"
            {...salesForm("desiredService.7")}
            id="social-media-marketing"
            onChange={(e) => {
              {
                if (e.target.checked) {
                  setSalesFormValue(
                    "desiredService.7",
                    "Social Media Marketing"
                  );
                } else {
                  setSalesFormValue("desiredService.7", false);
                }
              }
              clearSalesFormError("desiredService");
            }}
          />
        </div>

        <div className={`row ${other ? "d-block" : "d-none"}`}>
          <div className="col-lg-12 mt-3">
            <input
              className="py-2 px-3 w-100"
              type="text"
              placeholder="Enter other service name"
              defaultValue={
                defaultUserData?.desiredService?.[4]
                  ? defaultUserData.desiredService?.[4]
                  : ""
              }
              {...salesForm("desiredService.4")}
              onChange={(e) => {
                setSalesFormValue("desiredService.4", e.target.value);
                clearSalesFormError("desiredService");
              }}
            />
          </div>
        </div>
      </div>
      {salesFormErrors.desiredService && (
        <span className="text-danger">
          {salesFormErrors.desiredService.message}
        </span>
      )}
    </div>
  );
};

export default DesiredServices;
