import React, { useRef, useState } from 'react';
import './Contact.css';
import naaLogo from '../assets/logo-no-background.png';
import footerLogo from '../assets/logo-no-background.png';
import GotoTop from './GotoTop';
import emailjs from '@emailjs/browser';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gbs6w2o', 'template_7e6niug', form.current, 'cS2Qu5uAhpUJzm0MD')
      .then((result) => {
        console.log(result.text);
        console.log('message sent');
        alert('message sent successfully')
      }, (error) => {
        console.log(error.text);
      });
  }

   const [fname, setFname] = useState('');
   const [email, setEmail] = useState('');
   const [message,setMessage] = useState('');

   const handleChange = () => {
    if(fname.length === 0 && email.length === 0 && message.length===0){
      alert('Name, Email and Messages cannot be empty');
    }

   }

  return (
    <div className='container_contact' >
      <div className='contact_section_heading' data-aos='fade-up' data-aos-duration='1000' >
        <h1 className='contact_section_heading_h1'>
          Get In Touch
        </h1>
        <img src={naaLogo} data-aos='fade-left' data-aos-duration='1000' alt='Naa_logo'
         />
      </div>
      <h2 className='contact_us' data-aos='fade-right' data-aos-duration='1000'>
      <span className='span_contact'>

      </span>Call +916289390753 </h2>
      <p className='e_address' data-aos='fade-right' data-aos-duration='1000'>Email: natagarhacademyofarts@gmail.com</p>
      <p className='address_details' data-aos ='fade-left' data-aos-duration='1000'>
        Address: Natagarh Academy Of Arts, Sodepur, Pansila, Uttar Natagargh Canal Side Road, Kolkata-700112
      </p>


      <div className='contact_form' >
        <h1 data-aos ='fade-up' data-aos-duration ='1000'>Send Us Messages</h1>
        <form ref={form} onSubmit={sendEmail} className='form_fill' required data-aos='fade-left' data-aos-duration='1000'>
          <label htmlFor='fname'>Name</label>
          <input onChange={(e)=> setFname(()=> e.target.value ) } type="text" name="user_name" placeholder='Fullname' id='fname' />
          <label htmlFor ='email'>Email</label>
          <input onChange={(e)=> setEmail(()=> e.target.value ) } type="email" name="user_email" placeholder='example@email.com' id ='email' />
          <label>Message</label>
          <textarea name="message" placeholder='Enter Your Message' onChange={(e)=> setMessage(()=> e.target.value ) }  />
          <input type="submit" value="Send" style={{
            cursor: "pointer",
            color: '#fff',
            background: 'orange',
            fontSize: '1.2rem'
            , }} onClick={handleChange} />
        </form>
      </div>

      <GotoTop />
      <div className='footer_section' style={{height: 'auto'}}>
        <div className='logo_for_footer' data-aos='fade-left' data-aos-duration='1000' >
          <img src={footerLogo} alt='footer_logo' />
        </div>
        <div className='copyright' data-aos='fade-right' data-aos-duration='1000'  >
          <p >© All Rights Reserved 2023, Natagarh Academy Of Arts</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;