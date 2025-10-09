"use client";
import React from "react";
import { RotateCcw, Mail, AlertCircle, Clock, DollarSign, CheckCircle } from "lucide-react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const CancellationPolicy = () => {
  return (
    
    <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 overflow-hidden">
      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
<Navbar/>
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 mt-16">
        <div className="max-w-4xl w-full">
          {/* Header Card */}
          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 mb-6 border border-white/40">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-4 rounded-2xl shadow-lg">
                <RotateCcw className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent mb-4 text-center">
              Cancellation Policy
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              At <strong className="text-cyan-600">MarketIQ Junction</strong>, we understand that plans may
              change, and we strive to make the cancellation process as smooth as
              possible. Below is the policy that outlines the conditions under which
              you can cancel your course enrollment.
            </p>
          </div>

          {/* Policy Cards */}
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/40 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl shadow-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    1. Cancellation Request
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Cancellation requests must be submitted in writing to{" "}
                    <a
                      href="mailto:nexcorealliance@gmail.com"
                      className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors underline decoration-cyan-400"
                    >
                      nexcorealliance@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/40 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-3 rounded-xl shadow-lg flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    2. Eligibility for Cancellation
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Cancellations after accessing more than 25% of the course content
                    will not be eligible for a refund.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/40 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    3. Cancellation Fees
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Any applicable cancellation fees will be deducted before
                    processing refunds.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/40 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    4. Refund After Cancellation
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    If eligible for a refund, the cancellation request will be
                    processed as per the Refund Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-6 bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/40 text-center">
            <p className="text-gray-600 text-sm">
              For any questions or concerns, please don't hesitate to reach out to our support team.
            </p>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default CancellationPolicy;