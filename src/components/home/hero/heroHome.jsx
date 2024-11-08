import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroHome = () => {
  return (
    <div className="relative bg-[#4a9bd3] text-white py-10 md:py-36 px-4 md:px-6 flex justify-center items-center mt-2 mb-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-8 text-center md:text-left z-10 md:-mt-28 md:-ml-16">
          <h1 className="text-2xl md:text-3xl font-semibold text-black">
            Education.MarketJunction
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-2">
            The Smart Stop <br className="hidden md:block" /> for Digital Growth
          </h2>
          <p className="mt-4 md:mt-8 text-lg md:text-xl">
            Empowering the Future of Tech Talent
          </p>
          <div className="flex justify-center md:justify-start mt-6 md:mt-8 space-x-4">
            {/* Get Quote Now Button */}
            <Link href="/contact-us">
              <button className="bg-[#50c3c6] text-white border border-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-white hover:text-[#50c3c6] transition z-20">
                Get Quote Now
              </button>
            </Link>
            {/* Learn More Button */}
            <Link href="/courses">
              <button className="text-black border border-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-white hover:text-[#50c3c6] transition z-20">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative z-10 mt-4 md:mt-0 w-full md:w-auto">
          <div className="relative w-full h-64 md:h-68 lg:h-80 rounded-lg overflow-hidden">
            <Image
              src="/herohome.avif" // Replace with your image path
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="z-0 mt-2 rounded-2xl"
            />
          </div>

          <div className="absolute bottom-[-20px] md:bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white p-3 md:p-4 rounded-full shadow-lg z-10">
            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-500">100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Background */}
      <div className="absolute -bottom-6 left-0 w-full overflow-hidden z-0">
        <svg
          className="w-full h-24 md:h-48 lg:h-96"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,128C672,139,768,181,864,197.3C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroHome;
