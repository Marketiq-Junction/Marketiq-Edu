"use client";
import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between bg-[#116EB3] mt-12 text-white p-6 md:p-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="w-full md:w-1/2 space-y-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-syne">Contact Us</h2>
        <p className="text-base md:text-lg font-montserrat">
          We&apos;re here to help you elevate your business! Reach out to us
          today for personalized support and to learn more about our digital
          marketing solutions.
        </p>
      </motion.div>
      <motion.div
        className="w-full mt-4 md:w-1/2 flex justify-center md:justify-end"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <Image
          src="/5.jpg"
          alt="Contact Illustration"
          width={400}
          height={400}
          className="object-contain max-w-full h-auto rounded-xl"
        />
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
