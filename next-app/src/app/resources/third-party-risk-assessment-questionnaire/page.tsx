import type { Metadata } from "next";
import Link from "@/components/Link";
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
  Layers,
  HelpCircle,
  BookOpen,
  Database,
  Zap,
  AlertTriangle,
  Network,
  Server,
  Activity,
  Building2,
  Scale,
  FileSpreadsheet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Third-Party Risk Assessment Questionnaire [2026 Guide]",
  description:
    "Complete 2026 guide to the third-party risk assessment questionnaire (TPRM questionnaire). Covers 8 core domains, Tier 1-3 depth, SEC/DORA/NIS2/HIPAA/OCC drivers, and AI automation.",
  alternates: {
    canonical: "/resources/third-party-risk-assessment-questionnaire",
  },
  openGraph: {
    title: "Third-Party Risk Assessment Questionnaire: Framework, Questions, and Automation",
    description:
      "Master the third-party vendor risk questionnaire: TPRM vs security questionnaire vs DDQ comparison, 8 assessment domains with sample questions, risk tiering, and grounded AI automation.",
    url: "https://securityreviewready.com/resources/third-party-risk-assessment-questionnaire",
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
      "name": "Third-Party Risk Assessment Questionnaire",
      "item": "https://securityreviewready.com/resources/third-party-risk-assessment-questionnaire",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/resources/third-party-risk-assessment-questionnaire#article",
  "headline": "Third-Party Risk Assessment Questionnaire: Framework, Questions, and Automation",
  "description":
    "Comprehensive 2026 practitioner guide to third-party risk assessment questionnaires (TPRM questionnaires), covering core domains, vendor risk tiering, regulatory mandates, and citation-grounded automation.",
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
  "mainEntityOfPage": "https://securityreviewready.com/resources/third-party-risk-assessment-questionnaire",
  "wordCount": 2750,
};

const FAQS = [
  {
    q: "What is a third-party risk assessment questionnaire?",
    a: "A third-party risk assessment questionnaire (also called a TPRM questionnaire or third-party vendor risk questionnaire) is a structured evaluation used by organizations to measure cybersecurity, data privacy, operational resilience, and compliance risks across external suppliers before onboarding and throughout the contract lifecycle.",
  },
  {
    q: "How does a TPRM questionnaire differ from a security questionnaire or DDQ?",
    a: "A TPRM questionnaire sits within an ongoing third-party risk management program and evaluates cybersecurity alongside business continuity, regulatory obligations, and fourth-party sub-processors across vendor risk tiers. A security questionnaire focuses primarily on technical IT and application controls prior to software integration, while a Due Diligence Questionnaire (DDQ) is broader and often covers financial, corporate, legal, and IP matters during M&A, fundraising, or enterprise procurement.",
  },
  {
    q: "What domains should a third-party vendor risk questionnaire cover?",
    a: "A complete third-party vendor risk questionnaire covers eight core domains: information security governance, identity and access management (IAM), data protection and cryptography, application security and vulnerability management, cloud infrastructure and network security, incident response and breach notification, business continuity and disaster recovery, and fourth-party sub-processor governance.",
  },
  {
    q: "How can SaaS teams automate TPRM questionnaire responses without risking hallucinations?",
    a: "Instead of relying on generic chatbots or outdated spreadsheets, SaaS teams use grounded citation engines like Security Review Ready. The platform ingests verified evidence such as SOC 2 Type II reports, ISO 27001 certificates, and security policies, matches incoming TPRM questions semantically, drafts answers citing the exact source document and page number, flags missing controls explicitly, and enforces human review before export.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a,
    },
  })),
};

