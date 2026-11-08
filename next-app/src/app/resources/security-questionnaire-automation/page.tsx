import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Database,
  Cpu,
  Layers,
  AlertTriangle,
  Lock,
  Workflow,
  HelpCircle,
  TrendingDown,
  BarChart3,
  XCircle,
  ListChecks,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security Questionnaire Automation: Practitioner's Guide to Cutting Response Time by 90% (2026) | Security Review Ready",
  description:
    "A practitioner's guide to security questionnaire automation: before/after time breakdowns, a 10-point tool evaluation checklist, common mistakes to avoid, and how grounded citation engines work.",
  alternates: {
    canonical: "/resources/security-questionnaire-automation",
  },
  openGraph: {
    title: "Security Questionnaire Automation: Practitioner's Guide to Cutting Response Time by 90% (2026)",
    description:
      "A complete technical guide to automating enterprise vendor security assessments, CAIQ workbooks, and custom RFPs using grounded evidence citations.",
    url: "https://securityreviewready.com/resources/security-questionnaire-automation",
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
      "name": "Security Questionnaire Automation Guide",
      "item": "https://securityreviewready.com/resources/security-questionnaire-automation",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Security Questionnaire Automation: Practitioner's Guide to Cutting Response Time by 90% (2026)",
  "description":
    "A practitioner's guide to security questionnaire automation covering before/after time breakdowns, a 10-point evaluation checklist, common mistakes, and how grounded citation engines work.",
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
      "name": "What is security questionnaire automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security questionnaire automation is the use of software and artificial intelligence to ingest compliance documentation (such as SOC 2 reports, ISO 27001 policies, and audit logs) and automatically generate accurate, source-cited answers to prospective customer vendor risk assessments.",
      },
    },
    {
      "@type": "Question",
      "name": "How much time does security questionnaire automation save?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise B2B SaaS teams typically reduce the manual effort required to answer a 100 to 300-question spreadsheet from 15 to 25 engineering hours down to under 30 minutes of human verification.",
      },
    },
    {
      "@type": "Question",
      "name": "Can automated security questionnaire software preserve Excel formulas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, specialized questionnaire engines write strictly to designated response cells while preserving native Excel workbook structures, cross-sheet calculation formulas, and dropdown validation macros.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I use security questionnaire automation without a SOC 2 report?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Upload your existing information security policy, penetration test executive summary, privacy policy, and architecture overview. The engine works with whatever verified documentation you provide. A SOC 2 report dramatically improves coverage, but it is not a prerequisite.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I handle questions where my company does not meet the control?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer transparently. The automation tool should flag the gap rather than guessing. Write a clear compensating control explanation: state what you do instead, why it achieves the same risk objective, and when you plan to implement the requested control if it is on your roadmap.",
      },
    },
  ],
};

