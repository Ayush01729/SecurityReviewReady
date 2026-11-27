import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Database,
  Lock,
  Layers,
  HelpCircle,
  AlertTriangle,
  Server,
  FileSpreadsheet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Security Questionnaire Guide for SaaS [2026 Checklist]",
  description:
    "Complete guide to cloud security questionnaires and SaaS vendor reviews. Covers multi-tenant architecture, AWS/GCP data residency, encryption at rest, and common auditor questions.",
  alternates: {
    canonical: "/resources/cloud-security-questionnaire-saas-guide",
  },
  openGraph: {
    title: "Cloud Security Questionnaire Guide: What SaaS Buyers Ask (2026)",
    description:
      "A complete guide for B2B SaaS companies answering cloud security questionnaires, AWS/Azure infrastructure reviews, and customer risk assessments.",
    url: "https://securityreviewready.com/resources/cloud-security-questionnaire-saas-guide",
    siteName: "Security Review Ready",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://securityreviewready.com" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://securityreviewready.com/resources" },
    { "@type": "ListItem", position: 3, name: "Cloud Security Questionnaire Guide", item: "https://securityreviewready.com/resources/cloud-security-questionnaire-saas-guide" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/resources/cloud-security-questionnaire-saas-guide#article",
  headline: "Cloud Security Questionnaire Guide: What SaaS Enterprise Buyers Ask in 2026",
  description: "Comprehensive guide to passing cloud and SaaS security assessments, covering multi-tenancy, encryption standards, IAM controls, and audit evidence.",
  datePublished: "2026-11-27T00:00:00Z",
  dateModified: "2026-11-27T00:00:00Z",
  author: { "@type": "Person", name: "Security Review Ready Team" },
  publisher: { "@type": "Organization", name: "Security Review Ready", url: "https://securityreviewready.com" },
  wordCount: 3500,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "What is a cloud security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cloud security questionnaire is a technical evaluation document that enterprise procurement and IT security teams send to prospective SaaS vendors to evaluate how their cloud architecture (AWS, GCP, Azure), data storage, tenant isolation, and identity management handle customer data before granting procurement clearance.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the most common questions on a SaaS cloud security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common questions focus on: (1) Multi-tenant data segregation (logical vs physical isolation), (2) Encryption in transit (TLS 1.3) and at rest (AES-256 with KMS keys), (3) Geographic data residency and backup locations, (4) Automated vulnerability scanning and penetration test frequency, and (5) Incident response runbooks and customer breach notification SLAs (24h to 72h).",
      },
    },
    {
      "@type": "Question",
      "name": "How can SaaS vendors answer cloud security questionnaires faster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By centralizing cloud architecture documentation, AWS/GCP shared responsibility matrices, and SOC 2 Type II reports in Security Review Ready. The platform automatically maps incoming questionnaire questions to verified evidence and drafts cited responses in under 24 hours.",
      },
    },
  ],
};

export default function CloudSecurityQuestionnairePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <div className="max-w-[1040px] mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Cloud Security Questionnaire</span>
          </nav>

          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Cloud className="w-3.5 h-3.5" />
              Technical Architecture Playbook · 2026 Edition
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              Cloud Security Questionnaire Guide: What SaaS Enterprise Buyers Ask in 2026
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              When selling B2B SaaS into enterprise accounts, your cloud architecture is on trial. Here is the definitive guide to answering cloud security questionnaires, proving tenant isolation, and clearing infosec audits fast.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">Definition: What is a Cloud Security Questionnaire?</p>
              <p className="text-[#566155] leading-relaxed">
                A <strong>cloud security questionnaire</strong> is a structured security evaluation used by enterprise risk teams to verify that a SaaS vendor&apos;s cloud infrastructure (AWS, Azure, GCP) meets enterprise compliance standards for data segregation, encryption key management, IAM controls, and disaster recovery before production deployment.
              </p>
            </div>
          </div>

          {/* 5 Core Domains */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              5 Core Domains Tested in Cloud Security Questionnaires
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "1. Multi-Tenant Data Isolation", desc: "How is customer data separated? Enterprise buyers want proof of row-level security (RLS), distinct database schemas, or customer-specific encryption keys to prevent cross-tenant data leakage.", icon: <Server className="w-5 h-5 text-[#28664A]" /> },
                { title: "2. Cloud Cryptography & Key Management", desc: "Encryption standards for data in transit (TLS 1.3 enforced) and at rest (AES-256 via KMS / HSM). Buyers frequently ask if customers can bring their own keys (BYOK).", icon: <Lock className="w-5 h-5 text-[#28664A]" /> },
                { title: "3. Identity & Access Governance (IAM)", desc: "Enforcement of SAML/SSO, mandatory multi-factor authentication (MFA), least privilege role-based access control (RBAC), and automated revoking of offboarded employees.", icon: <ShieldCheck className="w-5 h-5 text-[#28664A]" /> },
                { title: "4. Infrastructure Vulnerability Management", desc: "Continuous container scanning (e.g. Snyk, Trivy), automated static/dynamic code analysis (SAST/DAST), and annual third-party gray-box penetration test reports.", icon: <Database className="w-5 h-5 text-[#28664A]" /> },
              ].map((domain, idx) => (
                <div key={idx} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    {domain.icon}
                    <h3 className="font-semibold text-[#1A1C19] text-sm">{domain.title}</h3>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">{domain.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-5 text-sm">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className={i < faqSchema.mainEntity.length - 1 ? "border-b border-[#E7E5DE]/60 pb-4" : ""}>
                  <h3 className="font-semibold text-[#1A1C19] mb-1">{item.name}</h3>
                  <p className="text-xs text-[#566155] leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <InlineCta
            source="Cloud Security Questionnaire Guide"
            heading="Automate your next SaaS cloud security review in 24 hours"
            description="Upload your AWS/GCP architecture documentation and SOC 2 report. We'll return 100% source-cited draft answers for your review — completely free."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