const COMPARISON_ROWS = [
  {
    dimension: "Primary Purpose",
    tprm: "Evaluate, score, and monitor ongoing vendor cyber, operational, and regulatory risks across the supplier lifecycle.",
    security: "Validate technical security and data protection controls before granting a SaaS vendor access to systems or data.",
    ddq: "Conduct broad pre-transaction or enterprise diligence spanning security, legal, financial stability, and governance.",
  },
  {
    dimension: "Primary Owner",
    tprm: "Third-Party Risk Management (TPRM), Compliance, Operational Risk, and Procurement Governance teams.",
    security: "InfoSec, Security Architecture, and AppSec engineers reviewing inbound SaaS integrations.",
    ddq: "Private equity / VC investors, corporate M&A teams, institutional LPs, or regulated procurement committees.",
  },
  {
    dimension: "Typical Scope",
    tprm: "8+ domains including IAM, encryption, BCP/DR, regulatory alignment (DORA, OCC, HIPAA), and fourth-party sub-processors.",
    security: "Technical controls: SSO/MFA, AES-256/TLS 1.3, vulnerability SLAs, penetration testing, SOC 2 / ISO 27001.",
    ddq: "Security posture plus corporate ownership, litigation history, insurance coverage, SLAs, and financial controls.",
  },
  {
    dimension: "Format & Length",
    tprm: "Tiered SIG Full (850+ Qs), SIG Lite (125 Qs), or portal workflows (OneTrust, Panorays, ServiceNow VRM).",
    security: "CAIQ v4 (261 Qs), VSA, or custom 30–300 question Excel workbooks with dropdowns and scoring tabs.",
    ddq: "50–600 question multi-tab spreadsheets, Word questionnaires, or virtual data room requests.",
  },
  {
    dimension: "Lifecycle Timing",
    tprm: "Pre-contract onboarding plus recurring annual or 18-month reassessments and post-incident reviews.",
    security: "Point-in-time procurement gate during enterprise sales cycles before MSA and DPA signature.",
    ddq: "Pre-investment, pre-acquisition, or high-value multi-year enterprise vendor onboarding.",
  },
  {
    dimension: "Core Overlap",
    tprm: "Incorporates security questionnaire controls while adding business resilience, regulatory clauses, and tiering depth.",
    security: "Forms the technical cybersecurity core of both TPRM questionnaires and technology DDQs.",
    ddq: "Embeds a security questionnaire section alongside broader operational and commercial diligence.",
  },
];

