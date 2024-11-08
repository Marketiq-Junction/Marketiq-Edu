"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Career = () => {
  const router = useRouter();

  const navigateToContact = () => {
    router.push('/contact-us'); // Programmatically navigate to the contact page
  };

  return (
    <div className="bg-[#4b93d2] mx-4 mt-20 md:mx-20 flex flex-col md:flex-row items-center p-4 md:p-6 rounded-lg mb-8">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <Image
          src="/career.jpg" // Replace with your image path
          alt="Career Image"
          width={500} // Set the desired width
          height={300} // Set the desired height
          className="rounded-lg"
        />
      </div>

      {/* Right Side Text */}
      <div className="w-full md:w-1/2 md:pl-6 text-white text-center md:text-left">
        <h2 className="text-3xl md:text-5xl text-black font-bold font-montserrat mb-2">
          Career Pathways
        </h2>
        <p className="text-base font-montserrat md:text-lg mt-4 md:mt-8">
          Graduates from Education.MarketJunction have successfully entered leading tech firms in roles such as Junior Web Developers, Front-End and Back-End Developers, Full-Stack Developers, UX/UI Designers, and more. Our close industry connections and dedicated placement process ensure that you step confidently into your career.
        </p>

        {/* Button to navigate */}
        <button
          onClick={navigateToContact}
          className="mt-6 md:mt-8 bg-[#50c3c6] text-black font-semibold font-montserrat px-4 md:px-6 py-2 md:py-3 rounded-3xl hover:bg-gray-200 transition duration-300"
        >
          Start Teaching Now
        </button>
      </div>
    </div>
  );
};

export default Career;
