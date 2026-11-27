import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  FileText,
  Database,
  Lock,
  Layers,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  BarChart3,
  ListChecks,
  Zap,
  Scale,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Security Review Process: 6 Steps [2026]",
  description:
    "A complete breakdown of the 6-step enterprise security review process for SaaS vendors: qualification, questionnaires, evidence collection, technical assessment, risk scoring, and timelines.",
  alternates: {
    canonical: "/resources/enterprise-security-review-process",
  },
  openGraph: {
    title: "Enterprise Security Review Process: A 6-Step Framework for SaaS Vendors",
    description:
      "Understand every stage of an enterprise vendor security assessment, realistic review timelines, SOC 2 / ISO 27001 / NIST CSF / CSA STAR expectations, and how SaaS vendors clear reviews faster.",
    url: "https://securityreviewready.com/resources/enterprise-security-review-process",
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
      "name": "Enterprise Security Review Process",
      "item": "https://securityreviewready.com/resources/enterprise-security-review-process",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": "https://securityreviewready.com/resources/enterprise-security-review-process#article",
  "headline": "Enterprise Security Review Process: A 6-Step Framework for SaaS Vendors",
  "description":
    "A practical 6-step framework covering the enterprise security review process, enterprise vendor security assessment stages, realistic timelines, compliance frameworks, and acceleration tactics for B2B SaaS teams.",
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
  "datePublished": "2026-11-27",
  "dateModified": "2026-11-27",
  "mainEntityOfPage": "https://securityreviewready.com/resources/enterprise-security-review-process",
};

