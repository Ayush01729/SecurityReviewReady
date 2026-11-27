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
  Key,
  AlertTriangle,
  RotateCcw,
  Users,
  HelpCircle,
  BookOpen,
  FileCheck2,
  Layers,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security Questionnaire Response Template [Free 2026]",
  description:
    "Free security questionnaire response template with 30 ready-to-use answers across 6 control domains, bracketed customization fields, and SOC 2/ISO 27001 evidence citations.",
  alternates: {
    canonical: "/resources/security-questionnaire-response-template",
  },
  openGraph: {
    title:
      "Security Questionnaire Response Template: 30 Ready-to-Use Answers by Control Domain",
    description:
      "Copy-and-customize vendor questionnaire response template covering Access Control, Data Encryption, Incident Response, Business Continuity, Compliance, and Vendor Management.",
    url: "https://securityreviewready.com/resources/security-questionnaire-response-template",
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
      "name": "Security Questionnaire Response Template",
      "item": "https://securityreviewready.com/resources/security-questionnaire-response-template",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/resources/security-questionnaire-response-template#article",
  "headline":
    "Security Questionnaire Response Template: 30 Ready-to-Use Answers by Control Domain",
  "description":
    "A practical security assessment response template and vendor questionnaire response template featuring 30 ready-to-use answers across six control domains with evidence citations.",
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
  "mainEntityOfPage":
    "https://securityreviewready.com/resources/security-questionnaire-response-template",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a security questionnaire response template?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A security questionnaire response template is a standardized library of pre-approved, audit-aligned answers organized by security control domain (such as access control, encryption, incident response, and vendor management). It includes bracketed fields for company-specific values and pairs each statement with the exact SOC 2, ISO 27001, or internal policy artifact needed to substantiate the claim.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I customize a vendor questionnaire response template for my company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Replace every bracketed variable—such as your identity provider, encryption cipher, breach notification SLA, RTO/RPO targets, and audit coverage dates—with facts verified against your live infrastructure and signed legal agreements like your DPA. If your team does not support a requested control, replace the affirmative draft with a direct 'No' or 'Compensating Control' explanation.",
      },
    },
    {
      "@type": "Question",
      "name": "Can a security assessment response template replace a SOC 2 Type II report?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A response template accelerates answering enterprise buyer spreadsheets and custom RFPs, whereas a SOC 2 Type II report provides independent third-party attestation of control effectiveness over time. Most enterprise procurement teams request both: they review your SOC 2 Type II report and require completed answers for company-specific architecture, subprocessor, and SLA questions.",
      },
    },
    {
      "@type": "Question",
      "name": "How can teams automate filling out security questionnaires from approved templates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manual template copy-pasting breaks down as policies evolve and multi-tab Excel workbooks scale. Security Review Ready indexes your SOC 2 reports, ISO 27001 certificates, policies, and approved template library once, then automatically maps incoming spreadsheets to grounded responses with paragraph and page citations for rapid human approval.",
      },
    },
  ],
};

interface TemplateItem {
  num: string;
  code: string;
  question: string;
  answer: string;
  evidence: string;
}

interface DomainGroup {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  items: TemplateItem[];
}

