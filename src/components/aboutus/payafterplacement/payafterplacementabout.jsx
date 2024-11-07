import React from 'react'
import Image from 'next/image';

const Payafterplacementabout = () => {
    return (
        <div className="flex flex-col bg-[#50c3c6] md:flex-row items-center p-8 bg-white mt-4 mb-4">
          
          
          
          <div className="flex-1 mt-8 md:mt-0">
            <Image
              src="/" // Replace with your image path
              alt="Vision"
              width={500} // Set the width as per your design needs
              height={500} // Set the height as per your design needs
              className="rounded-lg"
            />
          </div>

          <div className="flex-1 md:pr-8 text-center md:text-left ml-12 -mt-20">
            <h2 className="text-5xl font-semibold font-syne">Pay After Placement</h2>
            <p className="mt-4 text-xl text-gray-500 font-publicSans mt-12">
            We’re committed to student success and offer <br /> a pay-after-placement option to remove financial barriers. <br /> With this model, students can focus on their learning <br />journey and start paying after securing a job
            </p>
          </div>
    
        </div>
      );
    };

export default Payafterplacementabout;