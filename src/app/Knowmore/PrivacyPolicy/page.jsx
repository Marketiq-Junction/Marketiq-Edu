import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At <strong>MarketIQ Junction</strong>, we are committed to protecting
          your privacy. Our privacy policy outlines how we collect, use, and
          safeguard your personal information.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Data Collection
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We collect personal data like name, email, phone number, and
              payment information for providing our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Data Usage
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Your data is used solely for processing your enrollment, providing
              updates, and improving our offerings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Data Security
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We implement industry-standard encryption to secure your
              information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Third-Party Sharing
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We do not share your data with third parties, except as required
              for payment processing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Cookies
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our website uses cookies to improve user experience and analyze
              website traffic.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Policy Updates
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              MarketIQ Junction reserves the right to update this privacy
              policy. Changes will be communicated through the website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
