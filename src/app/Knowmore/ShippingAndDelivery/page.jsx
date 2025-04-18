"use client";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const ShippingAndDelivery = () => {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          Shipping and Delivery Policy
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At <strong>MarketIQ Junction</strong>, we are committed to ensuring
          timely delivery of any physical materials or certificates associated
          with our services. Below is our shipping and delivery policy:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Shipping Time
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Materials will be shipped within 7-10 business days after order
              confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Shipping Costs
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Shipping costs, if applicable, will be displayed at checkout.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Delivery Timelines
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Delivery timelines depend on your location and the courier
              services used. Please note that delays may occur due to factors
              beyond our control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Tracking Details
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Once your item is shipped, tracking details will be shared with
              you to monitor the progress of the delivery.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Issues with Shipping
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              If you experience any issues with shipping or delivery, please
              contact us at{" "}
              <a
                href="mailto:nexcorealliance@gmail.com"
                className="text-blue-500"
              >
                nexcorealliance@gmail.com
              </a>
              , and we will assist you in resolving the matter.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ShippingAndDelivery;
