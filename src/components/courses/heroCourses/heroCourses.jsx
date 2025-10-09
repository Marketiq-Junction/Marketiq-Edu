"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, MessageCircle, X, Sparkles } from "lucide-react";

const HeroCourses = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setModalOpen(false);
  };

  const openWhatsApp = () => {
    const whatsappNumber = "9920892689";
    const message = "Hello, I would like to know more about the courses!";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 mt-20 mb-6">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative py-16 md:py-36 px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Content */}
            <motion.div
              className="flex-1 text-center md:text-left z-10"
              variants={itemVariants}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white tracking-wide">
                  Online Learning Platform
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                variants={itemVariants}
                style={{
                  textShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                Grow up your skills
                <br />
                by online courses with
                <br />
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Edu.Marketiq Junction
                </span>
              </motion.h1>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
                variants={itemVariants}
              >
                {/* Let's Connect Button */}
                <motion.button
                  onClick={() => {
                    openWhatsApp();
                    if (typeof window !== "undefined" && typeof gtag === "function") {
                      gtag("event", "click", {
                        event_category: "engagement",
                        event_label: "WhatsApp - Let's Connect",
                        transport_type: "beacon",
                      });
                    }
                  }}
                  className="group relative px-8 py-4 bg-white text-cyan-500 rounded-2xl font-semibold overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                    <MessageCircle size={20} />
                    Let's Connect
                  </span>
                </motion.button>

                {/* Learn More Button */}
                <motion.button
                  onClick={() => {
                    openModal();
                    if (typeof window !== "undefined" && typeof gtag === "function") {
                      gtag("event", "click", {
                        event_category: "engagement",
                        event_label: "Modal - Learn More",
                        transport_type: "beacon",
                      });
                    }
                  }}
                  className="group relative px-8 py-4 bg-transparent text-white rounded-2xl font-semibold border-2 border-white overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <Play size={20} fill="white" />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex-1 relative z-10 w-full md:w-auto"
              variants={imageVariants}
            >
              <motion.div
                className="relative w-full max-w-lg mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-cyan-200/30 rounded-3xl blur-2xl" />

                {/* Image Container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/lgpage.png"
                      alt="Student Learning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-2 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors z-10"
            >
              <X size={20} />
            </button>
            <video className="w-full rounded-xl" controls autoPlay>
              <source src="/edumj.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroCourses;