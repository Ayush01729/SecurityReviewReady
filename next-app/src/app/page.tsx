import React from "react";
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

        {/* Priority Early Access Waitlist Form */}
        <EarlyAccessForm />
      </main>

      <Footer />
    </div>
  );
}
