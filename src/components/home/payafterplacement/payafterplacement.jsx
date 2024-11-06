import React from 'react';
import Image from 'next/image';

const PayAfterPlacement = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-[#4a9bd3] to-[#50c3c6] p-10 text-white mb-8">
      {/* Left Side Image */}
      <div className="w-2/5 rounded-lg overflow-hidden">
        <Image
          src="/path/to/your/image.jpg" // Replace with your image path
          alt="Pay After Placement"
          layout="responsive"
          width={400}
          height={300}
          className="object-cover"
        />
      </div>

      {/* Right Side Texts */}
      <div className="w-3/5 text-left pl-5">
        <h4 className="text-4xl text-black font-bold mb-8 -mt-16">Pay After <br />  Placement</h4>
        <p className="text-base leading-relaxed">
        We’re committed to student success and offer a <br /> pay-after-placement option to remove financial barriers. <br /> With this model, students can focus on their learning <br /> journey and start paying after securing a job.
         <br /> <br /> That’s why we’re proud to offer a pay-after-placement option, <br />designed to eliminate upfront financial burdens and give <br /> students the freedom to focus entirely on their learning journey. <br /> With this model, students can immerse themselves in developing <br />their skills without the worry of immediate fees.
        </p>
      </div>
    </div>
  );
};

export default PayAfterPlacement;
