import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Database,
  Cpu,
  UserCheck,
  FileSpreadsheet,
  Layers,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works: AI Security Questionnaire Engine | Security Review Ready",
  description:
    "Explore how Security Review Ready ingests your SOC 2 reports, policies, and trust documentation to auto-complete enterprise security questionnaires with 100% verified citations.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works: AI Security Questionnaire Engine | Security Review Ready",
    description:
      "A deep dive into our 3-stage architecture: verified evidence ingestion, grounded citation matching, and human-in-the-loop review.",
    url: "https://securityreviewready.com/how-it-works",
    siteName: "Security Review Ready",
    type: "website",
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
      "name": "How It Works",
      "item": "https://securityreviewready.com/how-it-works",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Auto-Fill Security Questionnaires with Verified Citations",
  "description":
    "Step-by-step workflow for ingesting enterprise compliance documentation and rapidly answering customer security assessments.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Index Verified Security Evidence",
      "text":
        "Upload your SOC 2 Type II audit, ISO 27001 policies, CAIQ v4 spreadsheets, and public trust center URLs into your isolated tenant workspace.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Grounded Evidence Matching",
      "text":
        "When prospective enterprise customers submit questionnaires, our semantic engine matches each control requirement against your verified documentation, generating answers with exact paragraph and page citations.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Human-in-the-Loop Review & Native Export",
      "text":
        "Your security or sales engineering team reviews the highlighted source citations, authorizes drafts with one click, and exports the native Excel workbook with zero broken formulas.",
    },
  ],
};

const STAGES = [
  {
    step: "01",
    tag: "Ingestion & Indexing",
    title: "Connect Your Source of Truth Once",
    description:
      "Upload your internal policies, compliance certifications, and audit reports. Our parser indexes both structured tables and unstructured narrative documentation into an isolated vector graph.",
    icon: Database,
    inputs: [
      "SOC 2 Type II Reports (PDF)",
      "ISO 27001 & NIST 800-53 Policies",
      "Live Trust Center URLs & Subprocessor Lists",
      "Previous CAIQ & SIG Questionnaires",
    ],
    technicalNote:
      "Documents are processed in memory and encrypted at rest with AES-256 KMS keys. Your data is strictly never used to train public or foundational AI models.",
  },
  {
    step: "02",
    tag: "Grounded Matching Engine",
    title: "Precise Control Mapping with 100% Verified Citations",
    description:
      "When a buyer sends an assessment, our semantic retrieval engine compares each requirement against your verified compliance library. Instead of generic AI responses, every draft links directly to exact source evidence.",
    icon: Cpu,
    inputs: [
      "Exact document name and page number",
      "Direct source paragraph quote extraction",
      "Semantic similarity & match confidence scoring",
      "Zero ungrounded assertions or speculative claims",
    ],
    technicalNote:
      "If evidence for a specific control does not exist in your indexed policies, the engine explicitly flags the gap rather than hallucinating an unverified answer.",
  },
  {
    step: "03",
    tag: "Verification & Export",
    title: "Human-in-the-Loop Review with Native Excel Preservation",
    description:
      "All generated answers remain internal drafts until reviewed by your team. Your reviewer validates the highlighted source quote side-by-side and approves each answer with a single keystroke.",
    icon: UserCheck,
    inputs: [
      "Side-by-side question and source citation preview",
      "One-click batch approval for high-confidence matches",
      "Preservation of multi-tab Excel validation & scoring macros",
      "Ready-to-send export directly in the buyer's original format",
    ],
    technicalNote:
      "Unlike legacy tools that strip complex Excel formulas upon re-export, Security Review Ready targets only response cells, keeping evaluation macros completely intact.",
  },
];

