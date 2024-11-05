import React from 'react'
import Navbar from '../components/navbar/navbar'
import HeroHome from '../components/home/hero/heroHome'
import Footer from '../components/footer/footer'
import Mission from '@/components/home/mission/mission'
import Vision from '@/components/home/vision/vision'
import Chooseus from '@/components/home/chooseus/Chooseus'
import Courses from '@/components/home/courses/courses'
import PayAfterPlacement from '@/components/payafterplacement/payafterplacement'
import StudentExperience from '@/components/studentexperience/studentexperience'
import Career from '@/components/career/career'
import Join from '@/components/join/join'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroHome/>
      <Mission/>
      <Vision/>
      <Chooseus/>
      <Courses/>
      <PayAfterPlacement/>
      <StudentExperience/>
      <Career/>
      <Join/>
      <Footer/>
      
    </div>
  )
}

export default page;