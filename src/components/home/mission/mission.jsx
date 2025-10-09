"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

const Mission = () => {
  const missions = [
    "Bridge the gap between education and employment.",
    "Equip students with industry-relevant skills and practical expertise.",
    "Build confidence to excel in the tech industry.",
    "Provide high-quality training and hands-on project experience.",
    "Offer robust placement support for career success.",
    "Prepare future-ready professionals for the evolving digital world.",
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 py-20 px-4 md:px-8">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Decorative Badge */}
            <motion.div
              className="absolute -top-6 -left-6 bg-white text-cyan-500 px-6 py-3 rounded-2xl shadow-2xl z-10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span className="font-bold text-sm">Our Mission</span>
              </div>
            </motion.div>

            {/* Main Image Container */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-cyan-200/30 rounded-3xl blur-2xl" />
              
              {/* Image */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src="/mission.png"
                    alt="Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">10K+</div>
                  <div className="text-xs text-gray-700">Students Trained</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-semibold text-white tracking-wide">
                  Our Purpose
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-black text-white">
                Mission
              </h2>

              <p className="text-lg text-white/90 leading-relaxed">
                Transforming education into career success through innovative training and unwavering support.
              </p>
            </motion.div>

            {/* Mission Items */}
            <motion.div className="space-y-4" variants={containerVariants}>
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Icon */}
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-white rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    </motion.div>

                    {/* Text */}
                    <p className="flex-1 text-gray-800 font-medium leading-relaxed pt-0.5">
                      {mission}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://wa.me/919920892689?text=Hi%20there!%20I%20am%20interested%20in%20learning%20more%20about%20your%20mission%20and%20programs."
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="group relative px-8 py-4 bg-white text-cyan-500 rounded-2xl font-semibold overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (typeof window !== "undefined" && typeof gtag === "function") {
                      gtag("event", "learn_more_click", {
                        event_category: "engagement",
                        event_label: "Learn More Button",
                        value: 1,
                      });
                    }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;