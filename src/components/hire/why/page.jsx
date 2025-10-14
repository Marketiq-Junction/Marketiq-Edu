"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHeadset,
  FaHandshake,
  FaBrain,
  FaChalkboardTeacher,
  FaUsers,
  FaBuilding,
  FaDollarSign,
  FaClock,
  FaCertificate,
  FaChartLine,
  FaBullhorn,
  FaLaptopCode,
} from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { MdDiversity3, MdCampaign } from "react-icons/md";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBrain />,
      title: "Industry Expert Trainers",
    },
    {
      icon: <FaChartLine />,
      title: "Live Campaign Experience",
    },
    {
      icon: <FaCertificate />,
      title: "Google & Facebook Certified",
    },
    {
      icon: <FaHandshake />,
      title: "100% Placement Assistance",
    },
    {
      icon: <FaBullhorn />,
      title: "40+ Real Marketing Projects",
    },
    {
      icon: <FaLaptopCode />,
      title: "15+ Marketing Tools Training",
    },
    {
      icon: <FaHeadset />,
      title: "Lifetime Mentorship Support",
    },
    {
      icon: <FaDollarSign />,
      title: "Flexible Payment Options",
    },
    {
      icon: <MdCampaign />,
      title: "Portfolio Building Support",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Personalized Learning Path",
    },
    {
      icon: <FaUsers />,
      title: "Small Batch Size (Max 20)",
    },
    {
      icon: <FaClock />,
      title: "Weekend & Weekday Batches",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-800 dark:via-cyan-900/20 dark:to-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white text-sm font-semibold rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            ⭐ Our Advantages
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
              Choose Us?
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Join Marketing Junction and transform your career with industry-leading digital marketing training
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <motion.div
                className="relative z-10 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full text-4xl text-gray-700 dark:text-gray-300 group-hover:from-blue-100 group-hover:to-cyan-100 dark:group-hover:from-blue-800/50 dark:group-hover:to-cyan-800/50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all duration-300 shadow-md group-hover:shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 text-center text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-cyan-500 group-hover:to-teal-500 transition-all duration-300">
                {feature.title}
              </h3>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Digital Marketing Journey?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join 8,652+ successful students who transformed their careers with Marketing Junction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/9594402822?text=Hey%20I%20want%20to%20enroll%20in%20Digital%20Marketing%20course"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.a>
              <motion.a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl shadow-lg hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Curriculum
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { number: "8,652+", label: "Students Trained" },
            { number: "95%", label: "Placement Rate" },
            { number: "40+", label: "Live Projects" },
            { number: "15+", label: "Marketing Tools" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;