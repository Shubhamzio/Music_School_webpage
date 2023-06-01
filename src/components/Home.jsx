import React from 'react';
import homeVideo from '../assets/home_page_video.mp4';
import Socials from './Socials';
import './Home.css';
import guitarImg from '../assets/electricGuitar_image.jpg';
import drumsImg from '../assets/drums_image.jpeg';
import vocalImg from '../assets/vocal_image.jpg';
import bassGuitarImg from '../assets/bass_guitar.jpg';
import ukuleleImg from '../assets/ukulele_image.jpeg';
import keyboardImg from '../assets/keyboard_image.png';
import violinImg from '../assets/violin_image.jpg';
import fluteImg from '../assets/flute_img.jpeg';
import acousticImg from '../assets/acoustic_guitar.jpg';
const Home = () => {

  return (
    <>
    <div className='home_pg '>
      <video src={homeVideo} autoPlay loop muted className='video-bg' />
      <div className='overlay'></div>
      <div className='heading_for_home' data-aos='fade-up' data-aos-duration='2000'>
        <h1>Welcome to Natagarh Academy Of Arts</h1>
        <div className='text'>
          <span className='short-text' data-aos='fade-up' data-aos-duration='2000'>"A new Era of Learning Music by the experts"</span>
        </div>
      </div>
      <div className='subjects_section' >
        <h1 className ='heading_for_subjects' data-aos='fade-up' data-aos-duration='2000'>We are conducting</h1>
        <div className='subjects_wrapper' data-aos='fade-up' data-aos-duration='2000'>
          <div className='instrument' data-aos='fade-left' data-aos-duration='1000' >
            <h2>Electric Guitar Classes</h2>
            <img src={guitarImg} alt='guitar_img' />
          </div>
          <div className='instrument' data-aos='fade-right' data-aos-duration='1000'>
            <h2>Drums Classes</h2>
            <img src={drumsImg} alt='drums_img' />
          </div>
          <div className='instrument' data-aos='fade-left' data-aos-duration='1000'>
            <h2>Singing Classes</h2>
            <img src={vocalImg} alt='vocal_img' />
          </div>
          <div className='instrument' data-aos='fade-right' data-aos-duration='1000'>
            <h2>Bass Guitar Classes</h2>
            <img src={bassGuitarImg} alt='bass_img' />
          </div>
          <div className='instrument' data-aos='fade-left' data-aos-duration='1000'>
            <h2>Ukulele Classes</h2>
            <img src={ukuleleImg} alt='ukulele_img' />
          </div>
          <div className='instrument' data-aos='fade-right' data-aos-duration='1000'>
            <h2>Keyboard Classes</h2>
            <img src={keyboardImg} alt='keyboard_img' />
          </div>
          <div className='instrument' data-aos='fade-left' data-aos-duration='1000'>
            <h2>Flute Classes</h2>
            <img src={fluteImg} alt='violin_img'  />
          </div>
          <div className='instrument' data-aos='fade-right' data-aos-duration='1000'>
            <h2>Violin Classes </h2>
            <img src={violinImg} alt='violin_img'  />
          </div>
          <div className='instrument' data-aos='fade-left' data-aos-duration='1000'>
            <h2>Acoustic guitar Classes</h2>
            <img src={acousticImg} alt='acoustic_img'  />
          </div>
        </div>
      </div>

     <Socials/>
    </div>
    </>
  )
}

export default Home;


