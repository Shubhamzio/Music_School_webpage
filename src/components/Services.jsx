import React from 'react';
import './Services.css';
import providingImg from '../assets/providing-img.jpg';
import guitarVideo from '../assets/guitar_video.mp4';
import drumsVideo from '../assets/drums_video.mp4';
import bassVideo from '../assets/bass_guitar.mp4';
import keysVideo from '../assets/Keyboard.mp4';
import vocalVideo from '../assets/vocal_video.mp4';
import ukuleleVideo from '../assets/ukulele_video.mp4';
import violinVideo from '../assets/violin_video.mp4';
import acousticVideo from '../assets/acoustic_video.mp4';
import fluteVideo from '../assets/flute_video.mp4';
import rahulPic from '../assets/rahul_pic.jpeg';
import sagnikPic from '../assets/sagnik_img.jpeg';
import mrinmoyPic from '../assets/mrinmoy_pic.NEF';
import payelPic from '../assets/payel_pic.jpg';
import premjitPic from '../assets/premjit_img.png';
import footerLogo from '../assets/logo-no-background.png';
import debuPic from '../assets/img_shibu.jpg';
import GotoTop from './GotoTop';

const Services = () => {
  return (
    <>
      <div className='services_section'>

        <div className='services_section_heading' >
          <h1 className='heading_for_services' data-aos="fade-up" data-aos-duration="1000" >What we are Providing?</h1>
          <div className='providing_details' data-aos="fade-left" data-aos-duration="1000" >
            <div className='providing_img'>
              <img src={providingImg} alt='providing_img' />
            </div>
            <div className='providing_text' data-aos='fade-up' data-aos-duration='1000'>
              <p>NAA is conducting best music classes for both online and offline students.Subjects are included as Electric Guitar, Bass Guitar , Drums, Piano, Ukulele & Vocals.
                We have enrolled professional and experienced music faculties</p>
            </div>
          </div>
        </div>

        <div className='subjects'>
          <div className='video_container' data-aos='fade-right' data-aos-duration='1000'>
            <video src={guitarVideo} autoPlay muted loop className='guitar_video' />
            <h1 data-aos='fade-down' data-aos-duration='1000'>Learn Electric guitar</h1>
            <div className='short_guitar_text'>

              <h3 data-aos='fade-left' data-aos-duration='1000'>" Learn Electric Guitar from Scratch with international Standard stave notations "</h3>
            </div>
          </div>
        </div>
        <div className='subjects'>
          <div className='video_container' data-aos='fade-left' data-aos-duration='1000'>
            <video src={drumsVideo} autoPlay muted loop className='guitar_video' />
            <h1 data-aos='fade-down' data-aos-duration='1000'>Learn Drums</h1>
            <div className='short_guitar_text'>

              <h3 data-aos='fade-left' data-aos-duration='1000'>'We are conducting Drums classes without need any prerequisite' </h3>
            </div>
          </div>
        </div>
        <div className='subjects'>
          <div className='video_container' data-aos='fade-right' data-aos-duration='1000'>
            <video src={bassVideo} autoPlay muted loop className='guitar_video' />
            <h1 data-aos='fade-down' data-aos-duration='1000'>Learn Bass Guitar</h1>
            <div className='short_guitar_text'>

              <h3 data-aos='fade-left' data-aos-duration='1000'>Learn to Play bass guitar with rudiments and fullfill your joy</h3>
            </div>
          </div>
        </div>
        <div className='subjects'>
          <div className='video_container' data-aos='fade-left' data-aos-duration='1000'>
            <video src={keysVideo} autoPlay muted loop className='guitar_video' />
            <h1 data-aos='fade-down' data-aos-duration='1000'>Learn Keyboard</h1>
            <div className='short_guitar_text'>

              <h3 data-aos='fade-left' data-aos-duration='1000'>"We are conducting keyboard classes with our experts" </h3>
            </div>
          </div>
        </div>
        <div className='subjects'>
          <div className='video_container' data-aos='fade-right' data-aos-duration='1000'>
            <video src={vocalVideo} autoPlay muted loop className='guitar_video' />
            <h1 data-aos='fade-down' data-aos-duration='1000'>Vocals Training</h1>
            <div className='short_guitar_text'>

              <h3 data-aos='fade-right' data-aos-duration='1000'>"Conducting vocal and singing classes with marvelous teaching following adjacent roadmap" </h3>
            </div>
          </div>
        </div>
        <div className='subjects'>
          <div className='video_container' data-aos='fade-left' data-aos-duration='1000'>
            <video src={ukuleleVideo} autoPlay muted loop className='guitar_video' />
            <h1 data-aos='fade-down' data-aos-duration='1000'>Learn Ukulele</h1>
            <div className='short_guitar_text'>

              <h3 data-aos='fade-left' data-aos-duration='1000'>"Small in size but great exposure to the music industry for having a great exposure"</h3>
            </div>
          </div>
        </div>
        <div className='subjects'>
          <div className='video_container' data-aos='fade-right' data-aos-duration='1000'>
            <video src={violinVideo} autoPlay muted loop className='guitar_video' />
            <h1 data-aos='fade-down' data-aos-duration='1000'>Learn Violin</h1>
            <div className='short_guitar_text'>

              <h3 data-aos='fade-up' data-aos-duration='1000'>"Learn to play violin with our incredible experinced Teacher"</h3>
            </div>
          </div>
        </div>
        <div className='subjects'>
          <div className='video_container' data-aos='fade-left' data-aos-duration='1000'>
            <video src={fluteVideo} autoPlay muted loop className='guitar_video' />
            <h1 data-aos='fade-down' data-aos-duration='1000'>Learn Flute</h1>
            <div className='short_guitar_text'>

              <h3 data-aos='fade-up' data-aos-duration='1000'>"Learn Flute with our incredible teaching and curriculam"</h3>
            </div>
          </div>
        </div>
        <div className='subjects'>
          <div className='video_container' data-aos='fade-right' data-aos-duration='1000'>
            <video src={acousticVideo} autoPlay muted loop className='guitar_video' />
            <h1 data-aos='fade-down' data-aos-duration='1000'>Learn Acoustic Guitar</h1>
            <div className='short_guitar_text'>

              <h3 data-aos='fade-up' data-aos-duration='1000'>"Learn to play acoustic Guitar with our proper teaching and guidance"</h3>
            </div>
          </div>
        </div>



        {/* section for the facalties  */}
        <div className='faculty_section'>
          <div className='faculty_section_heading' data-aos='fade-down' data-aos-duration='1500'>
            <h1>Our Faculties</h1>
          </div>
          <div className='subject_heading'  >
            <h1 data-aos='fade-up' data-aos-duration='1000'>Guitar, Ukuele & Bass</h1>
            <div className='about_teacher'>
              <div className='teacher_image' data-aos='fade-left' data-aos-duration='1000'>
                <img src={rahulPic} alt='rahul_guitar' />
                <h2>Rahul Saha(founder)</h2>
                <h3>Guitar, Ukelele & Bass </h3>
              </div>
              <div className='about_rahul' data-aos='fade-right' data-aos-duration='1000'>
                <h2 className='bio_heading'>About Rahul</h2>
                <p data-aos='fade-right' data-aos-duration='1000'>Rahul Saha is a devotional Musician and the founder of NAA - Natagarh Academty Of Arts.
                  As an aspiring musician, he has a great area of expertise in Guitar, Bass guitar
                  and Ukelele.He has been playing since last couple of years and appointed as Acoustic guitar tutor
                  for Northen School Of Music last 3+ years 2020-2023, having a great expertise in international stave notation reading and
                  writing and groomed many students for  Trinity grade exams which is conducted by Trinity College London, UK.
                  Along with that,Rahul has performed in many shows, attended many bootcamps, his previous records as a teacher has
                  contributed a significant success to the instituition for handling and teaching both national and international students.

                </p>
              </div>
            </div>
          </div>



          {/* for drums and purcussion - 1 premjit dutta  */}



          <div className='subject_heading'>
            <h1 data-aos='fade-up' data-aos-duration='1000'>Drums & Percussion</h1>
            <div className='about_teacher'>
              <div className='teacher_image' data-aos='fade-right' data-aos-duration='1000'>
                <img src={premjitPic} alt='rahul_guitar' />
                <h2>Premjit Dutta</h2>
                <h3>Drums & Percussion</h3>
              </div>
              <div className='about_rahul' data-aos='fade-left' data-aos-duration='1000'>
                <h2 className='bio_heading'>About Premjit</h2>
                <p>Premjit started his musical journey at the early age of 5, when he started learning
                  Tabla and is a Sangeet ‘Visharad’. He is also a disciple of veteran Conguero Monojit
                  ’Kochu’ Datta and has extensively learnt Latin percussions from him. He has also
                  completed his formal grades for Percussions and Theory of Music from Trinity College,
                  London. During his college days he started performing with his Mod-Alt. Band CAMOUFLAGE. Later in 2008 he was asked by his Guru Monojit Datta to join his Latin‐Jazz band LOS AMIGOS and eventually with them he performed across the country
                  and abroad at distinguished festivals and venues including
                  the prestigious Java Jazz Fest in 2011.
                  He is currently recording and touring with experimental
                  Jazz-Fusion act THEBODHISATTWA TRIO with whom he has recorded 3 critically acclaimed albums
                  and has toured extensively across Europe and Asia. He has also been a part of Latin-Jazz
                  outfit THE LATINATION and with them he has toured across the sub-continent. He is also one
                  of the founder members of the popular blues outfit
                  BIG FAMILY with whom he plays regularly in
                  the circuit. He was one of the top ten international talents
                  and the only Indian musician invited by the Music Board Berlin
                  and Pop-Kultur Festival, to participate in their festival in 2016.
                  He has been teaching at The Calcutta School of Music and C4 for more than a decade.
                  for more information <a href='https://zildjian.com/premjit-dutta.html'
                    style={{
                      color: 'pink',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }} target='react\jsx-no-target-blank'> Click here</a>
                </p>
              </div>
            </div>
          </div>

          {/* for mrinmoy  */}

          <div className='about_teacher' style={{ paddingTop: '6rem' }}>
            <div className='teacher_image' data-aos='fade-right' data-aos-duration='1000'>
              <img src={mrinmoyPic} alt='rahul_guitar' />
              <h2>Mrinmoy Ghosh</h2>
              <h3>Drums & Percussion</h3>
            </div>
            <div className='about_rahul' data-aos='fade-left' data-aos-duration='1000'>
              <h2 className='bio_heading'>About Mrinmoy</h2>
              <p> Mrinmoy Ghosh, also known as Rupom, has been an avid musician since childhood. At the incredibly young age of 5, he marked the start of his journey in the world of music. The first instrument he embraced was Tabla. He has been a disciple of “Bongo Gourav” awardee, Pandit Sanjoy Adhikary. His work and dedication to the art of classical
                music are quite commendable.
                Over the years he gradually tilted towards the music of today’s date and percussion being his area of expertise, he started learning Drums under the guidance of Mr. Dhruba Ghatak. He completed his training till Trinity grade 3 and is now pursuing further at Calcutta School of Music under renowned Mr. Premjit Dutta.
                Rupom has been an outstanding percussionist and a marvelous
                player of Tabla and Drums. Apart from percussion, he also
                has his touch in playing Acoustic Guitar. In his musical journey,
                he was the drummer of a classical fusion band known as ‘Devoti’, with whom
                he was Band Champion at IIHM Ringolo. He is the drummer of an indie alternative rock band,
                ‘Sarphire’ from Kolkata. He has been involved in a lot of recordings and live shows with both.
              </p>
            </div>
          </div>


          {/* for Payel vocalist*/}

          <div className='subject_heading'>
            <h1 data-aos='fade-up' data-aos-duration='1000'>Vocal & Singing</h1>
            <div className='about_teacher'>
              <div className='teacher_image' data-aos='fade-right' data-aos-duration='1000'>
                <img src={payelPic} alt='rahul_guitar' />
                <h2>Payel Sengupta</h2>
                <h3>Vocal & Singing</h3>
              </div>
              <div className='about_rahul' data-aos='fade-left' data-aos-duration='1000'>
                <h2 className='bio_heading'>About Payel</h2>
                <p>Payel Sengupta is an accomplished musician and music teacher with a rich background in Indian classical and folk music. She was born and raised in Kolkata, India, in a family of music enthusiasts. Her passion for music was evident from a young age, and she pursued it relentlessly through her education and career.

                  Payel completed her Bachelor's and Master's degrees in Vocal Music from Rabindra Bharati University in Kolkata. She was a bright student and excelled in both theory and practical aspects of music. During her college years, Payel also participated in several music competitions and won several prizes, including the Rajya Sangeet Academy Championship for Kheyal, Bengali Song & Rabindra Sangeet in 2001.

                  After completing her education, Payel started her career as a music teacher at DAV Public School. She joined the school in April 2012 and worked there for ten years until July 2022. As a music teacher, Payel was responsible for teaching Indian classical and folk music to students from different age groups. She was highly regarded by her colleagues and students for her dedication, patience, and innovative teaching methods.

                  Apart from her teaching career, Payel also had an active performing career as a vocalist. She performed regularly in concerts and music festivals across India, showcasing her mastery of Indian classical and folk music. Payel was known for her soulful renditions of Rabindra Sangeet, Nazrul Geeti, and other Bengali songs. She also had a keen interest in folk music and had received a scholarship from Rabindra Bharati University for her research in the field.

                  Despite her busy schedule, Payel always found time for her family and friends. She enjoyed listening to music, singing, and chatting with her loved ones in her free time.

                  Overall, Payel Sengupta is a talented musician and a dedicated teacher who has made significant contributions to the field of Indian classical, folk music, Bengali Songs, Semi Classical, Rabindra Sangeet and Modern Music( Hindi and Bengali). Her passion for music, positive attitude, and leadership qualities have earned her the respect and admiration of her colleagues and students alike.
                </p>
              </div>
            </div>
          </div>



          {/* for sagnik    */}

          <div className='subject_heading'>
            <h1 data-aos='fade-up' data-aos-duration='1000'>Violin & Flute</h1>
            <div className='about_teacher'>
              <div className='teacher_image' data-aos='fade-right' data-aos-duration='1000'>
                <img src={sagnikPic} alt='rahul_guitar' />
                <h2>Sagnik Chakraborty</h2>
                <h3> Violin & Flute </h3>
              </div>
              <div className='about_rahul' data-aos='fade-left' data-aos-duration='1000'>
                <h2 className='bio_heading'>About Sagnik</h2>
                <p>
                Sagnik Chakraborty a guy from engineering college who had a intense passion for music.
                He started following his passion at the age of 19. The first instrument he played was
                violin then slowly his passion started to get in another instrument called the flute.
                 For the last six years Sagnik Chakraborty
                 is in the music growing his
                  passion to the next level and
                  working with the main stream bands.
                </p>
              </div>
            </div>
          </div>





     {/* for debu da  */}



     <div className='subject_heading'>
            <h1 data-aos='fade-up' data-aos-duration='1000'>Keyboard</h1>
            <div className='about_teacher'>
              <div className='teacher_image' data-aos='fade-right' data-aos-duration='1000'>
                <img src={debuPic} alt='rahul_guitar' />
                <h2>Shibabrata Biswas</h2>
                <h3> Keyboard </h3>
              </div>
              <div className='about_rahul' data-aos='fade-left' data-aos-duration='1000'>
                <h2 className='bio_heading'>About Shibabrata</h2>
                <p>
                Shibabrata Biswas he is an exceptional musician, music director, composer, lyricist.
                 started his musical journey  in a young age when he was in school. Acquired knowledge
                  and unlocked skill with various of mentors and teachers. To find better opportunities
                   he started learning the keyboard with Calcutta School of Music to acquire more knowledge.
                    He worked with many famous music directors and well known musicians such as Anupam Roy,
                    Uppal, Anindya Prosen.  Now he is playing the keyboard with chandrabindu famous musical
                     band of West Bengal Kolkata. He has been rewarded with many national and state level
                      rewards,such as Filmfare Award 2022 Prem Tem theme song.
                 He wrote and composed many famous songs such as "Takey Olpo Kachey Dakchi".
                </p>
              </div>
            </div>
          </div>











        </div>


        <GotoTop />

        <div className ='footer_section'>
             <div className = 'logo_for_footer' data-aos='fade-left' data-aos-duration='1000' >
                <img src = {footerLogo} alt= 'footer_logo'/>
             </div>
             <div className ='copyright' data-aos='fade-right' data-aos-duration='1000'  >
             <p >© All Rights Reserved 2023, Natagarh Academy Of Arts</p>
             </div>
            </div>




      </div>


    </>
  )
}

export default Services;