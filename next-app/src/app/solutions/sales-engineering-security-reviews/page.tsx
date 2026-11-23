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
  TrendingUp,
  DollarSign,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security Reviews for Sales Engineering [Fast-Track Deals]",
  description:
    "How Sales Engineers and Solutions Architects clear enterprise security reviews in under 24 hours with 100% cited answers, eliminating quarter-end deal stalls.",
  alternates: {
    canonical: "/solutions/sales-engineering-security-reviews",
  },
  openGraph: {
    title: "Security Review Automation for Sales Engineering & RevOps",
    description:
      "Stop letting 150-question security assessments stall six-figure enterprise deals. Rapid, citation-grounded response engine for Sales Engineers.",
    url: "https://securityreviewready.com/solutions/sales-engineering-security-reviews",
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
      "name": "Solutions",
      "item": "https://securityreviewready.com/solutions/sales-engineering-security-reviews",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Sales Engineering",
      "item": "https://securityreviewready.com/solutions/sales-engineering-security-reviews",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Security Review Automation for Sales Engineering: Accelerate Enterprise Deal Velocity",
  "description":
    "How high-growth B2B SaaS Sales Engineering teams eliminate procurement delays and complete enterprise security assessments in under 24 hours.",
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

export default function SalesEngineeringSecurityReviewsPage() {
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
        <div className="max-w-[1040px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#566155]">Solutions</span>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Sales Engineering</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Sales Engineering & Deal Acceleration
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1A1C19] mb-4 leading-tight">
              Security Review Automation for Sales Engineering Teams
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-2xl leading-relaxed">
              Nothing kills enterprise sales momentum faster than an unexpected 180-question security workbook waiting on an engineer's desk. Security Review Ready returns verified, source-cited responses in under 24 hours.
            </p>
          </div>

          {/* The Pain */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              Why Security Reviews Break Sales Forecasts
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EF] flex items-center justify-center text-[#28664A] mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#1A1C19] mb-2">3-Week Delays</h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Enterprise security assessments stall deals right at the contract stage, pushing closing dates past critical quarterly targets.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EF] flex items-center justify-center text-[#28664A] mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#1A1C19] mb-2">SE Resource Burn</h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Your highest-paid technical sellers waste 20+ hours per deal copy-pasting answers from old spreadsheets instead of running active technical demos.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EF] flex items-center justify-center text-[#28664A] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#1A1C19] mb-2">Auditor Pushback</h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Vague answers trigger multiple rounds of buyer security follow-up questions, dragging the procurement cycle out even further.
                </p>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCta
            source="Sales Engineering Solution"
            badge="24-Hour Deal Acceleration"
            heading="Have a High-Value Deal Stalled on Security Review?"
            description="Upload the buyer's questionnaire and your compliance documentation. We'll return 100% cited answers within 24 hours at zero cost."
            buttonText="Fast-Track My Deal Free"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
