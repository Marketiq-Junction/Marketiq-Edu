"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Gauge, TrendingUp, ChevronDown, Award } from 'lucide-react';

const Offer = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: '2-day Bootcamp',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      details: [
        { label: 'Duration', value: '2 Days' },
        { label: 'Hours', value: '8 hours per day' },
        { label: 'Placement Support', value: 'No placement support' },
        { label: 'Hands-on Experience', value: 'Apply concepts through real-time exercises and examples' },
        { label: 'Certifications', value: 'Receive a Digital Marketing Bootcamp Certificate' },
      ],
    },
    {
      id: 2,
      title: "45-day Fast Track Program",
      icon: Gauge,
      color: 'from-blue-500 to-teal-600',
      details: [
        { label: 'Duration', value: '45 Days' },
        { label: 'Hours', value: '2 days per week, 5 hours per session' },
        { label: 'Placement Support', value: 'Career guidance and mock interviews included' },
        { label: '100% Placement Support', value: 'Resume building, mock interviews, and recruiter connections' },
        { label: 'Project-Based Learning', value: 'Gain practical experience by working on real-world campaigns' },
        { label: 'Certifications', value: 'Digital Marketing Basics Certificate, Social Media Marketing Specialist Certificate, Content Writing Specialist Certificate' },
      ],
    },
    {
      id: 3,
      title: "4-Month A.I Digital Marketing Program",
      icon: TrendingUp,
      color: 'from-teal-500 to-cyan-600',
      details: [
        { label: 'Duration', value: '4 months' },
        { label: 'Hours', value: '2 days per week, 5 hours per day' },
        { label: 'Placement Support', value: '100% assistance with career workshops and mock interviews' },
        { label: 'Career Coaching', value: 'Mock interviews and recruiter connections' },
        { label: 'Live Projects', value: 'Gain practical experience by working on real-world campaigns' },
        { label: 'Certifications', value: 'Digital Marketing Specialist Certificate, Advanced SEO Specialist Certificate, Social Media Marketing Expert Certificate, Full Stack Digital Marketer Certificate' },
      ],
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

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

  const cardVariants = {
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white tracking-wide">
              Our Offerings
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Learn, Achieve, and{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Get Certified
            </span>
          </h2>

          <p className="text-xl text-white/90">
            Match Your Goals With The Right Program For a Customized Learning Experience
          </p>
        </motion.div>

        {/* Program Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {cards.map((card) => {
            const IconComponent = card.icon;
            const isExpanded = selectedCard === card.id;

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="cursor-pointer"
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => {
                  if (typeof window !== "undefined" && typeof gtag === "function") {
                    gtag("event", "select_content", {
                      event_category: "cards",
                      event_label: `${card.title} Card Clicked`,
                      transport_type: "beacon",
                    });
                  }
                  handleCardClick(card.id);
                }}
              >
                <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-white/40 shadow-xl overflow-hidden transition-all ${
                  isExpanded ? 'h-auto' : 'h-[400px]'
                }`}>
                  {/* Icon Section */}
                  <div className="relative p-8 flex justify-center">
                    <motion.div
                      className={`w-32 h-32 bg-gradient-to-br ${card.color} rounded-3xl flex items-center justify-center shadow-lg`}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <IconComponent className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>

                  {/* Title Section */}
                  <div className="px-6 pb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {card.title}
                    </h3>
                    
                    {!isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center gap-2 text-gray-600 mt-4"
                      >
                        <span className="text-sm font-semibold">Click to view details</span>
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                      </motion.div>
                    )}
                  </div>

                  {/* Details Section */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 space-y-3"
                      >
                        {card.details.map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40"
                          >
                            <div className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mt-2 flex-shrink-0" />
                              <div>
                                <span className="font-bold text-gray-800">{detail.label}:</span>
                                <span className="text-gray-700 ml-2">{detail.value}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        
                        {/* Close Button */}
                        <motion.button
                          className={`w-full py-3 bg-gradient-to-r ${card.color} text-white rounded-xl font-semibold mt-4 shadow-lg hover:shadow-xl transition-all`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Close Details
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Accent */}
                  <div className={`h-2 bg-gradient-to-r ${card.color}`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;