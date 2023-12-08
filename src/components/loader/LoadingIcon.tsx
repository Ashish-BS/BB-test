import { LoadingIconPropType } from "@/types/components/component-types/loading-icon";
import React from "react";

const LoadingIcon: React.FC<LoadingIconPropType> = (props) => {
  const loaderStyles = {
    borderTopColor: props.spinnerColor || "",
    borderLeftColor: props.spinnerColor || "",
  };

  return (
    <>
      <div className="d-flex align-items-center p-0 justify-content-center">
        <span className="d-block me-2">
          {props.loadingText
            ? props.loadingText
            : props.showLoadingText
            ? "Loading"
            : ""}
        </span>
        <div className="spinner">
          <div className="spinner-icon" style={loaderStyles}></div>
        </div>
      </div>
    </>
  );
};

export default LoadingIcon;
