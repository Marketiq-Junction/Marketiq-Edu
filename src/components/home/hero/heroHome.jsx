"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, FileText, X } from "lucide-react";

const HeroHome = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPdfModalOpen, setPdfModalOpen] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: false });

  // Staggered animation variants
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
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 mt-2 mb-6">
      {/* Animated Background Elements */}
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
        ref={ref}
        className="relative py-16 md:py-36 px-4 md:px-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Content */}
            <motion.div
              className="flex-1 text-center md:text-left z-10"
              variants={itemVariants}
            >
              {/* Eyebrow Text */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-sm font-semibold text-white tracking-wide">
                  Education.MarketJunction
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
                The Smart Stop
                <br />
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  for Digital Growth
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-2xl text-white/90 mb-8 font-light"
                variants={itemVariants}
              >
                Empowering the Future of Tech Talent
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                variants={itemVariants}
              >
                {/* Brochure Button */}
                <motion.button
                  onClick={() => {
                    if (typeof window !== "undefined" && window.innerWidth <= 768) {
                      window.open("/brochure/b.pdf", "_blank");
                    } else {
                      setPdfModalOpen(true);
                    }
                  }}
                  className="group relative px-8 py-4 bg-white text-cyan-500 rounded-xl font-semibold overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                    <FileText size={20} />
                    Our Brochure
                  </span>
                </motion.button>

                {/* Video Button */}
                <motion.button
                  onClick={() => setModalOpen(true)}
                  className="group relative px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-white overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    <Play size={20} fill="white" />
                    Watch Video
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
                className="relative w-full max-w-lg mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-cyan-200/30 rounded-3xl blur-2xl" />

                {/* Image Container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/DigitalGrowth.png"
                      alt="Digital Growth"
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
          onClick={() => setModalOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-2 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
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

      {/* PDF Modal */}
      {isPdfModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setPdfModalOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl p-6 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPdfModalOpen(false)}
              className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors z-10"
            >
              <X size={20} />
            </button>
            <iframe
              src="/brochure/b.pdf"
              className="w-full h-full rounded-xl"
              title="PDF Viewer"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroHome;