"use client"
import { LocationOn, Phone, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";

const Getintouch = () => {
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

    // WhatsApp Business Number (replace with your number)
    const phoneNumber = "919594402916";
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative py-16 md:py-24 overflow-hidden"
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

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Info Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="font-syne text-4xl md:text-5xl font-bold text-white">
              Get in Touch
            </h2>
            <p className="font-montserrat text-white/90 leading-relaxed text-base md:text-lg">
              We&apos;d love to hear from you! Whether you have questions about our
              services or want to discuss your digital marketing needs, feel free to
              reach out. Our team is ready to assist you on your journey to success!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 pt-6">
              {/* Address Card */}
              <motion.a
                href="https://www.google.com/maps?q=Off+BKC,+Mumbai,+India+400070"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start bg-white/80 backdrop-blur-md border border-white/40 rounded-lg p-4 hover:bg-white/90 transition group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <LocationOn className="text-cyan-600 mr-4 flex-shrink-0 group-hover:scale-110 transition" />
                <div>
                  <p className="font-syne text-gray-800 font-bold">Location</p>
                  <p className="font-montserrat text-gray-600">Off BKC, Mumbai, India 400070</p>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a
                href="tel:+919594402822"
                className="flex items-start bg-white/80 backdrop-blur-md border border-white/40 rounded-lg p-4 hover:bg-white/90 transition group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="text-cyan-600 mr-4 flex-shrink-0 group-hover:scale-110 transition" />
                <div>
                  <p className="font-syne text-gray-800 font-bold">Phone</p>
                  <p className="font-montserrat text-gray-600">+91 9594402822</p>
                </div>
              </motion.a>

              {/* Email Card */}
              <motion.a
                href="mailto:growthhead@nexcorealliance.com"
                className="flex items-start bg-white/80 backdrop-blur-md border border-white/40 rounded-lg p-4 hover:bg-white/90 transition group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Email className="text-cyan-600 mr-4 flex-shrink-0 group-hover:scale-110 transition" />
                <div>
                  <p className="font-syne text-gray-800 font-bold">Email</p>
                  <p className="font-montserrat text-gray-600">growthhead@nexcorealliance.com</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 space-y-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-syne text-2xl font-bold text-gray-800 mb-6">Drop a Line</h3>

              <div>
                <label className="block font-montserrat text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition"
                  required
                />
              </div>

              <div>
                <label className="block font-montserrat text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition"
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
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/40 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </motion.button>

              {submitted && (
                <motion.p
  className="text-center text-green-600 font-montserrat font-semibold"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Thank you! We&apos;ll get back to you soon.
</motion.p>

              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Getintouch;