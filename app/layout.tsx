import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sfairpsafetypartners.com'),
  title: {
    default: "SFAIRP SAFETY PARTNERS | Industrial Safety Consultancy",
    template: "%s | SFAIRP SAFETY PARTNERS"
  },
  description: "High-trust safety audits, systems, and training for construction, warehousing, and major hazard facilities. Establishing authoritative safety cultures.",
  keywords: ["safety consultancy", "HSE management", "safety audit", "industrial safety", "SFAIRP", "workplace safety"],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.sfairpsafetypartners.com",
    siteName: "SFAIRP SAFETY PARTNERS",
    title: "SFAIRP SAFETY PARTNERS | Industrial Safety Consultancy",
    description: "Expert WHS and risk-mitigation advice for high-stakes operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SFAIRP SAFETY PARTNERS | Industrial Safety Consultancy",
    description: "Expert WHS and risk-mitigation advice for high-stakes operations.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SFAIRP SAFETY PARTNERS",
    "url": "https://www.sfairpsafetypartners.com",
    "description": "Professional HSE consultancy delivering compliance, risk management, and high-risk safety solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61 449 853 255",
      "contactType": "technical support"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
