import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Scale,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  HelpCircle,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vanta Questionnaire Alternative: Security Review Ready vs Vanta Questionnaires (2026)",
  description:
    "Evaluate Security Review Ready vs Vanta's built-in questionnaire automation. Compare citation depth, non-Vanta evidence ingestion, formula preservation, and cost efficiency.",
  alternates: {
    canonical: "/compare/vanta-questionnaire-alternative",
  },
  openGraph: {
    title: "Vanta Questionnaire Alternative: Security Review Ready vs Vanta (2026)",
    description:
      "A complete breakdown of Security Review Ready vs Vanta for teams wanting dedicated, source-cited security questionnaire automation without high per-seat GRC platform fees.",
    url: "https://securityreviewready.com/compare/vanta-questionnaire-alternative",
    siteName: "Security Review Ready",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://securityreviewready.com" },
    { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://securityreviewready.com/compare" },
    { "@type": "ListItem", "position": 3, "name": "Vanta Questionnaire Alternative", "item": "https://securityreviewready.com/compare/vanta-questionnaire-alternative" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/compare/vanta-questionnaire-alternative#article",
  "headline": "Vanta Questionnaire Alternative: Dedicated Questionnaire Response Engine vs Bundled GRC Add-on",
  "description": "Compare standalone AI security questionnaire engines against compliance-bundled GRC tools for B2B SaaS teams and vCISOs.",
  "datePublished": "2026-11-01T00:00:00Z",
  "dateModified": "2026-11-15T00:00:00Z",
  "author": { "@type": "Organization", "name": "Security Review Ready" },
  "publisher": { "@type": "Organization", "name": "Security Review Ready", "url": "https://securityreviewready.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I use Security Review Ready if I already use Vanta for SOC 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely. Security Review Ready is designed to ingest your Vanta-generated SOC 2 Type II audit report, internal policies, and trust center documentation as source evidence. Many teams find that dedicated questionnaire engines handle complex multi-tab buyer spreadsheets and custom enterprise portals with higher citation precision than generic GRC add-ons.",
      },
    },
    {
      "@type": "Question",
      "name": "Why choose a standalone questionnaire engine over Vanta Questionnaires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dedicated engines specialize in 100% verified paragraph and page citations, complex Excel nested formula retention, and vendor portal helpers (OneTrust, Whistic, ServiceNow). They also allow vCISOs and consultants to manage questionnaire responses across multiple clients without forcing each client into expensive annual GRC platform contracts.",
      },
    },
  ],
};

const COMPARISON_ROWS = [
  {
    feature: "Core Focus",
    srr: "Dedicated questionnaire automation & grounded evidence citation engine",
    vanta: "Continuous compliance monitoring & audit prep platform with questionnaire add-on",
    winner: "srr",
  },
  {
    feature: "Source Citation Precision",
    srr: "100% verified paragraph-level citations with page numbers from any PDF, policy, or trust center",
    vanta: "Tied primarily to internal Vanta tests and uploaded document snippets",
    winner: "srr",
  },
  {
    feature: "Complex Multi-Tab Excel Preservation",
    srr: "Native retention of dropdown validations, formulas, conditional colors, and macros",
    vanta: "Standard export format, occasionally strips complex nested formulas",
    winner: "srr",
  },
  {
    feature: "Consultant & vCISO Multi-Client Workflow",
    srr: "Manage multiple client evidence vaults and questionnaires from one unified workspace",
    vanta: "Requires separate tenant setups and expensive full-platform licenses per organization",
    winner: "srr",
  },
  {
    feature: "Pricing Model",
    srr: "Free pilot (first questionnaire run in 24h free), flexible volume-based pricing",
    vanta: "Annual recurring contract typically ranging $7,500–$20,000+ per year",
    winner: "srr",
  },
];

export default function VantaQuestionnaireAlternativePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <div className="max-w-[1040px] mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-[#1A1C19] transition-colors">Compare</Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Vanta Questionnaire Alternative</span>
          </nav>

          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Scale className="w-3.5 h-3.5" />
              Comparison Guide · 2026
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              Vanta Questionnaire Alternative: Security Review Ready vs Vanta Questionnaires
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-2xl leading-relaxed">
              Vanta is a market leader in compliance automation and SOC 2 audits. But when handling repetitive, 
              bespoke vendor security reviews, teams and fractional CISOs frequently need a dedicated engine with exact 
              page citations, flawless Excel preservation, and zero platform lock-in.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">TL;DR</p>
              <p className="text-[#566155] leading-relaxed">
                Security Review Ready is a dedicated, citation-first questionnaire workspace. It can ingest your Vanta SOC 2 report 
                along with bespoke customer policies, answering custom vendor assessments in under 24 hours with exact page/paragraph 
                citations. Ideal for fast-moving startups and vCISOs who need surgical accuracy without five-figure annual GRC platform add-ons.
              </p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6">
              Feature &amp; Workflow Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-[#E7E5DE] shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F5F4EF] border-b border-[#E7E5DE]">
                    <th className="text-left px-5 py-3.5 font-semibold text-[#1A1C19] w-[30%]">Capability</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-[#28664A] w-[35%]">Security Review Ready</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-[#566155] w-[35%]">Vanta Questionnaires</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} className={`border-b border-[#E7E5DE]/60 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}>
                      <td className="px-5 py-4 font-medium text-[#1A1C19] align-top">{row.feature}</td>
                      <td className="px-5 py-4 text-[#374736] align-top">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                          <span>{row.srr}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-[#566155] align-top">{row.vanta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-5 text-sm">
              <div className="border-b border-[#E7E5DE]/60 pb-4">
                <h3 className="font-semibold text-[#1A1C19] mb-1">
                  Can I use Security Review Ready alongside my existing Vanta account?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Yes. You simply upload your finalized SOC 2 Type II audit PDF, ISO 27001 certificate, and security policies. 
                  Security Review Ready uses them to answer custom customer questionnaires while referencing the exact sections.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-1">
                  How does it compare for vCISOs managing multiple clients?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  vCISOs can plug in documents for diverse clients without requiring each startup to purchase an enterprise GRC questionnaire license.
                </p>
              </div>
            </div>
          </section>

          <InlineCta
            source="Vanta Alternative Comparison"
            heading="Complete your next customer questionnaire in 24 hours"
            description="Upload your SOC 2 audit report and security policies. We'll return 100% source-cited draft answers for your review — completely free for your first assessment."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

