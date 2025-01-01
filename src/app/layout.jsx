import React from "react";
import "./globals.css";

export const metadata = {
  title: "Education Marketiq-Junction | Empowering Digital Marketing Careers",
  description:
    "Empower your career with Education Marketiq-Junction. Learn cutting-edge digital marketing skills and strategies to thrive in the modern business landscape.",
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
          content="Digital Marketing, Marketiq-Junction, Marketing Education, Digital Skills, Empower Careers"
        />
        <meta name="author" content="Marketiq-Junction" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Metadata for Social Sharing */}
        <meta property="og:title" content="Education Marketiq-Junction" />
        <meta
          property="og:description"
          content="Empower your career with Education Marketiq-Junction. Learn cutting-edge digital marketing skills and strategies to thrive in the modern business landscape."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://education.marketiq-junction.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Education Marketiq-Junction" />
        <meta
          name="twitter:description"
          content="Learn and master digital marketing with Marketiq-Junction."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        {/* Robots and Canonical Links */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://education.marketiq-junction.com/" />

        {/* Structured Data (Schema Markup) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Education Marketiq-Junction",
              url: "https://education.marketiq-junction.com/",
              logo: "https://education.marketiq-junction.com/favicon/favicon-16x16.png",
              description:
                "Empowering individuals with skills in digital marketing to enhance their careers and grow their businesses.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Downtown Business Hub",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1 123-456-7890",
                  contactType: "Customer Service",
                  areaServed: "Global",
                  availableLanguage: ["English"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/MarketiqJunction",
                "https://twitter.com/MarketiqJunction",
                "https://linkedin.com/company/MarketiqJunction",
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
