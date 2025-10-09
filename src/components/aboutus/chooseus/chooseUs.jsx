"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Award, Users, Briefcase, TrendingUp, DollarSign } from "lucide-react";

const ChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [visibleCards, setVisibleCards] = useState(3);
  const [selectedCard, setSelectedCard] = useState(null);

  // Card data with icons
  const cards = [
    {
      id: 1,
      icon: Briefcase,
      title: "Real-World Projects for Practical Learning",
      category: "Flexible Learning Options",
      extraInfo:
        "Our courses go beyond theory, offering hands-on experience with real-world projects that mirror industry challenges. Gain the skills and confidence to solve practical problems, just like a professional.",
    },
    {
      id: 2,
      icon: Users,
      title: "Expert Mentorship Tailored to You",
      category: "Expert Mentorship Tailored to You",
      extraInfo:
        "Learn with the guidance of industry experts who provide personalized mentorship. Our one-on-one support ensures you stay on track, overcome obstacles, and achieve your learning goals.",
    },
    {
      id: 3,
      icon: Award,
      title: "Comprehensive Placement Support",
      category: "Comprehensive Placement Support",
      extraInfo:
        "We don't just teach technical skills — we prepare you for the job market with dedicated placement support. From resume building to mock interviews and soft skills training, we equip you to land your dream job.",
    },
    {
      id: 4,
      icon: Star,
      title: "Flexible Learning Options",
      category: "Flexible Learning Options",
      extraInfo:
        "Grow your connections through exclusive events, workshops, and networking opportunities with industry leaders. Develop relationships that can open doors to exciting career prospects.",
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Continuous Learning with Industry-Relevant Courses",
      category: "Expert Mentorship Tailored to You",
      extraInfo:
        "Stay ahead of the curve with courses designed to meet the demands of a rapidly evolving job market. Our curriculum is updated regularly to reflect the latest industry trends and technologies.",
    },
    {
      id: 6,
      icon: DollarSign,
      title: "Affordable, Quality Education",
      category: "Comprehensive Placement Support",
      extraInfo:
        "We believe quality education should be accessible. Our courses offer exceptional value, providing a high-quality learning experience at an affordable price.",
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const filteredCards =
    selectedCategory === "All Category"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  const totalCards = filteredCards.length;
  const maxIndex = Math.max(0, totalCards - visibleCards);

  const getVisibleCards = () => {
    const endIndex = Math.min(currentIndex + visibleCards, totalCards);
    return filteredCards.slice(currentIndex, endIndex);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
        {/* Title Section */}
        <motion.div
          className="text-center md:text-left mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Your Path to{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Guaranteed
            </span>
            <br />
            Success
          </h2>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            "All Category",
            "Expert Mentorship Tailored to You",
            "Comprehensive Placement Support",
            "Flexible Learning Options",
          ].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-sm font-semibold rounded-full border-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-cyan-500 border-white shadow-lg"
                  : "bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 min-h-[400px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={currentIndex}
        >
          {getVisibleCards().map((card) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={itemVariants}
                onClick={() => handleCardClick(card.id)}
                className="cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                layout
              >
                <div
                  className={`relative bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    selectedCard === card.id ? "ring-4 ring-white" : ""
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 min-h-[60px]">
                    {card.title}
                  </h3>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {selectedCard === card.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t-2 border-cyan-200">
                          <p className="text-gray-700 leading-relaxed">
                            {card.extraInfo}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Click indicator */}
                  <motion.div
                    className="mt-4 text-cyan-600 text-sm font-semibold flex items-center gap-2"
                    animate={{
                      opacity: selectedCard === card.id ? 0 : 1,
                    }}
                  >
                    {selectedCard !== card.id && "Click to learn more →"}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Buttons */}
        {totalCards > visibleCards && (
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-gray-700 hover:bg-white transition-all shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white text-cyan-500 flex items-center justify-center hover:shadow-xl transition-all shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChooseUs;