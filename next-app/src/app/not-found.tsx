import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home, BookOpen, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md w-full text-center">
          <div className="w-14 h-14 rounded-full bg-[#EBF3EF] border border-[#C2DDD0] text-[#28664A] flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-7 h-7 stroke-[2]" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#074E34] bg-[#EBF3EF] px-2.5 py-1 rounded">
            Error 404
          </span>
          <h1 className="font-sans text-3xl font-semibold tracking-tight text-[#1A1C19] mt-4 mb-3">
            Page Not Found
          </h1>
          <p className="font-sans text-[14.5px] text-[#566155] leading-relaxed mb-8">
            The security review resource or page you are looking for has been moved or does not exist. Browse our verified resources below.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-10 px-5 bg-[#28664A] hover:bg-[#1B4D36] text-white text-[13.5px] font-medium rounded border border-[#1B4D36] transition-colors"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
            <Link
              href="/resources"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-10 px-5 bg-white hover:bg-[#F4F4EF] text-[#1A1C19] text-[13.5px] font-medium rounded border border-[#E7E5DE] transition-colors"
            >
              <BookOpen className="w-4 h-4 text-[#28664A]" />
              View Guides & Resources
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

