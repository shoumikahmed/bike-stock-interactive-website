import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <section className='bg-dark py-4'>
            <div className='container mb-4 pt-2'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-md-4'>
                        <h3 className='text-white'><strong>Newsletter</strong></h3>
                        <p className='text-secondary'><strong>By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!</strong></p>
                    </div>
                    <div className='col-md-4'>
                        <h3 className='text-white'><strong>Twitter Feed</strong></h3>
                        <p className='text-secondary'><strong>Check out our latest theme release - bike stock.net/item/landscapi…

                            @MrSamHughes Probably the easiest way is to send an email to sales@themesuite.com, or through our ThemeForest profi… twitter.com/i/web/status/8…</strong></p>
                    </div>
                    <div className='col-md-4'>
                        <h3 className='text-white'><strong>Contact Us</strong></h3>
                        <p className='text-secondary'><strong>Address: Bangladsh, Jashore, AB2
                            <br />
                            Phone: 01778774082
                            <br />
                            Email: shoumik@bikestock.com</strong></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;