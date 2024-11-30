"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const PayAfterPlacement = () => {
  // Get the scroll progress
  const { scrollYProgress } = useScroll();

  // Create transformations for animations
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]); // Fades in as you scroll
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]); // Moves upward as you scroll

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-10 text-black mb-8">
      {/* Left Side Image */}
      <motion.div
        className="w-full md:w-1/4 rounded-lg overflow-hidden mb-6 md:mb-0"
        style={{
          opacity, // Fades in
          y: translateY, // Moves upward
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        whileHover={{ scale: 1.05, rotate: 1 }} // Hover effect
      >
        <Image
          src="/llogo.png" // Replace with your image path
          alt="Pay After Placement"
          layout="responsive"
          width={300}
          height={300}
          className="object-cover"
        />
      </motion.div>

      {/* Right Side Texts */}
      <motion.div
        className="w-full md:w-3/5 md:ml-16 text-left "
        whileHover={{ scale: 1.05, color: "#ffffff" }}
        style={{
          opacity, // Fades in
          y: translateY, // Moves upward
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        initial={{ opacity: 0, x: 100 }} // Start off-screen
        animate={{ opacity: 1, x: 0 }} // Move into view
      >
        <h4 className="text-3xl md:text-5xl text-black font-bold font-syne mb-4 md:mb-8">
          100% Placement <br className="hidden md:block" /> Assistance
        </h4>
        <motion.p
          className="text-sm md:text-xl leading-relaxed font-syne text-black "
        >
         At Education.MarketJunction, your success is our priority! We offer:
<br />Guaranteed Support Until Placement:  Our team helps you until you land a job.
<br />Focus on Learning: Concentrate on developing your skills while we handle job hunting.
<br />Personalized Career Guidance: Get mentorship, resume building, and interview prep.
<br />Industry Connections: Access top companies and job opportunities aligned with your goals.
<br />Let us support your journey to success! 




        </motion.p>
      </motion.div>
    </div>
  );
};

export default PayAfterPlacement;
