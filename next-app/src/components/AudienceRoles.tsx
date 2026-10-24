import React from "react";
import { User, Terminal, Users2 } from "lucide-react";

export function AudienceRoles() {
  return (
    <section className="py-16 md:py-24 border-t border-[#E7E5DE] bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[40px] font-medium text-[#1A1C19] tracking-[-0.025em] leading-[1.2]">
            Built for the team behind the deal.
          </h2>
          <p className="font-sans text-[16px] text-[#566155] mt-2 leading-relaxed">
            Designed for the founders and engineering leaders whose deal momentum is on the line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Segment 1: Founders */}
          <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] flex flex-col justify-between shadow-[0_1px_3px_rgba(32,34,31,0.02)]">
            <div>
              <div className="w-8 h-8 rounded bg-[#DAE6D6] flex items-center justify-center text-[#28664A] mb-4">
                <User className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-[18px] font-semibold text-[#1A1C19] mb-2">Founders</h3>
              <p className="font-sans text-[14px] text-[#566155] leading-relaxed">
                You&apos;re answering customer security questions yourself and need that time back to
                run the business and close revenue. Stop spending Sunday evenings combing through
                cryptic vendor spreadsheets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E7E5DE] text-[12px] font-mono text-[#074E34]">
              Protect founder bandwidth
            </div>
          </div>

          {/* Segment 2: CTOs & Eng Leads */}
          <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] flex flex-col justify-between shadow-[0_1px_3px_rgba(32,34,31,0.02)]">
            <div>
              <div className="w-8 h-8 rounded bg-[#DAE6D6] flex items-center justify-center text-[#28664A] mb-4">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-[18px] font-semibold text-[#1A1C19] mb-2">
                CTOs &amp; Engineering Leads
              </h3>
              <p className="font-sans text-[14px] text-[#566155] leading-relaxed">
                Your engineers should not spend afternoons digging through AWS architectures to answer
                questions they&apos;ve answered dozens of times before. Keep sprint cycles and roadmap
                velocity uninterrupted.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E7E5DE] text-[12px] font-mono text-[#074E34]">
              Zero engineering interruptions
            </div>
          </div>

          {/* Segment 3: Lean SaaS Teams */}
          <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] flex flex-col justify-between shadow-[0_1px_3px_rgba(32,34,31,0.02)]">
            <div>
              <div className="w-8 h-8 rounded bg-[#DAE6D6] flex items-center justify-center text-[#28664A] mb-4">
                <Users2 className="w-4 h-4" />
              </div>
              <h3 className="font-sans text-[18px] font-semibold text-[#1A1C19] mb-2">
                Growth B2B SaaS Teams
              </h3>
              <p className="font-sans text-[14px] text-[#566155] leading-relaxed">
                You&apos;re selling upmarket into Fortune 500 accounts and need a repeatable,
                dependable way to clear enterprise vendor risk assessments without hiring full-time
                compliance staff.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E7E5DE] text-[12px] font-mono text-[#074E34]">
              Scale into enterprise accounts
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
