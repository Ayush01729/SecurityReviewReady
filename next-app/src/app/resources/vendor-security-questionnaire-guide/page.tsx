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
  XCircle,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Vendor Security Questionnaire: 30 Questions with Answers + Template (2026 Guide) | Security Review Ready",
  description:
    "Complete vendor security questionnaire guide with 30 real questions, audit-proof answers, and evidence requirements. Covers buyer-side evaluation, vendor tiering, and scoring rubrics.",
  alternates: {
    canonical: "/resources/vendor-security-questionnaire-guide",
  },
  openGraph: {
    title:
      "Vendor Security Questionnaire: 30 Questions with Answers + Template (2026 Guide)",
    description:
      "Complete vendor security questionnaire guide with 30 real questions, audit-proof answers, and evidence requirements. Covers buyer-side evaluation, vendor tiering, and scoring rubrics.",
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
  "headline":
    "Vendor Security Questionnaire: 30 Questions with Answers + Template (2026 Guide)",
  "description":
    "Complete vendor security questionnaire guide with 30 real questions, audit-proof answers, evidence requirements, buyer-side evaluation methodology, vendor tiering, and scoring rubrics.",
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
  "dateModified": "2026-11-08T08:00:00+00:00",
  "mainEntityOfPage":
    "https://securityreviewready.com/resources/vendor-security-questionnaire-guide",
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
    {
      "@type": "Question",
      "name": "What happens if a vendor refuses to complete our security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treat refusal as an automatic Tier 1 risk flag. Request at minimum a current SOC 2 Type II report and a completed NDA before proceeding. If the vendor cannot supply either, escalate to your CISO for a risk acceptance decision before allowing any data access.",
      },
    },
    {
      "@type": "Question",
      "name": "How often should we re-assess existing vendors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tier 1 vendors should be re-assessed annually. Tier 2 vendors every 18 months. Any vendor that undergoes a significant architecture change, acquisition, or data breach gets re-assessed immediately regardless of tier.",
      },
    },
  ],
};

const CORE_QUESTIONS = [
  {
    id: "GOV-01",
    domain: "Information Security Governance",
    question:
      "Do you maintain a formally documented and executive-approved Information Security Policy?",
    evidence: "Information Security Policy PDF, dated within the last 12 months",
    answer:
      "Yes. Our Information Security Policy is reviewed and re-approved by our CISO and CEO annually. The current version is dated March 2026 and is available under NDA on request. See: IS-Policy-v4.2.pdf.",
  },
  {
    id: "GOV-02",
    domain: "Information Security Governance",
    question:
      "Do you hold an active SOC 2 Type II, ISO/IEC 27001, or equivalent third-party audit report?",
    evidence:
      "SOC 2 Type II report or ISO 27001 certificate with active validity period",
    answer:
      "Yes. We hold a SOC 2 Type II report covering the period January 1 - December 31, 2025, issued by [Auditor Name]. The report is available under NDA. Our ISO 27001 certificate (certificate #XXXXX) is valid through September 2027.",
  },
  {
    id: "GOV-03",
    domain: "Information Security Governance",
    question:
      "Do you undergo annual independent third-party penetration testing of your web applications?",
    evidence:
      "Executive summary letter of latest penetration test results",
    answer:
      "Yes. We conduct annual penetration testing through [Firm Name], a CREST-accredited assessor. Our most recent engagement concluded February 2026. The executive summary letter is available under NDA; all critical and high findings were remediated within 14 days.",
  },
  {
    id: "ACC-01",
    domain: "Access Control & Identity",
    question:
      "Is Multi-Factor Authentication (MFA) strictly enforced for all employee and contractor accounts?",
    evidence:
      "Identity provider configuration screenshot or access control policy",
    answer:
      "Yes. MFA is enforced at the identity provider level (Okta) for all accounts including contractors. Phishing-resistant FIDO2/WebAuthn is required for production system access. No MFA bypass exceptions are permitted. See: Okta policy screenshot in Appendix A.",
  },
  {
    id: "ACC-02",
    domain: "Access Control & Identity",
    question:
      "Is production environment access granted based on principle of least privilege and Role-Based Access Control (RBAC)?",
    evidence:
      "Production access policy and quarterly access review logs",
    answer:
      "Yes. Production access uses RBAC with four defined roles. Access is granted by written request and approved by the system owner. We conduct quarterly access reviews; the most recent was completed April 2026 with 12 accounts deprovisioned. See: Access-Review-Q1-2026.pdf.",
  },
  {
    id: "ACC-03",
    domain: "Access Control & Identity",
    question:
      "What is your formal timeline for deactivating user access upon employee termination?",
    evidence:
      "Employee offboarding policy specifying immediate or within-24-hour revocation",
    answer:
      "All SSO sessions and account access are revoked within 2 hours of HR termination confirmation via an automated offboarding workflow in Okta. Physical access badges are deactivated same-day. Our offboarding SLA is documented in HR-OffBoarding-Policy-v3.pdf.",
  },
  {
    id: "DAT-01",
    domain: "Data Protection & Encryption",
    question:
      "Is all customer data encrypted at rest using strong cryptographic algorithms (such as AES-256)?",
    evidence:
      "Database encryption specification or cloud infrastructure configuration",
    answer:
      "Yes. All customer data at rest is encrypted using AES-256-GCM. Encryption keys are managed by AWS KMS with automatic rotation every 365 days. No customer data is written to unencrypted storage. See: Infrastructure Architecture v2.1, Section 4.",
  },
  {
    id: "DAT-02",
    domain: "Data Protection & Encryption",
    question:
      "Is all customer data in transit protected using TLS 1.2 or higher across public networks?",
    evidence:
      "SSL Labs report or web server cipher suite configuration",
    answer:
      "Yes. All endpoints enforce TLS 1.3 as the preferred version; TLS 1.2 is accepted for legacy compatibility. TLS 1.0 and 1.1 are disabled. Our latest SSL Labs scan returned an A+ rating (run May 2026). See: ssllabs-report-2026-05.pdf.",
  },
  {
    id: "DAT-03",
    domain: "Data Protection & Encryption",
    question:
      "How do you enforce logical data segregation between different customer organizations?",
    evidence:
      "Multi-tenant architecture documentation and database isolation design",
    answer:
      "Each tenant's data is stored in a dedicated schema with a tenant_id column enforced at the application ORM layer. Row-level security (RLS) policies in PostgreSQL prevent cross-tenant queries. See: Multi-Tenant Architecture Diagram v1.4, reviewed by external auditor Q4 2025.",
  },
  {
    id: "OPS-01",
    domain: "Vulnerability Management",
    question:
      "Do you conduct automated vulnerability scanning of container images and source code dependencies?",
    evidence:
      "CI/CD scanning pipeline documentation and vulnerability management policy",
    answer:
      "Yes. Every CI/CD pipeline run includes Trivy scans for container image CVEs and Dependabot alerts for dependency vulnerabilities. Builds with critical CVEs (CVSS 9.0+) are blocked from deploying to production. See: CI-Pipeline-Security-Controls.md.",
  },
  {
    id: "OPS-02",
    domain: "Vulnerability Management",
    question:
      "What are your defined service level agreements (SLAs) for remediating critical software vulnerabilities?",
    evidence:
      "Patch management policy detailing 14-day critical patch requirements",
    answer:
      "Critical (CVSS 9.0+): remediated within 7 calendar days. High (CVSS 7.0-8.9): 14 days. Medium: 30 days. Low: 90 days. SLAs are tracked in Jira and reviewed monthly by the security team. See: Patch-Management-Policy-v2.pdf, Section 3.2.",
  },
  {
    id: "INC-01",
    domain: "Incident Response",
    question:
      "Do you maintain a documented Incident Response Plan that is tested through annual tabletop exercises?",
    evidence:
      "Incident Response Plan overview and date of most recent test",
    answer:
      "Yes. Our Incident Response Plan follows NIST SP 800-61r2 guidance. We conduct tabletop exercises twice per year. The most recent exercise (ransomware scenario) was held March 2026 and involved our CISO, engineering leads, and legal counsel.",
  },
  {
    id: "INC-02",
    domain: "Incident Response",
    question:
      "What is your contractual commitment for notifying customers in the event of a confirmed security incident?",
    evidence:
      "Customer Data Processing Addendum (DPA) specifying 24 to 72 hour notification",
    answer:
      "Our DPA commits to notifying affected customers within 48 hours of confirming a data security incident. For incidents affecting more than 500 records, we simultaneously notify the relevant supervisory authority. See: DPA-v5.pdf, Section 8.",
  },
  {
    id: "BCP-01",
    domain: "Business Continuity & Disaster Recovery",
    question:
      "Do you maintain automated backups of critical databases, and have you verified restoration in the past year?",
    evidence:
      "Backup policy and annual backup restoration verification test log",
    answer:
      "Yes. Full database snapshots run nightly to a separate AWS region (cross-region replication). Point-in-time recovery is enabled with a 30-day retention window. We completed a full restoration drill in January 2026, achieving RTO of 4 hours. See: DR-Test-Report-Jan2026.pdf.",
  },
  {
    id: "SUB-01",
    domain: "Third-Party Risk Management",
    question:
      "Do you maintain a public or available list of third-party sub-processors who handle customer data?",
    evidence: "Sub-processor list or Trust Center URL",
    answer:
      "Yes. Our sub-processor list is publicly maintained at [trust.yourcompany.com/subprocessors] and updated within 30 days of any addition or removal. Customers receive 30-day advance email notice of changes per our DPA, Section 11.",
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
                Checklists &amp; Templates
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                14 min read
              </span>
              <span>Updated November 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              Vendor Security Questionnaire: 30 Questions with Answers + Template (2026 Guide)
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Whether you are a vendor completing your hundredth questionnaire or a buyer building a third-party risk program from scratch, this guide covers both sides: the 30 core questions enterprise teams ask, real sample answers with evidence references, buyer scoring rubrics, and the red flags that get vendors rejected on the spot.
            </p>
          </header>

          {/* Quotable GEO Definition Block */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              Definition: Vendor Security Questionnaire
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed">
              A <strong>vendor security questionnaire</strong> (also called a vendor risk assessment or third-party risk review) is a structured evaluation sent by enterprise procurement and IT security departments to prospective software vendors. Its purpose is to verify that the supplier maintains adequate data encryption, access controls, regulatory compliance, and incident response procedures before integrating with corporate systems. Questionnaires range from lightweight 20-question spreadsheets to 800-question{" "}
              <a
                href="https://sharedassessments.org/sig/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                SIG (Standardized Information Gathering)
              </a>{" "}
              documents published by{" "}
              <a
                href="https://sharedassessments.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                Shared Assessments
              </a>
              , the industry body that sets the standard for third-party risk management.
            </p>
          </section>

          {/* Body Section 1: The 6 Core Domains */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              The 6 Critical Control Domains Enterprise Evaluators Check
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              While questionnaire formats vary considerably, roughly 90 percent of all inquiries cluster around six core technical disciplines. Cloud vendors can also self-certify controls through the{" "}
              <a
                href="https://cloudsecurityalliance.org/star"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                CSA STAR Registry
              </a>
              , which many enterprise buyers accept as partial evidence for the domains below.
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

          {/* Body Section 2: Core Questions Table with Sample Answers */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3">
              30 Essential Questions, Required Evidence, and Sample Answers
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              The table below covers the questions most frequently scrutinized by enterprise security analysts. The "Sample Answer" column gives a copy-paste starting point: replace bracketed placeholders with your actual vendor details and document names. Every answer follows the pattern: <em>[Yes/No]. [Specific technical claim]. [Evidence reference].</em>
            </p>

            <div className="overflow-x-auto border border-[#E7E5DE] rounded-xl bg-white shadow-sm mb-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#566155]">
                    <th className="py-3 px-3.5 font-mono font-semibold w-20">ID</th>
                    <th className="py-3 px-3.5 font-semibold w-36">Domain</th>
                    <th className="py-3 px-3.5 font-semibold w-52">Assessment Question</th>
                    <th className="py-3 px-3.5 font-semibold w-44">Required Evidence</th>
                    <th className="py-3 px-3.5 font-semibold">Sample Answer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]/70 text-[#1A1C19]">
                  {CORE_QUESTIONS.map((q) => (
                    <tr key={q.id} className="hover:bg-[#FAF9F6]/50">
                      <td className="py-2.5 px-3.5 font-mono text-[#074E34] font-medium align-top">{q.id}</td>
                      <td className="py-2.5 px-3.5 text-[#566155] align-top">{q.domain}</td>
                      <td className="py-2.5 px-3.5 font-medium align-top">{q.question}</td>
                      <td className="py-2.5 px-3.5 text-[#566155] italic align-top">{q.evidence}</td>
                      <td className="py-2.5 px-3.5 text-[#1A1C19] align-top">{q.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#566155] italic">
              This table covers 15 of the most critical controls. A full 30-question template covering GDPR data transfer, HR security, physical access, and change management is available via the form below.
            </p>
          </section>

          {/* NEW: How Enterprise Buyers Score Your Answers */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              How Enterprise Buyers Score Your Answers
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-5">
              Most enterprise procurement teams do not evaluate questionnaire responses as pass/fail checkboxes. They use a weighted scoring rubric, often adapted from the{" "}
              <a
                href="https://sharedassessments.org/sig/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                Shared Assessments SIG
              </a>{" "}
              or the{" "}
              <a
                href="https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                NIST SP 800-161r1 C-SCRM framework
              </a>
              . Here is how the standard 0-to-2 point scale works in practice:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-lg border border-[#E7E5DE] bg-white flex items-start gap-4">
                <span className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-[#FBEAE8] text-[#C53929] flex items-center justify-center font-mono font-bold text-sm">0</span>
                <div>
                  <p className="font-semibold text-sm text-[#1A1C19] mb-1">"No" with no compensating control documented</p>
                  <p className="text-xs text-[#566155] leading-relaxed">
                    The vendor does not have the control in place and cannot describe any alternative measure. This is a hard failure on critical-weight questions (access control, encryption, breach notification) and typically blocks deal progression until remediated.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-[#E7E5DE] bg-white flex items-start gap-4">
                <span className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-[#FEF3D6] text-[#8F6B00] flex items-center justify-center font-mono font-bold text-sm">1</span>
                <div>
                  <p className="font-semibold text-sm text-[#1A1C19] mb-1">"Partial" - compensating control documented</p>
                  <p className="text-xs text-[#566155] leading-relaxed">
                    The vendor lacks the ideal control but has a documented compensating measure (for example, no MFA enforced at the IdP level, but hardware tokens are issued to all production users). The compensating control must be in writing and verifiable.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-[#E7E5DE] bg-white flex items-start gap-4">
                <span className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-[#EBF3EF] text-[#074E34] flex items-center justify-center font-mono font-bold text-sm">2</span>
                <div>
                  <p className="font-semibold text-sm text-[#1A1C19] mb-1">"Yes" with certified audit evidence</p>
                  <p className="text-xs text-[#566155] leading-relaxed">
                    The control is fully implemented and independently verified - ideally referenced in a current SOC 2 Type II report, ISO 27001 audit finding, or external penetration test letter. This is the only score that reliably advances the review for high-weight controls.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#EBF3EF] border border-[#28664A]/20 rounded-lg p-4">
              <p className="text-sm text-[#1A1C19] leading-relaxed">
                <strong>The 60% threshold:</strong> A total score below 60% of the maximum possible points typically blocks deal progression for Tier 1 vendor reviews. For a 30-question questionnaire where all questions carry equal weight, that means earning at least 36 out of 60 points. Any individual zero on an access control, encryption, or breach notification question can override the aggregate score and trigger a hold.
              </p>
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

          {/* NEW: Red Flags Section */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-[#C53929]" />
              Common Red Flags That Cause Immediate Vendor Rejection
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              Experienced security reviewers have pattern-matched on the responses that consistently correlate with weak security programs. Any of the following typically triggers an escalation or an outright rejection:
            </p>

            <div className="space-y-5">
              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FBEAE8] text-[#C53929] flex items-center justify-center text-xs font-bold shrink-0">1</span>
                  Claiming SOC 2 compliance without producing the actual audit report
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Saying "we are SOC 2 compliant" is not the same as holding a current SOC 2 Type II report. SOC 2 is not a certification - it is an auditor's opinion letter. If a vendor cannot supply the actual report (even a redacted executive summary) under NDA, treat the claim as unverified. Enterprise buyers will.
                </p>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FBEAE8] text-[#C53929] flex items-center justify-center text-xs font-bold shrink-0">2</span>
                  Vague answers like "We follow industry best practices" with no evidence
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  "Best practices" is not a control. Security reviewers are trained to flag any answer that describes intent or culture rather than a specific, verifiable implementation. If you cannot name the specific standard you follow (NIST 800-53, CIS Controls v8, ISO 27002), the control is considered unverified and scores zero.
                </p>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FBEAE8] text-[#C53929] flex items-center justify-center text-xs font-bold shrink-0">3</span>
                  Saying encryption is "AES-256" but unable to specify key management
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Encryption without key management is incomplete. Enterprise reviewers always follow up: Where are the keys stored? Who has access? How often are they rotated? If the answer is "we use AES-256" but no one can describe the key management system (AWS KMS, HashiCorp Vault, HSM), the encryption claim is treated as potentially cosmetic.
                </p>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FBEAE8] text-[#C53929] flex items-center justify-center text-xs font-bold shrink-0">4</span>
                  A penetration test conducted more than 24 months ago
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Most enterprise security policies require vendors to have conducted a pentest within the past 12 months. A 24-month-old test report predates an entire year of CVE disclosures and likely covers a different version of your product. Reviewers will note the date immediately, and any critical finding not shown as remediated becomes a material risk item in their TPRM system.
                </p>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FBEAE8] text-[#C53929] flex items-center justify-center text-xs font-bold shrink-0">5</span>
                  Claiming no data is stored when the product clearly requires persistent data
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Security reviewers are technical. If your product offers audit logs, search history, file uploads, or any stateful feature, it stores data - and claiming otherwise is a credibility-ending answer. If you store data transiently (deleted within 24 hours), say that precisely. Ambiguity and demonstrably false claims are treated the same way: as a reason to reject.
                </p>
              </div>
            </div>
          </section>

          {/* NEW: How to Send a Security Questionnaire (Buyer's Guide) */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
              <Send className="w-6 h-6 text-[#28664A]" />
              How to Send a Security Questionnaire to a Vendor (Buyer&apos;s Guide)
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              If you are building or running a third-party risk management (TPRM) program, the following process reflects how mature procurement security teams operate. The{" "}
              <a
                href="https://sharedassessments.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                Shared Assessments program
              </a>{" "}
              publishes the SIG questionnaire and TPRM toolkit used by most Fortune 500 vendor risk programs.
            </p>

            <div className="space-y-6">
              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-3">
                  Step 1: Decide When to Send One
                </h3>
                <p className="text-sm text-[#566155] leading-relaxed">
                  Send a security questionnaire any time a vendor will receive access to personally identifiable information (PII), financial records, authentication credentials, or internal systems - including read-only integrations. Single sign-on (SSO) connections, API integrations that pull customer data, and tools that process employee HR data all qualify. A vendor that only receives aggregated, anonymized telemetry is generally Tier 3 and may require only certificate verification.
                </p>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-3">
                  Step 2: Tier the Vendor Before You Send Anything
                </h3>
                <p className="text-sm text-[#566155] leading-relaxed mb-3">
                  Sending a 150-question SIG Full to a low-risk vendor wastes everyone&apos;s time and creates friction with strategic partners. Use this tiering decision before preparing your questionnaire:
                </p>
                <ul className="space-y-2 text-sm text-[#566155]">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 px-1.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#FBEAE8] text-[#C53929]">Tier 1</span>
                    <span>Full SIG-style review (100-150 questions). Mandatory for vendors with PII, financial data, or privileged system access. Requires SOC 2 Type II or ISO 27001 as evidence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 px-1.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#FEF3D6] text-[#8F6B00]">Tier 2</span>
                    <span>SIG Lite (15-30 questions). Used for internal business tools with limited data access. SOC 2 Type I or most recent pentest summary is acceptable evidence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 px-1.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#EBF3EF] text-[#074E34]">Tier 3</span>
                    <span>Certificate verification only. Confirm the vendor holds a current SOC 2 or ISO 27001 certificate and review their public privacy policy. No custom questionnaire required.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-3">
                  Step 3: Document and Track Responses in Your TPRM System
                </h3>
                <p className="text-sm text-[#566155] leading-relaxed">
                  Collecting questionnaire responses in email threads defeats the purpose of a risk program. Store each vendor&apos;s completed questionnaire, all supporting evidence documents, and your scoring worksheet in a centralized TPRM system (OneTrust, ServiceNow VRM, or even a structured SharePoint library with version control). Record the review date, the reviewer name, the final risk score, and any risk acceptance decisions made by your CISO. Regulators and auditors will request this documentation - keep it accessible for at least three years.
                </p>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-3">
                  Step 4: Schedule Re-assessments Proactively
                </h3>
                <p className="text-sm text-[#566155] leading-relaxed">
                  A vendor that passed review 18 months ago is not necessarily still passing today. Build re-assessment triggers into your TPRM calendar: Tier 1 vendors annually, Tier 2 vendors every 18 months. Additionally, re-assess any vendor immediately if they announce a data breach, complete a merger or acquisition, or make a significant architecture change (such as migrating from on-premise to a cloud provider). Most TPRM platforms support automated renewal reminders; configure them at the time of initial approval.
                </p>
              </div>
            </div>
          </section>

          {/* Body Section 4: Response Strategy (vendor side) */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              How to Complete Questionnaires in Hours, Not Weeks
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              The traditional approach of assigning engineers to search old shared folders creates deal fatigue and dangerous inaccuracies. Modern B2B SaaS teams streamline vendor reviews by adopting three foundational principles:
            </p>
            <ol className="list-decimal list-inside text-sm text-[#566155] space-y-3 mb-6">
              <li>
                <strong className="text-[#1A1C19]">Centralize Evidence Upfront:</strong> Keep current copies of your SOC 2 audit, pentest executive letter, and policies indexed in one searchable repository. Every answer in a questionnaire should trace to a named document, section, and page number.
              </li>
              <li>
                <strong className="text-[#1A1C19]">Enforce 100% Grounded Source Citations:</strong> Never allow an AI tool to write answers without referencing an exact document paragraph and page number. If an answer cannot be proven by your evidence, it must be flagged for human clarification - not filled in with a plausible-sounding claim.
              </li>
              <li>
                <strong className="text-[#1A1C19]">Preserve Complex Spreadsheet Formats:</strong> Enterprise procurement teams evaluate custom multi-tab Excel files. Overwriting formulas, macros, or dropdown validation values often triggers immediate rejection - or at minimum, forces a re-submission that adds weeks to the timeline.
              </li>
            </ol>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2">
                  What is a vendor security questionnaire?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  A vendor security questionnaire is a formal assessment sent by enterprise procurement and information security teams to prospective software suppliers. It evaluates how the vendor protects confidential customer data, governs internal access, maintains compliance certifications, and responds to cybersecurity incidents.
                </p>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2">
                  How long does it typically take to complete a vendor security questionnaire?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  For manual processes, teams typically spend between 20 and 45 engineering or compliance hours over a period of 2 to 3 weeks. Modern AI-assisted automation with citation grounding reduces turnaround time to under 24 hours.
                </p>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2">
                  Can a SOC 2 Type II report replace a security questionnaire?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  While a SOC 2 Type II report answers roughly 70 percent of standard controls, enterprise buyers frequently require custom questionnaires to address company-specific architecture, data retention, and sub-processor policies. The{" "}
                  <a
                    href="https://cloudsecurityalliance.org/star"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
                  >
                    CSA CAIQ (Consensus Assessment Initiative Questionnaire)
                  </a>
                  {" "}is a structured alternative that maps directly to the CSA Cloud Controls Matrix and is accepted by many buyers in lieu of a custom questionnaire for cloud-native vendors.
                </p>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2">
                  What happens if a vendor refuses to complete our security questionnaire?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Treat refusal as an automatic Tier 1 risk flag. Request at minimum a current SOC 2 Type II report and a completed NDA before proceeding. If the vendor cannot supply either, escalate to your CISO for a risk acceptance decision before allowing any data access. Refusal to engage with a security questionnaire is itself a signal about the vendor&apos;s security culture and transparency.
                </p>
              </div>

              <div className="bg-white border border-[#E7E5DE] rounded-lg p-5">
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2">
                  How often should we re-assess existing vendors?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Tier 1 vendors should be re-assessed annually. Tier 2 vendors every 18 months. Any vendor that undergoes a significant architecture change, acquisition, or data breach gets re-assessed immediately regardless of tier. Build re-assessment due dates into your TPRM system at the time of initial approval so they do not get missed during busy periods.
                </p>
              </div>
            </div>
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
