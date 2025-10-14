"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaPhone, FaBriefcase } from "react-icons/fa";
import Image from "next/image";
const HireFromUs = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    jobRole: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const stats = [
    {
      number: "1857",
      label: "Digital Marketing Specialist",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      position: "top-0 right-[15%]",
    },
    {
      number: "676",
      label: "SEO Expert",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      position: "top-[25%] right-0",
    },
    {
      number: "1608",
      label: "Social Media Manager",
      color: "text-teal-600",
      bgColor: "bg-teal-100",
      position: "bottom-[25%] right-0",
    },
    {
      number: "1455",
      label: "Content Marketing Specialist",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      position: "bottom-0 right-[15%]",
    },
    {
      number: "1040",
      label: "PPC Specialist",
      color: "text-cyan-500",
      bgColor: "bg-cyan-100",
      position: "bottom-0 left-[15%]",
    },
  ];

  const bottomStats = [
    {
      label: "Passout Year (2024-25)",
      value: "8,652+ learners",
      color: "text-blue-600",
    },
    {
      label: "Candidate Experience",
      value: "0 - 3 years",
      color: "text-cyan-600",
    },
    {
      label: "Our Hiring Rate",
      value: "3 learners/day",
      color: "text-teal-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-800 dark:via-cyan-900/20 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <motion.div
          className="mb-8 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Looking For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
                Talented Marketing Professionals
              </span>{" "}
              To Join Your Company?
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Hire the best{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold">
                job-ready digital marketers
              </span>{" "}
              in just few clicks.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Company Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                    required
                  />
                  <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                />
              </div>

              {/* Job Role */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Job Role<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all appearance-none"
                    required
                  >
                    <option value="">Enter job role you are hiring for</option>
                    <option value="digital-marketing">Digital Marketing Specialist</option>
                    <option value="seo">SEO Expert</option>
                    <option value="social-media">Social Media Manager</option>
                    <option value="content">Content Marketing Specialist</option>
                    <option value="ppc">PPC Specialist</option>
                    <option value="email">Email Marketing Expert</option>
                  </select>
                  <FaBriefcase className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 hover:from-blue-700 hover:via-cyan-600 hover:to-teal-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Request
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Stats Visualization */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-[600px]">
              {/* Central Image with Hexagon Border */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  {/* Hexagon Background */}
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 400 400"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <defs>
                      <linearGradient
                        id="hexGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 200 20 L 350 100 L 350 260 L 200 340 L 50 260 L 50 100 Z"
                      fill="none"
                      stroke="url(#hexGradient)"
                      strokeWidth="8"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* Person Image */}
                  <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/api/placeholder/256/320"
                      alt="Professional"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* "Need Skilled Manpower?" Bubble */}
                  <motion.div
                    className="absolute -top-8 -left-16 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-xl border-2 border-cyan-200 dark:border-cyan-800"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      Need Skilled
                      <br />
                      Marketers ?
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Floating Stats Hexagons */}
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${stat.position}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    y: { duration: 3, repeat: Infinity, delay: index * 0.3 },
                  }}
                >
                  <div className="relative">
                    {/* Hexagon Shape */}
                    <svg width="140" height="140" viewBox="0 0 140 140">
                      <path
                        d="M 70 10 L 120 40 L 120 90 L 70 120 L 20 90 L 20 40 Z"
                        fill="white"
                        className="drop-shadow-xl"
                      />
                    </svg>

                    {/* Content */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className={`text-4xl font-bold ${stat.color} mb-1`}>
                        {stat.number}
                      </div>
                      <div className="text-xs font-semibold text-gray-700 px-2">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {bottomStats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {stat.label}
              </p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HireFromUs;