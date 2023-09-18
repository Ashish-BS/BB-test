import React from 'react'
import { SocialProofChart } from '../common/socail-proof-chart';

const SocialProofSection: React.FC = () => {
    return (
        <section className='b-social-proof-section' data-testid='b-social-proof-section'>
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center b-flex-container">
                    <div className="b-proof-section-header">
                        <h2 className='b-section-header'>Social <span className='b-section-header b-bordered-text'>Proof</span></h2>
                    </div>
                    <div className='b-section-description'>
                        <p>Numbers don't lie!</p>
                        <p>Check out Bombaybees remarkable social stats and the impact we've made!</p>
                    </div>
                    <div className='b-section-chart'>
                        <SocialProofChart />
                    </div>
                    <div className='b-section-caption'>
                        <p>*For YouTube, consider reach as views and followers as subscribers.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialProofSection