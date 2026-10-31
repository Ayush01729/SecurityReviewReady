import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InlineCta } from "@/components/InlineCta";
import {
  ShieldCheck,
  Lock,
  Server,
  EyeOff,
  UserCheck,
  FileCheck2,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Security, Encryption, and Data Governance | Security Review Ready",
  description:
    "Read our security architecture: AES-256 encryption, TLS 1.3 transit, multi-tenant isolation, and strict zero public AI model training guarantees.",
  alternates: {
    canonical: "/security",
  },
  openGraph: {
    title: "Enterprise Security and Data Governance | Security Review Ready",
    description:
      "Architecture details on data encryption, multi-tenant isolation, and our contractual guarantee to never train public AI models on customer compliance evidence.",
    url: "https://securityreviewready.com/security",
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
      "name": "Security & Data Governance",
      "item": "https://securityreviewready.com/security",
    },
  ],
};

const securityFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you train AI models on customer security documentation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Security Review Ready maintains a strict zero training policy. Your SOC 2 reports, compliance policies, and questionnaire responses are never used to train public or foundational third-party artificial intelligence models.",
      },
    },
    {
      "@type": "Question",
      "name": "How is customer data encrypted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 bit encryption keys managed under strict key rotation policies.",
      },
    },
    {
      "@type": "Question",
      "name": "How do you enforce data isolation between different customers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We employ logical multi-tenant database isolation enforced at the application query and database layer, ensuring no tenant can access another organization's compliance evidence.",
      },
    },
  ],
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(securityFaqSchema) }}
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
            <span className="text-[#074E34] font-medium">Security & Governance</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              Enterprise Data Protection Standard
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1C19] max-w-3xl leading-tight">
              Enterprise Security, Architecture, and Data Governance
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] max-w-2xl leading-relaxed">
              Security reviews handle your most sensitive documentation. Here is how Security Review Ready protects your compliance data at every step.
            </p>
          </div>

          {/* Quotable GEO Summary Block */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E7E5DE] shadow-sm mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#074E34] font-semibold mb-3">
              Executive Security Summary
            </h2>
            <p className="font-sans text-base text-[#1A1C19] leading-relaxed">
              Security Review Ready is an AI security review workspace engineered with defense-in-depth architecture. We enforce AES-256 encryption at rest, TLS 1.3 encryption in transit, strict multi-tenant data isolation, and a legally binding guarantee that customer compliance evidence is never used to train public or foundational third-party AI models.
            </p>
          </section>

          {/* Security Pillars Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg border border-[#E7E5DE]">
              <div className="w-10 h-10 rounded bg-[#EBF3EF] text-[#28664A] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2">
                Encryption at Rest and in Transit
              </h3>
              <p className="text-sm text-[#566155] leading-relaxed mb-4">
                All data uploaded to our platform, including SOC 2 audit reports, internal policies, and client questionnaires, is encrypted at rest using AES-256 bit encryption. All external network communication requires TLS 1.3 with forward secrecy.
              </p>
              <ul className="text-xs text-[#566155] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" /> AES-256 encryption for file storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" /> Strict HTTPS and TLS 1.3 everywhere
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E7E5DE]">
              <div className="w-10 h-10 rounded bg-[#EBF3EF] text-[#28664A] flex items-center justify-center mb-4">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2">
                Zero Public Model Training Guarantee
              </h3>
              <p className="text-sm text-[#566155] leading-relaxed mb-4">
                Your proprietary security controls and audit findings are yours alone. We never pool, share, or submit customer data to train public foundation models or third-party datasets.
              </p>
              <ul className="text-xs text-[#566155] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" /> Zero retention and zero model training contracts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" /> Isolated indexing per customer organization
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E7E5DE]">
              <div className="w-10 h-10 rounded bg-[#EBF3EF] text-[#28664A] flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2">
                Logical Multi-Tenant Isolation
              </h3>
              <p className="text-sm text-[#566155] leading-relaxed mb-4">
                Data segregation is enforced at the database layer. Every query is scoped to your organizational tenant identifier, preventing cross-tenant information disclosure or data contamination.
              </p>
              <ul className="text-xs text-[#566155] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" /> Tenant-scoped database queries
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" /> Automated security boundary validation
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E7E5DE]">
              <div className="w-10 h-10 rounded bg-[#EBF3EF] text-[#28664A] flex items-center justify-center mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-2">
                Human-in-the-Loop Safeguard
              </h3>
              <p className="text-sm text-[#566155] leading-relaxed mb-4">
                Security questionnaires carry significant legal and contractual liability. Security Review Ready never automatically submits or exports answers without explicit review and approval by an authorized team member.
              </p>
              <ul className="text-xs text-[#566155] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" /> Every claim grounded with exact page citations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28664A]" /> One-click review before external export
                </li>
              </ul>
            </div>
          </section>

          {/* Vulnerability Reporting Section */}
          <section className="bg-[#FAF9F6] p-6 rounded-lg border border-[#E7E5DE] mb-16">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded bg-[#EBF3EF] text-[#28664A] flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-base font-semibold text-[#1A1C19] mb-1">
                  Vulnerability Disclosure and Security Contact
                </h3>
                <p className="text-sm text-[#566155] leading-relaxed mb-3">
                  We welcome responsible disclosure from security researchers and customer compliance teams. If you discover a vulnerability or have a security assessment question, contact our security lead directly.
                </p>
                <div className="font-mono text-xs text-[#074E34] bg-white px-3 py-2 rounded border border-[#E7E5DE] inline-block">
                  Security Contact: ayush@securityreviewready.com
                </div>
              </div>
            </div>
          </section>

          {/* Inline CTA Form */}
          <InlineCta
            source="Security and Governance Center"
            badge="Security Team Pilot"
            heading="Need a Custom Vendor Risk Assessment on Us?"
            description="Test our citation engine with your own policies. We will complete your first customer security review with exact source citations in under 24 hours."
            buttonText="Start Free Security Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

