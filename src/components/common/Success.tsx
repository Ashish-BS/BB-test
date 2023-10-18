import Image from "next/image";
import React from "react";
import Check from "../../../public/images/check.svg";
import { SuccessPropType } from "@/types/components/component-types/success";

const SuccessIcon: React.FC<SuccessPropType> = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <span>{props.text && props.text}</span>
      <Image
        src={Check.src}
        width={30}
        height={30}
        alt="Check-logo"
        className="ms-1"
      />
    </div>
  );
};

export default SuccessIcon;
