import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  RotateCcw,
  Key,
  AlertTriangle,
  Users,
  BarChart3,
  XCircle,
  HelpCircle,
  BookOpen,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Due Diligence Checklist: 50-Point DDQ Guide [2026]",
  description:
    "50-point due diligence questionnaire checklist across 7 risk domains, complete with required evidence artifacts, a 1-5 DDQ scoring model, and common pitfalls.",
  alternates: {
    canonical: "/resources/due-diligence-questionnaire-checklist",
  },
  openGraph: {
    title: "Due Diligence Checklist: 50-Point DDQ Guide [2026]",
    description:
      "50-point due diligence questionnaire checklist (DDQ checklist) covering Security Controls, Data Privacy, Compliance, Business Continuity, Access Management, Incident Response, and Sub-Processing.",
    url: "https://securityreviewready.com/resources/due-diligence-questionnaire-checklist",
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
      "name": "Due Diligence Questionnaire Checklist",
      "item": "https://securityreviewready.com/resources/due-diligence-questionnaire-checklist",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/resources/due-diligence-questionnaire-checklist#article",
  "headline": "Due Diligence Questionnaire Checklist: 50 Essential Questions for Vendor Assessment",
  "description":
    "A 50-point due diligence questionnaire checklist (DDQ checklist) organized across 7 vendor risk domains, including required evidence artifacts, a 1-5 maturity scoring rubric, and common assessment pitfalls.",
  "datePublished": "2026-11-27T00:00:00Z",
  "dateModified": "2026-11-27T00:00:00Z",
  "author": {
    "@type": "Person",
    "name": "Security Review Ready Team",
    "url": "https://securityreviewready.com",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Security Review Ready",
    "url": "https://securityreviewready.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://securityreviewready.com/icon.svg",
    },
  },
  "mainEntityOfPage":
    "https://securityreviewready.com/resources/due-diligence-questionnaire-checklist",
  "wordCount": 2650,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should be included in a due diligence questionnaire checklist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A comprehensive due diligence questionnaire checklist should evaluate seven core vendor risk domains: Security Controls, Data Privacy, Compliance & Certifications, Business Continuity, Access Management, Incident Response, and Vendor Sub-Processing. Every question should pair a clear control requirement with the specific evidence artifact—such as a SOC 2 Type II report, penetration test summary, or DPA—needed to verify the response.",
      },
    },
    {
      "@type": "Question",
      "name": "How many questions should a vendor DDQ checklist have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most SaaS and mid-market procurement workflows, a focused 50-point DDQ checklist provides sufficient depth to uncover material security and privacy risks without stalling deals for months. High-risk Tier 1 vendors handling regulated financial or healthcare data may warrant expansion to SIG Lite (125 questions) or CSA CAIQ v4 (261 questions), while Tier 3 low-risk tools often only need certificate verification.",
      },
    },
    {
      "@type": "Question",
      "name": "How do you score a due diligence questionnaire objectively?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Score each response on a standardized 1-to-5 maturity scale rather than accepting binary Yes or No answers. Level 1 reflects missing or ad-hoc controls, Level 3 indicates documented and implemented controls, and Level 5 confirms automated, continuously verified enforcement. Combine weighted domain averages with hard pass/fail gates on critical controls like encryption, MFA, and breach notification SLAs.",
      },
    },
    {
      "@type": "Question",
      "name": "How can teams complete or evaluate a 50-point DDQ checklist faster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Software vendors accelerate completion by indexing their SOC 2 Type II report, ISO 27001 certificate, policies, and trust center documentation in a source-grounded DDQ automation platform such as Security Review Ready. Every drafted response cites the exact document, section, and page number for rapid human approval, cutting turnaround from weeks to under 24 hours.",
      },
    },
  ],
};

interface ChecklistItem {
  id: string;
  question: string;
  evidence: string;
}

interface ChecklistDomain {
  slug: string;
  title: string;
  count: number;
  summary: string;
  iconName: "shield" | "lock" | "award" | "continuity" | "access" | "incident" | "subprocessor";
  items: ChecklistItem[];
}

