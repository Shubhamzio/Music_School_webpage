import React from 'react';
import './About.css';
import teachingImg from '../assets/teach_music.png';
import doubtImg from '../assets/doubt_clearing.png'
import footerLogo from '../assets/logo-no-background.png';
import muscialImg from '../assets/understand_img.png';
import collaborationImg from '../assets/uniform_img.png';
import GotoTop from './GotoTop';

const About = () => {
  return (
    <div className='about_container'>
      <div className='about_paragraph'>
        <h1 data-aos= 'fade-up' data-aos-duration ='1000'>About NAA</h1>
        <p data-aos= 'fade-up' data-aos-duration ='1500'>NAA stands for the Natagarh Academy Of Art has established in 2023. Rahul Saha, our Guitar
          Teacher has founded this organization to help a beginner as well as professional musician to
          grow their career in music and to teach music with proper guidance and care.Hence we are working with
          some extremely talented teachers also great musicians as an individual.We are conducting  classes of
          various musical instruments with international standard stave notation, sight reading, improvising music
          with proper & helful guidance.We are also preparing students for the Trinity grade exams conducted by Trinity
          College London,UK. </p>
      </div>
      <div className='our_curriculam'>
        <div className='our_mission'>
          <h1 data-aos= 'fade-up' data-aos-duration ='1000'>Our Mission</h1>
          <div className='mission' data-aos= 'fade-up' data-aos-duration ='1000'>
            <div className='card' data-aos= 'fade-right' data-aos-duration ='1000'>
              <img src={teachingImg} alt='teaching' />
              <h3>Releavant Teaching</h3>
            </div>
            <div className='card' data-aos= 'fade-left' data-aos-duration ='1000'>
              <img src={doubtImg} alt='doubt_clearing' />
              <h3>Doubt Clearing Session</h3>
            </div>
            <div className='card' data-aos= 'fade-right' data-aos-duration ='1000'>
              <img src={muscialImg} alt='teaching' />
              <h3>Musical Understanding</h3>
            </div>
            <div className='card' data-aos= 'fade-left' data-aos-duration ='1000'>
              <img src={collaborationImg} alt='teaching' />
              <h3>Uniform Collaboration</h3>
            </div>
          </div>
        </div>
      </div>

      <GotoTop/>
      <div className ='footer_section'>
             <div className = 'logo_for_footer' data-aos='fade-left' data-aos-duration='1000' >
                <img src = {footerLogo} alt= 'footer_logo'/>
             </div>
             <div className ='copyright' data-aos='fade-right' data-aos-duration='1000'  >
             <p >© All Rights Reserved 2023, Natagarh Academy Of Arts</p>
             </div>
            </div>

    </div>
  )
}

export default About;