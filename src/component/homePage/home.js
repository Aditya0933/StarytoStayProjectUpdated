import React from 'react'
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoweAre from './components/WhoweAre';
import Stories from './components/Stories';
import { Outlet } from 'react-router-dom';
import Contact from './components/contact';


function Home() {
  return (
    <div className='w-[100%]'>
      <Hero />
      <WhoweAre/>
      <Services/>
      <Destinations />
      <Stories/>
      <Contact/>
      <Outlet/>
    </div>
  )
}

export default Home