const RESPONSE_DOMAINS: DomainGroup[] = [
  {
    id: "access-control",
    title: "1. Access Control (Templates 01–05)",
    shortTitle: "Access Control",
    summary:
      "Covers multi-factor authentication (MFA), least-privilege production access, offboarding revocation SLAs, quarterly access reviews, and customer SSO/SAML controls.",
    items: [
      {
        num: "01",
        code: "ACC-01",
        question:
          "Is multi-factor authentication (MFA) strictly enforced for all employees, contractors, and administrators?",
        answer:
          "Yes. Multi-factor authentication (MFA) is mandatory for 100% of [employees and contractors] across our corporate identity provider ([Okta / Microsoft Entra ID / Google Workspace]), source code repositories, and cloud consoles ([AWS / GCP / Azure]). Production administrative access requires phishing-resistant [FIDO2/WebAuthn hardware keys or TOTP authenticators]; SMS-based MFA is disabled for privileged access.",
        evidence:
          "Access Control Policy (Section [X.X]), Identity Provider MFA Policy Export, and SOC 2 Type II CC6.1 / ISO 27001 A.8.5.",
      },
      {
        num: "02",
        code: "ACC-02",
        question:
          "How do you enforce Role-Based Access Control (RBAC) and the Principle of Least Privilege in production?",
        answer:
          "Production access is governed by Role-Based Access Control (RBAC) aligned to job function and provisioned via [approval workflow, e.g., Jira / Okta Access Requests]. Engineers do not retain standing write access to live customer databases; elevated troubleshooting requires [just-in-time bastion elevation] with peer/manager approval and automatic session expiration after [4–8 hours].",
        evidence:
          "Least Privilege & Production Access Standard (Section [X.X]), RBAC Role Matrix, and SOC 2 Type II CC6.3.",
      },
      {
        num: "03",
        code: "ACC-03",
        question:
          "What is your process and SLA for revoking user access when an employee or contractor is terminated?",
        answer:
          "Upon termination notice from [HRIS, e.g., Rippling / Workday], automated SCIM deprovisioning revokes SSO sessions, cloud console access, and corporate SaaS credentials within [1 hour for involuntary terminations / 24 hours for standard departures]. API tokens, SSH keys, and physical office badges are deactivated on the same schedule.",
        evidence:
          "Employee Offboarding SOP (Section [X.X]), IdP Deprovisioning Logs, and SOC 2 Type II CC6.2 / ISO 27001 A.5.18.",
      },
      {
        num: "04",
        code: "ACC-04",
        question:
          "How frequently do you conduct formal user access reviews, and which systems are included?",
        answer:
          "Formal user access reviews are conducted [quarterly / every 90 days] across all in-scope production cloud accounts, identity providers, code repositories, and customer data stores. System owners certify every active privilege against current role requirements and remediate excess access within [5 business days].",
        evidence:
          "Quarterly User Access Review Sign-Off Log ([Q3/Q4 2026]) and SOC 2 Type II CC6.2 / CC6.3.",
      },
      {
        num: "05",
        code: "ACC-05",
        question:
          "Does your platform support Single Sign-On (SSO), SAML 2.0/OIDC, and configurable session timeouts for customers?",
        answer:
          "Yes. [Enterprise / All] customer plans support federated Single Sign-On via [SAML 2.0 and OIDC] compatible with major enterprise identity providers ([Okta, Entra ID, Ping Identity, Google Workspace]). Workspace administrators can enforce idle session timeouts (default [60 minutes / 8 hours]), require IdP-level MFA, and automate user lifecycle sync via [SCIM 2.0].",
        evidence:
          "Customer SSO & Authentication Configuration Guide and Application Security Architecture Brief.",
      },
    ],
  },
  {
    id: "data-encryption",
    title: "2. Data Encryption (Templates 06–10)",
    shortTitle: "Data Encryption",
    summary:
      "Covers encryption at rest, TLS 1.3 in transit, KMS/HSM key lifecycle management, logical multi-tenant isolation, and end-of-contract data disposal.",
    items: [
      {
        num: "06",
        code: "ENC-01",
        question:
          "Is customer data encrypted at rest, and which cryptographic standard is enforced?",
        answer:
          "Yes. All customer data at rest—including primary databases ([PostgreSQL / RDS]), caches, search indexes, object storage ([S3 / GCS]), block volumes, and backups—is encrypted using [AES-256 (AES-256-GCM)]. Unencrypted storage resources containing customer records are prevented via automated cloud organization guardrails.",
        evidence:
          "Cryptography & Data Protection Policy (Section [X.X]), Cloud Storage Encryption Audit Export, and SOC 2 Type II CC6.6 / ISO 27001 A.8.24.",
      },
      {
        num: "07",
        code: "ENC-02",
        question:
          "How is customer data protected in transit over public and internal networks?",
        answer:
          "All external web, API, and webhook endpoints enforce [TLS 1.3 (with TLS 1.2 fallback)] using strong AEAD cipher suites, HSTS, and automatic HTTP-to-HTTPS redirection. Legacy protocols (SSLv3, TLS 1.0, TLS 1.1) and weak ciphers are disabled at the edge. Internal service-to-service traffic uses [mTLS / TLS 1.2+].",
        evidence:
          "Transport Security Configuration Standard, External SSL Labs Scan ([Grade A / Date]), and SOC 2 Type II CC6.7.",
      },
      {
        num: "08",
        code: "ENC-03",
        question:
          "How are encryption keys generated, protected, and rotated across your environment?",
        answer:
          "Cryptographic keys are generated and managed within [AWS KMS / Google Cloud KMS / Azure Key Vault] backed by [FIPS 140-2 Level 3 / FIPS 140-3] Hardware Security Modules (HSMs). Key encryption keys rotate automatically every [365 days], key administration requires [least-privilege IAM / multi-party approval], and application secrets reside in [AWS Secrets Manager / HashiCorp Vault].",
        evidence:
          "Cryptographic Key Management Lifecycle Policy (Section [X.X]) and KMS Automatic Rotation Configuration Evidence.",
      },
      {
        num: "09",
        code: "ENC-04",
        question:
          "How do you ensure logical data isolation between customer tenants in production and non-production environments?",
        answer:
          "Customer records are logically segregated via [tenant-scoped identifiers (tenant_id) enforced by database Row-Level Security (RLS) and API authorization middleware, with optional dedicated schemas/encryption keys]. Automated test suites verify tenant isolation on every build, and production customer data is strictly prohibited from development and staging environments.",
        evidence:
          "Multi-Tenant Architecture Design Document (Section [X.X]), Environment Isolation Policy, and SOC 2 Type II CC6.1.",
      },
      {
        num: "10",
        code: "ENC-05",
        question:
          "How is customer data securely deleted or sanitized upon contract termination?",
        answer:
          "Upon contract termination or verified customer deletion request, active customer records are purged from primary databases, caches, and search indexes within [30 calendar days]. Encrypted snapshots in backup archives are overwritten through standard retention expiration within [60–90 calendar days], and written confirmation of deletion is issued upon request.",
        evidence:
          "Data Retention & Secure Disposal Policy (Section [X.X]), Customer Offboarding SOP, and DPA Section [X].",
      },
    ],
  },
  {
    id: "incident-response",
    title: "3. Incident Response (Templates 11–15)",
    shortTitle: "Incident Response",
    summary:
      "Covers Incident Response Plan governance, contractual breach notification SLAs, SIEM log retention, vulnerability remediation SLAs, and penetration testing.",
    items: [
      {
        num: "11",
        code: "INC-01",
        question:
          "Do you maintain a formal Incident Response Plan (IRP), and how regularly is it tested?",
        answer:
          "Yes. [Company Name] maintains a documented Incident Response Plan aligned with [NIST SP 800-61 / ISO 27035] defining severity classifications, containment procedures, evidence preservation, and escalation paths. The plan is tested at least [annually] via cross-functional tabletop simulations involving [Security, Engineering, Legal, and Executive Leadership].",
        evidence:
          "Incident Response Plan (v[X.X]), Tabletop Exercise Summary ([Month/Year]), and SOC 2 Type II CC7.3 / CC7.4.",
      },
      {
        num: "12",
        code: "INC-02",
        question:
          "What is your contractual timeframe for notifying customers of a confirmed security breach?",
        answer:
          "In the event of a confirmed security incident impacting customer confidential or personal data, [Company Name] notifies affected customers in writing without undue delay and no later than [24 / 48 / 72] hours after confirmation. Notices detail the incident nature, impacted scope, remediation measures, and a designated security contact.",
        evidence:
          "Data Processing Addendum (DPA Section [X]), Master Services Agreement Security Exhibit, and Breach Notification Runbook.",
      },
      {
        num: "13",
        code: "INC-03",
        question:
          "How do you collect, retain, and monitor security audit logs to detect threats?",
        answer:
          "Authentication, API access, database audit, container runtime, and cloud control-plane logs stream continuously to a centralized SIEM ([Datadog Cloud SIEM / Splunk / CrowdStrike LogScale]). Security logs are retained in immutable, tamper-evident storage for a minimum of [12 months / 365 days] with 24/7 automated alerting and a target Mean Time to Detect (MTTD) under [15–30 minutes].",
        evidence:
          "Logging & Monitoring Policy (Section [X.X]), SIEM Immutability & Retention Config, and SOC 2 Type II CC7.2.",
      },
      {
        num: "14",
        code: "INC-04",
        question:
          "What automated vulnerability scanning controls and patching SLAs do you enforce?",
        answer:
          "We run continuous dependency, container image, and cloud infrastructure scanning using [Snyk / Trivy / Wiz] with CI/CD gates that block builds containing unmitigated critical CVEs. Patch remediation SLAs follow CVSS severity: Critical (9.0–10.0) within [48 hours / 7 days], High (7.0–8.9) within [14–30 days], Medium within [30–60 days], and Low within [90 days].",
        evidence:
          "Vulnerability & Patch Management Policy (Section [X.X]), CI/CD Security Scan Policy, and SOC 2 Type II CC7.1.",
      },
      {
        num: "15",
        code: "INC-05",
        question:
          "How frequently do you perform independent third-party penetration testing?",
        answer:
          "An accredited independent cybersecurity firm ([Firm Name, e.g., Cobalt / Bishop Fox / NCC Group]) conducts grey-box application and API penetration testing at least [annually] and after major architectural releases. Our latest assessment was completed in [Month/Year]; all Critical and High findings were remediated and re-verified, and the executive summary letter is available under [NDA / Trust Center].",
        evidence:
          "Annual Third-Party Penetration Test Attestation Letter ([Date]) and Vulnerability Remediation Log.",
      },
    ],
  },
  {
    id: "business-continuity",
    title: "4. Business Continuity (Templates 16–20)",
    shortTitle: "Business Continuity",
    summary:
      "Covers BC/DR plans and failover drills, contractual RTO and RPO targets, immutable backups, restoration testing, and multi-AZ availability.",
    items: [
      {
        num: "16",
        code: "BCP-01",
        question:
          "Do you maintain a Business Continuity and Disaster Recovery (BC/DR) plan, and how often is it tested?",
        answer:
          "Yes. [Company Name] maintains a formal Business Continuity and Disaster Recovery (BC/DR) Plan detailing failover runbooks, workforce continuity, and critical infrastructure recovery. Full disaster recovery failover exercises are performed at least [annually] (last completed [Month/Year]), with post-exercise findings tracked to completion.",
        evidence:
          "Business Continuity & Disaster Recovery Plan (v[X.X]), Annual DR Test Report ([Date]), and SOC 2 Type II A1.2 / A1.3.",
      },
      {
        num: "17",
        code: "BCP-02",
        question:
          "What are your defined Recovery Time Objective (RTO) and Recovery Point Objective (RPO) targets?",
        answer:
          "For Tier-1 production services and customer databases, our architecture targets a Recovery Time Objective (RTO) of [4 hours / < 4 hours] and a Recovery Point Objective (RPO) of [1 hour / < 15 minutes]. Observed RTO and RPO metrics from scheduled failover exercises are documented in our annual DR test summary.",
        evidence:
          "BC/DR Plan SLA Matrix (Section [X.X]) and Latest Failover Exercise Timing Record.",
      },
      {
        num: "18",
        code: "BCP-03",
        question:
          "How frequently are production databases backed up, and how are backups protected against tampering?",
        answer:
          "Production databases execute continuous Write-Ahead Log (WAL) archiving alongside automated [daily / hourly] encrypted snapshots replicated across distinct cloud regions ([e.g., us-east-1 to us-west-2]). Backups are encrypted with AES-256, stored with immutable/object-lock protections against ransomware deletion, and retained for [30–35 days].",
        evidence:
          "Data Backup & Recovery Standard (Section [X.X]), Cloud Backup Immutability Configuration, and SOC 2 Type II A1.2.",
      },
      {
        num: "19",
        code: "BCP-04",
        question:
          "Do you regularly test backup restoration to confirm data integrity?",
        answer:
          "Yes. Backup restoration testing is performed [quarterly / monthly] in an isolated staging environment using automated restore validation scripts. Schema integrity, checksums, and sample application workflows are verified prior to sign-off by [Infrastructure / Security Leadership].",
        evidence:
          "Quarterly Backup Restoration Verification Log ([Q3/Q4 2026]) and SOC 2 Type II CC9.1 / A1.2.",
      },
      {
        num: "20",
        code: "BCP-05",
        question:
          "What redundancy and availability controls prevent single points of failure in production?",
        answer:
          "Production workloads run across at least [3 cloud Availability Zones] using redundant load balancers, auto-scaling compute groups, and multi-AZ database replicas with automated failover. Over the trailing 12 months, platform uptime exceeded [99.95%], backed by a [99.9%] uptime SLA and public status monitoring at [status.yourcompany.com].",
        evidence:
          "High-Availability Architecture Diagram, Status Page Uptime Record, and MSA SLA Schedule.",
      },
    ],
  },
  {
    id: "compliance-certs",
    title: "5. Compliance & Certs (Templates 21–25)",
    shortTitle: "Compliance & Certs",
    summary:
      "Covers SOC 2 Type II and ISO 27001 certifications, ISMS policy governance, GDPR/CCPA privacy compliance, workforce screening/training, and AI data governance.",
    items: [
      {
        num: "21",
        code: "CMP-01",
        question:
          "What active compliance certifications or independent security audit reports do you maintain?",
        answer:
          "[Company Name] holds an active [SOC 2 Type II] attestation report covering [Security, Availability, and Confidentiality] for the audit period [Month Year – Month Year], audited by [CPA Firm Name] with [zero/documented] exceptions. [We also maintain ISO/IEC 27001:2022 certification (#XXXX, valid through Month Year).] Reports and bridge letters are available under NDA via [Trust Center URL].",
        evidence:
          "SOC 2 Type II Audit Report, Bridge Letter (if applicable), and ISO/IEC 27001:2022 Certificate.",
      },
      {
        num: "22",
        code: "CMP-02",
        question:
          "Do you maintain a documented Information Security Policy reviewed and approved by leadership?",
        answer:
          "Yes. Our Information Security Management System (ISMS) and supporting policy suite—covering access control, encryption, secure SDLC, incident response, and acceptable use—are reviewed and formally approved by [the CISO / CTO / Security Committee] at least [annually] (last approved [Month Year]) and acknowledged by all employees upon hire and annually.",
        evidence:
          "Information Security Policy Manual (v[X.X]), Executive Sign-Off Record, and Policy Acknowledgment Audit Log.",
      },
      {
        num: "23",
        code: "CMP-03",
        question:
          "How do you support GDPR, CCPA/CPRA, data residency, and cross-border data transfer compliance?",
        answer:
          "[Company Name] operates as a GDPR Data Processor and CCPA Service Provider. We execute a standard Data Processing Addendum (DPA) incorporating [EU Standard Contractual Clauses (SCCs) / UK Addendum / EU-US Data Privacy Framework], fulfill data subject access and erasure requests within [30 days], and host customer data in designated [US / EU] cloud regions ([AWS us-east-1 / eu-central-1]).",
        evidence:
          "Standard Customer DPA, Privacy Policy, Data Residency Architecture Statement, and ROPA Register Summary.",
      },
      {
        num: "24",
        code: "CMP-04",
        question:
          "Are pre-employment background checks and ongoing security awareness training mandatory for all staff?",
        answer:
          "Yes. All employees and contractors undergo third-party [criminal, identity, and employment] background screening prior to receiving system access (where legally permitted). Personnel complete mandatory security and privacy awareness training within [30 days] of hire and [annually] thereafter, supplemented by [quarterly] simulated phishing exercises.",
        evidence:
          "HR Background Screening Policy, Security Training Completion Metrics ([99–100%]), and SOC 2 Type II CC1.4 / CC2.2.",
      },
      {
        num: "25",
        code: "CMP-05",
        question:
          "If your product uses AI or machine learning, is customer data ever used to train shared or third-party models?",
        answer:
          "[No.] Customer data—including uploaded questionnaires, compliance policies, and prompts—is strictly tenant-isolated and is never used to train, fine-tune, or improve shared or foundation AI models. Any third-party model APIs operate under [enterprise Zero Data Retention (ZDR) agreements] that contractually prohibit training and payload retention.",
        evidence:
          "AI Governance & Data Usage Policy (Section [X.X]), Enterprise LLM ZDR Addendum, and Product Privacy Architecture Brief.",
      },
    ],
  },
  {
    id: "vendor-management",
    title: "6. Vendor Management (Templates 26–30)",
    shortTitle: "Vendor Management",
    summary:
      "Covers pre-onboarding third-party due diligence, subprocessor directories, contractual DPA flow-down terms, annual vendor reassessments, and supplier continuity.",
    items: [
      {
        num: "26",
        code: "VND-01",
        question:
          "Do you have a Third-Party Risk Management (TPRM) program to assess vendors prior to onboarding?",
        answer:
          "Yes. Under our Third-Party Risk Management Policy, all new vendors are risk-tiered ([Tier 1 Critical to Tier 3 Low]) based on data access and operational criticality prior to contract execution. Vendors handling customer data must pass a security review validating [SOC 2 Type II or ISO 27001] attestation, encryption, and breach notification terms before onboarding.",
        evidence:
          "Third-Party Vendor Risk Management Policy (Section [X.X]), Vendor Risk Tiering Criteria, and SOC 2 Type II CC9.2.",
      },
      {
        num: "27",
        code: "VND-02",
        question:
          "Do you maintain a current subprocessor list, and how are customers notified of subprocessor changes?",
        answer:
          "Yes. Our subprocessor inventory—listing each vendor name, service purpose, and data processing region—is published at [trust.yourcompany.com/subprocessors]. Customers can subscribe to change notifications and receive at least [30 calendar days] prior written notice before a new subprocessor processes customer data, with a contractual right to object.",
        evidence:
          "Public Subprocessor Register URL, Automated Change Notification Workflow, and DPA Subprocessor Clause.",
      },
      {
        num: "28",
        code: "VND-03",
        question:
          "Do your contracts with subprocessors impose binding data protection and security obligations?",
        answer:
          "Yes. Before transferring or granting access to customer data, [Company Name] executes written agreements and Data Processing Addendums (DPAs) with every subprocessor imposing confidentiality, purpose limitation, security safeguards, and incident reporting obligations no less protective than those in our customer agreements.",
        evidence:
          "Vendor Contracting Checklist and Tier-1 Subprocessor Executed DPA Tracking Log.",
      },
      {
        num: "29",
        code: "VND-04",
        question:
          "How often do you reassess existing critical third-party vendors and cloud providers?",
        answer:
          "Tier-1 critical vendors and subprocessors undergo formal reassessment at least [annually], including verification of updated [SOC 2 Type II / ISO 27001] reports, bridge letters, and penetration test attestations, alongside ongoing monitoring for security advisories or material compliance changes.",
        evidence:
          "Annual Vendor Security Reassessment Register ([2026]), Vendor Review Worksheets, and SOC 2 Type II CC9.2.",
      },
      {
        num: "30",
        code: "VND-05",
        question:
          "How do you manage continuity and concentration risk if a critical subprocessor experiences an outage?",
        answer:
          "Critical third-party dependencies are documented in our Business Impact Analysis with dedicated contingency plans. Primary cloud infrastructure relies on [multi-AZ / multi-region architectures], while Tier-1 external APIs have documented [degraded-mode workflows or secondary failover vendors] to maintain core service continuity.",
        evidence:
          "Business Impact Analysis (BIA), BC/DR Third-Party Dependency Appendix, and SOC 2 Type II CC9.2 / A1.2.",
      },
    ],
  },
];

const CUSTOMIZATION_VARIABLES = [
  {
    variable: "[Okta / Entra ID / Google Workspace]",
    whereToVerify: "Corporate IdP admin console & SOC 2 System Description (Section III)",
    commonPitfall: "Claiming FIDO2 enforcement when contractor accounts still allow SMS fallback.",
  },
  {
    variable: "[24 / 48 / 72] hours breach notice",
    whereToVerify: "Signed Customer DPA & Master Services Agreement (MSA)",
    commonPitfall: "Writing 24 hours in a spreadsheet when your legal DPA guarantees 48 or 72 hours.",
  },
  {
    variable: "[4 hours] RTO / [1 hour] RPO",
    whereToVerify: "Latest annual Disaster Recovery failover test report",
    commonPitfall: "Quoting theoretical SLA targets never validated during an actual database restore.",
  },
  {
    variable: "[48 hrs / 7 days] critical patch SLA",
    whereToVerify: "Vulnerability Management Policy & Jira remediation metrics",
    commonPitfall: "Overpromising a 24-hour critical patch SLA that engineering cannot consistently meet.",
  },
  {
    variable: "[Month Year – Month Year] audit period",
    whereToVerify: "SOC 2 Type II Report cover page / ISO 27001 certificate",
    commonPitfall: "Citing an expired audit window without attaching an auditor-issued bridge letter.",
  },
];

