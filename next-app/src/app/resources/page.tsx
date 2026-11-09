import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import { BookOpen, Clock, ArrowRight, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Review & Compliance Resources Hub | Security Review Ready",
  description:
    "Explore actionable guides, templates, and frameworks for completing vendor security questionnaires, CAIQ v4, SIG assessments, and enterprise RFPs faster.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Security Review & Compliance Resources Hub | Security Review Ready",
    description:
      "Actionable playbooks, checklists, and guides for automating customer security reviews, CAIQ v4, SIG questionnaires, and vendor risk assessments.",
    url: "https://securityreviewready.com/resources",
    siteName: "Security Review Ready",
    type: "website",
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
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the fastest way to complete customer security questionnaires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fastest approach is indexing verified compliance evidence (SOC 2 Type II, ISO 27001, penetration test letters, and policies) into a dedicated deterministic retrieval engine that maps questions to exact paragraph evidence with human verification.",
      },
    },
    {
      "@type": "Question",
      "name": "What security frameworks do enterprise buyers require most frequently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common frameworks required during vendor procurement include SOC 2 Type II, Cloud Security Alliance CAIQ v4, Shared Assessments SIG and SIG Lite, ISO 27001, and custom proprietary enterprise Excel workbooks.",
      },
    },
  ],
};