const TPRM_DOMAINS = [
  {
    code: "01",
    title: "Information Security Governance & Risk",
    summary: "Verifies executive accountability, formal policies, audit attestations, and workforce security training.",
    icon: <ShieldCheck className="w-4 h-4 text-[#28664A]" />,
    questions: [
      "Does a designated executive (CISO or VP of Security) oversee your formal information security program and risk register?",
      "Do you maintain an active SOC 2 Type II report or ISO/IEC 27001:2022 certification covering the in-scope production service?",
      "Are all employees and contractors required to complete security awareness and privacy training upon hire and annually thereafter?",
    ],
    evidence: "SOC 2 Type II report, ISO 27001 certificate, Information Security Policy, training completion logs",
  },
  {
    code: "02",
    title: "Identity & Access Management (IAM)",
    summary: "Ensures strict authentication, least-privilege permissions, and rapid revocation for personnel and customers.",
    icon: <Lock className="w-4 h-4 text-[#28664A]" />,
    questions: [
      "Is phishing-resistant Multi-Factor Authentication (MFA) enforced for all workforce, VPN, and production cloud access?",
      "Does your application support enterprise Single Sign-On (SAML 2.0 / OIDC) and automated user provisioning (SCIM)?",
      "How frequently are privileged production access rights reviewed, and what is your SLA for revoking access upon offboarding?",
    ],
    evidence: "IdP/Okta configuration, Quarterly Access Review logs, Offboarding Policy SLA",
  },
  {
    code: "03",
    title: "Data Protection, Cryptography & Privacy",
    summary: "Confirms encryption strength, key custody, tenant isolation, and statutory privacy obligations.",
    icon: <Database className="w-4 h-4 text-[#28664A]" />,
    questions: [
      "Is customer data encrypted at rest using AES-256 and in transit across all public endpoints using TLS 1.2 or TLS 1.3?",
      "How are encryption keys generated, stored, rotated, and segregated across customer environments (KMS/HSM)?",
      "How do you enforce logical tenant isolation and execute verifiable data deletion upon contract termination?",
    ],
    evidence: "KMS key rotation policy, SSL Labs report, Multi-tenant architecture diagram, Data Retention & Deletion Policy",
  },
  {
    code: "04",
    title: "Application Security & Vulnerability Management",
    summary: "Tests secure coding pipelines, automated CVE scanning, penetration testing, and remediation SLAs.",
    icon: <Activity className="w-4 h-4 text-[#28664A]" />,
    questions: [
      "Do you run automated SAST, DAST, container scanning, and software composition analysis (SCA) in your CI/CD pipeline?",
      "When was your last independent third-party penetration test conducted, and were all critical and high findings remediated?",
      "What are your documented remediation SLAs for critical, high, and medium vulnerabilities (CVSS v3/v4)?",
    ],
    evidence: "Annual penetration test attestation letter, Patch Management Policy, CI/CD security workflow docs",
  },
  {
    code: "05",
    title: "Cloud Infrastructure & Network Security",
    summary: "Assesses network segmentation, environment separation, endpoint hardening, and centralized telemetry.",
    icon: <Server className="w-4 h-4 text-[#28664A]" />,
    questions: [
      "Are production, staging, and development environments strictly isolated at the network, account, and data layers?",
      "Do you deploy Web Application Firewalls (WAF), DDoS mitigation, and intrusion detection across external ingress points?",
      "Are security and audit logs centralized in an immutable SIEM with documented retention (e.g., 12 months) and alerting?",
    ],
    evidence: "Cloud network topology diagram, Logging & Monitoring Policy, Cloud security posture benchmarks",
  },
  {
    code: "06",
    title: "Incident Response & Breach Notification",
    summary: "Evaluates breach detection speed, forensic readiness, tabletop testing, and customer notification timelines.",
    icon: <AlertTriangle className="w-4 h-4 text-[#28664A]" />,
    questions: [
      "Do you maintain a documented Incident Response Plan (IRP) aligned with NIST SP 800-61 and test it via annual tabletop drills?",
      "What is your contractual notification window (e.g., 24, 48, or 72 hours) after confirming a security incident impacting buyer data?",
      "How do you preserve forensic artifacts, coordinate root-cause post-mortems, and share incident reports with affected clients?",
    ],
    evidence: "Incident Response Plan, annual tabletop exercise summary, DPA breach notification clause",
  },
  {
    code: "07",
    title: "Business Continuity & Disaster Recovery",
    summary: "Measures resilience against cloud outages, ransomware, and operational disruptions.",
    icon: <Layers className="w-4 h-4 text-[#28664A]" />,
    questions: [
      "What are your documented Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for production services?",
      "Are database backups encrypted, immutable (protected against deletion/ransomware), and replicated across geographic regions?",
      "When did you last execute a full backup restoration or failover test, and what was the measured recovery time?",
    ],
    evidence: "BCP/DR Plan, latest DR failover & backup restoration test report, SLA commitments",
  },
  {
    code: "08",
    title: "Fourth-Party & Sub-Processor Governance",
    summary: "Tracks downstream supply chain risk across cloud hosts, AI APIs, analytics, and managed services.",
    icon: <Network className="w-4 h-4 text-[#28664A]" />,
    questions: [
      "Do you maintain an up-to-date list of sub-processors and provide advance written notice (e.g., 30 days) before onboarding new ones?",
      "Do you conduct formal security and privacy risk assessments on your own critical vendors before sharing customer data?",
      "Are all downstream sub-processors bound by Data Processing Addendums (DPAs) with equivalent security and confidentiality obligations?",
    ],
    evidence: "Public Sub-processor list/Trust Center, Vendor Risk Management Policy, executed DPA templates",
  },
];

