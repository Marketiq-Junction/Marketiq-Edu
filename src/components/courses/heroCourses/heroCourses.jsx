import React from 'react';
import Image from 'next/image';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const HeroCourses = () => {
  return (
    <div className="bg-[#3498db] mx-4 md:mx-16 rounded-2xl p-4 md:p-16 flex flex-col md:flex-row items-center justify-between text-white mt-8">
      {/* Left Section - Text */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">
          Grow up your skills by online courses with <br />
          <span className="text-white block mt-2 md:mt-4">Edu.Marketiq Junction</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-6 md:mt-12">
          <button className="bg-white text-black px-4 md:px-6 py-2 rounded-full font-semibold">
            Get Started
          </button>
          <button className="bg-transparent border-2 justify-center border-black text-black px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition flex items-center gap-2">
            Learn More
            <PlayCircleOutlineIcon />
          </button>
        </div>
      </div>
      
      {/* Right Section - Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
        <div className="relative w-64 h-44 md:w-80 md:h-80">
          <Image
            src="/herocourses.avif" // replace with the actual image path
            alt="Student Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCourses;
