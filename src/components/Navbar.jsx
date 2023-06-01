import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-no-background.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='navbar_wrapper'>
      <div className='logo'>
        <img src={Logo} alt='logo_naa' />
      </div>
      <ul className={`nav_menu ${isOpen && 'open'}`} onClick ={()=> setIsOpen(`open` ? !setIsOpen: true )} >
        <li className='nav-item'>
          <Link to ='/' className='each_item'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to ='/services' className='each_item'>Services</Link>
        </li>
        <li className='nav-item'>
          <Link to ='/about' className='each_item'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to ='/contact' className='each_item'>Contact</Link>
        </li>
      </ul>
      <div className = {`nav_toggler-icon ${isOpen && 'open'}`} onClick= {()=> setIsOpen(!isOpen)} >
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </div>

  )
}

export default Navbar;