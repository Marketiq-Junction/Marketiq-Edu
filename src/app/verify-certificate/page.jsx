import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import VerifyCertificate from '@/components/Verify/VerifyCertificate'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <VerifyCertificate/>
        <Footer/>
    </div>
  )
}

export default page