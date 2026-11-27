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
  Layers,
  HelpCircle,
  BookOpen,
  Briefcase,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vendor Risk Questionnaire Guide & Frameworks [2026]",
  description:
    "Everything security teams and vCISOs need to know about vendor risk questionnaires (VRQs). Covers core assessment domains, risk tiering, SIG/CAIQ/VSA alignment, and AI automation.",
  alternates: {
    canonical: "/resources/vendor-risk-questionnaire",
  },
  openGraph: {
    title: "Vendor Risk Questionnaire Guide: Frameworks, Scoring & Automation (2026)",
    description:
      "A complete guide to vendor risk questionnaires (VRQs): questions asked by enterprise buyers, risk tiering methodologies, and how to automate responses with verified citations.",
    url: "https://securityreviewready.com/resources/vendor-risk-questionnaire",
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
    { "@type": "ListItem", "position": 3, "name": "Vendor Risk Questionnaire Guide", "item": "https://securityreviewready.com/resources/vendor-risk-questionnaire" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/resources/vendor-risk-questionnaire#article",
  "headline": "Vendor Risk Questionnaire Guide: Frameworks, Scoring & Automated Answering",
  "description": "Comprehensive reference guide for evaluating, completing, and automating enterprise vendor risk questionnaires (VRQs).",
  "datePublished": "2026-11-01T00:00:00Z",
  "dateModified": "2026-11-15T00:00:00Z",
  "author": { "@type": "Organization", "name": "Security Review Ready" },
  "publisher": { "@type": "Organization", "name": "Security Review Ready", "url": "https://securityreviewready.com" },
  "wordCount": 3100,
};

export default function VendorRiskQuestionnairePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <div className="max-w-[1040px] mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Vendor Risk Questionnaire</span>
          </nav>

          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <FileText className="w-3.5 h-3.5" />
              Complete Guide · Updated November 2026
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              Vendor Risk Questionnaires (VRQ): Complete Guide to Inbound Vendor Assessments
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-2xl leading-relaxed">
              When enterprise procurement sends a vendor risk assessment, your deal comes to a complete halt until 
              every technical, privacy, and infrastructure question is satisfied. Learn what buyers look for and how 
              vCISOs and B2B SaaS teams automate responses in hours instead of weeks.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">Key Takeaway for B2B SaaS &amp; vCISOs</p>
              <p className="text-[#566155] leading-relaxed">
                Enterprise vendor risk assessments test 6 critical control pillars: Data Encryption, Access Control, Incident Response, 
                Sub-processor Management, Business Continuity, and Compliance Certifications (SOC 2, ISO 27001). 
                Automating these responses using grounded RAG that cites exact policy paragraphs cuts completion turnaround from 14 days to under 24 hours.
              </p>
            </div>
          </div>

          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-4">
              The 6 Core Pillars of an Enterprise Vendor Risk Assessment
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "1. Cryptography & Data Protection", desc: "Encryption standards (AES-256 KMS at rest, TLS 1.3 in transit), key lifecycle policies, and database multi-tenancy controls." },
                { title: "2. Identity & Access Governance", desc: "Mandatory SSO/SAML, role-based access control (RBAC), multi-factor authentication (MFA), and automated quarterly privilege de-provisioning." },
                { title: "3. Incident Management & SLAs", desc: "Mean time to respond (MTTR), formal forensic runbooks, customer breach notification timelines (24h/72h), and annual third-party pen tests." },
                { title: "4. Third-Party Sub-processor Governance", desc: "Due diligence checklists for infrastructure vendors (AWS, GCP, Datadog), Data Processing Addendums (DPAs), and sub-processor tracking." },
                { title: "5. Disaster Recovery & RTO/RPO", desc: "Multi-region backup validation, immutable snapshot frequency, Recovery Time Objectives (RTO &lt; 4h), and Recovery Point Objectives (RPO &lt; 1h)." },
                { title: "6. Formal Compliance Certifications", desc: "Independent auditor-attested SOC 2 Type II reports with zero exceptions, ISO/IEC 27001:2022 certifications, and CAIQ self-attestations." },
              ].map((pillar, idx) => (
                <div key={idx} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <h3 className="font-semibold text-[#1A1C19] text-base mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[#566155] leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 bg-white border border-[#E7E5DE] rounded-xl p-6 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-4">
              How Security Review Ready Automates Vendor Risk Assessments
            </h2>
            <p className="text-sm text-[#566155] leading-relaxed mb-4">
              Rather than having fractional CISOs or sales engineers spend dozens of hours copy-pasting from outdated documentation, 
              Security Review Ready links directly to your SOC 2 Type II audit reports, internal policies, and trust center URLs. 
              Our engine parses the buyer&apos;s custom questionnaire, matches each question to verified evidence, drafts responses, 
              and displays the exact document section and page number for rapid 1-click human validation.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/resources/ddq-automation" className="text-sm font-medium text-[#28664A] hover:underline flex items-center gap-1">
                Explore DDQ Automation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/resources/due-diligence-questionnaire-checklist" className="text-sm font-medium text-[#28664A] hover:underline flex items-center gap-1">
                50-Point Due Diligence Checklist <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/resources/third-party-risk-assessment-questionnaire" className="text-sm font-medium text-[#28664A] hover:underline flex items-center gap-1">
                Third-Party Risk Assessment Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/resources/caiq-v4-guide" className="text-sm font-medium text-[#28664A] hover:underline flex items-center gap-1">
                Read CAIQ v4 Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          <InlineCta
            source="Vendor Risk Questionnaire Guide"
            heading="Complete your pending vendor risk assessment in 24 hours"
            description="Have a 200+ question vendor assessment on your desk? Upload your SOC 2 and security policies, and receive verified, source-cited draft answers for free."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

