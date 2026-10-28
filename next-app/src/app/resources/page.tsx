import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Review & Compliance Resources Hub | Security Review Ready",
  description:
    "Explore actionable guides, templates, and frameworks for completing vendor security questionnaires, CAIQ v4, SIG assessments, and enterprise RFPs faster.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Security Review & Compliance Resources Hub | Security Review Ready",
    description:
      "Actionable playbooks, checklists, and guides for automating customer security reviews, CAIQ v4, SIG questionnaires, and vendor risk assessments.",
    url: "https://securityreviewready.com/resources",
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
      "name": "Resources & Guides",
      "item": "https://securityreviewready.com/resources",
    },
  ],
};

const ARTICLES = [
  {
    slug: "vendor-security-questionnaire-guide",
    title: "The Complete Guide to Vendor Security Questionnaires: Checklist & 30-Question Template",
    description:
      "A practical breakdown of the 6 essential security domains, vendor tiering rubrics, and the 30 core questions every B2B SaaS company must answer for enterprise buyers.",
    tag: "Checklists & Templates",
    readTime: "8 min read",
    highlight: "Includes sample 30-question control matrix",
  },
  {
    slug: "caiq-v4-guide",
    title: "What is CAIQ v4? Cloud Security Alliance Questionnaire Explained for B2B SaaS",
    description:
      "Everything you need to know about CSA CAIQ v4, how it maps to CCM 4.0 controls, major differences from CAIQ v3, and how to auto-fill responses with verified citations.",
    tag: "Framework Guides",
    readTime: "7 min read",
    highlight: "Updated for CSA CCM 4.0 specifications",
  },
  {
    slug: "sig-vs-sig-lite",
    title: "SIG vs SIG Lite: Core Differences, Question Breakdown, and How to Automate Them",
    description:
      "Understand the key distinctions between Shared Assessments full SIG and SIG Lite, which version enterprise buyers expect, and how to complete hundreds of controls without manual fatigue.",
    tag: "Comparisons & Standards",
    readTime: "6 min read",
    highlight: "Side-by-side assessment comparison matrix",
  },
  {
    slug: "how-to-answer-security-questionnaires-fast",
    title: "How to Complete Enterprise Security Questionnaires in Minutes Without Hallucinations",
    description:
      "The modern 5-step playbook for sales engineers and security leaders to stop questionnaire deal slippage, preserve Excel formulas, and maintain audit-proof evidence citations.",
    tag: "Playbooks & Automation",
    readTime: "9 min read",
    highlight: "5-step rapid response blueprint",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <div className="max-w-[1040px] mx-auto px-6">
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Resources & Guides</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Security Review Knowledge Base
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1C19] max-w-3xl leading-tight">
              Security Review Playbooks, Templates & Framework Guides
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] max-w-2xl leading-relaxed">
              Actionable resources designed to help B2B SaaS founders, security leads, and sales engineers navigate enterprise procurement with confidence.
            </p>
          </div>

          {/* Articles Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                prefetch={true}
                className="bg-white rounded-xl border border-[#E7E5DE] hover:border-[#28664A] transition-all duration-150 p-6 flex flex-col justify-between group shadow-sm hover:shadow-md cursor-pointer block focus:outline-none focus:ring-2 focus:ring-[#28664A]/30"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                      {article.tag}
                    </span>
                    <span className="text-[#566155] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-sans text-xl font-semibold text-[#1A1C19] group-hover:text-[#074E34] transition-colors leading-snug mb-3">
                    {article.title}
                  </h2>

                  <p className="font-sans text-sm text-[#566155] leading-relaxed mb-4">
                    {article.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E5DE]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#074E34] font-medium">
                    {article.highlight}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#28664A] font-medium group-hover:text-[#1B4D36]">
                    Read Guide
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </section>

          {/* Free Evaluation Service Inline CTA */}
          <InlineCta
            source="Resources Knowledge Base"
            heading="Have an incoming security questionnaire sitting in your inbox?"
            description="Send us your customer questionnaire spreadsheet and your security documentation. We will complete it with 100% verified source citations in under 24 hours at zero cost."
            buttonText="Run My Questionnaire Free"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

