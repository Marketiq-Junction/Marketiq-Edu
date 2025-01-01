import React from "react";
import "./globals.css";

export const metadata = {
  title: "Education Marketiq-Junction | Transforming Education with Technology",
  description:
   "Empower your career with Marketiq Junction. Learn cutting-edge digital marketing skills and strategies to thrive in the modern business landscape."
};

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <head>
        {/* Basic Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Empower your career with Marketiq Junction. Learn cutting-edge digital marketing skills and strategies to thrive in the modern business landscape."
        />
        <meta name="author" content="Code4Bharat" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Metadata for Social Sharing */}
        <meta property="og:title" content="Marketiq-Junction" />
        <meta
          property="og:description"
          content="Empowering students and educators with technology-driven learning."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://education.code4bharat.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Education Code for Bharat" />
        <meta
          name="twitter:description"
          content="Empowering students with EdTech solutions."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        {/* Robots and Canonical Links */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://education.code4bharat.com/" />

        {/* Structured Data (Schema Markup) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Education Code for Bharat",
              url: "https://education.code4bharat.com/",
              logo: "https://education.code4bharat.com/favicon/favicon-16x16.png",
              description:
                "Transforming education through innovative digital solutions.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Off BKC Kurla",
                addressLocality: "Mumbai",
                addressRegion: "MH",
                postalCode: "400070",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91 9594402916",
                  contactType: "Customer Service",
                  areaServed: "IN",
                  availableLanguage: ["English"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/Code4Bharat",
                "https://twitter.com/Code4Bharat",
                "https://linkedin.com/company/Code4Bharat",
              ],
            }),
          }}
        ></script>

        {/* Favicon for all devices */}
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" />
      </head>
      <body>{children}</body>
    </html>
  );
}
