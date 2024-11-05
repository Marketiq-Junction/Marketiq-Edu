import React from 'react';
import Image from 'next/image';

const Vision = () => {
  return (
    <div className="flex flex-col bg-[#50c3c6] md:flex-row items-center p-8 bg-white mt-4 mb-4">
      {/* Left Section (Text) */}
      <div className="flex-1 md:pr-8 text-center md:text-left ml-12 -mt-20">
        <h2 className="text-5xl font-semibold">Vision</h2>
        <p className="mt-4 text-lg mt-8">
        Our vision is to become a leading educational platform that empowers aspiring tech talent across India. By fostering a supportive learning environment, partnering with top NAAC A++ universities, and leveraging MarketIQ Junction’s industry expertise, we aim to shape a generation of skilled professionals who drive innovation, fuel economic growth, and contribute meaningfully to the global tech ecosystem.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 mt-8 md:mt-0">
        <Image
          src="/path/to/your/image.jpg" // Replace with your image path
          alt="Vision"
          width={500} // Set the width as per your design needs
          height={500} // Set the height as per your design needs
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Vision;