export default function SecurityQuestionnaireAutomationPage() {
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
            <span className="text-[#074E34] font-medium">Questionnaire Automation</span>
          </nav>

          {/* Article Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Technical Playbook
              </span>
              <span>Updated November 2026</span>
              <span>14 min read</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#1A1C19] leading-tight">
              Security Questionnaire Automation: Practitioner&apos;s Guide to Cutting Response Time by 90% (2026)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] leading-relaxed">
              What automation actually does (and what it does not), a realistic before/after time breakdown, a 10-point tool evaluation checklist, and 5 common mistakes that create liability instead of efficiency.
            </p>
          </header>

          {/* Key Metrics Callout */}
          <section className="bg-white p-6 rounded-xl border border-[#E7E5DE] mb-12 shadow-sm">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#28664A]" />
              The Hidden Cost of Manual Questionnaire Completion
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <div className="text-3xl font-bold font-mono text-[#1A1C19]">12 to 18</div>
                <div className="text-xs font-sans text-[#566155] mt-1">
                  Days average deal delay caused by pending security reviews
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <div className="text-3xl font-bold font-mono text-[#1A1C19]">22 Hours</div>
                <div className="text-xs font-sans text-[#566155] mt-1">
                  Engineering and security time spent per enterprise RFP spreadsheet
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]">
                <div className="text-3xl font-bold font-mono text-[#074E34]">90%+</div>
                <div className="text-xs font-sans text-[#566155] mt-1">
                  Reduction in turnaround time achieved via citation automation
                </div>
              </div>
            </div>
          </section>

          {/* Section: What Automation Does and Does Not Do */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight">
              What Security Questionnaire Automation Actually Does (and What It Does Not)
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              Before evaluating any tool, establish a shared mental model with your security and legal teams. Automation does specific, bounded things well and falls apart when pushed outside those bounds.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* DOES column */}
              <div className="p-5 rounded-lg bg-[#EBF3EF]/40 border border-[#C2DDD0]">
                <h3 className="font-sans text-base font-semibold text-[#074E34] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#28664A]" />
                  What it DOES
                </h3>
                <ul className="space-y-3 text-sm text-[#1A1C19]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                    <span>Pre-fills response cells with citations drawn directly from your SOC 2 / ISO 27001 / internal policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                    <span>Flags unanswered questions and gaps where you have no matching documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                    <span>Preserves multi-tab Excel formulas, scoring macros, and dropdown validation while writing only to response cells</span>
                  </li>
                </ul>
              </div>

              {/* DOES NOT column */}
              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE]">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-[#BA1A1A]" />
                  What it DOES NOT
                </h3>
                <ul className="space-y-3 text-sm text-[#566155]">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#BA1A1A] shrink-0 mt-0.5" />
                    <span>Send answers to customers without a human review and approval step</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#BA1A1A] shrink-0 mt-0.5" />
                    <span>Generate answers from internet data, training data, or any source outside your uploaded documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#BA1A1A] shrink-0 mt-0.5" />
                    <span>Replace your security engineer&apos;s judgment on nuanced or context-dependent control questions</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Before vs After */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight">
              Before vs. After: Realistic Time Breakdown
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              These figures reflect a typical 150 to 250-question enterprise vendor risk assessment. Your actual numbers will vary based on documentation maturity and questionnaire complexity, but the ratios are consistent across teams we work with.
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#E7E5DE] shadow-sm">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="border-b border-[#E7E5DE] bg-[#FAF9F6]">
                    <th className="text-left px-5 py-3 font-semibold text-[#1A1C19] font-sans">Step</th>
                    <th className="text-center px-5 py-3 font-semibold text-[#BA1A1A] font-sans whitespace-nowrap">Before (Manual)</th>
                    <th className="text-center px-5 py-3 font-semibold text-[#28664A] font-sans whitespace-nowrap">After (Automated)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E5DE]">
                  <tr className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="px-5 py-4 text-[#1A1C19] font-medium">Receiving and parsing the spreadsheet</td>
                    <td className="px-5 py-4 text-center text-[#566155]">2 to 3 hours</td>
                    <td className="px-5 py-4 text-center text-[#28664A] font-medium">10 minutes</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="px-5 py-4 text-[#1A1C19] font-medium">Mapping questions to your documentation</td>
                    <td className="px-5 py-4 text-center text-[#566155]">8 to 15 hours</td>
                    <td className="px-5 py-4 text-center text-[#28664A] font-medium">Automated</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="px-5 py-4 text-[#1A1C19] font-medium">Drafting initial answers</td>
                    <td className="px-5 py-4 text-center text-[#566155]">6 to 12 hours</td>
                    <td className="px-5 py-4 text-center text-[#28664A] font-medium">Automated with citations</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="px-5 py-4 text-[#1A1C19] font-medium">Internal review and approval</td>
                    <td className="px-5 py-4 text-center text-[#566155]">4 to 8 hours</td>
                    <td className="px-5 py-4 text-center text-[#28664A] font-medium">30 to 60 minutes</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="px-5 py-4 text-[#1A1C19] font-medium">Re-exporting to native Excel format</td>
                    <td className="px-5 py-4 text-center text-[#566155]">1 to 2 hours</td>
                    <td className="px-5 py-4 text-center text-[#28664A] font-medium">1 click</td>
                  </tr>
                  <tr className="bg-[#FAF9F6] border-t-2 border-[#E7E5DE]">
                    <td className="px-5 py-4 text-[#1A1C19] font-semibold">Total elapsed calendar time</td>
                    <td className="px-5 py-4 text-center text-[#BA1A1A] font-semibold">2 to 3 weeks</td>
                    <td className="px-5 py-4 text-center text-[#28664A] font-semibold">Under 24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 1: The Bottleneck */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight">
              1. The Anatomy of Security Review Deal Slippage
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              Every B2B SaaS company reaches an inflection point where selling to larger customers triggers formal vendor risk management (VRM) reviews. The account executive reaches verbal agreement with the business champion, only for the procurement department to issue a 200-question security workbook containing detailed inquiries about data retention, network segmentation, encryption key management, and subprocessor compliance.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              In most growing software companies, the response workflow breaks down rapidly:
            </p>
            <ul className="space-y-3 pl-2 text-sm sm:text-base text-[#566155]">
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#BA1A1A] shrink-0 mt-1" />
                <span>
                  <strong>High-Value Engineers Distracted:</strong> Because sales representatives cannot independently confirm technical infrastructure details, queries are escalated to senior DevOps leads, security architects, or founders, pulling them away from core product roadmaps.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#BA1A1A] shrink-0 mt-1" />
                <span>
                  <strong>Information Siloed Across Outdated Documents:</strong> Answers are scattered across previous customer RFPs, expired trust centers, Notion pages, and Slack threads, leading to inconsistent statements that raise red flags during audit reconciliation.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#BA1A1A] shrink-0 mt-1" />
                <span>
                  <strong>Quarter-End Revenue Stalls:</strong> An uncompleted spreadsheet sitting in a legal review queue can delay deal signing past end-of-quarter deadlines, negatively impacting cash flow and team sales quotas.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 2: Evolution of Automation */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight">
              2. The Three Generations of Questionnaire Tooling
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              Understanding why traditional approaches fail requires examining how vendor review technology has evolved over the past decade:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE] shadow-sm">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FAF9F6] text-[#566155] border border-[#E7E5DE] text-xs font-mono font-bold flex items-center justify-center">
                    G1
                  </span>
                  Generation 1: Static Knowledge Banks &amp; Shared Spreadsheets
                </h3>
                <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                  Teams maintain a master document containing past questionnaire responses. Reviewers manually search keywords, copy answers, and paste them into new workbooks. <em>Result:</em> Content ages rapidly, personnel changes create knowledge gaps, and subtle wording variations cause missed answers.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE] shadow-sm">
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FAF9F6] text-[#566155] border border-[#E7E5DE] text-xs font-mono font-bold flex items-center justify-center">
                    G2
                  </span>
                  Generation 2: Keyword-Matching RFP Repositories
                </h3>
                <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                  Software tools parse questions and perform lexical keyword matching against a library of pre-approved text snippets. <em>Result:</em> Misses intent when questions are worded differently (for example, failing to connect &quot;cryptographic controls&quot; with &quot;data encryption&quot;). Furthermore, answers lack citations, forcing reviewers to verify original policy files manually.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#EBF3EF]/40 border border-[#C2DDD0] shadow-sm">
                <h3 className="font-sans text-base font-semibold text-[#074E34] mb-1.5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#28664A] text-white text-xs font-mono font-bold flex items-center justify-center">
                    G3
                  </span>
                  Generation 3: Grounded AI Citation Engines
                </h3>
                <p className="text-xs sm:text-sm text-[#1A1C19] leading-relaxed">
                  Modern engines ingest raw source documentation (SOC 2 Type II audit reports, ISO 27001 policies, penetration tests, and trust center documentation) into a private vector graph. When an incoming question arrives, the engine performs semantic matching, drafts a context-aware answer, and points directly to the exact paragraph, document name, and page number.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Technical Architecture */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight">
              3. The Technical Architecture of Trustworthy Questionnaire Automation
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              Automating security questionnaires requires vastly stricter architectural safeguards than general copywriting or code generation. A single inaccurate answer in an enterprise vendor assessment can constitute a contractual misrepresentation. Reliable security questionnaire automation software relies on four core engineering pillars:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE]">
                <div className="w-8 h-8 rounded bg-[#EBF3EF] text-[#074E34] flex items-center justify-center mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                  Semantic Vector Retrieval
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Converts narrative audit statements into multi-dimensional embeddings. Recognizes that &quot;Do you enforce TLS 1.3 across external ingress?&quot; matches controls regarding &quot;network transmission encryption.&quot;
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE]">
                <div className="w-8 h-8 rounded bg-[#EBF3EF] text-[#074E34] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                  100% Grounded Citations
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Every response highlights the exact document title, section header, and page number in your SOC 2 audit or security policies, allowing your human reviewer to validate accuracy in seconds.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE]">
                <div className="w-8 h-8 rounded bg-[#EBF3EF] text-[#074E34] flex items-center justify-center mb-3">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                  Native Excel Macro Preservation
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Enterprise buyer spreadsheets often contain complex cross-sheet calculation formulas, dropdown validation rules, and scoring macros. Specialized engines write only to target response cells, preserving file integrity.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE]">
                <div className="w-8 h-8 rounded bg-[#EBF3EF] text-[#074E34] flex items-center justify-center mb-3">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                  Zero Public Model Training
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Your sensitive security policies, architecture diagrams, and audit findings remain completely isolated in tenant-specific storage. Proprietary data is never shared or used to train third-party public AI models.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: 4-Step Playbook */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight">
              4. A 4-Step Playbook to Automate Security Questionnaires
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              Implementing response automation does not require months of configuration. Follow this operational blueprint to get started in under 24 hours:
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-lg bg-white border border-[#E7E5DE]">
                <span className="w-8 h-8 rounded-full bg-[#EBF3EF] text-[#074E34] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                    Index Your Compliance Evidence Foundation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                    Gather your approved compliance assets once: your latest SOC 2 Type II audit report, ISO 27001 certificate, internal information security policies (PDF or Markdown), disaster recovery runbooks, and public trust center URL. Ingesting these files creates a clean, deterministic knowledge graph.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-lg bg-white border border-[#E7E5DE]">
                <span className="w-8 h-8 rounded-full bg-[#EBF3EF] text-[#074E34] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                    Upload the Inbound Customer Questionnaire
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                    Upload the buyer&apos;s original assessment workbook without modifying formatting. Whether the file is a standard{" "}
                    <a
                      href="https://cloudsecurityalliance.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34] transition-colors"
                    >
                      Cloud Security Alliance
                    </a>{" "}
                    CAIQ v4, a{" "}
                    <a
                      href="https://sharedassessments.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#28664A] underline underline-offset-2 hover:text-[#074E34] transition-colors"
                    >
                      Shared Assessments
                    </a>{" "}
                    SIG Lite spreadsheet, or a bespoke 150-question custom Excel file, the ingestion engine identifies requirement cells automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-lg bg-white border border-[#E7E5DE]">
                <span className="w-8 h-8 rounded-full bg-[#EBF3EF] text-[#074E34] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                    Execute Grounded Evidence Matching
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                    The engine drafts answers to each control requirement, pairing each draft with an exact highlighted quote from your verified documentation. If an inquiry touches on an area where your documentation has no corresponding policy (such as a control you do not support), the system flags it as an explicit gap rather than guessing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-lg bg-white border border-[#E7E5DE]">
                <span className="w-8 h-8 rounded-full bg-[#EBF3EF] text-[#074E34] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                    Human-in-the-Loop Verification &amp; Native Export
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                    A sales engineer or security lead opens the verification split-view. Reviewing a question takes five seconds because the supporting document and paragraph are highlighted directly beside the draft. Approve responses with one click and export the native spreadsheet back to procurement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: 10-Point Checklist */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-[#28664A]" />
              10-Point Checklist for Evaluating Automation Tools
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              Not all automation tools are equivalent. This checklist surfaces the questions that separate genuinely trustworthy platforms from tools that create legal and operational risk. Run every vendor through it before signing a contract.
            </p>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  question: "Does it cite exact document paragraphs and page numbers, not just document names?",
                  detail: "Document-name-only citations save no verification time. You need line-level traceability to validate answers in seconds, not minutes.",
                },
                {
                  number: "02",
                  question: "Does it preserve native Excel formulas, dropdowns, and scoring macros on export?",
                  detail: "Many procurement teams use weighted scoring workbooks. If the export breaks those macros, the buyer cannot process your submission.",
                },
                {
                  number: "03",
                  question: "Does it work with your existing evidence (SOC 2, policies) or require a specific compliance platform?",
                  detail: "Tools that lock you into a proprietary GRC platform add months of onboarding before you can answer a single questionnaire.",
                },
                {
                  number: "04",
                  question: "Does it flag gaps where you have no matching evidence, rather than guessing?",
                  detail: "A tool that invents answers to fill gaps is worse than no automation at all. Gap flagging is a mandatory safety requirement, not a nice-to-have.",
                },
                {
                  number: "05",
                  question: "Is there a human-in-the-loop approval step before anything is sent to customers?",
                  detail: "Automated submissions without human sign-off are a contractual and reputational risk. The approval workflow should be enforced by the platform, not just recommended.",
                },
                {
                  number: "06",
                  question: "Where is your data stored and is it isolated from other customers' data?",
                  detail: "Ask for the specific cloud region, storage service, and tenant isolation architecture. Vague answers about &quot;enterprise-grade security&quot; are a red flag.",
                },
                {
                  number: "07",
                  question: "Is your documentation ever used to train public AI models? Get this in writing.",
                  detail: "Some vendors use customer data to improve shared models. If your SOC 2 or policies become training data, you have a confidentiality breach.",
                },
                {
                  number: "08",
                  question: "Can it handle vendor portals (OneTrust, Whistic, ServiceNow) in addition to Excel?",
                  detail: "Portal-based questionnaires are increasingly common in enterprise procurement. Excel-only tools cannot support deals through these platforms.",
                },
                {
                  number: "09",
                  question: "How long does onboarding and first completion take? (Under 24 hours vs. weeks matters for active deals)",
                  detail: "If you receive a questionnaire with a 5-day deadline, a tool requiring 3 weeks of onboarding is not usable. Ask for the median time-to-first-completion from other customers.",
                },
                {
                  number: "10",
                  question: "What happens to your data if you cancel? Can you export it immediately?",
                  detail: "Data portability and deletion guarantees should be explicit in the contract, not buried in a vague &quot;we may retain data for 90 days&quot; clause.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-4 p-5 rounded-lg bg-white border border-[#E7E5DE] shadow-sm"
                >
                  <span className="w-9 h-9 rounded-full bg-[#EBF3EF] text-[#074E34] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {item.number}
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-[#1A1C19] mb-1">{item.question}</p>
                    <p
                      className="text-xs text-[#566155] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.detail }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: 5 Common Mistakes */}
          <section className="space-y-6 text-[#1A1C19] mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] tracking-tight">
              5 Common Mistakes Teams Make When Automating
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#566155]">
              These errors show up repeatedly, often from teams that have done the right thing by investing in automation but undermined the effort by cutting corners on implementation.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE] shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-bold text-[#BA1A1A]">M1</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1">
                      Using ChatGPT or a generic LLM to draft answers
                    </h3>
                    <p className="text-xs text-[#566155] leading-relaxed">
                      Generic language models generate plausible-sounding but ungrounded answers. When a control claim turns out to be false (for example, claiming SOC 2 CC6.1 coverage you do not have), that is a written misrepresentation to a prospective customer. The liability risk is substantial in enterprise contracts that include vendor attestation clauses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE] shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-bold text-[#BA1A1A]">M2</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1">
                      Not having a human review step before submitting
                    </h3>
                    <p className="text-xs text-[#566155] leading-relaxed">
                      Even grounded AI makes errors, particularly on nuanced control questions involving scope boundaries or compensating controls. Skipping human sign-off to &quot;save time&quot; at the final step undermines the entire purpose of building a defensible response process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE] shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-bold text-[#BA1A1A]">M3</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1">
                      Maintaining a static answer library instead of live document indexing
                    </h3>
                    <p className="text-xs text-[#566155] leading-relaxed">
                      A frozen answer library is accurate on the day it was written. When your SOC 2 renews, your encryption policy updates, or a vendor changes, the library silently becomes wrong. Live document indexing re-reads your source files each time, so answers reflect your current state.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE] shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-bold text-[#BA1A1A]">M4</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1">
                      Ignoring gap questions
                    </h3>
                    <p className="text-xs text-[#566155] leading-relaxed">
                      Unanswered or blank items on a vendor questionnaire are frequently scored worse by procurement teams than a transparent &quot;No, here is our compensating control.&quot; When the tool flags a gap, that is an action item, not something to leave blank. Address every flagged item before submitting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[#E7E5DE] shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-bold text-[#BA1A1A]">M5</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1">
                      Starting the automation process after the buyer has already set a response deadline
                    </h3>
                    <p className="text-xs text-[#566155] leading-relaxed">
                      First-time use of any questionnaire automation tool requires at minimum 48 hours: document upload, ingestion, review of initial outputs, and correction of any formatting or mapping issues. If you receive a questionnaire with a 72-hour deadline and have never used the tool, you will likely miss it. Set up your documentation index before the next questionnaire arrives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: FAQs */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-12 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions About Questionnaire Automation
            </h2>
            <div className="space-y-6 text-sm">
              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  What is the difference between generic AI and grounded questionnaire automation?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Generic AI models generate answers based on probabilistic patterns, frequently inventing compliance claims or citing nonexistent audits. Grounded questionnaire automation strictly confines responses to verified company evidence, providing exact document and page number citations for every claim.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  Will security questionnaire automation replace human security reviewers?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  No. The goal is not to eliminate human oversight, but to eliminate manual clerical work. Human reviewers transition from writing answers from scratch to acting as authorizers, validating verified citations in a fraction of the time.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  Can we automate questionnaires without a completed SOC 2 Type II report?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Yes. You can index internal information security policies, ISO 27001 documentation, penetration testing summary letters, privacy policies, and live trust center URLs. The engine utilizes whatever verified evidence you provide.
                </p>
              </div>

              <div className="border-b border-[#E7E5DE]/60 pb-5">
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  Can I use security questionnaire automation without a SOC 2 report?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Yes. Upload your existing information security policy, penetration test executive summary, privacy policy, and architecture overview. The engine works with whatever verified documentation you provide. A SOC 2 report dramatically improves coverage, but it is not a prerequisite.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-2">
                  How do I handle questions where my company does not meet the control?
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Answer transparently. The automation tool should flag the gap rather than guessing. Write a clear compensating control explanation: state what you do instead, why it achieves the same risk objective, and when you plan to implement the requested control if it is on your roadmap. Procurement reviewers consistently score a clear &quot;No, here is what we do instead&quot; higher than a blank or evasive response.
                </p>
              </div>
            </div>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="Security Questionnaire Automation Guide"
            badge="Free 24-Hour Evaluation"
            heading="Ready to Automate Your Next Security Questionnaire?"
            description="Send us your pending customer questionnaire and your security documentation. We will complete it with 100% verified source citations in under 24 hours at zero cost."
            buttonText="Run My Questionnaire Free"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