const RISK_TIERS = [
  {
    tier: "Tier 1: Critical / High Risk",
    badgeStyle: "bg-[#FBEAE8] text-[#C53929] border-[#F5C6C2]",
    criteria:
      "Vendors storing regulated PII, PHI, or payment data; integrating deeply with corporate IdP/ERP/production networks; or supporting mission-critical revenue/operations.",
    questionnaireDepth: "Full TPRM Assessment (150–850+ questions: Shared Assessments Full SIG or custom regulated workbook)",
    requiredEvidence:
      "Current SOC 2 Type II (zero unqualified exceptions) or ISO 27001 cert, latest annual pentest letter, executed DPA/BAA, DR test summary, cyber insurance certificate.",
    cadence: "Annual full reassessment + continuous attack-surface/news monitoring and material change triggers.",
  },
  {
    tier: "Tier 2: Moderate / Operational Risk",
    badgeStyle: "bg-[#FEF3D6] text-[#8F6B00] border-[#F6DF9F]",
    criteria:
      "Internal SaaS productivity, analytics, or engineering tools handling internal business metadata or limited employee data without production customer database access.",
    questionnaireDepth: "Standardized Baseline Assessment (40–125 questions: SIG Lite, CSA CAIQ v4, or focused 50-question TPRM sheet)",
    requiredEvidence:
      "SOC 2 Type I/II or ISO 27001 certification, public Trust Center documentation, standard DPA, and pentest executive summary.",
    cadence: "Every 18 months or upon major scope expansion (e.g., enabling AI features or new data feeds).",
  },
  {
    tier: "Tier 3: Low / Baseline Risk",
    badgeStyle: "bg-[#EBF3EF] text-[#074E34] border-[#C2DDD0]",
    criteria:
      "Standalone utilities, public-data marketing software, or non-connected tools with zero corporate network connectivity and no confidential or personal data storage.",
    questionnaireDepth: "Lightweight Intake / Attestation (10–20 triage questions or automated Trust Center & certificate check)",
    requiredEvidence:
      "Public Privacy Policy, Terms of Service, and verification of active SOC 2 / ISO badge or basic self-attestation.",
    cadence: "Every 24 months or at contract renewal.",
  },
];

const REGULATORY_DRIVERS = [
  {
    code: "SEC",
    name: "SEC Cybersecurity Disclosure & Reg S-P",
    jurisdiction: "United States (Public Companies & Broker-Dealers)",
    requirement:
      "Public registrants must disclose material cybersecurity risk management, board oversight, and material incidents—including breaches originating via third-party vendors—while updated Regulation S-P rules require incident response programs and timely customer notification for service-provider compromises.",
    tprmImpact:
      "Drives strict 24–72 hour vendor breach notification clauses and documented pre-contract vendor risk scoring.",
  },
  {
    code: "DORA",
    name: "Digital Operational Resilience Act (EU)",
    jurisdiction: "European Union (Financial Entities & Critical ICT Providers)",
    requirement:
      "Mandates end-to-end ICT third-party risk governance, pre-contract risk assessments, mandatory contractual exit strategies and audit rights, concentration risk mapping, and Register of Information reporting for critical ICT suppliers.",
    tprmImpact:
      "Expands TPRM questionnaires beyond InfoSec into exit plans, sub-contractor chains, RTO/RPO testing, and EU regulatory audit access.",
  },
  {
    code: "NIS2",
    name: "Network & Information Security Directive 2 (EU)",
    jurisdiction: "European Union (Essential & Important Sectors)",
    requirement:
      "Requires covered entities across energy, healthcare, digital infrastructure, cloud, and managed services to implement supply-chain cybersecurity risk management measures evaluating supplier vulnerabilities and overall security practices.",
    tprmImpact:
      "Pushes enterprise EU buyers to demand evidence of SDLC vulnerability management, patch SLAs, and executive security accountability from SaaS suppliers.",
  },
  {
    code: "HIPAA",
    name: "Health Insurance Portability & Accountability Act",
    jurisdiction: "United States (Healthcare Covered Entities & Business Associates)",
    requirement:
      "Obligates Covered Entities and Business Associates to execute Business Associate Agreements (BAAs) and verify Administrative, Physical, and Technical Safeguards across every vendor and subcontractor handling Electronic Protected Health Information (ePHI).",
    tprmImpact:
      "Requires dedicated ePHI encryption, access logging, workforce HIPAA training, and 100% downstream subcontractor flow-down validation.",
  },
  {
    code: "OCC",
    name: "OCC / Interagency Third-Party Risk Guidance",
    jurisdiction: "United States (National Banks, Federal Savings Associations & Fintechs)",
    requirement:
      "Establishes a full lifecycle framework—planning, due diligence and third-party selection, contract negotiation, ongoing monitoring, and termination—requiring depth of diligence commensurate with activity risk and criticality.",
    tprmImpact:
      "Formalizes Tier 1/2/3 vendor classification, independent audit verification, fourth-party tracking, and documented board/risk-committee reporting.",
  },
];

const RELATED_GUIDES = [
  {
    href: "/resources/vendor-risk-questionnaire",
    label: "Vendor Risk Questionnaire (VRQ) Guide & Frameworks",
    desc: "Core assessment pillars, SIG/CAIQ/VSA alignment, and inbound response workflows",
  },
  {
    href: "/resources/ddq-automation",
    label: "DDQ Automation: Complete Guide",
    desc: "Automate investor, financial, and enterprise Due Diligence Questionnaires in 24 hours",
  },
  {
    href: "/resources/security-questionnaire-automation",
    label: "Security Questionnaire Automation: Practitioner's Guide",
    desc: "Before/after time studies, 10-point tool checklist, and citation architecture",
  },
  {
    href: "/resources/vendor-security-questionnaire-guide",
    label: "Vendor Security Questionnaire: 30 Questions & Answers",
    desc: "Real audit-proof sample answers, scoring rubrics, and buyer red flags",
  },
  {
    href: "/compare/panorays-alternative",
    label: "Panorays Alternative & TPRM vs Response Automation",
    desc: "Understand buyer-side TPRM risk rating platforms vs vendor response engines",
  },
];

export default function ThirdPartyRiskAssessmentQuestionnairePage() {
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
        <article className="max-w-[1040px] mx-auto px-6">
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
            <span className="text-[#074E34] font-medium">Third-Party Risk Assessment Questionnaire</span>
          </nav>

          {/* Header */}
          <header className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium">
                <FileText className="w-3.5 h-3.5" />
                TPRM Practitioner Guide · Updated November 2026
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-[#566155]">
                <Clock className="w-3.5 h-3.5" />
                15 min read
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1A1C19] mb-4 leading-tight tracking-tight">
              Third-Party Risk Assessment Questionnaire: Framework, Questions, and Automation
            </h1>

            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              Whether you are building an enterprise vendor governance program or answering an inbound{" "}
              <strong className="text-[#1A1C19] font-medium">third-party vendor risk questionnaire</strong> to close a deal,
              understanding the structure behind a <strong className="text-[#1A1C19] font-medium">TPRM questionnaire</strong>{" "}
              turns multi-week security reviews into a repeatable, audit-defensible workflow.
            </p>

            {/* 1. TL;DR Box */}
            <div className="mt-7 p-5 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-mono text-xs uppercase tracking-wider font-semibold text-[#074E34] mb-1.5">
                TL;DR — Third-Party Risk Assessment Questionnaire Overview
              </p>
              <p className="text-[#566155] leading-relaxed">
                A <strong className="text-[#1A1C19]">third-party risk assessment questionnaire</strong> (TPRM questionnaire)
                evaluates external suppliers across <strong className="text-[#1A1C19]">8 core risk domains</strong>—from
                governance, IAM, encryption, and AppSec to cloud security, incident response, BCP/DR, and fourth-party
                sub-processors. Mature buyers calibrate questionnaire depth using a{" "}
                <strong className="text-[#1A1C19]">Tier 1 / Tier 2 / Tier 3</strong> inherent risk model driven by
                mandates like SEC, DORA, NIS2, HIPAA, and OCC guidance. For B2B SaaS vendors on the receiving end,
                automating TPRM questionnaire responses with a citation-grounded evidence engine shrinks turnaround
                from 2–4 weeks to <strong className="text-[#1A1C19]">under 24 hours</strong> without risking unverified claims.
              </p>
            </div>
          </header>

          {/* 2. What is a Third-Party Risk Assessment Questionnaire? */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              What is a Third-Party Risk Assessment Questionnaire?
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-4">
              A <strong className="text-[#1A1C19]">third-party risk assessment questionnaire</strong> (commonly shortened to{" "}
              <strong className="text-[#1A1C19]">TPRM questionnaire</strong>) is a structured control assessment used by
              enterprise procurement, risk management, and security teams to measure the cyber, privacy, operational, and
              regulatory exposure introduced by an external supplier before signing a contract—and periodically thereafter.
            </p>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-4">
              Unlike an informal email check-in, a formal{" "}
              <strong className="text-[#1A1C19]">third-party vendor risk questionnaire</strong> translates broad risk
              obligations into auditable questions paired with documentary proof: SOC 2 Type II reports, ISO/IEC 27001
              certificates, penetration test attestations, Data Processing Addendums (DPAs), and disaster recovery test
              logs. Buyers use the responses to calculate a supplier&apos;s residual risk after controls are factored in.
            </p>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed">
              Many enterprise buyers standardize their TPRM questionnaires around industry frameworks such as the{" "}
              <a
                href="https://sharedassessments.org/sig/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                Shared Assessments SIG
              </a>{" "}
              (Standardized Information Gathering), the Cloud Security Alliance{" "}
              <a
                href="https://cloudsecurityalliance.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                CAIQ v4
              </a>
              , or{" "}
              <a
                href="https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                NIST SP 800-161r1
              </a>
              , while others distribute proprietary Excel workbooks or portal forms via OneTrust, ServiceNow VRM, or Panorays.
              For a closer look at how inbound vendor questionnaires are scored, see our{" "}
              <Link href="/resources/vendor-risk-questionnaire" className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]">
                Vendor Risk Questionnaire Guide
              </Link>
              .
            </p>
          </section>

          {/* 3. TPRM vs Security Questionnaire vs DDQ */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#28664A]" />
              TPRM vs Security Questionnaire vs DDQ
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Sales teams and procurement analysts often use &quot;TPRM questionnaire,&quot; &quot;security questionnaire,&quot;
              and &quot;DDQ&quot; interchangeably, even though each originates from a different stakeholder group and
              carries distinct scope. Use the matrix below to distinguish what you are reviewing—or receiving.
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#E7E5DE] bg-white shadow-sm mb-4">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#1A1C19]">
                    <th className="py-3.5 px-4 font-semibold w-36">Dimension</th>
                    <th className="py-3.5 px-4 font-semibold text-[#074E34]">TPRM Questionnaire</th>
                    <th className="py-3.5 px-4 font-semibold">Security Questionnaire (VRQ)</th>
                    <th className="py-3.5 px-4 font-semibold">Due Diligence Questionnaire (DDQ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE] text-[#566155]">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.dimension} className="hover:bg-[#FAF9F6]/60 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-[#1A1C19] align-top">{row.dimension}</td>
                      <td className="py-3.5 px-4 align-top bg-[#F0F7F4]/40 text-[#1A1C19]">{row.tprm}</td>
                      <td className="py-3.5 px-4 align-top">{row.security}</td>
                      <td className="py-3.5 px-4 align-top">{row.ddq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
              Need tactical checklists for the technical or investor formats? Explore our{" "}
              <Link href="/resources/vendor-security-questionnaire-guide" className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]">
                30-question vendor security questionnaire guide
              </Link>{" "}
              and our{" "}
              <Link href="/resources/ddq-automation" className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]">
                DDQ automation playbook
              </Link>
              .
            </p>
          </section>

          {/* 4. Core TPRM Questionnaire Domains (8 domains with questions) */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3">
              8 Core TPRM Questionnaire Domains &amp; Essential Questions
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Regardless of whether an organization sends a custom spreadsheet, SIG workbook, or portal assessment,
              virtually every third-party risk assessment questionnaire tests the following eight operational and
              technical domains.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TPRM_DOMAINS.map((domain) => (
                <div
                  key={domain.code}
                  className="bg-white border border-[#E7E5DE] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="px-2 py-0.5 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] font-mono text-xs font-semibold">
                        {domain.code}
                      </span>
                      {domain.icon}
                      <h3 className="font-sans text-base font-semibold text-[#1A1C19] leading-snug">
                        {domain.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#566155] leading-relaxed mb-4">
                      {domain.summary}
                    </p>

                    <div className="space-y-2.5 mb-4">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-[#074E34] font-semibold">
                        Sample TPRM Questions
                      </p>
                      <ul className="space-y-2 text-xs text-[#1A1C19]">
                        {domain.questions.map((q, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A] shrink-0 mt-0.5" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E7E5DE]/80 text-[11px] text-[#566155]">
                    <span className="font-mono font-semibold text-[#1A1C19]">Expected Evidence: </span>
                    <span>{domain.evidence}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Risk-Tiered TPRM Program (Tier 1/2/3) */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3">
              Risk-Tiered TPRM Program: Matching Questionnaire Depth to Inherent Risk
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Sending an 850-question SIG Full workbook to every software supplier slows procurement to a standstill and
              overwhelms security reviewers with low-value noise. High-performing TPRM programs score{" "}
              <strong className="text-[#1A1C19]">inherent risk</strong> at intake (based on data sensitivity, system
              access, and business criticality) and assign vendors to one of three depth tiers before issuing a{" "}
              <strong className="text-[#1A1C19]">third-party vendor risk questionnaire</strong>.
            </p>

            <div className="space-y-4">
              {RISK_TIERS.map((item) => (
                <div key={item.tier} className="bg-white border border-[#E7E5DE] rounded-xl p-5 sm:p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className={`font-mono text-xs font-semibold uppercase px-2.5 py-1 rounded border ${item.badgeStyle}`}>
                      {item.tier}
                    </span>
                    <span className="font-mono text-xs text-[#566155]">
                      Reassessment: <strong className="text-[#1A1C19]">{item.cadence.split("+")[0].trim()}</strong>
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-xs leading-relaxed text-[#566155]">
                    <div>
                      <p className="font-semibold text-[#1A1C19] mb-1">Inherent Risk Criteria</p>
                      <p>{item.criteria}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1C19] mb-1">Questionnaire Depth &amp; Scope</p>
                      <p>{item.questionnaireDepth}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1C19] mb-1">Required Evidence Artifacts</p>
                      <p>{item.requiredEvidence}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1C19] mb-1">Monitoring &amp; Reassessment Cadence</p>
                      <p>{item.cadence}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Automating TPRM Questionnaire Responses */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#28664A]" />
              Automating TPRM Questionnaire Responses Without Risking Hallucinations
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              While enterprise buyers rely on TPRM platforms like OneTrust, ServiceNow VRM, or{" "}
              <Link href="/compare/panorays-alternative" className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]">
                Panorays
              </Link>{" "}
              to issue vendor questionnaires and score external exposure, B2B SaaS suppliers still bear the burden of
              completing those assessments accurately under tight deal deadlines. Copy-pasting from stale spreadsheets
              creates contradictory audit claims, while pasting sensitive questionnaires into generic public chatbots
              introduces hallucination and contractual misrepresentation risk.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  step: "Step 1",
                  title: "Index Verified Compliance Evidence Once",
                  desc: "Ingest your SOC 2 Type II audit report, ISO 27001 certificate, internal security policies, penetration test summary, BCP/DR report, and Trust Center into an isolated, zero-training knowledge graph.",
                  icon: <Database className="w-4 h-4 text-[#28664A]" />,
                },
                {
                  step: "Step 2",
                  title: "Parse Multi-Tab Excel & TPRM Portals",
                  desc: "Upload bespoke procurement spreadsheets, Full SIG workbooks, or CAIQ v4 templates without stripping cross-sheet scoring formulas, dropdown validations, or conditional formatting.",
                  icon: <FileSpreadsheet className="w-4 h-4 text-[#28664A]" />,
                },
                {
                  step: "Step 3",
                  title: "Draft Answers with Exact Page Citations",
                  desc: "Semantic retrieval matches each TPRM question to verified controls and cites the exact document name, section heading, and page number—explicitly flagging gaps instead of fabricating compliance.",
                  icon: <ShieldCheck className="w-4 h-4 text-[#28664A]" />,
                },
                {
                  step: "Step 4",
                  title: "Human-in-the-Loop Verification & Export",
                  desc: "Security engineers, fractional CISOs, or sales engineers validate highlighted source passages in minutes, approve with one click, and export directly back into the buyer's original template.",
                  icon: <CheckCircle2 className="w-4 h-4 text-[#28664A]" />,
                },
              ].map((card) => (
                <div key={card.step} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-mono text-xs font-semibold">
                      {card.step}
                    </span>
                    {card.icon}
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19]">{card.title}</h3>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E7E5DE] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                <strong className="text-[#1A1C19]">Looking for a deeper implementation blueprint?</strong> Read our{" "}
                <Link href="/resources/security-questionnaire-automation" className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]">
                  Security Questionnaire Automation Practitioner&apos;s Guide
                </Link>{" "}
                for a 10-point evaluation checklist and before/after turnaround benchmarks.
              </p>
              <Link
                href="/resources/security-questionnaire-automation"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#074E34] hover:text-[#28664A] whitespace-nowrap shrink-0"
              >
                Read Automation Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* 7. Regulatory Drivers (SEC, DORA, NIS2, HIPAA, OCC) */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#28664A]" />
              Regulatory Drivers Shaping TPRM Questionnaires
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Enterprise buyers are no longer customizing TPRM questionnaires purely out of preference. Five major
              regulatory frameworks mandate documented vendor due diligence, contractual security clauses, and ongoing
              monitoring across supply chains:
            </p>

            <div className="space-y-4">
              {REGULATORY_DRIVERS.map((reg) => (
                <div key={reg.code} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] font-mono text-xs font-bold">
                      {reg.code}
                    </span>
                    <h3 className="font-sans text-base font-semibold text-[#1A1C19]">{reg.name}</h3>
                    <span className="text-xs font-mono text-[#566155]">· {reg.jurisdiction}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed mb-2">
                    {reg.requirement}
                  </p>
                  <p className="text-xs text-[#1A1C19] bg-[#FAF9F6] border border-[#E7E5DE] rounded px-3 py-2">
                    <strong className="text-[#074E34]">Impact on TPRM Questionnaires: </strong>
                    {reg.tprmImpact}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. FAQ (4 questions with schema) */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-14 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-5 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Third-Party Risk Assessment Questionnaire: Frequently Asked Questions
            </h2>
            <div className="space-y-5 text-sm">
              {FAQS.map((item, idx) => (
                <div key={item.q} className={idx < FAQS.length - 1 ? "border-b border-[#E7E5DE]/60 pb-4" : ""}>
                  <h3 className="font-semibold text-[#1A1C19] mb-1.5">{item.q}</h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Related Guides */}
          <section className="mb-14">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {RELATED_GUIDES.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="flex items-start gap-3 p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group"
                >
                  <BookOpen className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1C19] group-hover:text-[#28664A] transition-colors">
                      {guide.label}
                    </p>
                    <p className="text-xs text-[#566155] mt-0.5">{guide.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 10. InlineCta */}
          <InlineCta
            source="Third-Party Risk Assessment Questionnaire Guide"
            heading="Complete your next TPRM questionnaire in under 24 hours"
            description="Have a 200+ question third-party risk assessment questionnaire on your desk? Upload your SOC 2 report and security policies to receive source-cited draft answers ready for human verification—100% free for your first questionnaire."
            buttonText="Run My Questionnaire Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
