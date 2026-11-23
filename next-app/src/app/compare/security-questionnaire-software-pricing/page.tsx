import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security Questionnaire Software Pricing [2026 Guide]",
  description:
    "Complete 2026 pricing comparison for Conveyor, Whistic, SafeBase, Loopio, HyperComply, and Security Review Ready. See real costs, contract lengths, and hidden fees.",
  alternates: {
    canonical: "/compare/security-questionnaire-software-pricing",
  },
  openGraph: {
    title: "Security Questionnaire Software Pricing Guide (2026)",
    description:
      "Honest breakdown of security questionnaire automation pricing: Conveyor vs Whistic vs SafeBase vs Loopio vs Security Review Ready. Hidden costs and contract terms revealed.",
    url: "https://securityreviewready.com/compare/security-questionnaire-software-pricing",
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
      "name": "Software Pricing",
      "item": "https://securityreviewready.com/compare/security-questionnaire-software-pricing",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Security Questionnaire Automation Software Pricing: 2026 Guide & Cost Matrix",
  "description":
    "Comprehensive benchmark of security questionnaire tool pricing: entry costs, typical enterprise contracts, per-seat fees, and free pilot alternatives.",
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
      "name": "How much does security questionnaire automation software cost in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most enterprise security questionnaire tools charge between $10,000 and $45,000+ per year on mandatory annual contracts. Lightweight tools start at $6,000 to $12,000 per year. Security Review Ready provides a 100% free pilot for the first questionnaire with flexible, transparent pricing thereafter.",
      },
    },
    {
      "@type": "Question",
      "name": "Why don't Conveyor, Whistic, and Panorays publish pricing publicly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Legacy vendors use opaque enterprise pricing models based on company headcount, annual questionnaire volume, and custom onboarding fees. This sales qualification strategy allows them to maximize contract value during enterprise sales cycles.",
      },
    },
    {
      "@type": "Question",
      "name": "Are there free tools for answering security questionnaires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Security Review Ready allows B2B SaaS teams and vCISOs to submit their first customer security questionnaire and compliance evidence for a 100% free, 24-hour pilot with complete, source-cited answers.",
      },
    },
  ],
};

const PRICING_TABLE = [
  {
    vendor: "Security Review Ready",
    startingPrice: "$0 (Free First Pilot)",
    typicalAnnual: "Flexible / Transparent",
    contractType: "No lock-in / Pilot",
    trustCenterIncluded: "No (Focus on Response)",
    hiddenFees: "None",
    bestFor: "Seed to Series B SaaS, vCISOs, Consultants",
  },
  {
    vendor: "Conveyor",
    startingPrice: "$1,500/month",
    typicalAnnual: "$18,000 – $48,000+",
    contractType: "Annual mandatory",
    trustCenterIncluded: "Yes",
    hiddenFees: "Onboarding fees, seat tiers",
    bestFor: "Mid-market to Enterprise tech",
  },
  {
    vendor: "Whistic",
    startingPrice: "$1,200/month",
    typicalAnnual: "$15,000 – $40,000+",
    contractType: "Annual mandatory",
    trustCenterIncluded: "Network Profile",
    hiddenFees: "Network access, custom integrations",
    bestFor: "Dual-sided buyer/vendor risk teams",
  },
  {
    vendor: "SafeBase",
    startingPrice: "$800/month",
    typicalAnnual: "$10,000 – $25,000+",
    contractType: "Annual mandatory",
    trustCenterIncluded: "Yes (Core Product)",
    hiddenFees: "AI questionnaire add-on fees",
    bestFor: "Companies focused on trust deflection",
  },
  {
    vendor: "Loopio",
    startingPrice: "$1,250/month",
    typicalAnnual: "$15,000 – $35,000+",
    contractType: "Annual mandatory",
    trustCenterIncluded: "No",
    hiddenFees: "User licenses, storage tiers",
    bestFor: "Dedicated RFP & proposal teams",
  },
  {
    vendor: "HyperComply",
    startingPrice: "$800/month",
    typicalAnnual: "$10,000 – $22,000+",
    contractType: "Annual mandatory",
    trustCenterIncluded: "Optional add-on",
    hiddenFees: "Overage fees per questionnaire",
    bestFor: "Teams wanting outsourced human review",
  },
  {
    vendor: "Vanta (Questionnaire Module)",
    startingPrice: "$500/month (Add-on)",
    typicalAnnual: "$7,500 – $20,000+ (Stack)",
    contractType: "Annual mandatory",
    trustCenterIncluded: "Yes (Trust Report)",
    hiddenFees: "Tied to compliance audit subscriptions",
    bestFor: "Existing Vanta SOC 2 customers",
  },
];

export default function SecurityQuestionnairePricingPage() {
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
        <article className="max-w-[960px] mx-auto px-6">
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
            <span className="text-[#074E34] font-medium">Pricing Guide</span>
          </nav>

          {/* Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                2026 Industry Cost Report
              </span>
              <span>Updated November 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              Security Questionnaire Software Pricing: The 2026 Cost Breakdown
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Tired of scheduling three mandatory discovery calls just to get a price quote? Here is an unvarnished analysis of real-world pricing, contract commitments, and hidden fees across Conveyor, Whistic, SafeBase, Loopio, HyperComply, and Security Review Ready.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#566155]">
              <span>By</span>
              <span className="text-[#1A1C19] font-medium">Security Review Ready Pricing & Research Team</span>
            </div>
          </header>

          {/* Master Pricing Matrix Table */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              2026 Pricing Comparison Matrix
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              Aggregated estimates based on procurement invoices, public customer disclosures, and industry vendor reviews:
            </p>

            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3.5 px-3.5 font-semibold">Vendor</th>
                    <th className="py-3.5 px-3.5 font-semibold text-[#074E34]">Estimated Starting Cost</th>
                    <th className="py-3.5 px-3.5 font-semibold">Typical Annual Contract</th>
                    <th className="py-3.5 px-3.5 font-semibold">Contract Lock-In</th>
                    <th className="py-3.5 px-3.5 font-semibold">Hidden Fees / Add-ons</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  {PRICING_TABLE.map((row) => (
                    <tr key={row.vendor} className="hover:bg-[#FAF9F6]/50">
                      <td className="py-3 px-3.5 font-semibold">{row.vendor}</td>
                      <td className="py-3 px-3.5 bg-[#EBF3EF]/30 font-medium text-[#074E34]">
                        {row.startingPrice}
                      </td>
                      <td className="py-3 px-3.5 text-[#1A1C19] font-medium">{row.typicalAnnual}</td>
                      <td className="py-3 px-3.5 text-[#566155]">{row.contractType}</td>
                      <td className="py-3 px-3.5 text-[#566155]">{row.hiddenFees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* The Hidden Costs of Legacy Platforms */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm space-y-6">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19]">
              The 4 Hidden Costs in Enterprise Security Questionnaire Contracts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <h3 className="font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500" /> 1. Implementation & Onboarding Surcharges
                </h3>
                <p className="text-[#566155] leading-relaxed">
                  Legacy vendors frequently bundle $2,500 to $5,000 "professional services" fees onto annual contracts to assist with initial knowledge base tagging and parser configuration.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <h3 className="font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500" /> 2. Seat-Based Reviewer Licenses
                </h3>
                <p className="text-[#566155] leading-relaxed">
                  Tools like Loopio and 1up.ai charge incremental seat licenses ($100-$250/user/mo). As sales engineering, legal, and compliance collaborate, licensing costs expand unexpectedly.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <h3 className="font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500" /> 3. Questionnaire Volume Caps & Overages
                </h3>
                <p className="text-[#566155] leading-relaxed">
                  Managed service providers (like HyperComply) cap standard plans at 20 to 50 completed questionnaires per year. Exceeding your quarterly quota results in steep per-document overage penalties.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <h3 className="font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500" /> 4. Annual Upfront Payment Lock-In
                </h3>
                <p className="text-[#566155] leading-relaxed">
                  Almost all established players require a 12-month non-refundable upfront payment before you verify whether their parser preserves your buyers' intricate Excel formulas.
                </p>
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
                  How much does security questionnaire automation software cost in 2026?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Most enterprise security questionnaire tools charge between $10,000 and $45,000+ per year on mandatory annual contracts. Lightweight tools start at $6,000 to $12,000 per year. Security Review Ready provides a 100% free pilot for the first questionnaire with flexible, transparent pricing thereafter.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  Why don't Conveyor, Whistic, and Panorays publish pricing publicly?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Legacy vendors use opaque enterprise pricing models based on company headcount, annual questionnaire volume, and custom onboarding fees. This sales qualification strategy allows them to maximize contract value during enterprise sales cycles.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  Are there free tools for answering security questionnaires?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Yes. Security Review Ready allows B2B SaaS teams and vCISOs to submit their first customer security questionnaire and compliance evidence for a 100% free, 24-hour pilot with complete, source-cited answers.
                </p>
              </div>
            </div>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="Pricing Guide"
            badge="100% Free First Run"
            heading="Test Before You Spend $25,000 on Software"
            description="Upload your live customer questionnaire and security evidence. We will parse it and return complete responses with paragraph-level citations in under 24 hours at zero cost."
            buttonText="Start Free Questionnaire Pilot"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
