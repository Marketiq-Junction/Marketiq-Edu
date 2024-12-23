import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const CancellationPolicy = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          Cancellation Policy
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At <strong>MarketIQ Junction</strong>, we understand that plans may
          change, and we strive to make the cancellation process as smooth as
          possible. Below is the policy that outlines the conditions under which
          you can cancel your course enrollment.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Cancellation Request
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Cancellation requests must be submitted in writing to{" "}
              <a
                href="mailto:nexcorealliance@gmail.com"
                className="text-blue-500"
              >
                nexcorealliance@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Eligibility for Cancellation
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Cancellations after accessing more than 25% of the course content
              will not be eligible for a refund.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Cancellation Fees
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Any applicable cancellation fees will be deducted before
              processing refunds.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Refund After Cancellation
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              If eligible for a refund, the cancellation request will be
              processed as per the Refund Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CancellationPolicy;
