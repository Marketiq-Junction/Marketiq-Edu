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

      // Use the MarketIQ template
      const imgUrl = "/PDFS/templatemj.png"; 
      const imgData = await loadImageAsDataUrl(imgUrl);

      // Get page dimensions
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Add the background image (covering the whole page)
      doc.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);

      // Set up font properties and positions for MarketIQ Junction
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      doc.text(data.name, pageWidth / 2, 380, { align: "center" });

      // Certificate Auth Code
      doc.setFont("helvetica", "normal");
      doc.setFontSize(18);
      doc.text(`${data.authCode}`, 250, 690);

      // Certificate Date (formatted)
      const formattedDate = new Date(data.date).toLocaleDateString();
      doc.setFontSize(18);
      doc.text(`${formattedDate}`, 280, 570);

      // Convert the generated PDF to a Blob URL for display
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

    // Check static map first
    if (certificateMap[certificateKey]) {
      setIsVerified(true);
      setVerificationStatus("Certificate Verified Successfully (Static)!");
      setPdfUrl(certificateMap[certificateKey]);
    } else {
      // If not static, hit the backend API
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

          // Generate MarketIQ Junction PDF
          const dynamicPdfUrl = await generateDynamicPDF(data.data);
          setPdfUrl(dynamicPdfUrl);
        } else {
          setIsVerified(false);
          setVerificationStatus(
            data.message || "Verification Failed. Please check the certificate number."
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
            <label htmlFor="certificateId" className="block text-sm font-medium text-gray-600">
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

        {isVerified && pdfUrl && (
          <motion.div className="mt-6 w-full">
            <iframe src={pdfUrl} className="w-full h-[500px] border rounded-md" title="Certificate" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VerifyCertificate;
