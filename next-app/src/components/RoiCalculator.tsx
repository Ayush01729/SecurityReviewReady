"use client";

import React, { useState } from "react";
import { Clock, TrendingUp, Calendar, ArrowRight } from "lucide-react";

export function RoiCalculator() {
  const [questionnairesPerMonth, setQuestionnairesPerMonth] = useState<number>(4);
  const [questionsPerForm, setQuestionsPerForm] = useState<number>(110);

  // Math assumptions:
  // Manual: ~7.5 minutes per question (finding doc, reading, drafting, formatting, peer check)
  // SRR: ~1.2 minutes per question (grounded draft ready, fast verification & 1-click approve)
  const totalQuestionsMonthly = questionnairesPerMonth * questionsPerForm;
  const manualHoursMonthly = Math.round((totalQuestionsMonthly * 7.5) / 60);
  const srrHoursMonthly = Math.round((totalQuestionsMonthly * 1.2) / 60);
  const hoursSavedMonthly = Math.max(1, manualHoursMonthly - srrHoursMonthly);
  const annualDollarsSaved = Math.round(hoursSavedMonthly * 12 * 140); // blended $140/hr eng cost
  const dealDaysSaved = Math.min(21, Math.round(questionnairesPerMonth * 3.2));

  return (
    <section id="calculator" className="py-16 md:py-24 border-t border-[#E7E5DE] bg-[#FAF9F6]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-3xl flex flex-col gap-3 mb-12">
          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[40px] font-medium text-[#1A1C19] tracking-[-0.025em] leading-[1.2]">
            Calculate your team&apos;s time recovered.
          </h2>
          <p className="font-sans text-[16px] sm:text-[17px] text-[#566155] leading-relaxed">
            See how many engineering hours and deal turnaround days your company saves by
            replacing manual questionnaire lookups with parallel grounded matching.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-[#E7E5DE] p-6 sm:p-8 flex flex-col justify-between shadow-[0_1px_3px_rgba(32,34,31,0.04)]">
            <div className="space-y-8">
              {/* Slider 1: Questionnaires per month */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="q-per-month" className="font-sans text-[14.5px] font-semibold text-[#1A1C19]">
                    Enterprise security questionnaires per month
                  </label>
                  <span className="font-mono text-[14px] text-[#074E34] bg-[#DAE6D6] px-2.5 py-0.5 rounded font-medium">
                    {questionnairesPerMonth} reviews
                  </span>
                </div>
                <input
                  id="q-per-month"
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={questionnairesPerMonth}
                  onChange={(e) => setQuestionnairesPerMonth(Number(e.target.value))}
                  className="w-full accent-[#28664A] cursor-pointer h-2 bg-[#EEEEE9] rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#696B66] mt-1.5">
                  <span>1 per month</span>
                  <span>10 per month</span>
                  <span>20 per month</span>
                </div>
              </div>

              {/* Slider 2: Average questions per questionnaire */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="questions-count" className="font-sans text-[14.5px] font-semibold text-[#1A1C19]">
                    Average questions per assessment
                  </label>
                  <span className="font-mono text-[14px] text-[#074E34] bg-[#DAE6D6] px-2.5 py-0.5 rounded font-medium">
                    {questionsPerForm} questions
                  </span>
                </div>
                <input
                  id="questions-count"
                  type="range"
                  min="30"
                  max="250"
                  step="10"
                  value={questionsPerForm}
                  onChange={(e) => setQuestionsPerForm(Number(e.target.value))}
                  className="w-full accent-[#28664A] cursor-pointer h-2 bg-[#EEEEE9] rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#696B66] mt-1.5">
                  <span>30 (Quick vendor check)</span>
                  <span>120 (Standard RFP)</span>
                  <span>250 (Full CAIQ/SIG)</span>
                </div>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="mt-8 pt-5 border-t border-[#E7E5DE] text-[12px] text-[#696B66] leading-relaxed">
              Based on empirical review times across B2B SaaS teams. Manual baseline assumes 7.5
              minutes per question across searching, validating, and peer approvals. Our verification average is ~1.2 minutes per grounded item.
            </div>
          </div>

          {/* Right: Calculated Metrics Board (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF9F6] rounded-lg border border-[#28664A]/30 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider pb-2 border-b border-[#E7E5DE]">
                Estimated Impact
              </div>

              {/* Metric 1: Hours Saved Monthly */}
              <div>
                <div className="flex items-center gap-2 text-[#566155] text-[13px] mb-1">
                  <Clock className="w-4 h-4 text-[#28664A]" />
                  <span>Engineering time saved</span>
                </div>
                <div className="font-sans text-[36px] sm:text-[42px] font-semibold text-[#1A1C19] tracking-tight leading-none">
                  {hoursSavedMonthly}{" "}
                  <span className="text-[18px] font-normal text-[#566155]">hrs/month</span>
                </div>
                <p className="font-sans text-[12.5px] text-[#696B66] mt-1">
                  Replaces {manualHoursMonthly} hours of manual hunting with {srrHoursMonthly} hours of rapid verification.
                </p>
              </div>

              {/* Metric 2: Deal Velocity Days */}
              <div className="pt-4 border-t border-[#E7E5DE]">
                <div className="flex items-center gap-2 text-[#566155] text-[13px] mb-1">
                  <Calendar className="w-4 h-4 text-[#28664A]" />
                  <span>Faster sales cycle closing</span>
                </div>
                <div className="font-sans text-[28px] sm:text-[32px] font-semibold text-[#074E34] tracking-tight leading-none">
                  ~{dealDaysSaved}{" "}
                  <span className="text-[16px] font-normal text-[#566155]">days faster</span>
                </div>
                <p className="font-sans text-[12px] text-[#696B66] mt-0.5">
                  Eliminates the multi-week procurement bottleneck on enterprise contracts.
                </p>
              </div>

              {/* Metric 3: Annual Capacity Value */}
              <div className="pt-4 border-t border-[#E7E5DE]">
                <div className="flex items-center gap-2 text-[#566155] text-[13px] mb-1">
                  <TrendingUp className="w-4 h-4 text-[#28664A]" />
                  <span>Annual capacity value recovered</span>
                </div>
                <div className="font-sans text-[24px] sm:text-[28px] font-semibold text-[#1A1C19] tracking-tight leading-none">
                  ${annualDollarsSaved.toLocaleString()}{" "}
                  <span className="text-[14px] font-normal text-[#566155]">/ year</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#early-access"
                className="w-full inline-flex items-center justify-center h-[38px] px-4 bg-[#28664A] hover:bg-[#1B4D36] text-white text-[13px] font-medium rounded border border-[#1B4D36] transition-colors shadow-sm"
              >
                Start Reclaiming Hours
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
