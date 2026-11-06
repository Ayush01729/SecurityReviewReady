"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function Footer() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  return (
    <footer className="py-12 border-t border-[#E7E5DE] bg-white text-[#566155]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Column (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#28664A] text-white flex items-center justify-center border border-[#1B4D36]">
                <ShieldCheck className="w-4 h-4 text-white stroke-[2.2]" />
              </div>
              <span className="font-sans text-[16px] font-semibold text-[#1A1C19] tracking-tight">
                Security Review Ready
              </span>
            </Link>
            <p className="font-sans text-[13.5px] text-[#566155] max-w-sm leading-relaxed">
              A simpler, dependable way to handle customer security reviews. Grounded in your verified
              evidence, approved by your team.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/security-review-ready"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F4F4EF] hover:bg-[#DAE6D6] text-[#566155] hover:text-[#074E34] text-[12px] font-medium border border-[#E7E5DE] transition-colors"
                aria-label="Security Review Ready on LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#28664A]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Links Columns (8 cols) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-[13px]">
            {/* Product */}
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider font-semibold">
                Product
              </span>
              <Link href="/how-it-works" className="hover:text-[#1A1C19] transition-colors">
                How It Works
              </Link>
              <Link href="/demo" className="hover:text-[#1A1C19] transition-colors font-medium text-[#074E34]">
                Book a Demo
              </Link>
              <Link href="/security" className="hover:text-[#1A1C19] transition-colors">
                Security & Governance
              </Link>
              <Link href="/#calculator" className="hover:text-[#1A1C19] transition-colors">
                ROI Calculator
              </Link>
              <Link href="/#faq" className="hover:text-[#1A1C19] transition-colors">
                FAQ
              </Link>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider font-semibold">
                Resources
              </span>
              <Link href="/resources" className="hover:text-[#1A1C19] transition-colors font-medium text-[#074E34]">
                All Resources & Guides
              </Link>
              <Link href="/resources/security-questionnaire-automation" className="hover:text-[#1A1C19] transition-colors">
                Questionnaire Automation
              </Link>
              <Link href="/resources/best-security-questionnaire-automation-software" className="hover:text-[#1A1C19] transition-colors">
                Top Automation Software
              </Link>
              <Link href="/resources/security-questionnaire-examples" className="hover:text-[#1A1C19] transition-colors">
                15 Real Examples & Answers
              </Link>
              <Link href="/resources/vendor-security-questionnaire-guide" className="hover:text-[#1A1C19] transition-colors">
                Vendor Questionnaire Guide
              </Link>
            </div>

            {/* Comparisons */}
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider font-semibold">
                Compare
              </span>
              <Link href="/compare" className="hover:text-[#1A1C19] transition-colors font-medium text-[#074E34]">
                Compare Hub
              </Link>
              <Link href="/compare/conveyor-alternative" className="hover:text-[#1A1C19] transition-colors">
                vs Conveyor
              </Link>
              <Link href="/compare/whistic-alternative" className="hover:text-[#1A1C19] transition-colors">
                vs Whistic
              </Link>
            </div>

            {/* Contact & Standards */}
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider font-semibold">
                Contact
              </span>
              <a
                href="mailto:team@securityreviewready.com"
                className="hover:text-[#1A1C19] transition-colors font-mono text-[12px]"
              >
                team@securityreviewready.com
              </a>
              <div className="mt-2 pt-2 border-t border-[#E7E5DE] text-[11px] text-[#074E34] font-medium">
                SOC 2 & CAIQ Compliant
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#E7E5DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#696B66]">
          <div>© 2026 Security Review Ready. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/security-review-ready"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#074E34] transition-colors flex items-center gap-1.5"
              aria-label="Follow Security Review Ready on LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#28664A]" />
              <span>LinkedIn</span>
            </a>
            <button
              type="button"
              onClick={() =>
                setModalContent(
                  "Privacy Policy: Security Review Ready enforces strict multi-tenant isolation, AES-256 encryption, and zero customer data usage for public AI model training."
                )
              }
              className="hover:text-[#1A1C19] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() =>
                setModalContent(
                  "Terms of Service: Enterprise security review workspace provided under pilot SLA. All generated responses require human review and authorization before external export."
                )
              }
              className="hover:text-[#1A1C19] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full border border-[#E7E5DE] shadow-xl relative">
            <button
              type="button"
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 text-[#566155] hover:text-[#1A1C19]"
            >
              <X className="w-4 h-4" />
            </button>
            <h4 className="font-sans text-[16px] font-semibold text-[#1A1C19] mb-2">Notice</h4>
            <p className="font-sans text-[13.5px] text-[#566155] leading-relaxed">{modalContent}</p>
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="px-3.5 py-1.5 bg-[#28664A] text-white rounded text-[12.5px] font-medium"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
