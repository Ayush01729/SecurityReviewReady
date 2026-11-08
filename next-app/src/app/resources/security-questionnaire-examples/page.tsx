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
  title: "50 Security Questionnaire Examples: Questions & Answers for Vendors & Buyers (2026)",
  description:
    "50 real security questionnaire examples with verified answers. Covers vendor responses (access control, encryption, incident response) and 20 buyer questions to ask vendors.",
  alternates: {
    canonical: "/resources/security-questionnaire-examples",
  },
  openGraph: {
    title: "50 Security Questionnaire Examples: Questions & Answers (2026 Guide)",
    description:
      "A complete guide to security questionnaire questions: 35 vendor responses with audit evidence and 20 questions enterprise buyers should ask vendors.",
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
  "headline": "50 Security Questionnaire Examples: Questions and Answers for Vendors and Buyers (2026)",
  "description":
    "Real-world examples of enterprise vendor security questionnaire questions, dissecting auditor intent, evidence requirements, and verified answer wording for both vendors and buyers.",
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
  "dateModified": "2026-11-08",
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
        "text": "Enterprise IT security questionnaires focus on core domains: identity and access control (MFA, bastion hosts), data encryption (AES-256 at rest, TLS 1.3 in transit), vulnerability management (annual penetration testing), incident response (breach notification SLAs), business continuity (backup restoration, RTO/RPO), software development security, and third-party vendor risk.",
      },
    },
    {
      "@type": "Question",
      "name": "What questions should enterprise buyers ask vendors in a security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise buyers should ask vendors about: (1) SOC 2 Type II or ISO 27001 audit coverage dates, (2) data residency and jurisdiction for customer data, (3) subprocessor list and change notification process, (4) breach notification SLA and contractual commitment, (5) penetration test frequency and whether summaries are available under NDA, (6) multi-factor authentication enforcement on production infrastructure, (7) employee background check policy, (8) patch management SLAs by CVSS severity, (9) data deletion process upon contract termination, and (10) AI/ML model training policy regarding customer data.",
      },
    },
    {
      "@type": "Question",
      "name": "How many questions are typically in a vendor security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard questionnaires vary by framework: CSA CAIQ v4 has 261 questions across 17 domains; SIG Lite has approximately 125 questions; SIG Full has over 800 questions; custom enterprise questionnaires typically range from 50 to 200 questions. The most common enterprise custom questionnaires sent to SaaS vendors fall between 80 and 150 questions covering identity, cryptography, vulnerability management, incident response, and third-party risk.",
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
  {
    num: "16",
    domain: "Software Development Security",
    question: "Do your software engineers follow a documented Secure Development Lifecycle (SDLC), and is security integrated into your CI/CD pipeline?",
    intent: "Verifies that security is a first-class concern during software development, not retrofitted after deployment.",
    evidence: "Secure Development Lifecycle Policy and CI/CD Security Gate Configuration.",
    answer: "Yes. We follow a documented Secure Development Lifecycle that includes threat modeling during design, mandatory peer code review for all production changes, and automated SAST (Static Application Security Testing) and dependency vulnerability scanning on every commit via our CI/CD pipeline. Critical findings block deployment until remediated.",
  },
  {
    num: "17",
    domain: "Software Development Security",
    question: "How do you manage and secure API keys, secrets, and service account credentials in your codebase and infrastructure?",
    intent: "Checks whether hardcoded credentials or leaked API keys could expose customer data through compromised source code repositories.",
    evidence: "Secret Management Policy and Vault Configuration Summary.",
    answer: "All application secrets, API tokens, and service credentials are managed exclusively via a dedicated secrets management service (HashiCorp Vault or AWS Secrets Manager). Hardcoded secrets are prohibited and enforced through automated pre-commit hooks and continuous repository scanning. Rotation is automated on a 90-day cycle for service credentials.",
  },
  {
    num: "18",
    domain: "Cloud Infrastructure Security",
    question: "Is your cloud infrastructure provisioned exclusively through Infrastructure as Code (IaC), and are manual changes to production restricted?",
    intent: "Ensures that configuration drift and unauthorized manual changes cannot introduce unreviewed security vulnerabilities.",
    evidence: "Infrastructure as Code Policy and Cloud Change Management Procedure.",
    answer: "Yes. All production cloud resources are provisioned and managed exclusively through version-controlled Infrastructure as Code (Terraform/CDK). Manual console changes to production infrastructure are blocked via IAM policy restrictions. All infrastructure changes undergo automated policy validation and mandatory code review before merging.",
  },
  {
    num: "19",
    domain: "Cloud Infrastructure Security",
    question: "Do you use dedicated, isolated environments for development, staging, and production, and is customer data ever used in non-production environments?",
    intent: "Verifies that production customer data is not exposed to less-secure development or testing environments.",
    evidence: "Environment Isolation Policy Section 2.1.",
    answer: "Yes. We maintain fully isolated, separately credentialed environments for development, staging, and production with no shared access. Customer data is strictly prohibited from non-production environments. Test data is synthetically generated or anonymized through an automated data masking pipeline before use in lower environments.",
  },
  {
    num: "20",
    domain: "Logging & Monitoring",
    question: "Do you maintain centralized security event logs, and what is your log retention policy for detecting and investigating security incidents?",
    intent: "Confirms the organization can forensically investigate security incidents and satisfy regulatory audit trail requirements.",
    evidence: "Logging and Monitoring Policy and SIEM Configuration Summary.",
    answer: "Yes. All infrastructure, application, and authentication events are forwarded to a centralized SIEM (Security Information and Event Management) platform with real-time alerting. Security-relevant logs are retained for a minimum of 12 months in tamper-evident, immutable log storage. Access to raw log data requires privileged authorization and is itself audit-logged.",
  },
  {
    num: "21",
    domain: "Logging & Monitoring",
    question: "Do you have 24/7 security monitoring, and what is your defined mean-time-to-detect (MTTD) a security event?",
    intent: "Evaluates whether threats are caught quickly or whether the organization relies on batch-review processes that leave incidents undetected for days.",
    evidence: "Security Operations Center (SOC) Service Agreement or On-Call Security Runbook.",
    answer: "Yes. Security monitoring operates continuously with automated alerting for critical threat indicators. Anomalous authentication patterns, elevated privilege use, and data exfiltration indicators trigger real-time alerts to on-call security personnel. Our target mean-time-to-detect for high-severity alerts is under 15 minutes.",
  },
  {
    num: "22",
    domain: "GDPR & Data Privacy",
    question: "If you process personal data of EU residents, have you designated a Data Protection Officer (DPO) and implemented GDPR-compliant data processing mechanisms?",
    intent: "Checks regulatory readiness for European customers and partners who face significant GDPR liability through their vendor chain.",
    evidence: "GDPR Compliance Summary, Data Protection Officer Contact, and Data Processing Agreement (DPA).",
    answer: "Yes. Where required by our processing volume and nature of personal data, we have appointed a Data Protection Officer. We execute Data Processing Agreements (DPAs) with all customers processing EU personal data under Article 28. Our legal basis for each processing activity is documented in our Records of Processing Activities (ROPA) register.",
  },
  {
    num: "23",
    domain: "GDPR & Data Privacy",
    question: "How do you handle customer requests to delete or export their personal data, and within what timeframe?",
    intent: "Verifies GDPR Article 17 (right to erasure) and Article 20 (data portability) compliance, as buyers are liable if their vendors cannot honor subject rights requests.",
    evidence: "Data Subject Rights Procedure and Privacy Policy.",
    answer: "Data subject access requests (export) are fulfilled within 30 days of receipt. Deletion requests trigger a verified purge workflow that removes personal data from production databases, backups (within standard backup retention cycle), and any third-party subprocessors within 90 days, with written confirmation provided to the requesting party.",
  },
  {
    num: "24",
    domain: "Change Management",
    question: "What is your change management process for deploying updates to production systems, and how are emergency changes handled?",
    intent: "Evaluates whether production changes are controlled and auditable, reducing risk of outages or unreviewed security regressions.",
    evidence: "Change Management Policy and Production Deployment Runbook.",
    answer: "All standard production deployments require a peer-reviewed pull request, automated test suite passage, and explicit QA sign-off. Emergency changes (hotfixes) require real-time approval from at least one senior engineer and are subject to mandatory post-incident review within 24 hours. All deployments are tracked with full audit logs including deployer identity and timestamp.",
  },
  {
    num: "25",
    domain: "Employee Security & Training",
    question: "Do all employees receive security awareness training, and how frequently is anti-phishing training conducted?",
    intent: "Checks whether human-layer defenses are maintained, as social engineering remains the leading initial access vector in enterprise breaches.",
    evidence: "Security Awareness Training Program Summary and Completion Records.",
    answer: "Yes. All employees complete mandatory security awareness training within their first 30 days of employment, with annual refresher training thereafter. Simulated phishing exercises are conducted at minimum quarterly. Employees who fail simulated phishing tests receive immediate targeted remediation training. Training completion is tracked and reported to security leadership.",
  },
  {
    num: "26",
    domain: "Physical Security",
    question: "What physical security controls are in place at your primary office locations, and how is access to sensitive areas restricted?",
    intent: "Ensures physical access controls complement logical security, preventing unauthorized physical access to hardware or screens containing customer data.",
    evidence: "Physical Security Policy and Office Access Control Configuration.",
    answer: "Office entry requires badged access with individual credentials logged at all entry points. Server room and infrastructure closets require additional authorization beyond standard employee badge access. Visitor access is escorted and logged. CCTV monitoring covers entry points and sensitive areas with footage retained for 90 days.",
  },
  {
    num: "27",
    domain: "Physical Security",
    question: "Is your production infrastructure hosted in a third-party data center, and what are their physical security certifications?",
    intent: "Verifies that the physical hosting environment meets enterprise standards, as most SaaS vendors use cloud providers rather than self-managed data centers.",
    evidence: "Cloud Provider SOC 2 Type II or ISO 27001 Certificate (AWS, GCP, or Azure).",
    answer: "Our production infrastructure is exclusively hosted on major cloud providers (AWS / Google Cloud / Azure) within SOC 2 Type II and ISO 27001 certified data centers. We do not operate physical server infrastructure. The cloud provider physical security certifications are publicly available on their compliance portals and are renewed annually.",
  },
  {
    num: "28",
    domain: "AI & Machine Learning",
    question: "If you use AI or machine learning models in your product, is customer data ever used to train, fine-tune, or improve shared AI models?",
    intent: "Critical for evaluating data contamination risk in AI-era products, where customer data fed into shared models could inadvertently surface in responses to other customers.",
    evidence: "AI and Data Usage Policy or Privacy Policy AI Section.",
    answer: "No. Customer data, including documents uploaded, questionnaire content, and security policy text, is strictly prohibited from being used for training, fine-tuning, or improving any shared or general-purpose AI models. Each customer data is processed in an isolated context and is never shared with other customers or used for model improvement without explicit opt-in consent.",
  },
  {
    num: "29",
    domain: "AI & Machine Learning",
    question: "What measures do you take to prevent AI model outputs (such as LLM-generated responses) from hallucinating or fabricating security claims in documents you produce?",
    intent: "Evaluates quality assurance controls specific to AI-generated content, particularly relevant for vendors that use AI to draft compliance documents, questionnaire answers, or audit summaries.",
    evidence: "AI Quality Assurance Policy and Human Review Verification Process.",
    answer: "Every AI-generated response is verified against source documents before delivery. Our workflow requires a human reviewer to confirm each factual claim maps to a specific evidence document, control number, or policy clause. Outputs that cannot be grounded in verified source material are flagged for manual completion rather than generated speculatively.",
  },
  {
    num: "30",
    domain: "Network Security",
    question: "How is network access to production infrastructure segmented, and do you use a Zero Trust architecture?",
    intent: "Checks whether lateral movement within your network is possible if an attacker compromises one internal system.",
    evidence: "Network Security Architecture Document and Zero Trust Implementation Summary.",
    answer: "Production infrastructure is segmented into isolated network zones with explicit allow-list firewall rules. No implicit trust is granted based on network location. All internal service-to-service communication requires mutual TLS (mTLS) authentication. VPN access to production networks requires both certificate-based authentication and MFA verification.",
  },
  {
    num: "31",
    domain: "Network Security",
    question: "Do you perform regular external attack surface assessments, including subdomain enumeration and exposed port scanning?",
    intent: "Verifies that the organization actively monitors for unintended internet exposure of internal services or development infrastructure.",
    evidence: "Attack Surface Management Scan Reports.",
    answer: "Yes. We conduct external attack surface assessments at minimum quarterly using automated scanning tools to identify exposed services, misconfigured cloud storage, and unintended network exposure. All identified findings are triaged within 48 hours. Critical exposures (such as open administrative ports or publicly accessible databases) are remediated immediately.",
  },
  {
    num: "32",
    domain: "Third-Party & Subprocessor Risk",
    question: "If a critical subprocessor or cloud service experiences an outage, how does this affect your SLA commitments, and what is your fallback?",
    intent: "Assesses whether single points of failure in the vendor supply chain would cascade into the buyer operations.",
    evidence: "Business Continuity Plan Section 4 (Third-Party Dependency Continuity).",
    answer: "Critical infrastructure dependencies are identified and documented with individual continuity plans. For cloud provider regional outages, our architecture uses multi-region active-active or active-passive configurations to maintain service continuity. Where a third-party API (such as an identity provider) becomes unavailable, defined degraded-mode procedures maintain core functionality.",
  },
  {
    num: "33",
    domain: "Secure Data Disposal",
    question: "Upon termination of the contract, how is customer data securely deleted from your systems, and within what timeframe?",
    intent: "Ensures customer data does not persist beyond the contractual relationship, satisfying data minimization principles under GDPR and similar regulations.",
    evidence: "Data Retention and Deletion Policy and Customer Offboarding Procedure.",
    answer: "Within 30 days of contract termination, all customer data is purged from production systems, active caches, and indexes. Data in backup storage is overwritten during the standard backup rotation cycle, within a maximum of 90 days. A written confirmation of deletion is provided upon customer request. Deletion logs are retained for 12 months as an audit record.",
  },
  {
    num: "34",
    domain: "Secure Data Disposal",
    question: "How do you securely dispose of hardware that previously stored customer data?",
    intent: "Checks for data remanence risk when physical storage media is decommissioned, resold, or returned to cloud providers.",
    evidence: "Hardware Disposal and Media Sanitization Policy.",
    answer: "We exclusively use cloud-managed compute and storage. When cloud provider infrastructure is decommissioned, we rely on the provider certified media sanitization procedures (NIST SP 800-88 compliant cryptographic erasure) as documented in their SOC 2 Type II reports. No physical storage media is managed or disposed of directly by our organization.",
  },
  {
    num: "35",
    domain: "Compliance & Certifications",
    question: "What security certifications or audit reports do you currently hold, and what is the coverage period of your most recent audit?",
    intent: "Quickly establishes baseline compliance posture. Buyers use this to assess whether the vendor meets their internal vendor risk tier requirements.",
    evidence: "Current SOC 2 Type II Report Cover Page, ISO 27001 Certificate, or Equivalent.",
    answer: "We maintain active third-party compliance certifications including SOC 2 Type II. Our audit period covers continuous 12-month evaluation cycles conducted by an accredited CPA auditing firm. The formal audit report, bridge letters, and executive summary letters are available to prospective customers under mutual NDA via our Trust Center.",
  },
];