const CHECKLIST_DOMAINS: ChecklistDomain[] = [
  {
    slug: "security-controls",
    title: "Security Controls",
    count: 10,
    summary:
      "Evaluates cryptography, network isolation, vulnerability management, secure software development, and endpoint hardening across production systems.",
    iconName: "shield",
    items: [
      {
        id: "SEC-01",
        question:
          "Is all customer data encrypted at rest using AES-256 or stronger cryptography across databases, object storage, and backups?",
        evidence: "Cloud KMS encryption settings, SOC 2 CC6.6 evidence, or infrastructure architecture spec",
      },
      {
        id: "SEC-02",
        question:
          "Are encryption keys managed via a dedicated Key Management Service (KMS) or HSM with automated rotation at least annually?",
        evidence: "Cryptographic Key Management Policy and KMS key rotation configuration log",
      },
      {
        id: "SEC-03",
        question:
          "Is all customer data in transit encrypted using TLS 1.2 or TLS 1.3 across public endpoints and internal service boundaries?",
        evidence: "Qualys SSL Labs A/A+ scan report or load balancer TLS cipher configuration",
      },
      {
        id: "SEC-04",
        question:
          "Does an accredited independent third party perform full-scope application and infrastructure penetration testing at least annually?",
        evidence: "Penetration test executive summary letter and remediation attestation (dated within 12 months)",
      },
      {
        id: "SEC-05",
        question:
          "Are automated SAST, DAST, container, and dependency vulnerability scans enforced inside CI/CD deployment pipelines?",
        evidence: "Secure SDLC policy and CI/CD pipeline gate rules blocking critical CVEs",
      },
      {
        id: "SEC-06",
        question:
          "What enforceable remediation SLAs govern Critical, High, Medium, and Low vulnerabilities by CVSS score?",
        evidence: "Patch & Vulnerability Management Policy specifying SLAs (e.g., Critical ≤ 7 days, High ≤ 14–30 days)",
      },
      {
        id: "SEC-07",
        question:
          "Are production environments logically isolated from corporate, development, and staging networks via deny-by-default firewall rules?",
        evidence: "VPC/network topology diagram and ingress security group rules",
      },
      {
        id: "SEC-08",
        question:
          "Is live customer production data strictly prohibited from non-production development, QA, or staging databases?",
        evidence: "Environment Segregation Policy and synthetic/anonymized test-data seeding docs",
      },
      {
        id: "SEC-09",
        question:
          "Are security events, authentication logs, and admin actions centrally aggregated into an immutable SIEM retained for at least 12 months?",
        evidence: "Logging & Monitoring Policy, SIEM retention settings, and SOC 2 CC7.2 test results",
      },
      {
        id: "SEC-10",
        question:
          "Are all workforce endpoints and production hosts protected by managed EDR and full-disk encryption?",
        evidence: "MDM and EDR fleet coverage report confirming ≥ 99% managed compliance",
      },
    ],
  },
  {
    slug: "data-privacy",
    title: "Data Privacy",
    count: 8,
    summary:
      "Assesses data classification, contractual privacy commitments, tenant isolation, cross-border transfers, deletion guarantees, and AI model-training boundaries.",
    iconName: "lock",
    items: [
      {
        id: "PRV-01",
        question:
          "Do you maintain a current data inventory and classification framework mapping where customer PII and confidential records reside?",
        evidence: "Data Classification Policy and Record of Processing Activities (RoPA)",
      },
      {
        id: "PRV-02",
        question:
          "Do you execute a standard Data Processing Addendum (DPA) incorporating Standard Contractual Clauses (SCCs) or UK/Swiss addenda?",
        evidence: "Standard DPA template detailing cross-border transfer safeguards",
      },
      {
        id: "PRV-03",
        question:
          "Can you fulfill Data Subject Access Requests (access, rectification, portability, erasure) within statutory GDPR and CCPA deadlines?",
        evidence: "Privacy Operations SOP verifying 30-day GDPR / 45-day CCPA fulfillment workflows",
      },
      {
        id: "PRV-04",
        question:
          "In which geographic jurisdictions is customer data hosted, and can customers enforce regional data residency pinning (e.g., US or EU)?",
        evidence: "Cloud region hosting schedule and contractual data residency terms",
      },
      {
        id: "PRV-05",
        question:
          "How is customer data logically segregated across multi-tenant relational databases, search indexes, caches, and object storage?",
        evidence: "Multi-tenant architecture spec (e.g., PostgreSQL Row-Level Security or per-tenant key scoping)",
      },
      {
        id: "PRV-06",
        question:
          "What is your committed data retention window and cryptographic deletion SLA (including backups) upon contract termination?",
        evidence: "Data Retention & Disposal Policy referencing NIST SP 800-88 within 30–90 days",
      },
      {
        id: "PRV-07",
        question:
          "Do you contractually prohibit using customer data, prompts, or outputs to train public or cross-tenant AI/ML models?",
        evidence: "AI Governance Policy, zero-data-retention API terms, and enterprise DPA exclusions",
      },
      {
        id: "PRV-08",
        question:
          "Are Data Protection Impact Assessments (DPIAs) completed prior to launching features or integrations that process sensitive personal data?",
        evidence: "Privacy by Design review checklist and recent DPIA completion log",
      },
    ],
  },
  {
    slug: "compliance-certifications",
    title: "Compliance & Certifications",
    count: 8,
    summary:
      "Verifies independent third-party audits, governance policies, sector-specific regulatory coverage, employee vetting, and cyber insurance backing.",
    iconName: "award",
    items: [
      {
        id: "CMP-01",
        question:
          "Do you hold a current, unqualified SOC 2 Type II report issued by an independent CPA firm covering Security (and Availability/Confidentiality)?",
        evidence: "Full SOC 2 Type II report (under NDA) plus bridge letter if period ended > 90 days ago",
      },
      {
        id: "CMP-02",
        question:
          "Do you maintain an active ISO/IEC 27001:2022 certification (or ISO 27701) issued by an accredited certification body?",
        evidence: "Valid ISO 27001 certificate confirming scope boundaries and expiration date",
      },
      {
        id: "CMP-03",
        question:
          "Is an executive-approved Information Security Policy suite formally reviewed, updated, and acknowledged by personnel annually?",
        evidence: "InfoSec Policy version control log, CISO/CEO sign-off, and staff attestation records",
      },
      {
        id: "CMP-04",
        question:
          "When handling regulated workloads, do you maintain attested compliance with HIPAA (BAA), PCI-DSS v4.0, or FedRAMP requirements?",
        evidence: "Countersigned BAA template, PCI Attestation of Compliance (AOC), or FedRAMP package",
      },
      {
        id: "CMP-05",
        question:
          "Are pre-employment background checks conducted on all full-time staff and contractors before granting system or customer data access?",
        evidence: "HR Background Screening Policy and onboarding gate audit trail",
      },
      {
        id: "CMP-06",
        question:
          "Do all employees complete security awareness training (plus OWASP secure coding for developers) at hire and annually thereafter?",
        evidence: "Training completion dashboard (≥ 95% completion) and curriculum outline",
      },
      {
        id: "CMP-07",
        question:
          "Does leadership perform an annual formal risk assessment with an actively tracked risk register and remediation deadlines?",
        evidence: "Annual Risk Assessment methodology and redacted risk register summary",
      },
      {
        id: "CMP-08",
        question:
          "Do you carry active Cyber Liability and Tech Errors & Omissions (E&O) insurance policies commensurate with enterprise contract exposure?",
        evidence: "Current Certificate of Insurance (COI) showing coverage limits and policy dates",
      },
    ],
  },
  {
    slug: "business-continuity",
    title: "Business Continuity",
    count: 6,
    summary:
      "Confirms operational resilience, recovery time/point targets, immutable backups, multi-zone redundancy, and tested disaster failover procedures.",
    iconName: "continuity",
    items: [
      {
        id: "BCP-01",
        question:
          "Do you maintain formally documented Business Continuity (BCP) and Disaster Recovery (DRP) plans reviewed at least annually?",
        evidence: "BCP/DRP executive summary, review sign-off date, and crisis team roster",
      },
      {
        id: "BCP-02",
        question:
          "What are your defined Recovery Time Objective (RTO) and Recovery Point Objective (RPO) commitments for production workloads?",
        evidence: "Service Level Agreement or DRP targets (e.g., RTO ≤ 4 hours, RPO ≤ 1 hour)",
      },
      {
        id: "BCP-03",
        question:
          "Are automated backups encrypted, stored across separate regions or availability zones, and protected with immutability locks?",
        evidence: "Backup architecture policy confirming WORM/Object Lock and isolated IAM credentials",
      },
      {
        id: "BCP-04",
        question:
          "How often do you execute full backup restoration tests to verify recovery integrity and measure actual restore speed?",
        evidence: "Quarterly or semi-annual backup restoration test logs with verified timestamps",
      },
      {
        id: "BCP-05",
        question:
          "Is production infrastructure architected across multiple isolated Availability Zones with automated health-check failover?",
        evidence: "Cloud deployment topology confirming multi-AZ database and compute redundancy",
      },
      {
        id: "BCP-06",
        question:
          "Do you conduct annual disaster recovery failover or crisis tabletop exercises and track corrective action items to completion?",
        evidence: "DR after-action report (dated within 12 months) and remediation tracking log",
      },
    ],
  },
  {
    slug: "access-management",
    title: "Access Management",
    count: 6,
    summary:
      "Checks workforce and customer authentication controls, RBAC least privilege, production elevation hygiene, periodic access reviews, and rapid offboarding.",
    iconName: "access",
    items: [
      {
        id: "ACC-01",
        question:
          "Is phishing-resistant Multi-Factor Authentication (FIDO2/WebAuthn or TOTP) enforced for all employee, VPN, and cloud console logins?",
        evidence: "Identity Provider (Okta/Entra ID) MFA policy screenshot blocking SMS for admins",
      },
      {
        id: "ACC-02",
        question:
          "Does the platform support Enterprise SSO (SAML 2.0 / OIDC) and automated user lifecycle provisioning via SCIM without hidden paywalls?",
        evidence: "Product SSO/SCIM integration documentation and enterprise plan specification",
      },
      {
        id: "ACC-03",
        question:
          "Is workforce access to production infrastructure and customer accounts governed by Role-Based Access Control (RBAC) and least privilege?",
        evidence: "Access Control Policy and IAM role permission matrix",
      },
      {
        id: "ACC-04",
        question:
          "Do engineers have standing permanent access to live production databases, or is privileged access granted via just-in-time (JIT) elevation?",
        evidence: "Bastion/PAM workflow logs showing time-bound, dual-approved, recorded JIT sessions",
      },
      {
        id: "ACC-05",
        question:
          "Are user access privileges across production environments, code repositories, and internal SaaS tools formally recertified at least quarterly?",
        evidence: "Latest quarterly User Access Review (UAR) sign-off log and revocation records",
      },
      {
        id: "ACC-06",
        question:
          "What is your enforceable SLA for revoking all corporate, repository, and cloud access when an employee or contractor departs?",
        evidence: "HR Offboarding SOP and automated SCIM deprovisioning timestamps (≤ 1–24 hours)",
      },
    ],
  },
  {
    slug: "incident-response",
    title: "Incident Response",
    count: 6,
    summary:
      "Evaluates breach readiness, contractual notification SLAs, 24/7 detection capabilities, forensic rigor, tabletop testing, and disclosure history.",
    iconName: "incident",
    items: [
      {
        id: "INC-01",
        question:
          "Do you maintain a formal Incident Response Plan (IRP) defining severity tiers, containment runbooks, and executive escalation paths?",
        evidence: "Incident Response Plan table of contents, severity matrix, and RACI chart",
      },
      {
        id: "INC-02",
        question:
          "What is your contractual SLA for notifying affected enterprise customers after confirming a security incident involving customer data?",
        evidence: "DPA or MSA breach notification clause committing to 24–72 hour notice",
      },
      {
        id: "INC-03",
        question:
          "How are production systems monitored 24/7 for anomalous access, credential compromise, or potential data exfiltration?",
        evidence: "SOC/MDR service overview, SIEM alerting rules summary, and on-call rotation schedule",
      },
      {
        id: "INC-04",
        question:
          "Does your IRP mandate forensic evidence preservation (chain of custody, disk/memory capture) and formal root-cause analysis?",
        evidence: "Forensic handling runbook and sanitized Post-Incident Review (PIR) template",
      },
      {
        id: "INC-05",
        question:
          "Do Engineering, Security, Legal, and Leadership run cross-functional incident response tabletop exercises at least once every 12 months?",
        evidence: "Annual IR tabletop exercise summary report and attendance record",
      },
      {
        id: "INC-06",
        question:
          "Have you experienced any confirmed breach impacting customer confidential data in the past 24 months, and what remediation occurred?",
        evidence: "Written security attestation and Corrective & Preventive Action (CAPA) report if applicable",
      },
    ],
  },
  {
    slug: "vendor-sub-processing",
    title: "Vendor Sub-Processing",
    count: 6,
    summary:
      "Inspects fourth-party supply chain risk, subprocessor transparency, advance notice rights, flow-down DPAs, annual vendor re-reviews, and shadow AI controls.",
    iconName: "subprocessor",
    items: [
      {
        id: "SUB-01",
        question:
          "Do you publish a complete, current directory of third-party subprocessors detailing service scope and processing jurisdictions?",
        evidence: "Public Trust Center subprocessor URL or current DPA subprocessor schedule",
      },
      {
        id: "SUB-02",
        question:
          "Do customers receive advance written notice (typically 30 days) and a formal right to object before new subprocessors are added?",
        evidence: "DPA subprocessor notification clause and automated subscription alert page",
      },
      {
        id: "SUB-03",
        question:
          "Must every prospective subprocessor complete a security due diligence review before receiving production or customer data access?",
        evidence: "Third-Party Risk Management (TPRM) Policy and vendor onboarding review checklist",
      },
      {
        id: "SUB-04",
        question:
          "Are all subprocessors contractually bound to data protection and security obligations at least as strict as your commitments to buyers?",
        evidence: "Flow-down DPA requirements and vendor legal review SOP",
      },
      {
        id: "SUB-05",
        question:
          "How often do you reassess Tier 1 subprocessors and verify renewal of their SOC 2 Type II or ISO 27001 certifications?",
        evidence: "Annual vendor reassessment tracker showing audit dates and open findings",
      },
      {
        id: "SUB-06",
        question:
          "What technical and governance controls prevent employees from routing customer data through unapproved AI APIs or shadow SaaS tools?",
        evidence: "Acceptable Use Policy, SSO/CASB app-gating config, and procurement intake workflow",
      },
    ],
  },
];

const MATURITY_LEVELS = [
  {
    score: "1",
    label: "Ad-Hoc / Missing",
    badgeClass: "bg-[#FBEAE8] text-[#C53929]",
    criteria:
      "Control does not exist, response is blank or contradictory, or the vendor cannot describe how customer data is protected.",
    evidenceStrength: "None or verbal assurance only.",
    action: "Automatic Risk Gate Failure. Block onboarding unless compensated or remediated pre-signature.",
  },
  {
    score: "2",
    label: "Informal / Policy Only",
    badgeClass: "bg-[#FEF3D6] text-[#8F6B00]",
    criteria:
      "Control is referenced in a draft policy or roadmap, but execution is manual, inconsistent, or lacks verifiable production scope.",
    evidenceStrength: "Internal draft document or unverified Yes/No checkbox.",
    action: "Conditional Review Only. Require contractual remediation SLA (30–90 days) before Tier 1/2 approval.",
  },
  {
    score: "3",
    label: "Defined & Implemented",
    badgeClass: "bg-[#FAF9F6] text-[#1A1C19] border border-[#E7E5DE]",
    criteria:
      "Control is approved in policy and operating in production, verified through internal screenshots or point-in-time exports.",
    evidenceStrength: "Signed internal policy plus configuration screenshots or sample logs.",
    action: "Acceptable baseline for Tier 2 vendors; pair with compensating controls or annual review for Tier 1.",
  },
  {
    score: "4",
    label: "Measured & Audited",
    badgeClass: "bg-[#EBF3EF] text-[#074E34]",
    criteria:
      "Control operates consistently under defined SLAs and has passed independent third-party testing within the last 12 months.",
    evidenceStrength: "Unqualified SOC 2 Type II, ISO 27001 certificate, or CREST penetration test letter.",
    action: "Approve for Tier 1 enterprise workloads under standard annual reassessment cadence.",
  },
  {
    score: "5",
    label: "Automated & Continuously Verified",
    badgeClass: "bg-[#074E34] text-white",
    criteria:
      "Control is enforced programmatically—such as CI/CD CVE build gates, automated SCIM deprovisioning, or immutable KMS policies—with continuous telemetry.",
    evidenceStrength: "Independent audit report plus automated compliance monitoring logs and live citations.",
    action: "Fast-track approval. Benchmarks best-in-class enterprise readiness.",
  },
];

