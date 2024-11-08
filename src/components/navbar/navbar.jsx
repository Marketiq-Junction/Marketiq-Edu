"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChatIcon from "@mui/icons-material/Chat"; // Import the Chat icon for "Let's Talk" button

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

  return (
    <nav className="bg-white text-gray-800 py-3 px-4 shadow-md top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Link to Home */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="relative ml-8 h-16 w-32 md:h-24 md:w-48 cursor-pointer">
              <Image
                src="/logoo.png"
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
          {["home", "about-us", "courses", "contact-us", "verify-certificate"].map((page) => (
            <li
              key={page}
              className={`p-4 text-lg font-semibold hover:text-blue-600 ${
                activePage === page ? "text-[#50c3c6]" : "text-black"
              }`}
              onClick={() => handleMenuItemClick(page)}
            >
              <Link href={page === "home" ? "/" : `/${page}`}>
                {page.charAt(0).toUpperCase() + page.slice(1).replace("-", " ")}
              </Link>
            </li>
          ))}

         
         

          {/* Buttons for Mobile View */}
          <div className="flex md:hidden flex-col space-y-4 mt-4">
            {/* Let's Talk Button */}
            <Link href="/contact-us">
              <div
                className="text-white px-6 py-3 rounded-lg flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: "#50c3c6" }}
              >
                Let&apos;Talk <ChatIcon className="ml-2" />
              </div>
            </Link>

            {/* Uncommented Buttons for clarity */}
            {/* <Link href="/login">
              <div className="bg-white text-black px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
                Login
              </div>
            </Link>
            <Link href="/join-us">
              <div
                className="text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer flex items-center justify-center"
                style={{ backgroundColor: "#50c3c6" }}
              >
                Join Us <ArrowForwardIcon className="ml-2" />
              </div>
            </Link> */}
          </div>
        </ul>

        {/* Buttons for Desktop View */}
        <div className="hidden md:flex items-center space-x-4 mr-8">
          {/* Let's Talk Button for Desktop */}
          <Link href="/contact-us">
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

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link"; // Import the Link component from Next.js
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activePage, setActivePage] = useState("");

//   useEffect(() => {
//     // Set the active page based on the current URL path
//     const currentPath = window.location.pathname;
//     const page = currentPath === "/" ? "home" : currentPath.slice(1);
//     setActivePage(page);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMenuItemClick = (page) => {
//     setActivePage(page);
//     setIsOpen(false); // Close the menu on selection
//   };

//   return (
//     <nav className="bg-white text-gray-800 py-3 px-4 shadow-md  top-0 left-0 right-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo with Link to Home */}
//         <div className="flex-shrink-0">
//           <Link href="/">
//             <div className="relative ml-8 h-16 w-32 md:h-24 md:w-48 cursor-pointer">
//               <Image
//                 src="/logoo.png" // Ensure this image exists in your public folder
//                 alt="MyLogo"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </Link>
//         </div>

//         {/* Menu Icon for Mobile */}
//         <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
//           {isOpen ? <span className="text-3xl">✖</span> : <span className="text-3xl">☰</span>}
//         </div>

//         {/* Menu Items */}
//         <ul
//           className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transition-transform transform ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           } md:static md:flex md:w-auto md:translate-x-0 md:shadow-none flex-col md:flex-row items-start md:items-center p-8 gap-8 md:p-0 z-40 overflow-auto`}
//         >
//           {["home", "about-us", "courses", "contact-us"].map((page) => (
//             <li
//               key={page}
//               className={`p-4 text-lg font-semibold hover:text-blue-600 ${
//                 activePage === page ? "text-[#50c3c6]" : "text-black"
//               }`}
//               onClick={() => handleMenuItemClick(page)}
//             >
//               <Link href={page === "home" ? "/" : `/${page}`}>
//                 {page.charAt(0).toUpperCase() + page.slice(1).replace("-", " ")}
//               </Link>
//             </li>
//           ))}

//           <div className="flex md:hidden flex-col space-y-4 mt-4">

//             <Link href="/login">
//               <div className="bg-white text-black px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
//                 Login
//               </div>
//             </Link>

//             <Link href="/join-us">
//               <div
//                 className="text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer flex items-center justify-center"
//                 style={{ backgroundColor: "#50c3c6" }}
//               >
//                 Join Us <ArrowForwardIcon className="ml-2" />
//               </div>
//             </Link>
//           </div>
//         </ul>

//         {/* Buttons for Desktop View */}
//         <div className="hidden md:flex items-center space-x-4 mr-8">
//           {/* Login Button */}
//           <Link href="/login">
//             <div className="bg-white text-black px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
//               LOGIN
//             </div>
//           </Link>

//           {/* Join Us Button */}
//           <Link href="/join-us">
//             <div
//               className="text-white px-8 py-3 rounded-lg hover:bg-blue-700 cursor-pointer flex items-center justify-center"
//               style={{ backgroundColor: "#50c3c6" }}
//             >
//               JOIN US <ArrowForwardIcon />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
