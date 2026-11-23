import React from "react";
import Link from "@/components/Link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EnginePipelineVisual } from "@/components/EnginePipelineVisual";
import { EvidenceInspector } from "@/components/EvidenceInspector";
import { WorkflowComparison } from "@/components/WorkflowComparison";
import { HowItWorks } from "@/components/HowItWorks";
import { RoiCalculator } from "@/components/RoiCalculator";
import { SecurityPillars } from "@/components/SecurityPillars";
import { FrameworkMatrix } from "@/components/FrameworkMatrix";
import { AudienceRoles } from "@/components/AudienceRoles";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <Navbar />

      <main className="flex-grow page-transition">
        {/* Hero Section */}
        <Hero />

        {/* Parallel Ingestion & Dispatch Engine Visual Showcase */}
        <section className="pb-12 md:pb-16 max-w-[1240px] mx-auto px-6">
          <EnginePipelineVisual />
        </section>

        {/* Evidence & Verification Inspector Workbench */}
        <EvidenceInspector />

        {/* The Pain: The Cost of Questionnaire Silos */}
        <WorkflowComparison />

        {/* How It Works (3-Stage Grounded Workflow) */}
        <HowItWorks />

        {/* Interactive ROI & Time Saved Calculator */}
        <RoiCalculator />

        {/* Security & Data Privacy Pillars */}
        <SecurityPillars />

        {/* Supported Compliance Frameworks & File Formats */}
        <FrameworkMatrix />

        {/* Built for Founders, CTOs, and Scaling SaaS Teams */}
        <AudienceRoles />

        {/* Frequently Asked Questions */}
        <FaqAccordion />

        {/* Internal Resource Links — SEO internal linking hub */}
        <section className="py-14 max-w-[1240px] mx-auto px-6">
          <div className="border-t border-[#E7E5DE] pt-12">
            <h2 className="font-sans text-xl font-semibold text-[#1A1C19] mb-2">
              Security Questionnaire Automation Resources
            </h2>
            <p className="text-sm text-[#566155] mb-8 max-w-xl">
              Guides, framework references, and software comparisons for security and compliance teams.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/solutions/vciso-questionnaire-workspace", label: "vCISO Questionnaire Workspace", tag: "vCISO & Advisory" },
                { href: "/compare/security-questionnaire-software-pricing", label: "2026 Software Pricing Guide", tag: "Pricing Matrix" },
                { href: "/compare/conveyor-vs-safebase", label: "Conveyor vs SafeBase Comparison", tag: "Comparison" },
                { href: "/resources/templates/vendor-security-questionnaire-excel", label: "Vendor Questionnaire Excel Template", tag: "Free Template" },
                { href: "/solutions/sales-engineering-security-reviews", label: "Sales Engineering Fast-Track", tag: "Deal Acceleration" },
                { href: "/compare/hypercomply-alternative", label: "HyperComply Alternative", tag: "Comparison" },
                { href: "/resources/templates/caiq-v4-excel-template", label: "CAIQ v4 Excel Template", tag: "CSA STAR" },
                { href: "/resources/templates/sig-lite-questionnaire-spreadsheet", label: "SIG Lite Spreadsheet Template", tag: "Shared Assessments" },
                { href: "/resources/vciso-security-questionnaire-automation", label: "vCISO Questionnaire Automation Guide", tag: "vCISO & Consultants" },
                { href: "/resources/security-questionnaire-automation", label: "Security Questionnaire Automation Guide", tag: "Practitioner's Guide" },
                { href: "/resources/best-security-questionnaire-automation-software", label: "Best Security Questionnaire Software (2026)", tag: "8 Tools Compared" },
                { href: "/resources/ai-agents-for-security-questionnaires", label: "AI Agents for Security Questionnaires", tag: "AI & AEO" },
                { href: "/resources/ddq-automation", label: "DDQ Automation Guide", tag: "Due Diligence" },
                { href: "/resources/vendor-risk-questionnaire", label: "Vendor Risk Questionnaire (VRQ) Guide", tag: "Risk Frameworks" },
                { href: "/resources/security-questionnaire-examples", label: "Security Questionnaire Examples", tag: "50+ Examples" },
                { href: "/resources/caiq-v4-guide", label: "CAIQ v4 Framework Guide", tag: "CSA CCM 4.0" },
                { href: "/resources/sig-vs-sig-lite", label: "SIG vs SIG Lite Comparison", tag: "Framework" },
                { href: "/resources/vendor-security-questionnaire-guide", label: "Vendor Security Questionnaire Guide", tag: "30-Point Checklist" },
                { href: "/resources/how-to-answer-security-questionnaires-fast", label: "How to Answer Security Questionnaires Fast", tag: "5-Step Playbook" },
                { href: "/compare/vanta-questionnaire-alternative", label: "Vanta Questionnaire Alternative", tag: "Comparison" },
                { href: "/compare/conveyor-alternative", label: "Conveyor Alternative", tag: "Comparison" },
                { href: "/compare/whistic-alternative", label: "Whistic Alternative", tag: "Comparison" },
                { href: "/compare/wolfia-alternative", label: "Wolfia Alternative", tag: "Comparison" },
                { href: "/compare/safebase-alternative", label: "SafeBase Alternative", tag: "Comparison" },
                { href: "/compare/panorays-vs-riskiq", label: "Panorays vs RiskIQ Comparison", tag: "Comparison" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex flex-col gap-1.5 p-4 bg-white border border-[#E7E5DE] rounded-xl hover:border-[#28664A] transition-colors shadow-sm group"
                >
                  <span className="text-[10px] font-mono font-medium text-[#28664A] uppercase tracking-wide">{item.tag}</span>
                  <span className="text-sm font-medium text-[#1A1C19] group-hover:text-[#28664A] transition-colors leading-snug">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Priority Early Access Waitlist Form */}
        <EarlyAccessForm />
      </main>

      <Footer />
    </div>
  );
}
