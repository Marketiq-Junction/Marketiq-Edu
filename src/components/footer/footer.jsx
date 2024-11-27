import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-blue-200 text-white py-8 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-start items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* First Column: Contact Us */}
          <div className="flex-1">
            <Image
              src="/mj1.png"
              alt="Logo"
              width={224}
              height={96}
              className="mb-4 h-20 w-48 md:h-24 md:w-56 rounded-xl"
            />
            <h3 className="font-semibold text-left text-black mb-2">Contact Us</h3>
            <p className="font-semibold text-left text-gray-500 mb-2 text-sm md:text-base">
              Call: <a href="tel:+919920892689" className="hover:underline">+91 99208 92689</a>
            </p>
            <p className="font-semibold text-left text-black mb-2 text-sm md:text-base">
              Email: <a href="mailto:marketiqjunction@gmail.com" className="hover:underline"> <span className="text-gray-500">marketiqjunction@gmail.com</span></a>
            </p>
            <p className="font-semibold text-left text-black mb-4 text-sm md:text-base">
  Address: <br />
  <a
    href="https://www.google.com/maps/place/Off+BKC,+Mumbai,+India+400070"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:underline"
  >
    Off BKC, Mumbai, India 400070
  </a>
</p>

            <div className="flex justify-start space-x-4">
              <a href="https://www.facebook.com/people/marketiqjunction" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <FacebookIcon fontSize="small" />
              </a>
              <a href="https://www.linkedin.com/company/marketiq-junction/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 rounded-full p-2 hover:bg-blue-700 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <LinkedInIcon fontSize="small" />
              </a>
              <a href="https://www.instagram.com/marketiq_junction" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-500 rounded-full p-2 hover:bg-pink-500 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <InstagramIcon fontSize="small" />
              </a>
            </div>
          </div>

          {/* Second Column: Explore */}
          <div className="flex-1">
            <h3 className="font-semibold text-left text-black mb-4">Explore</h3>
            <ul className="text-left space-y-2 text-sm md:text-base mt-8">
              <li><Link href="/" className="text-gray-500 hover:underline">Our Story</Link></li>
              <li><Link href="/learn&grow" className="text-gray-500 hover:underline">learn&grow</Link></li>
              <li><Link href="/contact-us" className="text-gray-500 hover:underline">Support Center</Link></li>
            </ul>
          </div>

          {/* Third Column: Category */}
          <div className="flex-1">
            <h3 className="font-semibold text-left text-black mb-4">Category</h3>
            <ul className="text-left space-y-2 text-sm md:text-base mt-8">
              <li><Link href="/learn&grow" className="text-gray-500 hover:underline">100% Placement Assistance</Link></li>
              <li><Link href="/contact-us" className="text-gray-500 hover:underline">Student Experience and Support</Link></li>
              <li><Link href="/learn&grow" className="text-gray-500 hover:underline">Our Programs</Link></li>
              <li><Link href="/contact-us" className="text-gray-500 hover:underline">Join Education.Code4Bharat</Link></li>
            </ul>
          </div>

          {/* Fourth Column: Get In Touch with Mobile Number */}
          {/* <div className="flex-1">
            <h3 className="font-semibold text-left text-black mb-4">Get In Touch</h3>
            <form className="flex flex-col">
              <input
                type="tel"
                placeholder="Mobile Number Here"
                className="p-2 rounded-md text-gray-700 mb-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md p-2 text-sm md:text-base w-full hover:bg-blue-700 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div> */}
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs md:text-sm text-gray-700">
            © {new Date().getFullYear()} MarketIQ Edu. All rights reserved.
          </p>
        </div>

        {/* WhatsApp Floating Icon for All Screens */}
        <a
          href="https://wa.me/+919920892689"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white rounded-full p-3 md:p-4 shadow-lg hover:bg-green-600 transition-colors duration-300"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon fontSize="medium" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
