// import { useEffect, useState } from 'react';
import './App.css';
// import UserCard from './Components/UserCard';
import { Route, Routes } from 'react-router-dom';
import User from './Components/User';
import Home from './Components/home';
import About from './Components/About';
import LogIn from './Components/LogIn';
import SignIn from './Components/SignIn';
import Navbar from './Components/Navbar';
import Icc from './Components/Icc';
import Bcci from './Components/Bcci';
// import Design from './Components/design';
// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function App() {

  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/user/:id' element={<User />} />
        <Route path='/About' element={<About />} >
          <Route path='Icc' element={<Icc/>} />
          <Route path='Bcci' element={<Bcci/>}/>
          {/* <Route path='/user/:id' element={<User />} /> */}
          </Route>
         
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/SignIn' element={<SignIn />} />
        {/* <Route path='/design' element={<Design />} /> */}
      </Routes>
      

    </div>

  );
}

export default App;
