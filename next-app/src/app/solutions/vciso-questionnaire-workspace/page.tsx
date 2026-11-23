import type { Metadata } from "next";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Layers,
  Users2,
  Lock,
  Building,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "vCISO Security Questionnaire Workspace [Multi-Client]",
  description:
    "The multi-client questionnaire workspace built for vCISOs and cyber advisory firms. Maintain isolated client evidence vaults and complete assessments 10x faster.",
  alternates: {
    canonical: "/solutions/vciso-questionnaire-workspace",
  },
  openGraph: {
    title: "vCISO Security Questionnaire Workspace: Scale Your Advisory Practice",
    description:
      "Stop spending 15 billable hours filling spreadsheets. Multi-tenant client isolation, exact audit citations, and 1-click verification workbench for vCISOs.",
    url: "https://securityreviewready.com/solutions/vciso-questionnaire-workspace",
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
      "item": "https://securityreviewready.com/solutions/vciso-questionnaire-workspace",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "vCISO Workspace",
      "item": "https://securityreviewready.com/solutions/vciso-questionnaire-workspace",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "vCISO Security Questionnaire Workspace: Scale Your Fractional Advisory Practice",
  "description":
    "Purpose-built multi-client security questionnaire platform for vCISOs, fractional security leaders, and cybersecurity consultancies.",
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

export default function VCISOWorkspacePage() {
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
            <span className="text-[#074E34] font-medium">vCISO Workspace</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              vCISO & Advisory Platform
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1A1C19] mb-4 leading-tight">
              vCISO Security Questionnaire Workspace: Scale Advisory Without Burnout
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-2xl leading-relaxed">
              Managing security questionnaires across 5 to 15 portfolio clients drains your advisory capacity. Security Review Ready provides multi-client evidence vaults with 100% verified citations, letting you approve reviews in minutes.
            </p>
          </div>

          {/* Core Pillars for vCISOs */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              Built Specifically for the Fractional CISO Operating Model
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EF] flex items-center justify-center text-[#28664A] mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#1A1C19] mb-2">Multi-Tenant Vault Isolation</h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Discrete evidence vaults for every client portfolio. Zero cross-client contamination with AES-256 KMS encryption and dedicated tenant isolation.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EF] flex items-center justify-center text-[#28664A] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#1A1C19] mb-2">Zero Advisory Liability</h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Every single answer maps to an exact document title, section heading, and page number in your client's SOC 2 report. No fabricated claims or hallucinated controls.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E7E5DE] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3EF] flex items-center justify-center text-[#28664A] mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#1A1C19] mb-2">Under 24-Hour Deal Turnaround</h3>
                <p className="text-xs text-[#566155] leading-relaxed">
                  Protect your clients' enterprise deal velocity. Answer 200-question spreadsheets in under 24 hours without burning nights and weekends.
                </p>
              </div>
            </div>
          </section>

          {/* Workflow */}
          <section className="bg-white border border-[#E7E5DE] rounded-xl p-6 sm:p-8 mb-14 shadow-sm">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              How vCISOs Deliver 10x More Value
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#566155]">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1C19]">1. Ingest Client Documentation:</strong> Upload each client's SOC 2 reports, ISO policies, and trust center documentation once into their isolated vault.
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1C19]">2. Client Drops Questionnaire:</strong> Whenever a client sales team receives an enterprise assessment (CAIQ, SIG, or custom Excel), upload it to their vault.
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1C19]">3. Rapid Verification & Sign-Off:</strong> Review grounded citations in 15 minutes, approve with one click, and deliver the completed workbook back to your client.
                </div>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCta
            source="vCISO Solution Workspace"
            badge="Free Advisory Pilot"
            heading="Try a Free Questionnaire Run for Any Portfolio Client"
            description="Have a client questionnaire waiting right now? Upload the workbook and evidence. We will return 100% cited draft responses in under 24 hours at zero cost."
            buttonText="Start Free vCISO Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
