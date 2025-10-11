"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Send } from "lucide-react";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm reaching out from your website.
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;

    // WhatsApp Business Number
    const phoneNumber = "919594402822"; // Replace with your WhatsApp number in international format
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      value: "+91 9594402822",
      href: "tel:+919594402822",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      value: "growthhead@nexcorealliance.com",
      href: "mailto:growthhead@nexcorealliance.com",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      value: "Off BKC, Mumbai, India 400070",
      href: "https://maps.app.goo.gl/9c8Gij4NMeGtGJM86",
    },
  ];

  const footerLinks = {
    Company: ["About Us", "Services", "Blog", "Careers"],
    Support: ["Help Center", "Contact Us", "FAQ", "Documentation"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "License"],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== NAVBAR ===== */}
      
      <Navbar/>

      {/* ===== MAIN CONTENT ===== */}
      <motion.section
        className="relative flex-grow flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 mt-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 -z-10" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-white/20 rounded-full filter blur-3xl"
          variants={orbVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-cyan-300/20 rounded-full filter blur-3xl"
          variants={orbVariants}
          animate="animate"
          transition={{ duration: 7, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-teal-300/20 rounded-full filter blur-3xl"
          variants={orbVariants}
          animate="animate"
          transition={{ duration: 8, delay: 2 }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Header */}
          <motion.div
            className="text-center mb-10 sm:mb-14 md:mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 mb-4 sm:mb-6 font-syne"
              variants={textVariants}
              custom={0}
            >
              Contact Us
            </motion.h1>
            <motion.p
  className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto font-montserrat leading-relaxed"
  variants={textVariants}
  custom={1}
>
  We&apos;d love to hear from you! Reach out to us anytime for inquiries,
  support, or collaborations. Our team is ready to assist you.
</motion.p>

          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-14 md:mb-16"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                target={info.title === "Visit Us" ? "_blank" : undefined}
                rel={info.title === "Visit Us" ? "noopener noreferrer" : undefined}
                className="bg-white/80 backdrop-blur-md border border-white/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/90 transition group"
                variants={cardVariants}
                custom={idx}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition duration-300">
                  <div className="text-white">{info.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-syne font-bold text-gray-800 mb-2 sm:mb-3">
                  {info.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 font-montserrat hover:text-blue-600 transition">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-md border border-white/40 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-gray-800 mb-6 sm:mb-8">
                Send us a Message
              </h2>

              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block font-montserrat text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block font-montserrat text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block font-montserrat text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Message Subject"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block font-montserrat text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 sm:py-4 px-6 rounded-lg font-syne font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  {submitted ? "Message Sent! ✓" : "Send via WhatsApp"}
                </motion.button>

                {submitted && (
                  <motion.p
                    className="text-center text-green-600 font-montserrat font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Message sent successfully! Redirecting to WhatsApp...
                  </motion.p>
                )}
              </div>
            </motion.form>

            {/* Info Section */}
            <motion.div
              className="bg-white/80 backdrop-blur-md border border-white/40 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-syne font-bold text-gray-800 mb-3 sm:mb-4">
                  Why Contact Us?
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-montserrat leading-relaxed">
  Whether you&apos;re interested in our services, have questions about our programs, or want to explore partnership opportunities, we&apos;re here to help. Our dedicated team responds to all inquiries promptly.
</p>

              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-syne font-bold text-gray-800 mb-3 sm:mb-4">
                  Response Time
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-montserrat leading-relaxed">
                  We typically respond to messages within 24 hours. For urgent matters, please call us directly or reach out via WhatsApp.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-white/40">
                <h4 className="text-lg sm:text-xl font-syne font-bold text-gray-800 mb-3 sm:mb-4">
                  Business Hours
                </h4>
                <ul className="text-sm sm:text-base md:text-lg text-gray-700 font-montserrat space-y-2">
                  <li><strong>Monday - Saturday:</strong> 8:00 AM - 8:00 PM</li>
                  
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== FOOTER ===== */}
      <Footer/>
    </div>
  );
};

export default Contact;