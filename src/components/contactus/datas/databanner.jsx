"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Databanner = () => {
  const [stats, setStats] = useState({
    hours: 0,
    experts: 0,
    reviews: 0,
    caseStudies: 0,
  });
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let countInterval;
    const animateNumbers = () => {
      const duration = 2000;
      const increment = (endValue) => endValue / (duration / 100);

      let currentHours = 0;
      let currentExperts = 0;
      let currentReviews = 0;
      let currentCaseStudies = 0;

      countInterval = setInterval(() => {
        currentHours += increment(2700000);
        currentExperts += increment(250);
        currentReviews += increment(1000);
        currentCaseStudies += increment(600);

        if (currentHours >= 2700000) currentHours = 2700000;
        if (currentExperts >= 250) currentExperts = 250;
        if (currentReviews >= 1000) currentReviews = 1000;
        if (currentCaseStudies >= 600) currentCaseStudies = 600;

        setStats({
          hours: Math.floor(currentHours),
          experts: Math.floor(currentExperts),
          reviews: Math.floor(currentReviews),
          caseStudies: Math.floor(currentCaseStudies),
        });

        if (
          currentHours === 2700000 &&
          currentExperts === 250 &&
          currentReviews === 1000 &&
          currentCaseStudies === 600
        ) {
          clearInterval(countInterval);
        }
      }, 100);
    };

    if (inView) {
      animateNumbers();
    }
    return () => clearInterval(countInterval);
  }, [inView]);

  // Floating orbs animation
  const orbVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section 
      className="relative py-16 md:py-24 overflow-hidden"
      onViewportEnter={() => setInView(true)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 -z-10" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-10 left-5 w-56 h-56 bg-white/20 rounded-full filter blur-3xl"
        variants={orbVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-10 right-5 w-64 h-64 bg-cyan-300/20 rounded-full filter blur-3xl"
        variants={orbVariants}
        animate="animate"
        transition={{ duration: 7, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-72 h-72 bg-teal-300/20 rounded-full filter blur-3xl"
        variants={orbVariants}
        animate="animate"
        transition={{ duration: 8, delay: 2 }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Arrow Image */}
        <motion.div 
          className="absolute left-0 bottom-0 w-1/12 md:w-1/16 hidden md:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* <Image
            src={'/A+.svg'}
            alt="Arrow"
            width={100}
            height={50}
            className="object-contain"
          /> */}
        </motion.div>

        {/* Stats Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Stat Card 1 */}
          <motion.div
            className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 text-center hover:bg-white/90 transition"
            variants={statVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500"
            >
              2.7M
            </motion.h3>
            <p className="font-syne text-gray-700 mt-3 font-medium">Digital Marketing Hours</p>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 text-center hover:bg-white/90 transition"
            variants={statVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500"
            >
              {stats.experts}+
            </motion.h3>
            <p className="font-syne text-gray-700 mt-3 font-medium">Marketing Experts</p>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 text-center hover:bg-white/90 transition"
            variants={statVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500"
            >
              {stats.reviews}+
            </motion.h3>
            <p className="font-syne text-gray-700 mt-3 font-medium">4 Stars Up Reviews</p>
          </motion.div>

          {/* Stat Card 4 */}
          <motion.div
            className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 text-center hover:bg-white/90 transition"
            variants={statVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500"
            >
              {stats.caseStudies}+
            </motion.h3>
            <p className="font-syne text-gray-700 mt-3 font-medium">Case Studies</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Databanner;