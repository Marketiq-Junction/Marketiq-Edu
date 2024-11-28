"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Mission = () => {
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
    <div className="flex flex-col md:flex-row items-center p-8 mt-8 bg-white">
      {/* Left Section - Image */}
      <motion.div
        className="flex-1 -mt-8 md:-mt-16 md:mb-0"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: false, amount: 0.5 }} // Adjust viewport settings
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
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: false, amount: 0.5 }} // Adjust viewport settings
      >
        <h2 className="text-4xl md:text-5xl font-semibold font-syne mr-0 md:mr-12 -mt-4 md:-mt-16">
          Mission
        </h2>
        <p className="mt-4 text-base md:text-lg font-montserrat mr-0 md:mr-12">
          Bridge the gap between education and employment.
          <br />
          Equip students with industry-relevant skills and practical expertise.
          <br />
          Build confidence to excel in the tech industry.
          <br />
          Provide high-quality training and hands-on project experience.
          <br />
          Offer robust placement support for career success.
          <br />
          Prepare future-ready professionals for the evolving digital world.{" "}
          <br />{" "}
        </p>
        {/* Learn More Button */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.5 }} // Adjust viewport settings
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
              whileInView={{
                opacity: 1,
                scale: [1, 1.1, 1],
              }}
              viewport={{ once: true, amount: 0.5 }}
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
