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
  title: "Panorays vs RiskIQ: TPCRM Comparison [2026]",
  description:
    "Panorays vs RiskIQ (Microsoft Defender EASM) comparison. Understand external attack surface management vs third-party cyber risk management and vendor response automation.",
  alternates: {
    canonical: "/compare/panorays-vs-riskiq",
  },
  openGraph: {
    title: "Panorays vs RiskIQ (Microsoft Defender EASM) Breakdown",
    description:
      "A technical comparison of Panorays and RiskIQ: attack surface discovery, supplier cyber risk ratings, and how B2B vendors automate questionnaire responses.",
    url: "https://securityreviewready.com/compare/panorays-vs-riskiq",
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
      "name": "Panorays vs RiskIQ",
      "item": "https://securityreviewready.com/compare/panorays-vs-riskiq",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Panorays vs RiskIQ (Microsoft Defender EASM): TPCRM & Attack Surface Comparison (2026)",
  "description":
    "Detailed technical comparison between Panorays and RiskIQ (Microsoft Defender External Attack Surface Management), and how SaaS vendors respond to their assessments.",
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
      "name": "What is the difference between Panorays and RiskIQ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RiskIQ (now Microsoft Defender External Attack Surface Management / EASM) focuses on discovering and indexing internet-facing assets, vulnerabilities, and digital infrastructure belonging to your enterprise. Panorays combines automated external cyber posture scans with automated third-party questionnaires specifically to evaluate supplier and vendor risk.",
      },
    },
    {
      "@type": "Question",
      "name": "Do Panorays or RiskIQ help vendors answer security questionnaires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Both Panorays and RiskIQ are buyer-side or enterprise-side assessment tools. Panorays scores vendors from the buyer's perspective. When enterprise buyers send questionnaires generated through Panorays, SaaS vendors use Security Review Ready to rapidly auto-populate answers with verified audit citations.",
      },
    },
    {
      "@type": "Question",
      "name": "How does Security Review Ready fit in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security Review Ready is built for the vendor side of the transaction. It allows B2B SaaS companies to take incoming vendor assessments from Panorays, Whistic, or custom spreadsheets and generate 100% cited answers backed by their SOC 2 and ISO documentation in under 24 hours.",
      },
    },
  ],
};

const COMPARISON_ROWS = [
  {
    feature: "Primary Domain",
    srr: "Vendor Response Automation (Answering)",
    panorays: "Third-Party Cyber Risk Management (TPCRM)",
    riskiq: "External Attack Surface Management (EASM)",
  },
  {
    feature: "Target User",
    srr: "B2B SaaS sellers, vCISOs, Sales Engineers",
    panorays: "Procurement, Vendor Risk Officers, CISOs",
    riskiq: "SOC Analysts, SecOps, Threat Intelligence",
  },
  {
    feature: "Questionnaire Answering",
    srr: "Automated cell-level answers with exact citations",
    panorays: "Issues questionnaires; vendor must fill manually",
    riskiq: "None (Asset & telemetry scanning only)",
  },
  {
    feature: "Evidence Grounding",
    srr: "Exact SOC 2, ISO 27001, and policy citations",
    panorays: "External domain/IP rating + vendor attestation",
    riskiq: "Internet infrastructure telemetry & DNS maps",
  },
  {
    feature: "Turnaround Time",
    srr: "Under 24 hours (Free pilot available)",
    panorays: "Enterprise vendor monitoring deployment",
    riskiq: "Continuous cloud telemetry indexing",
  },
];

export default function PanoraysVsRiskiqPage() {
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
            <span className="text-[#074E34] font-medium">Panorays vs RiskIQ</span>
          </nav>

          {/* Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Cyber Risk Intelligence
              </span>
              <span>Updated November 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              Panorays vs RiskIQ (Defender EASM): TPCRM vs Attack Surface
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Comparing Panorays and RiskIQ (Microsoft Defender EASM)? Discover how external attack surface mapping compares to third-party vendor risk scoring, and how SaaS vendors solve the questionnaire bottleneck.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#566155]">
              <span>By</span>
              <span className="text-[#1A1C19] font-medium">Security Review Ready Engineering Team</span>
            </div>
          </header>

          {/* Summary Box */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              Executive Summary: Panorays vs RiskIQ
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed">
              <strong>RiskIQ</strong> (acquired by Microsoft) provides continuous visibility into your organization's digital footprint and exposed internet assets. <strong>Panorays</strong> uses external attack surface scanning specifically to assess third-party suppliers and pair scans with vendor questionnaires. When enterprise buyers use Panorays to audit your SaaS application, <strong>Security Review Ready</strong> helps you complete the required assessments with 100% cited proof in under 24 hours.
            </p>
          </section>

          {/* 3-Way Comparison Table */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Side-by-Side Comparison: Panorays vs RiskIQ vs Security Review Ready
            </h2>
            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3 px-3.5 font-semibold w-36">Dimension</th>
                    <th className="py-3 px-3.5 font-semibold text-[#074E34] w-48">Security Review Ready</th>
                    <th className="py-3 px-3.5 font-semibold w-48">Panorays</th>
                    <th className="py-3 px-3.5 font-semibold w-48">RiskIQ (EASM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="hover:bg-[#FAF9F6]/50">
                      <td className="py-3 px-3.5 font-medium">{row.feature}</td>
                      <td className="py-3 px-3.5 bg-[#EBF3EF]/30 font-medium text-[#074E34]">
                        {row.srr}
                      </td>
                      <td className="py-3 px-3.5 text-[#566155]">{row.panorays}</td>
                      <td className="py-3 px-3.5 text-[#566155]">{row.riskiq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* The Vendor Side Challenge */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm space-y-4">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19]">
              The Vendor Dilemma: Answering Buyer-Side Risk Audits
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed">
              When enterprise buyers send security questionnaires through Panorays or request details regarding external risk findings, SaaS sales teams often face a painful choice: spend 20 hours manually typing answers into a portal, or risk stalling a six-figure contract.
            </p>
            <p className="text-sm text-[#566155] leading-relaxed">
              Security Review Ready acts as the vendor's intelligent defense layer: upload the Panorays assessment questions and your compliance documentation, and our engine produces auditor-ready answers backed by exact SOC 2 and ISO 27001 citations.
            </p>
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
                  What is the difference between Panorays and RiskIQ?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  RiskIQ (Microsoft Defender External Attack Surface Management) discovers and maps your own enterprise internet-facing infrastructure. Panorays evaluates your third-party suppliers using automated scans and compliance questionnaires.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  How does Security Review Ready help vendors audited by Panorays?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Security Review Ready takes questions issued by buyer-side platforms like Panorays and automatically drafts citation-grounded responses in under 24 hours, cutting manual effort by over 90%.
                </p>
              </div>
            </div>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="Panorays vs RiskIQ Comparison"
            badge="Free 24-Hour Evaluation"
            heading="Received a Third-Party Risk Assessment?"
            description="Whether your buyer uses Panorays, Whistic, or an Excel workbook, upload your questionnaire and policies. We deliver complete, source-cited answers within 24 hours at zero cost."
            buttonText="Start Free Questionnaire Pilot"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
