import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import CareerJourney from "@/components/career/career/page";
import CurriculumPage from "@/components/career/curriculum/page";
import ToolsTechnologies from "@/components/career/Tools&Technologies/page";
import FAQ from "@/components/career/faq/page";
import React from "react";
const CareerJourneyPage = () => {
  return (
    <div className="bg-white">
        <Navbar />
        <CareerJourney />
        <CurriculumPage />
        <ToolsTechnologies />
        <FAQ />
        <Footer />
    </div>
  );
}       
export default CareerJourneyPage;