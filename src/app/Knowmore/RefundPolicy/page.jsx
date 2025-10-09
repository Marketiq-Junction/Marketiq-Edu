"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, RotateCcw } from "lucide-react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const RefundPolicy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Floating orbs animation
  const orbVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const refundPolicies = [
    {
      id: 1,
      title: "Refund Request",
      content:
        "Refund requests must be made within 7 days of enrollment. To request a refund, please contact our support team with your enrollment details and reason for the refund. We will review your request and guide you through the process.",
    },
    {
      id: 2,
      title: "Eligibility for Refund",
      content:
        "Refunds are only applicable if less than 25% of the course has been accessed. Once you exceed this threshold, the course is considered consumed and is no longer eligible for a refund. Please review the course materials carefully before completing your enrollment.",
    },
    {
      id: 3,
      title: "Processing Fees",
      content:
        "Processing fees, if any, will be deducted from the refunded amount. These fees typically account for payment gateway charges and administrative costs. We ensure that any deductions are transparent and minimal.",
    },
    {
      id: 4,
      title: "Refund Timeline",
      content:
        "Refunds will be processed within 10 business days after approval. The refund will be credited back to your original payment method. In some cases, your bank may take an additional 2-5 business days to reflect the amount in your account.",
    },
    {
      id: 5,
      title: "Non-Refundable Items",
      content:
        "Certain items such as certificates, downloaded materials, and completed assessments are non-refundable. If you have purchased add-on services or premium content, those may have their own refund policies. Please contact our support team for specific cases.",
    },
    {
      id: 6,
      title: "Special Circumstances",
      content:
        "We understand that special circumstances may arise. If you have extenuating circumstances that prevent you from completing the course, please contact our support team. We are willing to discuss alternative solutions such as course postponement or content modifications.",
    },
    {
      id: 7,
      title: "Contact Support",
      content:
        "For refund inquiries, please reach out to our support team at marketiqjunction@gmail.com or call +91 99208 92689. Our team is available Monday to Saturday from 9:00 AM to 6:00 PM. We are committed to resolving your concerns promptly and professionally.",
    },
  ];

  

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== NAVBAR ===== */}
      <Navbar />
      {/* ===== MAIN CONTENT ===== */}
      <motion.section
        className="relative flex-grow flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 mt-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 -z-10" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-white/20 rounded-full filter blur-3xl"
          variants={orbVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-cyan-300/20 rounded-full filter blur-3xl"
          variants={orbVariants}
          animate="animate"
          transition={{ duration: 7, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-teal-300/20 rounded-full filter blur-3xl"
          variants={orbVariants}
          animate="animate"
          transition={{ duration: 8, delay: 2 }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto w-full">
          <motion.div
            className="bg-white/80 backdrop-blur-md border border-white/40 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 flex items-center justify-center">
                <RotateCcw className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 font-syne">
                Refund Policy
              </h1>
            </motion.div>

            {/* Intro */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-montserrat mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              At <strong className="text-blue-600">MarketIQ Junction</strong>, we strive to ensure your
              satisfaction. However, we understand that circumstances may change,
              which is why we have a clear refund policy to accommodate your needs. Your satisfaction is our priority.
            </motion.p>

            {/* Policy Sections */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {refundPolicies.map((policy, idx) => (
                <motion.div
                  key={policy.id}
                  className="border border-white/40 rounded-lg sm:rounded-xl overflow-hidden hover:border-white/60 transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                >
                  {/* Section Header */}
                  <motion.button
                    onClick={() => toggleSection(policy.id)}
                    className="w-full bg-white/50 hover:bg-white/70 backdrop-blur-sm p-4 sm:p-5 md:p-6 flex items-center justify-between transition group"
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  >
                    <h2 className="text-base sm:text-lg md:text-xl font-syne font-bold text-gray-800 text-left">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        {policy.id}.
                      </span>{" "}
                      {policy.title}
                    </h2>
                    <motion.div
                      animate={{
                        rotate: expandedSections[policy.id] ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 group-hover:text-blue-600 transition" />
                    </motion.div>
                  </motion.button>

                  {/* Section Content */}
                  <AnimatePresence>
                    {expandedSections[policy.id] && (
                      <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="bg-white/30 border-t border-white/40 p-4 sm:p-5 md:p-6"
                      >
                        <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-montserrat">
                          {policy.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Reference */}
            <motion.div
              className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-syne font-bold text-gray-800 mb-4 sm:mb-5">
                Quick Reference
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <p className="text-sm sm:text-base md:text-lg font-syne font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    7 Days
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 font-montserrat mt-1">Request Window</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <p className="text-sm sm:text-base md:text-lg font-syne font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                    25%
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 font-montserrat mt-1">Access Limit</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <p className="text-sm sm:text-base md:text-lg font-syne font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                    10 Days
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 font-montserrat mt-1">Processing Time</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <p className="text-sm sm:text-base md:text-lg font-syne font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
                    24/7
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 font-montserrat mt-1">Support</p>
                </div>
              </div>
            </motion.div>

            {/* Contact for Refunds */}
            <motion.div
              className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-montserrat leading-relaxed">
                <strong className="text-gray-800">Questions about refunds?</strong> Contact our support team at{" "}
                <a
                  href="mailto:marketiqjunction@gmail.com"
                  className="text-blue-600 hover:text-cyan-600 font-semibold transition"
                >
                  marketiqjunction@gmail.com
                </a>
                {" "}or call{" "}
                <a
                  href="tel:+919920892689"
                  className="text-blue-600 hover:text-cyan-600 font-semibold transition"
                >
                  +91 99208 92689
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default RefundPolicy;