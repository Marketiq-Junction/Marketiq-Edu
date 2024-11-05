import React from 'react';
import Image from 'next/image';

const Career = () => {
  return (
    <div className="bg-[#4b93d2] mx-20 flex items-center p-6 rounded-lg mb-8">
      {/* Left Side Image */}
      <div className="w-1/2">
        <Image
          src="/path/to/your/image.jpg" // Replace with your image path
          alt="Career Image"
          width={500} // Set the desired width
          height={300} // Set the desired height
          className="rounded-lg"
        />
      </div>

      {/* Right Side Text */}
      <div className="w-1/2 pl-6 text-white">
        <h2 className="text-5xl text-black font-bold mb-2">Career Pathways</h2>
        <p className="text-lg mt-8">
          Graduates from Education.MarketJunction have successfully <br />entered leading tech firms in roles such as Junior Web Developers, <br /> Front-End and Back-End Developers, Full-Stack Developers,<br /> UX/UI Designers, and more. Our close industry connections and dedicated placement process ensure that you step confidently into your career.
        </p>
        
        {/* Button */}
        <button className="mt-8 bg-[#50c3c6] text-black font-semibold px-6 py-3 rounded-3xl hover:bg-gray-200 transition duration-300 mb-8">
          Start Teaching Now
        </button>
      </div>
    </div>
  );
};

export default Career;
