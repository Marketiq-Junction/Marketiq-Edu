"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [certificateDetails, setCertificateDetails] = useState(null);

  // Static certificate map (static PDFs)
  const certificateMap = {
    C4B829: "/PDFS/C4B829.pdf",
    C4B104: "/PDFS/C4B104.pdf",
    C4B562: "/PDFS/C4B562.pdf",
    C4B738: "/PDFS/C4B738.pdf",
  };

  // Utility: Load an image and convert it to a Data URL (base64)
  const loadImageAsDataUrl = (url) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      };
      img.onerror = () => reject(new Error("Could not load image at " + url));
      img.src = url;
    });

  // Function to generate a dynamic PDF using MarketIQ Junction's template
  const generateDynamicPDF = async (data) => {
    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      // Use the MarketIQ template image
      const imgUrl = "/PDFS/templatemj.png";
      const imgData = await loadImageAsDataUrl(imgUrl);

      // Get page dimensions
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Add the background image covering the entire page
      doc.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);

      // Add certificate details over the template
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      // Center the name text
      doc.text(data.name, pageWidth / 2, 380, { align: "center" });

      // Certificate Auth Code
      doc.setFont("helvetica", "normal");
      doc.setFontSize(18);
      doc.text(`${data.authCode}`, 250, 690);

      // Certificate Date (formatted)
      const formattedDate = new Date(data.date).toLocaleDateString();
      doc.setFontSize(18);
      doc.text(`${formattedDate}`, 280, 570);

      // Convert the generated PDF to a Blob URL for display or download
      const pdfBlob = doc.output("blob");
      return URL.createObjectURL(pdfBlob);
    } catch (error) {
      console.error("Error generating dynamic PDF with jsPDF:", error);
      return "";
    }
  };

  // Handle verification logic (both static and dynamic)
  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setVerificationStatus(null);
    setPdfUrl("");
    setCertificateDetails(null);
    setIsVerified(false);

    const certificateKey = certificateId.toUpperCase();

    // Check static certificate map first
    if (certificateMap[certificateKey]) {
      setIsVerified(true);
      setVerificationStatus("Certificate Verified Successfully (Static)!");
      setPdfUrl(certificateMap[certificateKey]);
    } else {
      // If not found in static map, call the backend API
      try {
        const response = await fetch(
          "https://api.code4bharat.com/api/student/verifycertificate",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ credentialId: certificateKey }),
          }
        );
        const data = await response.json();

        if (response.ok && data.data) {
          setIsVerified(true);
          setVerificationStatus("Certificate Verified Successfully (Dynamic)!");
          setCertificateDetails({
            name: data.data.name,
            authCode: data.data.authCode,
            date: data.data.date,
            type: "Marketiq",
          });

          // Generate a dynamic PDF with the certificate details using the MarketIQ template
          const dynamicPdfUrl = await generateDynamicPDF(data.data);
          setPdfUrl(dynamicPdfUrl);
        } else {
          setIsVerified(false);
          setVerificationStatus(
            data.message ||
              "Verification Failed. Please check the certificate number."
          );
        }
      } catch (error) {
        console.error("Error during dynamic verification:", error);
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
            MarketIQ Certificate Verification
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg mt-2 md:mt-4 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            Please enter the unique certificate number to verify its authenticity.
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
              placeholder="Enter the Credential ID (e.g., 'MJ7856')"
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

        {isVerified && pdfUrl && (
          <motion.div
            className="mt-6 w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            {/* Desktop view: Display PDF in an iframe */}
            <div className="hidden md:block">
              <iframe
                src={pdfUrl}
                className="w-full h-[500px] border rounded-md"
                title="Certificate"
              />
            </div>

            {/* Mobile view: Fallback options to open or download the PDF */}
            <div className="md:hidden flex flex-col items-center">
              <p className="text-gray-600 mb-2">View or Download Certificate</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Open Certificate
              </a>
              <a
                href={pdfUrl}
                download={`Certificate-${certificateId}.pdf`}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Download PDF
              </a>
            </div>
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
              Date: {new Date(certificateDetails.date).toLocaleDateString()}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VerifyCertificate;
