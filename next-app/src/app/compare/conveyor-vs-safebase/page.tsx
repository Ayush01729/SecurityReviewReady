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
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conveyor vs SafeBase Comparison [2026 Breakdown]",
  description:
    "Conveyor vs SafeBase comparison: Trust center deflection vs AI questionnaire completion. See features, citation depth, pricing models, and when to use Security Review Ready.",
  alternates: {
    canonical: "/compare/conveyor-vs-safebase",
  },
  openGraph: {
    title: "Conveyor vs SafeBase: Which Fits Your Security Workflow?",
    description:
      "Detailed 3-way breakdown: Conveyor vs SafeBase vs Security Review Ready. Compare trust portals, AI answering accuracy, and spreadsheet preservation.",
    url: "https://securityreviewready.com/compare/conveyor-vs-safebase",
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
      "name": "Compare",
      "item": "https://securityreviewready.com/compare",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Conveyor vs SafeBase",
      "item": "https://securityreviewready.com/compare/conveyor-vs-safebase",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Conveyor vs SafeBase Comparison: Trust Center vs Questionnaire Automation (2026)",
  "description":
    "Evaluate Conveyor and SafeBase for B2B SaaS security reviews. Compare trust center capabilities, inbound questionnaire handling, evidence grounding, and pricing.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the primary difference between Conveyor and SafeBase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SafeBase is primarily a customer-facing Trust Center platform designed to deflect inbound security reviews by proactively publishing security postures, certifications, and compliance documentation. Conveyor combines a public trust center with an inbound AI questionnaire response engine that ingests vendor spreadsheets and drafts answers.",
      },
    },
    {
      "@type": "Question",
      "name": "Can SafeBase automatically fill out incoming Excel questionnaires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SafeBase offers an AI questionnaire completion add-on, but its core architecture is built around questionnaire deflection through self-service trust portals. For heavy custom Excel workbooks with complex multi-tab scoring formulas, teams often experience limitations compared to dedicated response engines like Security Review Ready.",
      },
    },
    {
      "@type": "Question",
      "name": "How does Security Review Ready differ from both Conveyor and SafeBase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security Review Ready is a dedicated, zero-lock-in questionnaire response engine. Unlike SafeBase (which focuses on buyer self-service) and Conveyor (which requires enterprise platform lock-in and high annual contracts), Security Review Ready delivers 100% paragraph-level evidence citations directly into the buyer's original Excel or Word workbook in under 24 hours.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the typical pricing differences between Conveyor and SafeBase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SafeBase typically ranges from $800 to $1,500/month depending on enterprise trust center features. Conveyor generally starts between $1,500 and $4,000/month on annual contracts when combining trust center and AI questionnaire intake. Security Review Ready offers a 100% free pilot for the first questionnaire with no mandatory annual lock-in.",
      },
    },
  ],
};

const COMPARISON_ROWS = [
  {
    feature: "Primary Product Architecture",
    srr: "Inbound vendor response engine with exact citations",
    conveyor: "Combined trust center + AI questionnaire engine",
    safebase: "Customer-facing trust center & deflection portal",
  },
  {
    feature: "Bespoke Multi-Tab Excel Preservation",
    srr: "100% native cell injection with intact formulas & macros",
    conveyor: "Proprietary parser; complex formulas can flatten",
    safebase: "Limited; focuses on diverting buyers to trust center",
  },
  {
    feature: "Evidence Citation Fidelity",
    srr: "Exact document title, section heading, and page number",
    conveyor: "Probabilistic confidence scores & doc-level reference",
    safebase: "Document repository linking without exact clause citations",
  },
  {
    feature: "Time to First Completed Review",
    srr: "Under 24 hours with free first questionnaire pilot",
    conveyor: "2 to 3 weeks setup and knowledge base indexing",
    safebase: "1 to 2 weeks for trust center approval and configuration",
  },
  {
    feature: "Buyer Friction",
    srr: "Zero buyer login; output delivered in buyer's format",
    conveyor: "Encourages buyer engagement in Conveyor portal",
    safebase: "Requires buyers to access and review trust portal",
  },
  {
    feature: "Contract Commitment",
    srr: "Free pilot with flexible transparent pricing",
    conveyor: "Annual enterprise contract ($18,000 to $48,000+/year)",
    safebase: "Annual contract ($10,000 to $25,000+/year)",
  },
];

