"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUserTie,
  FaClipboardCheck,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";

const CareerJourney = () => {
  const journeySteps = [
    {
      id: "01",
      title: "Follow 3A",
      icon: <FaGraduationCap />,
      description:
        "Our structured learning model focuses on Attendance, Assignment & Assessment, encouraging consistency and helping you achieve a success score.",
      row: 1,
    },
    {
      id: "02",
      title: "Industry-Specific Skills",
      icon: <FaLaptopCode />,
      description:
        "Gain hands-on expertise with tools and technologies tailored to high-demand roles in data, development, cloud, testing and marketing.",
      row: 2,
    },
    {
      id: "03",
      title: "Profile Building",
      icon: <FaUserTie />,
      description:
        "Get expert guidance on resume creation, LinkedIn, and web portfolio development to confidently present your skills to employers.",
      row: 1,
    },
    {
      id: "04",
      title: "Exam",
      icon: <FaClipboardCheck />,
      description:
        "Clear the final evaluation exam designed to test your technical understanding and practical readiness to conquer real-world challenges.",
      row: 2,
    },
    {
      id: "05",
      title: "Global Certification",
      icon: <FaCertificate />,
      description:
        "Earn globally recognized certifications that validate your expertise and enhance your professional credibility across industries.",
      row: 1,
    },
    {
      id: "06",
      title: "Integrated Internship",
      icon: <FaBriefcase />,
      description:
        "Apply your knowledge in real projects and case studies through an internship that prepares you to understand workplace challenges and build credibility.",
      row: 2,
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-800 dark:via-cyan-900/20 dark:to-gray-800 overflow-hidden mt-10">
      <div className="container mx-auto max-w-[1400px]">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight px-4 text-gray-900 dark:text-white">
            {"Turn Your Learning Into a Career That You're Proud Of"}
            
          </h2>
        </motion.div>

        {/* Journey Container */}
        <div className="relative">
          {/* Desktop Layout - Zigzag with curved connections */}
          <div className="hidden lg:block relative" style={{ minHeight: "900px" }}>
            {/* SVG Container for Dotted Lines - BEHIND CARDS */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
              viewBox="0 0 1400 900"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="33%" stopColor="#06b6d4" />
                  <stop offset="66%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
                
                {/* Glow effect for better visibility */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Path from Card 1 to Card 2 */}
              <motion.path
                d="M 233 280 Q 350 380, 467 480"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeDasharray="10 10"
                fill="none"
                filter="url(#glow)"
                opacity="0.7"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              />

              {/* Path from Card 2 to Card 3 */}
              <motion.path
                d="M 467 480 Q 583 380, 700 280"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeDasharray="10 10"
                fill="none"
                filter="url(#glow)"
                opacity="0.7"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
              />

              {/* Path from Card 3 to Card 4 */}
              <motion.path
                d="M 700 280 Q 817 380, 933 480"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeDasharray="10 10"
                fill="none"
                filter="url(#glow)"
                opacity="0.7"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
              />

              {/* Path from Card 4 to Card 5 */}
              <motion.path
                d="M 933 480 Q 1050 380, 1167 280"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeDasharray="10 10"
                fill="none"
                filter="url(#glow)"
                opacity="0.7"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.7, ease: "easeInOut" }}
              />

              {/* Path from Card 5 to Card 6 */}
              <motion.path
                d="M 1167 280 Q 1250 380, 1300 480"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeDasharray="10 10"
                fill="none"
                filter="url(#glow)"
                opacity="0.7"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2.1, ease: "easeInOut" }}
              />
            </svg>

            {/* Row 1 Cards (Top) */}
            <div className="absolute top-0 left-0 right-0 flex justify-around items-start" style={{ zIndex: 10 }}>
              {journeySteps
                .filter((step) => step.row === 1)
                .map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="w-[280px]"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <JourneyCard step={step} />
                  </motion.div>
                ))}
            </div>

            {/* Row 2 Cards (Bottom) */}
            <div className="absolute top-[450px] left-0 right-0 flex justify-around items-start" style={{ zIndex: 10 }}>
              {journeySteps
                .filter((step) => step.row === 2)
                .map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="w-[280px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <JourneyCard step={step} />
                  </motion.div>
                ))}
            </div>

            {/* Connection Dots on Path */}
            {[233, 467, 700, 933, 1167].map((x, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"
                style={{
                  left: `${(x / 1400) * 100}%`,
                  top: i % 2 === 0 ? '280px' : '480px',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 5
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.4, duration: 0.3 }}
              />
            ))}

            {/* Start Label */}
            <motion.div
              className="absolute bottom-8 left-[10%] flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-200 dark:border-blue-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse shadow-lg" />
              <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Start with</span>
            </motion.div>

            {/* End Label */}
            <motion.div
              className="absolute bottom-8 right-[6%] flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-teal-200 dark:border-teal-800"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Happy Ending</span>
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full animate-pulse shadow-lg" />
            </motion.div>
          </div>

          {/* Mobile/Tablet Layout - Vertical with connecting line */}
          <div className="lg:hidden space-y-8 relative">
            {/* Vertical connecting line for mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 opacity-30" />
            
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative pl-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Connection dot for mobile */}
                <div className="absolute left-[26px] top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-blue-50 dark:border-gray-800 shadow-lg z-10" />
                <JourneyCard step={step} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="https://wa.me/9594402822?text=Hey%20I%20want%20to%20start%20my%20career%20journey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 hover:from-blue-700 hover:via-cyan-600 hover:to-teal-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase />
            Start Your Journey Today
          </motion.a>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
    </section>
  );
};

// Journey Card Component
const JourneyCard = ({ step }) => {
  return (
    <motion.div 
      className="relative bg-white dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Number Badge */}
      <div className="absolute -top-3 -left-3 w-14 h-14 bg-white dark:bg-gray-800 border-4 border-blue-100 dark:border-blue-900 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg z-10 text-gray-900 dark:text-white">
        {step.id}
      </div>

      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl flex items-center justify-center text-3xl text-blue-600 dark:text-blue-400 mb-4 mt-2 group-hover:scale-110 transition-transform duration-300 shadow-md">
        {step.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
        {step.description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
    </motion.div>
  );
};

export default CareerJourney;