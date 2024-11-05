import React from 'react';
import Image from 'next/image';

const HeroHome = () => {
  return (
    <div className="relative bg-blue-500 text-white py-16 md:py-24 px-6 flex justify-center items-center mt-32 mb-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Education.MarketJunction
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            The Smart Stop for Digital Growth
          </h2>
          <p className="mt-4 text-lg">
            Empowering the Future of Tech Talent
          </p>
          <div className="flex justify-center md:justify-start mt-8 space-x-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
              Get Quote Now
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-500 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/path/to/your/image.jpg" // Replace with your image path
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full">
            Singles <span className="font-bold">18%</span>
          </div>
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-500">73%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-screen h-36 md:h-80" // Use w-screen to make the wave full width
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
