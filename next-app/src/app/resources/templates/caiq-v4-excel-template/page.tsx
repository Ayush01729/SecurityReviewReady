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
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CAIQ v4 Excel Template & Download Guide [2026]",
  description:
    "Complete CSA CAIQ v4 (Consensus Assessments Initiative Questionnaire) spreadsheet structure. Covers CCM 4.0 control domains and automated answer generation with citations.",
  alternates: {
    canonical: "/resources/templates/caiq-v4-excel-template",
  },
  openGraph: {
    title: "CAIQ v4 Excel Spreadsheet Template & Response Guide (2026)",
    description:
      "A complete guide to the Cloud Security Alliance CAIQ v4 spreadsheet format: 261 controls across 17 domains, CCM 4.0 mapping, and how to auto-fill responses.",
    url: "https://securityreviewready.com/resources/templates/caiq-v4-excel-template",
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
      "name": "CAIQ v4 Excel Template",
      "item": "https://securityreviewready.com/resources/templates/caiq-v4-excel-template",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "CSA CAIQ v4 Excel Template: Structure, CCM 4.0 Mapping & Response Automation",
  "description":
    "Detailed technical guide to the Cloud Security Alliance CAIQ v4 assessment spreadsheet. Explains how to complete 261 controls using AI evidence citations.",
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

export default function CaiqV4ExcelTemplatePage() {
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
                Cloud Security Alliance (CSA)
              </span>
              <span>Updated November 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              CAIQ v4 Excel Template: CCM 4.0 Spreadsheet Structure & Automation
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              The Consensus Assessments Initiative Questionnaire (CAIQ v4) is the cloud industry's authoritative security assessment. This guide explains the 261-control spreadsheet architecture and how to populate answers in under 24 hours with exact audit citations.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#566155]">
              <span>By</span>
              <span className="text-[#1A1C19] font-medium">Security Review Ready Compliance Engineering Team</span>
            </div>
          </header>

          {/* Framework Breakdown */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-base font-semibold text-[#1A1C19] mb-2">
              Understanding the CAIQ v4 Spreadsheet Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#566155] leading-relaxed mb-4">
              Published by the Cloud Security Alliance, CAIQ v4 maps directly to the Cloud Controls Matrix (CCM v4.0). It standardizes 261 questions across 17 domains including Audit & Assurance (A&A), Cryptography (CEK), Datacenter Security (DCS), Identity & Access Management (IAM), and Threat & Vulnerability Management (TVM).
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block">261 Questions</strong>
                <span className="text-[#566155]">Standardized CCM controls</span>
              </div>
              <div className="p-3 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block">17 Domains</strong>
                <span className="text-[#566155]">Full cloud stack coverage</span>
              </div>
              <div className="p-3 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block">Yes/No/NA</strong>
                <span className="text-[#566155]">Requires evidentiary proof</span>
              </div>
            </div>
          </section>

          {/* How to Complete CAIQ v4 Faster */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Why Manual CAIQ Completion Takes 40+ Hours
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              Answering 261 controls requires cross-referencing your SOC 2 Type II controls, AWS or Azure shared responsibility matrices, and encryption configurations. Manual entry by senior engineering staff represents a severe operational drain.
            </p>
            <p className="text-sm text-[#566155] leading-relaxed">
              With <strong>Security Review Ready</strong>, our grounded ingestion engine parses your existing compliance documentation and populates the CAIQ v4 spreadsheet with exact page references, allowing your security team to complete reviews in 1 hour of verification instead of 40 hours of manual writing.
            </p>
          </section>

          {/* Related Guides */}
          <section className="mb-12">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4">Related Cloud Security Frameworks</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/resources/caiq-v4-guide"
                className="p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group"
              >
                <p className="text-sm font-medium text-[#1A1C19] group-hover:text-[#28664A] transition-colors">CAIQ v4 In-Depth Framework Guide</p>
                <p className="text-xs text-[#566155]">Control mapping, differences from v3, and response strategies</p>
              </Link>
              <Link
                href="/resources/sig-vs-sig-lite"
                className="p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group"
              >
                <p className="text-sm font-medium text-[#1A1C19] group-hover:text-[#28664A] transition-colors">SIG vs SIG Lite Comparison</p>
                <p className="text-xs text-[#566155]">Shared Assessments framework breakdown</p>
              </Link>
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCta
            source="CAIQ v4 Excel Template"
            badge="Free 24-Hour Evaluation"
            heading="Have a CAIQ v4 Spreadsheet to Answer?"
            description="Upload your CAIQ workbook and compliance documentation. We'll populate your answers with exact paragraph citations within 24 hours at zero cost."
            buttonText="Start Free CAIQ Pilot"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
