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
  Layers,
  Briefcase,
  Users2,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "vCISO Multi-Client Security Questionnaire Workflow [Guide]",
  description:
    "How fractional CISOs and cyber consultants manage security questionnaires across 10+ clients without burnout. Multi-tenant evidence vaults and citation verification.",
  alternates: {
    canonical: "/resources/vciso-multi-client-security-workflow",
  },
  openGraph: {
    title: "vCISO Multi-Client Security Questionnaire Workflow (2026)",
    description:
      "A strategic playbook for fractional CISOs: how to scale client questionnaire operations using isolated evidence vaults, grounded AI, and 1-click approvals.",
    url: "https://securityreviewready.com/resources/vciso-multi-client-security-workflow",
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
      "name": "vCISO Workflow",
      "item": "https://securityreviewready.com/resources/vciso-multi-client-security-workflow",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "vCISO Multi-Client Security Questionnaire Workflow: How to Scale Advisory Capacity",
  "description":
    "The operational framework used by modern vCISOs to eliminate 90% of manual questionnaire review time while improving citation accuracy across multiple client portfolios.",
  "author": {
    "@type": "Person",
    "name": "Security Review Ready Team",
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
  "datePublished": "2026-11-24",
  "dateModified": "2026-11-24",
};

export default function VCISOMultiClientWorkflowPage() {
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
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <article className="max-w-[880px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">vCISO Workflows</span>
          </nav>

          {/* Header */}
          <header className="border-b border-[#E7E5DE] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#566155] mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-medium">
                Advisory Practice Playbook
              </span>
              <span>Updated November 2026</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1A1C19] leading-tight mb-4">
              vCISO Multi-Client Security Questionnaire Workflow: How to Scale
            </h1>
            <p className="text-base sm:text-lg text-[#566155] leading-relaxed">
              Fractional CISOs are hired for risk strategy and executive guidance, but often find their billable hours consumed by repetitive CAIQ and SIG spreadsheets. Here is the modern workflow to scale advisory capacity across 5x more accounts.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#566155]">
              <span>By</span>
              <span className="text-[#1A1C19] font-medium">Security Review Ready Practice Advisory Group</span>
            </div>
          </header>

          {/* Strategy Sections */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E7E5DE] mb-12 shadow-sm space-y-4">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19]">
              The 3 Bottlenecks of Managing Multi-Client Questionnaires
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#566155]">
              <p>
                <strong>1. Context Switching:</strong> Switching between a fintech client using AWS KMS and a healthcare startup using Google Cloud IAM creates extreme cognitive load and introduces cross-client compliance errors.
              </p>
              <p>
                <strong>2. Proof & Liability:</strong> As an advisory professional, you carry reputational and contractual liability for every statement submitted to an enterprise buyer. Raw LLMs that hallucinate controls cannot be used.
              </p>
              <p>
                <strong>3. Uneconomical Time Allocation:</strong> Charging clients $300/hour to manually look up whether they enforce 90-day password rotation damages the strategic perception of your advisory firm.
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-12">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              The Evidence-Grounded Multi-Client Playbook
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-xl border border-[#E7E5DE] shadow-sm">
                <h3 className="font-semibold text-sm text-[#1A1C19] mb-2">Vault Isolation</h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Establish isolated knowledge vaults for each client with zero data cross-pollination.
                </p>
              </div>
              <div className="p-5 bg-white rounded-xl border border-[#E7E5DE] shadow-sm">
                <h3 className="font-semibold text-sm text-[#1A1C19] mb-2">Automated Evidence Retrieval</h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Map every incoming requirement to exact SOC 2 paragraph and page numbers automatically.
                </p>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCta
            source="vCISO Multi-Client Workflow"
            badge="Free 24-Hour Evaluation"
            heading="Test Security Review Ready for Your Advisory Practice"
            description="Submit a live client questionnaire. We'll return 100% cited answers in under 24 hours at zero cost."
            buttonText="Start Free vCISO Pilot"
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
