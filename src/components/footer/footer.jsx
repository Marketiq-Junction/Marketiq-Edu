"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const policies = [
    { name: "About Us", href: "/Knowmore/OurStory" },
    { name: "Terms and Conditions", href: "/Knowmore/TermsAndConditions" },
    { name: "Contact Us", href: "/Knowmore/Contact" },
    { name: "Privacy Policy", href: "/Knowmore/PrivacyPolicy" },
    // { name: "Product Pricing", href: "/Knowmore/ProductPricing" },
    { name: "Refund Policy", href: "/Knowmore/RefundPolicy" },
    { name: "Cancellation Policy", href: "/Knowmore/CancellationPolicy" },
    // { name: "Shipping and Delivery Policy", href: "/Knowmore/ShippingAndDelivery" },
  ];

  const categories = [
    { name: "100% Placement Assistance", href: "/learn&grow" },
    // { name: "Student Experience and Support", href: "/review" },
    { name: "Our Programs", href: "/learn&grow" },
    { name: "Join Education.Marketiq", href: "/contact-us" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 py-12 px-4 md:px-8">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* First Column: Contact Us */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Logo */}
              <div className="relative h-14 w-28 md:h-16 md:w-40 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border-2 border-white/40">
                <img
                  src="/37.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-2xl text-white mb-4">Contact Us</h3>
                
                {/* Phone */}
                <motion.a
                  href="tel:+919920892689"
                  className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl group-hover:bg-white/30 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">+91 99208 92689</span>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:marketiqjunction@gmail.com"
                  className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    if (typeof window !== "undefined" && typeof gtag === "function") {
                      gtag("event", "click", {
                        event_category: "email",
                        event_label: "Email Click",
                        transport_type: "beacon",
                      });
                    }
                  }}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl group-hover:bg-white/30 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">marketiqjunction@gmail.com</span>
                </motion.a>

                {/* Address */}
                <motion.a
                  href="https://maps.app.goo.gl/9c8Gij4NMeGtGJM86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white hover:text-white/80 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl group-hover:bg-white/30 transition-all">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Off BKC, Mumbai, India 400070</span>
                </motion.a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-4">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/people/marketiqjunction", label: "Facebook" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/marketiq-junction/", label: "LinkedIn" },
                  { icon: Instagram, href: "https://www.instagram.com/marketiq_junction", label: "Instagram" },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/80 backdrop-blur-sm p-3 rounded-xl hover:bg-white transition-all shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                      onClick={() => {
                        if (typeof window !== "undefined" && typeof gtag === "function") {
                          gtag("event", "social_click", {
                            event_category: "engagement",
                            event_label: social.label,
                            transport_type: "beacon",
                          });
                        }
                      }}
                    >
                      <IconComponent className="w-5 h-5 text-cyan-600" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Second Column: Policies */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-bold text-2xl text-white mb-6">Policies</h3>
              <ul className="space-y-3">
                {policies.map((policy, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={policy.href}
                      className="text-white hover:text-white/80 transition-colors font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:w-2 group-hover:h-2 transition-all" />
                      {policy.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Third Column: Category */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-bold text-2xl text-white mb-6">Category</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={category.href}
                      className="text-white hover:text-white/80 transition-colors font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:w-2 group-hover:h-2 transition-all" />
                      {category.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Footer Bottom: Copyright */}
          <motion.div
            variants={itemVariants}
            className="border-t-2 border-white/30 pt-8 text-center"
          >
            <p className="text-white font-medium">
              © 2011-2025 Education.MarketiqJunction. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/+919920892689"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-2xl hover:bg-green-600 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
};

export default Footer;