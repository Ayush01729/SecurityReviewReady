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
  Lock,
  Key,
  Server,
  AlertTriangle,
  RotateCcw,
  Users,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "15 IT Security Questionnaire Examples & Verified Answers | Security Review Ready",
  description:
    "Explore 15 real-world IT security questionnaire examples across encryption, access control, penetration testing, and disaster recovery with audit-proof answers.",
  alternates: {
    canonical: "/resources/security-questionnaire-examples",
  },
  openGraph: {
    title: "15 IT Security Questionnaire Examples & Verified Answers (2026 Guide)",
    description:
      "A practical guide to the 15 most common vendor security questionnaire questions, explaining auditor intent, evidence requirements, and verified answer templates.",
    url: "https://securityreviewready.com/resources/security-questionnaire-examples",
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
      "name": "Resources & Guides",
      "item": "https://securityreviewready.com/resources",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Security Questionnaire Examples",
      "item": "https://securityreviewready.com/resources/security-questionnaire-examples",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "15 IT Security Questionnaire Examples and How Enterprise Teams Answer Them",
  "description":
    "Real-world examples of enterprise vendor security questionnaire questions, dissecting auditor intent, evidence requirements, and verified answer wording.",
  "author": {
    "@type": "Organization",
    "name": "Security Review Ready",
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
  "datePublished": "2026-10-31",
  "dateModified": "2026-10-31",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What questions are asked on an IT security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise IT security questionnaires focus on six core domains: identity and access control (MFA, bastion hosts), data encryption (AES-256 at rest, TLS 1.3 in transit), vulnerability management (annual penetration testing), incident response (breach notification SLAs), business continuity (backup restoration, RTO/RPO), and third-party vendor risk.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best way to answer vendor security questionnaire questions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Provide direct, factual answers without promotional marketing jargon. Always pair affirmative claims with specific evidence references, such as your SOC 2 Type II control number, ISO 27001 policy clause, or public trust center URL.",
      },
    },
    {
      "@type": "Question",
      "name": "How should a company answer if they do not support a requested control?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer transparently with 'No' or 'Compensating Control.' Explain your alternative risk mitigation strategy honestly. Attempting to disguise an unsupported control with vague marketing text creates contractual breach risk during formal customer audits.",
      },
    },
  ],
};

