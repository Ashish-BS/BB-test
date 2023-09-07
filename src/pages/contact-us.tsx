import React from 'react'
import CallToActionSection from '@/components/section/cta'
import whatHappensNextData from '@/fixtures/what-happens-next.json'

const ContactUs: React.FC = () => {
    return (
        <>
            <section className='b-contact-us-section b-section'>
                <div className='b-section-heading'>
                    <div className='container'>
                        <h1 className='b-tagline'>
                            <span>CONTACT</span>
                            <span className='b-bordered-text'>US</span>
                        </h1>
                    </div>
                </div>
                <div className='b-form-container'>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="b-form">
                                    <div className="b-header-container">
                                        <h2 className='b-section-header'>Get Free Project Estimate.</h2>
                                        <p>We support you in all areas and try to meet your project requirements in the best way possible.</p>
                                    </div>
                                    <div className="b-form-body">
                                        <div className="row b-information-section">
                                            <div className="col-lg-4">
                                                <div className='b-group'>
                                                    <label htmlFor="fullName" className='d-block'>Full Name&nbsp;<span className='text-danger'>*</span></label>
                                                    <input type="text" placeholder='Enter full name' name='fullName' />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className='b-group'>
                                                    <label htmlFor="email" className='d-block'>Email&nbsp;<span className='text-danger'>*</span></label>
                                                    <input type="text" placeholder='Enter email' name='email' />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className='b-group'>
                                                    <label htmlFor="phone" className='d-block'>Phone&nbsp;<span className='text-danger'>*</span></label>
                                                    <input type="text" placeholder='Enter phone number' name='phone' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row b-checkbox-section">
                                            <div className="col-lg-12">
                                                <label htmlFor="desiredServices" className='b-bold-label'>Desired Services&nbsp;<span className='text-danger'>*</span></label>
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="checkbox" id="mobileAppDevelopment" name='mobileAppDevelopment' value={'mobileAppDevelopment'} />
                                                <label htmlFor="mobileAppDevelopment">Mobile App Development</label>
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="checkbox" id="webDevelopment" name='webDevelopment' value={'webDevelopment'} />
                                                <label htmlFor="webDevelopment">Web Development</label>
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="checkbox" id="prototypeDevelopment" name='prototypeDevelopment' value={'prototypeDevelopment'} />
                                                <label htmlFor="prototypeDevelopment">Prototype/MVP Development</label>
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="checkbox" id="cloudInfrastructureSolution" name='cloudInfrastructureSolution' value={'cloudInfrastructureSolution'} />
                                                <label htmlFor="cloudInfrastructureSolution">Cloud Infrastructure Solution</label>
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="checkbox" id="websiteMaintenance" name='websiteMaintenance' value={'websiteMaintenance'} />
                                                <label htmlFor="websiteMaintenance">Website Maintenance</label>
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="checkbox" id="socialMediaManagement" name='socialMediaManagement' value={'socialMediaManagement'} />
                                                <label htmlFor="socialMediaManagement">Social Media Management</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="checkbox" id="digitalMarketing" name='digitalMarketing' value={'digitalMarketing'} />
                                                <label htmlFor="digitalMarketing">Digital Marketing (Social Media, Content Writing, SEO, Branding)</label>
                                            </div>
                                            <div className="col-lg-4">
                                                <input type="checkbox" id="others" name='others' value={'others'} />
                                                <label htmlFor="others">Others (please specify)</label>
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="text" name='others' placeholder='Enter other service name' className='w-100' />
                                            </div>
                                        </div>
                                        <div className='row b-timeline-section'>
                                            <div className="col-lg-12">
                                                <label htmlFor="timeline" className='b-bold-label'>Project Timeline (weeks)</label>
                                            </div>
                                            <div className="col-lg-2">
                                                <input type="radio" id="1-3" name='timeline' value={'1-3'} />
                                                <label htmlFor="1-3">1-3 weeks</label>
                                            </div>
                                            <div className="col-lg-2">
                                                <input type="radio" id="3-6" name='timeline' value={'3-6'} />
                                                <label htmlFor="3-6">3-6 weeks</label>
                                            </div>
                                            <div className="col-lg-2">
                                                <input type="radio" id="6-12" name='timeline' value={'6-12'} />
                                                <label htmlFor="6-12">6-12 weeks</label>
                                            </div>
                                            <div className="col-lg-2">
                                                <input type="radio" id="12" name='timeline' value={'12'} />
                                                <label htmlFor="12">&gt;1 year</label>
                                            </div>
                                            <div className="col-lg-2">
                                                <input type="radio" id="notSure" name='timeline' value={'notSure'} />
                                                <label htmlFor="notSure">Not sure</label>
                                            </div>
                                        </div>
                                        <div className='row b-hear-about-us-section'>
                                            <div className="col-lg-12">
                                                <label htmlFor="hearAboutUs" className='b-bold-label'>How Did You Hear About Us?&nbsp;<span className='text-danger'>*</span></label>
                                            </div>
                                            <div className='col-lg-12'>
                                                <select name="hearAboutUs" className='form-select'>
                                                    <option value="google">Google</option>
                                                    <option value="wordOfMouth">Word of mouth</option>
                                                    <option value="socialMedia">Social Media</option>
                                                    <option value="email">Email/Newsletter</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row b-communication-section'>
                                            <div className='col-lg-12'>
                                                <label htmlFor="modeOfCommunication" className='b-bold-label'>Preferred Mode of Communication&nbsp;<span className="text-danger">*</span></label>
                                            </div>
                                            <div className='col-lg-2'>
                                                <input type="checkbox" id='email' name='email' value={'email'} />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                            <div className='col-lg-2'>
                                                <input type="checkbox" id='phoneCall' name='phoneCall' value={'phoneCall'} />
                                                <label htmlFor="phoneCall">Phone call</label>
                                            </div>
                                            <div className='col-lg-2'>
                                                <input type="checkbox" id='whatsapp' name='whatsapp' value={'whatsapp'} />
                                                <label htmlFor="whatsapp">WhatsApp</label>
                                            </div>
                                            <div className='col-lg-2'>
                                                <input type="checkbox" id='any' name='any' value={'any'} />
                                                <label htmlFor="any">Any</label>
                                            </div>
                                        </div>
                                        <div className="row b-submit-btn">
                                            <div className='col-lg-12'>
                                                <button className='b-fill-btn-hover'>Let's talk</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 b-instruction-section">
                                <div className="row">
                                    <div className="b-header-header">
                                        <h2 className='b-section-header'>What Happens Next?</h2>
                                    </div>
                                </div>
                                <div className="b-instructions">
                                    <ul>
                                        {whatHappensNextData.map(item => (
                                            <li key={item.id}>{item.description}</li>
                                        ))}
                                    </ul>
                                    <div className="b-policy-container">
                                        <p>This site is protected by reCAPTCHA and the google<b>&nbsp;Privacy Policy&nbsp;</b>and <b>&nbsp;Terms of Service Policy&nbsp;</b>apply.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div className="b-cta-container">
                <CallToActionSection />
            </div>
        </>
    )
}

export default ContactUs