const FAQS = [
  {
    q: "What is a security questionnaire response template?",
    a: "A security questionnaire response template is a standardized library of pre-approved, audit-aligned answers organized by security control domain (such as access control, encryption, incident response, and vendor management). It includes bracketed fields for company-specific values and pairs each statement with the exact SOC 2, ISO 27001, or internal policy artifact needed to substantiate the claim.",
  },
  {
    q: "How do I customize a vendor questionnaire response template for my company?",
    a: "Replace every bracketed variable—such as your identity provider, encryption cipher, breach notification SLA, RTO/RPO targets, and audit coverage dates—with facts verified against your live infrastructure and signed legal agreements like your DPA. If your team does not support a requested control, replace the affirmative draft with a direct 'No' or 'Compensating Control' explanation.",
  },
  {
    q: "Can a security assessment response template replace a SOC 2 Type II report?",
    a: "No. A response template accelerates answering enterprise buyer spreadsheets and custom RFPs, whereas a SOC 2 Type II report provides independent third-party attestation of control effectiveness over time. Most enterprise procurement teams request both: they review your SOC 2 Type II report and require completed answers for company-specific architecture, subprocessor, and SLA questions.",
  },
  {
    q: "How can teams automate filling out security questionnaires from approved templates?",
    a: "Manual template copy-pasting breaks down as policies evolve and multi-tab Excel workbooks scale. Security Review Ready indexes your SOC 2 reports, ISO 27001 certificates, policies, and approved template library once, then automatically maps incoming spreadsheets to grounded responses with paragraph and page citations for rapid human approval.",
  },
];

