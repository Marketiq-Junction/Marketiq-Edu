import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">Refund Policy</h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At <strong>MarketIQ Junction</strong>, we strive to ensure your
          satisfaction. However, we understand that circumstances may change,
          which is why we have a clear refund policy to accommodate your needs.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Refund Request
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Refund requests must be made within 7 days of enrollment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Eligibility for Refund
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Refunds are only applicable if less than 25% of the course has
              been accessed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Processing Fees
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Processing fees, if any, will be deducted from the refunded
              amount.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Refund Timeline
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Refunds will be processed within 10 business days after approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
