"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% of the component is in view

  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <div
      ref={ref} // Attach ref for useInView hook
      className="flex flex-col md:flex-row items-center p-8 mt-8 bg-white"
    >
      {/* Left Section - Image */}
      <motion.div
        className="flex-1 -mt-8 md:-mt-16 md:mb-0"
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger based on isInView
      >
        <Image
          src="/mission.avif"
          alt="Mission"
          width={500}
          height={500}
          className="rounded-xl mb-8 mt-8"
        />
      </motion.div>

      {/* Right Section - Content */}
      <motion.div
        className="flex-1 md:pl-8 text-center md:text-right"
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger based on isInView
      >
        <h2 className="text-4xl md:text-5xl font-semibold font-syne mr-0 md:mr-12 -mt-4 md:-mt-16">
          Mission
        </h2>
        <p className="mt-4 text-base md:text-lg font-montserrat mr-0 md:mr-12">
          Our mission at Education.MarketJunction is to bridge the gap between
          education and employment by providing students with industry-relevant
          skills, practical expertise, and the confidence needed to excel in the
          tech industry. We are dedicated to nurturing future-ready
          professionals through high-quality training, hands-on projects, and
          robust placement support, ensuring that every student has the tools to
          succeed in a rapidly evolving digital world.
        </p>
        {/* Learn More Button */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger based on isInView
          transition={{ delay: 0.6 }}
        >
          <Link
            href={`https://wa.me/919920892689?text=Hi%20there!%20I%20am%20interested%20in%20learning%20more%20about%20your%20mission%20and%20programs.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="mt-6 mb-8 md:mr-12 bg-[#50c3c6] font-semibold font-montserrat text-black px-6 py-3 hover:bg-[#3ca0a0] transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? { opacity: 1, scale: [1, 1.1, 1] }
                  : { opacity: 0, scale: 0 }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mission;
