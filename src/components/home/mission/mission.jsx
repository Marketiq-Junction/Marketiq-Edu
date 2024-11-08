import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 mt-8 bg-white">
      <div className="flex-1 -mt-16 md:mb-0">
        <Image
          src="/mission.avif"
          alt="Mission"
          width={500}
          height={500}
          className="rounded-xl mb-8 mt-16"
        />
      </div>
      <div className="flex-1 md:pl-8 text-center md:text-right">
        <h2 className="text-5xl font-semibold font-syne mr-0 md:mr-12 -mt-4 md:-mt-16">
          Mission
        </h2>
        <p className="mt-4 text-lg font-montserrat mr-0 md:mr-12">
          Our mission at Education.MarketJunction is to bridge the gap between
          education and employment by providing students with industry-relevant
          skills, practical expertise, and the confidence needed to excel in the
          tech industry. We are dedicated to nurturing future-ready
          professionals through high-quality training, hands-on projects, and
          robust placement support, ensuring that every student has the tools to
          succeed in a rapidly evolving digital world.
        </p>
        {/* Learn More Button with Link */}
        <Link href="/about-us">
          <button className="mt-6 ml-12 mb-8 bg-[#50c3c6] font-semibold font-montserrat text-black px-6 py-3 hover:bg-[#3ca0a0] transition mr-12">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Mission;