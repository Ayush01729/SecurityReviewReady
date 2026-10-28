import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Layers,
  HelpCircle,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SIG vs SIG Lite: Core Differences, Question Breakdown, and Automation | Security Review Ready",
  description:
    "Compare Shared Assessments Full SIG versus SIG Lite: control scope, question count, buyer risk expectations, and how to auto-fill responses with verified citations.",
  alternates: {
    canonical: "/resources/sig-vs-sig-lite",
  },
  openGraph: {
    title: "SIG vs SIG Lite: Core Differences and Question Breakdown",
    description:
      "A complete comparison of the Shared Assessments SIG and SIG Lite questionnaires for B2B SaaS companies navigating enterprise vendor risk reviews.",
    url: "https://securityreviewready.com/resources/sig-vs-sig-lite",
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
      "name": "Resources",
      "item": "https://securityreviewready.com/resources",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SIG vs SIG Lite Comparison",
      "item": "https://securityreviewready.com/resources/sig-vs-sig-lite",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "SIG vs SIG Lite: Core Differences, Question Breakdown, and How to Automate Them",
  "description": "Comprehensive comparison between Shared Assessments SIG Full and SIG Lite questionnaire standards for B2B vendor risk reviews.",
  "author": {
    "@type": "Organization",
    "name": "Security Review Ready Research Team",
    "url": "https://securityreviewready.com",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Security Review Ready",
    "url": "https://securityreviewready.com",
    "logo": "https://securityreviewready.com/icon.svg",
  },
  "datePublished": "2026-10-23T08:00:00+00:00",
  "dateModified": "2026-10-28T12:00:00+00:00",
  "mainEntityOfPage": "https://securityreviewready.com/resources/sig-vs-sig-lite",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between SIG and SIG Lite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Standardized Information Gathering (SIG) questionnaire created by Shared Assessments exists in two primary formats: Full SIG (which contains over 850 in-depth questions for high-risk, mission-critical vendors) and SIG Lite (which condenses the assessment into roughly 125 core questions for low-to-moderate risk SaaS suppliers).",
      },
    },
    {
      "@type": "Question",
      "name": "Can a B2B SaaS startup submit SIG Lite instead of Full SIG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, in many cases. Unless your application directly processes regulated payment data, sensitive healthcare information, or connects directly into the customer internal active directory, procurement teams often accept a completed SIG Lite paired with a recent SOC 2 Type II audit report.",
      },
    },
    {
      "@type": "Question",
      "name": "Who owns and maintains the SIG questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SIG assessment is developed and published annually by Shared Assessments, a global member organization specializing in third-party vendor risk management.",
      },
    },
  ],
};

export default function SigVsSigLitePage() {
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
            <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">SIG vs SIG Lite</span>
          </nav>

          {/* Article Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Comparisons & Standards
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                6 min read
              </span>
              <span>Updated October 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              SIG vs SIG Lite: Core Differences, Question Breakdown, and How to Automate Them
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Shared Assessments SIG is one of the most widely distributed third-party security assessments in enterprise procurement. Here is how Full SIG compares to SIG Lite, how buyers evaluate each, and how to complete either workbook without weeks of manual work.
            </p>
          </header>

          {/* Quotable GEO Definition Block */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              Definition: Shared Assessments SIG vs SIG Lite
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed">
              The <strong>Standardized Information Gathering (SIG) questionnaire</strong> is a vendor risk assessment tool created by Shared Assessments. <strong>Full SIG</strong> contains over 850 questions for exhaustive audits of high-risk enterprise vendors, while <strong>SIG Lite</strong> is an abbreviated 125-question subset designed to assess low-to-moderate risk software suppliers on foundational security controls.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Side-by-Side Comparison: Full SIG vs SIG Lite
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Understanding the scope of each questionnaire allows your compliance team to set realistic expectations and negotiate assessment depth with enterprise procurement officers:
            </p>

            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3 px-3.5 font-semibold w-40">Evaluation Factor</th>
                    <th className="py-3 px-3.5 font-semibold w-48">Full SIG Questionnaire</th>
                    <th className="py-3 px-3.5 font-semibold text-[#074E34]">SIG Lite Questionnaire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Question Volume</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">850+ comprehensive questions</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">~125 foundational questions</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Assessment Depth</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">Deep technical and governance audit</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">Broad baseline security review</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Target Vendor Tier</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">Tier 1: High risk, payment data, core infra</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">Tier 2 & Tier 3: Standard SaaS platforms</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Manual Completion Time</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">30 to 60 engineering hours</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">8 to 15 engineering hours</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Automated Turnaround (SRR)</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">Under 2 hours with citations</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">Under 30 minutes with citations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: The 19 SIG Domains */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              The 19 Risk Control Domains Covered
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              Both Full SIG and SIG Lite evaluate vendors across 19 synchronized control domains. While Full SIG explores sub-procedures and configuration nuances for each domain, SIG Lite tests the overarching existence of policies and controls:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-[#566155] mb-6">
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">1. Enterprise Risk Governance</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">2. Security Policy Framework</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">3. Organizational Security</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">4. Asset & Information Management</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">5. Human Resources Security</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">6. Physical & Environmental Security</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">7. Operations Management</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">8. Access Control Architecture</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">9. Application Security & SDLC</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">10. Incident Management</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">11. Business Continuity Planning</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">12. Regulatory & Legal Compliance</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">13. Endpoint Device Security</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">14. Network Architecture & Perimeter</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">15. Cryptographic Protocols</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">16. Cloud Hosting Operations</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">17. Privacy & Data Handling</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">18. Threat Management & Pentesting</div>
              <div className="p-2.5 bg-white rounded border border-[#E7E5DE]">19. Artificial Intelligence Governance</div>
            </div>
          </section>

          {/* Section: Negotiation Strategy */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Can You Negotiate to Submit SIG Lite Instead of Full SIG?
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              Yes. Enterprise procurement teams routinely default to sending Full SIG workbooks without checking the actual risk profile of the application. Here is the exact negotiation script used by high-velocity sales teams:
            </p>
            <div className="bg-[#FAF9F6] p-5 rounded-lg border border-[#E7E5DE] text-xs text-[#1A1C19] font-sans leading-relaxed mb-6">
              <p className="font-semibold text-[#074E34] mb-2 font-mono">Suggested Procurement Reply:</p>
              <p className="italic text-[#566155]">
                &ldquo;Because our software operates in a dedicated tenant without direct access to your internal networks or payment cardholder data, completing Full SIG creates unnecessary review overhead for both teams. We propose submitting our completed SIG Lite workbook paired with our current SOC 2 Type II audit report and continuous penetration test summary. This satisfies 100 percent of third-party risk criteria with verified auditor evidence.&rdquo;
              </p>
            </div>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="SIG vs SIG Lite Guide"
            badge="Free SIG Evaluation"
            heading="Automate Your SIG or SIG Lite Workbook"
            description="Whether you are facing 125 questions or 850 questions, Security Review Ready auto-fills your responses with exact paragraph citations from your verified documentation."
            buttonText="Automate My SIG Review Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}

