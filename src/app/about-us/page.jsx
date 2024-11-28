import ChooseUs from '@/components/aboutus/chooseus/chooseUs'
import Experience from '@/components/aboutus/experience/experience'
import Heroabout from '@/components/aboutus/heroAbout/heroabout'
import MissionAbout from '@/components/aboutus/mission/missionAbout'
import Offer from '@/components/aboutus/offer/offer'
import Payafterplacementabout from '@/components/aboutus/payafterplacement/payafterplacementabout'
import Success from '@/components/aboutus/success/success'
import VisionAbout from '@/components/aboutus/vision/visionAbout'
import Footer from '@/components/footer/footer'
import Join from '@/components/join/join'
import Navbar from '@/components/navbar/navbar'
import React from 'react'


import TextFlagCursor from '@/components/cursorfollow/TextFlagCursor'


const page = () => {
  return (
    <div>
        {/* <TextFlagCursor/>   */}
        <Navbar/>
        <Heroabout/>
        <MissionAbout/>  
        <VisionAbout/> 
        <ChooseUs/>
        <Success/>
        <Offer/>
        <Payafterplacementabout/>
        <Experience/>
        <Join/>
        <Footer/>
    </div>
  )
}

export default page


