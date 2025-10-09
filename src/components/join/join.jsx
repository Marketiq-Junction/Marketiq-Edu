"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, GraduationCap, TrendingUp } from 'lucide-react';

const Join = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Header Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              <Rocket className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Start Your Journey
              </span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
          >
            Join{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Education.MarketJunction
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-8 md:p-12 shadow-2xl"
          >
            <p className="text-lg md:text-2xl text-gray-800 leading-relaxed font-medium">
              Are you ready to launch your career in Marketing with an educational partner you can trust?
              <br className="hidden md:block" />
              <span className="block mt-4">
                Education.MarketJunction is here to guide you from enrollment to employment.
              </span>
              <br className="hidden md:block" />
              <span className="block mt-4">
                Explore our programs, gain industry-ready skills, and step into a future of endless possibilities.
              </span>
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {[
              {
                icon: GraduationCap,
                title: "Expert Training",
                description: "Learn from industry professionals"
              },
              {
                icon: Rocket,
                title: "Career Launch",
                description: "Get placed in top companies"
              },
              {
                icon: TrendingUp,
                title: "Skill Growth",
                description: "Continuous learning & development"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/40 p-6 shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-8"
          >
            <motion.div
              className="inline-block bg-white/40 backdrop-blur-sm rounded-2xl border-2 border-white/40 px-8 py-4"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">
                🚀 Your Future Awaits!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Join;