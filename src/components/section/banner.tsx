import React from 'react';
import Image from 'next/image';
import slyStrategistImage from '../../../public/images/sly-strategist.svg';
import jungleJesterImage from '../../../public/images/jungle-jester.svg';
import roaringManagerImage from '../../../public/images/roaring-manager.svg';
import stubbornAccountantImage from '../../../public/images/stubborn-accountant.svg';
import loyalAssistantImage from '../../../public/images/loyal-assistant.svg';
import gallopGuruImage from '../../../public/images/gallop-guru.svg';
import BannerImage from '../../../public/images/banner-area.svg';
import Bubbles from '../common/bubbles';

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
                <Bubbles />
            </div>
            <div className="b-banner-image-section">
                <div className='b-banner-image'>
                    {/* <Image src={slyStrategistImage} width={455} height={340} alt='sly-strategist' priority />
                    <Image src={jungleJesterImage} width={455} height={340} alt='jungle-jester' priority />
                    <Image src={roaringManagerImage} width={455} height={340} alt='roaring-manager' priority />
                    <Image src={stubbornAccountantImage} width={455} height={340} alt='stubborn-accountant' priority />
                    <Image src={loyalAssistantImage} width={455} height={340} alt='loyal-assistant' priority />
                    <Image src={gallopGuruImage} width={455} height={340} alt='gallop-guru' priority /> */}

                    <Image src={BannerImage} width={555} height={540} alt='gallop-guru' priority />
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