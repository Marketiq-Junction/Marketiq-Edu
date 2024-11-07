import React from 'react'

const VisionAbout = () => {
  return (
    <div className="flex justify-start items-center h-full bg-white pt-16 mb-32 -ml-52">
      <div className="w-full max-w-6xl flex justify-end">
        <div className="text-center">
          <h1 className="text-4xl text-right font-semibold font-montserrat mb-8 mr-24 ">Our Vision</h1>
          <div className="flex bg-[#e8f6ff] rounded-2xl shadow-lg p-12 max-w-4xl">
            {/* Text Section */}
           
            {/* Image Section */}
            <div className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden">
              <img
                src="/path-to-your-image.jpg" // replace with the path to your image
                alt="Mission Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 pr-8">
              <p className="text-gray-700 text-left text-xl leading-relaxed ml-12">
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