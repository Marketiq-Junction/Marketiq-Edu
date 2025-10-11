"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";


const InstagramReelsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedReel, setSelectedReel] = useState(null);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const reelsData = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop",
      category: "Workshops",
      title: "React Masterclass Highlights",
      views: "12.5K",
      likes: "1.2K",
      comments: 89,
      date: "2 days ago",
      username: "@marketiq_junction",
      reelLink:
        "https://www.instagram.com/reel/DOtb2wSiMsJ/?igsh=MWllaW01NnZ5c3NvMQ==",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=800&fit=crop",
      category: "Student Success",
      title: "Placement Success Stories",
      views: "25.3K",
      likes: "2.8K",
      comments: 156,
      date: "5 days ago",
      username: "@marketiq_junction",
      reelLink:
        "https://www.instagram.com/reel/DORO9yEiDeV/?igsh=MWJ2bG85aTV3OTVzcw==",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=800&fit=crop",
      category: "Campus Life",
      title: "A Day in Our Campus",
      views: "18.7K",
      likes: "1.9K",
      comments: 124,
      date: "1 week ago",
      username: "@marketiq_junction",
      reelLink:
        "https://www.instagram.com/reel/DOAcJkBEeQo/?igsh=eGZkYnFxaW5lOTRv",
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop",
      category: "Workshops",
      title: "AI/ML Bootcamp Experience",
      views: "32.1K",
      likes: "3.5K",
      comments: 203,
      date: "3 days ago",
      username: "@marketiq_junction",
      reelLink:
        "https://www.instagram.com/reel/DN5l6wZCCPU/?igsh=emJ3Z2hvYnVhbjBx",
    },
    {
      id: 5,
      thumbnail:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=800&fit=crop",
      category: "Events",
      title: "Tech Fest 2024 Recap",
      views: "45.2K",
      likes: "4.7K",
      comments: 312,
      date: "1 week ago",
      username: "@marketiq_junction",
      reelLink:
        "https://www.instagram.com/reel/DNaG5jqIXcO/?igsh=bjM4ZGdvb3Z1a3Ex",
    },
    {
      id: 6,
      thumbnail:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=800&fit=crop",
      category: "Student Success",
      title: "Student Journey - Zero to Hero",
      views: "28.9K",
      likes: "3.1K",
      comments: 187,
      date: "4 days ago",
      username: "@marketiq_junction",
      reelLink:
        "https://www.instagram.com/reel/DMpJZTEIiSh/?igsh=MWM2eXhjZzU3bTBtNQ==",
    },
    {
      id: 7,
      thumbnail:
        "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&h=800&fit=crop",
      category: "Projects",
      title: "Amazing Student Projects",
      views: "21.6K",
      likes: "2.3K",
      comments: 145,
      date: "6 days ago",
      username: "@marketiq_junction",
      reelLink:
        "https://www.instagram.com/reel/DMQPn0lIOmN/?igsh=Mm5jMTU4OG8yajF6",
    },
    {
      id: 8,
      thumbnail:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=800&fit=crop",
      category: "Workshops",
      title: "Full Stack Development Tips",
      views: "19.4K",
      likes: "2.1K",
      comments: 98,
      date: "1 week ago",
      username: "@marketiq_junction",
      reelLink:
        "https://www.instagram.com/reel/DMPM-JNoSGl/?igsh=Y3hmamtiazBvd2Ew",
    },
    {
      id: 9,
      thumbnail:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop",
      category: "Campus Life",
      title: "Behind The Scenes",
      views: "15.8K",
      likes: "1.7K",
      comments: 76,
      date: "3 days ago",
      username: "@marketiq_junction",
      reelLink:
        "https://www.instagram.com/reel/DL_xKrXoPiX/?igsh=bXhvb3Z6OWVmZWNj",
    },
    {
      id: 10,
      thumbnail:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=800&fit=crop",
      category: "Events",
      title: "Hackathon Highlights",
      views: "38.5K",
      likes: "4.2K",
      comments: 267,
      date: "2 weeks ago",
      username: "@marketiq_junction",
      reelLink:
        "https://www.instagram.com/reel/DLrjD8qoblT/?igsh=d3dqdHh3djRtcDY=",
    },
  ];

  const filteredReels =
    selectedCategory === "All"
      ? reelsData
      : reelsData.filter((reel) => reel.category === selectedCategory);

  const handleReelClick = (reel, index) => {
    setSelectedReel(reel);
    setCurrentReelIndex(index);
  };

  const handleNextReel = () => {
    const nextIndex = (currentReelIndex + 1) % filteredReels.length;
    setCurrentReelIndex(nextIndex);
    setSelectedReel(filteredReels[nextIndex]);
  };

  const handlePrevReel = () => {
    const prevIndex =
      currentReelIndex === 0 ? filteredReels.length - 1 : currentReelIndex - 1;
    setCurrentReelIndex(prevIndex);
    setSelectedReel(filteredReels[prevIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
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
            Our Instagram{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Reels
            </span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl">
            Catch the latest moments and highlights from our community
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            "All",
            "Workshops",
            "Student Success",
            "Campus Life",
            "Events",
            "Projects",
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

        {/* Instagram Reels Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filteredReels.map((reel, index) => (
            <motion.div
              key={reel.id}
              variants={itemVariants}
              onClick={() => handleReelClick(reel, index)}
              className="cursor-pointer group relative aspect-[9/16]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                {/* Thumbnail */}
                <Image
  src={reel.thumbnail}
  alt={reel.title}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
/>


                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play
                      className="w-8 h-8 text-cyan-500 ml-1"
                      fill="currentColor"
                    />
                  </motion.div>
                </div>

                {/* Views Counter */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Play className="w-3 h-3 text-white" fill="white" />
                  <span className="text-white text-xs font-semibold">
                    {reel.views}
                  </span>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white text-xs mb-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-[10px] font-bold">
                      MJ
                    </div>
                    <span className="font-semibold">{reel.username}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
                    {reel.title}
                  </h3>
                  <div className="flex items-center gap-3 text-white/90 text-xs">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{reel.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{reel.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-cyan-600 text-[10px] font-bold">
                    {reel.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-6 text-center shadow-xl">
            <div className="text-4xl font-black text-gray-800 mb-2">
              {reelsData.length}+
            </div>
            <div className="text-gray-700 font-semibold">Total Reels</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-6 text-center shadow-xl">
            <div className="text-4xl font-black text-gray-800 mb-2">250K+</div>
            <div className="text-gray-700 font-semibold">Total Views</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-6 text-center shadow-xl">
            <div className="text-4xl font-black text-gray-800 mb-2">25K+</div>
            <div className="text-gray-700 font-semibold">Total Likes</div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Reel Modal (Instagram Style) */}
<AnimatePresence>
  {selectedReel && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      onClick={() => setSelectedReel(null)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrevReel();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNextReel();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Close Button */}
      <button
        onClick={() => setSelectedReel(null)}
        className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Reel Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-md w-full h-[80vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video/Image */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
          {selectedReel.reelLink ? (
            <iframe
              src={`https://www.instagram.com/reel/${selectedReel.reelLink.split('/reel/')[1].split('/')[0]}/embed`}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <Image
  src={selectedReel.thumbnail}
  alt={selectedReel.title}
  fill
  className="object-cover rounded-3xl shadow-2xl"
/>
          )}

          {!selectedReel.reelLink && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-16 h-16 text-white" />
            </div>
          )}
        </div>

        {/* Top Info */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
              MJ
            </div>
            <span className="text-white font-semibold">
              {selectedReel.username}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted(!isMuted);
            }}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white font-bold text-lg mb-2">
            {selectedReel.title}
          </h3>
          <p className="text-white/80 text-sm mb-4">{selectedReel.date}</p>

          <div className="flex items-center gap-4 text-white mb-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">{selectedReel.likes}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">{selectedReel.comments}</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              <span className="font-semibold">{selectedReel.views}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <motion.button
              className="flex-1 bg-white text-cyan-500 py-3 rounded-full font-bold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Heart className="w-5 h-5" />
              <span>Like</span>
            </motion.button>
            <motion.button
              className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-full font-bold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              <span>Share</span>
            </motion.button>
            <motion.button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bookmark className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
   
};

export default InstagramReelsGallery;
