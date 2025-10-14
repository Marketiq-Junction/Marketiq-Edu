import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Hire from "@/components/hire/hire/page";
import WhyChooseUs from "@/components/hire/why/page";
import FAQ from "@/components/career/faq/page";
import React from "react";
const HireFromUsPage = () => {
    return (    
    <div className="bg-white">
        <Navbar />
        <Hire />
        <WhyChooseUs />     
        <FAQ />
        <Footer />
    </div>
  );
}   
export default HireFromUsPage;