const EXAMPLES = [
  {
    num: "01",
    domain: "Access Control & Identity",
    question: "Is multi-factor authentication (MFA) mandatory for all employee access to production infrastructure and administrative portals?",
    intent: "The auditor wants to verify that stolen credentials alone cannot lead to an unauthorized breach of production databases.",
    evidence: "SOC 2 Type II Control CC6.1 (Logical Access Controls) or Corporate Password & Authentication Policy.",
    answer: "Yes. Multi-factor authentication (MFA) is strictly enforced for all employees across all administrative environments, cloud consoles (AWS/GCP), and corporate identity providers (Okta/Google Workspace) using hardware-backed FIDO2/WebAuthn keys or TOTP authenticators. SMS-based verification is explicitly prohibited for production access.",
  },
  {
    num: "02",
    domain: "Access Control & Identity",
    question: "What is your defined timeframe for revoking access when an employee or contractor is terminated?",
    intent: "Evaluates whether orphaned accounts remain active after employee departures, which represents a common attack vector.",
    evidence: "SOC 2 Control CC6.2 (User Access Modification & Revocation) and HR Offboarding SLA Policy.",
    answer: "Access to all corporate systems, code repositories, and production environments is automatically revoked within 24 hours of formal notification from Human Resources. Immediate revocation (within 1 hour) is executed for involuntary departures via automated SCIM identity deprovisioning.",
  },
  {
    num: "03",
    domain: "Access Control & Identity",
    question: "Do software engineers have direct, permanent access to live production databases containing customer data?",
    intent: "Checks adherence to the Principle of Least Privilege and separation of environments.",
    evidence: "Access Control Policy Section 3.4 (Production Bastion & Ephemeral Privileges).",
    answer: "No. Engineers do not maintain standing or permanent access to live production databases. Temporary administrative access requires an approved ticket, enforces dual-authorization approval, and generates an ephemeral, audit-logged session that expires automatically after 4 to 8 hours.",
  },
  {
    num: "04",
    domain: "Cryptography & Data Protection",
    question: "Is customer data encrypted at rest, and what cryptographic cipher is utilized?",
    intent: "Ensures that physical theft of hard drives or underlying storage media cannot expose raw customer records.",
    evidence: "SOC 2 Control CC6.6 (Data Encryption Controls) or AWS KMS Encryption Configuration Report.",
    answer: "Yes. All customer data at rest (including relational databases, cache instances, object storage, and disk volumes) is encrypted using industry-standard AES-256 encryption managed via cloud Key Management Services (AWS KMS / Google Cloud KMS).",
  },
  {
    num: "05",
    domain: "Cryptography & Data Protection",
    question: "How are cryptographic keys managed, and how often are master encryption keys rotated?",
    intent: "Verifies that keys are not hardcoded or static, minimizing the impact of potential key compromise.",
    evidence: "Information Security Policy Section 4.2 (Cryptographic Key Management Lifecycle).",
    answer: "Encryption keys are generated and protected within FIPS 140-2 Level 3 compliant Hardware Security Modules (HSMs). Master customer encryption keys are configured for automated annual rotation. Access to key management operations requires multi-party authorization.",
  },
  {
    num: "06",
    domain: "Cryptography & Data Protection",
    question: "What protocols are enforced for encrypting customer data in transit across public networks?",
    intent: "Confirms that data traversing external networks is protected against man-in-the-middle (MITM) interception.",
    evidence: "Infrastructure SSL/TLS Configuration Report and External Ingress Policy.",
    answer: "All external communications and API endpoints enforce TLS 1.3 (with fallback to TLS 1.2 minimum) utilizing strong modern cipher suites. Insecure legacy protocols (TLS 1.0, TLS 1.1, SSLv3) and unencrypted HTTP connections are rejected with mandatory HTTPS redirection.",
  },
  {
    num: "07",
    domain: "Vulnerability Management",
    question: "How frequently do you perform third-party penetration testing, and can you share an executive summary of the most recent assessment?",
    intent: "Verifies that independent, external security researchers routinely test your application for OWASP Top 10 vulnerabilities.",
    evidence: "Latest Annual Third-Party Penetration Test Executive Summary and Remediation Letter.",
    answer: "We perform full-scope grey-box penetration tests at least annually with an accredited independent cybersecurity assessment firm (such as Bishop Fox, Cobalt, or NCC Group). Our latest assessment was completed within the past 12 months, and the formal executive summary letter is available under mutual NDA.",
  },
  {
    num: "08",
    domain: "Vulnerability Management",
    question: "What are your contractual Service Level Agreements (SLAs) for remediating critical and high-severity vulnerabilities?",
    intent: "Evaluates how quickly your engineering team deploys patches when zero-day or high-risk CVEs are discovered.",
    evidence: "Vulnerability Management & Patching Policy Section 5.1.",
    answer: "Remediation SLAs are enforced by severity based on CVSS scoring: Critical vulnerabilities (CVSS 9.0 to 10.0) are resolved within 48 to 72 hours; High-severity vulnerabilities (CVSS 7.0 to 8.9) within 14 days; Medium vulnerabilities within 30 days. Continuous automated container and dependency scanning is embedded into our CI/CD deployment pipeline.",
  },
  {
    num: "09",
    domain: "Incident Response",
    question: "What is your defined protocol and timeline for notifying customers in the event of a confirmed security breach involving customer data?",
    intent: "Ensures the vendor's escalation timeline aligns with the buyer's legal obligations under GDPR, CCPA, and HIPAA.",
    evidence: "Customer Data Processing Addendum (DPA) and Incident Response Plan Section 6.",
    answer: "In the event of a confirmed security incident impacting customer confidential data, we contractually commit to notifying affected customers in writing without undue delay and no later than 48 hours following confirmation, providing an initial impact assessment and technical point of contact.",
  },
  {
    num: "10",
    domain: "Incident Response",
    question: "Do you maintain a documented Incident Response Plan that is tested through annual tabletop exercises?",
    intent: "Confirms that incident response is an active operational practice rather than a neglected shelf document.",
    evidence: "SOC 2 CC7.3 / CC7.4 (Incident Identification & Resolution) and Tabletop Exercise Completion Record.",
    answer: "Yes. We maintain a documented Incident Response Plan that defines severity tiers, internal escalation paths, forensic capture protocols, and executive notification workflows. The plan is tested through formal simulation tabletop exercises at least once every 12 months with cross-functional leadership.",
  },
  {
    num: "11",
    domain: "Business Continuity & Disaster Recovery",
    question: "What are your contractual Recovery Time Objective (RTO) and Recovery Point Objective (RPO) targets?",
    intent: "Determines how much downtime and data loss the buyer could experience in the event of a catastrophic hosting failure.",
    evidence: "Business Continuity & Disaster Recovery (BC/DR) Plan Section 2.1.",
    answer: "Our disaster recovery architecture is engineered for an RTO (Recovery Time Objective) of under 4 hours and an RPO (Recovery Point Objective) of under 1 hour for critical customer databases, supported by automated real-time replication across multi-region cloud availability zones.",
  },
  {
    num: "12",
    domain: "Business Continuity & Disaster Recovery",
    question: "Are automated database backups tested for successful restoration, and how often is this verified?",
    intent: "Verifies that backups are not merely generated, but actually functional and recoverable in a disaster.",
    evidence: "SOC 2 Control CC9.1 (Data Backup and Recovery Verification Logs).",
    answer: "Yes. Critical production databases are snapshotted continuously with automated daily point-in-time backups stored in immutable multi-region object storage. Backup restoration testing is executed and verified in an isolated staging environment at least quarterly to validate data integrity.",
  },
  {
    num: "13",
    domain: "Third-Party & Subprocessor Risk",
    question: "Do you maintain an updated inventory of third-party subprocessors who process or host customer data?",
    intent: "The buyer needs to evaluate fourth-party risk and verify compliance with data privacy regulations.",
    evidence: "Public Trust Center Subprocessor Page or Vendor Risk Management Register.",
    answer: "Yes. We maintain a centralized, publicly accessible subprocessor directory detailing the name, service category, and hosting jurisdiction of each vendor. Customers can subscribe to automated alerts to receive 30 days prior notice of any proposed subprocessor additions.",
  },
  {
    num: "14",
    domain: "Third-Party & Subprocessor Risk",
    question: "How do you evaluate the security posture of third-party vendors and critical software suppliers?",
    intent: "Evaluates whether your company practices due diligence before integrating external APIs or hosting services.",
    evidence: "Third-Party Vendor Risk Assessment Policy Section 3.2.",
    answer: "All prospective vendors that handle customer data undergo mandatory due diligence prior to engagement, including validation of annual SOC 2 Type II or ISO 27001 reports, review of data protection addendums, and periodic reassessment on an annual schedule based on risk tier.",
  },
  {
    num: "15",
    domain: "Employee Security & Training",
    question: "Are background checks conducted on all employees prior to granting access to customer systems?",
    intent: "Assures the buyer that staff with potential access to their data have been screened for criminal or financial risk.",
    evidence: "Human Resources Security Policy and SOC 2 CC1.4 (Background Verification Procedures).",
    answer: "Yes. All full-time employees and contractors undergo third-party criminal and identity background checks prior to their official start date, in accordance with applicable regional and federal employment laws, before any system credentials are provisioned.",
  },
];

export default function SecurityQuestionnaireExamplesPage() {
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
            <span className="text-[#074E34] font-medium">Questionnaire Examples</span>
          </nav>

          {/* Article Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Control Matrix Reference
              </span>
              <span>Updated October 2026</span>
              <span>12 min read</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#1A1C19] leading-tight">
              15 IT Security Questionnaire Examples and How Enterprise Teams Answer Them
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] leading-relaxed">
              A detailed dissection of the 15 most common vendor security questionnaire questions. Learn what enterprise procurement auditors are actually looking for, what evidence satisfies each control, and how to write audit-proof responses.
            </p>
          </header>

          {/* Context Overview */}
          <section className="bg-white p-6 rounded-xl border border-[#E7E5DE] mb-12 shadow-sm">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#28664A]" />
              The 3 Golden Rules for Answering IT Security Questionnaires
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block mb-1">1. Direct Affirmation First</strong>
                <span className="text-[#566155]">
                  Start every response with an unequivocal "Yes," "No," or "Not Applicable" before providing technical detail.
                </span>
              </div>
              <div className="p-3.5 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block mb-1">2. Ground in Specific Proof</strong>
                <span className="text-[#566155]">
                  Pair claims with exact policy names and SOC 2 control numbers (e.g. "per SOC 2 Section CC6.1").
                </span>
              </div>
              <div className="p-3.5 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block mb-1">3. Avoid Marketing Fluff</strong>
                <span className="text-[#566155]">
                  Auditors look for objective architectural facts. Eliminate promotional phrasing like "world-class security."
                </span>
              </div>
            </div>
          </section>

          {/* 15 In-Depth Examples */}
          <section className="space-y-8 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight">
              15 Core IT Security Questionnaire Inquiries Deconstructed
            </h2>

            {EXAMPLES.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-7 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-[#074E34] px-2 py-0.5 rounded bg-[#EBF3EF] border border-[#C2DDD0]">
                    Item {item.num}
                  </span>
                  <span className="font-mono text-xs text-[#696B66] uppercase tracking-wider">
                    {item.domain}
                  </span>
                </div>

                <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4">
                  &ldquo;{item.question}&rdquo;
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                    <strong className="text-[#1A1C19] block mb-0.5">What the Auditor is Evaluating:</strong>
                    <span className="text-[#566155]">{item.intent}</span>
                  </div>

                  <div className="p-3 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                    <strong className="text-[#1A1C19] block mb-0.5">Required Evidence Document:</strong>
                    <span className="text-[#074E34] font-mono text-xs">{item.evidence}</span>
                  </div>

                  <div className="p-4 rounded-lg bg-[#EBF3EF]/40 border border-[#C2DDD0]">
                    <strong className="text-[#074E34] block mb-1 font-mono text-xs uppercase tracking-wider">
                      Audit-Proof Recommended Response:
                    </strong>
                    <p className="text-xs sm:text-sm text-[#1A1C19] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Section: How to Answer Unsupported Controls */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm space-y-4">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19]">
              How to Handle Questions Where You Do Not Meet the Control
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed">
              Every growing SaaS business encounters enterprise questions requiring controls they have not yet implemented (such as dedicated private tenancy or customer-managed encryption keys). Attempting to disguise gaps with vague wording is the fastest way to fail procurement reviews.
            </p>
            <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] text-xs sm:text-sm space-y-2 text-[#566155]">
              <strong className="text-[#1A1C19] block">The Recommended Framework:</strong>
              <div>1. <strong>Acknowledge directly:</strong> State "No" or "Alternative Mitigating Control."</div>
              <div>2. <strong>Explain compensating architecture:</strong> Outline how your current controls achieve the underlying security objective.</div>
              <div>3. <strong>State roadmap transparency:</strong> If the capability is scheduled for delivery, state the target release quarter without overcommitting.</div>
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
                  How can we automate answering these 15 questions across multiple buyers?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Security Review Ready indexes your SOC 2 reports, policies, and architecture documentation once. When incoming assessments arrive, our engine maps questions to your verified evidence and populates answers with paragraph citations automatically.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  Do buyers accept standard CAIQ or SIG spreadsheets instead of custom questionnaires?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Many mid-market buyers will accept a pre-completed CSA CAIQ v4 or SIG Lite workbook. However, large enterprise risk teams frequently mandate their own proprietary questionnaires to satisfy internal board and insurance governance.
                </p>
              </div>
            </div>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="Security Questionnaire Examples Guide"
            badge="Automate Your Review"
            heading="Tired of Answering These Questions from Scratch?"
            description="Send us your pending customer security assessment and your policy documentation. We will complete it with 100% verified source citations in under 24 hours at zero cost."
            buttonText="Run My Questionnaire Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}

