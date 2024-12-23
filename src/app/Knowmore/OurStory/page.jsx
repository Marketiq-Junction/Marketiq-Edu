import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const OurStory = () => {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">Our Story</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to <strong>Education.MarketiqJunction</strong>, where our
          journey began in 2011. Over the years, we have been committed to
          delivering high-quality education and career guidance to students from
          diverse backgrounds.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Our mission is to create opportunities for students by offering
          comprehensive learning programs, skill-building initiatives, and
          placement assistance. At Marketiq Junction, we believe that education
          is not just about acquiring knowledge but also about empowering
          individuals to reach their full potential.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Join us as we continue to inspire and nurture students on their path
          to success.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default OurStory;
