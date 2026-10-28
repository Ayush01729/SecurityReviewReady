import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Layers,
  FileSpreadsheet,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "What is CAIQ v4? CSA Cloud Security Alliance Questionnaire Explained | Security Review Ready",
  description:
    "An authoritative guide to CSA CAIQ v4: Cloud Controls Matrix (CCM 4.0) mapping, differences from CAIQ v3, and how B2B SaaS teams automate responses with verified citations.",
  alternates: {
    canonical: "/resources/caiq-v4-guide",
  },
  openGraph: {
    title: "What is CAIQ v4? Cloud Security Alliance Questionnaire Explained",
    description:
      "A complete guide for B2B SaaS companies responding to CSA CAIQ v4 assessments. Includes CCM 4.0 domain breakdowns and automated evidence mapping.",
    url: "https://securityreviewready.com/resources/caiq-v4-guide",
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
      "name": "CAIQ v4 Guide",
      "item": "https://securityreviewready.com/resources/caiq-v4-guide",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "What is CAIQ v4? CSA Cloud Security Alliance Questionnaire Explained for B2B SaaS",
  "description": "Technical analysis of Cloud Security Alliance Consensus Assessments Initiative Questionnaire v4, CCM 4.0 controls, and response automation.",
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
  "datePublished": "2026-10-24T08:00:00+00:00",
  "dateModified": "2026-10-28T12:00:00+00:00",
  "mainEntityOfPage": "https://securityreviewready.com/resources/caiq-v4-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Cloud Security Alliance CAIQ v4?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Consensus Assessments Initiative Questionnaire v4 (CAIQ v4) is an industry-standard vendor assessment created by the Cloud Security Alliance (CSA). It provides a standardized set of 261 questions mapped directly to the Cloud Controls Matrix (CCM 4.0) to evaluate security posture across cloud service providers and SaaS platforms.",
      },
    },
    {
      "@type": "Question",
      "name": "How many questions are in CAIQ v4?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CAIQ v4 contains 261 objective questions spanning 17 architectural domains, representing a significant consolidation and refinement from the 295 controls found in CAIQ v3.1.",
      },
    },
    {
      "@type": "Question",
      "name": "How does CAIQ relate to the CSA STAR Registry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Submitting a completed CAIQ questionnaire is the primary requirement for achieving CSA STAR Level 1 (Self-Assessment) status, demonstrating transparent compliance to prospective cloud buyers.",
      },
    },
  ],
};

const CCM_DOMAINS = [
  { code: "A&A", name: "Audit & Assurance", desc: "Independent audit frequency, audit trail retention, and risk assessment schedules." },
  { code: "AIS", name: "Application & Interface Security", desc: "Application security standards, secure coding practices, API authentication, and web vulnerability testing." },
  { code: "BCR", name: "Business Continuity & Resilience", desc: "Disaster recovery, data replication, and high-availability architecture across cloud regions." },
  { code: "CCC", name: "Change Control & Configuration", desc: "Code promotion pipelines, emergency change approval, and infrastructure-as-code linting." },
  { code: "CEK", name: "Cryptography & Key Management", desc: "Cryptographic algorithms, key generation, key rotation schedules, and hardware security modules (HSMs)." },
  { code: "DCS", name: "Datacenter Security", desc: "Physical perimeter security, biometric access, and environmental controls for hosting facilities." },
  { code: "DSP", name: "Data Security & Privacy", desc: "Data classification, sensitive data discovery, secure data disposal, and privacy regulation compliance." },
  { code: "GRC", name: "Governance, Risk & Compliance", desc: "Security policy management, executive reporting, and formal third-party regulatory alignment." },
  { code: "HRS", name: "Human Resources Security", desc: "Employee background verification, mandatory security awareness training, and termination offboarding." },
  { code: "IAM", name: "Identity & Access Management", desc: "Multi-Factor Authentication (MFA), role-based privilege enforcement, and credential hygiene." },
  { code: "IVS", name: "Infrastructure & Virtualization", desc: "Hypervisor isolation, cloud container hardening, and software-defined network segmentation." },
  { code: "IPY", name: "Interoperability & Portability", desc: "Data portability standards, API documentation, and customer exit strategies." },
  { code: "MOS", name: "Mobile Security", desc: "Mobile device management (MDM) policies and enterprise application sandbox isolation." },
  { code: "SEF", name: "Security Incident Management", desc: "Incident triage, forensic readiness, and client breach notification timeframes." },
  { code: "STA", name: "Supply Chain & Third-Party Risk", desc: "Vendor risk assessment, cloud hosting SLAs, and sub-processor evaluation policies." },
  { code: "TVM", name: "Threat & Vulnerability Management", desc: "Penetration testing, continuous vulnerability discovery, and patch turnaround SLAs." },
  { code: "UEM", name: "Universal Endpoint Management", desc: "Workstation disk encryption, endpoint detection and response (EDR), and local administrative privilege bans." },
];

export default function CaiqV4GuidePage() {
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
            <span className="text-[#074E34] font-medium">CAIQ v4 Guide</span>
          </nav>

          {/* Article Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Framework Guides
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                7 min read
              </span>
              <span>Updated October 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              What is CAIQ v4? Cloud Security Alliance Questionnaire Explained for B2B SaaS
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              When enterprise procurement teams ask for your CSA CAIQ, they are evaluating your software against the gold standard in cloud security. Here is what CAIQ v4 contains, how it maps to CCM 4.0, and how to automate responses with verified citations.
            </p>
          </header>

          {/* Quotable GEO Definition Block */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              Definition: CSA CAIQ v4
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed">
              The <strong>Consensus Assessments Initiative Questionnaire v4 (CAIQ v4)</strong> is an industry-standard cloud security assessment created by the Cloud Security Alliance (CSA). It features 261 objective questions mapped directly to the Cloud Controls Matrix (CCM 4.0), providing enterprise buyers with a standardized evaluation of a software vendor security controls across 17 technical domains.
            </p>
          </section>

          {/* Section 1: CAIQ v3 vs CAIQ v4 */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Key Differences: CAIQ v3.1 vs CAIQ v4
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Organizations upgrading from legacy templates or responding to new buyer requests must understand how CAIQ v4 refines the evaluation framework:
            </p>

            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3 px-3.5 font-semibold w-40">Feature</th>
                    <th className="py-3 px-3.5 font-semibold w-48">CAIQ v3.1 (Legacy)</th>
                    <th className="py-3 px-3.5 font-semibold text-[#074E34]">CAIQ v4 (Current Standard)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Underlying Matrix</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">Mapped to CCM 3.0.1</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">Mapped to CCM 4.0</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Total Questions</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">295 controls</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">261 streamlined questions</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Shared Responsibility</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">Ambiguous IaaS/PaaS/SaaS boundaries</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">Explicit shared responsibility tiers</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Regulatory Mappings</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">ISO 27001:2013, SOC 2 older criteria</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">ISO 27001:2022, GDPR, NIST SP 800-53 r5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: The 17 CCM Domains */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              The 17 Cloud Controls Matrix (CCM 4.0) Domains
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              CAIQ v4 groups its 261 questions into 17 technical domains. Below is the full architectural breakdown:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {CCM_DOMAINS.map((domain) => (
                <div key={domain.code} className="bg-white p-4 rounded-lg border border-[#E7E5DE]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#EBF3EF] text-[#074E34]">
                      {domain.code}
                    </span>
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19]">
                      {domain.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">{domain.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Automating CAIQ v4 Responses */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Best Practices for Auto-Filling CAIQ v4 Spreadsheets
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              Because CAIQ v4 questions are standardized and binary (Yes/No with explanation), it is one of the highest-yield targets for automated evidence mapping. Follow these rules to ensure smooth approval:
            </p>
            <ul className="text-sm text-[#566155] space-y-3 mb-6">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1A1C19]">Clarify the Cloud Service Model:</strong> If you are a SaaS vendor hosted on AWS or Google Cloud, clearly state that physical datacenter controls (DCS domain) are delegated to your infrastructure provider.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1A1C19]">Attach Paragraph Proof:</strong> Enterprise auditors reject bare "Yes" answers. Always provide a 1-sentence explanation citing your specific SOC 2 Trust Services Criteria or ISO policy section.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1A1C19]">Publish to the CSA STAR Registry:</strong> Completing your CAIQ v4 once and submitting it as a self-assessment to the CSA STAR registry lets enterprise buyers self-serve, eliminating future questionnaire requests.
                </span>
              </li>
            </ul>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="CAIQ v4 Guide"
            badge="Free CAIQ v4 Evaluation"
            heading="Need to Fill a CAIQ v4 Workbook Fast?"
            description="Drop your CAIQ spreadsheet into Security Review Ready. Our engine maps your SOC 2 audit report to all 261 controls with exact paragraph citations in minutes."
            buttonText="Auto-Fill My CAIQ v4 Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}

