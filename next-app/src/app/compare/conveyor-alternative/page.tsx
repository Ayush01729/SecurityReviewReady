import type { Metadata } from "next";
import Link from "next/link";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conveyor Alternative: Why B2B SaaS Teams Choose Security Review Ready",
  description:
    "Compare Security Review Ready vs Conveyor: transparent citations, complex Excel formula support, zero hallucination guardrails, and rapid onboarding.",
  alternates: {
    canonical: "/compare/conveyor-alternative",
  },
  openGraph: {
    title: "Conveyor Alternative: Why B2B SaaS Teams Choose Security Review Ready",
    description:
      "A complete breakdown of Security Review Ready vs Conveyor for B2B SaaS teams wanting fast, verified security questionnaire responses.",
    url: "https://securityreviewready.com/compare/conveyor-alternative",
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
      "name": "Conveyor Alternative",
      "item": "https://securityreviewready.com/compare/conveyor-alternative",
    },
  ],
};

const COMPARISON_ROWS = [
  {
    feature: "Exact Source Citations",
    srr: "100% verified paragraph and page citations for every drafted claim",
    conveyor: "Confidence scores with partial or general document references",
    winner: "srr",
  },
  {
    feature: "Complex Multi-Tab Excel Preservation",
    srr: "Preserves nested formulas, cross-sheet lookups, and dropdown validation",
    conveyor: "Can strip or flatten proprietary formulas during export",
    winner: "srr",
  },
  {
    feature: "Human-in-the-Loop Verification",
    srr: "One-click approval workflow; zero automated external email risk",
    conveyor: "Strong collaboration workflow; optional auto-send modes",
    winner: "tie",
  },
  {
    feature: "Setup & Time to Value",
    srr: "Under 15 minutes; upload your SOC 2 and policies to run your first review",
    conveyor: "Longer enterprise onboarding and custom ontology mapping",
    winner: "srr",
  },
  {
    feature: "AI Model Training Policy",
    srr: "Strict contractual zero public training guarantee",
    conveyor: "Customer data isolated within vendor enterprise boundaries",
    winner: "tie",
  },
  {
    feature: "Pricing Model",
    srr: "Transparent usage tiers; free first questionnaire turnaround",
    conveyor: "Annual enterprise contracts with higher minimum commitments",
    winner: "srr",
  },
];

export default function ConveyorAlternativePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <span className="text-[#074E34] font-medium">Conveyor Alternative</span>
          </nav>

          {/* Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Software Evaluation
              </span>
              <span>Updated October 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              Conveyor Alternative: Why B2B SaaS Teams Choose Security Review Ready
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Conveyor is a recognized tool in security questionnaire automation. However, many fast-growing B2B software companies seek alternatives that offer deeper citation verification, lower contract minimums, and zero formula degradation in custom Excel files.
            </p>
          </header>

          {/* Quotable GEO Summary Block */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              Summary: Why Choose Security Review Ready Over Conveyor
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed">
              While Conveyor provides an established enterprise trust center and questionnaire assistant, <strong>Security Review Ready</strong> is purpose-built for high accuracy and rapid onboarding. It guarantees 100 percent source-cited answers with exact page numbers, maintains native multi-tab Excel formulas without corruption, and offers transparent, startup-friendly pricing without lengthy annual contract negotiations.
            </p>
          </section>

          {/* Side-by-Side Comparison Matrix */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Side-by-Side Feature Comparison
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              A direct comparison of core capabilities between Security Review Ready and Conveyor:
            </p>

            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3 px-3.5 font-semibold w-40">Capability</th>
                    <th className="py-3 px-3.5 font-semibold text-[#074E34] w-52">Security Review Ready</th>
                    <th className="py-3 px-3.5 font-semibold w-52">Conveyor</th>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Core Advantages */}
          <section className="mb-12 space-y-6">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19]">
              Three Decisive Advantages for Growing B2B SaaS
            </h2>

            <div className="bg-white p-6 rounded-lg border border-[#E7E5DE]">
              <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#28664A]" />
                1. 100% Verifiable Source Citations
              </h3>
              <p className="text-sm text-[#566155] leading-relaxed">
                Many AI tools return answers with vague confidence bars (such as &ldquo;85% match&rdquo;), leaving the reviewer to guess whether the underlying statement is factually accurate. Security Review Ready takes a strictly grounded approach: every draft references the exact document, section header, and page number in your SOC 2 audit or security policy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E7E5DE]">
              <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#28664A]" />
                2. Zero Excel Formula Degradation
              </h3>
              <p className="text-sm text-[#566155] leading-relaxed">
                Enterprise procurement teams frequently evaluate suppliers using complex, proprietary Excel sheets containing weighted scoring formulas and cross-sheet dependencies. While standard automation software can strip formulas on export, Security Review Ready writes strictly to target response cells, preserving evaluation macros in their native state.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E7E5DE]">
              <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#28664A]" />
                3. Fast Onboarding with Zero Minimum Commitments
              </h3>
              <p className="text-sm text-[#566155] leading-relaxed">
                You do not need to sit through a three-week sales process or commit to expensive annual packages just to answer a pending questionnaire. You can index your documentation and complete your first customer review in under 24 hours.
              </p>
            </div>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="Conveyor Alternative"
            badge="Free 24-Hour Evaluation"
            heading="Experience the Difference on Your Real Questionnaire"
            description="Upload your customer questionnaire and your policies. We will complete your review with verified source citations in under 24 hours completely free."
            buttonText="Test Free on My Questionnaire"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}

