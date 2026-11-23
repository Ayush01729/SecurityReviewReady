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
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wolfia Alternative: Comparison & Pricing [2026]",
  description:
    "Compare Security Review Ready vs Wolfia for security questionnaire automation. See differences in citation depth, human review controls, Excel formula preservation, and free pilot availability.",
  alternates: {
    canonical: "/compare/wolfia-alternative",
  },
  openGraph: {
    title: "Wolfia Alternative: Security Review Ready vs Wolfia (2026)",
    description:
      "A complete breakdown of Security Review Ready vs Wolfia for B2B SaaS teams wanting fast, 100% verified security questionnaire responses.",
    url: "https://securityreviewready.com/compare/wolfia-alternative",
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
      "name": "Wolfia Alternative",
      "item": "https://securityreviewready.com/compare/wolfia-alternative",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/compare/wolfia-alternative#article",
  "headline": "Wolfia Alternative: Security Review Ready vs Wolfia for Security Questionnaire Automation",
  "description": "A detailed comparison of Security Review Ready and Wolfia for B2B SaaS teams automating vendor security questionnaires.",
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
      "name": "Is Security Review Ready a good Wolfia alternative?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Security Review Ready offers 100% paragraph-level source citations for every drafted answer (not just document-level confidence scores), strict human-in-the-loop controls with zero automated external sends, multi-tab Excel formula preservation, and a free pilot where your first security questionnaire is completed free in under 24 hours.",
      },
    },
    {
      "@type": "Question",
      "name": "How does Security Review Ready differ from Wolfia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both products provide AI-powered security questionnaire automation with citation grounding. Key differences: Security Review Ready provides citation to the exact paragraph and page number for every claim (not just document reference), enforces that all answers are reviewed by a human before any export, and preserves complex multi-tab Excel formulas including cross-sheet lookups. Security Review Ready also offers a free first-questionnaire pilot with no commitment required.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Security Review Ready offer a free trial like Wolfia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security Review Ready offers a free pilot where your first customer security questionnaire is completed free in under 24 hours. Submit your work email at securityreviewready.com to start. No credit card required.",
      },
    },
  ],
};

const COMPARISON_ROWS = [
  {
    feature: "Source Citation Depth",
    srr: "100% paragraph-level citations: document name, section header, and exact page number for every drafted claim",
    wolfia: "Document-level and section-level citations with extractive AI grounding",
    winner: "srr",
  },
  {
    feature: "Zero Hallucination Guarantee",
    srr: "Engine refuses to generate any answer it cannot directly cite to a source document. Explicit gap flags when evidence is missing.",
    wolfia: "Extractive AI model minimizes hallucinations by pulling direct quote fragments from your knowledge base",
    winner: "tie",
  },
  {
    feature: "Human-in-the-Loop Controls",
    srr: "Strict enforcement: all answers remain internal drafts. Zero automated external email sends. One-click approval before any export.",
    wolfia: "Human review workflow available; some automation modes may allow faster sends for pre-approved answer patterns",
    winner: "srr",
  },
  {
    feature: "Complex Multi-Tab Excel Preservation",
    srr: "Preserves nested formulas, cross-sheet lookups, dropdown validation, and formatting in complex enterprise workbooks",
    wolfia: "Strong Excel support; works with standard workbook formats",
    winner: "srr",
  },
  {
    feature: "Free Pilot / Time to Value",
    srr: "Free first questionnaire completed in under 24 hours. No setup fee, no credit card. Upload SOC 2 + policies → done.",
    wolfia: "Demo available; pricing on request for full access",
    winner: "srr",
  },
  {
    feature: "Knowledge Base Maintenance",
    srr: "Upload your documents once. Auto-syncs live trust center URLs. No ongoing curation required.",
    wolfia: "Low-maintenance model; connects to Google Drive and existing document stores",
    winner: "tie",
  },
  {
    feature: "Questionnaire Formats Supported",
    srr: "CAIQ v4, SIG, SIG Lite, VSA, DDQ, custom Excel, Word, PDF, vendor portals (OneTrust, ServiceNow, Whistic, Conveyor, Loopio)",
    wolfia: "Excel, Word, PDF, web portals with citation tracking",
    winner: "tie",
  },
  {
    feature: "Data Privacy",
    srr: "AES-256 encryption, TLS 1.3, multi-tenant isolation. Zero public AI model training guarantee — your security policies never train third-party models.",
    wolfia: "Enterprise data handling with privacy controls",
    winner: "tie",
  },
];

