"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // WhatsApp number (apna number yahan dalein)
    const whatsappNumber = "919920892689"; // +91 9920892689
    
    // Message format for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Message:* ${formData.message}`;
    
    // WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  // Floating orbs animation
  const orbVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 -z-10" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -z-10 animate-pulse" />

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-syne text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl font-montserrat text-white/90 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help elevate your business to new heights
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left section - Contact Info & Image */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Image Card */}
            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center">
                <Image
                  src="/path.png"
                  alt="Contact Illustration"
                  width={400}
                  height={400}
                  className="object-contain max-w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <motion.div
                className="bg-white/95 backdrop-blur-lg border border-white/40 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg mb-1">Email Us</p>
                    <a 
                      href="mailto:growthhead@nexcorealliance.com"
                      className="text-gray-600 hover:text-cyan-600 transition-colors"
                    >
                      growthhead@nexcorealliance.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/95 backdrop-blur-lg border border-white/40 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg mb-1">Call Us</p>
                    <a 
                      href="tel:+919594402822"
                      className="text-gray-600 hover:text-cyan-600 transition-colors"
                    >
                      +91 9594402822
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/95 backdrop-blur-lg border border-white/40 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg mb-1">Visit Us</p>
                    <p className="text-gray-600">Off BKC, Mumbai, India 400070</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right section - Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-2">
                <h3 className="text-3xl font-bold font-syne text-gray-800">
                  Send us a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you shortly
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 space-y-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-500" />
                  <p className="text-2xl font-bold text-gray-800">Message Sent!</p>
                  <p className="text-gray-600 text-center">
                    Your message has been sent via WhatsApp. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your project or inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                        required
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send via WhatsApp
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactPage;