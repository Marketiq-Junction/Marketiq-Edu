import React from 'react';
import Image from 'next/image';

const PayAfterPlacement = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#4a9bd3] to-[#50c3c6] p-6 md:p-10 text-white mb-8">
      {/* Left Side Image */}
      <div className="w-full md:w-2/5 rounded-lg overflow-hidden mb-6 md:mb-0">
        <Image
          src="/placement.jpg" // Replace with your image path
          alt="Pay After Placement"
          layout="responsive"
          width={400}
          height={300}
          className="object-cover"
        />
      </div>

      {/* Right Side Texts */}
      <div className="w-full md:w-3/5 md:ml-16 text-left">
        <h4 className="text-3xl md:text-5xl text-black font-bold font-montserrat mb-4 md:mb-8">
        	100% Placement <br className="hidden md:block" /> Assistance
        </h4>
        <p className="text-sm md:text-xl leading-relaxed">
          We’re committed to student success and offer a Dedicated placement support until you secure a position in the industry.
          With this model, students can focus on their learning journey and start  securing a job.
          <br /> <br />
          That’s why we’re proud to offer a 100% Placement
          Assistance  designed to give students the freedom to focus entirely on their learning journey. With this model, students can
          immerse themselves in developing their skills without the worry of placement.
        </p>
      </div>
    </div>
  );
};

export default PayAfterPlacement;
