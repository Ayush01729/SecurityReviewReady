import React from "react";
import { ArrowDown, Check, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-3xl flex flex-col items-start gap-5">
          {/* Main Title - No ban-violating kickers/eyebrows */}
          <h1 className="font-sans text-[36px] sm:text-[46px] md:text-[56px] leading-[1.12] font-medium text-[#1A1C19] tracking-[-0.03em]">
            Security questionnaires shouldn&apos;t slow down a deal.
          </h1>

          <p className="font-sans text-[17px] sm:text-[19px] leading-[1.58] text-[#566155] max-w-2xl">
            Feed in your security documentation once. Our engine ingests policies, live
            trust center URLs, and SOC 2 audits to continuously fill customer questionnaires for
            all enterprise buyers.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
            <a
              href="#early-access"
              className="inline-flex items-center justify-center h-[42px] px-6 bg-[#28664A] hover:bg-[#1B4D36] text-white text-[14px] font-medium rounded border border-[#1B4D36] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#28664A]/20"
            >
              Get Early Access
            </a>
            <a
              href="#parallel-pipeline"
              className="inline-flex items-center justify-center h-[42px] px-5 bg-white hover:bg-[#F4F4EF] text-[#1A1C19] text-[14px] font-medium rounded border border-[#E7E5DE] transition-colors focus:outline-none"
            >
              Explore Engine Visual
              <ArrowDown className="w-4 h-4 ml-1.5 text-[#566155]" />
            </a>
          </div>

          {/* Micro-guarantee strip */}
          <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#566155]">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#28664A] stroke-[2.5]" />
              No copy-pasting
            </span>
            <span className="text-[#E7E5DE]">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#28664A] stroke-[2.5]" />
              Full source traceability
            </span>
            <span className="text-[#E7E5DE]">•</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#28664A] stroke-[2.5]" />
              100% human-verified before export
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
