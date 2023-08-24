import Image from 'next/image'
import React from 'react'
import HowWeDoIt from '../../../public/images/how-we-do-it.jpg';
import AccordionItem from '../common/accordion-item';
import jsonData from '../../fixtures/how-we-do-it.json'

const HowWeDoItSection: React.FC = () => {
  return (
    <section className='b-how-we-do-it' data-testid='b-how-we-do-it'>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className='b-section-header'>
            <h2 className='b-section-header'>How we <span className='b-section-header b-bordered-text me-2'>do</span>it?</h2>
          </div>
          <div className="b-section-content">
            <div className='b-section-image'>
              <Image src={HowWeDoIt.src} width={499} height={312} alt='how we do it' />
            </div>
            <div className="b-section-text">
              <div className="accordion-flush b-accordion-flush" id='b-accordion'>
                {jsonData.map(item => <AccordionItem buttonTitle={item.title} accordionText={item.text} key={item.id} id={item.id} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeDoItSection