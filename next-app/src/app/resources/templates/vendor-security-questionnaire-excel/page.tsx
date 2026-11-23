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
  Download,
  HelpCircle,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vendor Security Questionnaire Excel Template [2026]",
  description:
    "Free 68-question Vendor Security Questionnaire template in Excel format. Covers access control, encryption, incident response, SOC 2 mapping, and automated AI response setup.",
  alternates: {
    canonical: "/resources/templates/vendor-security-questionnaire-excel",
  },
  openGraph: {
    title: "Vendor Security Questionnaire Excel Template & Checklist (2026)",
    description:
      "Download a 68-question vendor security questionnaire template covering critical enterprise domains. Learn how to auto-fill it with verified citations in minutes.",
    url: "https://securityreviewready.com/resources/templates/vendor-security-questionnaire-excel",
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
      "name": "Vendor Security Questionnaire Excel",
      "item": "https://securityreviewready.com/resources/templates/vendor-security-questionnaire-excel",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Vendor Security Questionnaire Excel Template: 68-Question Standard Framework",
  "description":
    "Complete breakdown and structure of a standardized Vendor Security Assessment Questionnaire spreadsheet. Includes domain mappings to SOC 2 and ISO 27001.",
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

const DOMAINS = [
  {
    name: "Access Control & Identity Governance",
    count: "12 Questions",
    examples: "MFA enforcement, SCIM deprovisioning SLA, password policies, privileged access management.",
  },
  {
    name: "Data Protection & Cryptography",
    count: "10 Questions",
    examples: "AES-256 at rest, TLS 1.3 in transit, KMS key rotation, tenant database isolation.",
  },
  {
    name: "Vulnerability Management & Pen Testing",
    count: "8 Questions",
    examples: "Annual third-party pen test frequency, critical CVSS 9.0+ patch SLAs, container scanning.",
  },
  {
    name: "Incident Response & Breach SLAs",
    count: "8 Questions",
    examples: "48-hour customer notification timeline, tabletop exercises, forensic logging.",
  },
  {
    name: "Business Continuity & Disaster Recovery",
    count: "6 Questions",
    examples: "RTO (< 4 hrs) and RPO (< 1 hr) commitments, quarterly backup restoration validation.",
  },
  {
    name: "Third-Party Subprocessor Management",
    count: "8 Questions",
    examples: "Public subprocessor register, 30-day notice for vendor changes, annual vendor audits.",
  },
  {
    name: "AI & Machine Learning Governance",
    count: "6 Questions",
    examples: "Customer data exclusion from public LLM training, zero-retention API configurations.",
  },
  {
    name: "Compliance, Audits & Physical Security",
    count: "10 Questions",
    examples: "SOC 2 Type II audit window, ISO 27001 cert, cloud data center certifications.",
  },
];

export default function VendorSecurityQuestionnaireExcelPage() {
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
                Excel Template & Framework
              </span>
              <span>Updated November 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              Vendor Security Questionnaire Excel Template: 68-Question Standard Checklist
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Looking for a comprehensive, auditor-grade vendor security questionnaire template in Excel format? This 68-question framework covers critical enterprise risk domains, complete with SOC 2 control mappings and automated answer guidance.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#566155]">
              <span>Author</span>
              <span className="text-[#1A1C19] font-medium">Security Review Ready Compliance Architecture Group</span>
            </div>
          </header>

          {/* Overview Box */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#EBF3EF] text-[#074E34] flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-[#1A1C19] mb-1">
                  Standard Vendor Assessment Questionnaire (.xlsx structure)
                </h2>
                <p className="text-xs text-[#566155] leading-relaxed mb-3">
                  This template represents the standard compromise between lightweight 20-question checklists and overwhelming 800-question SIG Full workbooks. It contains 68 vetted questions mapped directly to SOC 2 Trust Services Criteria and ISO 27001:2022 annex controls.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#074E34]">
                  <span className="px-2 py-0.5 rounded bg-[#EBF3EF] border border-[#C2DDD0]">68 Control Questions</span>
                  <span className="px-2 py-0.5 rounded bg-[#EBF3EF] border border-[#C2DDD0]">8 Core Security Domains</span>
                  <span className="px-2 py-0.5 rounded bg-[#EBF3EF] border border-[#C2DDD0]">Pre-mapped to SOC 2 CC6/CC7/CC9</span>
                </div>
              </div>
            </div>
          </section>

          {/* Core Domains Grid */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Questionnaire Structure by Security Domain
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DOMAINS.map((domain) => (
                <div key={domain.name} className="p-5 bg-white rounded-xl border border-[#E7E5DE] shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-sm text-[#1A1C19]">{domain.name}</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#FAF9F6] border border-[#E7E5DE] text-[#566155]">
                      {domain.count}
                    </span>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">
                    {domain.examples}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Automate this Template */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm space-y-4">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19]">
              How to Auto-Fill This Questionnaire in Under 24 Hours
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed">
              If an enterprise buyer has sent you this questionnaire (or if you are evaluating suppliers), you do not need to manually research 68 answers from scattered policy PDFs.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#566155]">
                  <strong className="text-[#1A1C19]">1. Upload Your Compliance Vault:</strong> Connect your SOC 2 Type II report, ISO 27001 policies, and trust center documentation.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#566155]">
                  <strong className="text-[#1A1C19]">2. Instant AI Matching with Citations:</strong> Security Review Ready fills every cell, appending the exact document title, section header, and page number.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#566155]">
                  <strong className="text-[#1A1C19]">3. One-Click Verification:</strong> Review answers in our side-by-side verification workbench and export back to your buyer's original Excel file without formula corruption.
                </p>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCta
            source="Vendor Security Questionnaire Excel Template"
            badge="Free 24-Hour Evaluation"
            heading="Get This Questionnaire Answered Free"
            description="Have a customer vendor assessment waiting on your desk? Submit your questionnaire and compliance documentation to receive 100% cited draft responses in under 24 hours at zero cost."
            buttonText="Auto-Fill My Questionnaire Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
