"use client";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const ProductPricing = () => {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          Product Pricing
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At <strong>MarketIQ Junction</strong>, we aim to provide exceptional
          value through our curated educational programs. Below are the details
          regarding our product pricing:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Clear Pricing
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The prices for all our courses are clearly listed on our website.
              We believe in transparency, so there are no hidden charges.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Inclusive of Taxes
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              All course prices are inclusive of applicable taxes, unless
              otherwise specified during the checkout process.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Discounts and Promotions
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Any discounts or promotional offers, if available, will be
              reflected during the checkout process. Be sure to check for any
              special offers!
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Price Changes
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              While we strive to keep our prices competitive, we reserve the
              right to change our pricing at our discretion. However, confirmed
              bookings will not be affected by any price changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Course-Specific Pricing
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              For more details regarding specific course pricing, please visit
              the respective course pages on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ProductPricing;
