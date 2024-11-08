import React from 'react';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className="flex flex-col items-center mb-12 px-4 mt-16 md:px-0">
      {/* Header Text Above the Blue Div */}
      <h2 className="text-3xl md:text-5xl font-semibold font-publicSans text-center text-black mb-6">Learning Experience</h2>
      
      {/* Blue Div Container */}
      <div className="max-w-full bg-[#4b9ed2] rounded-tl-none rounded-br-none rounded-tr-[2rem] md:rounded-tr-[4rem] rounded-bl-[2rem] md:rounded-bl-[4rem] p-6 md:p-8">
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-4">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 text-center transition-colors duration-300 hover:bg-blue-200">
            <div className="w-full h-40 md:h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
              <Image
                src="/mentorship.avif" // Replace with the correct image path for Card 1
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
              Guidance and support from industry professionals at every step.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 text-center transition-colors duration-300 hover:bg-blue-200">
            <div className="w-full h-40 md:h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
              <Image
                src="/project.jpg" // Replace with the correct image path for Card 2
                alt="Real-World Projects"
                layout="fill"
                objectFit="cover"
                className="rounded-tr-[2rem] rounded-bl-md"
              />
            </div>
            <h3 className="text-blue-500 mt-4 text-lg font-semibold">
              Real-World Projects
            </h3>
            <p className="text-gray-600 mt-2">
              Hands-on projects that simulate real marketing challenges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 text-center transition-colors duration-300 hover:bg-blue-200">
            <div className="w-full h-40 md:h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
              <Image
                src="/workshop.avif" // Replace with the correct image path for Card 3
                alt="Workshops and Guest Sessions"
                layout="fill"
                objectFit="cover"
                className="rounded-tr-[2rem] rounded-bl-md"
              />
            </div>
            <h3 className="text-blue-500 mt-4 text-lg font-semibold">
              Workshops and Guest Sessions
            </h3>
            <p className="text-gray-600 mt-2">
              Regular seminars led by experts from Marketiq Junction.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-tr-[2rem] rounded-bl-[2rem] p-4 text-center transition-colors duration-300 hover:bg-blue-200">
            <div className="w-full h-40 md:h-52 overflow-hidden rounded-tr-[2rem] rounded-bl-md relative">
              <Image
                src="/placement.jpg" // Replace with the correct image path for Card 4
                alt="Placement Preparation"
                layout="fill"
                objectFit="cover"
                className="rounded-tr-[2rem] rounded-bl-md"
              />
            </div>
            <h3 className="text-blue-500 mt-4 text-lg font-semibold">
              Placement Preparation
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
