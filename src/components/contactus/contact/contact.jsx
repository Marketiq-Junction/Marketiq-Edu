"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  // Floating orbs animation
  const orbVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-teal-300/20 rounded-full filter blur-3xl"
        variants={orbVariants}
        animate="animate"
        transition={{ duration: 8, delay: 2 }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-12">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left content */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-syne text-white">
              Contact Us
            </h2>
            <p className="text-base md:text-lg font-montserrat text-white/90">
              We&apos;re here to help you elevate your business! Reach out to us
              today for personalized support and to learn more about our digital
              marketing solutions.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4 pt-4">
              <motion.div
                className="bg-white/80 backdrop-blur-md border border-white/40 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">marketiqjunction@gmail.com</p>
              </motion.div>
              <motion.div
                className="bg-white/80 backdrop-blur-md border border-white/40 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600">+91 99208 92689</p>
              </motion.div>
              <motion.div
                className="bg-white/80 backdrop-blur-md border border-white/40 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600">Off BKC, Mumbai, India 400070</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content - Form and Image */}
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {/* Image */}
            <motion.div
              className="flex justify-center mt-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <Image
                src="/path.png"
                alt="Contact Illustration"
                width={350}
                height={350}
                className="object-contain max-w-full h-auto rounded-xl"
              />
            </motion.div>

            {/* Contact Form
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-md border border-white/40 rounded-xl p-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition resize-none"
                required
              />
              <motion.button
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form> */}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactPage;