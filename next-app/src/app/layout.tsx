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
  title: "Security Questionnaire Automation for B2B SaaS | Security Review Ready",
  description:
    "Security Review Ready automates security questionnaires for B2B SaaS teams. Complete CAIQ, SIG, DDQ, and custom vendor assessments in minutes with 100% verified source citations and zero hallucinations.",
  keywords: [
    "Security Questionnaire Automation",
    "Security Questionnaire Software",
    "vCISO Security Questionnaire",
    "Fractional CISO Questionnaire Automation",
    "AI Security Questionnaire",
    "Vendor Security Assessment Automation",
    "Vendor Risk Questionnaire Automation",
    "DDQ Automation",
    "Security Review Automation",
    "SOC 2 Vendor Assessment",
    "CAIQ v4",
    "SIG Questionnaire",
    "Enterprise Security Review",
    "B2B SaaS Compliance",
    "Conveyor Alternative",
    "Whistic Alternative",
    "Wolfia Alternative",
    "Vanta Questionnaire Alternative",
  ],
  authors: [{ name: "Security Review Ready" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Security Questionnaire Automation for B2B SaaS | Security Review Ready",
    description:
      "Complete CAIQ, SIG, DDQ, and custom vendor security questionnaires in minutes. 100% verified source citations, zero hallucinations, human-in-the-loop review.",
    url: siteUrl,
    siteName: "Security Review Ready",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Security Review Ready: Security Questionnaire Engine for B2B Teams",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Questionnaire Automation for B2B SaaS | Security Review Ready",
    description:
      "Complete CAIQ, SIG, DDQ, and custom vendor security questionnaires in minutes. 100% verified source citations, zero hallucinations.",
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
      "hasPart": [
        {
          "@type": "WebPage",
          "@id": "https://securityreviewready.com/how-it-works",
          "url": "https://securityreviewready.com/how-it-works",
          "name": "How It Works",
          "description": "3-stage AI security questionnaire engine architecture, evidence ingestion, and human verification."
        },
        {
          "@type": "WebPage",
          "@id": "https://securityreviewready.com/demo",
          "url": "https://securityreviewready.com/demo",
          "name": "Book a Demo",
          "description": "Schedule a personalized 15-minute walkthrough of the Security Review Ready evidence citation engine."
        },
        {
          "@type": "WebPage",
          "@id": "https://securityreviewready.com/resources",
          "url": "https://securityreviewready.com/resources",
          "name": "Resources and Guides",
          "description": "Security review playbooks, CAIQ v4 checklists, and vendor questionnaire templates."
        },
        {
          "@type": "WebPage",
          "@id": "https://securityreviewready.com/compare",
          "url": "https://securityreviewready.com/compare",
          "name": "Compare Alternatives",
          "description": "Side-by-side feature and citation accuracy comparisons against Conveyor and Whistic."
        },
        {
          "@type": "WebPage",
          "@id": "https://securityreviewready.com/security",
          "url": "https://securityreviewready.com/security",
          "name": "Security and Governance",
          "description": "SOC 2 Type II audit, AES-256 KMS encryption, and zero public AI model training architecture."
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://securityreviewready.com/#organization",
      "name": "Security Review Ready",
      "url": "https://securityreviewready.com/",
      "logo": "https://securityreviewready.com/icon.svg",
      "description":
        "Enterprise vendor security assessment automation and questionnaire workspace for B2B SaaS teams.",
      "email": "team@securityreviewready.com",
      "sameAs": [
        "https://twitter.com/securityreviewready",
        "https://linkedin.com/company/securityreviewready",
        "https://github.com/securityreviewready"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "team@securityreviewready.com",
        "url": "https://securityreviewready.com/#early-access"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://securityreviewready.com/#software",
      "name": "Security Review Ready",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Security Questionnaire Automation",
      "operatingSystem": "Web, Cloud",
      "url": "https://securityreviewready.com/",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "name": "Free Pilot — First Security Questionnaire",
        "description": "Complete your first customer security questionnaire free in under 24 hours.",
        "availability": "https://schema.org/InStock"
      },
      "featureList": [
        "100% Verified Source Evidence Citations — every answer cites document name, section, and page number",
        "Zero Hallucination Guardrails — refuses to generate any claim without a cited source",
        "Multi-Tab Complex Excel Formula Preservation",
        "CAIQ v4, SIG, SIG Lite, VSA, DDQ questionnaire support",
        "SOC 2 Type II and ISO 27001 evidence ingestion",
        "Human-in-the-Loop Review and One-Click Approval Workflow",
        "Continuous Auto-Sync for Trust Centers and Security Policies",
        "Vendor Portal Helper for OneTrust, Whistic, Conveyor, and ServiceNow"
      ],
      "description":
        "AI security questionnaire automation engine that ingests SOC 2 reports, ISO 27001 certificates, and trust center documentation to draft verified, source-cited responses to CAIQ, SIG, DDQ, and custom vendor security assessments.",
      "category": "Security Questionnaire Automation Software",
      "releaseNotes": "Free pilot tier: submit your first customer security questionnaire and receive source-cited responses in under 24 hours.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://securityreviewready.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Security Review Ready?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Security Review Ready is a purpose-built workspace that helps B2B SaaS teams complete customer security reviews faster. It ingests your verified security documentation (policies, SOC 2 reports, trust centers) and generates accurate, source-cited responses to incoming enterprise questionnaires."
          }
        },
        {
          "@type": "Question",
          "name": "How does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You upload or link your security documentation once. When a prospective enterprise customer sends a questionnaire (spreadsheet, portal, or form), Security Review Ready matches each requirement against your verified evidence, drafts grounded responses, and points your reviewer directly to the exact source paragraph with page numbers."
          }
        },
        {
          "@type": "Question",
          "name": "Does it automatically send answers to customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We enforce a strict 'human-in-the-loop' safeguard. Suggested answers remain drafts until someone from your team reviews and approves them. You never risk sending an unverified claim or unapproved commitment to an enterprise buyer."
          }
        },
        {
          "@type": "Question",
          "name": "What documents and sources can I connect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can connect public trust center URLs, internal security policies (PDF, Markdown, Word), SOC 2 Type II audit reports, ISO 27001 certifications, CAIQ v4 spreadsheets, and previously completed vendor questionnaires."
          }
        },
        {
          "@type": "Question",
          "name": "Are the answers reviewed by a human?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, always. The platform is designed around rapid human verification. Instead of writing from scratch or searching multiple tabs, your reviewer simply validates the grounded citation and approves with a single click."
          }
        },
        {
          "@type": "Question",
          "name": "Is my company's information secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We enforce strict multi-tenant data isolation, AES-256 encryption at rest, TLS 1.3 in transit, and role-based permissions. Your sensitive security policies are strictly never used to train public or foundational third-party AI models."
          }
        },
        {
          "@type": "Question",
          "name": "Who is this built for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Early-stage to growth B2B SaaS teams (seed to Series B) selling into mid-market and enterprise accounts where procurement requires formal vendor risk assessments (CAIQ, SIG, or custom RFPs)."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get my first questionnaire run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Drop your work email in the form on our site. You will immediately receive instructions to upload your security documentation and first client questionnaire. We'll parse your evidence and return your completed, source-cited responses in under 24 hours (100% free)."
          }
        }
      ]
    }
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
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM context and documentation" />
        <link rel="ard" href="/.well-known/ard.json" />
        <link rel="ai-catalog" href="/.well-known/ai-catalog.json" />
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
