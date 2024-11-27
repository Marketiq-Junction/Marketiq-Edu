"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HeroHome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.8 }); // Adjust threshold as
  return (
    <motion.div
      ref={ref}
      className="relative bg-gradient-to-br from-[#4a9bd3] to-[#50c3c6] text-white py-10 md:py-36 px-4 md:px-6 flex justify-center items-center mt-2 mb-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <motion.div
          className="flex-1 mb-8 md:mb-0 md:pr-8 text-center md:text-left z-10 md:-mt-28 md:-ml-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-2xl md:text-3xl font-semibold text-black"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Education.MarketJunction
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-2"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The Smart Stop <br className="hidden md:block" /> for Digital Growth
          </motion.h2>
          <motion.p
            className="mt-4 md:mt-8 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Empowering the Future of Tech Talent
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start mt-6 md:mt-8 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Learn & Grow Button */}
            <Link href="/learn&grow">
              <button className="bg-[#ffffff] text-[#50c3c6] border border-transparent px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-transparent hover:text-white hover:border-white transition z-20">
                Learn & Grow
              </button>
            </Link>
            {/* Learn More Button */}
            <Link
              href={`https://wa.me/919920892689?text=Hi%20there!%20I%20would%20like%20to%20learn%20more%20about%20your%20courses.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent text-white border border-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-white hover:text-[#50c3c6] transition z-20">
                Learn More
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex-1 relative z-10 mt-4 md:mt-0 w-full md:w-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full h-64x md:h-68 lg:h-80 rounded-lg overflow-hidden shadow-xl mb-12 ">
            <Image
              src="/herohome.avif" // Replace with your image path
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="z-0 mt-2 rounded-2xl"
            />
          </div>

          <motion.div
            className="absolute bottom-[-20px] md:bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white p-3 md:p-4 rounded-full shadow-lg z-10"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            {/* Pulsing Circle */}
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-200 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-500">
                100%
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Background */}
      <motion.div
        className="absolute -bottom-6 left-0 w-full overflow-hidden z-0 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg
          className="w-full h-32 md:h-48 lg:h-96"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,128C672,139,768,181,864,197.3C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default HeroHome;
