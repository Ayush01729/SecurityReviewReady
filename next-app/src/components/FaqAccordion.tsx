"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is Security Review Ready?",
    answer:
      "Security Review Ready is a purpose-built workspace that helps B2B SaaS teams complete customer security reviews faster. It ingests your verified security documentation (policies, SOC 2 reports, trust centers) and generates accurate, source-cited responses to incoming enterprise questionnaires.",
  },
  {
    question: "How does it work?",
    answer:
      "You upload or link your security documentation once. When a prospective enterprise customer sends a questionnaire (spreadsheet, portal, or form), Security Review Ready matches each requirement against your verified evidence, drafts grounded responses, and points your reviewer directly to the exact source paragraph with page numbers.",
  },
  {
    question: "Does it automatically send answers to customers?",
    answer:
      "No. We enforce a strict 'human-in-the-loop' safeguard. Suggested answers remain drafts until someone from your team reviews and approves them. You never risk sending an unverified claim or unapproved commitment to an enterprise buyer.",
  },
  {
    question: "What documents and sources can I connect?",
    answer:
      "You can connect public trust center URLs, internal security policies (PDF, Markdown, Word), SOC 2 Type II audit reports, ISO 27001 certifications, CAIQ v4 spreadsheets, and previously completed vendor questionnaires.",
  },
  {
    question: "Are the answers reviewed by a human?",
    answer:
      "Yes, always. The platform is designed around rapid human verification. Instead of writing from scratch or searching multiple tabs, your reviewer simply validates the grounded citation and approves with a single click.",
  },
  {
    question: "Is my company's information secure?",
    answer:
      "Yes. We enforce strict multi-tenant data isolation, AES-256 encryption at rest, TLS 1.3 in transit, and role-based permissions. Your sensitive security policies are strictly never used to train public or foundational third-party AI models.",
  },
  {
    question: "Who is this built for?",
    answer:
      "Early-stage to growth B2B SaaS teams (seed to Series B) selling into mid-market and enterprise accounts where procurement requires formal vendor risk assessments (CAIQ, SIG, or custom RFPs).",
  },
  {
    question: "How can I get early access?",
    answer:
      "We are onboarding pilot customers in rolling cohorts. Submit your work email in the early access form below and our founding team will reach out within 24 hours to schedule your workspace onboarding.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-[#E7E5DE] bg-[#FAF9F6]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[40px] font-medium text-[#1A1C19] tracking-[-0.025em] leading-[1.2]">
            Frequently asked questions.
          </h2>
          <p className="font-sans text-[16px] text-[#566155] mt-2 leading-relaxed">
            Everything you need to know about grounding, source citations, and human approval.
          </p>
        </div>

        <div className="max-w-3xl divide-y divide-[#E7E5DE] border-t border-b border-[#E7E5DE] bg-white rounded-lg shadow-[0_1px_3px_rgba(32,34,31,0.02)] overflow-hidden">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left py-4 px-6 text-[#1A1C19] hover:bg-[#FAF9F6] transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-[15.5px] font-medium text-[#1A1C19] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#566155] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#28664A]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-[#566155] font-sans text-[14px] leading-relaxed border-t border-[#F4F4EF]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
