"use client";
import React from 'react'
import Navbar from '../components/navbar/navbar'
import HeroHome from '../components/home/hero/heroHome'
import Footer from '../components/footer/footer'
import Mission from '@/components/home/mission/mission'
// import Vision from '@/components/home/vision/vision'
import Courses from '@/components/home/courses/courses'
import PayAfterPlacement from '@/components/home/payafterplacement/payafterplacement'
import StudentExperience from '@/components/home/studentexperience/studentexperience'
import Career from '@/components/home/career/career'
import Join from '@/components/join/join'
import ChooseUs from '@/components/aboutus/chooseus/chooseUs'
import Review from '@/components/home/reviwes/review'
import Brands from '@/components/home/brands/brands'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroHome/>
      {/* <Vision/> */}
      <Mission/>
      <ChooseUs/>
      {/* <Courses/> */}
      <PayAfterPlacement/>
      <Career/>
      <Review/>
      <Brands/>
      <Join/>
      <Footer/>
      
    </div>
  )
}

export default page;