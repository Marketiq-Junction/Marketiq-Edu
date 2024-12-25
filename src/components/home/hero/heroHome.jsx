"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useState } from "react";

const HeroHome = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPdfModalOpen, setPdfModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();  // Prevent event from propagating to the parent div
    setModalOpen(false);   // Close the modal
  };

  const openPdfModal = () => setPdfModalOpen(true);
  const closePdfModal = (e) => {
    e.stopPropagation();
    setPdfModalOpen(false);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.8 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap relative bg-gradient-to-br from-[#4a9bd3] to-[#50c3c6] text-white py-10 md:py-36 px-4 md:px-6 flex justify-center items-center mt-2 mb-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <motion.div
          className="flex-1 mb-8 md:mb-0 md:pr-8 text-center md:text-left z-10 md:-mt-12 md:-ml-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-2xl md:text-3xl font-semibold font-syne text-black"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Education.MarketJunction
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-semibold font-montserrat mt-2"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The Smart Stop <br className="hidden md:block" /> for Digital Growth
          </motion.h2>
          <motion.p
            className="mt-4 md:mt-8 text-lg font-syne md:text-xl"
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
            <button
  onClick={() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      // Open in a new tab for mobile devices
      window.open("/brochure/b.pdf", "_blank");
    } else {
      // Open the modal for larger screens
      openPdfModal();
    }
  }}
  className="bg-[#ffffff] text-[#50c3c6] border border-white px-4 py-2 md:px-6 md:py-3 shadow-lg rounded-md hover:bg-transparent hover:text-white hover:border-white transition z-20"
>
  Our Brochure
</button>

            {/* Learn More Button */}
            
              <button
              onClick={openModal}
               className="bg-transparent text-white border border-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-white hover:text-[#50c3c6] transition z-20">
                
                <PlayCircleOutlineIcon />
              </button>
            
            
          </motion.div>
        </motion.div>

        {isPdfModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={closePdfModal}
  >
    <div
      className="relative w-[100%] h-[85%] max-w-3xl bg-white p-2 md:p-6 lg:p-2"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closePdfModal}
        className="absolute top-2 right-2 text-red-500 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        aria-label="Close PDF Modal"
      >
        X
      </button>
      {/* Detect device size */}
      {typeof window !== "undefined" && window.innerWidth <= 768 ? (
        // Open in a new tab for mobile devices
        <p className="text-center text-sm">
          The PDF cannot be viewed directly on mobile.{' '}
          <a
            href="/brochure/b.pdf" // Replace with your actual PDF file link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Click here to view the PDF in a new tab
          </a>
        </p>
      ) : (
        // Embed the PDF for larger devices
        <iframe
          src="/brochure/b.pdf" // Replace with your actual PDF file link
          className="w-full h-[90%] md:h-[80vh] rounded-lg"
          title="PDF Viewer"
        ></iframe>
      )}
    </div>
  </div>
)}


         {/* Modal for Video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 mr-2 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}  // Close the modal when clicking outside of the modal content
        >
          <div
            className="relative w-11/12 md:w-1/2 bg-white rounded-lg p-4"
            onClick={(e) => e.stopPropagation()}  // Prevent the click event from propagating to the outer div
          >
            <button
              onClick={closeModal}
              className="absolute top-1 right-0 text-red-500 bg-white p-4 rounded-full"
            >
              X
            </button>
            <video width="96%" height="auto" controls>
              <source src="/edumj.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>)}

        {/* Right Section */}
        <motion.div
  className="flex-1 relative z-10 mt-12 md:mt-4 md:mt-0 w-full md:w-auto"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <div className="relative w-[85%] h-[300px] md:h-[450px] md:ml-16 aspect-square rounded-lg md:-mt-28  overflow-hidden mb-4">
    <Image
      src="/DigitalGrowth.png" // Your square image path
      alt="Hero Image"
      layout="fill"
      objectFit="cover" // Ensures the image covers the container without stretching
      className="rounded-2xl"
    />
  </div>
</motion.div>

      </div>

      
      <motion.div
  className="absolute -bottom-20 w-full xl:w-full 2xl:w-full overflow-hidden z-0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <motion.svg
    className="w-full h-52 md:h-52 lg:h-96"
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ y: 0 }}
    animate={{
      y: [0, 15, 0, -15, 0], // The wave moves up and down smoothly
      transition: {
        duration: 5, // Duration for one complete cycle
        repeat: Infinity, // Repeat animation
        ease: "easeInOut",
        yoyo: true, // Ensure smooth reverse animation (not instantaneous)
      },
    }}
  >
    <motion.path
      fill="#ffffff"
      d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,128C672,139,768,181,864,197.3C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" // Default curve
      animate={{
        d: [
          "M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,128C672,139,768,181,864,197.3C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z", // Default curve
          "M0,250L48,240C96,230,192,210,288,190C384,170,480,150,576,130C672,110,768,90,864,70C960,50,1056,30,1152,10C1248,-10,1344,-30,1392,-35.3L1440,-40L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z", // Second curve (higher wave)
          "M0,280L48,270C96,260,192,240,288,220C384,200,480,180,576,160C672,140,768,120,864,100C960,80,1056,60,1152,40C1248,30,1344,20,1392,10L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z", // Third curve (even higher)
        ],
      }}
      transition={{
        duration: 5, // The full cycle duration
        repeat: Infinity, // Repeat infinitely
        ease: "easeInOut", // Smooth easing
        yoyo: true, // Make the animation reverse smoothly (this allows for a natural flow back)
      }}
    />
  </motion.svg>
</motion.div>



    </motion.div>
  );
};

export default HeroHome;
