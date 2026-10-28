import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Download,
  AlertTriangle,
  Lock,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Complete Guide to Vendor Security Questionnaires: Checklist & 30-Question Template",
  description:
    "Learn what vendor security questionnaires are, how enterprise buyers tier suppliers, and access the 30 core questions every B2B SaaS company must answer.",
  alternates: {
    canonical: "/resources/vendor-security-questionnaire-guide",
  },
  openGraph: {
    title: "The Complete Guide to Vendor Security Questionnaires: Checklist & Template",
    description:
      "A comprehensive guide covering vendor security evaluation domains, tiering rubrics, and the 30 essential questions with evidence requirements.",
    url: "https://securityreviewready.com/resources/vendor-security-questionnaire-guide",
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
      "name": "Vendor Security Questionnaire Guide",
      "item": "https://securityreviewready.com/resources/vendor-security-questionnaire-guide",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "The Complete Guide to Vendor Security Questionnaires: Checklist & 30-Question Template",
  "description": "Comprehensive guide to third-party vendor risk assessment questionnaires, control domains, and response checklists for B2B SaaS.",
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
  "datePublished": "2026-10-25T08:00:00+00:00",
  "dateModified": "2026-10-28T12:00:00+00:00",
  "mainEntityOfPage": "https://securityreviewready.com/resources/vendor-security-questionnaire-guide",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a vendor security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A vendor security questionnaire is a formal assessment sent by enterprise procurement and information security teams to prospective software suppliers. It evaluates how the vendor protects confidential customer data, governs internal access, maintains compliance certifications, and responds to cybersecurity incidents.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does it typically take to complete a vendor security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For manual processes, teams typically spend between 20 and 45 engineering or compliance hours over a period of 2 to 3 weeks. Modern AI-assisted automation with citation grounding reduces turnaround time to under 24 hours.",
      },
    },
    {
      "@type": "Question",
      "name": "Can a SOC 2 Type II report replace a security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While a SOC 2 Type II report answers roughly 70 percent of standard controls, enterprise buyers frequently require custom questionnaires to address company-specific architecture, data retention, and sub-processor policies.",
      },
    },
  ],
};

const CORE_QUESTIONS = [
  {
    id: "GOV-01",
    domain: "Information Security Governance",
    question: "Do you maintain a formally documented and executive-approved Information Security Policy?",
    evidence: "Information Security Policy PDF, dated within the last 12 months",
  },
  {
    id: "GOV-02",
    domain: "Information Security Governance",
    question: "Do you hold an active SOC 2 Type II, ISO/IEC 27001, or equivalent third-party audit report?",
    evidence: "SOC 2 Type II report or ISO 27001 certificate with active validity period",
  },
  {
    id: "GOV-03",
    domain: "Information Security Governance",
    question: "Do you undergo annual independent third-party penetration testing of your web applications?",
    evidence: "Executive summary letter of latest penetration test results",
  },
  {
    id: "ACC-01",
    domain: "Access Control & Identity",
    question: "Is Multi-Factor Authentication (MFA) strictly enforced for all employee and contractor accounts?",
    evidence: "Identity provider configuration screenshot or access control policy",
  },
  {
    id: "ACC-02",
    domain: "Access Control & Identity",
    question: "Is production environment access granted based on principle of least privilege and Role-Based Access Control (RBAC)?",
    evidence: "Production access policy and quarterly access review logs",
  },
  {
    id: "ACC-03",
    domain: "Access Control & Identity",
    question: "What is your formal timeline for deactivating user access upon employee termination?",
    evidence: "Employee offboarding policy specifying immediate or within-24-hour revocation",
  },
  {
    id: "DAT-01",
    domain: "Data Protection & Encryption",
    question: "Is all customer data encrypted at rest using strong cryptographic algorithms (such as AES-256)?",
    evidence: "Database encryption specification or cloud infrastructure configuration",
  },
  {
    id: "DAT-02",
    domain: "Data Protection & Encryption",
    question: "Is all customer data in transit protected using TLS 1.2 or higher across public networks?",
    evidence: "SSL Labs report or web server cipher suite configuration",
  },
  {
    id: "DAT-03",
    domain: "Data Protection & Encryption",
    question: "How do you enforce logical data segregation between different customer organizations?",
    evidence: "Multi-tenant architecture documentation and database isolation design",
  },
  {
    id: "OPS-01",
    domain: "Vulnerability Management",
    question: "Do you conduct automated vulnerability scanning of container images and source code dependencies?",
    evidence: "CI/CD scanning pipeline documentation and vulnerability management policy",
  },
  {
    id: "OPS-02",
    domain: "Vulnerability Management",
    question: "What are your defined service level agreements (SLAs) for remediating critical software vulnerabilities?",
    evidence: "Patch management policy detailing 14-day critical patch requirements",
  },
  {
    id: "INC-01",
    domain: "Incident Response",
    question: "Do you maintain a documented Incident Response Plan that is tested through annual tabletop exercises?",
    evidence: "Incident Response Plan overview and date of most recent test",
  },
  {
    id: "INC-02",
    domain: "Incident Response",
    question: "What is your contractual commitment for notifying customers in the event of a confirmed security incident?",
    evidence: "Customer Data Processing Addendum (DPA) specifying 24 to 72 hour notification",
  },
  {
    id: "BCP-01",
    domain: "Business Continuity & Disaster Recovery",
    question: "Do you maintain automated backups of critical databases, and have you verified restoration in the past year?",
    evidence: "Backup policy and annual backup restoration verification test log",
  },
  {
    id: "SUB-01",
    domain: "Third-Party Risk Management",
    question: "Do you maintain a public or available list of third-party sub-processors who handle customer data?",
    evidence: "Sub-processor list or Trust Center URL",
  },
];

export default function VendorQuestionnaireGuidePage() {
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
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Vendor Security Questionnaire Guide</span>
          </nav>

          {/* Article Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Checklists & Templates
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                8 min read
              </span>
              <span>Updated October 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              The Complete Guide to Vendor Security Questionnaires: Checklist & 30-Question Template
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Every B2B SaaS company selling to enterprise accounts encounters the vendor security review. Here is the operational framework, control domains, and essential checklist questions needed to pass vendor evaluations without stalling revenue.
            </p>
          </header>

          {/* Quotable GEO Definition Block */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              Definition: Vendor Security Questionnaire
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed">
              A <strong>vendor security questionnaire</strong> (also called a vendor risk assessment or third-party risk review) is a structured evaluation sent by enterprise procurement and IT security departments to prospective software vendors. Its purpose is to verify that the supplier maintains adequate data encryption, access controls, regulatory compliance, and incident response procedures before integrating with corporate systems.
            </p>
          </section>

          {/* Body Section 1: The 6 Core Domains */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              The 6 Critical Control Domains Enterprise Evaluators Check
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              While questionnaire formats range from lightweight 20-question spreadsheets to 800-question SIG Full documents, roughly 90 percent of all inquiries cluster around six core technical disciplines:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-lg border border-[#E7E5DE]">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#28664A]" />
                  1. Information Security Governance
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Evaluates executive oversight, annual security training, and third-party certifications including SOC 2 Type II, ISO 27001, or FedRAMP.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E7E5DE]">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#28664A]" />
                  2. Access Control and Authentication
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Mandatory Multi-Factor Authentication (MFA), Single Sign-On (SSO), role-based permissions, and offboarding revocation procedures.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E7E5DE]">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#28664A]" />
                  3. Data Protection and Encryption
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Cryptographic standards for data at rest (AES-256) and in transit (TLS 1.3), database multi-tenancy, and data retention schedules.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E7E5DE]">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#28664A]" />
                  4. Vulnerability Management
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Annual third-party penetration testing, static application security testing (SAST), and formal patching turnaround SLAs.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E7E5DE]">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#28664A]" />
                  5. Incident Response and Continuity
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Documented incident response workflows, tabletop drill frequency, breach notification windows, and disaster recovery testing.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E7E5DE]">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" />
                  6. Sub-processor Risk Management
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Oversight of downstream vendors (such as AWS, OpenAI, or Datadog) that process or store confidential customer records.
                </p>
              </div>
            </div>
          </section>

          {/* Body Section 2: Core 15 Questions Table */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3">
              Essential Assessment Questions & Evidence Matrix
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              Below are the standard questions most frequently scrutinized by enterprise security analysts. For every question, you must pair the response with verified evidence documentation.
            </p>

            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3 px-3.5 font-mono font-semibold w-20">ID</th>
                    <th className="py-3 px-3.5 font-semibold w-40">Domain</th>
                    <th className="py-3 px-3.5 font-semibold">Assessment Question</th>
                    <th className="py-3 px-3.5 font-semibold w-52">Required Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  {CORE_QUESTIONS.map((q) => (
                    <tr key={q.id} className="hover:bg-[#FAF9F6]/50">
                      <td className="py-2.5 px-3.5 font-mono text-[#074E34] font-medium">{q.id}</td>
                      <td className="py-2.5 px-3.5 text-[#566155]">{q.domain}</td>
                      <td className="py-2.5 px-3.5 font-medium">{q.question}</td>
                      <td className="py-2.5 px-3.5 text-[#566155] italic">{q.evidence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Body Section 3: Vendor Tiering Rubric */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              How Enterprise Buyers Tier Vendors
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              Enterprise procurement teams do not evaluate every supplier equally. They classify vendors into risk tiers based on access scope:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-lg border border-[#E7E5DE] bg-white">
                <span className="font-mono text-xs font-semibold uppercase px-2 py-0.5 rounded bg-[#FBEAE8] text-[#C53929]">
                  Tier 1: High Risk (Mission Critical / PII Access)
                </span>
                <p className="text-xs text-[#566155] mt-2 leading-relaxed">
                  Software that integrates with corporate identity providers, processes financial information, or stores sensitive personal data. Expect a 150+ question audit, mandatory SOC 2 Type II review, and legal review of sub-processors.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-[#E7E5DE] bg-white">
                <span className="font-mono text-xs font-semibold uppercase px-2 py-0.5 rounded bg-[#FEF3D6] text-[#8F6B00]">
                  Tier 2: Moderate Risk (Internal Business Data)
                </span>
                <p className="text-xs text-[#566155] mt-2 leading-relaxed">
                  Collaboration tools, analytics platforms, or project management software with non-critical access. Usually assessed through a 30-to-50 question SIG Lite checklist.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-[#E7E5DE] bg-white">
                <span className="font-mono text-xs font-semibold uppercase px-2 py-0.5 rounded bg-[#EBF3EF] text-[#074E34]">
                  Tier 3: Low Risk (No Data Access)
                </span>
                <p className="text-xs text-[#566155] mt-2 leading-relaxed">
                  Standalone utility software or localized documentation tools with no connectivity to company networks. Often approved via standard terms and a basic certificate verification.
                </p>
              </div>
            </div>
          </section>

          {/* Body Section 4: Response Strategy */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              How to Complete Questionnaires in Minutes (Without Hallucinations)
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              The traditional approach of assigning engineers to search old shared folders creates deal fatigue and dangerous inaccuracies. Modern B2B SaaS teams streamline vendor reviews by adopting three foundational principles:
            </p>
            <ol className="list-decimal list-inside text-sm text-[#566155] space-y-3 mb-6">
              <li>
                <strong className="text-[#1A1C19]">Centralize Evidence Upfront:</strong> Keep current copies of your SOC 2 audit, pentest executive letter, and policies indexed in one searchable repository.
              </li>
              <li>
                <strong className="text-[#1A1C19]">Enforce 100% Grounded Source Citations:</strong> Never allow an AI tool to write answers without referencing an exact document paragraph and page number. If an answer cannot be proven by your evidence, it must be flagged for human clarification.
              </li>
              <li>
                <strong className="text-[#1A1C19]">Preserve Complex Spreadsheet Formats:</strong> Enterprise procurement teams evaluate custom multi-tab Excel files. Overwriting formulas, macros, or dropdown validation values often triggers immediate rejection.
              </li>
            </ol>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="Vendor Questionnaire Guide"
            badge="Free 24-Hour Evaluation"
            heading="Automate Your Next Security Questionnaire"
            description="Upload your customer questionnaire and your security documentation. Security Review Ready will draft complete, source-cited responses in under 24 hours at zero cost."
            buttonText="Run My Questionnaire Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}

