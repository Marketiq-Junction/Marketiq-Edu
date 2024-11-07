import React from 'react'
import Image from 'next/image';

const Heroabout = () => {
    return (
        
            <div className="relative bg-[#4a9bd3] text-white py-16 md:py-36 px-4 md:px-6 flex justify-center items-center mt-2 mb-6">
              <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
                {/* Left Section */}
                <div className="flex-1 mb-8 md:mb-0 md:pr-8 text-center md:text-left z-10 md:-mt-4 md:-ml-16 ">
                  <h1 className="text-2xl md:text-3xl font-semibold  text-[#ffd836]">
                  Welcome to Education.MarketJunction!
                  </h1>
                  <h2 className="text-2xl text-black md:text-3xl lg:text-4xl font-semibold font-montserrat mt-6 ">
                  Where education meets <span className="mt-2 block">innovation,  and students</span> <span className="mt-2 block">transform into industry-ready</span> <span className="mt-2 block">tech professionals.</span> 
                  </h2>
                  
                  <div className="flex justify-center md:justify-start mt-8 md:mt-16 space-x-6">
                    {/* Get Quote Now Button */}
                    <button className="bg-[#50c3c6] text-white px-8 font-montserrat py-2 md:px-8 md:py-3 rounded-md hover:bg-white hover:text-[#50c3c6] transition z-20">
                      Register
                    </button>
                    
                  </div>
                </div>
        
                {/* Right Section */}
                <div className="flex-1 relative z-10 mt-8 md:mt-0">
                  <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/" // Replace with your image path
                      alt="Hero Image"
                      layout="fill"
                      objectFit="cover"
                      className="z-0"
                    />
                  </div>
        
                  
                </div>
              </div>
             
    </div>
      );
    };

export default Heroabout;