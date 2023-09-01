import React from 'react'

const CallToActionSection: React.FC = () => {
    return (
        <section className='b-call-to-action b-section' data-testid='b-call-to-action'>
            <div className='container-fluid'>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <h4>Know about our winning organic marketing strategy.</h4>
                    <button className='b-cta-button b-fill-btn-hover'>Let's talk</button>
                </div>
            </div>
        </section>
    )
}

export default CallToActionSection