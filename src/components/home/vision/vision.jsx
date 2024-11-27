import React from 'react';
import Image from 'next/image';

const Vision = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 mt-4 mb-4">
      {/* Left Section (Text) */}
      <div className="flex-1 md:pr-8 text-center md:text-left md:ml-12 mt-4 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-semibold font-syne">Vision</h2>
        <p className="mt-4 md:mt-8 font-montserrat text-base md:text-lg">
          Our vision is to become a leading educational platform that empowers aspiring tech talent across India. By fostering a supportive learning environment, partnering with top NAAC A++ universities, and leveraging MarketIQ Junction’s industry expertise, we aim to shape a generation of skilled professionals who drive innovation, fuel economic growth, and contribute meaningfully to the global tech ecosystem.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 mt-6 md:mt-0 flex justify-center">
        <Image
          src="/vision.jpg" // Replace with your image path
          alt="Vision"
          width={500} // Adjusted width for better responsiveness
          height={500} // Adjusted height for better responsiveness
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Vision;
