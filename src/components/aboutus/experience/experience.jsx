"use client";
import React from 'react';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      {/* Header Text Above the Blue Div */}
      <h2 className="text-5xl font-semibold font-publicSans text-center text-gray-800 mb-6">Learning Experience</h2>
      
      {/* Blue Div Container */}
      <div className="max-w-full mx-4 md:mx-8 bg-[#4b9ed2] rounded-tl-none rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col p-6 md:p-8">
        
        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-20 mt-8 mb-4">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-[52%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[16%] text-center transition-colors duration-300 hover:bg-blue-200">
            <div className="w-full h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
              <Image
                src="/6MONTHS.png" // Replace with the correct image path for Card 1
                alt="6-Month Course"
                layout="fill"
                objectFit="cover"
                className="rounded-tr-[2rem] rounded-bl-md"
              />
            </div>
            <h3 className="text-blue-500 mt-4 text-lg font-semibold">
            Personalized Mentorship
            </h3>
            <p className="text-gray-600 mt-2">
            Guidance and support from industry professionals at <br /> every step.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xl:w-[16%] text-center transition-colors duration-300 hover:bg-blue-200">
            <div className="w-full h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
              <Image
                src="/1YEAR.png" // Replace with the correct image path for Card 2
                alt="1-Year Course"
                layout="fill"
                objectFit="cover"
                className="rounded-tr-[2rem] rounded-bl-md"
              />
            </div>
            <h3 className="text-blue-500 mt-4 text-lg font-semibold">
            Real-World <br />Projects
            </h3>
            <p className="text-gray-600 mt-2">
            Hands-on projects that simulate real marketing challenges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xl:w-[16%] text-center transition-colors duration-300 hover:bg-blue-200">
            <div className="w-full h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
              <Image
                src="/2YEARS.png" // Replace with the correct image path for Card 3
                alt="2-Year Course"
                layout="fill"
                objectFit="cover"
                className="rounded-tr-[2rem] rounded-bl-md"
              />
            </div>
            <h3 className="text-blue-500 mt-4 text-lg font-semibold">
            Workshops and Guest Sessions
            </h3>
            <p className="text-gray-600 mt-2">
            Regular seminars led by experts from Marketiq Junction
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xl:w-[16%] text-center transition-colors duration-300 hover:bg-blue-200">
            <div className="w-full h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
              <Image
                src="/13.png" // Replace with the correct image path for Card 4
                alt="3-Year Course"
                layout="fill"
                objectFit="cover"
                className="rounded-tr-[2rem] rounded-bl-md"
              />
            </div>
            <h3 className="text-blue-500 mt-4 text-lg font-semibold">
            Placement <br />Preparation
            </h3>
            <p className="text-gray-600 mt-2">
            Comprehensive career support, including coaching on resumes, interviews, and professional branding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
