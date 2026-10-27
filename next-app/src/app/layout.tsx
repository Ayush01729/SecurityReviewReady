import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = "https://securityreviewready.com";

export const viewport: Viewport = {
  themeColor: "#28664A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Security Review Ready — Security Questionnaire Engine",
  description:
    "Security Review Ready is an AI security questionnaire engine for B2B SaaS teams. Complete customer security reviews faster with 100% verified source citations.",
  keywords: [
    "Security Questionnaire Automation",
    "SOC 2 Vendor Assessment",
    "CAIQ v4",
    "Enterprise Security Review",
    "B2B SaaS Compliance",
    "SIG Questionnaire",
  ],
  authors: [{ name: "Security Review Ready" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Security Review Ready — Security Questionnaire Engine",
    description:
      "Stop putting deals on hold for repetitive questionnaires. 100% cited source evidence and human-in-the-loop review.",
    url: siteUrl,
    siteName: "Security Review Ready",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Security Review Ready — Security Questionnaire Engine for B2B Teams",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Review Ready — Security Questionnaire Engine",
    description:
      "Stop putting deals on hold for repetitive questionnaires. 100% cited source evidence and human-in-the-loop review.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "32x32" },
      { url: `${basePath}/icon-48.png`, sizes: "48x48", type: "image/png" },
      { url: `${basePath}/icon-96.png`, sizes: "96x96", type: "image/png" },
      { url: `${basePath}/icon-192.png`, sizes: "192x192", type: "image/png" },
      { url: `${basePath}/icon.svg`, type: "image/svg+xml" },
    ],
    shortcut: `${basePath}/favicon.ico`,
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: `${basePath}/site.webmanifest`,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://securityreviewready.com/#website",
      "url": "https://securityreviewready.com/",
      "name": "Security Review Ready",
      "alternateName": ["SecurityReviewReady", "SRR"],
      "description":
        "AI security questionnaire engine for B2B SaaS teams to complete customer security reviews faster with verified citations.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://securityreviewready.com/#software",
      "name": "Security Review Ready",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://securityreviewready.com/",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "description":
        "Ingests security policies, live trust center URLs, and SOC 2 audits to continuously fill customer security questionnaires for enterprise buyers.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#FAF9F6] text-[#1A1C19] font-sans antialiased min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
