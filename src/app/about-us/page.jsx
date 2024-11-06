import Heroabout from '@/components/aboutus/heroAbout/heroabout'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Heroabout/>    
        <Footer/>
    </div>
  )
}

export default page
