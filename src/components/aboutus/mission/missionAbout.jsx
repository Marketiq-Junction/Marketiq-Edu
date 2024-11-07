import React from 'react';

const MissionAbout = () => {
  return (
    <div className="flex justify-end items-center h-full bg-white pt-16 mb-32 mr-12">
      <div className="w-full max-w-6xl flex justify-end">
        <div className="text-center">
          <h1 className="text-4xl text-left font-semibold font-montserrat mb-8 ml-20">Our Mission</h1>
          <div className="flex bg-[#e8f6ff] rounded-2xl shadow-lg p-12 max-w-4xl">
            {/* Text Section */}
            <div className="flex-1 pr-8">
              <p className="text-gray-700 text-left text-xl leading-relaxed">
                Our mission is to empower the next generation of tech professionals by providing accessible, 
                high-quality education <br />that emphasizes job-readiness, practical skills, and lifelong <br />learning. 
                We believe in the potential of every student to <br /> succeed and are committed to equipping them with 
                the tools <br /> they need for a successful career in the tech industry.
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden">
              <img
                src="/path-to-your-image.jpg" // replace with the path to your image
                alt="Mission Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAbout;
