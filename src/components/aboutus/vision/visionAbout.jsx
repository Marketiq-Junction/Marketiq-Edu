import React from 'react';
import Image from 'next/image';

const VisionAbout = () => {
  return (
    <div className="flex justify-center md:justify-start items-center h-full bg-white py-10 md:pt-16 md:mb-32 md:-ml-52 px-4">
      <div className="w-full max-w-6xl flex justify-center md:justify-end">
        <div className="text-center md:text-right">
          <h1 className="text-3xl md:text-4xl font-semibold font-montserrat mb-6 md:mb-8 md:mr-24">
            Our Vision
          </h1>
          <div className="flex flex-col md:flex-row bg-[#e8f6ff] rounded-2xl shadow-lg p-6 md:p-12 max-w-4xl">
            {/* Image Section */}
            <div className="flex-shrink-0 mb-6 md:mb-0 w-full md:w-56 h-56  rounded-lg overflow-hidden mx-auto md:mx-0">
              <Image
                src="/vision.jpg" // replace with the path to your image
                alt="Vision Image"
                layout="responsive"
                width={250} // set width in pixels for responsive layout
                height={300} // set height in pixels for responsive layout
                objectFit="cover"
                className="rounded-lg mt-8"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 md:pl-8">
              <p className="text-gray-700 text-left text-base md:text-xl font-montserrat leading-relaxed md:ml-12">
                We envision Education.MarketJunction as a leading educational platform that shapes future tech talent across India. By fostering a supportive, innovation-driven learning environment and leveraging MarketIQ Junction’s industry connections, we aim to build a generation of skilled professionals who are ready to contribute to the global digital economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAbout;
