import React from 'react';
import Image from 'next/image';

const Success = () => {
    return (
        <div className="bg-[#4b93d2] flex flex-col md:flex-row items-center p-4 md:p-6 rounded-lg mb-8 mt-16 mx-4 md:mx-20">
          {/* Left Side Image */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Image
              src="/5.jpg" // Replace with your image path
              alt="Career Image"
              width={500} // Set the desired width
              height={300} // Set the desired height
              className="rounded-lg w-full h-auto"
            />
          </div>
    
          {/* Right Side Text */}
          <div className="w-full md:ml-16 md:w-1/2 md:pl-6 text-white text-center md:text-left">
            <h2 className="text-3xl md:text-5xl text-black font-bold font-montserrat mb-4">
              Join Us on Your <br className="hidden md:block" /> Path to Success
            </h2>
            <p className="text-base md:text-lg mt-4 md:mt-8 leading-relaxed">
              Whether you’re just beginning your journey or looking to advance your skills, Education.MarketJunction is here to support
              you every step of the way. Join us and become part of a community that’s committed to your success, from learning to landing
              your first job and beyond. Together, let’s shape your future and unlock endless possibilities in the world of tech.
            </p>
          </div>
        </div>
      );
    };

export default Success;
