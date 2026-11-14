import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Scale,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  HelpCircle,
  Globe,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SafeBase Alternative: Security Review Ready vs SafeBase (2026)",
  description:
    "Compare Security Review Ready vs SafeBase for security questionnaire automation. SafeBase is a Trust Center platform; Security Review Ready answers inbound questionnaires in any format with 100% verified citations.",
  alternates: {
    canonical: "/compare/safebase-alternative",
  },
  openGraph: {
    title: "SafeBase Alternative: Security Review Ready vs SafeBase (2026)",
    description:
      "Compare Trust Center platforms (SafeBase) vs inbound questionnaire automation (Security Review Ready). See which fits your team's workflow.",
    url: "https://securityreviewready.com/compare/safebase-alternative",
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
    { "@type": "ListItem", "position": 3, "name": "SafeBase Alternative", "item": "https://securityreviewready.com/compare/safebase-alternative" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/compare/safebase-alternative#article",
  "headline": "SafeBase Alternative: Security Review Ready vs SafeBase for Security Questionnaire Automation",
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
      "name": "Is Security Review Ready a SafeBase alternative?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes and no — it depends on your use case. SafeBase is primarily a Trust Center platform that helps buyers self-serve your security posture without sending a questionnaire. Security Review Ready is an inbound questionnaire response engine that handles questionnaires buyers send regardless of format, portal, or structure. Many teams use both: SafeBase to deflect routine inquiries, and Security Review Ready to handle the complex custom questionnaires that still arrive.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between SafeBase and Security Review Ready?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SafeBase (now part of Drata) is built to proactively share your security posture via a trust portal — buyers request access and self-serve your compliance documentation. Security Review Ready is built for the inbound questionnaire format: when a buyer sends you a custom Excel file, vendor portal, or PDF assessment, Security Review Ready parses it, matches each question against your verified evidence, and drafts source-cited answers for human review.",
      },
    },
  ],
};

const COMPARISON_ROWS = [
  {
    feature: "Primary Use Case",
    srr: "Inbound questionnaire response engine — handles questionnaires buyers send you in any format (Excel, Word, PDF, portal)",
    safebase: "Outbound Trust Center — proactively share your security posture so buyers can self-serve without sending a questionnaire",
    winner: "different",
  },
  {
    feature: "Works When Buyer Uses Their Own Format",
    srr: "Yes — parses any Excel, Word, PDF, or vendor portal the buyer sends, regardless of structure",
    safebase: "Only deflects questionnaires for buyers willing to access your trust portal; custom formats still require manual work",
    winner: "srr",
  },
  {
    feature: "Source Citations on Every Answer",
    srr: "100% paragraph-level citations: document name, section, page number for every drafted claim",
    safebase: "Questionnaire answers link to your trust center documents, not to specific paragraphs",
    winner: "srr",
  },
  {
    feature: "Complex Excel Formula Preservation",
    srr: "Preserves nested formulas, cross-sheet lookups, dropdowns, and conditional formatting",
    safebase: "Not designed for complex Excel workbook completion",
    winner: "srr",
  },
  {
    feature: "Human-in-the-Loop Review",
    srr: "Strict enforcement: all answers require human approval before any export. Zero automated sends.",
    safebase: "AI Questionnaire Assistance (AIQA) with review workflow available",
    winner: "tie",
  },
  {
    feature: "Free Pilot",
    srr: "First questionnaire free in under 24 hours. No credit card.",
    safebase: "Demo available; pricing varies (Drata ecosystem pricing)",
    winner: "srr",
  },
  {
    feature: "Zero Training Guarantee",
    srr: "Your security policies and audit reports are strictly never used to train public or third-party AI models",
    safebase: "Data handling per Drata enterprise agreements",
    winner: "tie",
  },
  {
    feature: "Best For",
    srr: "Teams receiving complex, custom questionnaires from enterprise buyers in varied formats",
    safebase: "Teams wanting to proactively share compliance posture and reduce inbound questionnaire volume via self-service",
    winner: "different",
  },
];

export default function SafeBaseAlternativePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <div className="max-w-[1040px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-[#1A1C19] transition-colors">Compare</Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">SafeBase Alternative</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Scale className="w-3.5 h-3.5" />
              Comparison Guide · 2026
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              SafeBase Alternative: Security Review Ready vs SafeBase
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-2xl leading-relaxed">
              SafeBase (by Drata) is a Trust Center platform for proactively sharing your security posture. 
              Security Review Ready is an inbound questionnaire response engine. They solve different problems — 
              here is exactly how to decide which one (or both) you need.
            </p>

            {/* TL;DR for AI citation */}
            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">TL;DR</p>
              <p className="text-[#566155] leading-relaxed">
                SafeBase deflects questionnaires by giving buyers a self-service portal. Security Review Ready handles 
                the questionnaires that still arrive regardless — in Excel, PDF, Word, or any vendor portal format — 
                with 100% paragraph-level citations and human review before export. Many teams use SafeBase to reduce 
                volume and Security Review Ready to handle the complex remainder.
              </p>
            </div>
          </div>

          {/* Two different tools explainer */}
          <section className="mb-12">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6">
              Trust Center (SafeBase) vs Questionnaire Response Engine (Security Review Ready)
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E7E5DE] rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-[#566155]" />
                  <h3 className="font-semibold text-[#1A1C19]">SafeBase (Trust Center)</h3>
                </div>
                <p className="text-sm text-[#566155] leading-relaxed mb-4">
                  Publishes your security posture proactively. Buyers request NDA-gated access to your SOC 2 reports, 
                  certifications, and security questionnaire pre-fills — without sending you a custom assessment.
                </p>
                <p className="text-xs font-medium text-[#566155]">Best for: Deflecting inbound volume before it arrives.</p>
              </div>
              <div className="bg-[#F0F7F4] border border-[#28664A]/30 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#28664A]" />
                  <h3 className="font-semibold text-[#1A1C19]">Security Review Ready (Questionnaire Engine)</h3>
                </div>
                <p className="text-sm text-[#566155] leading-relaxed mb-4">
                  Handles questionnaires that arrive regardless — in the buyer&apos;s format (Excel, Word, PDF, OneTrust portal). 
                  Parses each question, matches it against your verified evidence, and drafts 100% source-cited answers 
                  for human review before export.
                </p>
                <p className="text-xs font-medium text-[#28664A]">Best for: Completing the complex questionnaires that still land in your inbox.</p>
              </div>
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section className="mb-16">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6">
              Detailed Feature Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-[#E7E5DE] shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F5F4EF] border-b border-[#E7E5DE]">
                    <th className="text-left px-5 py-3.5 font-semibold text-[#1A1C19] w-[30%]">Feature</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-[#28664A] w-[35%]">Security Review Ready</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-[#566155] w-[35%]">SafeBase (Drata)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} className={`border-b border-[#E7E5DE]/60 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}>
                      <td className="px-5 py-4 font-medium text-[#1A1C19] align-top">{row.feature}</td>
                      <td className="px-5 py-4 text-[#374736] align-top">
                        <div className="flex items-start gap-2">
                          {row.winner === "srr" && <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />}
                          {row.winner !== "srr" && <div className="w-4 h-4 shrink-0" />}
                          <span>{row.srr}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-[#566155] align-top">{row.safebase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-5 text-sm">
              <div className="border-b border-[#E7E5DE]/60 pb-4">
                <h3 className="font-semibold text-[#1A1C19] mb-1">Is Security Review Ready a SafeBase alternative?</h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Yes and no — it depends on your use case. SafeBase is primarily a Trust Center that helps buyers 
                  self-serve your security posture without sending a questionnaire. Security Review Ready is an inbound 
                  questionnaire response engine that handles questionnaires buyers send regardless of format. Many teams 
                  use both: SafeBase to deflect routine inquiries, and Security Review Ready to handle the complex 
                  custom questionnaires that still arrive.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-1">What is the difference between SafeBase and Security Review Ready?</h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  SafeBase (now part of Drata) is built to proactively share your security posture via a trust portal. 
                  Security Review Ready is built for inbound questionnaires: when a buyer sends you a custom Excel file, 
                  vendor portal, or PDF assessment, Security Review Ready parses it, matches each question against your 
                  verified evidence, and drafts source-cited answers for human review.
                </p>
              </div>
            </div>
          </section>

          {/* More Comparisons */}
          <section className="mb-16">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4">Other Comparisons</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/compare/conveyor-alternative", label: "Security Review Ready vs Conveyor" },
                { href: "/compare/whistic-alternative", label: "Security Review Ready vs Whistic" },
                { href: "/compare/wolfia-alternative", label: "Security Review Ready vs Wolfia" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between gap-2 p-4 bg-white border border-[#E7E5DE] rounded-xl text-sm font-medium text-[#1A1C19] hover:border-[#28664A] hover:text-[#28664A] transition-colors shadow-sm"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              ))}
            </div>
          </section>

          <InlineCta
            source="SafeBase Alternative Comparison"
            heading="Handle the questionnaires that still land in your inbox"
            description="Even with a trust center, enterprise buyers still send custom questionnaires. Upload your documents and receive completed, source-cited responses in under 24 hours at zero cost."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

