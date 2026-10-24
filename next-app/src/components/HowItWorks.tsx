"use client";

import React, { useState } from "react";
import { Globe, FileText, Code2, History, CheckCircle2, FileSearch, UserCheck } from "lucide-react";

export function HowItWorks() {
  const [activeStage, setActiveStage] = useState<number>(1);

  return (
    <section id="how-it-works" className="py-16 md:py-24 border-t border-[#E7E5DE] bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col gap-3 mb-12">
          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[40px] font-medium text-[#1A1C19] tracking-[-0.025em] leading-[1.2]">
            From scattered documentation to review-ready answers.
          </h2>
          <p className="font-sans text-[16px] sm:text-[17px] text-[#566155] leading-relaxed">
            Connect the information you already maintain. Get suggested answers grounded in your
            documentation, with the evidence available for your team to review.
          </p>
        </div>

        {/* 3-Stage Tabbed Container */}
        <div className="w-full rounded-lg border border-[#E7E5DE] bg-[#FAF9F6] shadow-sm overflow-hidden">
          {/* Tabs Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#E7E5DE] bg-white">
            <button
              type="button"
              onClick={() => setActiveStage(1)}
              className={`px-6 py-4 text-left border-b-2 md:border-b-0 md:border-r border-[#E7E5DE] transition-colors flex items-center gap-3.5 cursor-pointer ${
                activeStage === 1
                  ? "border-b-[#28664A] md:border-r-[#E7E5DE] bg-[#FAF9F6]"
                  : "hover:bg-[#F4F4EF]"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[12px] font-medium ${
                  activeStage === 1
                    ? "bg-[#28664A] text-white"
                    : "bg-[#EEEEE9] text-[#566155]"
                }`}
              >
                1
              </div>
              <div>
                <p className="font-sans text-[14px] font-semibold text-[#1A1C19]">
                  Bring sources together
                </p>
                <p className="font-sans text-[12.5px] text-[#566155]">Sync your policies & reports</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveStage(2)}
              className={`px-6 py-4 text-left border-b-2 md:border-b-0 md:border-r border-[#E7E5DE] transition-colors flex items-center gap-3.5 cursor-pointer ${
                activeStage === 2
                  ? "border-b-[#28664A] md:border-r-[#E7E5DE] bg-[#FAF9F6]"
                  : "hover:bg-[#F4F4EF]"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[12px] font-medium ${
                  activeStage === 2
                    ? "bg-[#28664A] text-white"
                    : "bg-[#EEEEE9] text-[#566155]"
                }`}
              >
                2
              </div>
              <div>
                <p className="font-sans text-[14px] font-semibold text-[#1A1C19]">
                  Find relevant evidence
                </p>
                <p className="font-sans text-[12.5px] text-[#566155]">Exact citations highlighted</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveStage(3)}
              className={`px-6 py-4 text-left transition-colors flex items-center gap-3.5 cursor-pointer ${
                activeStage === 3
                  ? "border-b-[#28664A] md:border-b-0 bg-[#FAF9F6]"
                  : "hover:bg-[#F4F4EF]"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[12px] font-medium ${
                  activeStage === 3
                    ? "bg-[#28664A] text-white"
                    : "bg-[#EEEEE9] text-[#566155]"
                }`}
              >
                3
              </div>
              <div>
                <p className="font-sans text-[14px] font-semibold text-[#1A1C19]">
                  Review and complete
                </p>
                <p className="font-sans text-[12.5px] text-[#566155]">Human approval before export</p>
              </div>
            </button>
          </div>

          {/* Stage 1 Content: Bring sources together */}
          {activeStage === 1 && (
            <div className="p-6 md:p-8">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-sans text-[19px] font-semibold text-[#1A1C19]">
                    Connected Knowledge Base
                  </h3>
                  <p className="font-sans text-[14px] text-[#566155] mt-0.5">
                    Security Review Ready indexes approved documents and references them verbatim.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DAE6D6] text-[#1A4C35] font-mono text-[11px] font-medium self-start">
                  4 Source Types Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg border border-[#E7E5DE] bg-white flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded bg-[#F4F4EF] flex items-center justify-center text-[#28664A] mb-3">
                      <Globe className="w-4 h-4" />
                    </div>
                    <h4 className="font-sans text-[14px] font-semibold text-[#1A1C19]">
                      Public Trust Center
                    </h4>
                    <p className="font-sans text-[12.5px] text-[#566155] mt-1 leading-relaxed">
                      Live URL sync with public uptime, status, subprocessors, and SLA guarantees.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E7E5DE] flex items-center justify-between font-mono text-[11px] text-[#696B66]">
                    <span>trust.company.com</span>
                    <span className="w-2 h-2 rounded-full bg-[#28664A]"></span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#E7E5DE] bg-white flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded bg-[#F4F4EF] flex items-center justify-center text-[#28664A] mb-3">
                      <FileText className="w-4 h-4" />
                    </div>
                    <h4 className="font-sans text-[14px] font-semibold text-[#1A1C19]">
                      Internal Policies
                    </h4>
                    <p className="font-sans text-[12.5px] text-[#566155] mt-1 leading-relaxed">
                      PDF, Notion & Markdown files covering Access, Incident, and Key Policies.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E7E5DE] flex items-center justify-between font-mono text-[11px] text-[#696B66]">
                    <span>18 verified files</span>
                    <span className="w-2 h-2 rounded-full bg-[#28664A]"></span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#E7E5DE] bg-white flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded bg-[#F4F4EF] flex items-center justify-center text-[#28664A] mb-3">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <h4 className="font-sans text-[14px] font-semibold text-[#1A1C19]">
                      Engineering Specs
                    </h4>
                    <p className="font-sans text-[12.5px] text-[#566155] mt-1 leading-relaxed">
                      Architecture overviews, VPC boundaries, encryption configs, and Git repos.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E7E5DE] flex items-center justify-between font-mono text-[11px] text-[#696B66]">
                    <span>Git repo sync</span>
                    <span className="w-2 h-2 rounded-full bg-[#28664A]"></span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#E7E5DE] bg-white flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded bg-[#F4F4EF] flex items-center justify-center text-[#28664A] mb-3">
                      <History className="w-4 h-4" />
                    </div>
                    <h4 className="font-sans text-[14px] font-semibold text-[#1A1C19]">
                      Prior Questionnaires
                    </h4>
                    <p className="font-sans text-[12.5px] text-[#566155] mt-1 leading-relaxed">
                      Past completed assessments from Fortune 500 reviews with legal sign-offs.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E7E5DE] flex items-center justify-between font-mono text-[11px] text-[#696B66]">
                    <span>6 reviewed sheets</span>
                    <span className="w-2 h-2 rounded-full bg-[#28664A]"></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stage 2 Content: Find relevant evidence */}
          {activeStage === 2 && (
            <div className="p-6 md:p-8">
              <div className="mb-4">
                <div className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider">
                  Semantic Match & Grounding
                </div>
                <h3 className="font-sans text-[18px] font-semibold text-[#1A1C19] mt-1">
                  Incoming Requirement: &ldquo;How do you restrict access to production data?&rdquo;
                </h3>
              </div>

              <div className="p-5 rounded-lg border border-[#E7E5DE] bg-white space-y-4">
                <div className="flex items-center justify-between border-b border-[#E7E5DE] pb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#28664A]" />
                    <span className="font-sans text-[13.5px] text-[#1A1C19] font-semibold">
                      Matched Source Document
                    </span>
                    <span className="font-mono text-[11px] text-[#696B66]">
                      Access Control Policy v2.4 (§ 3.1)
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#1A4C35] bg-[#DAE6D6] px-2.5 py-0.5 rounded font-medium">
                    Exact Paragraph Highlighted
                  </span>
                </div>

                <div className="p-4 rounded bg-[#F4F4EF] border border-[#E7E5DE] font-sans text-[13.5px] leading-relaxed text-[#566155]">
                  <p className="text-[12px] text-[#696B66]">
                    Section 3.1: Principle of Least Privilege and MFA requirements.
                  </p>
                  <div className="mt-2 p-3 bg-[#DAE6D6]/30 border border-[#28664A]/30 text-[#1A1C19] font-medium rounded-md">
                    &ldquo;Production database and runtime cluster access is strictly restricted to
                    designated Site Reliability Engineers. Access requires hardware-backed multi-factor
                    authentication (WebAuthn/FIDO2) through an ephemeral zero-trust bastion with
                    automated 8-hour credential revocation.&rdquo;
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#696B66] text-[12px]">
                  <span>Audited by Schellman &amp; Co. · Valid through Dec 2025</span>
                  <span className="text-[#074E34] font-medium font-mono">Confidence: 99.4%</span>
                </div>
              </div>
            </div>
          )}

          {/* Stage 3 Content: Review and complete */}
          {activeStage === 3 && (
            <div className="p-6 md:p-8">
              <div className="p-5 rounded-lg border border-[#E7E5DE] bg-white space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#DAE6D6] text-[#1A4C35] font-mono text-[11px] font-semibold">
                      Review Pending
                    </span>
                    <span className="font-mono text-[11px] text-[#696B66]">Question 14 of 120</span>
                  </div>
                  <span className="font-sans text-[12px] text-[#566155]">
                    Human-in-the-loop safeguard
                  </span>
                </div>

                <div className="p-4 rounded bg-[#FAF9F6] border border-[#E7E5DE]">
                  <p className="font-sans text-[15px] font-semibold text-[#1A1C19] mb-2">
                    How do you restrict access to production data?
                  </p>
                  <p className="font-sans text-[13.5px] text-[#1A1C19] leading-relaxed">
                    Production access is restricted to authorized SRE personnel via hardware-backed
                    MFA (WebAuthn/FIDO2). Bastion sessions are ephemeral with an automatic 8-hour
                    session lifetime per our Access Control Policy v2.4 (Sec 3.1).
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2 text-[12.5px] text-[#566155]">
                    <span>Cited in Access Control Policy.pdf (p. 12)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="h-8 px-3 rounded border border-[#E7E5DE] bg-white text-[#566155] font-sans text-[12px] hover:text-[#1A1C19]"
                    >
                      Edit wording
                    </button>
                    <button
                      type="button"
                      className="h-8 px-4 rounded bg-[#28664A] text-white font-sans text-[12px] font-medium border border-[#1B4D36] flex items-center gap-1.5"
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      Approve and Export
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
