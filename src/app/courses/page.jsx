import Offer from '@/components/aboutus/offer/offer';
import ChooseUs from '@/components/courses/chooseus/chooseus';
import Enroll from '@/components/courses/enroll/enroll';
import HeroCourses from '@/components/courses/heroCourses/heroCourses';
import Footer from '@/components/footer/footer';
import Courses from '@/components/home/courses/courses';
import Join from '@/components/join/join';
import Navbar from '@/components/navbar/navbar';
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <HeroCourses/>
        <ChooseUs/>
        <Courses/>
        <Offer/>
        <Enroll/>
        <Join/>
        <Footer/>

    </div>
  )
}

export default page;