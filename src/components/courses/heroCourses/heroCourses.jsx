"use client";
import React from "react";
import Image from "next/image";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { motion } from "framer-motion";

const HeroCourses = () => {
  const openYoutubeVideo = () => {
    // Replace this with the YouTube URL you want to open
    const youtubeUrl = "https://www.youtube.com/watch?v=your_video_id";
    window.open(youtubeUrl, "_blank");
  };

  const openWhatsApp = () => {
    // Replace with your WhatsApp number
    const whatsappNumber = "9920892689";
    const message = "Hello, I would like to know more about the courses!";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-[#3498db] to-[#1e81d3] mx-4 md:mx-16 rounded-2xl p-4 md:p-16 flex flex-col md:flex-row items-center justify-between text-white mt-8 shadow-lg"
    >
      {/* Left Section - Text */}
      <motion.div
        className="flex-1 text-center md:text-left mb-8 md:mb-0"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">
          Grow up your skills by online courses with <br />
          <span className="text-white block mt-2 md:mt-4">
            Edu.Marketiq Junction
          </span>
        </h1>
        <motion.div
          className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-6 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={openWhatsApp}
            className="bg-white text-black px-4 md:px-6 py-2 rounded-full font-semibold transition-all hover:bg-[#3ca0a0] hover:text-white"
          >
            Let&apos;s Connect
          </button>
          <button
            onClick={openYoutubeVideo}
            className="bg-transparent border-2 justify-center border-black text-black px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition flex items-center gap-2"
          >
            Learn More
            <PlayCircleOutlineIcon />
          </button>
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="relative w-64 h-44 md:w-80 md:h-80">
          <Image
            src="/herocourses.avif" // replace with the actual image path
            alt="Student Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroCourses;
