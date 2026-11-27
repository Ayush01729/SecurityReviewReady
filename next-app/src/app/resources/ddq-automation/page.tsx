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
  AlertTriangle,
  Lock,
  Database,
  HelpCircle,
  BookOpen,
  Zap,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Due Diligence Automation: AI DDQ Software [2026]",
  description:
    "Due diligence automation software with AI-grounded citations. Complete investor, enterprise, and vendor DDQs 10x faster with verified source citations and human-in-the-loop review.",
  alternates: {
    canonical: "/resources/ddq-automation",
  },
  openGraph: {
    title: "Due Diligence Automation: Complete DDQs 10x Faster with AI (2026)",
    description:
      "Complete investor, enterprise, and vendor Due Diligence Questionnaires automatically with verified source citations. Zero hallucinations. Human-in-the-loop review.",
    url: "https://securityreviewready.com/resources/ddq-automation",
    siteName: "Security Review Ready",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://securityreviewready.com" },
    { "@type": "ListItem", "position": 2, "name": "Resources & Guides", "item": "https://securityreviewready.com/resources" },
    { "@type": "ListItem", "position": 3, "name": "DDQ Automation", "item": "https://securityreviewready.com/resources/ddq-automation" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/resources/ddq-automation#article",
  "headline": "Due Diligence Automation: Complete DDQs 10x Faster with AI",
  "description": "Complete guide to automating Due Diligence Questionnaire (DDQ) responses using AI with verified source citations.",
  "datePublished": "2026-11-01T00:00:00Z",
  "dateModified": "2026-11-27T00:00:00Z",
  "author": { "@type": "Person", "name": "Security Review Ready Team" },
  "publisher": { "@type": "Organization", "name": "Security Review Ready", "url": "https://securityreviewready.com" },
  "wordCount": 5000,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Due Diligence Questionnaire (DDQ)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Due Diligence Questionnaire (DDQ) is a structured assessment document that organizations send to vendors, software providers, or investment targets to evaluate their security posture, operational practices, compliance certifications, and financial controls. DDQs typically contain between 50 and 500 questions covering security, privacy, business continuity, and governance.",
      },
    },
    {
      "@type": "Question",
      "name": "How does DDQ automation work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DDQ automation software like Security Review Ready ingests your verified compliance documentation (SOC 2 Type II reports, ISO 27001 certifications, security policies, and trust center documentation), then uses AI to match each DDQ question against your evidence and draft a cited response. Every drafted answer includes the source document name, section header, and page number. A human reviewer then approves answers before they are exported back to the buyer's format.",
      },
    },
    {
      "@type": "Question",
      "name": "What types of DDQs can be automated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security Review Ready can automate vendor security DDQs, enterprise IT procurement DDQs, investor due diligence questionnaires (security and compliance sections), SOC 2 readiness questionnaires, and custom Excel or Word DDQs sent by enterprise buyers. It supports CAIQ v4, SIG, SIG Lite, VSA, and bespoke questionnaire formats.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does it take to complete a DDQ automatically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With Security Review Ready, the first pass of a DDQ is typically completed in under 24 hours after submitting your compliance documentation. After the initial evidence ingestion, subsequent DDQs for other buyers can be completed significantly faster since your evidence library is already indexed.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between DDQ automation and due diligence automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Due diligence automation is the broader category that includes automating any vendor evaluation process — M&A due diligence, investor assessments, and regulatory compliance checks. DDQ (Due Diligence Questionnaire) automation is a specific subset focused on automating the questionnaire response workflow. Security Review Ready handles DDQ automation as part of the broader due diligence automation ecosystem, specifically focusing on security and compliance questionnaires.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does due diligence automation software cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Due diligence automation software typically ranges from $500 to $5,000+ per month depending on the vendor and feature set. Enterprise platforms like OneTrust or Prevalent can exceed $50,000 annually. Security Review Ready offers a free pilot tier where your first security questionnaire is completed at no cost, with transparent per-questionnaire pricing after that — no annual contracts or platform fees required.",
      },
    },
    {
      "@type": "Question",
      "name": "Can due diligence automation handle custom questionnaire formats?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Modern due diligence automation platforms like Security Review Ready accept questionnaires in any format — Excel spreadsheets (including complex multi-tab workbooks with formulas), Word documents, PDFs, and vendor portal submissions through platforms like OneTrust, ServiceNow, and Whistic. The automation engine preserves the original formatting and formula structures when exporting completed responses.",
      },
    },
    {
      "@type": "Question",
      "name": "Is automated due diligence legally compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automated due diligence is fully compliant when implemented with proper safeguards. Security Review Ready enforces a strict human-in-the-loop review process — no response is ever sent to a buyer without explicit human approval. Every AI-drafted answer includes verifiable source citations pointing to your actual compliance documentation, creating a defensible audit trail that satisfies regulatory requirements under SOC 2, ISO 27001, HIPAA, and GDPR frameworks.",
      },
    },
  ],
};

