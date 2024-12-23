"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdfPath, setPdfPath] = useState("");

  // Map certificate words to PDF files
  const certificateMap = {
    E785641: "/PDFS/E785641.pdf", // PDF
    ER78569: "/PDFS/ER78569.pdf", // PDF
    GT45868: "/PDFS/GT45868.pdf", // PDF
    KE7858: "/PDFS/KE7858.fof", // FOF
    SER4586: "/PDFS/SER4586.for", // FOR
    SER7898: "/PDFS/SER7898.for", // FOR
    TB45683: "/PDFS/TB45683.pdf", // PDF
  };

  // Handle verification logic
  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setVerificationStatus(null);
    setPdfPath("");

    // Convert input to uppercase or lowercase to avoid case sensitivity issues
    const normalizedCertificateId = certificateId.toUpperCase();

    // Simulate an API call to verify the certificate
    setTimeout(() => {
      if (certificateMap[normalizedCertificateId]) {
        setIsVerified(true);
        setVerificationStatus("Certificate Verified Successfully!");
        setPdfPath(certificateMap[normalizedCertificateId]);
      } else {
        setIsVerified(false);
        setVerificationStatus(
          "Verification Failed. Please check the certificate number."
        );
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="verify-section w-full min-h-[calc(80vh-10vh)] flex items-center justify-center bg-[#f4f6f9]">
      <div className="w-[90%] max-w-4xl h-auto bg-white rounded-3xl flex flex-col items-center p-6 md:p-8 shadow-lg">
        {/* Title and Description */}
        <div className="text-center mb-6 md:mb-8">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-[#106EB5]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Certificate Verification
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg mt-2 md:mt-4 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            Please enter the unique certificate number to verify its
            authenticity.
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
            <label
              htmlFor="certificateId"
              className="block text-sm font-medium text-gray-600"
            >
              Credential ID
            </label>
            <input
              type="text"
              id="certificateId"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#106EB5]"
              placeholder="Enter the Credential ID (e.g., 'one', 'two')"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 text-white bg-[#106EB5] rounded-md mt-4 md:mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
            whileHover={!loading ? { scale: 1.03 } : {}}
          >
            {loading ? "Verifying..." : "Verify Certificate"}
          </motion.button>
        </motion.form>

        {/* Verification Status */}
        {verificationStatus && (
          <motion.div
            className={`mt-4 text-center text-sm md:text-xl font-semibold ${
              isVerified ? "text-green-500" : "text-red-500"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            {verificationStatus}
          </motion.div>
        )}

        {/* Render PDF Inline if Verified */}
        {isVerified && pdfPath && (
          <motion.div
            className="mt-6 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            <iframe
              src={`/${pdfPath}`}
              className="w-full h-[500px] border rounded-md"
              title="Certificate"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VerifyCertificate;
