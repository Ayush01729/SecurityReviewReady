"use client";

import React, { useState } from "react";
import { ArrowDown, Check, CheckCircle2, Mail, RotateCw, ShieldCheck, Zap } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_bgmox48";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_dk79tyc";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "ALifYX3QYXhEcucgm";

export function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      setError("Please enter a valid work email address.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS environment variables are missing.");
      setError("Configuration error: EmailJS environment variables are not set.");
      return;
    }

    setLoading(true);
    try {
      const templateParams = {
        email: trimmed,
        user_email: trimmed,
        to_email: trimmed,
        reply_to: trimmed,
        from_name: trimmed,
        name: trimmed.split("@")[0] || "Early Access Subscriber",
        message: `New early access waitlist signup from SecurityReviewReady Hero: ${trimmed}`,
        submitted_at: new Date().toISOString(),
        source: "SecurityReviewReady Hero Input",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("EmailJS submission error:", err);
      const message =
        err && typeof err === "object" && "text" in err
          ? String((err as { text: string }).text)
          : "We encountered a temporary connection issue. Please try again or reach out directly.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    setError("");
  };

  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-3xl flex flex-col items-start gap-5">
          {/* Main Title */}
          <h1 className="font-sans text-[36px] sm:text-[46px] md:text-[56px] leading-[1.12] font-medium text-[#1A1C19] tracking-[-0.03em]">
            Security questionnaires shouldn&apos;t slow down a deal.
          </h1>

          <p className="font-sans text-[17px] sm:text-[19px] leading-[1.58] text-[#566155] max-w-2xl">
            Feed in your security documentation once. Our engine ingests policies, live
            trust center URLs, and SOC 2 audits to continuously fill customer questionnaires for
            all enterprise buyers.
          </p>

          {/* Action Area: Unified Early Access Input + Secondary Discovery Link */}
          <div className="pt-2 w-full max-w-xl">
            {submitted ? (
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#28664A]/30 text-left flex items-start gap-3.5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-sans font-semibold text-[14px] text-[#1A1C19] block">
                    You&apos;re on the priority onboarding list.
                  </span>
                  <p className="font-sans text-[13px] text-[#566155] mt-1 leading-relaxed">
                    We sent a confirmation to <strong className="text-[#1A1C19]">{email}</strong>. Our
                    team will reach out within 24 hours with your onboarding details.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2.5 text-[12px] font-mono text-[#28664A] hover:underline cursor-pointer focus:outline-none"
                  >
                    ← Register another email
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="p-1.5 rounded-xl bg-white border border-[#E7E5DE] focus-within:border-[#28664A] focus-within:ring-2 focus-within:ring-[#28664A]/15 shadow-[0_2px_8px_rgba(32,34,31,0.06)] transition-all flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <div className="flex-1 flex items-center px-3 min-h-[46px]">
                      <Mail className="w-4 h-4 text-[#696B66] shrink-0 mr-2.5" />
                      <input
                        type="email"
                        value={email}
                        disabled={loading}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        placeholder="Enter work email"
                        required
                        className="w-full h-full bg-transparent text-[#1A1C19] text-[15px] placeholder-[#696B66] focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="h-[44px] px-6 rounded-lg bg-[#28664A] hover:bg-[#1B4D36] text-white text-[14px] font-medium transition-colors flex items-center justify-center whitespace-nowrap shadow-sm focus:outline-none focus:ring-2 focus:ring-[#28664A]/25 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <RotateCw className="w-4 h-4 text-white animate-spin" />
                      ) : (
                        <span>Get Early Access</span>
                      )}
                    </button>
                  </div>
                  {error && (
                    <span className="text-[#BA1A1A] font-sans text-[12px] mt-2 block text-left">
                      {error}
                    </span>
                  )}
                </form>

                <div className="flex items-center gap-2 pt-0.5">
                  <a
                    href="#parallel-pipeline"
                    className="inline-flex items-center gap-1.5 text-[13px] text-[#566155] hover:text-[#1A1C19] font-medium transition-colors group"
                  >
                    <span>Explore live parallel engine</span>
                    <ArrowDown className="w-3.5 h-3.5 text-[#28664A] group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Micro-guarantee strip */}
          <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#566155]">
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
