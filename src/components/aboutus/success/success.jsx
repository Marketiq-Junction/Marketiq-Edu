import React from 'react';
import Image from 'next/image';

const Success = () => {
    return (
        <div className="bg-[#4b93d2] mx-20 flex items-center p-6 rounded-lg mb-8 mt-16">
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
            <h2 className="text-5xl text-black font-bold mb-2">Join Us on Your <br />Path to Success</h2>
            <p className="text-lg mt-8">
            Whether you’re just beginning your journey or looking to advance your skills, Education.MarketJunction is here to support you every step of the way. Join us and become part of a community that’s committed to your success, from learning to landing your first job and beyond. Together, let’s shape your future and unlock endless possibilities in the world of tech.
            </p>
            
            
          </div>
        </div>
      );
    };

export default Success;