"use client";
import React, { useState } from "react";
import Image from "next/image";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { motion } from "framer-motion";

const HeroCourses = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();  // Prevent event from propagating to the parent div
    setModalOpen(false);   // Close the modal
  };

  const openWhatsApp = () => {
    const whatsappNumber = "9920892689";  // Your WhatsApp number
    const message = "Hello, I would like to know more about the courses!";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const automatic = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={automatic}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-blue-400 mx-4 md:mx-16 rounded-2xl p-4 md:p-16 flex flex-col md:flex-row items-center justify-between text-white mt-8 shadow-lg"
    >
      {/* Left Section - Text */}
      <motion.div
        variants={automatic}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center md:text-left mb-8 md:mb-0"
      >
        <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">
          Grow up your skills by online courses with <br />
          <span className="text-white block mt-2 md:mt-4">Edu.Marketiq Junction</span>
        </h1>
        <motion.div
          variants={automatic}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-6 md:mt-12"
        >
          <button
            onClick={openWhatsApp}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold transition-all hover:bg-[#3ca0a0] hover:text-white"
          >
            Let &apos;s Connect
          </button>
          <button
            onClick={openModal}
            className="bg-transparent border-2 justify-center border-black text-black px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition flex items-center gap-2"
          >
            Learn More
            <PlayCircleOutlineIcon />
          </button>
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-center mt-4 md:mt-0"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="relative w-64 h-44 md:w-[82%] md:h-[380px]">
          <Image
            src="/lgpage.png"
            alt="Student Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg "
          />
        </div>
      </motion.div>

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
              className="absolute top-1 right-0 text-red-500 bg-ewhite p-4 rounded-full"
            >
              X
            </button>
            <video width="96%" height="auto" controls>
              <source src="/edumj.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default HeroCourses;
