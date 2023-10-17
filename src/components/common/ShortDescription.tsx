import { ShortDescriptionPropType } from "@/types/components/short-description";
import React from "react";

const ShortDescription: React.FC<ShortDescriptionPropType> = (props) => {
  const content = props.numberOfCharactersToShow
    ? props.text.split(" ").slice(0, props.numberOfCharactersToShow).join(" ") +
      "..."
    : props.text.split(" ").slice(0, 20).join(" ") + "...";
  return <span dangerouslySetInnerHTML={{ __html: content }} />;
};

export default ShortDescription;
