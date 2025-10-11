"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const page = currentPath === "/" ? "home" : currentPath.slice(1);
    setActivePage(page);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Our Story", path: "home" },
    { name: "Learn&Grow", path: "learn&grow" },
    { name: "Verify Certificate", path: "verify-certificate" },
    {name: "Gallery", path: "gallery"},
    {name: "Review", path: "review"},
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-xl"
          : "bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative h-14 w-28 md:h-16 md:w-40 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border-2 border-white/40">
  <Image
    src="/37.png"
    alt="Logo"
    fill
    className="object-cover rounded-lg"
    priority
  />
</div>
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map(({ name, path }) => (
              <motion.li
                key={path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={path === "home" ? "/" : `/${path}`}
                  onClick={() => handleMenuItemClick(path)}
                  className={`text-lg font-bold transition-colors relative  ${
                    activePage === path
                      ? "text-white"
                      : scrolled
                      ? "text-gray-800 hover:text-cyan-500"
                      : "text-white/90 hover:text-black-400"
                  }`}
                >
                  {name}
                  {activePage === path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                      layoutId="underline"
                    />
                  )}
                </a>
              </motion.li>
            ))}

            {/* Let's Talk Button - Desktop */}
            <motion.a
              href="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "social_click", {
                    event_category: "engagement",
                    event_label: "Contact Us",
                    transport_type: "beacon",
                  });
                }
              }}
            >
              <div className="bg-white text-cyan-500 px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all border-2 border-white/40">
                Let&apos;s Talk
                <MessageCircle className="w-5 h-5" />
              </div>
            </motion.a>
          </ul>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-lg"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 w-3/4 h-full bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 shadow-2xl md:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="p-8 space-y-6">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <motion.button
                    onClick={toggleMenu}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-xl"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <ul className="space-y-4">
                  {menuItems.map(({ name, path }, index) => (
                    <motion.li
                      key={path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={path === "home" ? "/" : `/${path}`}
                        onClick={() => handleMenuItemClick(path)}
                        className={`block text-xl font-bold py-3 px-4 rounded-xl transition-all ${
                          activePage === path
                            ? "bg-white text-cyan-500"
                            : "text-white hover:bg-white/20"
                        }`}
                      >
                        {name}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Let's Talk Button - Mobile */}
                <motion.a
                  href="https://wa.me/919920892689?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => {
                    if (
                      typeof window !== "undefined" &&
                      typeof gtag === "function"
                    ) {
                      gtag("event", "social_click", {
                        event_category: "engagement",
                        event_label: "WhatsApp",
                        transport_type: "beacon",
                      });
                    }
                  }}
                >
                  <div className="bg-white text-cyan-500 px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all mt-8">
                    Let&apos;s Talk
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
