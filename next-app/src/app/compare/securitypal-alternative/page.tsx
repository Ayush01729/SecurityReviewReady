import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Scale,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Database,
  Lock,
  HelpCircle,
  AlertTriangle,
  Zap,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SecurityPal Alternative: Pure Software Automation [2026]",
  description:
    "SecurityPal alternative: Compare Security Review Ready vs SecurityPal. Discover why fast pure-software automation with exact citations outperforms expensive outsourced human review queues.",
  alternates: {
    canonical: "/compare/securitypal-alternative",
  },
  openGraph: {
    title: "SecurityPal Alternative: Software Automation vs Human Outsourcing (2026)",
    description:
      "Comparing Security Review Ready and SecurityPal for vendor security reviews. 24-hour pure software citations vs $30k/yr outsourced analyst queues.",
    url: "https://securityreviewready.com/compare/securitypal-alternative",
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
    { "@type": "ListItem", position: 3, name: "SecurityPal Alternative", item: "https://securityreviewready.com/compare/securitypal-alternative" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/compare/securitypal-alternative#article",
  headline: "SecurityPal Alternative: Software Automation vs Outsourced Security Concierge",
  description: "Comparing SecurityPal's human-assisted concierge model against Security Review Ready's deterministic, citation-grounded software automation.",
  datePublished: "2026-11-27T00:00:00Z",
  dateModified: "2026-11-27T00:00:00Z",
  author: { "@type": "Person", name: "Security Review Ready Team" },
  publisher: { "@type": "Organization", name: "Security Review Ready", url: "https://securityreviewready.com" },
  wordCount: 3200,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "How does Security Review Ready differ from SecurityPal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SecurityPal operates as an outsourced security concierge service, utilizing human analyst teams in offshore operations centers to manually review and answer questionnaires. Security Review Ready is a pure-software automation engine that ingests your SOC 2 reports and drafts verified responses with paragraph citations in under 24 hours at 1/10th the cost.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does SecurityPal cost compared to software automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SecurityPal typically requires annual enterprise commitments ranging from $25,000 to $50,000+ per year to cover their human analyst labor overhead. Security Review Ready provides a free first questionnaire pilot and flexible, transparent software pricing without annual enterprise lock-in.",
      },
    },
    {
      "@type": "Question",
      "name": "Is pure software automation safe for enterprise security reviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, provided it enforces strict human-in-the-loop review. Security Review Ready never sends unapproved answers directly to buyers. Every drafted answer cites the exact document, section, and page number, enabling your internal lead to verify and approve with one click.",
      },
    },
  ],
};

export default function SecurityPalAlternativePage() {
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
            <span className="text-[#074E34] font-medium">SecurityPal Alternative</span>
          </nav>

          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Scale className="w-3.5 h-3.5" />
              Software vs Outsourcing Breakdown · 2026 Edition
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              SecurityPal Alternative: Software Automation vs Outsourced Concierge
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              Evaluating SecurityPal? Discover why fast, deterministic software automation with exact page citations outperforms expensive outsourced human review queues.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">Executive Summary: Two Different Approaches</p>
              <p className="text-[#566155] leading-relaxed">
                SecurityPal solves the questionnaire headache by <strong>outsourcing the labor to human analysts</strong> overseas. 
                Security Review Ready solves it with <strong>AI-grounded software automation</strong> that parses your evidence and cites exact document paragraphs in seconds. 
                The result: 10x faster turnaround at 1/10th the price, with complete internal audit control.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Security Review Ready vs SecurityPal: Side-by-Side
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#E7E5DE] rounded-xl overflow-hidden bg-white shadow-sm">
                <thead>
                  <tr className="bg-[#EBF3EF] border-b border-[#E7E5DE]">
                    <th className="text-left px-4 py-3 font-semibold text-[#074E34] text-xs">Feature</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#28664A] text-xs">Security Review Ready</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1A1C19] text-xs">SecurityPal</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-[#566155] divide-y divide-[#E7E5DE]">
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#1A1C19]">Operating Model</td>
                    <td className="px-4 py-3 text-[#28664A] font-semibold">Pure-software AI evidence citation engine</td>
                    <td className="px-4 py-3">Outsourced human analyst concierge</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#1A1C19]">Turnaround Time</td>
                    <td className="px-4 py-3 text-[#28664A] font-semibold">Under 24 hours (instant AI drafting)</td>
                    <td className="px-4 py-3">2 to 5 business days per questionnaire</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#1A1C19]">Citation Verification</td>
                    <td className="px-4 py-3 text-[#28664A] font-semibold">Exact document name, section, and page number</td>
                    <td className="px-4 py-3">Analyst-drafted narrative summaries</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#1A1C19]">Pricing Structure</td>
                    <td className="px-4 py-3 text-[#28664A] font-semibold">Free Pilot tier / affordable software plans</td>
                    <td className="px-4 py-3">$25,000–$50,000+/year enterprise contracts</td>
                  </tr>
                </tbody>
              </table>
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
            source="SecurityPal Alternative Comparison"
            heading="Try pure-software questionnaire automation for free"
            description="Upload your pending customer security review and compliance documents. We'll return 100% source-cited draft answers in under 24 hours."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
