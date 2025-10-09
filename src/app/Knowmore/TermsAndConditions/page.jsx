"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const orbVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut" } },
  };

  const terms = [
    { id: 1, title: "Eligibility", content: "You must be at least 18 years old..." },
    { id: 2, title: "Accuracy of Information", content: "All users must provide accurate and up-to-date personal info..." },
    { id: 3, title: "Intellectual Property", content: "All content and materials are property of MarketIQ Junction..." },
    { id: 4, title: "Service Modifications", content: "MarketIQ Junction reserves the right to modify or discontinue services..." },
    { id: 5, title: "Limitation of Liability", content: "We are not liable for indirect, incidental, or consequential damages..." },
    { id: 6, title: "Dispute Resolution", content: "All disputes shall be subject to Mumbai jurisdiction..." },
    { id: 7, title: "Updates to the Terms", content: "MarketIQ Junction reserves the right to update these terms..." },
  ];

  

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <motion.section
        className="relative flex-grow flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 mt-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 -z-10" />

        {/* Floating orbs */}
        <motion.div className="absolute top-20 left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-white/20 rounded-full filter blur-3xl" variants={orbVariants} animate="animate" />
        <motion.div className="absolute bottom-20 right-10 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-cyan-300/20 rounded-full filter blur-3xl" variants={orbVariants} animate="animate" transition={{ duration: 7, delay: 1 }} />
        <motion.div className="absolute top-1/2 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-teal-300/20 rounded-full filter blur-3xl" variants={orbVariants} animate="animate" transition={{ duration: 8, delay: 2 }} />

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto w-full">
          <motion.div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl" variants={containerVariants} initial="hidden" animate="visible">
            {/* Header */}
            <motion.div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 flex items-center justify-center">
                <Shield className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 font-syne">
                Terms & Conditions
              </h1>
            </motion.div>

            {/* Intro */}
            <motion.p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-montserrat mb-6 sm:mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
              Welcome to <strong className="text-blue-600">MarketIQ Junction</strong>. By accessing or using our website, you agree to abide by the following terms and conditions. Please read them carefully.
            </motion.p>

            {/* Terms Sections */}
            <motion.div className="space-y-3 sm:space-y-4">
              {terms.map((term) => (
                <motion.div key={term.id} className="border border-white/40 rounded-lg sm:rounded-xl overflow-hidden hover:border-white/60 transition">
                  <motion.button onClick={() => toggleSection(term.id)} className="w-full bg-white/50 hover:bg-white/70 backdrop-blur-sm p-4 sm:p-5 md:p-6 flex items-center justify-between transition group">
                    <h2 className="text-base sm:text-lg md:text-xl font-syne font-bold text-gray-800 text-left">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{term.id}.</span> {term.title}
                    </h2>
                    <motion.div animate={{ rotate: expandedSections[term.id] ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 group-hover:text-blue-600 transition" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedSections[term.id] && (
                      <motion.div variants={sectionVariants} initial="hidden" animate="visible" exit="hidden" className="bg-white/30 border-t border-white/40 p-4 sm:p-5 md:p-6">
                        <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-montserrat">{term.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Last Updated */}
            <motion.div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/40">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-montserrat">
                <strong>Last Updated:</strong> January 2024. Continued use of our services indicates acceptance of these terms.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <Footer  />
    </div>
  );
};

export default TermsAndConditions;
