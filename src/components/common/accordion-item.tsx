import { AccordionItemPropType } from "@/types/components/accordion";
import React from "react";

const AccordionItem: React.FC<AccordionItemPropType> = ({
  buttonTitle,
  accordionText,
  id,
}) => {
  return (
    <div className="accordion-item">
      <div className="accordion-content">
        <h3 className="accordion-title">{buttonTitle}</h3>
        <div
          className={`accordion-body b-accordion-body ${
            id === 1 ? "show" : ""
          }`}
        >
          <p dangerouslySetInnerHTML={{ __html: accordionText }} />
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
