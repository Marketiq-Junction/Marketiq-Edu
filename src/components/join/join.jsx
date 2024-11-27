"use client"
import React from 'react';
import { motion,useScroll} from 'framer-motion'

const Join = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div 
    style={{ scaleX: scrollYProgress }}
    initial={{opacity:0.6,scale:0.4}}
    animate={{opacity:1,scale:1}}
    transition={{duration:3,ease:"backOut"}}
    className="flex justify-center items-start bg-white py-10 px-4 sm:px-8 md:py-16 md:mb-32">
      <div className="text-center max-w-screen-lg px-2 md:px-0">
        <h1 className="text-2xl md:text-5xl font-semibold font-syne mb-6">
          Join Education.MarketJunction
        </h1>
        <p className="text-base md:text-2xl font-montserrat leading-relaxed mt-8">
          Are you ready to launch your career in web development
          <br className="block md:hidden" /> with an educational partner you can trust?
          <br className="hidden md:block" /> Education.MarketJunction is here to guide you 
          <br className="block md:hidden" /> from enrollment to employment.
          <br className="hidden md:block" /> Explore our programs, gain industry-ready skills,
          <br className="block md:hidden" /> and step into a future of endless possibilities.
        </p>
      </div>
    </motion.div>
  );
};

export default Join;
