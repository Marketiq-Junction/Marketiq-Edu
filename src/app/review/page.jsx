"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, ThumbsUp, Calendar, User } from "lucide-react";
import Navbar from "@/components/navbar/navbar";
const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [expandedReview, setExpandedReview] = useState(null);

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      review: "Absolutely transformative experience! The instructors are industry experts who genuinely care about student success. The curriculum is up-to-date and the hands-on projects prepared me perfectly for my job.",
      avatar: "PS",
      helpful: 24,
      course: "Full Stack Development",
      reviewRoman: "Absolutely transformative experience! Instructors industry experts hain jo student success ke liye genuinely care karte hain. Curriculum up-to-date hai aur hands-on projects ne mujhe perfectly job ke liye prepare kiya."
    },
    {
      id: 2,
      name: "Rahul Verma",
      rating: 5,
      date: "1 month ago",
      review: "Best decision I made for my career! The placement support team went above and beyond. Got placed in a top company within 2 months of completing the course. Highly recommend!",
      avatar: "RV",
      helpful: 31,
      course: "Data Science",
      reviewRoman: "Best decision I made for career! Placement support team above and beyond gaya. 2 months mein top company mein placement mila. Highly recommend!"
    },
    {
      id: 3,
      name: "Sneha Patel",
      rating: 4,
      date: "3 weeks ago",
      review: "Great learning environment with modern infrastructure. The mentors are always available to help. Would have given 5 stars if the course duration was slightly longer.",
      avatar: "SP",
      helpful: 18,
      course: "UI/UX Design",
      reviewRoman: "Great learning environment aur modern infrastructure. Mentors hamesha available hain help ke liye. Course duration thodi lambi hoti to 5 stars deta."
    },
    {
      id: 4,
      name: "Amit Kumar",
      rating: 5,
      date: "1 week ago",
      review: "Exceptional quality of teaching and real-world project exposure. The AI/ML course covered everything from basics to advanced concepts. The career guidance was invaluable.",
      avatar: "AK",
      helpful: 42,
      course: "AI/ML",
      reviewRoman: "Exceptional teaching quality aur real-world project exposure. AI/ML course basics se advanced concepts tak cover karta hai. Career guidance invaluable thi."
    },
    {
      id: 5,
      name: "Meera Reddy",
      rating: 5,
      date: "2 months ago",
      review: "Life-changing program! Coming from a non-tech background, I was nervous, but the supportive community and excellent teaching made everything so clear. Now working as a software developer!",
      avatar: "MR",
      helpful: 56,
      course: "Full Stack Development",
      reviewRoman: "Life-changing program! Non-tech background se aayi thi, nervous thi, lekin supportive community aur excellent teaching sab clear kar diya. Ab software developer hoon!"
    },
    {
      id: 6,
      name: "Vikram Singh",
      rating: 4,
      date: "3 weeks ago",
      review: "Solid curriculum and good instructors. The networking opportunities with industry professionals were excellent. Campus facilities are top-notch.",
      avatar: "VS",
      helpful: 15,
      course: "DevOps Engineering",
      reviewRoman: "Solid curriculum aur ache instructors. Industry professionals ke saath networking opportunities excellent thi. Campus facilities top-notch hain."
    },
    {
      id: 7,
      name: "Anjali Desai",
      rating: 5,
      date: "1 month ago",
      review: "Outstanding experience from start to finish! The personalized mentorship really made a difference. Interview preparation sessions were extremely helpful. Thank you team!",
      avatar: "AD",
      helpful: 38,
      course: "Full Stack Development",
      reviewRoman: "Outstanding experience start se finish tak! Personalized mentorship ne real difference banaya. Interview prep sessions bahut helpful the. Thank you team!"
    },
    {
      id: 8,
      name: "Karthik Nair",
      rating: 5,
      date: "2 weeks ago",
      review: "Best institute for practical learning! Every concept is taught with real-world examples. The projects in my portfolio directly helped me land my dream job. Worth every penny!",
      avatar: "KN",
      helpful: 29,
      course: "Mobile App Development",
      reviewRoman: "Best institute practical learning ke liye! Har concept real-world examples ke saath taught hai. Projects ne directly dream job dilayi. Worth every penny!"
    },
    {
      id: 9,
      name: "Divya Iyer",
      rating: 4,
      date: "1 month ago",
      review: "Very impressed with the course structure and teaching methodology. The only improvement I'd suggest is having more weekend batches for working professionals.",
      avatar: "DI",
      helpful: 21,
      course: "Data Analytics",
      reviewRoman: "Very impressed course structure aur teaching methodology se. Suggestion: working professionals ke liye weekend batches aur hone chahiye."
    },
    // 🆕 New Reviews
    {
      id: 10,
      name: "Rohan Mehta",
      rating: 5,
      date: "3 days ago",
      review: "Amazing learning platform! The projects are industry-relevant and mentors guide you at every step. Gained confidence to tackle real-world challenges.",
      avatar: "RM",
      helpful: 12,
      course: "Cloud Computing",
      reviewRoman: "Amazing learning platform! Projects industry-relevant hain aur mentors har step pe guide karte hain. Real-world challenges handle karne ka confidence mila."
    },
    {
      id: 11,
      name: "Sana Khan",
      rating: 5,
      date: "1 week ago",
      review: "Loved the interactive sessions and hands-on labs. It made understanding complex concepts so much easier. Truly recommend for anyone wanting to upgrade skills.",
      avatar: "SK",
      helpful: 19,
      course: "Cybersecurity",
      reviewRoman: "Interactive sessions aur hands-on labs bohot ache the. Complex concepts samajhna easy hua. Skills upgrade karna chahte ho toh highly recommend!"
    },
    {
      id: 12,
      name: "Aditya Rao",
      rating: 4,
      date: "2 weeks ago",
      review: "Good exposure to industry tools and best practices. Would appreciate more live project examples in advanced modules.",
      avatar: "AR",
      helpful: 14,
      course: "DevOps Engineering",
      reviewRoman: "Industry tools aur best practices ka good exposure. Advanced modules me aur live project examples honge toh aur better hoga."
    }
];

  useEffect(() => {
    const handleResize = () => {
      setVisibleReviews(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedRating]);

  const filteredReviews = selectedRating === "All Ratings"
    ? reviews
    : reviews.filter(review => review.rating === parseInt(selectedRating.split(" ")[0]));

  const totalReviews = filteredReviews.length;
  const maxIndex = Math.max(0, totalReviews - visibleReviews);

  const getVisibleReviews = () => {
    const endIndex = Math.min(currentIndex + visibleReviews, totalReviews);
    return filteredReviews.slice(currentIndex, endIndex);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : maxIndex);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex < maxIndex ? currentIndex + 1 : 0);
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
  const totalHelpful = reviews.reduce((acc, r) => acc + r.helpful, 0);

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

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 min-h-screen py-20 px-4 md:px-8">
      <Navbar />
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

      <div className="max-w-7xl mx-auto relative z-10 mt-10">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Students
            </span>
            <br />
            Say About Us
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Real reviews from real students
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-6 shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-black text-gray-800 mb-2">{averageRating}</div>
              <div className="flex justify-center gap-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="text-gray-700 font-semibold">Average Rating</div>
            </motion.div>

            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-6 shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-black text-gray-800 mb-2">{reviews.length}+</div>
              <div className="text-gray-700 font-semibold">Total Reviews</div>
            </motion.div>

            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-6 shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-black text-gray-800 mb-2">{totalHelpful}+</div>
              <div className="text-gray-700 font-semibold">Helpful Votes</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[].map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedRating(filter)}
              className={`px-6 py-3 text-sm font-semibold rounded-full border-2 transition-all duration-300 ${
                selectedRating === filter
                  ? "bg-white text-cyan-500 border-white shadow-lg"
                  : "bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Reviews Grid */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {reviews.map((review) => (
    <motion.div
      key={review.id}
      variants={itemVariants}
      onClick={() =>
        setExpandedReview(
          review.id === expandedReview ? null : review.id
        )
      }
      className="cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10">
          <Quote className="w-16 h-16 text-gray-800" />
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-4 relative z-10">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
            {review.avatar}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-800 text-lg">{review.name}</h4>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Calendar className="w-3 h-3" />
              <span>{review.date}</span>
            </div>
            <div className="flex gap-1">{renderStars(review.rating)}</div>
          </div>
        </div>

        {/* Course Badge */}
        <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
          {review.course}
        </div>

        {/* Review Text */}
        <p
          className={`text-gray-700 leading-relaxed mb-4 flex-1 ${
            expandedReview === review.id ? "" : "line-clamp-4"
          }`}
        >
          {review.review}
        </p>

        {/* Expand Indicator */}
        {review.review.length > 150 && (
          <motion.div
            className="text-cyan-600 text-sm font-semibold"
            animate={{
              opacity: expandedReview === review.id ? 0 : 1,
            }}
          >
            {expandedReview !== review.id && "Click to read more →"}
          </motion.div>
        )}

        {/* Footer */}
        <div className="flex items-center gap-2 text-gray-600 text-sm pt-4 border-t-2 border-cyan-100 mt-auto">
          <ThumbsUp className="w-4 h-4" />
          <span className="font-semibold">
            {review.helpful} people found this helpful
          </span>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

        {/* Navigation Buttons */}
        {/* {totalReviews > visibleReviews && (
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
        )} */}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="bg-white text-cyan-500 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Write Your Review
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default GoogleReviews;