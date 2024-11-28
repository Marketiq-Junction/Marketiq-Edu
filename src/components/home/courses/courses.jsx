"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// MUI Icons
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MarketingIcon from "@mui/icons-material/Assessment";

const Courses = () => {
  // Course data with "syllabusLink" and MUI icons
  const courseData = [
    {
      id: 1,
      title: "2-Day Bootcamp",
      icon: <CodeIcon className="text-[4rem] text-[#1976d2]" />, // MUI Icon for course
      extraInfo:
        "Join our 2-day bootcamp to get a quick overview of digital marketing fundamentals. Perfect for beginners to get started!",
      syllabusLink: "/pdf/Bootcamp.pdf",
    },
    {
      id: 2,
      title: "45-Day Fast Track Program",
      icon: <RocketLaunchIcon className="text-[4rem] text-[#388e3c]" />, // MUI Icon for course
      extraInfo:
        "This 45-day program focuses on fast-paced learning with in-depth knowledge and hands-on experience in digital marketing.",
      syllabusLink: "/pdf/45 day.pdf",
    },
    {
      id: 3,
      title: "4-Month Digital Marketing Program",
      icon: <MarketingIcon className="text-[4rem] text-[#d32f2f]" />, // MUI Icon for course
      extraInfo:
        "Our 4-month program offers an extensive curriculum designed to make you a pro in digital marketing. Includes practical assignments and expert guidance.",
      syllabusLink: "/pdf/4 Month.pdf",
    },
  ];

  // Framer Motion animation variants
  const cardVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-10 text-center bg-gradient-to-b from-[#e3f2fd] to-[#f1f8e9]">
      {/* Heading */}
      <h2 className="text-4xl font-bold font-montserrat mb-12 text-gray-800">
        Explore Our Courses & Syllabus
      </h2>

      {/* Course Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-8">
        {courseData.map((course) => (
          <div    //change this div tag to link tag it will conitnue working
            key={course.id}
            href={course.syllabusLink} 
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Prevent security vulnerabilities
          >
            <motion.div
              className="relative bg-white rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-[#e0f7fa] hover:to-[#c8e6c9] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center h-full cursor-pointer"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              animate="animate"
            >
              {/* <motion.div 
              initial={{opacity:0.3,scale:0.4}}
              animate={{opacity:1,scale:1}}
              transition={{duration:0.7,delay:0.3, ease:"backIn"}}
              className="p-8   rounded-t-lg w-full flex justify-center">
                {course.icon}
              </motion.div> */}
              <div className=" p-4 rounded-t-lg w-full flex justify-center mt-8 animate-bounce">
                {course.icon}
              </div>
              {/* Content Section */}
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold font-montserrat text-gray-800">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  {course.extraInfo}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
