import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          Terms and Conditions
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <strong>MarketIQ Junction</strong>. By accessing or using
          our website (www.education.marketiqjunction.com), you agree to abide
          by the following terms and conditions:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Eligibility
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              You must be at least 18 years old or have parental/guardian
              consent to use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Accuracy of Information
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              All users must provide accurate and up-to-date personal and
              payment information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              All content, materials, and courses available on this website are
              the property of MarketIQ Junction and are protected by copyright
              laws. Unauthorized sharing or duplication is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Service Modifications
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              MarketIQ Junction reserves the right to modify or discontinue any
              service without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We are not liable for any indirect, incidental, or consequential
              damages arising from the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Dispute Resolution
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              All disputes shall be subject to Mumbai jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Updates to the Terms
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              MarketIQ Junction reserves the right to update these terms.
              Changes will be communicated through the website.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default TermsAndConditions;
