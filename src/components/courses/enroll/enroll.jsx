"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";

const Enroll = () => {
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
                <Sparkles className="w-5 h-5" />
                <span className="font-bold text-sm">Start Today</span>
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
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="/howtoenroll.png"
                    alt="How to Enroll"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Card */}
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
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">24/7</div>
                  <div className="text-xs text-gray-700">Support Available</div>
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
                  Getting Started
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                How to{" "}
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Enroll?
                </span>
              </h2>

              <p className="text-lg text-white/90 leading-relaxed">
                Take the first step toward a rewarding digital marketing career with Education.Marketiq Junction. Explore our programs, find the one that aligns with your goals, and get ready to unlock new opportunities in the world of digital marketing!
              </p>
            </motion.div>

            {/* Steps */}
            <motion.div className="space-y-4" variants={containerVariants}>
              {[
                { step: "1", text: "Explore our course offerings" },
                { step: "2", text: "Choose the program that fits your goals" },
                { step: "3", text: "Contact us to get started" },
                { step: "4", text: "Begin your learning journey" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm hover:shadow-lg transition-all">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.step}
                    </motion.div>
                    <p className="flex-1 text-gray-800 font-medium">
                      {item.text}
                    </p>
                    <ArrowRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://wa.me/919920892689?text=Hi%20there!%20I%20would%20like%20to%20learn%20more%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="group relative px-8 py-4 bg-white text-cyan-500 rounded-2xl font-semibold overflow-hidden shadow-xl w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (typeof window !== "undefined" && typeof gtag === "function") {
                      gtag("event", "click", {
                        event_category: "engagement",
                        event_label: "We would Love to Hear From You Button",
                        transport_type: "beacon",
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
                  <span className="relative flex items-center justify-center gap-2  transition-colors">
                    We would Love to Hear From You
                    <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  {/* Animated Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;