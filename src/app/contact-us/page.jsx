"use client";
import ContactPage from '@/components/contactus/contact/contact';
import Databanner from '@/components/contactus/datas/databanner';
import Getintouch from '@/components/contactus/getintouch/getintouch';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <ContactPage/>
        <Databanner/>
        <Getintouch/>
        <Footer/>

    </div>
  )
}

export default page;