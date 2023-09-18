import Image from 'next/image'
import React from 'react'
import whatWillYouGetItems from '../../fixtures/what-will-you-get.json'

const WhatYouWillGetSection: React.FC = () => {
    return (
        <section className='b-what-will-you-get b-section' data-testid='b-what-will-you-get'>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className='b-what-will-you-get-section-header'>
                        <h2 className='b-section-header'>What will you <span className='b-section-header b-bordered-text me-2'>get</span>?</h2>
                    </div>
                    {whatWillYouGetItems?.length ? whatWillYouGetItems.map(item => (
                        <div className="b-section-content" key={item.id}>
                            <div className='b-section-image'>
                                <Image src={item.imageUrl} width={499} height={312} alt={item.imageAlt} />
                            </div>
                            <div className="b-section-text">
                                <div className="b-header-text">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="b-description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>

                    )) : null}

                </div>
            </div>
        </section>
    )
}

export default WhatYouWillGetSection