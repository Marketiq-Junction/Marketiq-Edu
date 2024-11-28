"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

const Career = () => {
  const router = useRouter();
  const containerRef = useRef(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const navigateToContact = () => {
    router.push("/contact-us");
  };

  return (
    <div ref={containerRef} className="min-h-screen overflow-y-auto">
      {/* Animated Container */}
      <motion.div
        className="bg-[#4b93d2] mx-4 mt-4  md:mx-20 flex flex-col md:flex-row items-center p-4 md:p-6 rounded-lg mb-8"
        style={{ opacity, scale }}
        transition={{ ease: "circOut", duration: 1.2 }}
      >
        {/* Left Side Image */}
        <motion.div
          className="w-full md:w-1/2 mb-2 md:mb-0"
          style={{
            y: translateY,
            opacity,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
          
        >
          <Image
            src="/career.jpg"
            alt="Career Image"
            width={500}
            height={200}
            className="rounded-lg mt-12 mb-12"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          className="w-full md:w-1/2 md:pl-6 text-white text-center md:text-left"
          style={{
            opacity,
            y: translateY,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
          whileInView={{
            opacity: [0, 1],
            x: [-100, 0],
            transition: { duration: 1 },
          }}
        >
          <h2 className="text-3xl md:text-5xl text-black font-bold font-montserrat mb-2">
            Career Pathways
          </h2>
          <p className="text-base font-montserrat md:text-lg mt-4 md:mt-8">
          Our courses go beyond theory, offering hands-on experience with real-world projects that mirror industry challenges. Gain the skills and confidence to solve practical problems, just like a professional.
          <br />  <span className="mt-2 block">We dont just teach technical skills — we prepare you for the job market with dedicated placement support. From resume building to mock interviews and soft skills training, we equip you to land your dream job.</span>
<span className="mt-4 block">At Marketiq Junction, we are committed to helping you unlock your full potential and achieve success in your career. Join us and experience the difference!</span>

          </p>

          {/* Animated Button */}
          <motion.button
            onClick={navigateToContact}
            className="mt-6 md:mt-8 bg-[#50c3c6] text-black font-semibold font-montserrat px-4 md:px-6 py-2 md:py-3 rounded-3xl hover:bg-gray-200"
            
            animate={{
              scale: [1, 1.05, 1],
              opacity: [1, 0.9, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            Start Teaching Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Career;
