"use client";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { motion } from "framer-motion";
import { Sparkles, Target, Users, Award } from "lucide-react";
import Link from "next/link";

const OurStory = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const valueCards = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission Driven",
      description:
        "Empowering students with comprehensive learning programs and career guidance",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focused",
      description:
        "Building a thriving community of learners, innovators, and leaders",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Committed",
      description:
        "Delivering high-quality education with proven placement assistance",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Story Section */}
      <motion.section
        className="relative flex-grow flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 -z-10" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full filter blur-3xl"
          variants={orbVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-300/20 rounded-full filter blur-3xl"
          variants={orbVariants}
          animate="animate"
          transition={{ duration: 7, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-teal-300/20 rounded-full filter blur-3xl"
          variants={orbVariants}
          animate="animate"
          transition={{ duration: 8, delay: 2 }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 sm:p-12 md:p-14 shadow-2xl mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Title */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              variants={textVariants}
              custom={0}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 font-syne">
                Our Story
              </h1>
            </motion.div>

            {/* Paragraphs */}
            <motion.p
              className="text-gray-800 text-lg leading-relaxed font-montserrat mb-6"
              variants={textVariants}
              custom={1}
            >
              Welcome to{" "}
              <strong className="text-blue-600">
                Education.MarketiqJunction
              </strong>
              , where our journey began in <strong>2011</strong>. Over the
              years, we have been committed to delivering high-quality education
              and career guidance to students from diverse backgrounds.
            </motion.p>

            <motion.p
              className="text-gray-800 text-lg leading-relaxed font-montserrat mb-6"
              variants={textVariants}
              custom={2}
            >
              Our mission is to create transformative opportunities for students
              by offering comprehensive learning programs, skill-building
              initiatives, and placement assistance.
            </motion.p>

            <motion.p
              className="text-gray-800 text-lg leading-relaxed font-montserrat"
              variants={textVariants}
              custom={3}
            >
              Join us as we continue to inspire and nurture students on their
              path to success. Together, we’re building a community of learners,
              innovators, and leaders who are ready to make a difference.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={textVariants}
              custom={4}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact-us">
                <motion.button className="mt-10 px-8 py-4 rounded-lg font-syne font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300">
                  Join Our Community
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Value Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {valueCards.map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 text-center hover:bg-white/90 transition"
                variants={cardVariants}
                custom={idx}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="mx-auto w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 flex items-center justify-center mb-6">
                  <div className="text-white">{card.icon}</div>
                </div>
                <h3 className="text-2xl font-syne font-bold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-montserrat">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default OurStory;