const ARTICLES = [
  {
    slug: "security-questionnaire-examples",
    title: "50 Security Questionnaire Examples: Questions & Answers for Vendors & Buyers",
    description:
      "35 real vendor security inquiries across encryption, access control, penetration testing, and disaster recovery with auditor intent, plus 20 questions enterprise buyers should ask.",
    tag: "Control Matrix Reference",
    readTime: "22 min read",
    highlight: "50 audit-proof questions & templates",
  },
  {
    slug: "best-security-questionnaire-automation-software",
    title: "Best Security Questionnaire Automation Software & Tools (2026 Comparison)",
    description:
      "Objective evaluation of leading platforms including Security Review Ready, Conveyor, Whistic, SafeBase, 1up.ai, and HyperComply across citation fidelity, macro retention, and pricing.",
    tag: "Buyer's Guide & Tools",
    readTime: "16 min read",
    highlight: "8-tool comparison matrix with pricing",
  },
  {
    slug: "vendor-security-questionnaire-guide",
    title: "The Complete Guide to Vendor Security Questionnaires: Checklist & 30-Question Template",
    description:
      "A practical breakdown of the 6 essential security domains, buyer scoring rubrics, 7 red flags, and the 30 core questions every B2B SaaS company must answer for enterprise buyers.",
    tag: "Checklists & Templates",
    readTime: "18 min read",
    highlight: "30 questions with full answers & rubrics",
  },
  {
    slug: "security-questionnaire-automation",
    title: "Security Questionnaire Automation: How Modern SaaS Teams Cut Response Time by 90%",
    description:
      "A comprehensive technical guide to eliminating vendor risk bottlenecks, preserving multi-tab Excel calculation formulas, and scaling customer reviews with verified citations.",
    tag: "Automation & Engineering",
    readTime: "15 min read",
    highlight: "10-point evaluation checklist & time study",
  },
  {
    slug: "ai-agents-for-security-questionnaires",
    title: "AI Agents for Security Questionnaires: Leading Tools, Grounded Citations & Governance",
    description:
      "Why naive ChatGPT prompts create contractual breach liabilities, how deterministic RAG agent pipelines ensure 100% audit-proof evidence citations, and how AI notetakers pass reviews.",
    tag: "AI Architecture & Risk",
    readTime: "14 min read",
    highlight: "Tool comparison & hallucination checks",
  },
  {
    slug: "caiq-v4-guide",
    title: "What is CAIQ v4? Automated CAIQ & Cloud Security Alliance Guide",
    description:
      "Everything you need to know about CSA CAIQ v4, how it maps to CCM 4.0 controls, major differences from CAIQ v3, real sample responses, and how automated CAIQ pipelines work.",
    tag: "Framework Guides",
    readTime: "11 min read",
    highlight: "Updated for CSA CCM 4.0 & automation",
  },
  {
    slug: "sig-vs-sig-lite",
    title: "SIG vs SIG Lite: Core Differences, Question Breakdown & Response Guide",
    description:
      "Understand the key distinctions between Shared Assessments Full SIG and SIG Lite, question volume (850+ vs 125), negotiation scripts, and multi-tab Excel automation.",
    tag: "Comparisons & Standards",
    readTime: "12 min read",
    highlight: "Domain comparison & negotiation script",
  },
  {
    slug: "how-to-answer-security-questionnaires-fast",
    title: "How to Complete Enterprise Security Questionnaires in Minutes Without Hallucinations",
    description:
      "The modern 5-step playbook for sales engineers and security leaders to stop questionnaire deal slippage, prepare the 6 core evidence documents, and maintain audit-proof citations.",
    tag: "Playbooks & Operations",
    readTime: "14 min read",
    highlight: "5-step playbook & evidence checklist",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <div className="max-w-[1040px] mx-auto px-6">
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Resources & Guides</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Security Review Knowledge Base
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1C19] max-w-3xl leading-tight">
              Security Review Playbooks, Templates & Framework Guides
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] max-w-2xl leading-relaxed">
              Actionable resources designed to help B2B SaaS founders, security leads, and sales engineers navigate enterprise procurement with confidence.
            </p>
          </div>

          {/* Core Knowledge Pillars Overview */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-3">
              Essential Frameworks in Enterprise Vendor Due Diligence
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              When software companies sell to mid-market and enterprise buyers, compliance reviews typically demand proof across standardized or custom questionnaire formats. Our research library breaks down each major framework:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#074E34] block mb-1 font-mono uppercase">Cloud Security (CSA CAIQ)</strong>
                <span className="text-[#566155]">
                  261 controls aligned with CCM 4.0 spanning cloud tenancy, cryptographic ciphers, and hypervisor isolation.
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#074E34] block mb-1 font-mono uppercase">Enterprise Third-Party (SIG)</strong>
                <span className="text-[#566155]">
                  Shared Assessments SIG Core (850+ questions) and SIG Lite (125 questions) for regulated financial and healthcare buyers.
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#074E34] block mb-1 font-mono uppercase">Custom Excel Workbooks</strong>
                <span className="text-[#566155]">
                  Proprietary spreadsheets with cross-sheet scoring macros, legal attestations, and vendor tiering calculations.
                </span>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                prefetch={true}
                className="bg-white rounded-xl border border-[#E7E5DE] hover:border-[#28664A] transition-all duration-150 p-6 flex flex-col justify-between group shadow-sm hover:shadow-md cursor-pointer block focus:outline-none focus:ring-2 focus:ring-[#28664A]/30"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                      {article.tag}
                    </span>
                    <span className="text-[#566155] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-sans text-xl font-semibold text-[#1A1C19] group-hover:text-[#074E34] transition-colors leading-snug mb-3">
                    {article.title}
                  </h2>

                  <p className="font-sans text-sm text-[#566155] leading-relaxed mb-4">
                    {article.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E5DE]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#074E34] font-medium">
                    {article.highlight}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#28664A] font-medium group-hover:text-[#1B4D36]">
                    Read Guide
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-sm">
              <div className="border-b border-[#E7E5DE]/60 pb-4">
                <h3 className="font-semibold text-[#1A1C19] mb-1">
                  What is the fastest way to complete customer security questionnaires?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  The fastest approach is indexing verified compliance evidence (SOC 2 Type II, ISO 27001, penetration test letters, and policies) into a dedicated deterministic retrieval engine that maps questions to exact paragraph evidence with human verification.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-1">
                  What security frameworks do enterprise buyers require most frequently?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  The most common frameworks required during vendor procurement include SOC 2 Type II, Cloud Security Alliance CAIQ v4, Shared Assessments SIG and SIG Lite, ISO 27001, and custom proprietary enterprise Excel workbooks.
                </p>
              </div>
            </div>
          </section>

          {/* Free Evaluation Service Inline CTA */}
          <InlineCta
            source="Resources Knowledge Base"
            heading="Have an incoming security questionnaire sitting in your inbox?"
            description="Send us your customer questionnaire spreadsheet and your security documentation. We will complete it with 100% verified source citations in under 24 hours at zero cost."
            buttonText="Run My Questionnaire Free"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
