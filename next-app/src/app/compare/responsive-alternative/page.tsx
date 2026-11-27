import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Scale,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  Database,
  Lock,
  Layers,
  HelpCircle,
  AlertTriangle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Responsive Alternative: Dedicated Questionnaire Engine [2026]",
  description:
    "Looking for a Responsive (formerly RFPIO) alternative for security questionnaires? Compare Security Review Ready vs Responsive across citation accuracy, setup speed, Excel preservation, and pricing.",
  alternates: {
    canonical: "/compare/responsive-alternative",
  },
  openGraph: {
    title: "Responsive Alternative: Security Review Ready vs Responsive (2026)",
    description:
      "Why security and sales engineering teams switch from $30,000 legacy RFP platforms like Responsive (RFPIO) to dedicated, source-cited security questionnaire automation.",
    url: "https://securityreviewready.com/compare/responsive-alternative",
    siteName: "Security Review Ready",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://securityreviewready.com" },
    { "@type": "ListItem", position: 2, name: "Compare", item: "https://securityreviewready.com/compare" },
    { "@type": "ListItem", position: 3, name: "Responsive Alternative", item: "https://securityreviewready.com/compare/responsive-alternative" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/compare/responsive-alternative#article",
  headline: "Responsive Alternative: Faster Security Questionnaire Automation for SaaS",
  description: "Detailed comparison between Responsive (formerly RFPIO) and Security Review Ready for vendor security questionnaires, CAIQ, and complex enterprise Excel assessments.",
  datePublished: "2026-11-27T00:00:00Z",
  dateModified: "2026-11-27T00:00:00Z",
  author: { "@type": "Person", name: "Security Review Ready Team" },
  publisher: { "@type": "Organization", name: "Security Review Ready", url: "https://securityreviewready.com" },
  wordCount: 3400,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "How does Security Review Ready differ from Responsive (formerly RFPIO)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Responsive is a broad, heavyweight enterprise RFP management suite designed for full sales proposal teams answering 100-page government proposals. Security Review Ready is purpose-built specifically for vendor security reviews and infosec due diligence, providing deterministic paragraph-and-page citations from raw SOC 2 PDFs with native Excel formula preservation.",
      },
    },
    {
      "@type": "Question",
      "name": "How does pricing compare between Responsive and Security Review Ready?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Responsive typically costs between $20,000 and $60,000+ per year on annual enterprise contracts with required multi-thousand-dollar onboarding fees. Security Review Ready offers a free pilot tier for your first customer questionnaire and transparent, affordable pay-as-you-grow pricing with zero upfront lock-in.",
      },
    },
    {
      "@type": "Question",
      "name": "Can Security Review Ready preserve complex multi-tab Excel formulas from enterprise buyers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Enterprise buyers routinely use proprietary multi-tab Excel workbooks with cross-sheet formula lookups, dropdown validation cells, and scoring macros. Security Review Ready parses and injects responses without breaking formulas or formatting.",
      },
    },
  ],
};

const MATRIX = [
  { feature: "Primary Platform Focus", srr: "Dedicated vendor security questionnaire & DDQ automation", responsive: "Enterprise RFP & broad sales proposal management", winner: "srr" },
  { feature: "Citation Depth", srr: "Exact document, section header, and page number for every claim", responsive: "Internal Q&A match score without PDF page citations", winner: "srr" },
  { feature: "Zero-Hallucination Guardrails", srr: "Explicitly flags missing evidence; never fabricates unverified claims", responsive: "Generative AI suggestions based on library similarity", winner: "srr" },
  { feature: "Complex Excel Preservation", srr: "100% native preservation of cross-sheet formulas, lookups, and validation", responsive: "Spreadsheet export with potential formula degradation", winner: "srr" },
  { feature: "Annual Contract Requirement", srr: "No mandatory annual lock-in; free first pilot included", responsive: "Mandatory annual commitment ($20k–$60k/yr)", winner: "srr" },
  { feature: "Time to First Value", srr: "Under 24 hours — upload documents and receive completed review", responsive: "2 to 6 weeks onboarding, template migration, and team training", winner: "srr" },
];