const COMMON_MISTAKES = [
  {
    num: "1",
    title: "Sending the same DDQ checklist to every vendor regardless of risk tier",
    body: "Issuing a 50-to-200 question assessment to a low-risk utility vendor with zero PII access stalls procurement and exhausts security analysts. Tier vendors upfront (Tier 1 critical data access, Tier 2 internal business tools, Tier 3 no sensitive data) and apply the full 50-point due diligence checklist where data exposure justifies the review.",
  },
  {
    num: "2",
    title: "Accepting bare 'Yes' checkboxes or 'industry best practices' claims without artifacts",
    body: "An unverified 'Yes' on encryption or incident notification has zero audit value. Every affirmative response on a DDQ checklist must cite a concrete artifact—a SOC 2 control reference, policy version and page number, or penetration test letter—otherwise reviewers must score it as Level 1 or Level 2 until proven.",
  },
  {
    num: "3",
    title: "Overlooking audit report expiration dates, scope exclusions, and bridge letters",
    body: "A SOC 2 Type II report that ended 10 months ago or excludes the specific cloud product line you are buying leaves a blind spot. Always verify the exact system boundaries, audit period end date, auditor exceptions, and whether a current bridge letter covers the intervening gap.",
  },
  {
    num: "4",
    title: "Ignoring fourth-party subprocessors and generative AI data-training clauses",
    body: "Modern SaaS products chain multiple cloud infrastructure providers, analytics trackers, and third-party LLM APIs. Failing to inspect the subprocessor schedule and zero-data-retention AI commitments exposes buyer data to downstream leaks outside primary hosting regions.",
  },
  {
    num: "5",
    title: "Managing DDQ evidence in scattered email threads and fragile spreadsheets",
    body: "Copy-pasting answers across old Excel files breaks scoring macros and guarantees contradictory claims across deals. Both buyers and SaaS vendors should centralize source evidence and maintain an auditable citation trail linking every questionnaire cell to its originating policy paragraph.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What should be included in a due diligence questionnaire checklist?",
    a: "A comprehensive due diligence questionnaire checklist should evaluate seven core vendor risk domains: Security Controls, Data Privacy, Compliance & Certifications, Business Continuity, Access Management, Incident Response, and Vendor Sub-Processing. Every question should pair a clear control requirement with the specific evidence artifact—such as a SOC 2 Type II report, penetration test summary, or DPA—needed to verify the response.",
  },
  {
    q: "How many questions should a vendor DDQ checklist have?",
    a: "For most SaaS and mid-market procurement workflows, a focused 50-point DDQ checklist provides sufficient depth to uncover material security and privacy risks without stalling deals for months. High-risk Tier 1 vendors handling regulated financial or healthcare data may warrant expansion to SIG Lite (125 questions) or CSA CAIQ v4 (261 questions), while Tier 3 low-risk tools often only need certificate verification.",
  },
  {
    q: "How do you score a due diligence questionnaire objectively?",
    a: "Score each response on a standardized 1-to-5 maturity scale rather than accepting binary Yes or No answers. Level 1 reflects missing or ad-hoc controls, Level 3 indicates documented and implemented controls, and Level 5 confirms automated, continuously verified enforcement. Combine weighted domain averages with hard pass/fail gates on critical controls like encryption, MFA, and breach notification SLAs.",
  },
  {
    q: "How can teams complete or evaluate a 50-point DDQ checklist faster?",
    a: "Software vendors accelerate completion by indexing their SOC 2 Type II report, ISO 27001 certificate, policies, and trust center documentation in a source-grounded DDQ automation platform such as Security Review Ready. Every drafted response cites the exact document, section, and page number for rapid human approval, cutting turnaround from weeks to under 24 hours.",
  },
];

