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

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "SecurityReviewReady";
const isUserSite = repoName.toLowerCase().endsWith(".github.io");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (repoName && !isUserSite ? `/${repoName}` : "");
const iconUrl = `${basePath}/icon.svg`;

export const metadata: Metadata = {
  title: "Security Review Ready — Parallel Security Questionnaire Engine for B2B SaaS",
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
  openGraph: {
    title: "Security Review Ready — Parallel Security Questionnaire Engine for B2B SaaS",
    description:
      "Stop putting deals on hold for repetitive questionnaires. 100% cited source evidence and human-in-the-loop review.",
    url: "https://securityreviewready.com",
    siteName: "Security Review Ready",
    type: "website",
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
