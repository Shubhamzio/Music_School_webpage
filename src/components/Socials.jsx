import React from 'react';
import './Socials.css';
import { faFacebook, faYoutube, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerLogo from '../assets/logo-no-background.png';
import GotoTop from './GotoTop';
const Socials = () => {
    return (
        <>
            <section className='section_media' >
                <div className='socials_header' data-aos='fade-up' data-aos-duration='1000'>
                    <h1>
                        Connect With Us
                    </h1>
                </div>

                <div className='socials_container' data-aos='fade-up' data-aos-duration='1000'>
                    <div className='facebook_icon'>
                        <a href='https://www.facebook.com/people/Natagarh-Academy-Of-Arts/100091034574834/?is_tour_completed=true'
                            className='facebook-logo' target='react\jsx-no-target-blank'>
                            <FontAwesomeIcon icon={faFacebook} size="6x" className='logo-1' />
                        </a>
                    </div>
                    <div className='instagram_icon'>
                        <a href='https://www.instagram.com/natagarhacademyofarts/'
                            className='youtube-logo' target='react\jsx-no-target-blank'>
                            <FontAwesomeIcon icon={faInstagram} size="6x" className='logo-2' />
                        </a>
                    </div>
                    <div className='youtube_icon'>
                        <a href='https://www.youtube.com/@NatagarhAcademyofArts' target='react\jsx-no-target-blank'
                            className='youtube-logo'>
                            <FontAwesomeIcon icon={faYoutube} size="6x" className='logo-3' />
                        </a>
                    </div>
                </div>
                <div className='whatsapp_container' data-aos='zoom-out-down' data-aos-duration='1000' style={{ overflowX: 'hidden' }}>

                    <a href='https://wa.me/+916289390753/' target='react\jsx-no-target-blank' className='link_logo'>
                        <div classNAme='whatsapp_txt'>
                            <h2>Chat With Us</h2>
                        </div>
                        <div className='whatsapp_logo'>

                            <FontAwesomeIcon icon={faWhatsapp} size="2x" className='logo-4' />
                        </div>
                    </a>
                </div>



                <GotoTop />


                <div className='footer_section'>
                    <div className='logo_for_footer' data-aos='fade-left' data-aos-duration='1000' >
                        <img src={footerLogo} alt='footer_logo' />
                    </div>
                    <div className='copyright' data-aos='fade-right' data-aos-duration='1000'  >
                        <p >© All Rights Reserved 2023, Natagarh Academy Of Arts</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Socials;