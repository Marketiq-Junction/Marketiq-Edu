"use client";
import React, { useRef, useState , useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, FileText, X } from "lucide-react";

const HeroHome = () => {
 const [isModalOpen, setModalOpen] = useState(false);
  const [isPdfModalOpen, setPdfModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false); // ✅ Added missing state
  const [formData, setFormData] = useState({
    mobileNumber: "",
    fullName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // ✅ Scroll Lock Fix
  useEffect(() => {
    if (isBrochureModalOpen || isPdfModalOpen || isModalOpen) {
      document.body.style.overflow = "hidden"; // Stop background scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll again
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBrochureModalOpen, isPdfModalOpen, isModalOpen]);

  const validateForm = () => {
    const errors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number required";
    } else if (!phoneRegex.test(formData.mobileNumber)) {
      errors.mobileNumber = "Enter 10-digit mobile number";
    }

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const downloadBrochure = () => {
    if (validateForm()) {
      const link = document.createElement("a");
      link.href = "/brochure/b.pdf";
      link.download = "Education_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setPdfModalOpen(false);
        setIsBrochureModalOpen(false);
        setFormData({ mobileNumber: "", fullName: "", email: "" });
      }, 500);
    }
  };

  const shareOnWhatsApp = () => {
    if (validateForm()) {
      const pdfUrl =
        typeof window !== "undefined"
          ? `${window.location.origin}/brochure/b.pdf`
          : "/brochure/b.pdf";

      const message = `📘 Explore the latest brochure from Education.Code4Bharat! Discover our programs and opportunities here: ${pdfUrl}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setTimeout(() => {
        setPdfModalOpen(false);
        setIsBrochureModalOpen(false);
        setFormData({ mobileNumber: "", fullName: "", email: "" });
      }, 500);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 mt-2 mb-6">
      {/* Animated Background Elements */}
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

      <motion.div
        ref={ref}
        className="relative py-16 md:py-36 px-4 md:px-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Content */}
            <motion.div
              className="flex-1 text-center md:text-left z-10"
              variants={itemVariants}
            >
              {/* Eyebrow Text */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-sm font-semibold text-white tracking-wide">
                  Education.MarketJunction
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                variants={itemVariants}
                style={{
                  textShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                The Smart Stop
                <br />
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  for Digital Growth
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-2xl text-white/90 mb-8 font-light"
                variants={itemVariants}
              >
                Empowering the Future of Tech Talent
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                variants={itemVariants}
              >
                {/* Brochure Button */}
                <motion.button
                  onClick={() => {
                    setPdfModalOpen(true);
                  }}
                  className="group relative px-8 py-4 bg-white text-cyan-500 rounded-xl font-semibold overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                    <FileText size={20} />
                    Our Brochure
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex-1 relative z-10 w-full md:w-auto"
              variants={imageVariants}
            >
              <motion.div
                className="relative w-full max-w-lg mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-cyan-200/30 rounded-3xl blur-2xl" />

                {/* Image Container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-300 to-teal-300">
                    <div className="w-full h-full flex items-center justify-center text-white text-5xl">
                      <img
                      src="/DigitalGrowth.png"
                      alt="Digital Growth"
                      className="w-full h-full object-cover"
                    />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Form Modal */}
      {isPdfModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setPdfModalOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-2xl bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl shadow-2xl overflow-hidden border border-cyan-200/50"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              {/* Left - Brochure Preview */}
              <div className="hidden md:flex md:w-2/5 bg-gradient-to-br from-cyan-400 to-teal-400 p-8 flex-col items-center justify-center relative min-h-[500px] border-r border-cyan-300/50">
                <button
                  onClick={() => setPdfModalOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center text-xl transition-colors"
                >
                  ✕
                </button>
                <div className="text-center">
                  <div className="text-6xl mb-4">📘</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Download Brochure
                  </h3>
                  <p className="text-white/90 text-sm">
                    Get insights about our courses and programs
                  </p>
                </div>
              </div>

              {/* Right - Form */}
              <div className="w-full md:w-3/5 p-8 relative">
                <button
                  onClick={() => setPdfModalOpen(false)}
                  className="md:hidden absolute top-4 right-4 w-8 h-8 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-xl"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold text-cyan-600 mb-2 flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Download Brochure
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Fill in your details to download our brochure
                </p>

                <div className="space-y-4">
                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleFormChange}
                      placeholder="Enter 10-digit Mobile Number"
                      maxLength="10"
                      className={`w-full px-4 py-3 rounded-lg border-2 bg-white/50 transition-colors ${
                        formErrors.mobileNumber
                          ? "border-red-500"
                          : "border-cyan-300 focus:border-cyan-500"
                      } focus:outline-none`}
                    />
                    {formErrors.mobileNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.mobileNumber}
                      </p>
                    )}
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg border-2 bg-white/50 transition-colors ${
                        formErrors.fullName
                          ? "border-red-500"
                          : "border-cyan-300 focus:border-cyan-500"
                      } focus:outline-none`}
                    />
                    {formErrors.fullName && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="e.g. yourname@gmail.com"
                      className={`w-full px-4 py-3 rounded-lg border-2 bg-white/50 transition-colors ${
                        formErrors.email
                          ? "border-red-500"
                          : "border-cyan-300 focus:border-cyan-500"
                      } focus:outline-none`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Download Button */}
                  <motion.button
                    onClick={downloadBrochure}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg mt-6"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileText size={20} />
                    Download Brochure
                  </motion.button>

                  {/* WhatsApp Button */}
                  <motion.button
                    onClick={shareOnWhatsApp}
                    className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M380.9 97.1C339-7.9 202.9-32.1 119.1 51.7-11.8 183.8 12.2 404.5 162.5 463.9c17.2 7 35.8 10.5 54.3 10.5 28.1 0 56.1-7.3 80.6-21.5l52.3 13.8-14.1-51.3c29.7-25.8 49.3-61.3 56.2-101.3 9.2-54.5-5.7-109.7-34.9-157zM243 403.3c-18.2 0-36-4.4-51.8-12.7l-3.7-2-38.5 10.2 10.3-37.4-2.4-3.9c-22.2-35.9-26.9-79.5-13-119.5 27.2-75.6 108.7-115.7 184.3-88.5 36.6 13.2 65.5 42 78.7 78.6 27.3 75.6-12.9 157.1-88.5 184.3-20.2 7.3-41.4 11-62.4 11z" />
                    </svg>
                    Share on WhatsApp
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroHome;