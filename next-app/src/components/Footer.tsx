"use client";

import React, { useState } from "react";
import { ShieldCheck, X } from "lucide-react";

export function Footer() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  return (
    <footer className="py-12 border-t border-[#E7E5DE] bg-white text-[#566155]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#28664A] text-white flex items-center justify-center border border-[#1B4D36]">
                <ShieldCheck className="w-4 h-4 text-white stroke-[2.2]" />
              </div>
              <span className="font-sans text-[16px] font-semibold text-[#1A1C19] tracking-tight">
                Security Review Ready
              </span>
            </div>
            <p className="font-sans text-[13.5px] text-[#566155] max-w-sm leading-relaxed">
              A simpler, dependable way to handle customer security reviews. Grounded in your verified
              evidence, approved by your team.
            </p>
          </div>

          {/* Links Columns (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-[13px]">
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider font-semibold">
                Product
              </span>
              <a href="#how-it-works" className="hover:text-[#1A1C19] transition-colors">
                How It Works
              </a>
              <a href="#parallel-pipeline" className="hover:text-[#1A1C19] transition-colors">
                Parallel Engine
              </a>
              <a href="#inspector" className="hover:text-[#1A1C19] transition-colors">
                Evidence Inspector
              </a>
              <a href="#calculator" className="hover:text-[#1A1C19] transition-colors">
                ROI Calculator
              </a>
              <a href="#security" className="hover:text-[#1A1C19] transition-colors">
                Security & Privacy
              </a>
              <a href="#faq" className="hover:text-[#1A1C19] transition-colors">
                FAQ
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider font-semibold">
                Standards
              </span>
              <span className="text-[#696B66]">SOC 2 Type II</span>
              <span className="text-[#696B66]">CAIQ v4.0.2</span>
              <span className="text-[#696B66]">ISO/IEC 27001</span>
              <span className="text-[#696B66]">HIPAA Security</span>
              <span className="text-[#696B66]">NIST 800-53</span>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider font-semibold">
                Contact
              </span>
              <a
                href="mailto:hello@securityreviewready.com"
                className="hover:text-[#1A1C19] transition-colors font-mono text-[12px]"
              >
                hello@securityreviewready.com
              </a>
              {/* <span className="text-[#696B66] text-[12px]">San Francisco, CA</span> */}
              <div className="mt-2 pt-2 border-t border-[#E7E5DE] text-[11px] text-[#074E34] font-medium">
                SOC 2 Baseline Compliant
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#E7E5DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#696B66]">
          <div>© 2026 Security Review Ready. All rights reserved.</div>
          <div className="flex items-center gap-6">
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