const FAQ_ITEMS = [
  {
    question: "How long does an enterprise security review process typically take?",
    answer:
      "A manual enterprise security review process typically takes 3 to 8 weeks from vendor qualification to final InfoSec sign-off, and 8 to 12+ weeks in heavily regulated industries such as banking or healthcare. The longest delay is usually vendor-side questionnaire completion and evidence gathering (2 to 3 weeks). SaaS vendors that maintain an up-to-date trust center and use citation-grounded questionnaire automation routinely cut their response turnaround to under 24 hours.",
  },
  {
    question: "What documents do SaaS vendors need for an enterprise vendor security assessment?",
    answer:
      "Buyers consistently request six core artifacts during an enterprise vendor security assessment: (1) an independent SOC 2 Type II report or ISO/IEC 27001 certificate, (2) a recent third-party penetration test executive summary, (3) an Information Security Policy overview, (4) a system architecture and data-flow diagram, (5) a current list of sub-processors with a Data Processing Addendum (DPA), and (6) business continuity and disaster recovery test results.",
  },
  {
    question: "Can a SOC 2 Type II report replace an enterprise security questionnaire?",
    answer:
      "Usually not completely, though it substantially reduces the workload. A clean SOC 2 Type II report satisfies roughly 60% to 75% of standard control inquiries, which often persuades buyers to waive long bespoke spreadsheets or downgrade from a Full SIG (850+ questions) to a SIG Lite or targeted delta questionnaire. Buyers still ask custom questions covering tenant data isolation, AI data usage, encryption key management, and breach notification SLAs.",
  },
  {
    question: "How can early-stage SaaS vendors pass an enterprise security evaluation without SOC 2?",
    answer:
      "Startups without a completed SOC 2 report can still pass an enterprise security evaluation by providing a clear compensating package: documented security policies, an independent penetration test letter, architectural diagrams showing encryption at rest and in transit, SSO/MFA enforcement proof, and a dated audit readiness letter from a CPA firm or compliance platform. Transparently documenting compensating controls scores far better than leaving assessment questions blank.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

const SIX_STEPS = [
  {
    step: "01",
    title: "Vendor Qualification",
    owner: "Procurement, Deal Desk & TPRM Intake",
    summary:
      "Before sending a questionnaire, the buyer classifies your SaaS product by inherent risk based on what data you touch and how deeply you integrate into their environment.",
    buyerFocus:
      "Collects an intake form covering data classification (PII, PHI, PCI, source code, financial data), network connectivity (SSO, API write access, VPC peering), and business criticality if the tool goes offline.",
    vendorAction:
      "Sign the mutual NDA early, confirm exact data-scope boundaries (avoid over-scoping read-only integrations), and proactively share your Trust Center link to demonstrate baseline maturity at intake.",
  },
  {
    step: "02",
    title: "Questionnaire Distribution",
    owner: "Vendor Risk Management (VRM) / InfoSec Analyst",
    summary:
      "Based on your Tier 1, Tier 2, or Tier 3 risk tier, the buyer assigns a standardized framework or proprietary assessment workbook via email or a TPRM portal.",
    buyerFocus:
      "Issues a CSA CAIQ v4, Shared Assessments SIG or SIG Lite, VSA, custom multi-tab Excel DDQ, or an online assessment inside OneTrust, Whistic, ServiceNow VRM, or Panorays.",
    vendorAction:
      "Clarify submission format and deadlines immediately. If you hold an active SOC 2 Type II or ISO 27001 certification, politely ask whether your attestation package and CAIQ can substitute for an 800-row custom workbook.",
  },
  {
    step: "03",
    title: "Evidence Collection",
    owner: "SaaS Sales Engineering, Security Lead / vCISO",
    summary:
      "The vendor compiles verified answers and supporting compliance artifacts to prove that stated controls operate in practice rather than existing only on paper.",
    buyerFocus:
      "Expects consistent answers backed by current artifacts: SOC 2 Type II report (check bridge letters if > 12 months old), ISO 27001 certificate with Statement of Applicability, pen test letter, DPA, and DR/BCP test logs.",
    vendorAction:
      "Use citation-grounded questionnaire automation anchored to your verified policies and audit reports so every claim cites the exact document, section, and page number—eliminating conflicting answers across Slack and old RFPs.",
  },
  {
    step: "04",
    title: "Technical Assessment",
    owner: "Buyer Security Architect & AppSec Team",
    summary:
      "For high-risk or data-intensive SaaS tools, InfoSec engineers validate architectural claims, run external posture checks, and hold live technical review calls.",
    buyerFocus:
      "Inspects multi-tenant data isolation, TLS 1.3 and AES-256 KMS encryption, RBAC and SAML/OIDC enforcement, SIEM log retention, vulnerability patching SLAs, AI model training opt-outs, and attack-surface scan findings.",
    vendorAction:
      "Bring a Solutions Architect or Security Engineer equipped with a clean data-flow diagram and pen-test remediation summary. Answer control gaps transparently with concrete compensating controls.",
  },
  {
    step: "05",
    title: "Risk Scoring",
    owner: "TPRM Committee, Legal & CISO Delegate",
    summary:
      "The buyer scores residual risk across weighted control domains, categorizes any missing controls, and determines whether remediation commitments or contract terms are required.",
    buyerFocus:
      "Applies a weighted scoring rubric (Critical, High, Medium, Low). Critical gaps—such as missing MFA, unencrypted backups, or unresolved high-severity pen-test findings—trigger conditional holds or exception requests.",
    vendorAction:
      "Review flagged items quickly, propose realistic remediation dates (POAMs) for minor gaps, and align with Legal on reasonable Data Processing Addendum (DPA) and breach-notification clauses (typically 48–72 hours).",
  },
  {
    step: "06",
    title: "Approval & Monitoring",
    owner: "CISO Sign-Off, Procurement & Continuous TPRM",
    summary:
      "Once residual risk falls within the enterprise risk appetite, InfoSec grants formal clearance for contract signature and moves the vendor into ongoing monitoring.",
    buyerFocus:
      "Logs final approval in procurement/GRC software, records any contractual security exhibit obligations, and schedules annual re-assessments alongside continuous security rating or breach-feed alerts.",
    vendorAction:
      "Archive the approved submission and evidence citations for future renewals, update your Trust Center as new SOC 2 or pen test cycles complete, and notify enterprise customers ahead of sub-processor changes.",
  },
];

const TIMELINE_ROWS = [
  {
    stage: "1. Vendor Qualification",
    activities: "Intake triage, NDA execution, data-tier classification (Tier 1–3)",
    manual: "3 to 5 business days",
    accelerated: "1 to 2 business days",
    bottleneck: "Unclear data-flow scope or delayed NDA redlines",
  },
  {
    stage: "2. Questionnaire Distribution",
    activities: "Buyer selects SIG, CAIQ, DDQ, or portal scope and sends invite",
    manual: "2 to 5 business days",
    accelerated: "Same day (pre-triaged)",
    bottleneck: "Negotiating workbook scope after intake queue backlog",
  },
  {
    stage: "3. Evidence Collection",
    activities: "Answering 100–400 questions + assembling SOC 2, pen test, and policy docs",
    manual: "10 to 15 business days",
    accelerated: "Under 24 hours",
    bottleneck: "Engineering escalations, stale answer libraries, broken Excel macros",
  },
  {
    stage: "4. Technical Assessment",
    activities: "Buyer InfoSec review, architecture call, follow-up clarifications",
    manual: "5 to 10 business days",
    accelerated: "2 to 4 business days",
    bottleneck: "Vague responses lacking citations forcing back-and-forth emails",
  },
  {
    stage: "5. Risk Scoring & Legal",
    activities: "Gap scoring, compensating controls, DPA and security exhibit sign-off",
    manual: "5 to 10 business days",
    accelerated: "2 to 5 business days",
    bottleneck: "Unaddressed blank cells or mismatched policy commitments in MSA",
  },
  {
    stage: "6. Approval & Monitoring",
    activities: "CISO / Risk Committee sign-off and annual monitoring enrollment",
    manual: "2 to 5 business days",
    accelerated: "1 to 2 business days",
    bottleneck: "Executive committee scheduling at quarter-end",
  },
];

const FRAMEWORKS = [
  {
    name: "SOC 2 (Type I & Type II)",
    issuer: "AICPA Trust Services Criteria",
    badge: "Most Requested in North America",
    summary:
      "The baseline attestation for B2B SaaS vendors. Covers Security (Common Criteria CC1–CC9) plus optional Availability, Processing Integrity, Confidentiality, and Privacy criteria.",
    details: [
      "Type I evaluates control design at a point in time; enterprise buyers strongly prefer Type II (6–12 months of audited operating effectiveness).",
      "Reviewers inspect Complementary User Entity Controls (CUECs), subservice carve-outs (e.g., AWS/GCP), and any auditor exceptions.",
      "Satisfies ~60–75% of standard enterprise vendor security assessment items when paired with a current bridge letter.",
    ],
  },
  {
    name: "ISO/IEC 27001:2022",
    issuer: "International Organization for Standardization",
    badge: "Global & Enterprise Standard",
    summary:
      "A certifiable Information Security Management System (ISMS) standard spanning Clauses 4–10 and 93 Annex A controls across Organizational, People, Physical, and Technological domains.",
    details: [
      "Widely accepted by European, UK, APAC, and multinational procurement teams as proof of a continuous risk-management lifecycle.",
      "Buyers typically request your accredited ISO 27001 certificate along with the Statement of Applicability (SoA) to confirm scoped products and cloud regions.",
      "Requires annual surveillance audits and a full recertification cycle every three years.",
    ],
  },
  {
    name: "NIST CSF 2.0",
    issuer: "National Institute of Standards and Technology",
    badge: "Buyer Risk-Scoring Backbone",
    summary:
      "Organizes cybersecurity outcomes across six core functions—Govern, Identify, Protect, Detect, Respond, and Recover—without issuing formal certifications.",
    details: [
      "Enterprise TPRM teams frequently map custom questionnaire domains directly to NIST CSF functions and implementation tiers.",
      "Particularly common in US financial services, manufacturing, defense supply chains, and public-sector enterprise security evaluations.",
      "Vendors score higher when policies and incident runbooks explicitly cross-reference NIST CSF controls and measurable recovery targets.",
    ],
  },
  {
    name: "CSA STAR (CAIQ v4 / CCM v4)",
    issuer: "Cloud Security Alliance",
    badge: "Cloud-Native Self-Attestation",
    summary:
      "The Cloud Security Alliance Security, Trust, Assurance, and Risk (STAR) program pairs the Cloud Controls Matrix (CCM v4.0) with the 261-question CAIQ v4 workbook.",
    details: [
      "Level 1 allows public self-assessment by publishing a completed CAIQ; Level 2 combines independent SOC 2 or ISO 27001 audits with STAR attestation.",
      "Highly effective for SaaS vendors seeking to deflect custom spreadsheets by pointing buyers to a standardized, machine-readable cloud posture profile.",
      "Directly covers cloud-specific topics including tenant isolation, hypervisor hardening, API security, and shared-responsibility boundaries.",
    ],
  },
];

export default function EnterpriseSecurityReviewProcessPage() {
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
            <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">
              Enterprise Security Review Process
            </span>
          </nav>

          {/* Article Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Enterprise TPRM Playbook
              </span>
              <span>By Security Review Ready Team</span>
              <span>Published Nov 27, 2026</span>
              <span>12 min read</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight">
              Enterprise Security Review Process: A 6-Step Framework for SaaS Vendors
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] leading-relaxed">
              Every late-stage B2B SaaS deal eventually hits procurement&apos;s third-party risk gate. Here is how the{" "}
              <strong className="text-[#1A1C19] font-medium">enterprise security review process</strong>{" "}
              works behind the scenes, what InfoSec teams inspect at each stage of an{" "}
              <strong className="text-[#1A1C19] font-medium">enterprise vendor security assessment</strong>, and how high-velocity vendors cut clearance cycles from weeks to days.
            </p>
          </header>

          {/* Section 1: TL;DR Box */}
          <section
            aria-label="TL;DR Summary"
            className="bg-[#EBF3EF]/50 border border-[#C2DDD0] rounded-xl p-6 mb-12 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-2">
              <Zap className="w-4 h-4 text-[#28664A]" />
              TL;DR — The Enterprise Security Evaluation at a Glance
            </div>
            <p className="text-sm text-[#1A1C19] leading-relaxed mb-4">
              An <strong>enterprise security review process</strong> is a structured six-stage gate—spanning{" "}
              <strong>
                Vendor Qualification, Questionnaire Distribution, Evidence Collection, Technical Assessment, Risk Scoring, and Approval &amp; Monitoring
              </strong>
              —used by buyers to validate a SaaS vendor&apos;s controls before granting production data access or signing an MSA.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white rounded-lg p-3.5 border border-[#E7E5DE]">
                <div className="text-lg font-bold font-mono text-[#1A1C19]">3–8 Weeks</div>
                <div className="text-xs text-[#566155]">
                  Typical end-to-end manual enterprise vendor security assessment cycle
                </div>
              </div>
              <div className="bg-white rounded-lg p-3.5 border border-[#E7E5DE]">
                <div className="text-lg font-bold font-mono text-[#074E34]">&lt; 24 Hours</div>
                <div className="text-xs text-[#566155]">
                  Vendor-side questionnaire &amp; evidence package turnaround with citation automation
                </div>
              </div>
              <div className="bg-white rounded-lg p-3.5 border border-[#E7E5DE]">
                <div className="text-lg font-bold font-mono text-[#1A1C19]">4 Core Standards</div>
                <div className="text-xs text-[#566155]">
                  SOC 2 Type II, ISO/IEC 27001, NIST CSF 2.0, and CSA STAR / CAIQ v4
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: What is an Enterprise Security Review? */}
          <section className="space-y-5 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight">
              What is an Enterprise Security Review?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              An <strong className="text-[#1A1C19]">enterprise security review</strong> (often called an{" "}
              <strong className="text-[#1A1C19]">enterprise vendor security assessment</strong> or third-party risk evaluation) is the formal due diligence workflow large buyers run before onboarding a software supplier. While your champion evaluates product ROI, the buyer&apos;s Information Security, Third-Party Risk Management (TPRM), Privacy, and Procurement teams verify whether trusting your platform with corporate credentials or customer data introduces unacceptable breach, compliance, or operational continuity risk.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              Under regulations such as GDPR, HIPAA, DORA, and SEC cybersecurity rules—and under the buyer&apos;s own SOC 2 and ISO 27001 vendor-management obligations—enterprise organizations are held accountable for breaches occurring inside their SaaS supply chain. Consequently, an{" "}
              <strong className="text-[#1A1C19]">enterprise security evaluation</strong> is not a formality; it is a binding risk-acceptance decision that requires auditable proof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#074E34] font-semibold mb-2">
                  <AlertTriangle className="w-4 h-4 text-[#28664A]" />
                  TIER 1 · CRITICAL / HIGH
                </div>
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1.5">
                  Sensitive Data or Deep Access
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Processes PII, PHI, payment data, source code, or holds write APIs. Triggers full SIG/DDQ, SOC 2 Type II inspection, pen test review, and live architect interviews.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#074E34] font-semibold mb-2">
                  <Layers className="w-4 h-4 text-[#28664A]" />
                  TIER 2 · MODERATE RISK
                </div>
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1.5">
                  Internal Business Systems
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Stores internal employee emails, CRM metadata, or analytics without regulated payloads. Typically requires SIG Lite or CAIQ v4 plus SOC 2 / ISO 27001 attestation.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#074E34] font-semibold mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#28664A]" />
                  TIER 3 · LOW RISK
                </div>
                <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1.5">
                  Public or Non-Sensitive Tools
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  No confidential customer data or production integration. Often cleared via Trust Center inspection, automated external posture scan, and a short 15–30 question checklist.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The 6-Step Enterprise Security Review Process */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <div className="space-y-2">
              <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight flex items-center gap-2">
                <Workflow className="w-6 h-6 text-[#28664A]" />
                The 6-Step Enterprise Security Review Process
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
                Although procurement tools vary across Fortune 500 buyers, nearly every{" "}
                <strong className="text-[#1A1C19]">enterprise vendor security assessment</strong> follows the same six sequential stages. Understanding both the buyer&apos;s internal gate and your required vendor deliverable prevents costly back-and-forth delays.
              </p>
            </div>

            <div className="space-y-5">
              {SIX_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="bg-white border border-[#E7E5DE] rounded-xl p-5 sm:p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {item.step}
                      </span>
                      <h3 className="font-sans text-lg font-semibold text-[#1A1C19]">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#566155] bg-[#FAF9F6] border border-[#E7E5DE] px-2.5 py-1 rounded">
                      {item.owner}
                    </span>
                  </div>

                  <p className="text-sm text-[#566155] leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                      <span className="font-mono font-semibold text-[#1A1C19] uppercase block mb-1">
                        What the Buyer Evaluates
                      </span>
                      <p className="text-[#566155] leading-relaxed">{item.buyerFocus}</p>
                    </div>
                    <div className="p-3.5 rounded-lg bg-[#EBF3EF]/40 border border-[#C2DDD0]">
                      <span className="font-mono font-semibold text-[#074E34] uppercase block mb-1">
                        How SaaS Vendors Clear This Step
                      </span>
                      <p className="text-[#1A1C19] leading-relaxed">{item.vendorAction}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Enterprise Security Review Timeline */}
          <section className="space-y-5 text-[#1A1C19] mb-12">
            <div className="space-y-2">
              <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#28664A]" />
                Enterprise Security Review Timeline
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
                In a manual workflow, an{" "}
                <strong className="text-[#1A1C19]">enterprise security evaluation</strong> routinely consumes{" "}
                <strong className="text-[#1A1C19]">27 to 50 business days (5 to 10 calendar weeks)</strong>. Notice where the bottleneck sits: nearly half of the elapsed delay happens on the vendor side while engineers hunt for answers, verify evidence, and repair broken Excel sheets—which in turn pushes the submission into the buyer&apos;s next weekly review queue.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#E7E5DE] shadow-sm">
              <table className="w-full text-xs sm:text-sm bg-white">
                <thead>
                  <tr className="border-b border-[#E7E5DE] bg-[#FAF9F6]">
                    <th className="text-left px-4 py-3 font-semibold text-[#1A1C19] font-sans">
                      Review Stage
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1A1C19] font-sans">
                      Core Activities
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-[#BA1A1A] font-sans whitespace-nowrap">
                      Manual Process
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-[#28664A] font-sans whitespace-nowrap">
                      Prepared / Automated
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-[#566155] font-sans">
                      Common Bottleneck
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]">
                  {TIMELINE_ROWS.map((row) => (
                    <tr key={row.stage} className="hover:bg-[#FAF9F6] transition-colors">
                      <td className="px-4 py-3.5 text-[#1A1C19] font-medium whitespace-nowrap">
                        {row.stage}
                      </td>
                      <td className="px-4 py-3.5 text-[#566155]">{row.activities}</td>
                      <td className="px-4 py-3.5 text-center text-[#566155] whitespace-nowrap">
                        {row.manual}
                      </td>
                      <td className="px-4 py-3.5 text-center text-[#28664A] font-medium whitespace-nowrap">
                        {row.accelerated}
                      </td>
                      <td className="px-4 py-3.5 text-[#566155]">{row.bottleneck}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#FAF9F6] border-t-2 border-[#E7E5DE]">
                    <td className="px-4 py-3.5 text-[#1A1C19] font-semibold">
                      Total Elapsed Cycle
                    </td>
                    <td className="px-4 py-3.5 text-[#566155]">
                      End-to-end from procurement intake to final InfoSec approval
                    </td>
                    <td className="px-4 py-3.5 text-center text-[#BA1A1A] font-semibold whitespace-nowrap">
                      5 to 10 weeks
                    </td>
                    <td className="px-4 py-3.5 text-center text-[#28664A] font-semibold whitespace-nowrap">
                      1 to 2 weeks
                    </td>
                    <td className="px-4 py-3.5 text-[#566155]">
                      Regulated finance/healthcare may add 2–4 weeks for committee sign-off
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: How SaaS Vendors Can Accelerate Reviews */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <div className="space-y-2">
              <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight flex items-center gap-2">
                <ListChecks className="w-6 h-6 text-[#28664A]" />
                How SaaS Vendors Can Accelerate Reviews
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
                You cannot force a Fortune 500 TPRM team to skip their governance gates, but you can eliminate every avoidable vendor-side delay and build immediate auditor confidence on the first submission:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="w-8 h-8 rounded bg-[#EBF3EF] text-[#074E34] flex items-center justify-center mb-3">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5">
                  1. Lead with an NDA-Ready Security Packet
                </h3>
                <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                  Deliver your SOC 2 Type II report, ISO 27001 certificate, pen test executive summary, DPA, and architecture diagram during Qualification—before procurement builds a custom workbook. Proactive disclosure routinely trims questionnaire scope by 50% or more.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="w-8 h-8 rounded bg-[#EBF3EF] text-[#074E34] flex items-center justify-center mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5">
                  2. Automate Questionnaires with Grounded Citations
                </h3>
                <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                  Instead of pulling engineers into manual copy-paste sessions, run{" "}
                  <Link
                    href="/resources/security-questionnaire-automation"
                    className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
                  >
                    citation-grounded questionnaire automation
                  </Link>{" "}
                  against your live SOC 2 and policy documents. Answers arrive with exact page numbers for rapid human sign-off and preserve native Excel formulas.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="w-8 h-8 rounded bg-[#EBF3EF] text-[#074E34] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5">
                  3. Document Compensating Controls Upfront
                </h3>
                <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                  Never leave a gap blank or guess &quot;Yes&quot; with a generic AI chatbot—false claims create contractual misrepresentation risk. State clearly what alternative control reduces the same risk (e.g., encrypted multi-tenant isolation plus continuous vulnerability scanning) and share any roadmap target date.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="w-8 h-8 rounded bg-[#EBF3EF] text-[#074E34] flex items-center justify-center mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5">
                  4. Enforce a 24-Hour Sales Engineering Triage SLA
                </h3>
                <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                  Every week an enterprise vendor security assessment sits unassigned in Slack pushes you behind another vendor in the buyer&apos;s TPRM queue. Equip{" "}
                  <Link
                    href="/solutions/sales-engineering-security-reviews"
                    className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
                  >
                    Sales Engineering teams
                  </Link>{" "}
                  with pre-verified drafts so security leads spend 30 minutes approving rather than 20 hours authoring.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#EBF3EF]/40 border border-[#C2DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-sans text-sm font-semibold text-[#074E34] mb-1">
                  Want to see how citation-grounded evidence matching works?
                </p>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Inspect how Security Review Ready ingests your compliance artifacts, flags unsupported gaps, and enforces human verification with zero public AI model training.
                </p>
              </div>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#28664A] hover:bg-[#1B4D36] text-white text-xs font-medium whitespace-nowrap transition-colors shrink-0"
              >
                Explore Engine Architecture
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* Section 6: Common Frameworks */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <div className="space-y-2">
              <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight flex items-center gap-2">
                <Scale className="w-6 h-6 text-[#28664A]" />
                Common Frameworks in Enterprise Security Evaluations
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
                Enterprise buyers rarely invent security controls from scratch. Nearly all assessment questionnaires, scoring rubrics, and attestation requests map back to four primary frameworks. Knowing what each proves—and where gaps remain—helps you prepare the right evidence before a deal reaches procurement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FRAMEWORKS.map((fw) => (
                <div
                  key={fw.name}
                  className="bg-white border border-[#E7E5DE] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                        {fw.badge}
                      </span>
                      <span className="text-[11px] font-mono text-[#566155]">{fw.issuer}</span>
                    </div>
                    <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2">
                      {fw.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#566155] leading-relaxed mb-4">
                      {fw.summary}
                    </p>
                  </div>
                  <ul className="space-y-2 pt-3 border-t border-[#E7E5DE]/70 text-xs text-[#566155]">
                    {fw.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1">
                    How Framework Mapping Affects Custom Questionnaires (SIG &amp; CAIQ)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                    When a buyer sends a{" "}
                    <Link
                      href="/resources/sig-vs-sig-lite"
                      className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
                    >
                      SIG or SIG Lite spreadsheet
                    </Link>{" "}
                    or a{" "}
                    <Link
                      href="/resources/caiq-v4-guide"
                      className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
                    >
                      CSA CAIQ v4 workbook
                    </Link>
                    , individual questions frequently correspond to multiple overlapping controls across SOC 2, ISO 27001 Annex A, and NIST CSF 2.0. Indexing your underlying audit evidence once lets you answer any buyer&apos;s preferred format consistently without maintaining four separate manual spreadsheets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: FAQ */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions About the Enterprise Security Review Process
            </h2>
            <div className="space-y-5 text-sm">
              {FAQ_ITEMS.map((item, idx) => (
                <div
                  key={item.question}
                  className={
                    idx < FAQ_ITEMS.length - 1
                      ? "border-b border-[#E7E5DE]/60 pb-5"
                      : ""
                  }
                >
                  <h3 className="font-semibold text-[#1A1C19] mb-2">{item.question}</h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: Related Guides */}
          <section className="mb-12">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#28664A]" />
              Related Guides for Clearing Enterprise Security Reviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/resources/security-questionnaire-automation",
                  label: "Security Questionnaire Automation: Practitioner's Guide",
                  desc: "Before/after time benchmarks, architecture pillars, and a 10-point tool checklist.",
                },
                {
                  href: "/resources/ddq-automation",
                  label: "DDQ Automation: Complete Guide",
                  desc: "How to automate vendor, enterprise procurement, and investor Due Diligence Questionnaires.",
                },
                {
                  href: "/resources/vendor-risk-questionnaire",
                  label: "Vendor Risk Questionnaire (VRQ) Guide",
                  desc: "The 6 core control pillars, risk tiering logic, and citation-backed response workflows.",
                },
                {
                  href: "/solutions/sales-engineering-security-reviews",
                  label: "Security Reviews for Sales Engineering",
                  desc: "Stop quarter-end deal slippage and return cited customer assessments in under 24 hours.",
                },
                {
                  href: "/resources/best-security-questionnaire-automation-software",
                  label: "Best Security Questionnaire Automation Software (2026)",
                  desc: "Independent 8-tool comparison across citation fidelity, macro retention, and pricing.",
                },
              ].map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="flex items-start gap-3 p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group"
                >
                  <BookOpen className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1C19] group-hover:text-[#074E34] transition-colors">
                      {guide.label}
                    </p>
                    <p className="text-xs text-[#566155] mt-0.5 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 9: InlineCta */}
          <InlineCta
            source="Enterprise Security Review Process Guide"
            badge="Free 24-Hour Questionnaire Evaluation"
            heading="Have an enterprise security assessment stalling a live deal?"
            description="Send us your buyer's CAIQ, SIG, DDQ, or custom Excel workbook alongside your SOC 2 and security policies. We will return source-cited draft responses ready for human sign-off in under 24 hours—free for your first review."
            buttonText="Run My Assessment Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
