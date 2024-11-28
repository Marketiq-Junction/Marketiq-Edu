"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import ExploreIcon from "@mui/icons-material/Explore";
import VerifiedIcon from "@mui/icons-material/Verified";

const ChooseUs = () => {
  // Define variants for entrance animations
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const sectionVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Define continuous bounce animation
  const bounceTransition = {
    y: {
      duration: 2,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center gap-8 mt-8 px-4 md:px-16 py-12"
    >
      {/* Left Section - Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        animate={{
          y: [0, -10, 0, 10, 0], // Bouncy motion
        }}
      >
        <div className="relative w-60 h-80 sm:w-72 sm:h-96 lg:w-[500px] lg:h-[700px]">
          <Image
            src="/courses.avif"
            alt="Student Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Right Section - Content */}
      <motion.div
        className="flex-1"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Section Title */}
        <div className="inline-block bg-blue-100 text-blue-600 font-bold px-4 py-2 rounded-full mb-4 uppercase text-sm">
          WHY CHOOSE US
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-left">
          Our Courses are more than just academic programs—they’re{" "}
          <br className="hidden sm:inline" /> your bridge to a successful
          digital marketing career.
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* Card 1 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            animate={{
              y: [0, -5, 0, 5, 0], // Subtle bouncy motion
            }}
          >
            <SchoolIcon
              className="text-blue-600"
              style={{ fontSize: "2rem" }}
            />
            <div>
              <h3 className="font-semibold text-lg">Career-Ready Curriculum</h3>
              <p className="text-gray-600 mt-4">
             <span className="font-bold"> • Course Design: </span> Created by industry professionals.
             <span className="font-bold"> <br />• Job-Ready Skills: </span> Equip students with practical skills from day one.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            animate={{
              y: [0, -5, 0, 5, 0],
            }}
          >
            <GroupIcon className="text-blue-600" style={{ fontSize: "2rem" }} />
            <div>
              <h3 className="font-semibold text-lg">
                100% Placement Assistance
              </h3>
              <p className="text-gray-600 mt-2">
             <span className="font-bold"> • Industry-Designed Courses: </span> Created by professionals to ensure real-world relevance.
              <br /> <span className="font-bold">• Job-Ready Skills:</span> Equip students with the skills needed from day one.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            animate={{
              y: [0, -5, 0, 5, 0],
            }}
          >
            <ExploreIcon
              className="text-blue-600"
              style={{ fontSize: "2rem" }}
            />
            <div>
              <h3 className="font-semibold text-lg">Flexible Learning Paths</h3>
              <p className="text-gray-600 mt-2">
              • Choose from 2-Days Bootcamp, <br />
              • 45-Days fast track course, <br />• 4-Months In-Depth Course programs tailored
                to <br />meet specific career goals.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105 "
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            animate={{
              y: [0, -5, 0, 5, 0],
            }}
          >
            <VerifiedIcon
              className="text-blue-600"
              style={{ fontSize: "2rem" }}
            />
            <div>
              <h3 className="font-semibold text-lg">
                 Certifications
              </h3>
              <p className="text-gray-600">
              • Digital Marketing Specialist Certificate<br/>• Advanced SEO Specialist Certificate<br/>• Social Media Marketing Expert Certificate<br/> • Full Stack Digital Marketer Certificate.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChooseUs;
