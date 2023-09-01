import React from 'react';
import Image from 'next/image';
import bannerCharactersData from '../../fixtures/banner-characters.json';
import BannerImage from '../../../public/images/banner-area.jpg';
import Bubbles from '../common/bubbles';
import Callout from '../common/callout';

const BannerSection: React.FC = () => {
    return (
        <section className='b-banner-section' data-testid='b-banner-section'>
            <div className='b-banner-heading'>
                <div className='container'>
                    <h1 className='b-tagline'>
                        <span>Unlock Your</span>
                        <span className='b-bordered-text'>business potential</span>
                        <span className='d-block'> with Revolutionary Digital Marketing Solutions</span></h1>
                </div>
            </div>
            <div className="b-banner-image-section">
                <div className="container-fluid p-0">
                    <div className='b-banner-images'>
                        {bannerCharactersData.map(character => (
                            <div className='b-banner-group' key={character.id}>
                                <div className="b-callout-container">
                                    <Callout title={character.title} />
                                </div>
                                <Image src={character.imageUrl} width={455} height={440} alt={character.imageAlt} priority className='b-banner-image' />
                            </div>
                        ))}
                    </div>
                    <div className='b-banner-static-image'>
                        <Image src={BannerImage.src} width={1200} height={440} alt='banner-image' />
                    </div>
                </div>
                <div className='b-image-caption'>
                    <div className='container'>
                        <p>
                            Our digital marketing solution will increase your online visibility and drive more traffic to your website, delivering measurable results and a higher ROI.
                        </p>
                    </div>
                </div>
            </div>
            <Bubbles />
        </section>
    )
}

export default BannerSection