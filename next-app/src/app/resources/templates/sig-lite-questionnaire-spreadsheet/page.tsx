import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SIG Lite Questionnaire Spreadsheet Template [2026]",
  description:
    "SIG Lite (Standardized Information Gathering) spreadsheet structure, 125 core questions, Shared Assessments risk domains, and automated response generation.",
  alternates: {
    canonical: "/resources/templates/sig-lite-questionnaire-spreadsheet",
  },
  openGraph: {
    title: "SIG Lite Questionnaire Spreadsheet Template & Response Guide",
    description:
      "A complete overview of the Shared Assessments SIG Lite spreadsheet: 125 questions across 18 risk domains and how to auto-populate answers with citations.",
    url: "https://securityreviewready.com/resources/templates/sig-lite-questionnaire-spreadsheet",
    siteName: "Security Review Ready",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://securityreviewready.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources & Guides",
      "item": "https://securityreviewready.com/resources",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SIG Lite Questionnaire Spreadsheet",
      "item": "https://securityreviewready.com/resources/templates/sig-lite-questionnaire-spreadsheet",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "SIG Lite Questionnaire Spreadsheet Template: Structure and Response Automation",
  "description":
    "Detailed guide to the Shared Assessments Standardized Information Gathering (SIG Lite) spreadsheet format, covering all 18 enterprise risk domains.",
  "author": {
    "@type": "Person",
    "name": "Security Review Ready Team",
    "url": "https://securityreviewready.com",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Security Review Ready",
    "logo": {
      "@type": "ImageObject",
      "url": "https://securityreviewready.com/icon.svg",
    },
  },
  "datePublished": "2026-11-24",
  "dateModified": "2026-11-24",
};

export default function SigLiteQuestionnaireSpreadsheetPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <article className="max-w-[880px] mx-auto px-6">
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Templates</span>
          </nav>

          {/* Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Shared Assessments Standard
              </span>
              <span>Updated November 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              SIG Lite Questionnaire Spreadsheet: Overview & Automation Guide
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              The Standardized Information Gathering (SIG) Lite spreadsheet is the default assessment standard for enterprise financial institutions, healthcare providers, and Fortune 500 procurement teams.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#566155]">
              <span>By</span>
              <span className="text-[#1A1C19] font-medium">Security Review Ready Compliance Engineering Team</span>
            </div>
          </header>

          {/* SIG Lite Architecture */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-base font-semibold text-[#1A1C19] mb-2">
              SIG Lite Spreadsheet Structure (125 Core Controls)
            </h2>
            <p className="text-xs sm:text-sm text-[#566155] leading-relaxed mb-4">
              Unlike the massive 800+ question SIG Full, SIG Lite distills vendor assessment into ~125 high-priority questions across 18 critical risk domains: Enterprise Risk Management, Security Policy, Organizational Security, Asset Management, HR Security, Physical Security, Communications, Access Control, and Incident Management.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block">~125 Controls</strong>
                <span className="text-[#566155]">Focused on high-impact risks</span>
              </div>
              <div className="p-3 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block">18 Risk Domains</strong>
                <span className="text-[#566155]">Shared Assessments standard</span>
              </div>
              <div className="p-3 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block">Multi-Tab Format</strong>
                <span className="text-[#566155]">Macros and scoring formulas</span>
              </div>
            </div>
          </section>

          {/* Handling SIG Workbooks Without Formula Corruption */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Why Formula Preservation Is Vital on SIG Workbooks
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              Enterprise procurement teams use macro-enabled SIG spreadsheets that automatically compute compliance scores across weighted tabs. Generic AI response tools or manual cut-and-paste jobs frequently break these nested formulas, forcing vendors to resubmit.
            </p>
            <p className="text-sm text-[#566155] leading-relaxed">
              Security Review Ready features native multi-tab cell injection that writes responses directly into target cells while preserving every formula, validation dropdown, and scoring script completely intact.
            </p>
          </section>

          {/* Inline CTA */}
          <InlineCta
            source="SIG Lite Questionnaire Spreadsheet"
            badge="Free 24-Hour Evaluation"
            heading="Received a SIG Lite Spreadsheet from an Enterprise Buyer?"
            description="Upload your workbook and compliance policies. We will return completed, citation-grounded answers in under 24 hours at zero cost."
            buttonText="Start Free SIG Lite Pilot"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
