"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E7E5DE] smooth-gpu">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#28664A] text-white flex items-center justify-center border border-[#1B4D36] shadow-sm shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white stroke-[2.2]" />
          </div>
          <span className="font-sans font-medium text-[15px] sm:text-[17px] text-[#1A1C19] tracking-tight group-hover:text-[#074E34] transition-colors truncate max-w-[155px] xs:max-w-none">
            Security Review Ready
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#566155]">
          <Link href="/how-it-works" className="hover:text-[#1A1C19] transition-colors">
            How It Works
          </Link>
          <Link href="/resources" className="hover:text-[#1A1C19] transition-colors">
            Resources
          </Link>
          <Link href="/security" className="hover:text-[#1A1C19] transition-colors">
            Security & Governance
          </Link>
          <Link href="/compare" className="hover:text-[#1A1C19] transition-colors">
            Compare
          </Link>
          <Link href="/#faq" className="hover:text-[#1A1C19] transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Right Actions: Always Visible on Mobile & Desktop */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center h-[32px] sm:h-[38px] px-3 sm:px-4 bg-[#28664A] hover:bg-[#1B4D36] text-white text-[12px] sm:text-[13px] font-medium rounded border border-[#1B4D36] transition-colors shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#28664A]/20"
          >
            Book a Demo
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded text-[#566155] hover:text-[#1A1C19] hover:bg-[#EEEEE9]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E7E5DE] bg-[#FAF9F6] px-6 py-4 flex flex-col gap-3 text-[14px] font-medium text-[#566155]">
          <Link
            href="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#1A1C19]"
          >
            How It Works
          </Link>
          <Link
            href="/resources"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#1A1C19]"
          >
            Resources & Guides
          </Link>
          <Link
            href="/security"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#1A1C19]"
          >
            Security & Governance
          </Link>
          <Link
            href="/compare"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#1A1C19]"
          >
            Compare Alternatives
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#1A1C19]"
          >
            FAQ
          </Link>
          <div className="pt-2">
            <Link
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center h-[38px] px-4 bg-[#28664A] text-white text-[13px] font-medium rounded border border-[#1B4D36]"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
