"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChatIcon from "@mui/icons-material/Chat";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const page = currentPath === "/" ? "home" : currentPath.slice(1);
    setActivePage(page);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (page) => {
    setActivePage(page);
    setIsOpen(false); // Close the menu on selection
  };

  // Menu items with display names and paths
  const menuItems = [
    { name: "Our story", path: "home" },
    { name: "Learn&Grow", path: "learn&grow" },
    { name: "Support Center", path: "contact-us" },
    { name: "Verify Certificate", path: "verify-certificate" },
  ];

  return (
    <nav className="bg-white text-gray-800 py-3 px-4 shadow-md top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Link to Home */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="relative ml-8 h-16 w-32 md:h-24 md:w-48 cursor-pointer">
              <Image
                src="/mj1.png"
                alt="MyLogo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <span className="text-3xl">✖</span>
          ) : (
            <span className="text-3xl">☰</span>
          )}
        </div>

        {/* Menu Items */}
        <ul
          className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:flex md:w-auto md:translate-x-0 md:shadow-none flex-col md:flex-row items-start md:items-center p-8 gap-8 md:p-0 z-40 overflow-auto`}
        >
          {menuItems.map(({ name, path }) => (
            <li
              key={path}
              className={`p-4 text-lg font-semibold hover:text-blue-600 ${
                activePage === path ? "text-[#50c3c6]" : "text-black"
              }`}
              onClick={() => handleMenuItemClick(path)}
            >
              <Link href={path === "home" ? "/" : `/${path}`}>
                {name}
              </Link>
            </li>
          ))}

          {/* Buttons for Mobile View */}
          <div className="flex md:hidden flex-col space-y-4 mt-4">
            {/* Let's Talk Button for WhatsApp */}
            <Link
              href={`https://wa.me/919920892689?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="text-white px-6 py-3 rounded-lg flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: "#50c3c6" }}
              >
                Let&apos;s Talk <ChatIcon className="ml-2 " />
              </div>
            </Link>
          </div>
        </ul>

        {/* Buttons for Desktop View */}
        <div className="hidden md:flex items-center space-x-4 mr-8">
          {/* Let's Talk Button for WhatsApp */}
          <Link
            href={`https://wa.me/919920892689?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="text-white px-8 py-3 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700"
              style={{ backgroundColor: "#50c3c6" }}
            >
              Let&apos;s Talk <ChatIcon className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