const FAQS = [
  {
    q: "Does Security Review Ready ever send responses automatically to customers?",
    a: "No. We enforce a strict human-in-the-loop guarantee. Suggested answers remain private drafts within your workspace until an authorized team member reviews and approves them.",
  },
  {
    q: "How does the system handle complex Excel questionnaires with multiple tabs?",
    a: "Our parser preserves the exact cell coordinates, dropdown menus, and scoring formulas across all worksheets. We only write verified text to target response columns.",
  },
  {
    q: "What formats can I upload for customer questionnaires?",
    a: "We support Microsoft Excel (.xlsx, .xls), CSV, PDF assessments, CSA CAIQ workbooks, Shared Assessments SIG Lite spreadsheets, and raw text prompts from vendor portals.",
  },
  {
    q: "How fast can we complete our first live customer review?",
    a: "Most teams index their security documentation in under 15 minutes and complete their first customer questionnaire within 2 to 24 hours.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <div className="max-w-[1040px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">How It Works</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              Engine Architecture & Workflow
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1C19] max-w-3xl leading-tight">
              How Security Review Ready Works
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] max-w-2xl leading-relaxed">
              A 3-stage grounded workflow designed to turn days of repetitive security spreadsheet work into minutes of verified human verification.
            </p>
          </div>

          {/* 3-Stage Architecture Cards */}
          <section className="space-y-10 mb-16">
            {STAGES.map((stage) => {
              const IconComponent = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 shadow-sm hover:border-[#28664A]/40 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs font-bold text-[#074E34] px-2.5 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0]">
                          Stage {stage.step}
                        </span>
                        <span className="font-mono text-xs text-[#696B66] uppercase tracking-wider">
                          {stage.tag}
                        </span>
                      </div>

                      <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3">
                        {stage.title}
                      </h2>
                      <p className="font-sans text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
                        {stage.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {stage.inputs.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#1A1C19]">
                            <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-3.5 rounded bg-[#FAF9F6] border border-[#E7E5DE] text-xs font-mono text-[#566155]">
                        <strong className="text-[#1A1C19]">Security Safeguard:</strong> {stage.technicalNote}
                      </div>
                    </div>

                    <div className="shrink-0 w-14 h-14 rounded-xl bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] flex items-center justify-center self-start">
                      <IconComponent className="w-7 h-7 stroke-[1.8]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Comparison Callout: Grounded vs Generic AI */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Why Grounded Citations Beat Generic AI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <span className="font-mono text-xs text-[#BA1A1A] font-semibold uppercase tracking-wider block mb-2">
                  Legacy / Generic AI Tools
                </span>
                <ul className="space-y-2 text-xs text-[#566155]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA1A1A] font-bold">✕</span>
                    <span>Hallucinates compliance claims not present in your actual audit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA1A1A] font-bold">✕</span>
                    <span>Leaves reviewer to guess which document supported the answer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA1A1A] font-bold">✕</span>
                    <span>Corrupts multi-tab Excel formulas upon re-export.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA1A1A] font-bold">✕</span>
                    <span>Risks sharing confidential data with public AI training sets.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-lg bg-[#EBF3EF]/50 border border-[#C2DDD0]">
                <span className="font-mono text-xs text-[#074E34] font-semibold uppercase tracking-wider block mb-2">
                  Security Review Ready
                </span>
                <ul className="space-y-2 text-xs text-[#1A1C19]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A] shrink-0 mt-0.5" />
                    <span>Every statement highlights exact document title, section, and page.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A] shrink-0 mt-0.5" />
                    <span>Side-by-side evidence preview enables approval in under 5 seconds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A] shrink-0 mt-0.5" />
                    <span>Excel formula integrity preserved with 100% native fidelity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A] shrink-0 mt-0.5" />
                    <span>Strict multi-tenant isolation and zero AI model training guarantee.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Workflow FAQs */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Workflow Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border-b border-[#E7E5DE]/60 pb-5 last:border-b-0 last:pb-0">
                  <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-2">
                    {faq.q}
                  </h3>
                  <p className="font-sans text-sm text-[#566155] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCta
            source="How It Works Page"
            badge="Try the Workflow Free"
            heading="See the 3-Stage Workflow on Your Real Questionnaire"
            description="Send us your pending customer security questionnaire and your policies. We will complete it with 100% verified source citations in under 24 hours at zero cost."
            buttonText="Run My Questionnaire Free"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

