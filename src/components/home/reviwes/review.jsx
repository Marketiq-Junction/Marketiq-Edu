"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Review = () => {
  const cards = [
    { id: 1, title: "Individualized Mentorship", description: "Our mentors and instructors provide guidance at every stage of your learning journey.", image: "/review profiles/1.jpg" },
    { id: 2, title: "Real-World Projects", description: "Each course includes hands-on projects, mirroring real industry challenges and solutions.", image: "/juned.jpg" },
    { id: 3, title: "Flexible Learning", description: "Learn at your own pace with flexible learning options that fit your schedule.", image: "/sanad.jpg" },
    { id: 4, title: "Career Support", description: "Get access to career support services, including resume reviews and mock interviews.", image: "/harsh.jpg" },
    { id: 5, title: "Industry Certifications", description: "Earn industry-recognized certifications that enhance your resume and skillset.", image: "/review profiles/5.jpg" },
    { id: 6, title: "Global Community", description: "Join a global community of learners and professionals from diverse backgrounds.", image: "/review profiles/6.jpg" },
    { id: 7, title: "Expert Instructors", description: "Learn from experienced instructors who bring real-world knowledge to the classroom.", image: "/review profiles/7.jpg" },
    { id: 8, title: "Cutting-Edge Curriculum", description: "Stay updated with the latest industry trends through our cutting-edge curriculum.", image: "/review profiles/8.jpg" },
    { id: 9, title: "Networking Opportunities", description: "Connect with industry leaders and fellow students to expand your professional network.", image: "/review profiles/9.jpg" },
    { id: 10, title: "Personalized Learning Paths", description: "Tailor your learning experience with personalized paths that suit your career goals.", image: "/review profiles/10.jpg" },
    { id: 11, title: "Access to Exclusive Resources", description: "Gain access to a wealth of resources, including e-books, webinars, and more.", image: "/review profiles/11.jpg" },
    { id: 12, title: "Feedback and Improvement", description: "Receive constructive feedback to help you improve and excel in your learning journey.", image: "/review profiles/12.jpg" },
    { id: 13, title: "Collaborative Learning", description: "Engage with peers to exchange ideas and enhance your learning experience.", image: "/review profiles/1.jpg" },
    { id: 14, title: "Modern Tools", description: "Get hands-on experience with the latest tools and technologies in your field.", image: "/juned.jpg" },
    { id: 15, title: "Custom Curriculum", description: "Enjoy a curriculum tailored to meet current industry demands.", image: "/sanad.jpg" },
    { id: 16, title: "Practical Exposure", description: "Gain practical exposure through real-world scenarios and case studies.", image: "/harsh.jpg" },
    { id: 17, title: "Career-Oriented Training", description: "Prepare for your dream job with our career-focused curriculum.", image: "/juned.jpg" },
    { id: 18, title: "Global Community", description: "Connect with a diverse group of learners and expand your professional network.", image: "/review profiles/1.jpg" },
    { id: 19, title: "Skill Assessments", description: "Evaluate your skills with regular assessments and progress tracking.", image: "/review profiles/7.jpg" },
    { id: 20, title: "Diverse Courses", description: "Choose from a wide range of courses designed for various career paths.", image: "/review profiles/8.jpg" },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const startIndex = currentPage * cardsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
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
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-white tracking-wide">
              What Our Students Say
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            Student{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Cards Container with Navigation */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Previous Button */}
          <motion.button
            onClick={() => {
              if (typeof window !== "undefined" && typeof gtag === "function") {
                gtag("event", "carousel_previous_click", {
                  event_category: "interaction",
                  event_label: "Previous Button",
                  value: currentPage,
                });
              }
              handlePrevious();
            }}
            disabled={currentPage === 0}
            className={`w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center transition-all shadow-lg ${
              currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white hover:scale-110'
            }`}
            whileHover={currentPage !== 0 ? { scale: 1.1 } : {}}
            whileTap={currentPage !== 0 ? { scale: 0.9 } : {}}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="wait">
              {currentCards.map((card) => (
                <motion.div
                  key={card.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group cursor-pointer"
                  onClick={() => {
                    if (typeof window !== "undefined" && typeof gtag === "function") {
                      gtag("event", "card_click", {
                        event_category: "engagement",
                        event_label: card.title,
                        value: card.id,
                      });
                    }
                  }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Quote Icon */}
                    <motion.div
                      className="absolute top-4 right-4 bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-xl shadow-lg"
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Profile Section */}
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg mr-4">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg">
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-4 pt-4 border-t-2 border-cyan-200">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="text-yellow-400 text-lg">★</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Next Button */}
          <motion.button
            onClick={() => {
              if (typeof window !== "undefined" && typeof gtag === "function") {
                gtag("event", "carousel_next_click", {
                  event_category: "interaction",
                  event_label: "Next Button",
                  value: currentPage + 1,
                });
              }
              handleNext();
            }}
            disabled={currentPage >= totalPages - 1}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
              currentPage >= totalPages - 1
                ? 'bg-white/30 opacity-30 cursor-not-allowed border-2 border-white/20'
                : 'bg-white text-cyan-500 hover:scale-110'
            }`}
            whileHover={currentPage < totalPages - 1 ? { scale: 1.1 } : {}}
            whileTap={currentPage < totalPages - 1 ? { scale: 0.9 } : {}}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Navigation Dots */}
        <motion.div
          className="flex justify-center mt-8 gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'bg-white w-8 h-3'
                  : 'bg-white/40 w-3 h-3 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Review;