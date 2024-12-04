"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

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

  return (
    <div ref={containerRef} className="min-h-screen overflow-y-auto flex justify-center items-center">
      {/* Animated Container */}
      <motion.div
        className="bg-[#4a9ad2] mx-2 mt-4 md:mx-10 lg:mx-12 flex flex-col md:flex-row items-center p-6 md:p-8 lg:p-12 rounded-lg w-full max-w-6xl"
        style={{ opacity, scale }}
        transition={{ ease: "circOut", duration: 1.2 }}
      >
        {/* Left Side Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0"
          style={{ y: translateY, opacity }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
        >
          <Image
            src="/pathwayss.png"
            alt="Career Image"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          className="w-full md:w-1/2 md:pl-6 text-white text-center md:text-left"
          style={{ opacity, y: translateY }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
          whileInView={{
            opacity: [0, 1],
            x: [-100, 0],
            transition: { duration: 1 },
          }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-black font-bold font-montserrat mb-4">
            Career Pathways
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-montserrat mt-4 lg:mt-6">
            At Marketiq Junction, gain hands-on experience with real-world projects, plus dedicated placement
            support. We help you build technical skills, prepare for interviews, and land your dream job. Unlock your
            full potential and succeed with us!
          </p>

          {/* Animated Button */}
          <Link
            href={`https://wa.me/919920892689?text=Hi%20there!%20I%20would%20like%20to%20learn%20more%20about%20your%20courses.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="mt-6 md:mt-8 bg-[#50c3c6] text-black font-semibold font-montserrat px-6 py-3 rounded-3xl hover:bg-gray-200"
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
              We would Love to Hear From You
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Career;