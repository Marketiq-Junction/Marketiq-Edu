"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Lock } from "lucide-react";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const PrivacyPolicy = () => {
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

  const policies = [
    {
      id: 1,
      title: "Data Collection",
      content:
        "We collect personal data like name, email, phone number, and payment information for providing our services. This information is collected only when you voluntarily provide it through our registration or inquiry forms. We ensure all data collection complies with applicable privacy laws and regulations.",
    },
    {
      id: 2,
      title: "Data Usage",
      content:
        "Your data is used solely for processing your enrollment, providing updates, and improving our offerings. We may use your information to send you educational materials, course updates, and promotional content. You can opt-out of communications at any time by contacting us.",
    },
    {
      id: 3,
      title: "Data Security",
      content:
        "We implement industry-standard encryption to secure your information. Our servers are protected with advanced firewalls and security protocols. We regularly update our security measures to protect against unauthorized access and data breaches.",
    },
    {
      id: 4,
      title: "Third-Party Sharing",
      content:
        "We do not share your data with third parties, except as required for payment processing and legal compliance. Our partners are bound by strict confidentiality agreements and data protection standards. Your privacy remains our top priority.",
    },
    {
      id: 5,
      title: "Cookies & Tracking",
      content:
        "Our website uses cookies to improve user experience and analyze website traffic. These cookies help us understand how you interact with our platform and allow us to provide personalized content. You can manage cookie preferences in your browser settings.",
    },
    {
      id: 6,
      title: "User Rights",
      content:
        "You have the right to access, modify, or delete your personal data at any time. To exercise these rights, please contact our privacy team. We will respond to your requests within 30 days as per applicable regulations.",
    },
    {
      id: 7,
      title: "Policy Updates",
      content:
        "MarketIQ Junction reserves the right to update this privacy policy. Changes will be communicated through the website and via email. We encourage you to review this policy periodically to stay informed about how we protect your privacy.",
    },
  ];

  const footerLinks = {
    Company: ["About Us", "Services", "Blog", "Careers"],
    Support: ["Help Center", "Contact Us", "FAQ", "Documentation"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "License"],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== NAVBAR ===== */}
     <Navbar/>

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
                <Lock className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 font-syne">
                Privacy Policy
              </h1>
            </motion.div>

            {/* Intro */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-montserrat mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              At <strong className="text-blue-600">MarketIQ Junction</strong>, we are committed to protecting
              your privacy. Our privacy policy outlines how we collect, use, and
              safeguard your personal information. Your trust is important to us.
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
              {policies.map((policy, idx) => (
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

            {/* Contact for Privacy */}
            <motion.div
              className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-syne font-bold text-gray-800 mb-3 sm:mb-4">
                Have Privacy Questions?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-montserrat leading-relaxed mb-4">
                If you have any questions about our privacy practices or wish to exercise your rights, please contact us at{" "}
                <a
                  href="mailto:marketiqjunction@gmail.com"
                  className="text-blue-600 hover:text-cyan-600 font-semibold transition"
                >
                  marketiqjunction@gmail.com
                </a>
                {" "}or call us at{" "}
                <a
                  href="tel:+919920892689"
                  className="text-blue-600 hover:text-cyan-600 font-semibold transition"
                >
                  +91 99208 92689
                </a>
                .
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-montserrat">
                <strong>Last Updated:</strong> January 2024. This policy is subject to change at our discretion.
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

export default PrivacyPolicy;