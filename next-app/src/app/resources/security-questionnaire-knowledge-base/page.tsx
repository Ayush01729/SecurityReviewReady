import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Database,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  BookOpen,
  Lock,
  Layers,
  HelpCircle,
  AlertTriangle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security Questionnaire Knowledge Base: Architecture & Setup [2026]",
  description:
    "How to build, structure, and maintain a security questionnaire knowledge base. Learn how to centralize SOC 2 reports, policies, and audit evidence into a single source of truth.",
  alternates: {
    canonical: "/resources/security-questionnaire-knowledge-base",
  },
  openGraph: {
    title: "Security Questionnaire Knowledge Base: Architecture & Best Practices (2026)",
    description:
      "A complete guide for security and GRC teams building a centralized, citation-backed knowledge repository to automate recurring vendor reviews.",
    url: "https://securityreviewready.com/resources/security-questionnaire-knowledge-base",
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
    { "@type": "ListItem", position: 3, name: "Security Knowledge Base", item: "https://securityreviewready.com/resources/security-questionnaire-knowledge-base" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/resources/security-questionnaire-knowledge-base#article",
  headline: "How to Build a Security Questionnaire Knowledge Base That Scales",
  description: "Best practices for consolidating compliance documentation, audit reports, and security policies into a centralized knowledge repository for questionnaire automation.",
  datePublished: "2026-11-27T00:00:00Z",
  dateModified: "2026-11-27T00:00:00Z",
  author: { "@type": "Person", name: "Security Review Ready Team" },
  publisher: { "@type": "Organization", name: "Security Review Ready", url: "https://securityreviewready.com" },
  wordCount: 3300,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "What is a security questionnaire knowledge base?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A security questionnaire knowledge base is a centralized, organized repository of verified compliance documentation, security policies, audit certifications (SOC 2, ISO 27001), and previously approved responses that security and sales teams use to answer customer security reviews consistently.",
      },
    },
    {
      "@type": "Question",
      "name": "Why do traditional static Q&A spreadsheets fail over time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Static spreadsheets quickly suffer from documentation rot: answers become obsolete when infrastructure changes, multiple copies circulate across Slack and email, and there are no citations linking claims back to audited evidence. Modern knowledge bases use deterministic document indexing to cite exact source paragraphs.",
      },
    },
    {
      "@type": "Question",
      "name": "How does Security Review Ready maintain an automated knowledge base?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security Review Ready ingests raw compliance PDFs, Markdown policies, and live trust center URLs once. When policies or audit reports are updated, the engine re-indexes the evidence automatically, ensuring all future questionnaire responses reflect your current security posture.",
      },
    },
  ],
};

export default function SecurityQuestionnaireKnowledgeBasePage() {
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
            <span className="text-[#074E34] font-medium">Security Knowledge Base</span>
          </nav>

          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Database className="w-3.5 h-3.5" />
              Information Architecture · 2026 Guide
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              How to Build a Security Questionnaire Knowledge Base That Scales
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              Tired of digging through outdated Slack messages, Google Drive folders, and old spreadsheets? 
              Here is how security teams structure a single source of truth for recurring customer security assessments.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">The Goal: Document-Backed Authority</p>
              <p className="text-[#566155] leading-relaxed">
                A modern security knowledge base is not a list of copy-pasted text answers. 
                It is an indexed library of <strong>audited compliance documentation</strong> (SOC 2, ISO 27001, security policies) that dynamically outputs cited, audit-proof answers for any incoming buyer spreadsheet.
              </p>
            </div>
          </div>

          {/* Core Architecture */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              The 4 Core Layers of a Scalable Security Knowledge Base
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "1. Verified Compliance Proof", desc: "Your independent auditor attestations: SOC 2 Type II report, ISO 27001:2022 certificate, HIPAA attestation, and annual third-party pen test executive summary.", icon: <ShieldCheck className="w-5 h-5 text-[#28664A]" /> },
                { title: "2. Approved Policy Documentation", desc: "Internal security governance: Information Security Policy, Access Control Policy, Incident Response Plan, Business Continuity/DR Plan, and Employee Offboarding SOP.", icon: <BookOpen className="w-5 h-5 text-[#28664A]" /> },
                { title: "3. Technical Architecture Specifications", desc: "Infrastructure realities: Cloud data residency specifications, encryption key management (KMS/HSM) details, multi-tenant isolation documentation, and sub-processor lists.", icon: <Layers className="w-5 h-5 text-[#28664A]" /> },
                { title: "4. Historical Questionnaire Responses", desc: "Pre-approved answers to complex, bespoke questions that have cleared legal and CISO review on previous enterprise deals.", icon: <Database className="w-5 h-5 text-[#28664A]" /> },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-[#1A1C19] text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">{item.desc}</p>
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
            source="Security Knowledge Base Guide"
            heading="Turn your security documentation into an automated answer engine"
            description="Upload your compliance documents once. We will index your knowledge base and return source-cited questionnaire responses for free in under 24 hours."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