const DDQ_TYPES = [
  {
    type: "Vendor Security DDQ",
    sender: "Enterprise procurement / IT security teams",
    typical_questions: "100–500 questions",
    domains: "Access control, encryption, incident response, data handling, SOC 2 / ISO 27001 certifications",
    icon: <ShieldCheck className="w-5 h-5 text-[#28664A]" />,
  },
  {
    type: "Investor Due Diligence DDQ",
    sender: "VC / PE investors, acquirers",
    typical_questions: "50–200 questions",
    domains: "Security program maturity, compliance posture, data breach history, security staffing, risk management",
    icon: <BarChart3 className="w-5 h-5 text-[#28664A]" />,
  },
  {
    type: "Financial Services DDQ",
    sender: "Banks, insurance, fintech regulated buyers",
    typical_questions: "200–600 questions",
    domains: "Data residency, encryption standards, audit logs, vendor sub-processor disclosure, GDPR / CCPA compliance",
    icon: <Lock className="w-5 h-5 text-[#28664A]" />,
  },
  {
    type: "Healthcare / HIPAA DDQ",
    sender: "Healthcare providers, payers, health tech buyers",
    typical_questions: "150–400 questions",
    domains: "HIPAA Technical Safeguards, PHI handling, Business Associate Agreement requirements, breach notification",
    icon: <Database className="w-5 h-5 text-[#28664A]" />,
  },
];

