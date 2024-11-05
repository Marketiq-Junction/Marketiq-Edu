import React from "react"
import "./globals.css";
export const metadata = {
  title: 'MarketIQ.Edu',
  description: 'marketiq education',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
