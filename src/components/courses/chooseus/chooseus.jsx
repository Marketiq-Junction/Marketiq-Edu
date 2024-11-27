"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import ExploreIcon from "@mui/icons-material/Explore";
import VerifiedIcon from "@mui/icons-material/Verified";

const ChooseUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center gap-8 mt-8 px-4 md:px-16 py-12"
    >
      {/* Left Section - Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-60 h-80 sm:w-72 sm:h-96 lg:w-[500px] lg:h-[700px]">
          <Image
            src="/courses.avif" // Replace with actual image path
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
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <SchoolIcon
              className="text-blue-600"
              style={{ fontSize: "2rem" }}
            />
            <div>
              <h3 className="font-semibold text-lg">Career-Ready Curriculum</h3>
              <p className="text-gray-600">
                Each course is designed by industry professionals to equip
                students with job-ready skills from day one.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <GroupIcon className="text-blue-600" style={{ fontSize: "2rem" }} />
            <div>
              <h3 className="font-semibold text-lg">
                100% Placement Assistance
              </h3>
              <p className="text-gray-600">
                Comprehensive placement support, with a pay-after-placement
                model that ensures financial accessibility for all.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <ExploreIcon
              className="text-blue-600"
              style={{ fontSize: "2rem" }}
            />
            <div>
              <h3 className="font-semibold text-lg">Flexible Learning Paths</h3>
              <p className="text-gray-600">
                Choose from 6-month, 1-year, 2-year, or 3-year programs tailored
                to meet specific career goals.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg flex items-start gap-4 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <VerifiedIcon
              className="text-blue-600"
              style={{ fontSize: "2rem" }}
            />
            <div>
              <h3 className="font-semibold text-lg">
                Accredited Certifications and Degrees
              </h3>
              <p className="text-gray-600">
                Courses offer diplomas, advanced diplomas, and degrees in
                partnership with top NAAC A++ universities.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChooseUs;
