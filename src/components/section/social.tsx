import React from 'react'
import ChartImage from '../../../public/images/chart.svg';
import Image from 'next/image';

const SocialProofSection: React.FC = () => {
    return (
        <section className='b-social-proof-section'>
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="b-proof-section-header">
                        <h2 className='b-section-header'>Social <span className='b-section-header b-bordered-text'>Proof</span></h2>
                    </div>
                    <div className='b-section-description'>
                        <h3>Numbers don't lie!</h3>
                        <p>Check out Bombaybees remarkable social stats and the impact we've made!</p>
                    </div>
                    <div className='b-section-chart'>
                        <Image src={ChartImage.src} width={1110} height={609} alt='stats-chart' />
                    </div>
                </div>
                <div className='b-section-caption'>
                    <p>*For YouTube, consider reach as views and followers as subscribers.</p>
                </div>
            </div>
        </section>
    )
}

export default SocialProofSection