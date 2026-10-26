import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
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
const iconUrl = `${basePath}/icon.svg`;

const siteUrl = "https://securityreviewready.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Security Review Ready — Security Questionnaire Engine for B2B Teams",
  description:
    "Feed in your security documentation once. Ingest policies, live trust center URLs, and SOC 2 audits to continuously fill customer security questionnaires for all enterprise buyers in parallel with exact source citations.",
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
    title: "Security Review Ready — Security Questionnaire Engine for B2B Teams",
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
        alt: "Security Review Ready — Parallel Security Questionnaire Engine for B2B Teams",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Review Ready — Security Questionnaire Engine for B2B Teams",
    description:
      "Stop putting deals on hold for repetitive questionnaires. 100% cited source evidence and human-in-the-loop review.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: iconUrl, type: "image/svg+xml" },
    ],
    shortcut: iconUrl,
    apple: iconUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#FAF9F6] text-[#1A1C19] font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
