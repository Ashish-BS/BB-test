import React from 'react';
import Image from 'next/image';
import BannerArea from '../../../public/images/banner-area.jpg';
import Bubbles from '../common/bubbles';

const BannerSection: React.FC = () => {
    return (
        <section className='b-banner-section'>
            <div className='b-banner-heading'>
                <div className='container'>
                    <h1 className='b-tagline'>
                        <span>Unlock Your</span>
                        <span className='b-bordered-text'>business potential</span>
                        <span className='d-block'> with Revolutionary Digital Marketing Solutions</span></h1>
                </div>
                <Bubbles />
            </div>
            <div className="b-banner-image-section">
                <div className='b-banner-image'>
                    <Image src={BannerArea.src} width={1523} height={718} alt='banner-area' />
                </div>
                <div className='b-image-caption'>
                    <div className='container'>
                        <p>
                            Our digital marketing solution will increase your online visibility and drive more traffic to your website, delivering measurable results and a higher ROI.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection