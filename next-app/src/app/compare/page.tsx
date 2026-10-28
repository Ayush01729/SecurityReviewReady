import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import { Scale, ArrowRight, ShieldCheck, CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Compare Security Questionnaire Automation Software | Security Review Ready",
  description:
    "Evaluate Security Review Ready against legacy questionnaire tools. See side-by-side feature matrices, citation accuracy comparisons, and pricing models.",
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: "Compare Security Questionnaire Automation Software | Security Review Ready",
    description:
      "Honest, side-by-side comparisons of Security Review Ready against Conveyor, Whistic, and legacy vendor risk platforms.",
    url: "https://securityreviewready.com/compare",
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
      "name": "Compare Software",
      "item": "https://securityreviewready.com/compare",
    },
  ],
};

const COMPARISONS = [
  {
    slug: "conveyor-alternative",
    competitor: "Conveyor",
    title: "Why B2B SaaS Teams Choose Security Review Ready Over Conveyor",
    summary:
      "A detailed feature, citation precision, and workflow comparison for fast-moving software startups evaluating alternatives to Conveyor.",
    badge: "Most Popular Comparison",
  },
  {
    slug: "whistic-alternative",
    competitor: "Whistic",
    title: "Security Review Ready vs Whistic: Comparison for Modern B2B SaaS",
    summary:
      "Compare vendor network lock-in, AI evidence grounding, setup speed, and pricing models between Security Review Ready and Whistic.",
    badge: "Enterprise Alternative",
  },
];

export default function CompareHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <span className="text-[#074E34] font-medium">Compare</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Scale className="w-3.5 h-3.5" />
              Software Evaluation Hub
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1C19] max-w-3xl leading-tight">
              Compare Security Review Ready Against Incumbents
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] max-w-2xl leading-relaxed">
              Choosing the right security questionnaire software directly impacts sales velocity and reviewer sanity. Explore our detailed comparisons below.
            </p>
          </div>

          {/* Comparisons Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {COMPARISONS.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                prefetch={true}
                className="bg-white rounded-xl border border-[#E7E5DE] hover:border-[#28664A] transition-all duration-150 p-6 flex flex-col justify-between group shadow-sm hover:shadow-md cursor-pointer block focus:outline-none focus:ring-2 focus:ring-[#28664A]/30"
              >
                <div>
                  <div className="mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#EBF3EF] text-[#074E34] font-mono text-xs font-medium">
                      {comp.badge}
                    </span>
                  </div>
                  <h2 className="font-sans text-xl font-semibold text-[#1A1C19] group-hover:text-[#074E34] transition-colors leading-snug mb-3">
                    {comp.title}
                  </h2>
                  <p className="font-sans text-sm text-[#566155] leading-relaxed mb-6">
                    {comp.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E5DE]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#566155]">vs {comp.competitor}</span>
                  <span className="inline-flex items-center gap-1 text-[#28664A] font-medium group-hover:text-[#1B4D36]">
                    View Breakdown
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </section>

          {/* Overview Value Matrix */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              What Sets Security Review Ready Apart
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" />
                  100% Verified Citations
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Every answer highlights the exact paragraph and page number in your SOC 2 audit or security policy. Zero guessing.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" />
                  Human-in-the-Loop Review
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Suggested responses remain local drafts until verified and approved by your team. You maintain full ownership without unvetted automated claims reaching buyers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1C19] mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" />
                  Your Data is 100% safe
                </h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  We enforce AES-256 encryption at rest, TLS 1.3 in transit, and multi-tenant isolation. Your compliance documentation is strictly never used to train public AI models.
                </p>
              </div>
            </div>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="Compare Alternatives Hub"
            heading="Evaluate on your live customer questionnaire"
            description="Have a vendor assessment waiting? Upload your documents and receive completed, source-cited responses in under 24 hours at zero cost."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

