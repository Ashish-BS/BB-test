import { AccordionItemPropType } from '@/types/components/accordion'
import React from 'react'

const AccordionItem: React.FC<AccordionItemPropType> = ({ buttonTitle, accordionText, id }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button b-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${id}`} aria-expanded="false" aria-controls={`panelsStayOpen-${id}`}>
                    {buttonTitle}
                </button>
            </h2>
            <div id={`panelsStayOpen-${id}`} className="accordion-collapse collapse">
                <div className="accordion-body b-accordion-body" dangerouslySetInnerHTML={{ __html: accordionText }} />
            </div>
        </div>
    )
}

export default AccordionItem