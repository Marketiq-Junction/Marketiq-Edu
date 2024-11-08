"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle verification logic
  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setVerificationStatus(null);

    // Simulate an API call to verify the certificate
    setTimeout(() => {
      // Placeholder for backend logic
      // Uncomment when backend is available:
      /*
      try {
        const response = await axios.post("/api/verify-certificate", { authCode: certificateId });
        const { type, name, awardedOn, description, authCode } = response.data;
        setCertificateData(response.data);
        setIsVerified(true);
        setVerificationStatus("Certificate Verified Successfully!");
      } catch (error) {
        setIsVerified(false);
        setVerificationStatus("Verification Failed. Please check the certificate number.");
      }
      */
      
      // Mocked verification
      if (certificateId === "12345") {
        setIsVerified(true);
        setVerificationStatus("Certificate Verified Successfully!");
      } else {
        setIsVerified(false);
        setVerificationStatus("Verification Failed. Please check the certificate number.");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="verify-section w-full h-[calc(80vh-10vh)] flex items-center justify-center bg-[#f4f6f9]">
      <div className="w-[90%] max-w-4xl h-[70%] bg-white rounded-3xl flex flex-col items-center p-8 shadow-lg">
        {/* Title and Description */}
        <div className="text-center mb-8">
          <motion.h1
            className="text-3xl font-bold text-[#106EB5]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Certificate Verification
          </motion.h1>
          <motion.p
            className="text-lg mt-4 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            Please enter the unique certificate number to verify its authenticity.
          </motion.p>
        </div>

        {/* Certificate Verification Form */}
        <motion.form
          className="w-full max-w-md space-y-4"
          onSubmit={handleVerification}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <div>
            <label htmlFor="certificateId" className="block text-sm font-medium text-gray-600">
              Certificate Number
            </label>
            <input
              type="text"
              id="certificateId"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md mt-2"
              placeholder="Enter the certificate number"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 text-white bg-[#106EB5] rounded-md mt-6"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
          >
            {loading ? "Verifying..." : "Verify Certificate"}
          </motion.button>
        </motion.form>

        {/* Verification Status */}
        {verificationStatus && (
          <motion.div
            className={`mt-4 text-center text-xl font-semibold ${
              isVerified ? "text-green-500" : "text-red-500"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            {verificationStatus}
          </motion.div>
        )}

        {/* Download Button (conditional rendering if verified) */}
        {isVerified && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            {/* Link to download certificate */}
            {/* Uncomment when backend provides actual certificate data */}
            {/* <Link href="/path-to-certificate-download">
              <motion.button
                className="py-3 px-8 bg-green-500 text-white rounded-md"
                whileHover={{ scale: 1.05 }}
              >
                Download Certificate
              </motion.button>
            </Link> */}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VerifyCertificate;
