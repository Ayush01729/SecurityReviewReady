import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Mic,
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileText,
  Clock,
  ArrowRight,
  Database,
  HelpCircle,
  AlertTriangle,
  FileSpreadsheet,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Notetaker Security Reviews: Enterprise Guide [2026]",
  description:
    "How AI notetakers pass enterprise security review questionnaires. Learn mandatory controls for audio recording, SOC 2 Type II, zero model training, HIPAA BAA, and encryption standards.",
  alternates: {
    canonical: "/resources/ai-notetakers-enterprise-security-review",
  },
  openGraph: {
    title: "How AI Notetakers Pass Enterprise Security Reviews (2026 Guide)",
    description:
      "A complete guide for AI notetakers and meeting assistant software facing enterprise customer security questionnaires, procurement reviews, and privacy compliance.",
    url: "https://securityreviewready.com/resources/ai-notetakers-enterprise-security-review",
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
    { "@type": "ListItem", position: 3, name: "AI Notetaker Security Reviews", item: "https://securityreviewready.com/resources/ai-notetakers-enterprise-security-review" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/resources/ai-notetakers-enterprise-security-review#article",
  headline: "How AI Notetakers Handle Enterprise Security Review Questionnaires",
  description: "The definitive playbook for AI meeting assistants and audio recording tools to clear enterprise security reviews, CAIQ assessments, and compliance audits.",
  datePublished: "2026-11-27T00:00:00Z",
  dateModified: "2026-11-27T00:00:00Z",
  author: { "@type": "Person", name: "Security Review Ready Team" },
  publisher: { "@type": "Organization", name: "Security Review Ready", url: "https://securityreviewready.com" },
  wordCount: 3800,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "Why do enterprise security teams heavily scrutinize AI notetakers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI meeting assistants capture raw conversational audio, confidential financial projections, intellectual property, customer data, and employee PII. As a result, enterprise CISOs mandate rigorous vendor reviews to confirm zero-data-retention options, SOC 2 Type II compliance, encryption in transit and at rest, and strict contractual guarantees that customer audio is never used to train foundational AI models.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the most common questions on an AI notetaker security questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top questions include: (1) Are audio recordings or transcripts used to train or fine-tune public LLMs? (2) Where is customer meeting data stored geographically? (3) What encryption standards are enforced (e.g., TLS 1.3, AES-256 with KMS keys)? (4) What is the data retention and automated purging policy? and (5) Is the solution SOC 2 Type II and GDPR/HIPAA compliant?",
      },
    },
    {
      "@type": "Question",
      "name": "How can AI notetaker startups answer 200+ question security questionnaires faster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Using automated responder workspaces like Security Review Ready. By indexing your SOC 2 audit report, sub-processor list, and audio governance policies, the engine automatically populates client spreadsheets with verified citations, cutting review time from 3 weeks to under 24 hours.",
      },
    },
    {
      "@type": "Question",
      "name": "Can an AI notetaker be HIPAA compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, provided the vendor signs a formal Business Associate Agreement (BAA), enforces end-to-end encryption for audio streams, maintains audit logs for transcript access, and implements automated PII/PHI redaction algorithms.",
      },
    },
  ],
};

export default function AiNotetakerSecurityReviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <div className="max-w-[1040px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">AI Notetakers Security Review</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Mic className="w-3.5 h-3.5" />
              Specialized Vertical Guide · Updated November 2026
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              How Do AI Notetakers Handle Enterprise Security Review Questionnaires?
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              AI notetakers and meeting intelligence tools face the strictest enterprise security hurdles in software sales. 
              Here is how market leaders answer enterprise questionnaires, satisfy CISO scrutiny, and clear procurement in hours instead of weeks.
            </p>

            {/* TL;DR Box for AI Overviews */}
            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">Key Takeaway for CISOs &amp; AI Founders</p>
              <p className="text-[#566155] leading-relaxed">
                To pass enterprise security reviews, AI notetakers must demonstrate three non-negotiable controls: 
                <strong> (1) Zero Model Training</strong> guarantees contractually barring public LLM training on audio or transcripts, 
                <strong> (2) SOC 2 Type II certification</strong> covering the confidentiality trust criteria, and 
                <strong> (3) Granular Bot Notification &amp; Consent</strong> protocols allowing call participants to opt out or mute recording at any time.
              </p>
            </div>
          </div>

          {/* The 5 Critical Audit Pillars */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              The 5 Enterprise Audit Pillars for AI Notetakers
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "1. Zero Model Training Guarantees",
                  desc: "Enterprise buyers will universally block deployment if meeting transcripts are fed into third-party foundation models (OpenAI, Anthropic, Google). Questionnaires require verifiable proof that your API agreements enforce zero-day retention and zero-training policies.",
                  icon: <Lock className="w-5 h-5 text-[#28664A]" />,
                },
                {
                  title: "2. Participant Consent & Two-Party Audio Laws",
                  desc: "Meeting bots that join Zoom, Google Meet, or Teams meetings without clear notification trigger wiretapping liabilities in two-party consent states. Enterprises demand automated visual and audio notices plus host consent controls.",
                  icon: <ShieldCheck className="w-5 h-5 text-[#28664A]" />,
                },
                {
                  title: "3. Retention Windows & Automated Purging",
                  desc: "Holding audio recordings indefinitely is a severe data liability. Enterprise security teams insist on configurable auto-deletion settings (e.g., purge raw audio immediately after transcription, retain transcripts for 30/90 days max).",
                  icon: <Clock className="w-5 h-5 text-[#28664A]" />,
                },
                {
                  title: "4. PII Redaction & Data Loss Prevention (DLP)",
                  desc: "When credit card numbers, passwords, or customer health info are spoken aloud on sales or support calls, high-compliance buyers expect automated regex and NLP redaction before transcripts are indexed.",
                  icon: <FileText className="w-5 h-5 text-[#28664A]" />,
                },
              ].map((pillar, idx) => (
                <div key={idx} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    {pillar.icon}
                    <h3 className="font-semibold text-[#1A1C19] text-sm">{pillar.title}</h3>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Real Questionnaire Prompts & Model Answers */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              Common AI Notetaker Questionnaire Prompts (With Audit-Approved Answers)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Does your software use audio streams or meeting notes to train machine learning models?",
                  a: "No. Customer meeting recordings, audio streams, and synthesized transcripts are strictly excluded from public or internal LLM training datasets. We execute formal enterprise zero-retention API contracts with downstream transcription and inference providers.",
                  citation: "SOC 2 Type II (Confidentiality Section 3.2), Terms of Service Section 8.4",
                },
                {
                  q: "How is audio data encrypted during recording and storage?",
                  a: "All audio streams in transit are protected using TLS 1.3 with AES-GCM cipher suites. Stored audio recordings and generated transcripts are encrypted at rest with AES-256 via customer-isolated AWS KMS keys.",
                  citation: "Infrastructure Security Policy §4.1; SOC 2 Section IV Controls CC6.6 & CC6.7",
                },
                {
                  q: "Can enterprise administrators enforce automated deletion of audio files?",
                  a: "Yes. Administrators can set programmatic retention lifecycles directly in the settings console (e.g., immediate deletion of raw audio post-transcription, or automatic expiration after 7, 30, or 90 days).",
                  citation: "Data Retention & Destruction Policy §2.1",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-2">
                    &ldquo;{item.q}&rdquo;
                  </h3>
                  <div className="p-3 bg-[#FAF9F6] border border-[#E7E5DE] rounded-lg text-xs mb-2">
                    <strong className="text-[#074E34] block mb-1">Recommended Response:</strong>
                    <p className="text-[#1A1C19] leading-relaxed">{item.a}</p>
                  </div>
                  <p className="text-[11px] font-mono text-[#566155]">
                    <strong>Required Evidence Document:</strong> {item.citation}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Automation Playbook */}
          <section className="mb-14 bg-white border border-[#E7E5DE] rounded-xl p-6 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-3">
              Automate Your Next 300-Question Enterprise Review in 24 Hours
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              Are you an AI notetaker or B2B SaaS startup receiving 50-to-300 question security assessments from enterprise procurement? 
              <Link href="/" className="text-[#28664A] font-semibold underline">Security Review Ready</Link> ingests your SOC 2 audit report, terms of service, and architecture diagrams to draft fully cited answers directly inside the buyer&apos;s Excel spreadsheet.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/resources/ai-agents-for-security-questionnaires" className="text-sm font-medium text-[#28664A] hover:underline flex items-center gap-1">
                Explore AI Agents for Questionnaires <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/resources/ddq-automation" className="text-sm font-medium text-[#28664A] hover:underline flex items-center gap-1">
                Read DDQ Automation Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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
            source="AI Notetaker Enterprise Security Guide"
            heading="Fast-track your enterprise security review in under 24 hours"
            description="Send us your enterprise customer's pending security spreadsheet. We'll populate cited answers backed by your SOC 2 report and security policies for free."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