const RELATED_GUIDES = [
  {
    href: "/resources/security-questionnaire-examples",
    label: "50 Security Questionnaire Examples & Answers",
    desc: "35 vendor Q&As with auditor intent plus 20 buyer-side evaluation questions.",
  },
  {
    href: "/resources/how-to-answer-security-questionnaires-fast",
    label: "How to Answer Security Questionnaires Fast",
    desc: "The 5-step playbook and 6-document evidence stack for rapid turnaround.",
  },
  {
    href: "/resources/ddq-automation",
    label: "DDQ Automation: Complete Guide",
    desc: "Eliminate 40-hour due diligence bottlenecks with citation-grounded workflows.",
  },
  {
    href: "/resources/vendor-security-questionnaire-guide",
    label: "Vendor Security Questionnaire Guide",
    desc: "Control domains, buyer scoring rubrics, and red flags that stall deals.",
  },
  {
    href: "/resources/security-questionnaire-automation",
    label: "Security Questionnaire Automation Guide",
    desc: "Time breakdowns, tool evaluation checklist, and Excel formula preservation.",
  },
];

export default function SecurityQuestionnaireResponseTemplatePage() {
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
              Response Template
            </span>
          </nav>

          {/* Article Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Response Template Library
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                18 min read
              </span>
              <span>Published November 27, 2026</span>
              <span>By Security Review Ready Team</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#1A1C19] leading-tight">
              Security Questionnaire Response Template: 30 Ready-to-Use Answers by Control Domain
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] leading-relaxed">
              A complete, copy-and-customize{" "}
              <strong className="text-[#1A1C19]">
                security questionnaire response template
              </strong>{" "}
              for B2B SaaS teams, sales engineers, and security leads. Includes 30
              audit-aligned answers across six core control domains, bracketed
              customization variables, and exact evidence references for{" "}
              <a
                href="https://cloudsecurityalliance.org/research/cloud-controls-matrix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                CSA CAIQ
              </a>
              ,{" "}
              <a
                href="https://sharedassessments.org/sig/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34]"
              >
                SIG
              </a>
              , and custom enterprise spreadsheets.
            </p>

            {/* Section 1: TL;DR Box */}
            <section
              aria-label="TL;DR Summary"
              className="mt-6 p-5 rounded-xl bg-[#EBF3EF]/50 border border-[#C2DDD0] text-sm text-[#1A1C19]"
            >
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#074E34] mb-1.5 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#28664A]" />
                TL;DR — Security Assessment Response Template Summary
              </div>
              <p className="text-[#566155] leading-relaxed">
                This <strong className="text-[#1A1C19]">vendor questionnaire response template</strong>{" "}
                gives your team 30 standardized answers spanning Access Control,
                Data Encryption, Incident Response, Business Continuity,
                Compliance &amp; Certifications, and Vendor Management. Replace
                each <code className="px-1.5 py-0.5 rounded bg-white border border-[#E7E5DE] font-mono text-xs text-[#074E34]">[bracketed field]</code>{" "}
                with verified facts from your SOC 2 Type II report, DPA, and
                internal policies, cite the listed evidence artifact, and
                eliminate inconsistent spreadsheet replies across deals. Need to
                populate an entire workbook automatically?{" "}
                <Link
                  href="/how-it-works"
                  className="text-[#074E34] font-medium underline underline-offset-2"
                >
                  See how Security Review Ready grounds every cell in citations
                </Link>
                .
              </p>
            </section>
          </header>

          {/* Section 2: Why You Need a Security Questionnaire Response Template */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E7E5DE] mb-12 shadow-sm">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#28664A]" />
              Why You Need a Security Questionnaire Response Template
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Enterprise procurement teams rarely reject vendors over missing
              edge-case features—they stall deals when security answers are slow,
              vague, or inconsistent with signed contracts. Maintaining a
              structured{" "}
              <strong className="text-[#1A1C19]">
                security assessment response template
              </strong>{" "}
              turns every inbound questionnaire from an engineering fire drill
              into a repeatable review workflow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block mb-1.5 text-sm">
                  1. Stop Conflicting Claims
                </strong>
                <span className="text-[#566155] leading-relaxed block">
                  Ad-hoc copy-pasting across Slack leads to contradictory SLA
                  promises (such as quoting a 24-hour breach window in an Excel
                  cell when your DPA states 72 hours).
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block mb-1.5 text-sm">
                  2. Cut Deal Slippage by Days
                </strong>
                <span className="text-[#566155] leading-relaxed block">
                  About 80% of questions across{" "}
                  <Link
                    href="/resources/caiq-v4-guide"
                    className="text-[#28664A] underline underline-offset-2"
                  >
                    CAIQ v4
                  </Link>
                  ,{" "}
                  <Link
                    href="/resources/sig-vs-sig-lite"
                    className="text-[#28664A] underline underline-offset-2"
                  >
                    SIG Lite
                  </Link>
                  , and custom Excel sheets map directly to the same 30 core
                  controls. Pre-approved templates remove first-draft bottlenecks.
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block mb-1.5 text-sm">
                  3. Replace Fluff with Proof
                </strong>
                <span className="text-[#566155] leading-relaxed block">
                  Auditors flag phrases like &ldquo;enterprise-grade
                  security.&rdquo; Pairing direct answers with SOC 2 control IDs
                  and policy section numbers passes third-party risk reviews on
                  the first pass.
                </span>
              </div>
            </div>
          </section>

          {/* Section 3: 30 Response Templates by Control Domain */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-[#1A1C19] tracking-tight mb-3">
              30 Response Templates by Control Domain
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              Jump directly to any of the six core domains below. Each entry in
              this{" "}
              <strong className="text-[#1A1C19]">
                vendor questionnaire response template
              </strong>{" "}
              provides the standard buyer question, a ready-to-use answer
              template with bracketed fields, and the specific evidence document
              to cite. Need raw spreadsheet layouts too? Download our{" "}
              <Link
                href="/resources/templates/vendor-security-questionnaire-excel"
                className="text-[#28664A] underline underline-offset-2 font-medium"
              >
                Vendor Security Questionnaire Excel Template
              </Link>
              .
            </p>

            {/* Quick Domain Jump Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {[
                {
                  id: "access-control",
                  label: "Access Control",
                  count: "Items 01–05",
                  icon: <Key className="w-4 h-4 text-[#28664A]" />,
                },
                {
                  id: "data-encryption",
                  label: "Data Encryption",
                  count: "Items 06–10",
                  icon: <Lock className="w-4 h-4 text-[#28664A]" />,
                },
                {
                  id: "incident-response",
                  label: "Incident Response",
                  count: "Items 11–15",
                  icon: <AlertTriangle className="w-4 h-4 text-[#28664A]" />,
                },
                {
                  id: "business-continuity",
                  label: "Business Continuity",
                  count: "Items 16–20",
                  icon: <RotateCcw className="w-4 h-4 text-[#28664A]" />,
                },
                {
                  id: "compliance-certs",
                  label: "Compliance & Certs",
                  count: "Items 21–25",
                  icon: <ShieldCheck className="w-4 h-4 text-[#28664A]" />,
                },
                {
                  id: "vendor-management",
                  label: "Vendor Management",
                  count: "Items 26–30",
                  icon: <Users className="w-4 h-4 text-[#28664A]" />,
                },
              ].map((domain) => (
                <a
                  key={domain.id}
                  href={`#${domain.id}`}
                  className="bg-white rounded-lg border border-[#E7E5DE] hover:border-[#28664A] p-3.5 transition-colors flex items-center gap-2.5 shadow-sm group"
                >
                  <div className="shrink-0">{domain.icon}</div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-[#1A1C19] group-hover:text-[#074E34] block leading-tight">
                      {domain.label}
                    </span>
                    <span className="text-[11px] font-mono text-[#566155]">
                      {domain.count}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Domain Groups & 30 Template Cards */}
            <div className="space-y-12">
              {RESPONSE_DOMAINS.map((domain) => (
                <div key={domain.id} id={domain.id} className="scroll-mt-24">
                  <div className="border-b border-[#E7E5DE] pb-3 mb-6">
                    <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#1A1C19]">
                      {domain.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#566155] mt-1 leading-relaxed">
                      {domain.summary}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {domain.items.map((item) => (
                      <div
                        key={item.code}
                        className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-7 shadow-sm"
                      >
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="font-mono text-xs font-bold text-[#074E34] px-2 py-0.5 rounded bg-[#EBF3EF] border border-[#C2DDD0]">
                            Item {item.num}
                          </span>
                          <span className="font-mono text-xs text-[#566155] uppercase tracking-wider">
                            {domain.shortTitle} &middot; {item.code}
                          </span>
                        </div>

                        <h4 className="font-sans text-base sm:text-lg font-semibold text-[#1A1C19] mb-4">
                          &ldquo;{item.question}&rdquo;
                        </h4>

                        <div className="space-y-3 text-xs sm:text-sm">
                          <div className="p-4 rounded-lg bg-[#EBF3EF]/40 border border-[#C2DDD0]">
                            <strong className="text-[#074E34] block mb-1 font-mono text-xs uppercase tracking-wider">
                              Template Answer (Customize Bracketed Fields):
                            </strong>
                            <p className="text-xs sm:text-sm text-[#1A1C19] leading-relaxed">
                              {item.answer}
                            </p>
                          </div>

                          <div className="p-3 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                            <strong className="text-[#1A1C19] block mb-0.5 text-xs">
                              Evidence to Cite:
                            </strong>
                            <span className="text-[#074E34] font-mono text-xs leading-relaxed">
                              {item.evidence}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: How to Customize These Templates */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm space-y-6">
            <div>
              <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#28664A]" />
                How to Customize These Templates
              </h2>
              <p className="text-sm sm:text-base text-[#566155] leading-relaxed">
                Never paste a generic{" "}
                <strong className="text-[#1A1C19]">
                  security questionnaire response template
                </strong>{" "}
                directly into an enterprise procurement workbook without
                verifying your live configuration. Security questionnaires
                frequently become exhibits to your Master Services Agreement
                (MSA), meaning inaccurate claims create contractual liability.
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#566155]">
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block mb-1">
                  Step 1: Lock Down Your Canonical Parameters First
                </strong>
                <p className="leading-relaxed">
                  Before filling out a single row, confirm exact figures with
                  Security, Infrastructure, and Legal: breach notification SLA,
                  RTO/RPO, critical CVE patching SLA, backup retention window,
                  and audit coverage dates. Write them once in a master
                  parameters table so every team member uses identical numbers.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block mb-1">
                  Step 2: Map Every Claim to an Active Evidence File
                </strong>
                <p className="leading-relaxed">
                  Replace placeholder citations like{" "}
                  <code className="px-1 py-0.5 rounded bg-white border border-[#E7E5DE] font-mono text-xs text-[#074E34]">
                    (Section [X.X])
                  </code>{" "}
                  with your real document filenames and control IDs (e.g.,{" "}
                  <code className="px-1 py-0.5 rounded bg-white border border-[#E7E5DE] font-mono text-xs text-[#074E34]">
                    InfoSec-Policy-v3.2.pdf, Section 4.1
                  </code>
                  ). Reviewers trust concise answers backed by an audit-ready
                  reference far more than long, uncited paragraphs.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block mb-1">
                  Step 3: Disclose Control Gaps via Compensating Controls
                </strong>
                <p className="leading-relaxed">
                  If your product does not support a requested control (such as
                  customer-managed encryption keys or single-tenant hosting),
                  change the opener from &ldquo;Yes&rdquo; to &ldquo;No&rdquo;
                  or &ldquo;Compensating Control.&rdquo; State what control you
                  implement instead, how it mitigates the underlying risk, and
                  any scheduled roadmap delivery quarter.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] block mb-1">
                  Step 4: Maintain Short &amp; Long Variants for Spreadsheets
                </strong>
                <p className="leading-relaxed">
                  Many enterprise Excel workbooks enforce strict{" "}
                  <code className="px-1 py-0.5 rounded bg-white border border-[#E7E5DE] font-mono text-xs text-[#074E34]">
                    Yes / No / N/A
                  </code>{" "}
                  data validation dropdowns in Column C and expect brief evidence
                  notes in Column D. Keep a one-sentence summary alongside your
                  detailed narrative so you never break workbook validation rules.
                </p>
              </div>
            </div>

            {/* Common Variables Audit Table */}
            <div>
              <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-3">
                5 High-Risk Template Variables to Verify Before Sending
              </h3>
              <div className="overflow-x-auto rounded-lg border border-[#E7E5DE]">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#FAF9F6] border-b border-[#E7E5DE] text-[#1A1C19]">
                      <th className="py-2.5 px-3 font-semibold">
                        Template Variable
                      </th>
                      <th className="py-2.5 px-3 font-semibold">
                        Where to Verify
                      </th>
                      <th className="py-2.5 px-3 font-semibold">
                        Common Mistake to Avoid
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7E5DE] text-[#566155]">
                    {CUSTOMIZATION_VARIABLES.map((row, idx) => (
                      <tr key={idx} className="bg-white">
                        <td className="py-2.5 px-3 font-mono text-[#074E34] font-medium">
                          {row.variable}
                        </td>
                        <td className="py-2.5 px-3">{row.whereToVerify}</td>
                        <td className="py-2.5 px-3">{row.commonPitfall}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 5: Automating Response Templates with AI-Cited Evidence */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#28664A]" />
              Automating Response Templates with AI-Cited Evidence
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-5">
              A static{" "}
              <strong className="text-[#1A1C19]">
                security assessment response template
              </strong>{" "}
              is an essential starting point—but once your team faces 150-row
              custom Excel workbooks, 261-question{" "}
              <Link
                href="/resources/caiq-v4-guide"
                className="text-[#28664A] underline underline-offset-2"
              >
                CAIQ v4 assessments
              </Link>
              , or multi-tab{" "}
              <Link
                href="/resources/sig-vs-sig-lite"
                className="text-[#28664A] underline underline-offset-2"
              >
                SIG questionnaires
              </Link>{" "}
              every week, manual copy-pasting becomes brittle. Policies change,
              macros break, and generic AI chat tools invent controls you never
              approved.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] flex items-center gap-1.5 mb-1.5">
                  <FileText className="w-4 h-4 text-[#28664A]" />
                  Closed-World Evidence Grounding
                </strong>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Security Review Ready indexes your SOC 2 Type II report, ISO
                  27001 certificate, penetration test summary, DPA, and approved
                  template answers once. Every drafted answer cites the exact
                  source document, section header, and page number—never
                  hallucinated marketing text.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <strong className="text-[#1A1C19] flex items-center gap-1.5 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" />
                  Human Review &amp; Native Excel Export
                </strong>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Missing evidence is flagged explicitly instead of guessed. Your
                  security or sales engineering lead verifies citations with one
                  click and exports directly back into the buyer&rsquo;s native{" "}
                  <code className="px-1 py-0.5 rounded bg-white border border-[#E7E5DE] font-mono text-[11px] text-[#074E34]">
                    .xlsx
                  </code>{" "}
                  workbook with formulas, dropdowns, and macros intact.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 text-[#074E34] hover:text-[#28664A] underline underline-offset-2"
              >
                Explore the Grounded Citation Engine
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-1.5 text-[#074E34] hover:text-[#28664A] underline underline-offset-2"
              >
                Book a Live Walkthrough
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/security"
                className="inline-flex items-center gap-1.5 text-[#074E34] hover:text-[#28664A] underline underline-offset-2"
              >
                Review Our Security &amp; Zero-Training Architecture
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* Section 6: FAQ (4 questions with schema) */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 text-sm">
              {FAQS.map((faq, i) => (
                <div
                  key={faq.q}
                  className={
                    i < FAQS.length - 1
                      ? "border-b border-[#E7E5DE]/60 pb-5"
                      : ""
                  }
                >
                  <h3 className="font-semibold text-[#1A1C19] mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Related Guides */}
          <section className="mb-12">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4">
              Related Guides &amp; Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RELATED_GUIDES.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-start gap-3 p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group"
                >
                  <BookOpen className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1C19] group-hover:text-[#074E34] transition-colors">
                      {link.label}
                    </p>
                    <p className="text-xs text-[#566155] mt-0.5">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 8: Inline CTA */}
          <InlineCta
            source="Security Questionnaire Response Template"
            badge="Automate Your Template Library"
            heading="Turn Your Security Templates into Verified Spreadsheet Answers in 24 Hours"
            description="Upload your customer questionnaire workbook alongside your SOC 2 report and policies. Security Review Ready maps every question to grounded, evidence-cited responses ready for 1-click approval."
            buttonText="Run My Questionnaire Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