function DomainIcon({ name }: { name: ChecklistDomain["iconName"] }) {
  switch (name) {
    case "shield":
      return <ShieldCheck className="w-5 h-5 text-[#28664A]" />;
    case "lock":
      return <Lock className="w-5 h-5 text-[#28664A]" />;
    case "award":
      return <CheckCircle2 className="w-5 h-5 text-[#28664A]" />;
    case "continuity":
      return <RotateCcw className="w-5 h-5 text-[#28664A]" />;
    case "access":
      return <Key className="w-5 h-5 text-[#28664A]" />;
    case "incident":
      return <AlertTriangle className="w-5 h-5 text-[#28664A]" />;
    case "subprocessor":
      return <Users className="w-5 h-5 text-[#28664A]" />;
  }
}

export default function DueDiligenceQuestionnaireChecklistPage() {
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
        <div className="max-w-[1040px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]"
          >
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">
              Due Diligence Questionnaire Checklist
            </span>
          </nav>

          {/* Header & TL;DR */}
          <header className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <ClipboardCheck className="w-3.5 h-3.5" />
              50-Point DDQ Checklist · Updated November 2026
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              Due Diligence Questionnaire Checklist: 50 Essential Questions for Vendor Assessment
            </h1>

            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              Whether you are running third-party risk reviews for enterprise procurement or preparing
              your SaaS security packet to unblock a deal, a structured{" "}
              <strong className="text-[#1A1C19]">due diligence questionnaire checklist</strong>{" "}
              eliminates blind spots. Use this 50-point <strong className="text-[#1A1C19]">DDQ checklist</strong>{" "}
              with required evidence artifacts and a 1–5 scoring rubric to assess vendors consistently.
            </p>

            {/* TL;DR Box (48 words) */}
            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">TL;DR</p>
              <p className="text-[#566155] leading-relaxed">
                A due diligence questionnaire checklist standardizes vendor risk reviews across 50
                controls spanning security, privacy, compliance, continuity, access, incident
                response, and subprocessors. Scoring responses on a 1–5 maturity scale helps
                procurement teams spot compliance gaps early, avoid vague attestations, and approve
                enterprise software vendors faster with verifiable evidence.
              </p>
            </div>
          </header>

          {/* Section 2: What is a Due Diligence Questionnaire Checklist? */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              What is a Due Diligence Questionnaire Checklist?
            </h2>
            <p className="text-[#566155] leading-relaxed mb-4">
              A <strong className="text-[#1A1C19]">due diligence questionnaire checklist</strong> (often
              called a <strong className="text-[#1A1C19]">DDQ checklist</strong> or vendor{" "}
              <strong className="text-[#1A1C19]">due diligence checklist</strong>) is a structured
              control inventory used by information security, GRC, legal, and procurement teams to
              evaluate prospective software suppliers and acquisition targets before granting data or
              network access. Unlike informal ad-hoc email questions, a standardized checklist maps
              every inquiry to an objective control expectation and an auditable proof document.
            </p>
            <p className="text-[#566155] leading-relaxed mb-6">
              While massive industry templates like{" "}
              <Link
                href="/resources/sig-vs-sig-lite"
                className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
              >
                Shared Assessments SIG Core (850+ questions)
              </Link>{" "}
              or{" "}
              <Link
                href="/resources/caiq-v4-guide"
                className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
              >
                CSA CAIQ v4 (261 questions)
              </Link>{" "}
              make sense for heavily regulated banks or cloud infrastructure providers, most mid-market
              and enterprise SaaS evaluations perform faster with a targeted 50-question{" "}
              <Link
                href="/resources/vendor-risk-questionnaire"
                className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
              >
                vendor risk questionnaire
              </Link>
              . On the vendor side, preparing source-cited answers to these 50 controls upfront—or
              indexing them via{" "}
              <Link
                href="/resources/ddq-automation"
                className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
              >
                DDQ automation
              </Link>
              —prevents security reviews from delaying revenue by weeks.
            </p>

            {/* Quick Domain Navigation Summary */}
            <div className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
              <p className="text-xs font-mono uppercase tracking-wide text-[#074E34] font-semibold mb-3">
                7 Assessment Domains · 50 Total Controls
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {CHECKLIST_DOMAINS.map((domain) => (
                  <a
                    key={domain.slug}
                    href={`#${domain.slug}`}
                    className="flex items-center justify-between gap-2 p-3 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] hover:border-[#28664A] transition-colors group"
                  >
                    <span className="text-xs font-medium text-[#1A1C19] group-hover:text-[#074E34]">
                      {domain.title}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-mono text-[11px] font-semibold shrink-0">
                      {domain.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: 50-Point Due Diligence Checklist */}
          <section className="mb-14">
            <div className="mb-8">
              <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3">
                50-Point Due Diligence Checklist
              </h2>
              <p className="text-sm sm:text-base text-[#566155] leading-relaxed">
                Each item below pairs the exact vendor assessment question with the artifact reviewers
                should verify. If you are preparing responses as a SaaS vendor, compare your draft
                language against our{" "}
                <Link
                  href="/resources/security-questionnaire-examples"
                  className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
                >
                  50 security questionnaire examples
                </Link>{" "}
                and{" "}
                <Link
                  href="/resources/vendor-security-questionnaire-guide"
                  className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
                >
                  vendor security questionnaire guide
                </Link>
                .
              </p>
            </div>

            <div className="space-y-10">
              {CHECKLIST_DOMAINS.map((domain) => (
                <div
                  key={domain.slug}
                  id={domain.slug}
                  className="bg-white border border-[#E7E5DE] rounded-xl p-6 shadow-sm scroll-mt-24"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E7E5DE]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#EBF3EF] border border-[#C2DDD0] flex items-center justify-center shrink-0">
                        <DomainIcon name={domain.iconName} />
                      </div>
                      <div>
                        <h3 className="font-sans text-lg font-semibold text-[#1A1C19]">
                          {domain.title}
                        </h3>
                        <p className="text-xs text-[#566155]">{domain.summary}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-semibold shrink-0">
                      {domain.count} Questions
                    </span>
                  </div>

                  <div className="divide-y divide-[#E7E5DE]/80">
                    {domain.items.map((item) => (
                      <div
                        key={item.id}
                        className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start gap-3"
                      >
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-[#FAF9F6] border border-[#E7E5DE] font-mono text-xs font-semibold text-[#074E34] shrink-0 w-fit">
                          {item.id}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-[#1A1C19] leading-snug mb-1">
                            {item.question}
                          </p>
                          <p className="text-xs text-[#566155] leading-relaxed">
                            <strong className="font-mono text-[#28664A]">Required Evidence:</strong>{" "}
                            {item.evidence}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: How to Score DDQ Responses */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#28664A]" />
              How to Score DDQ Responses
            </h2>
            <p className="text-[#566155] leading-relaxed mb-6">
              Checking off &ldquo;Yes&rdquo; or &ldquo;No&rdquo; across a 50-point due diligence
              checklist masks operational risk—a startup with an unapproved draft policy looks identical
              on paper to an enterprise vendor with an unqualified SOC 2 Type II audit. Instead, grade
              every response on a <strong className="text-[#1A1C19]">1–5 maturity scale</strong> based
              on implementation depth and independent proof. Vendors looking to consistently earn
              Level 4 and Level 5 ratings can follow our{" "}
              <Link
                href="/resources/how-to-answer-security-questionnaires-fast"
                className="text-[#28664A] font-medium underline underline-offset-2 hover:text-[#074E34]"
              >
                evidence-grounded response playbook
              </Link>
              .
            </p>

            <div className="space-y-4 mb-6">
              {MATURITY_LEVELS.map((lvl) => (
                <div
                  key={lvl.score}
                  className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm flex flex-col sm:flex-row gap-4"
                >
                  <div className="sm:w-52 shrink-0">
                    <span
                      className={`inline-block font-mono text-xs font-semibold px-2.5 py-1 rounded ${lvl.badgeClass}`}
                    >
                      Score {lvl.score}: {lvl.label}
                    </span>
                  </div>
                  <div className="flex-1 space-y-1.5 text-xs text-[#566155] leading-relaxed">
                    <p>
                      <strong className="text-[#1A1C19]">Control Maturity:</strong> {lvl.criteria}
                    </p>
                    <p>
                      <strong className="text-[#1A1C19]">Evidence Standard:</strong>{" "}
                      {lvl.evidenceStrength}
                    </p>
                    <p>
                      <strong className="text-[#074E34]">Procurement Action:</strong> {lvl.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-[#F0F7F4] border border-[#C2DDD0] text-sm">
              <p className="font-semibold text-[#1A1C19] mb-1.5">
                Decision Thresholds &amp; Critical Fail Gates
              </p>
              <p className="text-xs text-[#566155] leading-relaxed">
                Do not let a high average hide a single catastrophic gap. For Tier 1 vendors handling
                PII, financial records, or production credentials, require a{" "}
                <strong className="text-[#1A1C19]">minimum weighted average of 3.8 / 5.0</strong>{" "}
                across all seven domains and enforce{" "}
                <strong className="text-[#1A1C19]">hard Score &ge; 3 gates</strong> on encryption at
                rest (SEC-01), TLS in transit (SEC-03), workforce MFA (ACC-01), tenant isolation
                (PRV-05), and breach notification SLAs (INC-02). Any Score 1 or Score 2 on a gate
                control triggers either a pre-signature remediation rider or formal CISO risk
                acceptance.
              </p>
            </div>
          </section>

          {/* Section 5: Common DDQ Mistakes to Avoid */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-[#C53929]" />
              Common DDQ Mistakes to Avoid
            </h2>
            <p className="text-[#566155] leading-relaxed mb-6">
              Even well-structured vendor risk programs break down when operational habits undermine
              the checklist. Watch out for these five common pitfalls when administering or responding
              to a DDQ checklist:
            </p>

            <div className="space-y-4">
              {COMMON_MISTAKES.map((item) => (
                <div
                  key={item.num}
                  className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm"
                >
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#1A1C19] mb-2 flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#FBEAE8] text-[#C53929] flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      {item.num}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed pl-8">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: FAQ */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-14 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-5 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Due Diligence Checklist: Frequently Asked Questions
            </h2>
            <div className="space-y-5 text-sm">
              {FAQ_ITEMS.map((item, idx) => (
                <div
                  key={item.q}
                  className={idx < FAQ_ITEMS.length - 1 ? "border-b border-[#E7E5DE]/60 pb-4" : ""}
                >
                  <h3 className="font-semibold text-[#1A1C19] mb-1.5">{item.q}</h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Related Guides */}
          <section className="mb-14">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/resources/ddq-automation",
                  label: "DDQ Automation: Complete Guide",
                  desc: "Automate vendor and investor DDQs with verified source citations",
                  spanFull: false,
                },
                {
                  href: "/resources/vendor-risk-questionnaire",
                  label: "Vendor Risk Questionnaire (VRQ) Guide",
                  desc: "Core assessment domains, frameworks, and scoring workflows",
                  spanFull: false,
                },
                {
                  href: "/resources/vendor-security-questionnaire-guide",
                  label: "Vendor Security Questionnaire Guide",
                  desc: "30 core questions, buyer scoring rubrics, and red flags",
                  spanFull: false,
                },
                {
                  href: "/resources/security-questionnaire-examples",
                  label: "50 Security Questionnaire Examples",
                  desc: "Real audit-proof vendor responses and buyer inquiries",
                  spanFull: false,
                },
                {
                  href: "/resources/how-to-answer-security-questionnaires-fast",
                  label: "How to Answer Security Questionnaires Fast",
                  desc: "5-step operational playbook to eliminate review bottlenecks and hallucinations",
                  spanFull: true,
                },
              ].map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className={`flex items-start justify-between gap-3 p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group ${
                    guide.spanFull ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#1A1C19] group-hover:text-[#074E34] transition-colors">
                        {guide.label}
                      </p>
                      <p className="text-xs text-[#566155]">{guide.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </section>

          {/* Section 8: InlineCta */}
          <InlineCta
            source="Due Diligence Questionnaire Checklist"
            heading="Complete your next 50-point DDQ in under 24 hours"
            description="Have a due diligence questionnaire waiting on security review? Upload your SOC 2 Type II report, policies, and spreadsheet—get verified, page-cited draft answers ready for human sign-off free."
            buttonText="Run My DDQ Free"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