export default function DDQAutomationPage() {
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
            <span className="text-[#074E34] font-medium">DDQ Automation</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <FileText className="w-3.5 h-3.5" />
              Practitioner Guide · Updated November 2026
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              Due Diligence Automation: Complete DDQs 10x Faster with AI
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-2xl leading-relaxed">
              A Due Diligence Questionnaire (DDQ) can stall a deal for weeks. This guide explains how DDQ automation 
              works, what types of DDQs can be automated with AI, and how grounded citation engines eliminate 
              hallucinations without sacrificing speed.
            </p>

            {/* TL;DR for AI citation */}
            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">TL;DR</p>
              <p className="text-[#566155] leading-relaxed">
                DDQ automation software ingests your SOC 2 reports, ISO 27001 certs, and security policies, then 
                uses AI to draft answers for each DDQ question — citing the exact source paragraph and page number. 
                A human reviewer approves answers before export. Teams using Security Review Ready complete DDQs 
                in under 24 hours instead of 2–4 weeks of manual work.
              </p>
            </div>
          </div>

          {/* What is a DDQ */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              What is a Due Diligence Questionnaire (DDQ)?
            </h2>
            <p className="text-[#566155] leading-relaxed mb-4">
              A <strong className="text-[#1A1C19]">Due Diligence Questionnaire (DDQ)</strong> is a structured 
              document that organizations send to prospective vendors, software providers, or investment targets to 
              evaluate their security posture, operational practices, compliance certifications, and financial controls 
              before entering a business relationship.
            </p>
            <p className="text-[#566155] leading-relaxed mb-4">
              DDQs are common across enterprise procurement, investor due diligence, financial services vendor 
              assessments, and healthcare supplier reviews. They typically contain between 50 and 600 questions 
              spanning security, privacy, business continuity, audit history, and governance.
            </p>
            <p className="text-[#566155] leading-relaxed">
              For B2B SaaS teams selling into enterprise accounts, DDQs are one of the most time-intensive 
              compliance activities — a single DDQ can require 20–80 hours of work if completed manually by 
              pulling answers from scattered policies, audit reports, and previous responses.
            </p>
          </section>

          {/* Types of DDQs */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              Types of Due Diligence Questionnaires
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {DDQ_TYPES.map((ddq, i) => (
                <div key={i} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    {ddq.icon}
                    <h3 className="font-semibold text-[#1A1C19] text-sm">{ddq.type}</h3>
                  </div>
                  <dl className="text-xs text-[#566155] space-y-1.5">
                    <div><dt className="font-medium text-[#1A1C19] inline">Sent by: </dt><dd className="inline">{ddq.sender}</dd></div>
                    <div><dt className="font-medium text-[#1A1C19] inline">Size: </dt><dd className="inline">{ddq.typical_questions}</dd></div>
                    <div><dt className="font-medium text-[#1A1C19] inline">Key domains: </dt><dd className="inline">{ddq.domains}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
          </section>

          {/* How DDQ Automation Works */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              How DDQ Automation Works
            </h2>
            <div className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Ingest your compliance evidence",
                  desc: "Upload your SOC 2 Type II reports, ISO 27001 certifications, internal security policies, trust center URLs, and any previously completed questionnaires. The automation engine indexes these as your verified evidence library.",
                  icon: <Database className="w-5 h-5 text-[#28664A]" />,
                },
                {
                  step: "2",
                  title: "Parse the incoming DDQ",
                  desc: "Submit the buyer's DDQ in its original format — Excel, Word, PDF, or vendor portal (OneTrust, ServiceNow, etc.). The engine reads every question and classifies it by control domain (access control, encryption, incident response, etc.).",
                  icon: <FileText className="w-5 h-5 text-[#28664A]" />,
                },
                {
                  step: "3",
                  title: "AI matches questions to evidence",
                  desc: "For each DDQ question, the engine searches your evidence library using semantic and lexical matching. It retrieves the most relevant evidence passage and drafts a grounded answer — citing the exact document name, section header, and page number.",
                  icon: <Zap className="w-5 h-5 text-[#28664A]" />,
                },
                {
                  step: "4",
                  title: "Gap detection — no hallucinations",
                  desc: "If a DDQ question requires a control or certification you do not have documented evidence for, the engine flags it explicitly rather than fabricating an answer. This prevents compliance misrepresentation.",
                  icon: <AlertTriangle className="w-5 h-5 text-[#28664A]" />,
                },
                {
                  step: "5",
                  title: "Human review and export",
                  desc: "Every drafted answer is presented as an editable draft with the source citation visible. Your team validates the response against the cited paragraph and approves with one click. The completed DDQ is then exported in the buyer's original format without broken formulas.",
                  icon: <CheckCircle2 className="w-5 h-5 text-[#28664A]" />,
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#EBF3EF] flex items-center justify-center shrink-0 font-mono text-sm font-semibold text-[#28664A]">
                    {s.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {s.icon}
                      <h3 className="font-semibold text-[#1A1C19] text-sm">{s.title}</h3>
                    </div>
                    <p className="text-xs text-[#566155] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Time savings */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              DDQ Automation: Before vs After
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E7E5DE] rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#BA1A1A] text-sm mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Without Automation (Manual)
                </h3>
                <ul className="space-y-2 text-xs text-[#566155]">
                  <li className="flex gap-2"><span className="text-[#BA1A1A]">✗</span> 2–4 weeks to complete a 300-question DDQ</li>
                  <li className="flex gap-2"><span className="text-[#BA1A1A]">✗</span> 20–80 person-hours per questionnaire</li>
                  <li className="flex gap-2"><span className="text-[#BA1A1A]">✗</span> Answers pulled from scattered Slack threads and old docs</li>
                  <li className="flex gap-2"><span className="text-[#BA1A1A]">✗</span> No audit trail linking answers to source evidence</li>
                  <li className="flex gap-2"><span className="text-[#BA1A1A]">✗</span> Deals stall while security team reviews</li>
                  <li className="flex gap-2"><span className="text-[#BA1A1A]">✗</span> Risk of inconsistent answers across questionnaires</li>
                </ul>
              </div>
              <div className="bg-[#F0F7F4] border border-[#28664A]/30 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#28664A] text-sm mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> With Security Review Ready
                </h3>
                <ul className="space-y-2 text-xs text-[#566155]">
                  <li className="flex gap-2"><span className="text-[#28664A]">✓</span> First pass completed in under 24 hours</li>
                  <li className="flex gap-2"><span className="text-[#28664A]">✓</span> Human review time reduced to 1–3 hours</li>
                  <li className="flex gap-2"><span className="text-[#28664A]">✓</span> Every answer cites exact document, section, and page</li>
                  <li className="flex gap-2"><span className="text-[#28664A]">✓</span> Full audit trail for compliance review</li>
                  <li className="flex gap-2"><span className="text-[#28664A]">✓</span> Deals progress while evidence is matched automatically</li>
                  <li className="flex gap-2"><span className="text-[#28664A]">✓</span> Consistent answers across all buyer DDQs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What is Due Diligence Automation */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              What is Due Diligence Automation?
            </h2>
            <p className="text-[#566155] leading-relaxed mb-4">
              <strong className="text-[#1A1C19]">Due diligence automation</strong> is the use of AI and software to accelerate the evaluation processes that organizations perform before entering business relationships. This includes vendor security assessments, investor due diligence reviews, M&A document analysis, regulatory compliance checks, and third-party risk questionnaires.
            </p>
            <p className="text-[#566155] leading-relaxed mb-4">
              In the context of B2B SaaS, due diligence automation primarily focuses on automating the response side — helping software vendors complete the security questionnaires, DDQs, and compliance assessments that enterprise buyers require before procurement approval. Rather than manually searching through scattered policies and audit reports, due diligence automation software indexes your verified compliance evidence and uses AI to draft cited responses.
            </p>
            <p className="text-[#566155] leading-relaxed">
              The market for due diligence automation has grown rapidly as regulatory frameworks like <Link href="/resources/vendor-risk-questionnaire" className="text-[#28664A] underline hover:text-[#074E34]">vendor risk management programs</Link>, SEC cybersecurity disclosure rules, DORA (Digital Operational Resilience Act), and NIS2 have increased the volume and complexity of security assessments that SaaS vendors must complete.
            </p>
          </section>

          {/* Why Due Diligence Automation Matters */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Why Due Diligence Automation Matters in 2026
            </h2>
            <div className="space-y-4">
              {[
                { title: "Questionnaire volume is exploding", desc: "Enterprise buyers now send security questionnaires earlier in the sales cycle. The average B2B SaaS company completing enterprise deals receives 15-40 security questionnaires per quarter, each containing 100-500 questions. Without due diligence automation, security teams become a permanent bottleneck." },
                { title: "Regulatory pressure is increasing", desc: "SEC cybersecurity disclosure rules, DORA for financial services, NIS2 for EU critical infrastructure, and updated HIPAA requirements have all expanded the scope of vendor due diligence. Questionnaires are getting longer and more detailed, covering new domains like AI governance and supply chain risk." },
                { title: "Security team burnout is real", desc: "GRC analysts and security engineers spend 30-60% of their time on questionnaire responses instead of actual security work. Due diligence automation returns those hours to threat detection, vulnerability management, and security architecture — the work that actually reduces risk." },
                { title: "Deal velocity depends on response speed", desc: "Enterprise procurement timelines are shrinking. Buyers evaluate 3-5 vendors simultaneously. The vendor that returns a complete, well-cited questionnaire first has a measurable advantage. Due diligence automation compresses response time from weeks to hours." },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <h3 className="font-semibold text-[#1A1C19] text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-[#566155] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Due Diligence Automation ROI */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              Due Diligence Automation ROI: Manual vs Automated
            </h2>
            <p className="text-[#566155] leading-relaxed mb-6">
              The return on investment for due diligence automation is measurable within the first quarter of deployment. Here is how manual and <Link href="/resources/security-questionnaire-automation" className="text-[#28664A] underline hover:text-[#074E34]">automated security questionnaire</Link> workflows compare across key metrics:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#E7E5DE] rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#EBF3EF]">
                    <th className="text-left px-4 py-3 font-semibold text-[#074E34] text-xs">Metric</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#BA1A1A] text-xs">Manual Process</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#28664A] text-xs">With Automation</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-[#566155]">
                  {[
                    ["Time per 300-question DDQ", "2–4 weeks", "Under 24 hours"],
                    ["Person-hours per questionnaire", "20–80 hours", "1–3 hours (review only)"],
                    ["Cost per questionnaire", "$2,400–$9,600", "$240–$360"],
                    ["Error rate (inconsistent answers)", "15–25%", "< 2%"],
                    ["Audit trail coverage", "Partial or none", "100% source-cited"],
                    ["Questionnaires per quarter", "5–10 max capacity", "40–100+"],
                    ["Deal cycle impact", "2–6 week delay", "Same-week turnaround"],
                  ].map(([metric, manual, auto], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF9F6]"}>
                      <td className="px-4 py-2.5 font-medium text-[#1A1C19]">{metric}</td>
                      <td className="px-4 py-2.5">{manual}</td>
                      <td className="px-4 py-2.5 text-[#28664A] font-medium">{auto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              Key Features of Due Diligence Automation Software
            </h2>
            <p className="text-[#566155] leading-relaxed mb-6">
              When evaluating due diligence automation platforms, enterprise buyers and <Link href="/resources/how-to-answer-security-questionnaires-fast" className="text-[#28664A] underline hover:text-[#074E34]">security teams looking to speed up questionnaire responses</Link> should look for these eight capabilities:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Evidence Library Ingestion", desc: "Automatically indexes SOC 2 reports, ISO 27001 certs, security policies, trust center pages, and previously completed questionnaires into a searchable knowledge base." },
                { title: "Semantic Question Matching", desc: "Uses AI to understand the intent behind each questionnaire question and match it to the most relevant evidence passage — not just keyword matching, but contextual understanding." },
                { title: "Grounded Citation Generation", desc: "Every drafted answer includes the exact source document name, section header, and page number. No hallucinated claims. No fabricated compliance statements." },
                { title: "Gap Detection & Flagging", desc: "When a question requires evidence you do not have documented, the system explicitly flags it rather than inventing an answer. This prevents compliance misrepresentation." },
                { title: "Format Preservation", desc: "Exports completed questionnaires in the buyer's original format — Excel (with formulas and conditional formatting intact), Word, PDF, or vendor portal submission." },
                { title: "Human-in-the-Loop Review", desc: "Every AI-drafted response is presented as an editable draft with the source citation visible. Your team validates and approves with one click before anything is sent." },
                { title: "Multi-Framework Support", desc: "Handles CAIQ v4, SIG, SIG Lite, VSA, custom DDQs, and bespoke questionnaire formats from any enterprise buyer without reconfiguration." },
                { title: "Continuous Evidence Sync", desc: "Automatically detects when your compliance documents are updated and re-indexes the evidence library so future questionnaire responses always reflect your current security posture." },
              ].map((feature, i) => (
                <div key={i} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <h3 className="font-semibold text-[#1A1C19] text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-[#566155] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Choose */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              How to Choose Due Diligence Automation Software
            </h2>
            <p className="text-[#566155] leading-relaxed mb-6">
              Not all due diligence automation tools are built the same. Some platforms like OneTrust and Prevalent focus on the buyer side (sending and managing questionnaires), while others like Security Review Ready focus on the responder side (completing incoming questionnaires). Before evaluating <Link href="/compare/security-questionnaire-software-pricing" className="text-[#28664A] underline hover:text-[#074E34]">security questionnaire software pricing</Link>, consider these six criteria:
            </p>
            <div className="space-y-3">
              {[
                { num: "1", title: "Citation accuracy over response speed", desc: "A tool that generates fast but unverifiable answers creates compliance risk. Prioritize platforms that cite exact source paragraphs for every response." },
                { num: "2", title: "Format compatibility", desc: "Enterprise buyers send questionnaires in dozens of formats. Ensure the platform handles multi-tab Excel workbooks with conditional formatting, Word templates, and direct vendor portal integrations." },
                { num: "3", title: "Human review workflow", desc: "Fully autonomous questionnaire completion is a liability. The best platforms enforce human-in-the-loop approval before any response leaves your organization." },
                { num: "4", title: "Evidence ingestion breadth", desc: "Can the platform ingest SOC 2 audit reports, ISO certificates, internal security policies, trust center URLs, and previously completed questionnaires? The broader the evidence base, the higher the coverage rate." },
                { num: "5", title: "Transparent pricing", desc: "Avoid platforms that require annual commitments before you can evaluate accuracy. Look for free pilot programs or per-questionnaire pricing that lets you validate ROI before committing." },
                { num: "6", title: "Data security architecture", desc: "Your compliance documents contain sensitive information. Ensure the platform enforces tenant isolation, encryption at rest and in transit, and never uses your data to train public AI models." },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#EBF3EF] flex items-center justify-center shrink-0 font-mono text-sm font-semibold text-[#28664A]">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1C19] text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-[#566155] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              Due Diligence Automation for Different Industries
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { industry: "Financial Services", considerations: "SOX compliance, SEC cybersecurity rules, DORA requirements, OCC third-party risk guidance. Financial institutions send the most detailed DDQs (200-600 questions) covering data residency, encryption standards, and sub-processor disclosure.", icon: <BarChart3 className="w-5 h-5 text-[#28664A]" /> },
                { industry: "Healthcare & Life Sciences", considerations: "HIPAA Technical Safeguards, BAA requirements, PHI handling protocols, FDA 21 CFR Part 11 for regulated systems. Healthcare DDQs focus heavily on data classification, breach notification timelines, and physical security controls.", icon: <ShieldCheck className="w-5 h-5 text-[#28664A]" /> },
                { industry: "Technology & SaaS", considerations: "SOC 2 Type II, ISO 27001, CSA STAR, and custom security frameworks. Tech companies face the highest questionnaire volume — often 20-40 per quarter — making due diligence automation essential for scaling enterprise sales.", icon: <Zap className="w-5 h-5 text-[#28664A]" /> },
                { industry: "Government & Public Sector", considerations: "FedRAMP, NIST 800-53, CMMC, StateRAMP compliance. Government due diligence questionnaires follow strict control frameworks with specific evidence requirements that must be mapped precisely to federal standards.", icon: <Lock className="w-5 h-5 text-[#28664A]" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-[#1A1C19] text-sm">{item.industry}</h3>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">{item.considerations}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              DDQ Automation: Frequently Asked Questions
            </h2>
            <div className="space-y-5 text-sm">
              {[
                {
                  q: "What is a Due Diligence Questionnaire (DDQ)?",
                  a: "A DDQ is a structured assessment document sent by enterprise buyers, investors, or financial institutions to evaluate a vendor's security posture, compliance certifications, operational practices, and risk management. DDQs typically contain 50–600 questions across access control, encryption, incident response, data handling, and governance domains.",
                },
                {
                  q: "How does DDQ automation work?",
                  a: "DDQ automation software ingests your compliance documentation (SOC 2 reports, ISO 27001 certs, security policies), then uses AI to match each DDQ question to your verified evidence and draft a cited response. Every answer includes the source document name, section, and page number. A human reviewer then approves answers before export.",
                },
                {
                  q: "What types of DDQs can be automated?",
                  a: "Security Review Ready can automate vendor security DDQs, enterprise IT procurement DDQs, investor due diligence questionnaires (security sections), SOC 2 readiness questionnaires, and custom Excel or Word DDQs. Supported formats include CAIQ v4, SIG, SIG Lite, VSA, and bespoke questionnaire structures.",
                },
                {
                  q: "How long does DDQ automation take?",
                  a: "With Security Review Ready, the first pass of a DDQ is typically completed in under 24 hours after submitting your compliance documentation. After initial evidence ingestion, subsequent DDQs can be completed significantly faster since your evidence library is already indexed.",
                },
                {
                  q: "What is the difference between DDQ automation and due diligence automation?",
                  a: "Due diligence automation is the broader category that includes automating any vendor evaluation process — M&A due diligence, investor assessments, and regulatory compliance checks. DDQ (Due Diligence Questionnaire) automation is a specific subset focused on automating the questionnaire response workflow. Security Review Ready handles DDQ automation as part of the broader due diligence automation ecosystem, specifically focusing on security and compliance questionnaires.",
                },
                {
                  q: "How much does due diligence automation software cost?",
                  a: "Due diligence automation software typically ranges from $500 to $5,000+ per month depending on the vendor and feature set. Enterprise platforms like OneTrust or Prevalent can exceed $50,000 annually. Security Review Ready offers a free pilot tier where your first security questionnaire is completed at no cost, with transparent per-questionnaire pricing after that — no annual contracts or platform fees required.",
                },
                {
                  q: "Can due diligence automation handle custom questionnaire formats?",
                  a: "Yes. Modern due diligence automation platforms like Security Review Ready accept questionnaires in any format — Excel spreadsheets (including complex multi-tab workbooks with formulas), Word documents, PDFs, and vendor portal submissions through platforms like OneTrust, ServiceNow, and Whistic. The automation engine preserves the original formatting and formula structures when exporting completed responses.",
                },
                {
                  q: "Is automated due diligence legally compliant?",
                  a: "Automated due diligence is fully compliant when implemented with proper safeguards. Security Review Ready enforces a strict human-in-the-loop review process — no response is ever sent to a buyer without explicit human approval. Every AI-drafted answer includes verifiable source citations pointing to your actual compliance documentation, creating a defensible audit trail that satisfies regulatory requirements under SOC 2, ISO 27001, HIPAA, and GDPR frameworks.",
                },
              ].map((item, i, arr) => (
                <div key={i} className={i < arr.length - 1 ? "border-b border-[#E7E5DE]/60 pb-4" : ""}>
                  <h3 className="font-semibold text-[#1A1C19] mb-1">{item.q}</h3>
                  <p className="text-xs text-[#566155] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-16">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/resources/security-questionnaire-automation", label: "Security Questionnaire Automation: Practitioner's Guide", desc: "Cut response time by 90%" },
                { href: "/resources/vendor-security-questionnaire-guide", label: "Vendor Security Questionnaire Guide", desc: "30-question checklist and control domains" },
                { href: "/resources/caiq-v4-guide", label: "CAIQ v4 Framework Guide", desc: "CSA CCM 4.0 mapping and response strategies" },
                { href: "/resources/sig-vs-sig-lite", label: "SIG vs SIG Lite", desc: "Comparison and domain overview" },
                { href: "/resources/vendor-risk-questionnaire", label: "Vendor Risk Questionnaire (VRQ) Guide", desc: "Risk tiering frameworks and assessment domains" },
                { href: "/resources/how-to-answer-security-questionnaires-fast", label: "How to Answer Security Questionnaires Fast", desc: "5-step practitioner playbook" },
                { href: "/resources/ai-agents-for-security-questionnaires", label: "AI Agents for Security Questionnaires", desc: "Agentic AI and answer engine optimization" },
                { href: "/resources/best-security-questionnaire-automation-software", label: "Best Security Questionnaire Software (2026)", desc: "8 tools compared with feature matrix" },
                { href: "/compare/security-questionnaire-software-pricing", label: "Security Questionnaire Software Pricing", desc: "2026 pricing comparison across vendors" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-start gap-3 p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group"
                >
                  <BookOpen className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1C19] group-hover:text-[#28664A] transition-colors">{link.label}</p>
                    <p className="text-xs text-[#566155]">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <InlineCta
            source="DDQ Automation Guide"
            heading="Automate your next DDQ in under 24 hours"
            description="Upload your SOC 2 report and security policies. We'll parse your DDQ and return source-cited responses ready for human review — completely free for your first questionnaire."
            buttonText="Start Free DDQ Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

