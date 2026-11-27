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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Panorays vs CyberGRX: 2026 Comparison [Features & Fit]",
  description:
    "Panorays vs CyberGRX comparison for third-party cyber risk management (TPRM). Compare predictive data analytics, standardized exchange portfolios, and automated questionnaire response.",
  alternates: {
    canonical: "/compare/panorays-vs-cybergrx",
  },
  openGraph: {
    title: "Panorays vs CyberGRX: 2026 In-Depth Comparison | Security Review Ready",
    description:
      "Detailed breakdown comparing Panorays attack surface ratings against CyberGRX's global risk exchange and predictive threat intelligence.",
    url: "https://securityreviewready.com/compare/panorays-vs-cybergrx",
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
    { "@type": "ListItem", position: 3, name: "Panorays vs CyberGRX", item: "https://securityreviewready.com/compare/panorays-vs-cybergrx" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/compare/panorays-vs-cybergrx#article",
  headline: "Panorays vs CyberGRX: TPRM Comparison for 2026",
  description: "Comparing Panorays automated outside-in cyber scanning with CyberGRX's crowd-sourced predictive risk exchange.",
  datePublished: "2026-11-27T00:00:00Z",
  dateModified: "2026-11-27T00:00:00Z",
  author: { "@type": "Person", name: "Security Review Ready Team" },
  publisher: { "@type": "Organization", name: "Security Review Ready", url: "https://securityreviewready.com" },
  wordCount: 3100,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "How does CyberGRX differ from Panorays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CyberGRX (part of ProcessUnity) operates a centralized exchange of validated third-party risk assessments and predictive threat modeling, allowing enterprises to order standardized assessments from a shared data pool. Panorays combines automated external perimeter scanning with customizable inside-out questionnaires sent directly to each vendor.",
      },
    },
    {
      "@type": "Question",
      "name": "Which platform is better for large financial institutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CyberGRX has extensive traction in Tier 1 banks and regulated financial institutions due to its standardized framework alignment and validated assessment tiers. Panorays is frequently preferred by mid-market to enterprise companies looking for active digital footprint tracking and rapid automated scoring.",
      },
    },
    {
      "@type": "Question",
      "name": "How can vendors complete questionnaires from Panorays or CyberGRX faster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vendors receiving complex assessments can use Security Review Ready to ingest their existing SOC 2 Type II reports and security policies, automatically drafting grounded responses with exact paragraph citations in under 24 hours.",
      },
    },
  ],
};

export default function PanoraysVsCybergrxPage() {
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
            <span className="text-[#074E34] font-medium">Panorays vs CyberGRX</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Scale className="w-3.5 h-3.5" />
              Third-Party Cyber Risk Analysis · 2026 Edition
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              Panorays vs CyberGRX: Comparing Attack Surface Scoring vs Predictive Risk Exchange
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              Evaluating third-party risk management software? Compare Panorays and CyberGRX across assessment depth, external scanning accuracy, exchange catalogs, and automated vendor workflows.
            </p>

            {/* TL;DR Box */}
            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">Executive Summary</p>
              <p className="text-[#566155] leading-relaxed">
                Choose <strong>Panorays</strong> if you want direct, automated perimeter technical scanning combined with customized, agile questionnaires. 
                Choose <strong>CyberGRX</strong> if you are an enterprise risk team needing pre-validated, standardized third-party assessments from a massive global data exchange.
              </p>
            </div>
          </div>

          {/* Comparison Matrix */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Panorays vs CyberGRX: Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#E7E5DE] rounded-xl overflow-hidden bg-white shadow-sm">
                <thead>
                  <tr className="bg-[#EBF3EF] border-b border-[#E7E5DE]">
                    <th className="text-left px-4 py-3 font-semibold text-[#074E34] text-xs">Evaluation Criterion</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1A1C19] text-xs">Panorays</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1A1C19] text-xs">CyberGRX</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-[#566155] divide-y divide-[#E7E5DE]">
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#1A1C19]">Core Philosophy</td>
                    <td className="px-4 py-3">Attack surface monitoring + custom automated questionnaires</td>
                    <td className="px-4 py-3">Crowd-sourced risk exchange + standardized validated data</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#1A1C19]">Outside-In Technical Scanning</td>
                    <td className="px-4 py-3 text-[#28664A] font-semibold">Continuous automated scans across all domains</td>
                    <td className="px-4 py-3">Integrates third-party threat feeds and predictive analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#1A1C19]">Pre-Completed Assessment Exchange</td>
                    <td className="px-4 py-3">Vendor network portal</td>
                    <td className="px-4 py-3 text-[#28664A] font-semibold">Global Exchange of 15,000+ validated profiles</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#1A1C19]">Target Audience</td>
                    <td className="px-4 py-3">Mid-market to enterprise security teams</td>
                    <td className="px-4 py-3">Large enterprises, banks, and critical infrastructure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Responder Section */}
          <section className="mb-14 bg-white border border-[#E7E5DE] rounded-xl p-6 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-3">
              Need to Complete a Panorays or CyberGRX Assessment for a Buyer?
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              If an enterprise customer just sent you a complex questionnaire via Panorays, CyberGRX, or an offline spreadsheet, 
              <Link href="/" className="text-[#28664A] font-semibold underline"> Security Review Ready</Link> drafts every answer citing the exact paragraph and page number in your SOC 2 or ISO 27001 documentation.
            </p>
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
            source="Panorays vs CyberGRX Comparison"
            heading="Complete your customer security assessment in 24 hours"
            description="Upload your pending vendor questionnaire and SOC 2 audit report. Get 100% source-cited draft answers for free."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
