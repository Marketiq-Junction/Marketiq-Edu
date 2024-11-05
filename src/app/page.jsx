import React from 'react'
import Navbar from './components/navbar/navbar'
import HeroHome from './components/home/hero/heroHome'
import Footer from './components/footer/footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroHome/>
      <Footer/>
      
    </div>
  )
}

export default page;