import React from 'react';
import './App.css';
import { Navbar, Home, Services, Contact, About,  } from './components';
import { Route, Routes } from 'react-router-dom';




const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>

    </>
  )
}

export default App;