import React from 'react';
import Image from 'next/image';

const MissionAbout = () => {
  return (
    <div className="flex justify-center md:justify-end items-center h-full bg-white py-10 md:pt-16 md:mb-32 md:mr-12 px-4">
      <div className="w-full max-w-6xl flex justify-center md:justify-end">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold font-montserrat mb-6 md:mb-8 md:ml-20">Our Mission</h1>
          <div className="flex flex-col md:flex-row bg-[#e8f6ff] rounded-2xl shadow-lg p-6 md:p-12 max-w-4xl">
            {/* Text Section */}
            <div className="flex-1 mb-4 md:mb-0 md:pr-8">
              <p className="text-gray-700 mt-4 text-left font-montserrat text-base md:text-xl leading-relaxed">
                Our mission is to empower the next generation of tech professionals by providing accessible, 
                high-quality education that emphasizes job-readiness, practical skills, and lifelong 
                learning. We believe in the potential of every student to succeed and are committed to equipping them with 
                the tools they need for a successful career in the tech industry.
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-shrink-0 w-full md:w-56 h-48 md:h-60 mt-4 md:mt-0 rounded-lg overflow-hidden mx-auto md:mx-0">
              <Image
                src="/mission.avif" // replace with the path to your image
                alt="Mission Image"
                layout="responsive"
                width={224} // Set width for the image in pixels
                height={240} // Set height for the image in pixels
                objectFit="cover" // Ensure the image covers the container
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAbout;
