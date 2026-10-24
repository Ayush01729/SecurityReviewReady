import React from "react";
import { Inbox, Layers, Copy, ArrowRight, Lightbulb } from "lucide-react";

export function WorkflowComparison() {
  return (
    <section className="py-16 md:py-24 border-t border-[#E7E5DE] bg-[#FAF9F6]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl flex flex-col gap-3 mb-12">
          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[40px] font-medium text-[#1A1C19] tracking-[-0.025em] leading-[1.2]">
            You&apos;ve answered these questions before. Why answer them again?
          </h2>
          <p className="font-sans text-[16px] sm:text-[17px] text-[#566155] leading-relaxed">
            Your next customer sends a 150-question security assessment. The information already exists
            in your policies, trust center, and previous responses. But someone still has to find it,
            rewrite it, and check every single answer.
          </p>
        </div>

        {/* 3 Structured Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Receive */}
          <div className="rounded-lg bg-white border border-[#E7E5DE] p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(32,34,31,0.04)]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider">
                  The Influx
                </span>
                <Inbox className="w-5 h-5 text-[#566155]" />
              </div>
              <h3 className="font-sans text-[18px] font-semibold text-[#1A1C19] mb-2">
                Another questionnaire lands.
              </h3>
              <p className="font-sans text-[14px] text-[#566155] leading-relaxed mb-6">
                A high-value enterprise deal hits a sudden pause. The buyer&apos;s procurement team drops
                a custom spreadsheet with 140 questions into your inbox.
              </p>
            </div>

            {/* Visual simulation box */}
            <div className="p-3 rounded bg-[#F4F4EF] border border-[#E7E5DE] space-y-2">
              <div className="flex items-center justify-between text-[#566155] font-mono text-[11px]">
                <span className="truncate">Security_Review_Q4_v2.xlsx</span>
                <span className="text-[#BA1A1A] font-medium shrink-0">120 pending</span>
              </div>
              <div className="w-full bg-[#E2E3DE] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#BA1A1A] w-1/12 h-full"></div>
              </div>
              <div className="flex justify-between font-sans text-[11px] text-[#696B66] pt-1">
                <span>Enterprise Deal Desk</span>
                <span>Due in 4 days</span>
              </div>
            </div>
          </div>

          {/* Card 2: Search */}
          <div className="rounded-lg bg-white border border-[#E7E5DE] p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(32,34,31,0.04)]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider">
                  The Scramble
                </span>
                <Layers className="w-5 h-5 text-[#566155]" />
              </div>
              <h3 className="font-sans text-[18px] font-semibold text-[#1A1C19] mb-2">
                Hours disappear into searching.
              </h3>
              <p className="font-sans text-[14px] text-[#566155] leading-relaxed mb-6">
                Your CTO opens five tabs at once: Trust Center, Notion security policies, last
                quarter&apos;s closed review, and the 90-page SOC 2 audit PDF.
              </p>
            </div>

            {/* Visual simulation box */}
            <div className="p-3 rounded bg-[#F4F4EF] border border-[#E7E5DE] space-y-1.5 font-mono text-[11px]">
              <div className="flex items-center gap-2 p-1.5 rounded bg-white border border-[#E7E5DE] text-[#1A1C19]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#566155] shrink-0"></span>
                <span className="truncate">SOC2_Type_II_2024.pdf (p. 48)</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded bg-white border border-[#E7E5DE] text-[#1A1C19]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#566155] shrink-0"></span>
                <span className="truncate">Notion / Internal Security Handbook</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded bg-white border border-[#E7E5DE] text-[#1A1C19]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#566155] shrink-0"></span>
                <span className="truncate">Buyer_A_Vendor_Review_Done.xlsx</span>
              </div>
            </div>
          </div>

          {/* Card 3: Duplication */}
          <div className="rounded-lg bg-white border border-[#E7E5DE] p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(32,34,31,0.04)]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider">
                  The Repetition
                </span>
                <Copy className="w-5 h-5 text-[#566155]" />
              </div>
              <h3 className="font-sans text-[18px] font-semibold text-[#1A1C19] mb-2">
                The same answers. Again.
              </h3>
              <p className="font-sans text-[14px] text-[#566155] leading-relaxed mb-6">
                Enterprise buyers phrase the exact same compliance inquiries with slightly different
                words, forcing manual rewording and double-checking every sales cycle.
              </p>
            </div>

            {/* Visual simulation box */}
            <div className="p-3 rounded bg-[#F4F4EF] border border-[#E7E5DE] space-y-2">
              <div className="p-2 rounded bg-white border border-[#E7E5DE]">
                <span className="font-mono text-[10.5px] text-[#696B66]">Buyer A:</span>
                <p className="font-sans text-[12px] text-[#1A1C19] mt-0.5">
                  &ldquo;What cipher suites are enforced in transit?&rdquo;
                </p>
              </div>
              <div className="p-2 rounded bg-white border border-[#E7E5DE]">
                <span className="font-mono text-[10.5px] text-[#696B66]">Buyer B:</span>
                <p className="font-sans text-[12px] text-[#1A1C19] mt-0.5">
                  &ldquo;Is TLS 1.2+ mandatory for all client API calls?&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Synthesis Banner */}
        <div className="mt-8 p-6 rounded-lg bg-[#EEEEE9]/70 border border-[#E7E5DE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#DAE6D6] flex items-center justify-center text-[#1A4C35] shrink-0">
              <Lightbulb className="w-4 h-4" />
            </div>
            <span className="font-sans text-[16px] font-medium text-[#1A1C19]">
              The information isn&apos;t missing. It&apos;s just scattered across silos.
            </span>
          </div>
          <a
            href="#how-it-works"
            className="font-sans text-[13.5px] font-semibold text-[#074E34] hover:underline whitespace-nowrap flex items-center gap-1"
          >
            How Security Review Ready fixes this <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
