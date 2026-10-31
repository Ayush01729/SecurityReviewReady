"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  RotateCw,
  Video,
  Check,
  Calendar,
  Layers,
  FileSpreadsheet,
  Clock,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { track } from "@vercel/analytics";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_bgmox48";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_dk79tyc";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "ALifYX3QYXhEcucgm";

const AVAILABLE_DOCS = [
  "SOC 2 Type II Report",
  "ISO 27001 Certificate",
  "Security & Privacy Policies",
  "Public Trust Center URL",
  "Past Completed Questionnaires",
];

export default function BookDemoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [questionnaireType, setQuestionnaireType] = useState("");
  const [selectedDocs, setSelectedDocs] = useState<string[]>([
    AVAILABLE_DOCS[0],
    AVAILABLE_DOCS[2],
  ]);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleToggleDoc = (doc: string) => {
    setSelectedDocs((prev) =>
      prev.includes(doc) ? prev.filter((d) => d !== doc) : [...prev, doc]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError("Please enter your name.");
      return;
    }

    if (!trimmedEmail || !trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
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
      const formattedMessage = [
        `New Demo Request from: ${trimmedName}`,
        `Work Email: ${trimmedEmail}`,
        `Questionnaire Type: ${questionnaireType.trim() || "Not specified"}`,
        `Available Evidence: ${selectedDocs.length > 0 ? selectedDocs.join(", ") : "None selected"}`,
        `Notes / Timeline: ${notes.trim() || "None provided"}`,
      ].join("\n");

      const templateParams = {
        email: trimmedEmail,
        user_email: trimmedEmail,
        to_email: trimmedEmail,
        reply_to: trimmedEmail,
        from_name: trimmedName,
        name: trimmedName,
        message: formattedMessage,
        submitted_at: new Date().toISOString(),
        source: "SecurityReviewReady Book Demo Page",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      track("book_demo_submission", {
        name: trimmedName,
        email: trimmedEmail,
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
    setName("");
    setEmail("");
    setQuestionnaireType("");
    setNotes("");
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 page-transition">
        <div className="max-w-[1040px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#566155]">
            <Link href="/" className="hover:text-[#1A1C19] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#074E34] font-medium">Book a Demo</span>
          </nav>

          {/* Header */}
          <div className="border-b border-[#E7E5DE] pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EBF3EF] border border-[#C2DDD0] text-[#074E34] text-xs font-mono font-medium mb-4">
              <Video className="w-3.5 h-3.5" />
              Personalized Product Walkthrough
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1C19] max-w-3xl leading-tight">
              See Security Review Ready in Action
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#566155] max-w-2xl leading-relaxed">
              Schedule a 15-minute walkthrough to see how our grounded citation engine turns 200-question security reviews into a 15-minute verification task with zero hallucinations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-[#C2DDD0] p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#28664A]/30 text-left">
                  <div className="w-10 h-10 rounded-full bg-[#EBF3EF] text-[#074E34] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#28664A]" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-[#1A1C19]">
                    Demo Request Received!
                  </h3>
                  <p className="font-sans text-sm text-[#566155] mt-2 leading-relaxed">
                    Thank you <strong className="text-[#1A1C19]">{name}</strong>. We have sent a confirmation to <strong className="text-[#1A1C19]">{email}</strong>. Our team will reach out shortly with scheduling details for your personalized walkthrough.
                  </p>
                  <div className="mt-6 p-4 rounded bg-white border border-[#E7E5DE] text-xs font-mono text-[#566155] space-y-1.5">
                    <div><strong>Walkthrough Duration:</strong> 15 to 20 minutes</div>
                    <div><strong>Focus:</strong> Evidence Grounding & Excel Formula Preservation</div>
                    <div><strong>Status:</strong> Request Accepted</div>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-[#28664A] hover:underline cursor-pointer"
                  >
                    &larr; Submit another demo request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono font-medium text-[#1A1C19] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      disabled={loading}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="Jane Doe"
                      required
                      className="w-full h-11 px-3.5 rounded bg-[#FAF9F6] border border-[#E7E5DE] text-[#1A1C19] text-sm placeholder-[#696B66] focus:outline-none focus:border-[#28664A] focus:bg-white transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[#1A1C19] mb-1.5">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      disabled={loading}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="jane@company.com"
                      required
                      className="w-full h-11 px-3.5 rounded bg-[#FAF9F6] border border-[#E7E5DE] text-[#1A1C19] text-sm placeholder-[#696B66] focus:outline-none focus:border-[#28664A] focus:bg-white transition-colors shadow-inner"
                    />
                    {error && (
                      <span className="text-[#BA1A1A] font-sans text-xs mt-1 block">
                        {error}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[#1A1C19] mb-1.5">
                      Type of Questionnaire You Usually Receive (Optional)
                    </label>
                    <input
                      type="text"
                      value={questionnaireType}
                      disabled={loading}
                      onChange={(e) => setQuestionnaireType(e.target.value)}
                      placeholder="e.g. Custom Excel RFPs, CAIQ v4, SIG Lite, OneTrust"
                      className="w-full h-11 px-3.5 rounded bg-[#FAF9F6] border border-[#E7E5DE] text-[#1A1C19] text-sm placeholder-[#696B66] focus:outline-none focus:border-[#28664A] focus:bg-white transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[#1A1C19] mb-2">
                      Evidence Documents Available for Ingestion (Optional)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {AVAILABLE_DOCS.map((doc) => {
                        const checked = selectedDocs.includes(doc);
                        return (
                          <button
                            key={doc}
                            type="button"
                            onClick={() => handleToggleDoc(doc)}
                            className={`p-2.5 rounded border text-left text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors ${
                              checked
                                ? "bg-[#EBF3EF] border-[#C2DDD0] text-[#074E34] font-medium"
                                : "bg-[#FAF9F6] border-[#E7E5DE] text-[#566155] hover:bg-white"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                checked
                                  ? "bg-[#28664A] border-[#28664A] text-white"
                                  : "border-[#C2DDD0] bg-white"
                              }`}
                            >
                              {checked && <Check className="w-3 h-3 stroke-[3]" />}
                            </span>
                            <span className="truncate">{doc}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[#1A1C19] mb-1.5">
                      Notes, Questions, or Target Timeline (Optional)
                    </label>
                    <textarea
                      value={notes}
                      disabled={loading}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Evaluating tools for a Series A SaaS team; currently spending 2 days per questionnaire..."
                      rows={3}
                      className="w-full p-3 rounded bg-[#FAF9F6] border border-[#E7E5DE] text-[#1A1C19] text-sm placeholder-[#696B66] focus:outline-none focus:border-[#28664A] focus:bg-white transition-colors resize-none shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#28664A] hover:bg-[#1B4D36] text-white text-sm font-medium rounded border border-[#1B4D36] transition-colors flex items-center justify-center gap-2 shadow-sm focus:outline-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <RotateCw className="w-4 h-4 text-white animate-spin" />
                    ) : (
                      <>
                        <span>Request Live Demo</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs font-mono text-[#696B66]">
                    15-minute walkthrough. No sales pressure. Total data confidentiality.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-xl border border-[#E7E5DE] p-6 shadow-sm">
                <h3 className="font-sans text-lg font-semibold text-[#1A1C19] mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#28664A]" />
                  What You Will See in the 15-Minute Demo
                </h3>
                <ol className="space-y-4 text-xs">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#EBF3EF] text-[#074E34] font-mono font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-[#1A1C19] block mb-0.5">Live Evidence Ingestion</strong>
                      <span className="text-[#566155] leading-relaxed">
                        Watch how SOC 2 audit reports, ISO 27001 policies, and trust centers are parsed into an isolated knowledge graph.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#EBF3EF] text-[#074E34] font-mono font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-[#1A1C19] block mb-0.5">Grounded Citation Matching</strong>
                      <span className="text-[#566155] leading-relaxed">
                        See how every generated answer links directly to the exact paragraph, document name, and page number with zero guessing.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#EBF3EF] text-[#074E34] font-mono font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-[#1A1C19] block mb-0.5">Excel Macro & Formula Preservation</strong>
                      <span className="text-[#566155] leading-relaxed">
                        Learn how complex multi-tab customer workbooks are completed with native dropdown and calculation formula integrity.
                      </span>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-[#E7E5DE] p-6 shadow-sm space-y-4 text-xs font-mono text-[#566155]">
                <div className="flex items-center gap-2 text-[#074E34] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#28664A]" />
                  Enterprise Privacy Standards
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A] shrink-0" />
                    <span>AES-256 encryption at rest, TLS 1.3 in transit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A] shrink-0" />
                    <span>Contractual zero public model training guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A] shrink-0" />
                    <span>Isolated multi-tenant architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

