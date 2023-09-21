import { AccordionItemPropType } from '@/types/components/accordion'
import React from 'react'

const AccordionItem: React.FC<AccordionItemPropType> = ({ buttonTitle, accordionText, id }) => {
    return (
        <div className="accordion-item">
            <h3 className="accordion-header">
                <button className={`accordion-button b-accordion-button ${id === 1 ? '' : 'collapsed'} `} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${id}`} aria-expanded="false" aria-controls={`panelsStayOpen-${id}`}>
                    {buttonTitle}
                </button>
            </h3>
            <div id={`panelsStayOpen-${id}`} className={`accordion-collapse collapse ${id === 1 ? 'show' : ''}`}>
                <div className="accordion-body b-accordion-body"><p dangerouslySetInnerHTML={{ __html: accordionText }} /></div>
            </div>
        </div>
    )
}

export default AccordionItem