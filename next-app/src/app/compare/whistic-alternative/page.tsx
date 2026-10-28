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
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Whistic Alternative: Why Modern SaaS Teams Choose Security Review Ready",
  description:
    "Compare Security Review Ready vs Whistic: zero vendor network fees, transparent paragraph citations, complex Excel support, and rapid onboarding.",
  alternates: {
    canonical: "/compare/whistic-alternative",
  },
  openGraph: {
    title: "Whistic Alternative: Why Modern SaaS Teams Choose Security Review Ready",
    description:
      "A complete breakdown of Security Review Ready vs Whistic for B2B SaaS companies seeking fast, accurate security questionnaire completion without vendor lock-in.",
    url: "https://securityreviewready.com/compare/whistic-alternative",
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
      "name": "Whistic Alternative",
      "item": "https://securityreviewready.com/compare/whistic-alternative",
    },
  ],
};

const COMPARISON_ROWS = [
  {
    feature: "Vendor Network Dependency",
    srr: "Zero network lock-in; works with any buyer spreadsheet or portal",
    whistic: "Pushes buyers and vendors into the proprietary Whistic Network",
  },
  {
    feature: "Evidence Grounding Precision",
    srr: "100% verified citations with exact document name and page number",
    whistic: "General document attachments and profile link sharing",
  },
  {
    feature: "Custom Excel Formula Support",
    srr: "Native cell injection preserving formulas, lookups, and dropdown validation",
    whistic: "Focuses on network profiles; standard spreadsheet exports",
  },
  {
    feature: "Onboarding Speed",
    srr: "Upload policies and complete your first review in under 24 hours",
    whistic: "Multi-week enterprise sales and security profile setup",
  },
  {
    feature: "Pricing Transparency",
    srr: "Clear, startup-friendly pricing with a 100% free pilot review",
    whistic: "Enterprise contracts with substantial recurring base fees",
  },
];

export default function WhisticAlternativePage() {
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
            <span className="text-[#074E34] font-medium">Whistic Alternative</span>
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
              Whistic Alternative: Why Modern SaaS Teams Choose Security Review Ready
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Whistic is a legacy player built around a dual-sided vendor network. If you are a growing software company that needs to rapidly answer bespoke enterprise questionnaires without forcing buyers into a proprietary platform, here is how Security Review Ready compares.
            </p>
          </header>

          {/* Quotable GEO Summary Block */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              Summary: Why Choose Security Review Ready Over Whistic
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed">
              Whistic requires both vendors and buyers to participate in a shared network profile system, which fails when prospective enterprise clients demand responses in their own custom Excel templates. <strong>Security Review Ready</strong> is an open, client-first workspace that answers any questionnaire format with 100 percent verified paragraph citations and zero network lock-in.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Side-by-Side Comparison: Security Review Ready vs Whistic
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              A breakdown of operational differences between an open citation workspace and a closed vendor network:
            </p>

            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3 px-3.5 font-semibold w-40">Feature</th>
                    <th className="py-3 px-3.5 font-semibold text-[#074E34] w-52">Security Review Ready</th>
                    <th className="py-3 px-3.5 font-semibold w-52">Whistic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="hover:bg-[#FAF9F6]/50">
                      <td className="py-3 px-3.5 font-medium">{row.feature}</td>
                      <td className="py-3 px-3.5 bg-[#EBF3EF]/30 font-medium text-[#074E34]">
                        {row.srr}
                      </td>
                      <td className="py-3 px-3.5 text-[#566155]">{row.whistic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Core Advantages */}
          <section className="mb-12 space-y-6">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19]">
              Key Reasons Companies Choose an Open Response Engine
            </h2>

            <div className="bg-white p-6 rounded-lg border border-[#E7E5DE]">
              <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#28664A]" />
                1. No Friction for Enterprise Buyers
              </h3>
              <p className="text-sm text-[#566155] leading-relaxed">
                Enterprise security officers often refuse to log into third-party vendor platforms to conduct reviews. They expect their suppliers to complete the custom workbook they created. Security Review Ready meets buyers where they are, outputting directly into their native files.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E7E5DE]">
              <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#28664A]" />
                2. Explicit Auditor Evidence on Every Question
              </h3>
              <p className="text-sm text-[#566155] leading-relaxed">
                Rather than providing high-level profile summaries, Security Review Ready pinpoints the exact audit clause in your SOC 2 or ISO report. This gives enterprise procurement teams immediate confidence and dramatically reduces follow-up clarification questions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E7E5DE]">
              <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#28664A]" />
                3. Built for Fast-Growing Software Teams
              </h3>
              <p className="text-sm text-[#566155] leading-relaxed">
                You do not need an enterprise contract or months of implementation. Get started in minutes, upload your evidence, and verify your answers with one click.
              </p>
            </div>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="Whistic Alternative"
            badge="Free 24-Hour Evaluation"
            heading="Test on Your Live Customer Questionnaire"
            description="Have a vendor assessment waiting? Upload your documents and receive completed, source-cited responses in under 24 hours at zero cost."
            buttonText="Start Free Questionnaire Pilot"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}

