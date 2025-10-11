"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Gauge, TrendingUp, ExternalLink, FileText } from "lucide-react";

const Courses = () => {
  const courseData = [
    {
      id: 1,
      title: "2-Day Bootcamp",
      icon: Zap,
      color: "from-cyan-500 to-blue-600",
      extraInfo:
        "Join our 2-day bootcamp to get a quick overview of digital marketing fundamentals. Perfect for beginners to get started!",
      syllabusLink: "/pdf/Bootcamp.pdf",
    },
    {
      id: 2,
      title: "45-Day Fast Track Program",
      icon: Gauge,
      color: "from-blue-500 to-teal-600",
      extraInfo:
        "This 45-day program focuses on fast-paced learning with in-depth knowledge and hands-on experience in digital marketing.",
      syllabusLink: "/pdf/45 day.pdf",
    },
    {
  id: 3,
  title: "4-Month Digital Marketing Program + 2-Month Internship",
  icon: TrendingUp,
  color: "from-teal-500 to-cyan-600",
  extraInfo:
    "Our 4-month intensive Digital Marketing program is followed by a 2-month hands-on internship, providing real-world experience in SEO, SEM, social media, and campaign management. Gain both theoretical knowledge and practical industry exposure.",
  syllabusLink: "/pdf/4Month_DigitalMarketing.pdf",
}
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 py-20 px-4 md:px-8">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <FileText className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white tracking-wide">
              Our Programs
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Courses
            </span>
            <br />& Syllabus
          </h2>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {courseData.map((course) => {
            const IconComponent = course.icon;
            return (
              <motion.a
                key={course.id}
                href={course.syllabusLink}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className="group cursor-pointer"
                whileHover={{ scale: 1.03, y: -10 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => {
                  if (typeof window !== "undefined" && typeof gtag === "function") {
                    gtag("event", "select_content", {
                      event_category: "courses",
                      event_label: `${course.title} Card Clicked`,
                      transport_type: "beacon",
                    });
                  }
                }}
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all h-full overflow-hidden">
                  {/* Icon Section */}
                  <div className="relative p-8 flex justify-center">
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      className={`relative w-32 h-32 bg-gradient-to-br ${course.color} rounded-3xl flex items-center justify-center shadow-lg`}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <IconComponent className="w-16 h-16 text-white" />
                    </motion.div>

                    {/* External Link Badge */}
                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                    >
                      <ExternalLink className="w-5 h-5 text-cyan-600" />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all">
                      {course.title}
                    </h3>

                    <p className="text-gray-700 text-center leading-relaxed">
                      {course.extraInfo}
                    </p>

                    {/* View Syllabus Button */}
                    <motion.div
                      className={`mt-6 py-3 px-6 bg-gradient-to-r ${course.color} text-white rounded-xl font-semibold text-center shadow-lg group-hover:shadow-xl transition-all`}
                      whileHover={{ scale: 1.05 }}
                    >
                      View Syllabus
                    </motion.div>
                  </div>

                  {/* Bottom Accent Line */}
                  
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/40 px-8 py-4">
            <p className="text-xl font-bold text-gray-800">
              🎓 Choose the perfect course for your career goals!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;