export default function ResponsiveAlternativePage() {
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
            <span className="text-[#074E34] font-medium">Responsive Alternative</span>
          </nav>

          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Scale className="w-3.5 h-3.5" />
              Head-to-Head Evaluation · 2026 Edition
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              Responsive Alternative: Security Review Ready vs Responsive (RFPIO)
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              Why high-growth B2B SaaS teams and sales engineering leads switch from bloated \$30,000 proposal suites to dedicated, source-cited security questionnaire automation.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">Executive Summary: Why Teams Switch</p>
              <p className="text-[#566155] leading-relaxed">
                If your primary bottleneck is winning multi-million dollar public sector sales proposals with a dedicated 10-person proposal team, <strong>Responsive</strong> is a recognized leader. But if your goal is <strong>unblocking deals by completing 50-to-300 question security reviews in under 24 hours with exact SOC 2 paragraph citations</strong>, Security Review Ready delivers 10x faster setup at a fraction of the cost.
              </p>
            </div>
          </div>

          {/* Comparison Matrix */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Feature &amp; Citation Depth Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#E7E5DE] rounded-xl overflow-hidden bg-white shadow-sm">
                <thead>
                  <tr className="bg-[#EBF3EF] border-b border-[#E7E5DE]">
                    <th className="text-left px-4 py-3 font-semibold text-[#074E34] text-xs">Capability</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#28664A] text-xs">Security Review Ready</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1A1C19] text-xs">Responsive (RFPIO)</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-[#566155] divide-y divide-[#E7E5DE]">
                  {MATRIX.map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-3 font-medium text-[#1A1C19]">{row.feature}</td>
                      <td className="px-4 py-3 text-[#28664A] font-medium">{row.srr}</td>
                      <td className="px-4 py-3">{row.responsive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Core Differences */}
          <section className="mb-14 space-y-6">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19]">
              3 Fundamental Reasons Teams Choose Security Review Ready Over Responsive
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#28664A]">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="font-semibold text-sm text-[#1A1C19]">Deterministic Audit Grounding</h3>
                </div>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Responsive matches questions against a broad Q&amp;A library. Security Review Ready performs deterministic retrieval locked directly to your raw SOC 2, ISO 27001, and policy PDFs, citing the exact document, section, and page number for every response.
                </p>
              </div>
              <div className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#28664A]">
                  <Clock className="w-5 h-5" />
                  <h3 className="font-semibold text-sm text-[#1A1C19]">Zero Implementation Friction</h3>
                </div>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Responsive requires weeks of knowledge library structuring, user permissions, and admin onboarding. Security Review Ready ingests your security documents and outputs completed customer questionnaires in under 24 hours.
                </p>
              </div>
              <div className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#28664A]">
                  <Lock className="w-5 h-5" />
                  <h3 className="font-semibold text-sm text-[#1A1C19]">Human-in-the-Loop Safeguard</h3>
                </div>
                <p className="text-xs text-[#566155] leading-relaxed">
                  We enforce an unyielding review workflow: no generated answer is ever exported without human sign-off. Reviewers validate the grounded citation with 1 click, preventing catastrophic compliance misrepresentations.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-5 text-sm">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className={i < faqSchema.mainEntity.length - 1 ? "border-b border-[#E7E5DE]/60 pb-4" : ""}>
                  <h3 className="font-semibold text-[#1A1C19] mb-1">{item.name}</h3>
                  <p className="text-xs text-[#566155] leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <InlineCta
            source="Responsive Alternative Comparison"
            heading="Ready to answer customer questionnaires 10x faster?"
            description="Upload your pending customer questionnaire and SOC 2 report. We'll return 100% source-cited draft answers within 24 hours for free."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
