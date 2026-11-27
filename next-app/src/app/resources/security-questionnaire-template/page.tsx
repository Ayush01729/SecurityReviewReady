import type { Metadata } from "next";
import Link from "@/components/Link";
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
  Lock,
  Download,
  HelpCircle,
  AlertTriangle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security Questionnaire Template [Free Excel & PDF 2026]",
  description:
    "Download a comprehensive security questionnaire template with 60 essential assessment questions across 8 domains. Compatible with Excel, Google Sheets, and vendor risk portals.",
  alternates: {
    canonical: "/resources/security-questionnaire-template",
  },
  openGraph: {
    title: "Security Questionnaire Template: Free Excel & PDF Assessment (2026)",
    description:
      "A complete, ready-to-use vendor security assessment questionnaire template for evaluating B2B software providers, cloud vendors, and SaaS partners.",
    url: "https://securityreviewready.com/resources/security-questionnaire-template",
    siteName: "Security Review Ready",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://securityreviewready.com" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://securityreviewready.com/resources" },
    { "@type": "ListItem", position: 3, name: "Security Questionnaire Template", item: "https://securityreviewready.com/resources/security-questionnaire-template" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://securityreviewready.com/resources/security-questionnaire-template#article",
  headline: "Security Questionnaire Template: 60 Essential Questions for Vendor Risk Assessment",
  description: "Downloadable vendor security questionnaire template covering information security, access control, incident response, data privacy, and disaster recovery.",
  datePublished: "2026-11-27T00:00:00Z",
  dateModified: "2026-11-27T00:00:00Z",
  author: { "@type": "Person", name: "Security Review Ready Team" },
  publisher: { "@type": "Organization", name: "Security Review Ready", url: "https://securityreviewready.com" },
  wordCount: 3600,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "What is included in this security questionnaire template?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This security questionnaire template includes 60 standardized questions across 8 essential infosec domains: Company & Governance, Access Control, Data Protection & Encryption, Network Security, Incident Response, Third-Party Sub-processors, Business Continuity, and Compliance Certifications.",
      },
    },
    {
      "@type": "Question",
      "name": "How should vendors answer this questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vendors should provide clear, factual responses supported by verified evidence documents (such as SOC 2 Type II reports, ISO 27001 certificates, and penetration testing letters). Using an automated tool like Security Review Ready allows vendors to map answers directly to source paragraphs in under 24 hours.",
      },
    },
    {
      "@type": "Question",
      "name": "Is this template compatible with CAIQ, SIG, or VSA standards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The questions in this template map directly to the Cloud Security Alliance (CSA) CAIQ v4 and Shared Assessments SIG Lite control domains, making it easy to cross-reference against major industry standards.",
      },
    },
  ],
};

export default function SecurityQuestionnaireTemplatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <div className="max-w-[1040px] mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Security Questionnaire Template</span>
          </nav>

          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              Downloadable Assessment Asset · 2026 Edition
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1A1C19] mb-4 leading-tight">
              Security Questionnaire Template: 60 Essential Questions for Vendor Assessment
            </h1>
            <p className="text-[#566155] text-base sm:text-lg max-w-3xl leading-relaxed">
              Evaluating third-party vendors or preparing to answer your first enterprise review? 
              Here is a standardized, 60-question security questionnaire template covering all critical cybersecurity and compliance controls.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-[#F0F7F4] border border-[#C2DDD0] text-sm text-[#1A1C19]">
              <p className="font-semibold mb-1">Template Overview</p>
              <p className="text-[#566155] leading-relaxed">
                This template maps directly to modern enterprise procurement standards (SOC 2, ISO 27001, CAIQ v4, SIG Lite). 
                Whether you are an enterprise CISO vetting suppliers or a SaaS vendor organizing an audit-ready response bank, these 60 questions form the core of every security assessment.
              </p>
            </div>
          </div>

          {/* 8 Core Domains */}
          <section className="mb-14">
            <h2 className="font-sans text-2xl font-semibold text-[#1A1C19] mb-6">
              The 8 Control Domains in this Template
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { domain: "1. Information Security Governance", count: "6 Questions", topics: "Formal security policies, dedicated CISO/security team, annual review cycles, employee background checks." },
                { domain: "2. Access Control & IAM", count: "8 Questions", topics: "Mandatory MFA, SSO integration, role-based access control (RBAC), quarterly access reviews, immediate offboarding." },
                { domain: "3. Data Protection & Cryptography", count: "8 Questions", topics: "Encryption in transit (TLS 1.3), encryption at rest (AES-256), customer KMS keys, data deletion procedures." },
                { domain: "4. Network & Application Security", count: "8 Questions", topics: "Vulnerability scanning, annual third-party penetration testing, WAF implementation, container security." },
                { domain: "5. Incident Response & SLAs", count: "7 Questions", topics: "Documented IRP runbooks, customer breach notification timelines (24h/72h), post-mortem root-cause analysis." },
                { domain: "6. Business Continuity & Disaster Recovery", count: "7 Questions", topics: "Recovery Time Objective (RTO < 4h), Recovery Point Objective (RPO < 1h), multi-region backup testing." },
                { domain: "7. Third-Party & Sub-processor Risk", count: "8 Questions", topics: "Sub-processor vetting, Data Processing Addendums (DPAs), public sub-processor notifications." },
                { domain: "8. Compliance Certifications", count: "8 Questions", topics: "SOC 2 Type II audit report, ISO/IEC 27001 certification, HIPAA BAA availability, GDPR/CCPA alignment." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E7E5DE] rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#1A1C19] text-sm">{item.domain}</h3>
                    <span className="font-mono text-xs text-[#28664A] font-medium bg-[#EBF3EF] px-2 py-0.5 rounded">{item.count}</span>
                  </div>
                  <p className="text-xs text-[#566155] leading-relaxed">{item.topics}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Templates */}
          <section className="mb-14 bg-white border border-[#E7E5DE] rounded-xl p-6 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-3">
              Explore Specialized Framework Templates
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <Link href="/resources/templates/vendor-security-questionnaire-excel" className="p-4 bg-[#FAF9F6] border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors">
                <p className="text-sm font-medium text-[#1A1C19]">Vendor Questionnaire Excel</p>
                <p className="text-xs text-[#566155]">68-question formatted spreadsheet.</p>
              </Link>
              <Link href="/resources/templates/caiq-v4-excel-template" className="p-4 bg-[#FAF9F6] border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors">
                <p className="text-sm font-medium text-[#1A1C19]">CAIQ v4 Template</p>
                <p className="text-xs text-[#566155]">261 CSA STAR controls workbook.</p>
              </Link>
              <Link href="/resources/templates/sig-lite-questionnaire-spreadsheet" className="p-4 bg-[#FAF9F6] border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors">
                <p className="text-sm font-medium text-[#1A1C19]">SIG Lite Spreadsheet</p>
                <p className="text-xs text-[#566155]">125 Shared Assessments questions.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-xl border border-[#E7E5DE] p-6 sm:p-8 mb-16 shadow-sm">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#28664A]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-5 text-sm">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className={i < faqSchema.mainEntity.length - 1 ? "border-b border-[#E7E5DE]/60 pb-4" : ""}>
                  <h3 className="font-semibold text-[#1A1C19] mb-1">{item.name}</h3>
                  <p className="text-xs text-[#566155] leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <InlineCta
            source="Security Questionnaire Template Guide"
            heading="Need to answer a customer security questionnaire fast?"
            description="Upload your pending questionnaire and compliance documentation. We'll return 100% source-cited draft answers for free within 24 hours."
            buttonText="Start Free Questionnaire Pilot"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
