import React from 'react';
import './GotoTop.css';
const GotoTop = () => {

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <div className='top_btn' onClick={goToBtn}>
         <button className = 'to_top' data-aos='fade-left' data-aos-duration='1000'> Back To Top</button>
        </div>
    )
}

export default GotoTop;