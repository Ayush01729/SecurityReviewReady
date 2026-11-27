import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Scale,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  HelpCircle,
  Building2,
  Layers,
  DollarSign,
  ArrowRightLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "OneTrust Alternative for Questionnaires [2026]",
  description:
    "Looking for a OneTrust alternative or OneTrust vendor risk management alternative for security questionnaires? Compare setup time, citation accuracy, Excel preservation, evidence ingestion, and pricing vs Security Review Ready.",
  keywords: [
    "OneTrust alternative",
    "OneTrust vendor risk management alternative",
    "OneTrust questionnaire alternative",
    "Security Review Ready vs OneTrust",
  ],
  alternates: {
    canonical: "/compare/onetrust-questionnaire-alternative",
  },
  openGraph: {
    title:
      "OneTrust Alternative: Faster Security Questionnaire Automation Without Enterprise Complexity (2026)",
    description:
      "Compare Security Review Ready vs OneTrust for questionnaire automation, source citation accuracy, Excel formula preservation, setup speed, and pricing.",
    url: "https://securityreviewready.com/compare/onetrust-questionnaire-alternative",
    siteName: "Security Review Ready",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://securityreviewready.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Compare",
      item: "https://securityreviewready.com/compare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "OneTrust Questionnaire Alternative",
      item: "https://securityreviewready.com/compare/onetrust-questionnaire-alternative",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id":
    "https://securityreviewready.com/compare/onetrust-questionnaire-alternative#article",
  headline:
    "OneTrust Alternative: Faster Security Questionnaire Automation Without Enterprise Complexity",
  description:
    "Detailed comparison of Security Review Ready vs OneTrust for security questionnaire automation, citation precision, setup speed, pricing, Excel preservation, and evidence ingestion.",
  author: {
    "@type": "Person",
    name: "Security Review Ready Team",
    url: "https://securityreviewready.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Security Review Ready",
    logo: {
      "@type": "ImageObject",
      url: "https://securityreviewready.com/icon.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://securityreviewready.com/compare/onetrust-questionnaire-alternative",
  },
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
};

const FAQS = [
  {
    question:
      "What makes Security Review Ready a strong OneTrust questionnaire alternative?",
    answer:
      "OneTrust is built as a broad enterprise privacy, consent, and third-party risk management suite, which introduces weeks of implementation and heavy ongoing library curation. Security Review Ready is a dedicated OneTrust questionnaire alternative that indexes your SOC 2 reports, ISO 27001 policies, and trust documentation in under 15 minutes and delivers 100% source-cited answers with exact page numbers in under 24 hours.",
  },
  {
    question:
      "How does OneTrust Vendor Risk Management pricing compare to Security Review Ready?",
    answer:
      "OneTrust uses custom enterprise contracts with reported platform entry minimums starting around $10,000/year, standalone Vendor Risk Management (VRM/TPRM) deployments typically starting around $30,000+/year, and multi-module privacy and GRC bundles scaling from $50,000 to $200,000+/year as of 2026, often alongside separate implementation fees. Security Review Ready offers a free pilot for your first questionnaire and transparent, flexible plans without multi-module lock-in.",
  },
  {
    question:
      "Can Security Review Ready help when a buyer sends us a questionnaire in their OneTrust portal?",
    answer:
      "Yes. Even if your own organization does not license OneTrust, enterprise buyers frequently issue assessments through OneTrust portals. Security Review Ready ingests your compliance evidence and drafts grounded, page-cited responses for the buyer's OneTrust questions so your team can verify and paste accurate answers back into the portal without guesswork.",
  },
  {
    question:
      "How hard is it to migrate questionnaire workflows from OneTrust to Security Review Ready?",
    answer:
      "Migration takes less than a day and requires zero professional services. Export your historical Q&A pairs from OneTrust alongside your primary compliance documents (SOC 2 Type II PDF, ISO 27001 certificates, and security policies), upload them into your isolated Security Review Ready workspace in under 15 minutes, and validate accuracy on a live questionnaire within 24 hours.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const COMPARISON_ROWS = [
  {
    feature: "Questionnaire Automation",
    srr: "Dedicated inbound response engine built for CAIQ, SIG, SIG Lite, DDQ, custom Excel, Word, PDF, and buyer portals (including OneTrust portals)",
    onetrust:
      "Questionnaire Response Automation (QRA) module bundled inside a broader Trust Intelligence, Privacy, and TPRM platform",
  },
  {
    feature: "Citation Accuracy",
    srr: "100% verified paragraph-level citations with document title, section header, and exact page number; refuses to fabricate unsupported claims",
    onetrust:
      "Matches questions via Athena AI against curated Q&A library entries and document repositories; often lacks page-level audit citations",
  },
  {
    feature: "Setup Time",
    srr: "Under 15 minutes to index policies and reports; first complete questionnaire turnaround in under 24 hours",
    onetrust:
      "Typically weeks to months for enterprise scoping, control framework mapping, workflow configuration, and onboarding",
  },
  {
    feature: "Pricing",
    srr: "Free first-questionnaire pilot (no credit card); transparent, flexible pricing with no enterprise suite lock-in",
    onetrust:
      "Custom annual contracts (as of 2026: ~$10k+ platform minimum; standalone VRM often $30k+/yr; multi-module suites $50k–$200k+/yr plus setup fees)",
  },
  {
    feature: "Excel Preservation",
    srr: "Writes strictly to target response cells while preserving nested formulas, cross-sheet lookups, dropdown validations, and conditional styling",
    onetrust:
      "Optimized for portal workflows and standard templates; heavily customized multi-tab Excel workbooks can require manual cleanup",
  },
  {
    feature: "Evidence Ingestion",
    srr: "Direct ingestion of SOC 2 Type II PDFs, ISO 27001 certificates, internal policies, trust centers, and prior spreadsheets with zero library upkeep",
    onetrust:
      "Relies on continuous manual curation, tagging, and maintenance of Q&A knowledge base entries alongside Vendorpedia profiles",
  },
];

const ONETRUST_STRENGTHS = [
  {
    title: "Broad Enterprise GRC & Third-Party Risk (TPRM)",
    description:
      "Centralizes vendor inventories, tiering, automated risk scoring across 50+ compliance frameworks, and continuous monitoring via the Vendorpedia exchange for large procurement organizations.",
  },
  {
    title: "Global Privacy & Consent Management",
    description:
      "Provides deep tooling for GDPR, CCPA/CPRA, cookie consent banners, Data Mapping, Privacy Impact Assessments (PIAs), and Data Processing Agreement (DPA) tracking.",
  },
  {
    title: "Unified Trust Profiles & Cross-Team Routing",
    description:
      "Hosts public or NDA-gated Vendor Trust Profiles and routes internal review tasks across Legal, InfoSec, and Risk owners when organizations already standardize on the OneTrust ecosystem.",
  },
];

const ONETRUST_GAPS = [
  {
    icon: Layers,
    title: "Enterprise Complexity & Suite Bloat",
    description:
      "OneTrust is engineered as an all-in-one governance platform covering privacy, ethics, AI governance, and vendor risk. For a sales engineer or security lead trying to turn around a 200-question spreadsheet before Friday, navigating multi-module administration and rigid workflows slows execution.",
  },
  {
    icon: DollarSign,
    title: "High, Opaque Enterprise Pricing",
    description:
      "OneTrust does not publish self-serve pricing. Market benchmarks show platform contracts starting around $10,000/year, standalone Vendor Risk Management modules commonly around $30,000+/year, and multi-module GRC bundles scaling from $50,000 to $200,000+/year—often with professional services fees and seat restrictions.",
  },
  {
    icon: Clock,
    title: "Weeks-to-Months Implementation & Library Upkeep",
    description:
      "Rolling out OneTrust QRA and VRM requires configuring ontologies, mapping control frameworks, and seeding a Q&A library. Unless your team continuously grooms Q&A pairs after every audit cycle, automated suggestions quickly drift out of date.",
  },
  {
    icon: FileSpreadsheet,
    title: "Custom Excel Friction & Citation Depth",
    description:
      "Enterprise buyers frequently send proprietary multi-tab Excel workbooks with weighted scoring macros and dropdowns. Library-first tools can struggle with complex sheet layouts and rarely attach exact SOC 2 document titles, section headers, and page numbers to every single cell.",
  },
];

const IDEAL_TEAMS = [
  {
    title: "B2B SaaS Teams Selling Upmarket",
    description:
      "Seed to Series C software teams that need to clear enterprise buyer security reviews in under 24 hours without signing a $30k+ annual OneTrust contract.",
  },
  {
    title: "Sales Engineering & Solutions Architecture",
    description:
      "Technical sellers losing hours every week to custom spreadsheets and quarter-end OneTrust portal assessments who want copy-ready, citation-backed answers.",
  },
  {
    title: "vCISOs & Security Consultancies",
    description:
      "Fractional CISOs managing multiple client evidence vaults from one workspace without forcing every startup client onto an enterprise GRC license.",
  },
  {
    title: "Audit-Sensitive Compliance Leads",
    description:
      "InfoSec leaders who require human-in-the-loop sign-off, zero public AI training guarantees, and exact page-level citations rather than unverified library guesses.",
  },
];

const MIGRATION_STEPS = [
  {
    step: "01",
    title: "Export Existing Answers & Primary Evidence",
    description:
      "Download your approved Q&A library from OneTrust (CSV or Excel) alongside your authoritative compliance files: SOC 2 Type II PDF, ISO 27001 certificate, internal InfoSec policies, and Trust Center URL.",
  },
  {
    step: "02",
    title: "Index Your Evidence Vault in Under 15 Minutes",
    description:
      "Upload your primary evidence into an isolated Security Review Ready tenant. Rather than tagging hundreds of static Q&A pairs, the engine indexes source paragraphs directly from your audit reports and policies.",
  },
  {
    step: "03",
    title: "Validate on a Live Questionnaire (Free 24h Pilot)",
    description:
      "Submit an active customer workbook (Excel, CAIQ, SIG, DDQ, or OneTrust portal question list) and compare citation precision, gap flags, and formula preservation side-by-side at zero cost.",
  },
  {
    step: "04",
    title: "Retire Unused Questionnaire Seats at Renewal",
    description:
      "Move inbound questionnaire response onto Security Review Ready cleanly. If your legal team still uses OneTrust strictly for cookie consent or privacy mapping, keep only those modules and drop costly QRA/VRM overhead.",
  },
];

const RELATED_GUIDES = [
  {
    href: "/compare/vanta-questionnaire-alternative",
    label: "Vanta Questionnaire Alternative",
    desc: "Compare dedicated, source-cited questionnaire automation against bundled compliance GRC modules.",
  },
  {
    href: "/compare/conveyor-alternative",
    label: "Conveyor Alternative",
    desc: "Side-by-side breakdown of citation depth, Excel formula retention, and onboarding speed vs Conveyor.",
  },
  {
    href: "/compare/whistic-alternative",
    label: "Whistic Alternative",
    desc: "Compare open custom-format questionnaire automation against Whistic's dual-sided vendor network.",
  },
  {
    href: "/compare/security-questionnaire-software-pricing",
    label: "Security Questionnaire Software Pricing (2026)",
    desc: "Real contract ranges, seat surcharges, and hidden implementation fees across 7 leading tools.",
  },
  {
    href: "/resources/best-security-questionnaire-automation-software",
    label: "Best Security Questionnaire Automation Software",
    desc: "Independent 2026 evaluation of 8 questionnaire tools covering accuracy, Excel support, and limits.",
    wide: true,
  },
];

export default function OnetrustQuestionnaireAlternativePage() {
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
        <article className="max-w-[1040px] mx-auto px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]"
          >
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/compare"
              className="hover:text-[#1A1C19] transition-colors"
            >
              Compare
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">
              OneTrust Questionnaire Alternative
            </span>
          </nav>

          {/* Header & Section 1: TL;DR */}
          <header className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Scale className="w-3.5 h-3.5" />
              Comparison Guide · 2026
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              OneTrust Alternative: Faster Security Questionnaire Automation
              Without Enterprise Complexity
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              OneTrust is a heavyweight across enterprise privacy, consent, and
              third-party risk management. But teams evaluating a{" "}
              <strong className="text-[#1A1C19] font-medium">
                OneTrust alternative
              </strong>{" "}
              or{" "}
              <strong className="text-[#1A1C19] font-medium">
                OneTrust vendor risk management alternative
              </strong>{" "}
              for answering customer security reviews rarely need a multi-month
              GRC deployment—they need fast, audit-cited answers without broken
              spreadsheets.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-[#566155]">
              <span>By</span>
              <span className="text-[#1A1C19] font-medium">
                Security Review Ready Team
              </span>
              <span>·</span>
              <span>Published November 27, 2026</span>
            </div>

            <div className="mt-6 p-5 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1.5 text-[#074E34]">TL;DR</p>
              <p className="text-[#566155] leading-relaxed">
                Choose <strong className="text-[#1A1C19]">OneTrust</strong> when
                you need a unified enterprise GRC, GDPR/CCPA consent, and
                buyer-side supplier risk suite across hundreds of vendors. Choose{" "}
                <strong className="text-[#1A1C19]">Security Review Ready</strong>{" "}
                as your dedicated{" "}
                <strong className="text-[#1A1C19]">
                  OneTrust questionnaire alternative
                </strong>{" "}
                when your goal is closing deals faster: ingest your SOC 2 report
                and policies in 15 minutes, preserve complex Excel formulas, and
                get 100% page-cited answers in under 24 hours—even for
                questionnaires issued inside a buyer&apos;s OneTrust portal.
              </p>
            </div>
          </header>

          {/* Section 2: OneTrust Overview */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3">
              OneTrust Overview
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              OneTrust is one of the largest Trust Intelligence platforms in the
              market, designed primarily for enterprise compliance, legal, and
              procurement teams managing complex regulatory programs. Understanding
              where OneTrust excels helps clarify when a lighter, purpose-built
              questionnaire engine is the smarter fit.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {ONETRUST_STRENGTHS.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-[#E7E5DE] p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <Building2 className="w-4 h-4 text-[#28664A] shrink-0" />
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Where OneTrust Falls Short for Questionnaires */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3">
              Where OneTrust Falls Short for Questionnaires
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              While OneTrust works well for governing privacy and monitoring
              hundreds of upstream suppliers, software vendors and lean security
              teams frequently seek a{" "}
              <strong className="text-[#1A1C19] font-medium">
                OneTrust questionnaire alternative
              </strong>{" "}
              due to four recurring bottlenecks:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {ONETRUST_GAPS.map((gap) => {
                const Icon = gap.icon;
                return (
                  <div
                    key={gap.title}
                    className="bg-white rounded-xl border border-[#E7E5DE] p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] flex items-center justify-center text-[#074E34] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-sans text-base font-semibold text-[#1A1C19]">
                        {gap.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#566155] leading-relaxed">
                      {gap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 4: Security Review Ready vs OneTrust */}
          <section className="mb-16">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3">
              Security Review Ready vs OneTrust
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              A direct breakdown comparing Security Review Ready against
              OneTrust&apos;s Vendor Risk Management and Questionnaire Response
              Automation capabilities across accuracy, speed, pricing, and
              spreadsheet fidelity:
            </p>
            <div className="overflow-x-auto rounded-xl border border-[#E7E5DE] shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F5F4EF] border-b border-[#E7E5DE]">
                    <th className="text-left px-5 py-3.5 font-semibold text-[#1A1C19] w-[24%]">
                      Capability
                    </th>
                    <th className="text-left px-5 py-3.5 font-semibold text-[#28664A] w-[38%]">
                      Security Review Ready
                    </th>
                    <th className="text-left px-5 py-3.5 font-semibold text-[#566155] w-[38%]">
                      OneTrust (VRM / QRA)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-[#E7E5DE]/60 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-[#1A1C19] align-top">
                        {row.feature}
                      </td>
                      <td className="px-5 py-4 text-[#1A1C19] align-top">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5" />
                          <span>{row.srr}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-[#566155] align-top">
                        {row.onetrust}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs font-mono text-[#566155]">
              Note: OneTrust pricing figures reflect 2026 public market
              benchmarks and third-party procurement reports, as OneTrust does
              not publish list pricing.
            </p>
          </section>

          {/* Section 5: Who Should Choose Security Review Ready */}
          <section className="mb-16">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-3">
              Who Should Choose Security Review Ready
            </h2>
            <p className="text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
              If your immediate priority is clearing customer security reviews
              fast—without taking on an enterprise GRC rollout—Security Review
              Ready is built for your workflow:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {IDEAL_TEAMS.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-[#E7E5DE] p-5 shadow-sm flex items-start gap-3.5"
                >
                  <ShieldCheck className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#566155] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E7E5DE] flex items-start gap-3 text-xs text-[#566155]">
              <AlertTriangle className="w-4 h-4 text-[#074E34] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-[#1A1C19]">
                  When OneTrust is still the right choice:
                </strong>{" "}
                If you are a large enterprise seeking a single platform for
                global cookie consent, GDPR data mapping, AI governance, and
                continuous risk monitoring across hundreds of upstream vendors,
                OneTrust&apos;s broader GRC suite remains well suited for that
                scope.
              </p>
            </div>
          </section>

          {/* Section 6: Migration Path from OneTrust */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <div className="flex items-center gap-2.5 mb-3">
              <ArrowRightLeft className="w-5 h-5 text-[#28664A]" />
              <h2 className="font-sans text-2xl font-semibold text-[#1A1C19]">
                Migration Path from OneTrust
              </h2>
            </div>
            <p className="text-sm text-[#566155] leading-relaxed mb-6">
              Switching your security questionnaire workflow off OneTrust (or
              decoupling inbound questionnaire automation from an existing
              privacy contract) takes four straightforward steps:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {MIGRATION_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] font-mono text-xs font-semibold">
                      Step {item.step}
                    </span>
                    <h3 className="font-sans text-sm font-semibold text-[#1A1C19]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: FAQ */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-5 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-5 text-sm">
              {FAQS.map((faq, idx) => (
                <div
                  key={faq.question}
                  className={
                    idx < FAQS.length - 1
                      ? "border-b border-[#E7E5DE]/60 pb-4"
                      : undefined
                  }
                >
                  <h3 className="font-semibold text-[#1A1C19] mb-1.5">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-[#566155] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: Related Guides */}
          <section className="mb-16">
            <h2 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4">
              Related Comparisons &amp; Pricing Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {RELATED_GUIDES.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group bg-white p-4 rounded-lg border border-[#E7E5DE] hover:border-[#28664A]/50 transition-colors flex items-start gap-3 shadow-sm ${
                    link.wide ? "sm:col-span-2" : ""
                  }`}
                >
                  <ArrowRight className="w-4 h-4 text-[#28664A] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <span className="text-sm font-medium text-[#1A1C19] group-hover:text-[#074E34] transition-colors leading-tight block mb-0.5">
                      {link.label}
                    </span>
                    <span className="text-xs text-[#566155] leading-relaxed">
                      {link.desc}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 9: Inline CTA */}
          <InlineCta
            source="OneTrust Alternative Comparison"
            badge="Free 24-Hour Evaluation"
            heading="Complete your next customer questionnaire in 24 hours"
            description="Upload your SOC 2 audit report, policies, and live questionnaire (Excel, CAIQ, SIG, or OneTrust portal questions). Receive 100% source-cited answers for human review — completely free for your first assessment."
            buttonText="Start Free Questionnaire Pilot"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
