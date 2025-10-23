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

      {/* 🧠 Core Digital Marketing Roles */}
      <option value="digital-marketing">Digital Marketing Specialist</option>
      <option value="seo">SEO Expert</option>
      <option value="social-media">Social Media Manager</option>
      <option value="content">Content Marketing Specialist</option>
      <option value="ppc">PPC Specialist</option>
      <option value="email">Email Marketing Expert</option>

      {/* 📈 Additional Marketing Roles */}
      <option value="brand-manager">Brand Manager</option>
      <option value="marketing-strategist">Marketing Strategist</option>
      <option value="growth-marketer">Growth Marketer</option>
      <option value="performance-marketing">Performance Marketing Manager</option>
      <option value="affiliate-marketing">Affiliate Marketing Executive</option>
      <option value="product-marketing">Product Marketing Manager</option>
      <option value="influencer-marketing">Influencer Marketing Specialist</option>
      <option value="marketing-analyst">Marketing Data Analyst</option>
      <option value="crm-specialist">CRM & Retention Specialist</option>
      <option value="campaign-manager">Campaign Manager</option>
      <option value="copywriter">Marketing Copywriter</option>
      <option value="communications">Communications Manager</option>
      <option value="market-research">Market Research Analyst</option>
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
          
        </div>

        {/* Bottom Stats */}
        
      </div>
    </section>
  );
};

export default HireFromUs;