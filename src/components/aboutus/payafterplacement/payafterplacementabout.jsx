import React from 'react';
import Image from 'next/image';

const Payafterplacementabout = () => {
    return (
        <div className="flex flex-col md:flex-row items-center p-4 md:p-8 bg-white mt-4 mb-4 rounded-lg">
          
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
            <Image
              src="/placement.jpg" // Replace with your image path
              alt="Vision"
              width={500} // Set the width as per your design needs
              height={500} // Set the height as per your design needs
              className="rounded-lg"
            />
          </div>

          {/* Right Side Text */}
          <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-semibold font-syne mb-4">
            100% Placement Assistance 
            </h2>
            <p className="text-base mt-8 md:text-2xl text-gray-500 font-publicSans leading-relaxed">
            Our commitment to your success doesn’t end with the course. With our 100% placement assistance, we’re here to support you every step of the way: <br />•	Personalized Career Support: From refining your resume to preparing for interviews, we provide tailored guidance to enhance your job prospects. <br />•	Interview Preparation: Participate in mock interviews and workshops to build confidence and polish your skills. <br />•	Industry Connections: We connect you with a network of companies actively seeking skilled web developers, giving you access to real job opportunities.

            </p>
          </div>
    
        </div>
      );
    };

export default Payafterplacementabout;
