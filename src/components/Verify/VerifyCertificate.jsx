"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdfPath, setPdfPath] = useState("");
  const [certificateDetails, setCertificateDetails] = useState(null);

  // Static certificate map
  const certificateMap = {
    E785641: "/PDFS/E785641.pdf",
    ER78569: "/PDFS/ER78569.pdf",
    GT45868: "/PDFS/GT45868.pdf",
    KE7858: "/PDFS/KE7858.pdf",
    MJ85641: "/PDFS/MJ85641.pdf",
    TR94287: "/PDFS/TR94287.pdf",
    WK52173: "/PDFS/WK52173.pdf",
    FX73920: "/PDFS/FX73920.pdf",
    LB43859: "/PDFS/LB43859.pdf",
    NR18264: "/PDFS/NR18264.pdf",
    ZQ90415: "/PDFS/ZQ90415.pdf",
    VK67382: "/PDFS/VK67382.pdf",
    GP39506: "/PDFS/GP39506.pdf",
    DX74829: "/PDFS/DX74829.pdf",
    HT21694: "/PDFS/HT21694.pdf",
    QM58743: "/PDFS/QM58743.pdf",
    CY81472: "/PDFS/CY81472.pdf",
    KL62983: "/PDFS/KL62983.pdf",
    BF30751: "/PDFS/BF30751.pdf",
    WX98416: "/PDFS/WX98416.pdf",
  };

  // Handle verification logic
  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setVerificationStatus(null);
    setPdfPath("");
    setCertificateDetails(null);

    // Ensure case insensitivity by converting both input and keys to uppercase
    const certificateKey = certificateId.toUpperCase();

    if (certificateMap[certificateKey]) {
      // Handle static mapping
      setIsVerified(true);
      setVerificationStatus("Certificate Verified Successfully!");
      setPdfPath(certificateMap[certificateKey]);
    } else {
      // Query the backend for verification
      try {
        const response = await fetch(
          "http://localhost:5000/api/verify-certificate",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ certificateId: certificateKey }),
          }
        );

        const data = await response.json();

        if (response.ok && data.verified) {
          setIsVerified(true);
          setVerificationStatus("Certificate Verified Successfully!");
          setPdfPath(data.pdfPath); // Path to the PDF file from backend
          setCertificateDetails({
            name: data.name,
            authCode: data.authCode,
            date: data.date,
          });
        } else {
          setIsVerified(false);
          setVerificationStatus(
            data.message ||
              "Verification Failed. Please check the certificate number."
          );
        }
      } catch (error) {
        setIsVerified(false);
        setVerificationStatus(
          "An error occurred while verifying. Please try again."
        );
      }
    }

    setLoading(false);
  };

  return (
    <section className="verify-section w-full min-h-[calc(80vh-10vh)] flex items-center justify-center bg-[#f4f6f9]">
      <div className="w-[90%] max-w-4xl h-auto bg-white rounded-3xl flex flex-col items-center p-6 md:p-8 shadow-lg">
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
              placeholder="Enter the Credential ID (e.g., 'E785641')"
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

        {isVerified && pdfPath && (
          <motion.div
            className="mt-6 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            <iframe
              src={pdfPath}
              className="w-full h-[500px] border rounded-md"
              title="Certificate"
            />
          </motion.div>
        )}

        {isVerified && certificateDetails && (
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          >
            <p className="text-lg font-medium">
              Name: {certificateDetails.name}
            </p>
            <p className="text-sm text-gray-600">
              Auth Code: {certificateDetails.authCode}
            </p>
            <p className="text-sm text-gray-600">
              Date: {certificateDetails.date}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VerifyCertificate;
