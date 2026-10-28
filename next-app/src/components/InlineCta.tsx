"use client";

import React, { useState } from "react";
import { CheckCircle2, RotateCw, ArrowRight, ShieldCheck } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_bgmox48";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_dk79tyc";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "ALifYX3QYXhEcucgm";

interface InlineCtaProps {
  badge?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  source?: string;
  className?: string;
}

export function InlineCta({
  badge = "Free 24-Hour Questionnaire Evaluation",
  heading = "Have an incoming security questionnaire sitting in your inbox?",
  description = "Send us your customer questionnaire spreadsheet and your security documentation. We will complete it with 100% verified source citations in under 24 hours at zero cost.",
  buttonText = "Run My Questionnaire Free",
  source = "Inline CTA",
  className = "",
}: InlineCtaProps) {
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
        name: trimmed.split("@")[0] || "Subscriber",
        message: `New questionnaire run request from ${source}: ${trimmed}`,
        submitted_at: new Date().toISOString(),
        source: `SecurityReviewReady (${source})`,
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
    <section
      className={`bg-white p-6 sm:p-8 rounded-xl border border-[#C2DDD0] shadow-sm ${className}`}
    >
      <div className="max-w-2xl mx-auto text-center">
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] font-mono text-xs font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            {badge}
          </div>
        )}

        <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-[#1A1C19] tracking-tight mb-2.5">
          {heading}
        </h3>

        <p className="font-sans text-sm sm:text-base text-[#566155] leading-relaxed mb-6">
          {description}
        </p>

        {submitted ? (
          <div className="p-5 rounded-lg bg-[#FAF9F6] border border-[#28664A]/30 text-left flex flex-col sm:flex-row items-start gap-3.5 max-w-md mx-auto shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-sans font-semibold text-sm text-[#1A1C19] block">
                Congrats!! Early access Activated
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#566155] mt-1 leading-relaxed">
                Check your inbox at <strong className="text-[#1A1C19]">{email}</strong>: we have sent instructions to upload your first questionnaire for 24-hour turnaround (100% free).
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-3 text-xs font-mono text-[#28664A] hover:underline cursor-pointer focus:outline-none"
              >
                &larr; Submit another email
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-2.5"
          >
            <div className="flex-grow flex flex-col items-start">
              <input
                type="email"
                value={email}
                disabled={loading}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="you@company.com"
                required
                className="w-full h-11 px-3.5 rounded bg-[#FAF9F6] border border-[#E7E5DE] text-[#1A1C19] text-sm placeholder-[#696B66] focus:outline-none focus:border-[#28664A] focus:bg-white transition-colors shadow-inner disabled:opacity-60 disabled:cursor-not-allowed"
              />
              {error && (
                <span className="text-[#BA1A1A] font-sans text-xs mt-1.5 text-left">
                  {error}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="h-11 px-5 bg-[#28664A] hover:bg-[#1B4D36] text-white text-sm font-medium rounded border border-[#1B4D36] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-sm focus:outline-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <RotateCw className="w-4 h-4 text-white animate-spin" />
              ) : (
                <>
                  <span>{buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#696B66]">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A]" />
            100% Verified Citations
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A]" />
            Zero Public AI Training
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A]" />
            No Credit Card Required
          </span>
        </div>
      </div>
    </section>
  );
}

