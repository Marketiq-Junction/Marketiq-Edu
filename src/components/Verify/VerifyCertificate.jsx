"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  CheckCircle,
  XCircle,
  Download,
  ExternalLink,
  Award,
} from "lucide-react";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [certificateDetails, setCertificateDetails] = useState(null);

  const [previewUrl, setPreviewUrl] = useState("");

  // ✅ Static certificate map including new NEXMJ statics
  const staticCertificates = {
    C4B829: "/PDFS/C4B829.pdf",
    C4B104: "/PDFS/C4B104.pdf",
    C4B562: "/PDFS/C4B562.pdf",
    C4B738: "/PDFS/C4B738.pdf",

    // New Static 5 Certificates
    NEXMJ111: "/certificates/NEXMJ111.pdf",
    NEXMJ222: "/certificates/NEXMJ222.pdf",
    NEXMJ333: "/certificates/NEXMJ333.pdf",
    NEXMJ444: "/certificates/NEXMJ444.pdf",
    NEXMJ555: "/certificates/NEXMJ555.pdf",
  };

  // Placeholder, not changing your logic
  const generateDynamicPDF = async (data) => {
    console.log("Generating PDF for:", data);
    return "/PDFS/templatemj.png";
  };

  // ✅ Handle verification
  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setVerificationStatus(null);
    setPdfUrl("");
    setCertificateDetails(null);
    setIsVerified(false);

    const certificateKey = certificateId.toUpperCase();

    // ✅ STATIC CHECK
    if (staticCertificates[certificateKey]) {
      setIsVerified(true);
      setVerificationStatus("Certificate Verified Successfully!");
      setPdfUrl(staticCertificates[certificateKey]);

      // ✅ If NEXMJ — Show Owais details with today's date
      if (certificateKey.startsWith("NEXMJ")) {
        setCertificateDetails({
          name: "Owais Certificate",
          authCode: certificateKey,
          date: new Date(),
        });
      }

      setLoading(false);
      return;
    }

    // ✅ ELSE API CHECK
    try {
      // ✅ Try remote API first
      let response = await fetch(
        "https://api.code4bharat.com/api/student/verifycertificate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ credentialId: certificateKey }),
        }
      );

      let data = await response.json();

      // ✅ If remote fails → fallback to localhost
      if (!response.ok || !data?.data) {
        response = await fetch(
          "http://localhost:5000/api/certificates/verify",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ certificateId: certificateKey }),
          }
        );
        data = await response.json();
      }

      // ✅ Process Success Response
      if (response.ok && data?.data) {
        const cert = data.data;

        setIsVerified(true);
        setVerificationStatus("Certificate Verified Successfully!");
        setCertificateDetails({
          name: cert.name || "N/A",
          authCode: cert.authCode || cert.certificateId || certificateKey,
          date: cert.date || cert.issueDate || new Date(),
          type: cert.type || "N/A",
        });

        // ✅ Localhost PDF preview fetch
        if (response.url.includes("localhost")) {
          const identifier = cert.authCode || cert.certificateId;
          const pdfResponse = await fetch(
            `http://localhost:5000/api/certificates/${identifier}/download/pdf`
          );
          const blob = await pdfResponse.blob();
          const objectUrl = URL.createObjectURL(blob);
          setPreviewUrl(objectUrl);
          // setPdfUrl(objectUrl);
        } else {
          // ✅ Remote or static: Generate dynamic PDF
          const dynamicPdfUrl = await generateDynamicPDF(cert);
          setPdfUrl(dynamicPdfUrl);
          setPreviewUrl("");
        }
      } else {
        setIsVerified(false);
        setVerificationStatus(
          data.message ||
            "Verification Failed. Please check the certificate number."
        );
      }
    } catch (error) {
      console.error("Error during verification:", error);
      setIsVerified(false);
      setVerificationStatus(
        "An error occurred while verifying. Please try again."
      );
    }

    setLoading(false);
  };

  // Animation variants unchanged...
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 min-h-screen py-20 px-4 md:px-8 mt-10">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-white/40 shadow-2xl p-8 md:p-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <div className="flex justify-center mb-4">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text mb-4">
              Certificate Verification
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Please enter the unique certificate number to verify its
              authenticity.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            className="space-y-6"
            variants={itemVariants}
            onSubmit={(e) => {
              e.preventDefault();
              if (typeof window !== "undefined" && typeof gtag === "function") {
                gtag("event", "submit", {
                  event_category: "form",
                  event_label: "Certificate Verification",
                  transport_type: "beacon",
                });
              }
              handleVerification(e);
            }}
          >
            <div>
              <label
                htmlFor="certificateId"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Credential ID
              </label>
              <input
                type="text"
                id="certificateId"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                required
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-lg"
                placeholder="Enter Credential ID (e.g., 'C4B829')"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 text-white font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "click", {
                    event_category: "button",
                    event_label: "Verify Certificate Button",
                    transport_type: "beacon",
                  });
                }
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  Verifying...
                </span>
              ) : (
                "Verify Certificate"
              )}
            </motion.button>
          </motion.form>

          {/* Verification Status */}
          {verificationStatus && (
            <motion.div
              className={`mt-6 p-6 rounded-2xl border-2 ${
                isVerified
                  ? "bg-green-50 border-green-300"
                  : "bg-red-50 border-red-300"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3">
                {isVerified ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600" />
                )}
                <p
                  className={`text-lg font-bold ${
                    isVerified ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {verificationStatus}
                </p>
              </div>
            </motion.div>
          )}

          {/* Certificate Details */}
          {isVerified && certificateDetails && (
            <motion.div
              className="mt-6 bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border-2 border-cyan-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-cyan-600" />
                <h3 className="text-xl font-bold text-gray-800">
                  Certificate Details
                </h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Name:</strong> {certificateDetails.name}
                </p>
                <p>
                  <strong>Auth Code:</strong> {certificateDetails.authCode}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(certificateDetails.date).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          )}

          {/* Localhost PDF Preview */}
          {isVerified && previewUrl && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="hidden md:block bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
                <iframe
                  src={previewUrl}
                  className="w-full h-[600px]"
                  title="Certificate Preview"
                />
              </div>
              {/* Mobile */}
              <div className="md:hidden space-y-4">
                <p className="text-center text-gray-700 font-medium">
                  View or Download Certificate
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Open Certificate
                  </a>
                  <a
                    href={previewUrl}
                    download={`Certificate-${certificateId}.pdf`}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* PDF Viewer */}
          {isVerified && pdfUrl && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Desktop */}
              <div className="hidden md:block bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
                <iframe
                  src={pdfUrl}
                  className="w-full h-[600px]"
                  title="Certificate"
                />
              </div>

              {/* Mobile */}
              <div className="md:hidden space-y-4">
                <p className="text-center text-gray-700 font-medium">
                  View or Download Certificate
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Open Certificate
                  </a>
                  <a
                    href={pdfUrl}
                    download={`Certificate-${certificateId}.pdf`}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
