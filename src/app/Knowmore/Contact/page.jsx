import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">Contact Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          We’d love to hear from you! Reach out to us anytime for inquiries,
          support, or collaborations.
        </p>
        <div className="mt-6">
          <p className="text-gray-700 text-lg mb-4">
            📞 <strong>Call:</strong>{" "}
            <a
              href="tel:+919920892689"
              className="text-blue-500 hover:underline"
            >
              +91 99208 92689
            </a>
          </p>
          <p className="text-gray-700 text-lg mb-4">
            ✉️ <strong>Email:</strong>{" "}
            <a
              href="mailto:marketiqjunction@gmail.com"
              className="text-blue-500 hover:underline"
            >
              marketiqjunction@gmail.com
            </a>
          </p>
          <p className="text-gray-700 text-lg">
            📍 <strong>Address:</strong>{" "}
            <a
              href="https://maps.app.goo.gl/9c8Gij4NMeGtGJM86"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Off BKC, Mumbai, India 400070
            </a>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
