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
  Cpu,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "What is CAIQ v4? Automated CAIQ & Questionnaire Automation Guide (2026)",
  description:
    "Complete guide to CSA CAIQ v4 and automated CAIQ completion: 261 CCM 4.0 controls, real sample answers, difference from v3, and how to automate responses with verified citations.",
  alternates: {
    canonical: "/resources/caiq-v4-guide",
  },
  openGraph: {
    title: "What is CAIQ v4? Automated CAIQ & Cloud Security Alliance Guide (2026)",
    description:
      "A complete guide for B2B SaaS companies responding to CSA CAIQ v4 assessments. Includes sample CAIQ answers, CCM 4.0 domain breakdowns, and automated evidence mapping.",
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
  "headline": "What is CAIQ v4? Automated CAIQ & Cloud Security Alliance Questionnaire Guide (2026)",
  "description":
    "Technical analysis of Cloud Security Alliance Consensus Assessments Initiative Questionnaire v4, CCM 4.0 controls, sample answers, and automated CAIQ response pipelines.",
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
  "dateModified": "2026-11-08T12:00:00+00:00",
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
      "name": "Can CAIQ v4 questionnaire responses be automated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Automated CAIQ solutions ingest your SOC 2 Type II report, ISO 27001 policies, and cloud architectural specs. AI semantic matching maps each of the 261 CAIQ v4 controls to verified paragraphs in your documentation, completing the full workbook in minutes while preserving workbook formulas and formatting.",
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
        "text": "Submitting a completed CAIQ questionnaire is the primary requirement for achieving CSA STAR Level 1 (Self-Assessment) status, demonstrating transparent compliance to prospective cloud buyers on the public CSA registry.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does it take to fill out a CAIQ v4 spreadsheet manually vs automated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manually answering all 261 questions with evidence references typically takes a security engineer between 20 and 40 hours across multiple days. Using an automated CAIQ engine like Security Review Ready reduces manual effort by 90%, delivering fully cited answers ready for review in under 24 hours.",
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

const SAMPLE_CAIQ_ANSWERS = [
  {
    domain: "IAM-01",
    question: "Are policies and procedures established and maintained to govern identity and access management?",
    answer: "Yes. Our formal Identity and Access Management (IAM) Policy establishes role-based access control (RBAC), mandatory multi-factor authentication (MFA) via FIDO2/WebAuthn, and quarterly access reviews. Documented in Information Security Policy Section 3.1 and audited under SOC 2 CC6.1.",
  },
  {
    domain: "CEK-01",
    question: "Is sensitive customer data encrypted at rest and in transit using industry-accepted cryptographic algorithms?",
    answer: "Yes. Data at rest is encrypted using AES-256 via AWS KMS with annual key rotation. Data in transit enforces TLS 1.3 (with TLS 1.2 minimum fallback) with modern cipher suites. Audited under SOC 2 CC6.6.",
  },
  {
    domain: "TVM-01",
    question: "Are automated vulnerability scans conducted regularly on all network and application components?",
    answer: "Yes. Automated container vulnerability and dependency scanning runs continuously on every commit in our CI/CD pipeline. External network penetration testing is executed annually by an accredited third-party assessment firm.",
  },
  {
    domain: "SEF-01",
    question: "Do you maintain a documented incident response plan that includes defined customer breach notification timelines?",
    answer: "Yes. We maintain a documented Incident Response Plan tested via annual tabletop simulations. Affected customers are notified in writing within 48 hours of a confirmed breach involving customer confidential data per our Data Processing Addendum (DPA).",
  },
  {
    domain: "BCR-01",
    question: "Are business continuity and disaster recovery plans tested at least annually with documented RTO and RPO targets?",
    answer: "Yes. Our BC/DR architecture targets an RTO of under 4 hours and an RPO of under 1 hour for primary production data stores. Automated database restoration testing is conducted quarterly in an isolated staging environment.",
  },
  {
    domain: "STA-01",
    question: "Do you assess the security risks of third-party vendors and critical subprocessors before sharing customer data?",
    answer: "Yes. All prospective subprocessors undergo mandatory due diligence, including verification of annual SOC 2 Type II or ISO 27001 reports. We maintain a public subprocessor directory and provide 30-day advance notice of any vendor additions.",
  },
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
                11 min read
              </span>
              <span>Updated November 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              What is CAIQ v4? Automated CAIQ & Cloud Security Alliance Guide
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              When enterprise procurement teams ask for your CSA CAIQ, they are evaluating your software against the gold standard in cloud security. Here is what CAIQ v4 contains, how it maps to CCM 4.0, real sample responses, and how automated CAIQ pipelines fill all 261 controls with verified citations.
            </p>
          </header>

          {/* Quotable GEO Definition Block */}
          <section className="bg-white p-6 sm:p-7 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              Definition: CSA CAIQ v4
            </h2>
            <p className="font-sans text-[15px] text-[#1A1C19] leading-relaxed">
              The <strong>Consensus Assessments Initiative Questionnaire v4 (CAIQ v4)</strong> is an industry-standard cloud security assessment created by the{" "}
              <a
                href="https://cloudsecurityalliance.org/research/cloud-controls-matrix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2"
              >
                Cloud Security Alliance (CSA)
              </a>
              . It features 261 objective questions mapped directly to the Cloud Controls Matrix (CCM 4.0), providing enterprise buyers with a standardized evaluation of a software vendor security controls across 17 technical domains.
            </p>
          </section>

          {/* Section 1: Automated CAIQ Overview */}
          <section className="bg-[#EBF3EF]/50 rounded-xl border border-[#C2DDD0] p-6 sm:p-8 mb-12 space-y-4">
            <h2 className="font-sans text-2xl font-semibold text-[#074E34] flex items-center gap-2">
              <Cpu className="w-6 h-6 text-[#28664A]" />
              Automated CAIQ: How CAIQ Questionnaire Automation Works
            </h2>
            <p className="text-sm text-[#1A1C19] leading-relaxed">
              Manually completing all 261 questions in a CSA CAIQ v4 workbook is notoriously tedious. For each control, an auditor expects not just a "Yes" or "No," but specific evidence demonstrating that the control is in place.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
              <div className="p-3.5 bg-white rounded-lg border border-[#C2DDD0]">
                <strong className="text-[#074E34] block mb-1">1. Policy Ingestion</strong>
                <span className="text-[#566155]">
                  SOC 2 reports, ISO manuals, and AWS architecture diagrams are indexed into a semantic knowledge base.
                </span>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-[#C2DDD0]">
                <strong className="text-[#074E34] block mb-1">2. Deterministic Mapping</strong>
                <span className="text-[#566155]">
                  The engine matches each of the 261 CCM 4.0 controls to the exact paragraph proving your compliance.
                </span>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-[#C2DDD0]">
                <strong className="text-[#074E34] block mb-1">3. Native Excel Export</strong>
                <span className="text-[#566155]">
                  Responses are written directly into the official CSA CAIQ spreadsheet, preserving conditional formatting and formulas.
                </span>
              </div>
            </div>
          </section>

          {/* Section 2: CAIQ v3 vs CAIQ v4 */}
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

          {/* Section 3: Sample CAIQ v4 Answers */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Real-World Sample Answers for Core CAIQ v4 Controls
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              Enterprise procurement teams look for affirmative confirmation backed by concrete control references. Here are audit-tested responses for key domains:
            </p>
            <div className="space-y-4">
              {SAMPLE_CAIQ_ANSWERS.map((sample) => (
                <div key={sample.domain} className="bg-white p-5 rounded-xl border border-[#E7E5DE] shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#EBF3EF] text-[#074E34]">
                      {sample.domain}
                    </span>
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19]">{sample.question}</h3>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] text-xs text-[#1A1C19] leading-relaxed">
                    <strong className="text-[#074E34] block mb-0.5 uppercase tracking-wider font-mono text-[10px]">
                      Recommended Answer Template:
                    </strong>
                    {sample.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: The 17 CCM Domains */}
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

          {/* Section 5: Best Practices */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Best Practices for Auto-Filling CAIQ v4 Spreadsheets
            </h2>
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

          {/* Section 6: FAQs */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 text-sm">
              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  What is the Cloud Security Alliance CAIQ v4?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  The Consensus Assessments Initiative Questionnaire v4 (CAIQ v4) is an industry-standard vendor assessment created by the Cloud Security Alliance (CSA). It provides a standardized set of 261 questions mapped directly to the Cloud Controls Matrix (CCM 4.0) to evaluate security posture across cloud service providers and SaaS platforms.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  Can CAIQ v4 questionnaire responses be automated?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Yes. Automated CAIQ solutions ingest your SOC 2 Type II report, ISO 27001 policies, and cloud architectural specs. AI semantic matching maps each of the 261 CAIQ v4 controls to verified paragraphs in your documentation, completing the full workbook in minutes while preserving workbook formulas and formatting.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  How many questions are in CAIQ v4?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  CAIQ v4 contains 261 objective questions spanning 17 architectural domains, representing a significant consolidation and refinement from the 295 controls found in CAIQ v3.1.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  How does CAIQ relate to the CSA STAR Registry?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Submitting a completed CAIQ questionnaire is the primary requirement for achieving CSA STAR Level 1 (Self-Assessment) status, demonstrating transparent compliance to prospective cloud buyers on the public CSA registry.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  How long does it take to fill out a CAIQ v4 spreadsheet manually vs automated?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Manually answering all 261 questions with evidence references typically takes a security engineer between 20 and 40 hours across multiple days. Using an automated CAIQ engine like Security Review Ready reduces manual effort by 90%, delivering fully cited answers ready for review in under 24 hours.
                </p>
              </div>
            </div>
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
