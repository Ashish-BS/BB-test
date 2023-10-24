import { IDesiredServiceProps } from "@/types/components/form-schema/contact-us.types";
import React from "react";

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
              value="Mobile App Development"
              {...salesForm("desiredService.0")}
              id="mobile-app-development"
              onChange={() => {
                {
                  setSalesFormValue(
                    "desiredService.0",
                    "Mobile App Development"
                  );
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="mobile-app-development">
              Mobile App Development
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Web Application Development"
              {...salesForm("desiredService.1")}
              id="web-application-development"
              onChange={() => {
                {
                  setSalesFormValue(
                    "desiredService.1",
                    "Web Application Development"
                  );
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="web-application-development">
              Web Application Development
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Prototype/MVP Development"
              {...salesForm("desiredService.2")}
              id="prototype/MVP-development"
              onChange={() => {
                {
                  setSalesFormValue(
                    "desiredService.2",
                    "Prototype/MVP Development"
                  );
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="prototype/MVP-development">
              Prototype/MVP Development
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Cloud Infrastructure Solution"
              {...salesForm("desiredService.3")}
              id="cloud-infrastructure-solution"
              onChange={() => {
                {
                  setSalesFormValue(
                    "desiredService.3",
                    "Cloud Infrastructure Solution"
                  );
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="cloud-infrastructure-solution">
              Cloud Infrastructure Solution
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Website Maintenance"
              {...salesForm("desiredService.4")}
              id="website-maintenance"
              onChange={() => {
                {
                  setSalesFormValue("desiredService.4", "Website Maintenance");
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="website-maintenance">
              Website Maintenance
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Social Media Management"
              {...salesForm("desiredService.5")}
              id="social-media-management"
              onChange={() => {
                {
                  setSalesFormValue(
                    "desiredService.5",
                    "Social Media Management"
                  );
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="social-media-management">
              Social Media Management
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Digital Marketing (Social Media, Content Writing, SEO, Branding)"
              {...salesForm("desiredService.6")}
              id="digital-marketing"
              onChange={() => {
                {
                  setSalesFormValue(
                    "desiredService.6",
                    "Digital Marketing (Social Media, Content Writing, SEO, Branding)"
                  );
                }
                clearSalesFormError("desiredService");
              }}
            />
            <label className="mb-0" htmlFor="digital-marketing">
              Digital Marketing (Social Media, Content Writing, SEO, Branding)
            </label>
          </div>
          <div className="d-flex align-items-start b-desired-service-list">
            <input
              className="b-desired-service-checkbox"
              type="checkbox"
              value="Others (please specify)"
              id="others"
              onClick={() => setOther((prev) => !prev)}
              {...salesForm("desiredService.7")}
              checked={other}
            />
            <label className="mb-0" htmlFor="others">
              Others (please specify)
            </label>
          </div>
        </div>

        <div className={`row ${other ? "d-block" : "d-none"}`}>
          <div className="col-lg-12 mt-3">
            <input
              className="py-2 px-3 w-100"
              type="text"
              placeholder="Enter other service name"
              defaultValue={
                defaultUserData?.desiredService?.[7]
                  ? defaultUserData.desiredService?.[7]
                  : ""
              }
              {...salesForm("desiredService.7")}
              onChange={(e) => {
                setSalesFormValue("desiredService.7", e.target.value);
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
