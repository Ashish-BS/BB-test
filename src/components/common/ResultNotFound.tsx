import React from "react";
import Link from "next/link";
import { ResultNotFoundPropType } from "@/types/components/result-not-found";
import config from "../../constants";

const ResultnotFound: React.FC<ResultNotFoundPropType> = (props) => {
  return (
    <div className="text-center mb-4" data-testid="b-result-not-found">
      <h4 className="opening-item text-center">
        {props.textMessage
          ? props.textMessage
          : config.MESSAGE.NO_RECORDS_FOUND}
      </h4>
      {props.pageName && props.pageName === config.PAGE_NAME.BLOG ? (
        <span className="text-center">
          Check out our featured {props.multiple ? "blogs" : "blog"}.
        </span>
      ) : props.pageName && props.pageName === config.PAGE_NAME.CASE_STUDY ? (
        <span className="text-center">
          Check out our featured{" "}
          {props.multiple ? "case studies" : "case study"}.
        </span>
      ) : (
        <span>
          Can’t find what you are looking for? Try searching by keywords or{" "}
          <Link href="/contact-us">get in touch with us.</Link>
        </span>
      )}
    </div>
  );
};

export default ResultnotFound;
