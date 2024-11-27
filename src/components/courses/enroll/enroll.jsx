"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component
import { motion } from "framer-motion";

const Enroll = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "circInOut" }}
      className="bg-[#e8f6ff] mx-4 md:mx-20 flex flex-col md:flex-row items-center p-6 rounded-lg mb-8 mt-4"
    >
      {/* Left Side Image with motion */}
      <motion.div
        initial={{ x: -200, opacity: 0, rotate: -90 }} // Start with the image off-screen and rotated
        animate={{ x: 0, opacity: 1, rotate: 0 }} // Animate to the center (x: 0) and no rotation
        transition={{ duration: 3, delay: 0.5 }} // Duration and delay of the transition
        className="w-full md:w-1/2 md:ml-8 flex justify-center mb-4 md:mb-0"
      >
        <Image
          src="/5.jpg" // Replace with your image path
          alt="Career Image"
          width={400} // Set the desired width
          height={300} // Set the desired height
          className="rounded-lg"
        />
      </motion.div>

      {/* Right Side Text with motion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="w-full md:w-1/2 md:pl-6 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl text-black font-bold mb-4 md:mb-2 mt-4 md:mt-12">
          Ready to Enroll?
        </h2>
        <p className="text-lg md:text-2xl text-[#6d737a] mt-4 md:mt-12 leading-relaxed">
          Take the first step toward a rewarding digital marketing career with
          Education.Marketiq Junction. Explore our programs, find the one that
          aligns with your goals, and get ready to unlock new opportunities in
          the world of digital marketing!
        </p>

        {/* Button with Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <Link href="/contact-us">
            <button className="mt-16 bg-[#0554f2] text-white font-semibold font-montserrat px-6 py-3 rounded-3xl hover:bg-gray-200 transition duration-300 mb-8">
              Start Teaching Now
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Enroll;
