import Image from 'next/image'
import React from 'react'
import SalesImage from '../../../public/images/sales.jpg'
import CustomerManagementImage from '../../../public/images/customer-management.jpg'
import CompetitiveAdvantage from '../../../public/images/competitve-advantage.jpg'

const WhatYouWillGetSection: React.FC = () => {
    return (
        <section className='b-what-will-you-get'>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className='b-section-header'>
                        <h2 className='b-section-header'>What will you <span className='b-section-header b-bordered-text me-2'>get</span>?</h2>
                    </div>
                    <div className="b-section-content">
                        <div className='b-section-image'>
                            <Image src={SalesImage.src} width={499} height={312} alt='increase-in-sales-and-revenue' />
                        </div>
                        <div className="b-section-text">
                            <div className="b-header-text">
                                <h3>Increase in sales and revenue</h3>
                            </div>
                            <div className="b-description">
                                <p>The ability to attract more customers and increase sales by reaching the right people at the right time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="b-section-content">
                        <div className="b-section-text">
                            <div className="b-header-text">
                                <h3>Better customer engagement</h3>
                            </div>
                            <div className="b-description">
                                <p>
                                    The ability to understand and engage with customers better, resulting in increased customer loyalty and retention.
                                </p>
                            </div>
                        </div>
                        <div className='b-section-image'>
                            <Image src={CustomerManagementImage.src} width={499} height={312} alt='better-customer-engagement' />
                        </div>
                    </div>
                    <div className="b-section-content">
                        <div className='b-section-image'>
                            <Image src={SalesImage.src} width={499} height={312} alt='cost-saving' />
                        </div>
                        <div className="b-section-text">
                            <div className="b-header-text">
                                <h3>Cost savings</h3>
                            </div>
                            <div className="b-description">
                                <p>The ability to save time and money by automating repetitive tasks and making data-driven decisions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="b-section-content">
                        <div className="b-section-text">
                            <div className="b-header-text">
                                <h3>Competitive advantage </h3>
                            </div>
                            <div className="b-description">
                                <p>
                                    The ability to stay ahead of the competition by using the latest technology and industry best practices.
                                </p>
                            </div>
                        </div>
                        <div className='b-section-image'>
                            <Image src={CompetitiveAdvantage.src} width={499} height={312} alt='competitive-advantage' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatYouWillGetSection