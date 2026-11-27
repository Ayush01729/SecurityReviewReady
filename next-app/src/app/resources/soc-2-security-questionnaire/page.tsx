import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  FileText,
  FileCheck2,
  Cpu,
  HelpCircle,
  BookOpen,
  AlertTriangle,
  Layers,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SOC 2 Security Questionnaire: Complete Guide [2026]",
  description:
    "Complete guide to answering a SOC 2 security questionnaire and SOC 2 vendor assessment. Maps all 5 Trust Services Criteria, includes 10 audit-ready sample answers, Type I vs Type II impact, and AI automation.",
  keywords: [
    "SOC 2 security questionnaire",
    "SOC 2 vendor assessment",
    "SOC 2 compliance questionnaire",
    "SOC 2 Trust Services Criteria",
    "SOC 2 Type II questionnaire",
  ],
  alternates: {
    canonical: "/resources/soc-2-security-questionnaire",
  },
  openGraph: {
    title:
      "SOC 2 Security Questionnaire: What Buyers Ask and How to Automate Responses (2026)",
    description:
      "Everything B2B SaaS teams need to pass a SOC 2 vendor assessment: Trust Services Criteria mapping, 10 sample answers with audit citations, Type I vs Type II guidance, and grounded AI automation.",
    url: "https://securityreviewready.com/resources/soc-2-security-questionnaire",
    siteName: "Security Review Ready",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://securityreviewready.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resources",
      item: "https://securityreviewready.com/resources",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SOC 2 Security Questionnaire",
      item: "https://securityreviewready.com/resources/soc-2-security-questionnaire",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline:
    "SOC 2 Security Questionnaire: What Buyers Ask and How to Automate Responses",
  description:
    "Comprehensive guide to completing a SOC 2 security questionnaire and SOC 2 vendor assessment using Trust Services Criteria mappings, audit report evidence, and grounded AI automation.",
  author: {
    "@type": "Person",
    name: "Security Review Ready Team",
    url: "https://securityreviewready.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Security Review Ready",
    url: "https://securityreviewready.com",
    logo: {
      "@type": "ImageObject",
      url: "https://securityreviewready.com/icon.svg",
    },
  },
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
  mainEntityOfPage:
    "https://securityreviewready.com/resources/soc-2-security-questionnaire",
};

const FAQS = [
  {
    q: "Why do buyers still send a SOC 2 security questionnaire if we already have a SOC 2 Type II report?",
    a: "A SOC 2 Type II report only covers the specific Trust Services Criteria and system boundaries your auditors tested during a past window. Enterprise buyers still send a SOC 2 compliance questionnaire to verify controls outside your audit scope (such as Privacy or Processing Integrity), confirm subservice carve-outs, check current-state gaps since the audit end date, and lock in contractual commitments like breach notification SLAs or AI data-training restrictions.",
  },
  {
    q: "What is the difference between a SOC 2 compliance questionnaire and a SOC 2 audit report?",
    a: "A SOC 2 audit report is an independent attestation issued by a licensed CPA firm evaluating your controls against the AICPA Trust Services Criteria. A SOC 2 security questionnaire (or SOC 2 vendor assessment) is a buyer-issued spreadsheet, document, or portal form asking structured questions aligned to those criteria so procurement and risk teams can score your security posture consistently alongside non-SOC 2 vendors.",
  },
  {
    q: "Can we pass a SOC 2 vendor assessment with only a SOC 2 Type I report?",
    a: "Yes, many mid-market and enterprise buyers accept a SOC 2 Type I report for initial onboarding or pilot deployments, provided you transparently state your Type II observation window end date and supply supplemental evidence such as penetration test summaries, architecture diagrams, and live policy excerpts. Highly regulated financial or healthcare buyers may include a contract rider requiring Type II delivery within 6 to 12 months.",
  },
  {
    q: "How can we automate SOC 2 security questionnaire responses without risking hallucinations?",
    a: "Dedicated questionnaire automation engines index your SOC 2 audit report (including Section III system descriptions and Section IV control test results), security policies, and DPAs into a grounded retrieval library. Each questionnaire row is mapped strictly to verified paragraphs with page numbers and TSC control IDs, while out-of-scope questions are flagged for human review instead of fabricated.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const TSC_MAPPING_ROWS = [
  {
    criterion: "Security (Common Criteria)",
    codes: "CC1.1 – CC9.2",
    requirement: "Mandatory in all SOC 2 audits",
    questions:
      "MFA enforcement, RBAC and quarterly access reviews, encryption at rest/in transit, vulnerability scanning, penetration testing, incident response SLAs, CI/CD change control, and vendor risk assessments.",
    evidence:
      "Section IV Common Criteria tests (CC6 logical access, CC7 system operations, CC8 change management, CC9 vendor risk).",
  },
  {
    criterion: "Availability",
    codes: "A1.1 – A1.3",
    requirement: "Optional (system uptime & recovery)",
    questions:
      "Published uptime SLAs, multi-AZ redundancy, automated database backup frequency, RTO/RPO targets, and annual disaster recovery failover test results.",
    evidence:
      "Section III capacity/backup architecture plus Section IV A1.2 environmental safeguards and A1.3 recovery testing.",
  },
  {
    criterion: "Processing Integrity",
    codes: "PI1.1 – PI1.5",
    requirement: "Optional (accuracy & completeness)",
    questions:
      "Input schema validation, automated reconciliation checks, idempotent job retries, audit logging of data transformations, and error-handling escalation.",
    evidence:
      "Section IV PI1.2–PI1.4 validation, completeness, and output verification tests (or SDLC/QA policy if not audited).",
  },
  {
    criterion: "Confidentiality",
    codes: "C1.1 – C1.2",
    requirement: "Optional (sensitive data lifecycle)",
    questions:
      "Data classification tiers, tenant isolation architecture, KMS key management, retention schedules, and cryptographic erasure upon contract termination.",
    evidence:
      "Section IV C1.1 identification/protection and C1.2 secure disposal tests, backed by Data Classification & Retention Policies.",
  },
  {
    criterion: "Privacy",
    codes: "P1.1 – P8.1",
    requirement: "Optional (PII & data subject rights)",
    questions:
      "Privacy notice transparency, GDPR/CCPA data subject access and deletion workflows, consent tracking, subprocessor disclosures, and AI/LLM training opt-out.",
    evidence:
      "Section IV P1–P8 controls if in scope; otherwise your signed DPA, Privacy Policy, and subprocessor register.",
  },
];

const SAMPLE_SOC2_QA = [
  {
    tsc: "CC6.1 / CC6.2",
    domain: "Identity & Access Control",
    question:
      "Do you enforce Multi-Factor Authentication (MFA) and least-privilege role-based access across production systems?",
    answer:
      "Yes. Phishing-resistant MFA (SAML SSO + FIDO2/TOTP) is mandatory for all workforce identities accessing our identity provider, cloud console, source repositories, and production infrastructure. Access is provisioned via role-based access control (RBAC) with manager approval, reviewed quarterly, and automatically revoked within 4 hours of termination. Documented in Access Control Policy Section 2.3 and audited with zero exceptions under SOC 2 Type II CC6.1 and CC6.2.",
  },
  {
    tsc: "CC6.6 / CC6.7",
    domain: "Encryption & Key Management",
    question:
      "How is customer data encrypted at rest and in transit, and how are cryptographic keys managed?",
    answer:
      "All customer data at rest in databases, object storage, and snapshots is encrypted using AES-256 via cloud KMS with automated annual key rotation and strict IAM key-usage policies. Data in transit across public networks and internal service meshes is encrypted using TLS 1.3 (TLS 1.2 minimum with strong AEAD cipher suites). Verified in SOC 2 Type II Section III System Description and Section IV CC6.6/CC6.7.",
  },
  {
    tsc: "CC7.1 / CC7.2",
    domain: "Vulnerability & Pen Testing",
    question:
      "How frequently do you run vulnerability scans and third-party penetration tests, and what are your remediation SLAs?",
    answer:
      "Automated SAST, SCA, and container image scanning run on every pull request in CI/CD, complemented by continuous cloud posture and weekly host vulnerability scans. A CREST-accredited third party conducts an annual application and network penetration test. Critical vulnerabilities are remediated within 7 days and High findings within 30 days. Audited under SOC 2 CC7.1 and CC7.2; executive pen test attestation letter is available under NDA.",
  },
  {
    tsc: "CC7.3 / CC7.4",
    domain: "Incident Response & SLA",
    question:
      "Do you maintain a tested Incident Response Plan, and within what timeframe do you notify customers of a security breach?",
    answer:
      "Yes. Our Incident Response Plan defines severity tiers, containment runbooks, forensic evidence preservation, and root-cause post-mortems, and is tested annually via executive and engineering tabletop exercises. Per our Data Processing Addendum and SOC 2 CC7.4 controls, affected customers are notified without undue delay and no later than 48 hours after confirming a breach involving customer data.",
  },
  {
    tsc: "CC8.1",
    domain: "Change Management",
    question:
      "Are production code and infrastructure changes peer-reviewed and separated from development environments?",
    answer:
      "Yes. Production, staging, and development environments run in logically isolated cloud accounts. All application and Infrastructure-as-Code changes require version control in Git, automated CI test suites, and mandatory peer review by an engineer other than the author before deployment. Direct SSH or manual console edits to production resources are restricted and logged. Tested under SOC 2 CC8.1.",
  },
  {
    tsc: "CC9.2",
    domain: "Vendor & Subprocessor Risk",
    question:
      "How do you evaluate third-party subprocessors that store or process customer data?",
    answer:
      "Before onboarding any critical vendor or subprocessor, Security completes a formal vendor risk assessment reviewing current SOC 2 Type II or ISO 27001 reports, data residency, encryption standards, and DPA commitments. Critical vendors are re-evaluated annually under SOC 2 CC9.2, and customers receive 30 days' advance notice via our subprocessor registry prior to adding new data subprocessors.",
  },
  {
    tsc: "A1.2 / A1.3",
    domain: "Backup & Disaster Recovery",
    question:
      "What are your backup frequency, Recovery Time Objective (RTO), Recovery Point Objective (RPO), and DR test cadence?",
    answer:
      "Primary production databases run continuous point-in-time recovery (PITR) with automated encrypted daily snapshots replicated across multiple availability zones and an alternate region. Our documented targets are an RTO of 4 hours and an RPO of 1 hour. Automated backup restoration drills are executed quarterly and full disaster recovery failover tests are conducted annually, audited under SOC 2 A1.2 and A1.3.",
  },
  {
    tsc: "C1.1 / C1.2",
    domain: "Confidentiality & Data Disposal",
    question:
      "How is tenant data logically segregated, and how is customer data purged after contract termination?",
    answer:
      "All multi-tenant database queries enforce strict tenant-identifier scoping at the application and row-level policy layers, validated in automated integration tests. Upon written customer request or within 30 days of contract expiration, production tenant records are logically deleted and backups age out on an immutable 30-day cycle via cryptographic erasure. Governed by Data Retention Policy Section 4 and SOC 2 C1.1/C1.2.",
  },
  {
    tsc: "PI1.1 / PI1.4",
    domain: "Processing Integrity",
    question:
      "What controls ensure customer data is processed completely, accurately, and without unauthorized alteration?",
    answer:
      "Incoming API payloads undergo strict schema and boundary validation before persistence, while asynchronous pipelines use idempotency keys, transactional outbox guarantees, and dead-letter queues with automated alerting. Daily reconciliation checks verify record completeness across ingestion and reporting stages. Supported by SDLC quality gates and, where applicable, SOC 2 Processing Integrity criteria PI1.1–PI1.4.",
  },
  {
    tsc: "P3.1 / P4.1",
    domain: "Privacy & AI Governance",
    question:
      "Do you support GDPR/CCPA data subject rights, and is customer data ever used to train public AI or LLM models?",
    answer:
      "We honor verified GDPR and CCPA access, correction, export, and deletion requests within statutory 30-day windows via documented privacy workflows and our signed DPA. Customer data is never used to train foundation or third-party AI models; any LLM API subprocessors operate under zero-data-retention enterprise agreements as disclosed in our subprocessor directory and Privacy Policy.",
  },
];

const RELATED_GUIDES = [
  {
    href: "/resources/ddq-automation",
    label: "DDQ Automation Guide",
    desc: "Automate enterprise and investor due diligence questionnaires with verified citations.",
  },
  {
    href: "/resources/security-questionnaire-automation",
    label: "Security Questionnaire Automation",
    desc: "Cut spreadsheet response time by 90% while preserving native Excel formulas.",
  },
  {
    href: "/resources/security-questionnaire-examples",
    label: "50 Security Questionnaire Examples",
    desc: "Real vendor questions, auditor intent, and copy-ready answer templates.",
  },
  {
    href: "/resources/vendor-security-questionnaire-guide",
    label: "Vendor Security Questionnaire Guide",
    desc: "Buyer scoring rubrics, 30-question checklists, and 7 procurement red flags.",
  },
  {
    href: "/compare/vanta-questionnaire-alternative",
    label: "Vanta Questionnaire Alternative",
    desc: "How dedicated citation engines compare to bundled GRC questionnaire add-ons.",
  },
];

export default function Soc2SecurityQuestionnairePage() {
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
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]"
          >
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/resources"
              className="hover:text-[#1A1C19] transition-colors"
            >
              Resources
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">
              SOC 2 Security Questionnaire
            </span>
          </nav>

          {/* Article Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                SOC 2 &amp; Vendor Risk
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                14 min read
              </span>
              <span>Published November 27, 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              SOC 2 Security Questionnaire: What Buyers Ask and How to Automate
              Responses
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Passing your SOC 2 audit does not stop enterprise buyers from
              sending a <strong className="text-[#1A1C19]">SOC 2 security questionnaire</strong>.
              Here is how every{" "}
              <strong className="text-[#1A1C19]">SOC 2 vendor assessment</strong>{" "}
              maps to the AICPA Trust Services Criteria, how to cite Sections
              I–IV of your report, 10 audit-ready sample answers, and how to
              automate responses without hallucinations.
            </p>
          </header>

          {/* Section 1: TL;DR Box */}
          <section className="bg-[#F0F7F4] p-6 sm:p-7 rounded-xl border border-[#C2DDD0] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              TL;DR — SOC 2 Compliance Questionnaires at a Glance
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed mb-3">
              A <strong>SOC 2 security questionnaire</strong> (also called a{" "}
              <strong>SOC 2 compliance questionnaire</strong>) evaluates a
              software vendor&apos;s security controls against the five AICPA Trust
              Services Criteria: <strong>Security</strong> (mandatory CC1–CC9),{" "}
              <strong>Availability</strong>, <strong>Processing Integrity</strong>,{" "}
              <strong>Confidentiality</strong>, and <strong>Privacy</strong>.
            </p>
            <ul className="text-xs sm:text-sm text-[#566155] space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1A1C19]">Why reports aren&apos;t enough:</strong>{" "}
                  Buyers still send questionnaires to check out-of-scope
                  criteria, subservice carve-outs, and breach notification SLAs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1A1C19]">Audit-grounded answers:</strong>{" "}
                  Strong responses cite specific SOC 2 control IDs (e.g.,{" "}
                  <code>CC6.1</code>, <code>CC7.2</code>, <code>A1.3</code>),
                  page numbers, and supplemental policies for scope gaps.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1A1C19]">Automation speed:</strong>{" "}
                  Grounded AI tools ingest your SOC 2 PDF and policies to draft
                  fully cited spreadsheet answers in minutes instead of 15–30
                  engineering hours.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 2: What is a SOC 2 Security Questionnaire? */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              What is a SOC 2 Security Questionnaire?
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-4">
              A <strong className="text-[#1A1C19]">SOC 2 security questionnaire</strong>{" "}
              is a structured vendor risk assessment aligned to the American
              Institute of Certified Public Accountants (AICPA) Trust Services
              Criteria. Enterprise procurement, legal, and InfoSec teams use it
              during a <strong className="text-[#1A1C19]">SOC 2 vendor assessment</strong>{" "}
              to inspect how a SaaS provider protects customer data across
              identity, infrastructure, engineering change control, and vendor
              operations.
            </p>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-4">
              Many founders assume handing over a signed SOC 2 Type II PDF under
              NDA ends the review. In practice, buyers still send a custom{" "}
              <strong className="text-[#1A1C19]">SOC 2 compliance questionnaire</strong>{" "}
              for four concrete reasons:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-white p-5 rounded-xl border border-[#E7E5DE] shadow-sm">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#28664A]" />
                  1. Narrow Audit Scope
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Most SaaS SOC 2 audits test only the mandatory Security
                  criterion (and sometimes Availability). Buyers still ask about
                  Confidentiality, Processing Integrity, and Privacy controls.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E7E5DE] shadow-sm">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#28664A]" />
                  2. Contractual Commitments
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  A SOC 2 report verifies internal controls existed in the past;
                  a questionnaire locks down specific SLAs—such as a 48-hour
                  breach notice or zero AI training on customer prompts.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E7E5DE] shadow-sm">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#28664A]" />
                  3. Subservice Carve-Outs &amp; CUECs
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Auditors typically carve out cloud hosts (AWS, GCP, Azure) and
                  list Complementary User Entity Controls (CUECs). Buyers ask
                  how shared responsibility works in practice.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E7E5DE] shadow-sm">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#28664A]" />
                  4. Standardized Vendor Scoring
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Procurement teams feed uniform spreadsheet columns into risk
                  scoring rubrics—similar to{" "}
                  <Link
                    href="/resources/caiq-v4-guide"
                    className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
                  >
                    CSA CAIQ v4
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/resources/sig-vs-sig-lite"
                    className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
                  >
                    SIG and SIG Lite
                  </Link>{" "}
                  assessments—rather than reading 90-page narrative reports.
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
              Want to see how buyer risk teams score completed assessments? Read
              our{" "}
              <Link
                href="/resources/vendor-security-questionnaire-guide"
                className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
              >
                Vendor Security Questionnaire Guide
              </Link>{" "}
              for scoring rubrics and procurement red flags.
            </p>
          </section>

          {/* Section 3: SOC 2 Trust Service Criteria Mapped to Common Questions */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              SOC 2 Trust Service Criteria Mapped to Common Questions
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Every <strong className="text-[#1A1C19]">SOC 2 vendor assessment</strong>{" "}
              maps back to the five AICPA Trust Services Criteria (TSC). Only{" "}
              <strong className="text-[#1A1C19]">Security</strong> (Common
              Criteria CC1 through CC9) is required in every SOC 2 examination;
              the remaining four criteria are optional based on your product and
              customer commitments:
            </p>

            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3 px-3.5 font-semibold w-44">
                      Trust Services Criterion
                    </th>
                    <th className="py-3 px-3.5 font-semibold w-32">
                      Scope Status
                    </th>
                    <th className="py-3 px-3.5 font-semibold">
                      Common Questionnaire Questions Asked by Buyers
                    </th>
                    <th className="py-3 px-3.5 font-semibold w-52">
                      Where Evidence Lives
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  {TSC_MAPPING_ROWS.map((row) => (
                    <tr key={row.criterion}>
                      <td className="py-3 px-3.5 align-top">
                        <strong className="text-[#074E34] block">
                          {row.criterion}
                        </strong>
                        <span className="font-mono text-[11px] text-[#566155]">
                          {row.codes}
                        </span>
                      </td>
                      <td className="py-3 px-3.5 align-top text-[#566155]">
                        {row.requirement}
                      </td>
                      <td className="py-3 px-3.5 align-top text-[#1A1C19] leading-relaxed">
                        {row.questions}
                      </td>
                      <td className="py-3 px-3.5 align-top text-[#566155] leading-relaxed">
                        {row.evidence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E7E5DE] text-xs text-[#566155] leading-relaxed">
              <strong className="text-[#1A1C19] block mb-1.5">
                Quick Reference: Inside the 9 Common Criteria (CC1–CC9)
              </strong>
              <p>
                Within the mandatory Security criterion, roughly 80% of buyer
                SOC 2 questionnaire rows concentrate on four operational series:{" "}
                <span className="font-mono text-[#074E34]">CC6</span> (Logical
                &amp; Physical Access, Encryption),{" "}
                <span className="font-mono text-[#074E34]">CC7</span> (System
                Monitoring, Vulnerability Management, Incident Response),{" "}
                <span className="font-mono text-[#074E34]">CC8</span> (Change
                Management), and{" "}
                <span className="font-mono text-[#074E34]">CC9</span> (Risk
                Mitigation &amp; Vendor Management).{" "}
                <span className="font-mono text-[#074E34]">CC1–CC5</span> cover
                governance, communication, risk assessments, and monitoring
                activities.
              </p>
            </div>
          </section>

          {/* Section 4: How to Answer SOC 2 Questionnaires Using Your Audit Report */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              How to Answer SOC 2 Questionnaires Using Your Audit Report
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Instead of writing ad-hoc answers from memory, treat your SOC 2
              report&apos;s four standardized AICPA sections as a structured citation
              index. Follow this four-step workflow to build audit-proof answers
              for any <strong className="text-[#1A1C19]">SOC 2 compliance questionnaire</strong>:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title:
                    "Confirm Opinion, Audit Period, and Carve-Outs (Section I & II)",
                  desc: "Check the Independent Service Auditor's Report (Section I) and Management's Assertion (Section II) for the exact audit window, whether the opinion is unqualified, and which subservice providers (e.g., AWS, Google Cloud, Auth0) are excluded under the carve-out method. If the audit window ended more than 90 days ago, pair your questionnaire with a signed SOC 2 bridge letter.",
                },
                {
                  step: "2",
                  title:
                    "Pull Architecture, Data Flows & CUECs (Section III)",
                  desc: "Section III (Description of the System) contains pre-approved, auditor-vetted prose on cloud regions, network segmentation, data encryption paths, backup schedules, and Complementary User Entity Controls (CUECs). Reuse this exact language for architectural questions instead of improvising wording that contradicts your report.",
                },
                {
                  step: "3",
                  title:
                    "Cite Control IDs, Tests, and Exceptions (Section IV)",
                  desc: "Map each questionnaire row to its corresponding Section IV test table—citing the exact TSC ID (e.g., CC6.1, CC7.2), control activity, and test outcome. Never hide a noted test exception; state the exception plainly alongside management's remediation steps and verification date.",
                },
                {
                  step: "4",
                  title:
                    "Close Out-of-Scope Questions with Supplemental Evidence",
                  desc: "If your SOC 2 scope excludes Privacy, Processing Integrity, or specific details like CVSS patch SLAs and AI model opt-outs, bridge the gap by citing your Information Security Policy, annual penetration test executive summary, signed DPA, and BC/DR drill logs.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-[#EBF3EF] flex items-center justify-center shrink-0 font-mono text-sm font-semibold text-[#074E34]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[#1A1C19] text-sm sm:text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
              Handling broader enterprise or investor evaluations alongside SOC 2?
              See our guide to{" "}
              <Link
                href="/resources/ddq-automation"
                className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
              >
                DDQ Automation
              </Link>{" "}
              for due diligence workflows beyond standard IT security reviews.
            </p>
          </section>

          {/* Section 5: 10 Common SOC 2 Questionnaire Questions with Sample Answers */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              10 Common SOC 2 Questionnaire Questions with Sample Answers
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Enterprise buyers reject bare &ldquo;Yes&rdquo; answers. Each
              response should affirm the control, summarize how it operates, and
              cite the exact Trust Services Criterion and supporting policy. Use
              these 10 templates across your next{" "}
              <strong className="text-[#1A1C19]">SOC 2 vendor assessment</strong>{" "}
              (and explore 50 more cross-framework responses in our{" "}
              <Link
                href="/resources/security-questionnaire-examples"
                className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
              >
                Security Questionnaire Examples
              </Link>{" "}
              library):
            </p>

            <div className="space-y-4">
              {SAMPLE_SOC2_QA.map((item, idx) => (
                <div
                  key={item.tsc}
                  className="bg-white p-5 rounded-xl border border-[#E7E5DE] shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#EBF3EF] text-[#074E34]">
                      {idx + 1}. {item.tsc}
                    </span>
                    <span className="font-mono text-[11px] text-[#566155]">
                      {item.domain}
                    </span>
                  </div>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#1A1C19] mb-3">
                    {item.question}
                  </h3>
                  <div className="p-3.5 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] text-xs text-[#1A1C19] leading-relaxed">
                    <strong className="text-[#074E34] block mb-1 uppercase tracking-wider font-mono text-[10px]">
                      Audit-Ready Sample Answer:
                    </strong>
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Automating SOC 2 Questionnaire Responses with AI */}
          <section className="bg-[#EBF3EF]/50 rounded-xl border border-[#C2DDD0] p-6 sm:p-8 mb-12 space-y-5">
            <h2 className="font-sans text-2xl font-semibold text-[#074E34] flex items-center gap-2">
              <Cpu className="w-6 h-6 text-[#28664A]" />
              Automating SOC 2 Questionnaire Responses with AI
            </h2>
            <p className="text-sm sm:text-base text-[#1A1C19] leading-relaxed">
              Manually Ctrl+F-ing through a 90-page SOC 2 Type II PDF and
              dozens of policies takes 15 to 30 engineering hours per
              questionnaire. Yet pasting a buyer spreadsheet into generic
              ChatGPT creates serious legal liability: ungrounded LLMs routinely
              invent certifications, claim controls outside your SOC 2 scope,
              and strip complex Excel formulas.
            </p>
            <p className="text-sm text-[#566155] leading-relaxed">
              A grounded{" "}
              <Link
                href="/resources/security-questionnaire-automation"
                className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
              >
                security questionnaire automation
              </Link>{" "}
              pipeline eliminates guesswork by anchoring every generated answer
              to your actual audit evidence:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-1">
              <div className="p-4 bg-white rounded-lg border border-[#C2DDD0]">
                <strong className="text-[#074E34] block mb-1">
                  1. Ingest Audit Evidence
                </strong>
                <span className="text-[#566155] leading-relaxed">
                  Index your SOC 2 Type II report (Sections I–IV), InfoSec
                  policies, penetration test executive summary, and DPA into an
                  isolated evidence vault.
                </span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-[#C2DDD0]">
                <strong className="text-[#074E34] block mb-1">
                  2. Deterministic TSC Mapping
                </strong>
                <span className="text-[#566155] leading-relaxed">
                  Each question is matched to exact Trust Services Criteria IDs,
                  page numbers, and verbatim paragraphs—while true scope gaps are
                  explicitly flagged instead of hallucinated.
                </span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-[#C2DDD0]">
                <strong className="text-[#074E34] block mb-1">
                  3. Review &amp; Native Export
                </strong>
                <span className="text-[#566155] leading-relaxed">
                  Your security lead verifies each citation in minutes and
                  exports directly back to the buyer&apos;s Excel workbook or portal
                  with formulas and dropdowns intact.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#566155] leading-relaxed pt-1">
              Even if your SOC 2 compliance program runs on Vanta or Drata,
              teams handling complex multi-tab spreadsheets often pair their
              audit report with a dedicated{" "}
              <Link
                href="/compare/vanta-questionnaire-alternative"
                className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
              >
                Vanta questionnaire alternative
              </Link>{" "}
              to preserve workbook formulas and attach exact page-level citations.
            </p>
          </section>

          {/* Section 7: SOC 2 Type I vs Type II: Impact on Questionnaire Responses */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              SOC 2 Type I vs Type II: Impact on Questionnaire Responses
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Whether you hold a SOC 2 Type I or Type II report fundamentally
              changes how you phrase answers on a{" "}
              <strong className="text-[#1A1C19]">SOC 2 security questionnaire</strong>{" "}
              and how enterprise buyers evaluate residual risk:
            </p>

            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3 px-3.5 font-semibold w-40">
                      Dimension
                    </th>
                    <th className="py-3 px-3.5 font-semibold">
                      SOC 2 Type I
                    </th>
                    <th className="py-3 px-3.5 font-semibold text-[#074E34]">
                      SOC 2 Type II
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  <tr>
                    <td className="py-3 px-3.5 font-medium">What It Attests</td>
                    <td className="py-3 px-3.5 text-[#566155]">
                      Control <strong>design suitability</strong> at a single
                      point-in-time date.
                    </td>
                    <td className="py-3 px-3.5 font-semibold text-[#074E34]">
                      Design suitability plus <strong>operating effectiveness</strong>{" "}
                      over a 3–12 month window.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3.5 font-medium">
                      Auditor Evidence Testing
                    </td>
                    <td className="py-3 px-3.5 text-[#566155]">
                      Inquiry, walkthroughs, and point-in-time configuration
                      inspection.
                    </td>
                    <td className="py-3 px-3.5 text-[#1A1C19]">
                      Statistical sampling of logs, PR approvals, access
                      reviews, and incident tickets across months.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3.5 font-medium">
                      Enterprise Procurement Reception
                    </td>
                    <td className="py-3 px-3.5 text-[#566155]">
                      Often accepted for pilots or mid-market deals with a
                      contractual milestone to deliver Type II within 6–12
                      months.
                    </td>
                    <td className="py-3 px-3.5 text-[#1A1C19]">
                      Gold standard for Fortune 500, fintech, and healthcare
                      reviews; accelerates security sign-off.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3.5 font-medium">
                      How to Phrase Questionnaire Answers
                    </td>
                    <td className="py-3 px-3.5 text-[#566155]">
                      State Type I attestation date explicitly, link to active
                      Type II observation period end date, and attach live
                      operational proof (e.g., pen test summary).
                    </td>
                    <td className="py-3 px-3.5 text-[#1A1C19]">
                      Cite the Type II audit period, exact TSC control IDs,
                      zero-exception results, and attach a bridge letter if the
                      period ended &gt;90 days ago.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E7E5DE] flex items-start gap-3">
              <FileCheck2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                <strong className="text-[#1A1C19] block mb-1">
                  Never misrepresent Type I as Type II on a vendor assessment
                </strong>
                Procurement analysts check Section I of your attached report on
                day one. If you currently hold a Type I report or are inside your
                3–6 month Type II observation window, state:{" "}
                <em>
                  &ldquo;SOC 2 Type I completed on [Date] with zero exceptions;
                  SOC 2 Type II observation window runs through [Date] with
                  final report expected [Month].&rdquo;
                </em>{" "}
                Transparent timelines build immediate auditor trust.
              </div>
            </div>
          </section>

          {/* Section 8: FAQs */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 text-sm">
              {FAQS.map((item, idx) => (
                <div
                  key={item.q}
                  className={
                    idx < FAQS.length - 1
                      ? "border-b border-[#E7E5DE]/60 pb-5"
                      : ""
                  }
                >
                  <h3 className="font-semibold text-[#1A1C19] mb-2">
                    {item.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9: Related Guides */}
          <section className="mb-12">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-4">
              Related Security Questionnaire Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RELATED_GUIDES.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="flex items-start gap-3 p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group"
                >
                  <BookOpen className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1A1C19] group-hover:text-[#074E34] transition-colors flex items-center justify-between gap-2">
                      <span>{guide.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#28664A] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </p>
                    <p className="text-xs text-[#566155] mt-1 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 10: Inline CTA */}
          <InlineCta
            source="SOC 2 Security Questionnaire Guide"
            badge="Free SOC 2 Questionnaire Run"
            heading="Turn Your SOC 2 Report Into Verified Questionnaire Answers"
            description="Upload your SOC 2 Type I or Type II report alongside your buyer's Excel or Word questionnaire. Security Review Ready maps every question to exact TSC controls and page citations in under 24 hours."
            buttonText="Auto-Fill My Questionnaire Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