const BUYER_QUESTIONS = [
  {
    q: "1. When was your most recent SOC 2 Type II or ISO 27001 audit completed, and what is the coverage period?",
    good: "Provides specific dates within the last 12 months, names the independent auditor, and shares the full report under NDA.",
    flag: "Says they are 'working toward SOC 2' or offers only a SOC 2 Type I report (which tests design only, not operational effectiveness over time).",
  },
  {
    q: "2. Where is customer data physically stored, and in which legal jurisdictions?",
    good: "Names specific cloud regions (e.g., AWS us-east-1, eu-west-1) and confirms data does not leave those defined regions without explicit consent.",
    flag: "Cannot confirm data residency or gives vague answers like 'wherever our cloud provider chooses to route it.'",
  },
  {
    q: "3. What is your breach notification SLA, and is it contractual or best-effort?",
    good: "States a specific timeframe (e.g., 48 hours or less) backed by a binding contractual commitment in the Data Processing Agreement (DPA).",
    flag: "Says they will notify 'as soon as reasonably practical' without a binding contractual deadline or financial remedy.",
  },
  {
    q: "4. Who are your subprocessors for customer data, and how do you notify us of changes?",
    good: "Maintains a public subprocessor directory with automated email subscription for at least 30 days advance notice before adding new vendors.",
    flag: "Cannot provide an up-to-date list of subprocessors or provides no mechanism for customer objection.",
  },
  {
    q: "5. Is multi-factor authentication (MFA) strictly enforced for all employee access to production infrastructure?",
    good: "Confirms mandatory MFA using hardware security keys (FIDO2/WebAuthn) or TOTP authenticator apps, with zero SMS fallback.",
    flag: "Says MFA is 'recommended' or 'optional' for administrative staff or permits SMS-based verification on production systems.",
  },
  {
    q: "6. Do you conduct annual third-party penetration tests, and can you share an executive summary?",
    good: "Confirms annual third-party grey-box penetration tests by an accredited firm and provides the executive summary letter under NDA.",
    flag: "Relies solely on internal automated vulnerability scans or shares penetration test results that are older than 18 months.",
  },
  {
    q: "7. What is your defined SLA for patching critical (CVSS 9.0+) vulnerabilities?",
    good: "Documents a strict SLA (typically 48 to 72 hours) with automated container and dependency scanning in CI/CD pipelines.",
    flag: "States that patches are applied 'during regular quarterly maintenance cycles' without an expedited path for active zero-days.",
  },
  {
    q: "8. Is your production infrastructure deployed via Infrastructure as Code with restricted manual console access?",
    good: "Confirms 100% Infrastructure as Code deployment (Terraform/CDK) with IAM guardrails blocking direct manual console modifications.",
    flag: "Engineers regularly log into cloud consoles to manually create or modify production resources.",
  },
  {
    q: "9. Is customer data ever used to train, improve, or fine-tune AI models?",
    good: "Explicitly states 'No' in legal terms and provides written AI data governance policy confirming data isolation.",
    flag: "Terms of service contain broad clauses stating user inputs may be used to 'train algorithms and improve service quality.'",
  },
  {
    q: "10. What are your RTO and RPO targets, and have you tested disaster recovery in the past 12 months?",
    good: "Provides concrete RTO (under 4 hours) and RPO (under 1 hour) figures with documentation from a recent full restoration exercise.",
    flag: "States theoretical uptime percentages but has never performed a real database restoration test from backup.",
  },
  {
    q: "11. Do you maintain cyber liability insurance, and what is your policy coverage limit?",
    good: "Confirms an active policy with at least $5M in cyber liability coverage and provides a certificate of insurance upon request.",
    flag: "Carries no cyber liability coverage or refuses to disclose coverage parameters during contract negotiation.",
  },
  {
    q: "12. How long do you retain security event logs, and are they in tamper-evident, immutable storage?",
    good: "Retains logs for a minimum of 12 months with immutable, write-once-read-many (WORM) storage architecture.",
    flag: "Logs roll over after 30 to 60 days, making retrospective forensic investigation of breach history impossible.",
  },
  {
    q: "13. What is your process and SLA for revoking employee access upon departure?",
    good: "Enforces automated SCIM deprovisioning within 24 hours for standard offboarding and within 1 hour for involuntary departures.",
    flag: "Relies on manual checklist reminders with no automated central identity revocation.",
  },
  {
    q: "14. Do criminal background checks cover all employees and contractors with production access?",
    good: "Mandatory pre-hire criminal and identity verification for 100% of personnel before credential provisioning.",
    flag: "Background checks are only run on executive leadership or skipped for international contractors.",
  },
  {
    q: "15. How do you manage and rotate API keys, cryptographic tokens, and service credentials?",
    good: "Centralized secrets manager (HashiCorp Vault / AWS Secrets Manager) with automated 90-day rotation and git pre-commit scanning.",
    flag: "Secrets are committed to git repositories, shared across Slack, or stored in plaintext configuration files.",
  },
  {
    q: "16. What network segmentation separates production systems from internal corporate workstations?",
    good: "Complete network separation with explicit firewall allow-lists, zero trust network access, and mTLS between services.",
    flag: "Office network or VPN gives broad flat network access directly to production subnets.",
  },
  {
    q: "17. How is customer data securely deleted upon contract termination?",
    good: "Automated purge within 30 days of contract conclusion, removal from backup archives within 90 days, and written certification.",
    flag: "Data is archived indefinitely or marked as 'inactive' in production databases without true deletion.",
  },
  {
    q: "18. Have you experienced any security breaches in the past 24 months, and how were they handled?",
    good: "Answers transparently with incident disclosure or confirms zero material breaches with audit verification.",
    flag: "Avoids answering the question directly or claims a 100% unbreachable track record without supporting audit evidence.",
  },
  {
    q: "19. Do all employees complete annual security awareness training with phishing simulations?",
    good: "Mandatory annual training, quarterly phishing tests, and mandatory remediation coaching for repeat failures.",
    flag: "Training is conducted once during employee onboarding and never refreshed.",
  },
  {
    q: "20. What contractual remedies exist if you fail to maintain the security commitments in this questionnaire?",
    good: "Incorporates security questionnaire representations directly into the Master Services Agreement or Data Processing Addendum.",
    flag: "Insists that questionnaire answers are informational only and holds no legal weight under the final contract.",
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
              <span>Updated November 2026</span>
              <span>22 min read</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#1A1C19] leading-tight">
              50 Security Questionnaire Examples: Questions & Answers for Vendors & Buyers
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] leading-relaxed">
              A comprehensive guide to enterprise security questionnaires. Dissects 35 real vendor security questions with auditor intent, evidence requirements, and verified answer wording, plus 20 questions enterprise buyers should ask suppliers.
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
            <p className="text-xs text-[#566155] mt-4 leading-relaxed">
              The examples below draw on control frameworks from the{" "}
              <a href="https://cloudsecurityalliance.org/research/cloud-controls-matrix" target="_blank" rel="noopener noreferrer" className="text-[#28664A] underline underline-offset-2">Cloud Security Alliance (CSA)</a>
              {" "}and the{" "}
              <a href="https://sharedassessments.org/sig/" target="_blank" rel="noopener noreferrer" className="text-[#28664A] underline underline-offset-2">Shared Assessments SIG</a>
              , the two most widely adopted security questionnaire standards in enterprise procurement.
            </p>
          </section>

          {/* 35 In-Depth Vendor Examples */}
          <section className="space-y-8 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight">
              35 Vendor Security Questionnaire Examples (with Answers)
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

          {/* Buyer Perspective Section */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight mb-2">
              20 Questions Enterprise Buyers Should Ask Vendors
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              If you are on the buying side conducting vendor due diligence, these are the 20 highest-signal questions to include in your security questionnaire. Each question includes what a good answer looks like versus a red flag response.
            </p>
            <div className="space-y-5">
              {BUYER_QUESTIONS.map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E7E5DE] p-5 shadow-sm">
                  <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-3">{item.q}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-[#EBF3EF]/40 border border-[#C2DDD0]">
                      <strong className="text-[#074E34] block mb-1 uppercase tracking-wider font-mono text-[10px]">Good Answer Signal:</strong>
                      <span className="text-[#1A1C19] leading-relaxed">{item.good}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                      <strong className="text-red-700 block mb-1 uppercase tracking-wider font-mono text-[10px]">Red Flag Response:</strong>
                      <span className="text-[#566155] leading-relaxed">{item.flag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                  What questions are asked on an IT security questionnaire?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Enterprise IT security questionnaires focus on core domains: identity and access control (MFA, bastion hosts), data encryption (AES-256 at rest, TLS 1.3 in transit), vulnerability management (annual penetration testing), incident response (breach notification SLAs), business continuity (backup restoration, RTO/RPO), software development security, and third-party vendor risk.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  What questions should enterprise buyers ask vendors in a security questionnaire?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Enterprise buyers should ask vendors about their most recent SOC 2 Type II or ISO 27001 audit dates, data residency and jurisdictions, breach notification SLA (contractual, not best-effort), subprocessor list with change notification process, MFA enforcement on production systems, annual penetration test results (available under NDA), patch management SLAs, AI data usage policy, and data deletion process upon contract termination. The 20 buyer questions above provide a complete starting template.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  How many questions are typically in a vendor security questionnaire?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Standard questionnaires vary by framework: CSA CAIQ v4 has 261 questions across 17 domains; SIG Lite has approximately 125 questions; SIG Full has over 800 questions; custom enterprise questionnaires typically range from 50 to 200 questions. The most common enterprise custom questionnaires sent to SaaS vendors fall between 80 and 150 questions.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  How can we automate answering these questions across multiple buyers?
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
            heading="Stop Answering the Same 50 Questions from Scratch Every Time"
            description="Security Review Ready maps your SOC 2 reports, ISO 27001 certificates, and policy documents to incoming questionnaires and fills responses with verified paragraph citations. Try it free on your next customer review."
            buttonText="Run My Questionnaire Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
