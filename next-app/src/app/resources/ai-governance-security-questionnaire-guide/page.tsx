import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Bot,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Database,
  Lock,
  FileText,
  HelpCircle,
  AlertTriangle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Governance Security Questionnaire Guide & Questions [2026]",
  description:
    "How to answer AI governance security questionnaires. Comprehensive guide covering ISO 42001, model training opt-outs, data residency, LLM sub-processors, and model safety prompts.",
  alternates: {
    canonical: "/resources/ai-governance-security-questionnaire-guide",
  },
  openGraph: {
    title: "AI Governance Security Questionnaire Guide: 25 Essential Questions (2026)",
    description:
      "A complete guide for software vendors answering enterprise AI governance, ISO 42001, and LLM data safety security questionnaires.",
    url: "https://securityreviewready.com/resources/ai-governance-security-questionnaire-guide",
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
    { "@type": "ListItem", position: 3, name: "AI Governance Questionnaire Guide", item: "https://securityreviewready.com/resources/ai-governance-security-questionnaire-guide" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/resources/ai-governance-security-questionnaire-guide#article",
  headline: "AI Governance Security Questionnaire Guide: What Enterprise Buyers Ask in 2026",
  description: "The definitive guide to passing enterprise AI security reviews, ISO 42001 governance checks, and third-party LLM risk assessments.",
  datePublished: "2026-11-27T00:00:00Z",
  dateModified: "2026-11-27T00:00:00Z",
  author: { "@type": "Person", name: "Security Review Ready Team" },
  publisher: { "@type": "Organization", name: "Security Review Ready", url: "https://securityreviewready.com" },
  wordCount: 3600,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "What is an AI governance security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI governance security questionnaire is a specialized assessment sent by enterprise procurement and risk teams to evaluate how software vendors use Artificial Intelligence, machine learning models, and Large Language Models (LLMs). It verifies that customer data is not used for model training, inspects data retention by AI sub-processors, and evaluates compliance with frameworks like ISO/IEC 42001 and the EU AI Act.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the most critical questions asked on AI security reviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The top 3 critical questions are: (1) Is customer data or prompt inputs used to train, fine-tune, or improve public or shared foundational AI models? (2) What third-party LLM providers (e.g. OpenAI, Anthropic, AWS Bedrock) are utilized as sub-processors and what are their data retention terms? and (3) Are automated guardrails in place to prevent prompt injection, data leakage, and hallucinated outputs?",
      },
    },
    {
      "@type": "Question",
      "name": "How can vendors automate answers to AI security questionnaires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security Review Ready indexes your AI architecture diagrams, sub-processor data processing addendums (DPAs), terms of service, and SOC 2 reports to automatically draft cited responses to incoming enterprise AI questionnaires in under 24 hours.",
      },
    },
  ],
};

export default function AiGovernanceQuestionnaireGuidePage() {
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
            <span className="text-[#074E34] font-medium">AI Governance Questionnaire Guide</span>
          </nav>

          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Bot className="w-3.5 h-3.5" />
              Emerging Compliance Framework · 2026 Guide
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              AI Governance Security Questionnaire Guide: What Enterprise Buyers Ask in 2026
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              With the rise of generative AI, ISO/IEC 42001, and the EU AI Act, enterprise buyers now add 20 to 50 AI-specific security questions to every review. Here is what buyers ask and how to answer with audit-proof citations.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">Key Takeaway for B2B AI Vendors</p>
              <p className="text-[#566155] leading-relaxed">
                Enterprise security teams will immediately block procurement if your AI architecture cannot prove <strong>Zero Model Training</strong> guarantees, <strong>zero-day retention with downstream LLM sub-processors</strong>, and <strong>tenant-isolated data boundaries</strong>.
              </p>
            </div>
          </div>

          {/* Core AI Governance Domains */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              The 4 Pillars of Enterprise AI Security Reviews
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "1. Zero Model Training Guarantees", desc: "Explicit contractual commitments verifying that customer prompts, inputs, and embeddings are never used to train or fine-tune public foundation models.", icon: <Lock className="w-5 h-5 text-[#28664A]" /> },
                { title: "2. Downstream LLM Sub-processor DPA", desc: "Documented Data Processing Addendums with third-party model providers (OpenAI Enterprise, Anthropic, Bedrock) guaranteeing zero-day data retention.", icon: <ShieldCheck className="w-5 h-5 text-[#28664A]" /> },
                { title: "3. Input/Output Guardrails & DLP", desc: "Automated filters that inspect prompts and generated completions for confidential data, PII, and prompt injection attacks before reaching users.", icon: <FileText className="w-5 h-5 text-[#28664A]" /> },
                { title: "4. ISO 42001 & AI Risk Management", desc: "Alignment with ISO/IEC 42001 AI Management Systems (AIMS) and NIST AI Risk Management Framework (AI RMF).", icon: <Database className="w-5 h-5 text-[#28664A]" /> },
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
            source="AI Governance Questionnaire Guide"
            heading="Need to answer enterprise AI security reviews faster?"
            description="Upload your AI architecture documentation and SOC 2 reports. We'll return 100% source-cited draft answers for free."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
