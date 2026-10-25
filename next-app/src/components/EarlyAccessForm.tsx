"use client";

import React, { useState } from "react";
import { CheckCircle2, RotateCw } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_bgmox48";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_dk79tyc";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "ALifYX3QYXhEcucgm";

export function EarlyAccessForm() {
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
        message: `New 24h questionnaire run request from SecurityReviewReady: ${trimmed}`,
        submitted_at: new Date().toISOString(),
        source: "SecurityReviewReady Landing Page",
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
    <section id="early-access" className="py-16 md:py-24 border-t border-[#E7E5DE] bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="rounded-xl bg-[#F4F4EF] border border-[#28664A]/25 p-8 sm:p-12 max-w-3xl mx-auto text-center flex flex-col items-center shadow-sm">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DAE6D6] text-[#1A4C35] font-mono text-[11px] font-medium mb-4">
            Rolling Early Access Cohort
          </div>

          <h2 className="font-sans text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#1A1C19] tracking-[-0.025em] leading-[1.15] mb-3">
            Stop answering the same security questions from scratch.
          </h2>

          <p className="font-sans text-[16px] sm:text-[17px] text-[#566155] max-w-xl mb-8 leading-relaxed">
            Get your documentation working for you, so your next enterprise customer review takes
            minutes instead of days.
          </p>

          {submitted ? (
            <div className="p-5 rounded-lg bg-white border border-[#28664A]/30 text-left flex flex-col sm:flex-row items-start gap-3.5 max-w-md w-full shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#28664A] shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-sans font-semibold text-[14px] text-[#1A1C19] block">
                  Congrats!! Early access Activated
                </span>
                <p className="font-sans text-[13px] text-[#566155] mt-1 leading-relaxed">
                  Check your inbox at <strong className="text-[#1A1C19]">{email}</strong> — we&apos;ve
                  sent instructions to upload your first questionnaire for 24-hour turnaround (100%
                  free).
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-3 text-[12px] font-mono text-[#28664A] hover:underline cursor-pointer focus:outline-none"
                >
                  ← Submit another email
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col sm:flex-row items-stretch gap-2.5"
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
                  className="w-full h-[42px] px-3.5 rounded bg-white border border-[#E7E5DE] text-[#1A1C19] text-[14px] placeholder-[#696B66] focus:outline-none focus:border-[#28664A] shadow-inner disabled:opacity-60 disabled:cursor-not-allowed"
                />
                {error && (
                  <span className="text-[#BA1A1A] font-sans text-[12px] mt-1.5 text-left">
                    {error}
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="h-[42px] px-6 bg-[#28664A] hover:bg-[#1B4D36] text-white text-[13.5px] font-medium rounded border border-[#1B4D36] transition-colors flex items-center justify-center whitespace-nowrap shadow-sm focus:outline-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <RotateCw className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <span>Run My Questionnaire</span>
                )}
              </button>
            </form>
          )}

          <p className="font-sans text-[12.5px] text-[#696B66] mt-6">
            For B2B teams that would rather close enterprise deals than fill spreadsheets.
          </p>
        </div>
      </div>
    </section>
  );
}
