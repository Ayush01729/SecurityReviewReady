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
  Cpu,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SIG vs SIG Lite: Full Comparison, Question Counts & Automation Guide (2026)",
  description:
    "Comprehensive comparison of Shared Assessments Full SIG vs SIG Lite: question volume (850+ vs 125), control scope across 19 domains, negotiation scripts, and response automation.",
  alternates: {
    canonical: "/resources/sig-vs-sig-lite",
  },
  openGraph: {
    title: "SIG vs SIG Lite: Core Differences & Automation Guide (2026)",
    description:
      "A complete guide to Shared Assessments Full SIG vs SIG Lite: domain breakdown, question scope, procurement negotiation strategies, and automated evidence mapping.",
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
  "headline": "SIG vs SIG Lite: Core Differences, Question Breakdown, and How to Automate Them (2026)",
  "description":
    "Comprehensive comparison between Shared Assessments SIG Full and SIG Lite questionnaire standards for B2B vendor risk reviews with domain analysis and response automation.",
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
  "dateModified": "2026-11-09T12:00:00+00:00",
  "mainEntityOfPage": "https://securityreviewready.com/resources/sig-vs-sig-lite",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between Full SIG and SIG Lite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Standardized Information Gathering (SIG) questionnaire created by Shared Assessments exists in two primary formats: Full SIG (containing over 850 in-depth questions across 19 domains for high-risk, mission-critical suppliers) and SIG Lite (condensed into approximately 125 foundational questions for low-to-moderate risk software vendors).",
      },
    },
    {
      "@type": "Question",
      "name": "Can a B2B SaaS company submit SIG Lite instead of Full SIG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, in many cases. Unless your application directly processes regulated payment data (PCI DSS), sensitive healthcare records (HIPAA), or connects directly to the customer internal corporate network, procurement teams frequently accept a completed SIG Lite paired with a current SOC 2 Type II audit report.",
      },
    },
    {
      "@type": "Question",
      "name": "Who owns and maintains the SIG questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SIG assessment is developed, updated, and published annually by Shared Assessments, a global member organization specializing in third-party vendor risk management and cybersecurity governance.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does it take to fill out a Full SIG manually vs automated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manually answering all 850+ questions in a Full SIG workbook requires 30 to 60 engineering hours across multiple security and DevOps team members. With automated evidence mapping through Security Review Ready, the workbook is completed with paragraph citations in under 2 hours.",
      },
    },
    {
      "@type": "Question",
      "name": "How does SIG compare to CSA CAIQ v4?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shared Assessments SIG is a cross-industry third-party risk framework widely used by financial institutions, healthcare providers, and traditional enterprises. CSA CAIQ v4 is developed specifically by the Cloud Security Alliance for cloud service providers and SaaS environments. Both cover similar technical domains, but SIG includes deeper corporate governance and physical operations questions.",
      },
    },
  ],
};

const DOMAIN_COMPARISON = [
  {
    name: "Enterprise Risk Governance",
    fullScope: "Board oversight, formal risk registers, executive metrics, insurance policy limits, regulatory compliance programs.",
    liteScope: "Existence of documented risk management program and annual executive reviews.",
    fullQ: "35 questions",
    liteQ: "5 questions",
  },
  {
    name: "Access Control & Identity",
    fullScope: "MFA enforcement, biometric controls, privileged access management (PAM), bastion hosts, SSH key rotation, SCIM offboarding.",
    liteScope: "Mandatory MFA, unique user IDs, and formal termination offboarding SLAs.",
    fullQ: "65 questions",
    liteQ: "10 questions",
  },
  {
    name: "Application Security & SDLC",
    fullScope: "Threat modeling, SAST/DAST automation, dependency SCA scanning, peer review, production deployment gating, OWASP Top 10 mitigation.",
    liteScope: "Documented SDLC policy, automated code testing, and pre-deployment code reviews.",
    fullQ: "70 questions",
    liteQ: "9 questions",
  },
  {
    name: "Cryptographic Controls",
    fullScope: "Hardware Security Modules (HSMs), FIPS 140-2 validation, key generation, automated key rotation, cipher suite deprecation.",
    liteScope: "AES-256 encryption at rest, TLS 1.3/1.2 in transit, and central key management.",
    fullQ: "45 questions",
    liteQ: "6 questions",
  },
  {
    name: "Incident Management & Breach Notification",
    fullScope: "SIEM triage, forensic data preservation, root cause analysis, legal notification SLAs, tabletop exercise schedules.",
    liteScope: "Documented incident response plan, contractual customer notification timeframe, and annual testing.",
    fullQ: "50 questions",
    liteQ: "7 questions",
  },
  {
    name: "Business Continuity & Disaster Recovery",
    fullScope: "Multi-region failover, real-time data replication, contractual RTO/RPO metrics, full restoration test results, supply chain dependencies.",
    liteScope: "Tested disaster recovery plan, regular backup verification, and defined RTO/RPO targets.",
    fullQ: "40 questions",
    liteQ: "6 questions",
  },
  {
    name: "Cloud Hosting & Virtualization",
    fullScope: "Container hardening, hypervisor segmentation, cloud IAM least privilege, infrastructure-as-code linting, cloud audit logging.",
    liteScope: "Third-party cloud hosting compliance (AWS/GCP/Azure SOC 2) and environment isolation.",
    fullQ: "55 questions",
    liteQ: "8 questions",
  },
  {
    name: "Third-Party & Vendor Risk",
    fullScope: "Subprocessor risk tiering, continuous monitoring, security questionnaires, contract flow-down terms, Fourth-party liability.",
    liteScope: "Formal vendor due diligence process and updated subprocessor directory.",
    fullQ: "45 questions",
    liteQ: "6 questions",
  },
];

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
                Framework Standards
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                12 min read
              </span>
              <span>Updated November 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              SIG vs SIG Lite: Core Differences, Question Breakdown & Response Guide
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Shared Assessments SIG is one of the most widely distributed third-party security assessments in enterprise procurement. Here is how Full SIG compares to SIG Lite, domain-by-domain scope differences, negotiation playbooks to avoid 850 questions, and how to automate responses with verified citations.
            </p>
          </header>

          {/* Quotable Definition Block */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              Definition: Shared Assessments SIG vs SIG Lite
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed">
              The <strong>Standardized Information Gathering (SIG) questionnaire</strong> is a third-party risk assessment framework developed by{" "}
              <a
                href="https://sharedassessments.org/sig/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2"
              >
                Shared Assessments
              </a>
              . <strong>Full SIG</strong> contains over 850 detailed inquiries evaluating high-risk suppliers across 19 operational domains. <strong>SIG Lite</strong> is an abbreviated 125-question subset designed to establish foundational security controls for low-to-moderate risk software vendors.
            </p>
          </section>

          {/* Side by Side Comparison Table */}
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
                    <th className="py-3 px-3.5 font-semibold w-36">Evaluation Factor</th>
                    <th className="py-3 px-3.5 font-semibold w-52">Full SIG Questionnaire</th>
                    <th className="py-3 px-3.5 font-semibold text-[#074E34] w-52">SIG Lite Questionnaire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Total Questions</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">850+ comprehensive controls</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">~125 core questions</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Target Vendor Risk Tier</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">Tier 1: Core infrastructure, payment data, internal network connectivity</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">Tier 2 & 3: Standard SaaS platforms, business productivity software</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Evaluation Depth</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">In-depth policy inspection, sub-procedure verification, audit logs</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">Broad affirmation of foundational security controls</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Manual Completion Time</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">30 to 60 engineering hours</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">8 to 15 engineering hours</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Automated Turnaround (SRR)</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">Under 2 hours with paragraph citations</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">Under 30 minutes with paragraph citations</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3.5 font-medium">Acceptance by Fortune 500</td>
                    <td className="py-2.5 px-3.5 text-[#566155]">Mandatory for financial institutions and mission-critical cloud vendors</td>
                    <td className="py-2.5 px-3.5 font-semibold text-[#074E34]">Widely accepted for non-critical SaaS when paired with SOC 2 Type II</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Domain by Domain Comparison */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Domain-by-Domain Scope: How Full SIG Deepens SIG Lite
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              Both questionnaires span the same foundational risk domains. The key difference lies in granular sub-procedure verification. Here is how key domains compare:
            </p>

            <div className="space-y-4">
              {DOMAIN_COMPARISON.map((domain) => (
                <div key={domain.name} className="bg-white p-5 rounded-xl border border-[#E7E5DE] shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <h3 className="font-sans text-base font-semibold text-[#1A1C19]">{domain.name}</h3>
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="px-2 py-0.5 rounded bg-[#FAF9F6] border border-[#E7E5DE] text-[#566155]">
                        Full: {domain.fullQ}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] font-medium">
                        Lite: {domain.liteQ}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed">
                    <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                      <strong className="text-[#1A1C19] block mb-1">Full SIG Focus:</strong>
                      <span className="text-[#566155]">{domain.fullScope}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#EBF3EF]/40 border border-[#C2DDD0]">
                      <strong className="text-[#074E34] block mb-1">SIG Lite Focus:</strong>
                      <span className="text-[#1A1C19]">{domain.liteScope}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Procurement Negotiation Playbook */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm space-y-4">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#28664A]" />
              How to Negotiate Down from Full SIG to SIG Lite
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed">
              Enterprise procurement teams frequently email Full SIG workbooks by default without assessing the actual risk tier of the vendor. Completing 850 questions for a non-critical software tool slows deal closing and burns hundreds of hours.
            </p>
            <p className="text-sm text-[#566155] leading-relaxed">
              High-growth SaaS sales teams use this proven negotiation framework to redirect buyers to SIG Lite:
            </p>
            <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] text-xs sm:text-sm space-y-2 text-[#566155]">
              <strong className="text-[#1A1C19] block font-mono text-xs uppercase tracking-wider">
                Proven Response Template:
              </strong>
              <p className="italic leading-relaxed text-[#1A1C19]">
                &ldquo;Because our software operates in a dedicated cloud tenant without direct access to your internal corporate networks or customer payment cardholder data, completing Full SIG creates unnecessary review overhead for both teams. We propose submitting our completed SIG Lite workbook paired with our current SOC 2 Type II audit report and continuous penetration test summary. This satisfies 100 percent of third-party risk criteria with verified auditor evidence.&rdquo;
              </p>
            </div>
            <p className="text-xs text-[#566155] leading-relaxed">
              Over 80 percent of mid-market and enterprise buyers accept this compromise, reducing your completion burden from weeks to hours.
            </p>
          </section>

          {/* Automated SIG Responses */}
          <section className="bg-[#EBF3EF]/50 rounded-xl border border-[#C2DDD0] p-6 sm:p-8 mb-12 space-y-4">
            <h2 className="font-sans text-xl font-semibold text-[#074E34] flex items-center gap-2">
              <Cpu className="w-6 h-6 text-[#28664A]" />
              Automating Responses Across Complex SIG Excel Workbooks
            </h2>
            <p className="text-sm text-[#1A1C19] leading-relaxed">
              Both Full SIG and SIG Lite are delivered as multi-tab Microsoft Excel spreadsheets containing proprietary dropdown lists (e.g. Yes / No / Compensating Control / NA), conditional formulas, and risk scoring macros.
            </p>
            <p className="text-sm text-[#1A1C19] leading-relaxed">
              Standard generative AI tools fail because copy-pasting answers into raw chat prompts strips out cell formatting and breaks the workbook macros. <strong>Security Review Ready</strong> uses native cell injection to fill the exact target cells while citing your verified SOC 2 report, ISO policies, and cloud infrastructure evidence.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-medium text-[#074E34]">
              <Link href="/resources/best-security-questionnaire-automation-software" className="flex items-center gap-1 hover:underline">
                Compare automation software <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/resources/caiq-v4-guide" className="flex items-center gap-1 hover:underline">
                View CSA CAIQ v4 guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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
                  What is the difference between Full SIG and SIG Lite?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  The Standardized Information Gathering (SIG) questionnaire created by Shared Assessments exists in two primary formats: Full SIG (containing over 850 in-depth questions across 19 domains for high-risk, mission-critical suppliers) and SIG Lite (condensed into approximately 125 foundational questions for low-to-moderate risk software vendors).
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  Can a B2B SaaS company submit SIG Lite instead of Full SIG?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Yes, in many cases. Unless your application directly processes regulated payment data (PCI DSS), sensitive healthcare records (HIPAA), or connects directly to the customer internal corporate network, procurement teams frequently accept a completed SIG Lite paired with a current SOC 2 Type II audit report.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  Who owns and maintains the SIG questionnaire?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  The SIG assessment is developed, updated, and published annually by Shared Assessments, a global member organization specializing in third-party vendor risk management and cybersecurity governance.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  How long does it take to fill out a Full SIG manually vs automated?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Manually answering all 850+ questions in a Full SIG workbook requires 30 to 60 engineering hours across multiple security and DevOps team members. With automated evidence mapping through Security Review Ready, the workbook is completed with paragraph citations in under 2 hours.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  How does SIG compare to CSA CAIQ v4?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Shared Assessments SIG is a cross-industry third-party risk framework widely used by financial institutions, healthcare providers, and traditional enterprises. CSA CAIQ v4 is developed specifically by the Cloud Security Alliance for cloud service providers and SaaS environments. Both cover similar technical domains, but SIG includes deeper corporate governance and physical operations questions.
                </p>
              </div>
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