export default function WolfiaAlternativePage() {
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
        <div className="max-w-[1040px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-[#1A1C19] transition-colors">Compare</Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Wolfia Alternative</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Scale className="w-3.5 h-3.5" />
              Comparison Guide · 2026
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              Wolfia Alternative: Security Review Ready vs Wolfia
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-2xl leading-relaxed">
              Both Security Review Ready and Wolfia automate security questionnaire responses using AI with citation grounding. 
              This guide breaks down where they differ on citation depth, human review controls, Excel formula preservation, 
              and time to your first completed questionnaire.
            </p>

            {/* TL;DR for AI citation */}
            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">TL;DR</p>
              <p className="text-[#566155] leading-relaxed">
                Security Review Ready provides paragraph-level citations (document + section + page number) for every answer, 
                enforces zero automated external sends, and offers a free first-questionnaire pilot in under 24 hours. 
                It is a strong Wolfia alternative for teams that prioritize auditability and human verification over speed of automation.
              </p>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <section className="mb-16">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6">
              Security Review Ready vs Wolfia: Feature Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-[#E7E5DE] shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F5F4EF] border-b border-[#E7E5DE]">
                    <th className="text-left px-5 py-3.5 font-semibold text-[#1A1C19] w-[30%]">Feature</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-[#28664A] w-[35%]">Security Review Ready</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-[#566155] w-[35%]">Wolfia</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#E7E5DE]/60 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}
                    >
                      <td className="px-5 py-4 font-medium text-[#1A1C19] align-top">{row.feature}</td>
                      <td className="px-5 py-4 text-[#374736] align-top">
                        <div className="flex items-start gap-2">
                          {row.winner === "srr" ? (
                            <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                          ) : (
                            <div className="w-4 h-4 shrink-0" />
                          )}
                          <span>{row.srr}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-[#566155] align-top">{row.wolfia}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Decision Factors */}
          <section className="mb-16">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6">
              When to Choose Security Review Ready over Wolfia
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <ShieldCheck className="w-5 h-5 text-[#28664A]" />,
                  title: "You need paragraph-level audit trails",
                  desc: "If your enterprise buyers audit your questionnaire responses and require proof of the exact source document, section, and page number for every claim — not just a confidence score or document reference.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-[#28664A]" />,
                  title: "Zero-tolerance for accidental automation",
                  desc: "If you have strict internal controls around what gets sent to enterprise buyers, Security Review Ready's hard enforcement of human-in-the-loop (zero automated external sends) is a critical compliance safeguard.",
                },
                {
                  icon: <FileSpreadsheet className="w-5 h-5 text-[#28664A]" />,
                  title: "Complex Excel workbooks",
                  desc: "If your buyers send you multi-tab Excel questionnaires with cross-sheet formula lookups, dropdown validation cells, and conditional formatting — Security Review Ready preserves them without breaking structure.",
                },
                {
                  icon: <Clock className="w-5 h-5 text-[#28664A]" />,
                  title: "You want to validate before committing",
                  desc: "Security Review Ready's free pilot (first questionnaire free in under 24 hours, no credit card) lets you evaluate real accuracy on a live customer questionnaire before any commitment.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E7E5DE] p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-[#1A1C19] text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
                <h3 className="font-semibold text-[#1A1C19] mb-1">
                  Is Security Review Ready a good Wolfia alternative?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Yes. Security Review Ready offers 100% paragraph-level source citations for every drafted answer, 
                  strict human-in-the-loop controls with zero automated external sends, multi-tab Excel formula preservation, 
                  and a free pilot where your first security questionnaire is completed free in under 24 hours.
                </p>
              </div>
              <div className="border-b border-[#E7E5DE]/60 pb-4">
                <h3 className="font-semibold text-[#1A1C19] mb-1">
                  How does Security Review Ready differ from Wolfia?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Both products provide AI-powered security questionnaire automation. Key differences: 
                  Security Review Ready provides citation to the exact paragraph and page number for every claim, 
                  enforces that all answers are reviewed by a human before any export, and preserves complex multi-tab 
                  Excel formulas including cross-sheet lookups.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-1">
                  Does Security Review Ready offer a free trial?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Yes. Security Review Ready offers a free pilot where your first customer security questionnaire is 
                  completed free in under 24 hours. Submit your work email at securityreviewready.com. No credit card required.
                </p>
              </div>
            </div>
          </section>

          {/* More Comparisons */}
          <section className="mb-16">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4">
              Other Comparisons
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/compare/conveyor-alternative", label: "Security Review Ready vs Conveyor" },
                { href: "/compare/whistic-alternative", label: "Security Review Ready vs Whistic" },
                { href: "/compare/panorays-alternative", label: "Security Review Ready vs Panorays" },
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
            source="Wolfia Alternative Comparison"
            heading="Evaluate on your live customer questionnaire"
            description="Have a vendor assessment waiting? Upload your documents and receive completed, source-cited responses in under 24 hours at zero cost."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