export default function ConveyorVsSafebasePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <Link href="/compare" className="hover:text-[#1A1C19] transition-colors">
              Compare
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Conveyor vs SafeBase</span>
          </nav>

          {/* Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                SaaS Security Tool Comparison
              </span>
              <span>Updated November 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              Conveyor vs SafeBase: Which Fits Your Security Review Workflow?
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Security and compliance leaders frequently evaluate Conveyor and SafeBase when trying to scale customer security reviews. This guide breaks down trust center deflection versus AI questionnaire response automation, and when dedicated citation engines like Security Review Ready outperform both.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#566155]">
              <span>By</span>
              <span className="text-[#1A1C19] font-medium">Security Review Ready Compliance Engineering Team</span>
            </div>
          </header>

          {/* Executive Summary */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              Executive Summary: Conveyor vs SafeBase
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed">
              <strong>SafeBase</strong> is built primarily as an interactive Trust Center to deflect questionnaires by offering enterprise buyers on-demand access to compliance certifications, SOC 2 reports, and security whitepapers under NDA. <strong>Conveyor</strong> pairs a trust portal with an AI questionnaire response platform. However, when enterprise buyers refuse trust centers and insist on custom 200-question Excel workbooks, <strong>Security Review Ready</strong> completes the workbook with 100% page-and-paragraph evidence citations in under 24 hours.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Side-by-Side Comparison: Conveyor vs SafeBase vs Security Review Ready
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              Compare architectural focus, citation accuracy, spreadsheet handling, and pricing:
            </p>

            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3 px-3.5 font-semibold w-36">Dimension</th>
                    <th className="py-3 px-3.5 font-semibold text-[#074E34] w-48">Security Review Ready</th>
                    <th className="py-3 px-3.5 font-semibold w-48">Conveyor</th>
                    <th className="py-3 px-3.5 font-semibold w-48">SafeBase</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="hover:bg-[#FAF9F6]/50">
                      <td className="py-3 px-3.5 font-medium">{row.feature}</td>
                      <td className="py-3 px-3.5 bg-[#EBF3EF]/30 font-medium text-[#074E34]">
                        {row.srr}
                      </td>
                      <td className="py-3 px-3.5 text-[#566155]">{row.conveyor}</td>
                      <td className="py-3 px-3.5 text-[#566155]">{row.safebase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Deep Dive: SafeBase */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm space-y-6">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19]">
              SafeBase: When Trust Center Deflection Works (and When It Doesn't)
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed">
              SafeBase pioneered the modern Trust Center. By providing prospective enterprise buyers with a self-service portal to review SOC 2 Type II reports, penetration tests, and compliance badges, SaaS teams can deflect 30% to 50% of routine inbound security inquiries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <h3 className="font-semibold text-sm text-[#1A1C19] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" /> SafeBase Strengths
                </h3>
                <ul className="space-y-1.5 text-[#566155]">
                  <li>• Outstanding brand recognition among Silicon Valley tech buyers</li>
                  <li>• Automated clickwrap NDA workflows for sensitive document downloads</li>
                  <li>• CRM integrations (Salesforce, HubSpot) to track buyer engagement</li>
                  <li>• Proactive email updates to buyers when compliance certs renew</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <h3 className="font-semibold text-sm text-[#BA1A1A] mb-2 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-[#BA1A1A]" /> Where SafeBase Falls Short
                </h3>
                <ul className="space-y-1.5 text-[#566155]">
                  <li>• Fortune 500 & financial procurement teams often refuse trust centers</li>
                  <li>• Weak response engine for 200+ question bespoke Excel spreadsheets</li>
                  <li>• Deflection rate drops to near 0% for Tier 1 critical vendor assessments</li>
                  <li>• High cost for early-stage teams ($10k-$25k/yr) before proven ROI</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Deep Dive: Conveyor */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm space-y-6">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19]">
              Conveyor: Dual Trust Center & AI Questionnaire Intake
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed">
              Conveyor offers both trust portal hosting and an AI-driven questionnaire answering engine. It uses vector embeddings to search your knowledge library and generate suggested answers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <h3 className="font-semibold text-sm text-[#1A1C19] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" /> Conveyor Strengths
                </h3>
                <ul className="space-y-1.5 text-[#566155]">
                  <li>• Handles both proactive trust sharing and inbound questionnaires</li>
                  <li>• Browser extension for responding in web-based vendor portals</li>
                  <li>• Collaborative approval workflows across security and sales teams</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <h3 className="font-semibold text-sm text-[#BA1A1A] mb-2 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-[#BA1A1A]" /> Conveyor Considerations
                </h3>
                <ul className="space-y-1.5 text-[#566155]">
                  <li>• Enterprise pricing ($18k-$48k/yr) requires annual lock-in</li>
                  <li>• Answers rely on confidence scores rather than exact page/paragraph citations</li>
                  <li>• Multi-week onboarding required before achieving baseline accuracy</li>
                  <li>• Complex nested Excel formulas often corrupt upon export</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Security Review Ready Is the Pragmatic Choice */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Why Teams Choose Security Review Ready
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              Many high-growth SaaS teams discover that enterprise security reviews don't need a six-figure portal network — they need fast, 100% verified answers in the buyer's exact spreadsheet.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-[#E7E5DE] flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                    Deterministic Page & Paragraph Citations
                  </h3>
                  <p className="text-xs text-[#566155] leading-relaxed">
                    Every answer references the exact SOC 2 control (e.g., CC6.1), ISO policy clause, or architecture document page. Your reviewers verify claims in seconds without hunting through PDF binders.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E7E5DE] flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                    Native Multi-Tab Excel Formula Retention
                  </h3>
                  <p className="text-xs text-[#566155] leading-relaxed">
                    We inject answers directly into the buyer's workbook without stripping cross-sheet VLOOKUP formulas, conditional dropdowns, or risk scoring macros.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E7E5DE] flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                    Free 24-Hour Pilot with Zero Contract Commitment
                  </h3>
                  <p className="text-xs text-[#566155] leading-relaxed">
                    Test our engine on your live customer questionnaire before spending a dime. We complete your first review free in under 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 text-sm">
              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  What is the primary difference between Conveyor and SafeBase?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  SafeBase is primarily a customer-facing Trust Center platform designed to deflect inbound security reviews by proactively publishing security postures, certifications, and compliance documentation. Conveyor combines a public trust center with an inbound AI questionnaire response engine that ingests vendor spreadsheets and drafts answers.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  Can SafeBase automatically fill out incoming Excel questionnaires?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  SafeBase offers an AI questionnaire completion add-on, but its core architecture is built around questionnaire deflection through self-service trust portals. For heavy custom Excel workbooks with complex multi-tab scoring formulas, teams often experience limitations compared to dedicated response engines like Security Review Ready.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  How does Security Review Ready compare to Conveyor and SafeBase?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  While SafeBase focuses on portal deflection and Conveyor requires long-term enterprise lock-in, Security Review Ready is purpose-built to answer bespoke customer spreadsheets with 100% verified evidence citations and native formula retention in under 24 hours.
                </p>
              </div>
            </div>
          </section>

          {/* Related Comparisons */}
          <section className="mb-12">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4">Related Comparisons & Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/compare/conveyor-alternative"
                className="p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group"
              >
                <p className="text-sm font-medium text-[#1A1C19] group-hover:text-[#28664A] transition-colors">Conveyor Alternative Guide</p>
                <p className="text-xs text-[#566155]">Citation depth, pricing, and formula preservation</p>
              </Link>
              <Link
                href="/compare/safebase-alternative"
                className="p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group"
              >
                <p className="text-sm font-medium text-[#1A1C19] group-hover:text-[#28664A] transition-colors">SafeBase Alternative Guide</p>
                <p className="text-xs text-[#566155]">Trust center deflection vs inbound response automation</p>
              </Link>
            </div>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="Conveyor vs SafeBase Comparison"
            badge="Free 24-Hour Evaluation"
            heading="Received a 150-Question Enterprise Assessment?"
            description="Whether your buyer sent a custom Excel workbook, SIG Lite, or CAIQ, upload your questionnaire and policies. We return complete, source-cited responses in under 24 hours at zero cost."
            buttonText="Start Free Questionnaire Pilot"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
