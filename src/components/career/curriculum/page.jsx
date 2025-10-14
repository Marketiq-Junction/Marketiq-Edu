"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBook,
  FaCode,
  FaClock,
  FaDownload,
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaBullhorn,
  FaChartLine,
  FaPencilAlt,
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaSearch,
  FaVideo,
} from "react-icons/fa";

const CurriculumPage = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const curriculumData = {
    title: "Digital Marketing Mastery Curriculum",
    sidebarInfo: {
      heading: "Industry Oriented Curriculum",
      description:
        "Explore each topic in-depth through interactive sessions, real-world campaigns, and tool-based learning. You'll not only understand the theory but also build practical skills that matter in actual marketing roles.",
      stats: [
        { icon: <FaBook />, value: "40+", label: "Case Studies & Campaigns" },
        { icon: <FaCode />, value: "15+", label: "Marketing Tools & Platforms" },
        { icon: <FaClock />, value: "300+", label: "Live Sessions Hours" },
      ],
    },
    modules: [
      {
        title: "Digital Marketing Fundamentals",
        level: "Foundation",
        duration: "2 Weeks",
        topics: [
          "Introduction to Digital Marketing",
          "Marketing Landscape & Trends",
          "Consumer Behavior Analysis",
          "Digital Marketing Strategy",
          "Brand Positioning & Identity",
          "Marketing Funnel & Customer Journey",
        ],
        color: "bg-blue-500",
      },
      {
        title: "Search Engine Optimization (SEO)",
        level: "Core",
        duration: "4 Weeks",
        topics: [
          "On-Page SEO Optimization",
          "Off-Page SEO & Link Building",
          "Technical SEO Fundamentals",
          "Keyword Research & Analysis",
          "SEO Tools (Ahrefs, SEMrush, Moz)",
          "Local SEO & Google My Business",
        ],
        color: "bg-cyan-500",
      },
      {
        title: "Search Engine Marketing (SEM)",
        level: "Core",
        duration: "3 Weeks",
        topics: [
          "Google Ads Fundamentals",
          "Campaign Structure & Setup",
          "Keyword Bidding Strategies",
          "Ad Copywriting & Extensions",
          "Quality Score Optimization",
          "Conversion Tracking & Analytics",
        ],
        color: "bg-teal-500",
      },
      {
        title: "Social Media Marketing",
        level: "Core",
        duration: "4 Weeks",
        topics: [
          "Facebook & Instagram Marketing",
          "LinkedIn B2B Marketing",
          "Twitter/X Marketing Strategy",
          "Social Media Content Creation",
          "Community Management",
          "Influencer Marketing",
        ],
        color: "bg-blue-600",
      },
      {
        title: "Content Marketing",
        level: "Core",
        duration: "3 Weeks",
        topics: [
          "Content Strategy Development",
          "Blog Writing & SEO Content",
          "Video Content Marketing",
          "Infographic Design & Creation",
          "Content Distribution Channels",
          "Content Calendar Planning",
        ],
        color: "bg-cyan-600",
      },
      {
        title: "Email Marketing",
        level: "Specialized",
        duration: "2 Weeks",
        topics: [
          "Email Campaign Strategy",
          "List Building & Segmentation",
          "Email Copywriting",
          "A/B Testing & Optimization",
          "Marketing Automation Tools",
          "Email Analytics & Metrics",
        ],
        color: "bg-teal-600",
      },
      {
        title: "Social Media Advertising",
        level: "Advanced",
        duration: "4 Weeks",
        topics: [
          "Facebook Ads Manager",
          "Instagram Advertising",
          "LinkedIn Ads for B2B",
          "YouTube Video Ads",
          "Retargeting Campaigns",
          "Ad Creative Best Practices",
        ],
        color: "bg-blue-700",
      },
      {
        title: "Google Analytics & Data Analysis",
        level: "Analytics",
        duration: "3 Weeks",
        topics: [
          "Google Analytics 4 (GA4)",
          "Google Tag Manager",
          "Conversion Tracking Setup",
          "Data Interpretation & Reporting",
          "Custom Dashboards",
          "ROI Measurement",
        ],
        color: "bg-cyan-700",
      },
      {
        title: "Marketing Automation",
        level: "Advanced",
        duration: "2 Weeks",
        topics: [
          "HubSpot Marketing Hub",
          "Mailchimp Automation",
          "Lead Nurturing Workflows",
          "CRM Integration",
          "Chatbot Marketing",
          "Marketing Automation Strategy",
        ],
        color: "bg-teal-700",
      },
      {
        title: "E-commerce Marketing",
        level: "Specialized",
        duration: "3 Weeks",
        topics: [
          "Shopify & WooCommerce Marketing",
          "Product Listing Optimization",
          "Shopping Ads (Google & Facebook)",
          "Cart Abandonment Strategies",
          "Marketplace Marketing (Amazon, Flipkart)",
          "Customer Retention Strategies",
        ],
        color: "bg-blue-800",
      },
      {
        title: "Live Projects & Campaign Management",
        level: "Practical",
        duration: "2 Months",
        topics: [
          "Real Client Campaign Management",
          "Multi-Channel Marketing Strategy",
          "Budget Planning & Allocation",
          "Campaign Performance Tracking",
          "Client Reporting & Communication",
          "Portfolio Building",
        ],
        color: "bg-gradient-to-r from-blue-600 to-teal-600",
        isHighlight: true,
      },
    ],
  };

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-800 dark:via-cyan-900/20 dark:to-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white text-sm font-semibold rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            🚀 Complete Roadmap
          </motion.span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {curriculumData.title}
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-800 dark:to-teal-900 rounded-3xl p-8 text-white sticky top-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">
                {curriculumData.sidebarInfo.heading}
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed mb-8">
                {curriculumData.sidebarInfo.description}
              </p>

              {/* Stats */}
              <div className="space-y-4 mb-8">
                {curriculumData.sidebarInfo.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 border border-white/20"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <div className="text-4xl text-blue-200">{stat.icon}</div>
                    <div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download Button */}
              {/* <motion.button
                className="w-full bg-white hover:bg-blue-50 text-blue-600 px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download Brochure
              </motion.button> */}
            </div>
          </motion.div>

          {/* Curriculum Modules */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {curriculumData.modules.map((module, index) => (
                <motion.div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-l-4 transition-all ${
                    module.isHighlight
                      ? "border-gradient-to-b from-blue-500 to-teal-500"
                      : "border-transparent hover:border-blue-500"
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {/* Module Header */}
                  <button
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    onClick={() => toggleModule(index)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Icon Badge */}
                      <div className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md`}>
                        {index === 0 && <FaBullhorn />}
                        {index === 1 && <FaSearch />}
                        {index === 2 && <FaGoogle />}
                        {index === 3 && <FaFacebook />}
                        {index === 4 && <FaPencilAlt />}
                        {index === 5 && <FaEnvelope />}
                        {index === 6 && <FaInstagram />}
                        {index === 7 && <FaChartLine />}
                        {index === 8 && <FaCode />}
                        {index === 9 && <FaBullhorn />}
                        {index === 10 && <FaVideo />}
                      </div>

                      {/* Module Info */}
                      <div className="text-left flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {module.title}
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className={`${module.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                            {module.level}
                          </span>
                          {module.isHighlight && (
                            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full">
                              ⭐ Practical Training
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FaClock className="text-sm" />
                        <span className="text-sm font-medium">{module.duration}</span>
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <motion.div
                      className="ml-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white"
                      animate={{ rotate: expandedModule === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {expandedModule === index ? <FaMinus /> : <FaPlus />}
                    </motion.div>
                  </button>

                  {/* Module Content */}
                  <AnimatePresence>
                    {expandedModule === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700">
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                            {module.topics.map((topic, topicIndex) => (
                              <motion.li
                                key={topicIndex}
                                className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: topicIndex * 0.05 }}
                              >
                                <FaCheckCircle className="text-teal-500 mt-1 flex-shrink-0" />
                                <span>{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Gradient Line (when expanded) */}
                  {expandedModule === index && (
                    <motion.div
                      className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.a
                href="https://wa.me/9594402822?text=Hey%20I%20want%20to%20know%20more%20about%20the%20Digital%20Marketing%20curriculum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 hover:from-blue-700 hover:via-cyan-600 hover:to-teal-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Complete Syllabus PDF
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumPage;