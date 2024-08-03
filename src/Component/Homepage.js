import React from 'react'
import Navbar from './Navebar'
import Herosection from './Herosection'
import About from './About'
import Service from './Service'
import WharPeopleSay from './WharPeopleSay'
import Market from './Market'
import Footer from './Footer'
function Homepage() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Herosection/>
      <About/>
      <Service/>
      <WharPeopleSay/>
      <Market/>
      <Footer/>
    </div>
  )
}

export default Homepage
