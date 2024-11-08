import React from 'react';
import Image from 'next/image';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import ExploreIcon from '@mui/icons-material/Explore';
import VerifiedIcon from '@mui/icons-material/Verified';

const ChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mt-8 px-4 md:px-16 py-12">
      {/* Left Section - Image */}
      <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
        <div className="relative w-60 h-80 sm:w-72 sm:h-96 lg:w-[500px] lg:h-[700px]"> {/* Large height for desktop */}
          <Image
            src="/courses.avif" // replace with the actual image path
            alt="Student Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg md:ml-16"
          />
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="flex-1">
        {/* Section Title */}
        <div className="inline-block bg-blue-100 text-blue-600 font-bold px-4 py-2 rounded-full mb-4 uppercase text-sm">
          WHY CHOOSE US
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-left ml-2 md:text-left">
          Our Courses are more than just academic programs—they’re <br className="hidden sm:inline" /> your bridge to a successful digital marketing career.
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105">
            <SchoolIcon className="text-blue-600" style={{ fontSize: '2rem' }} />
            <div>
              <h3 className="font-semibold text-lg">Career-Ready Curriculum</h3>
              <p className="text-gray-600">
                Each course is designed by industry professionals to equip students with job-ready skills from day one.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105">
            <GroupIcon className="text-blue-600" style={{ fontSize: '2rem' }} />
            <div>
              <h3 className="font-semibold text-lg">100% Placement Assistance</h3>
              <p className="text-gray-600">
                Comprehensive placement support, with a pay-after-placement model that ensures financial accessibility for all.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105">
            <ExploreIcon className="text-blue-600" style={{ fontSize: '2rem' }} />
            <div>
              <h3 className="font-semibold text-lg">Flexible Learning Paths</h3>
              <p className="text-gray-600">
                Choose from 6-month, 1-year, 2-year, or 3-year programs tailored to meet specific career goals.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105">
            <VerifiedIcon className="text-blue-600" style={{ fontSize: '2rem' }} />
            <div>
              <h3 className="font-semibold text-lg">Accredited Certifications and Degrees</h3>
              <p className="text-gray-600">
                Courses offer diplomas, advanced diplomas, and degrees in partnership with top NAAC A++ universities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
