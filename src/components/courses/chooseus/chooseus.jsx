"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, TrendingUp, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

const ChooseUs = () => {
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
    hidden: { opacity: 0, scale: 0.8, rotate: 5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const cards = [
    {
      icon: GraduationCap,
      title: "Career-Ready Curriculum",
      points: [
        "Course Design: Created by industry professionals.",
        "Job-Ready Skills: Equip students with practical skills from day one."
      ]
    },
    {
      icon: Users,
      title: "100% Placement Assistance",
      points: [
        "Industry-Designed Courses: Created by professionals to ensure real-world relevance.",
        "Job-Ready Skills: Equip students with the skills needed from day one."
      ]
    },
    {
      icon: TrendingUp,
      title: "Flexible Learning Paths",
      points: [
        "Choose from 2-Days Bootcamp,",
        "45-Days fast track course,",
        "4-Months In-Depth Course programs tailored to meet specific career goals."
      ]
    },
    {
      icon: Award,
      title: "Certifications",
      points: [
        "Digital Marketing Specialist Certificate",
        "Advanced SEO Specialist Certificate",
        "Social Media Marketing Expert Certificate",
        "Full Stack Digital Marketer Certificate"
      ]
    }
  ];

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
            className="relative order-2 md:order-1"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
              animate={{
                y: [0, -10, 0, 10, 0],
              }}
              style={{
                transition: "transform 4s ease-in-out infinite",
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-cyan-200/30 rounded-3xl blur-2xl" />
              
              {/* Image */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
  src="/chose.png"
  alt="Why Choose Us"
  fill
  className="object-cover rounded-2xl"
/>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white text-cyan-500 px-6 py-3 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-bold text-sm">Best Choice</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="space-y-8 order-1 md:order-2"
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
                <span className="text-sm font-semibold text-white tracking-wide uppercase">
                  Why Choose Us
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Our Courses are more than just academic programs
              </h2>

              <p className="text-lg text-white/90 leading-relaxed">
                They&apos;re your bridge to a successful digital marketing career.
              </p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={containerVariants}>
              {cards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/40 p-6 shadow-lg hover:shadow-xl transition-all h-full">
                      {/* Icon */}
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {card.title}
                      </h3>

                      {/* Points */}
                      <ul className="space-y-2">
                        {card.points.map((point, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;