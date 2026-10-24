"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  Globe,
  Lock,
  Cloud,
  History,
  Cpu,
  CheckCircle2,
  Play,
  RotateCw,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

interface SourceDoc {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof FileText;
  status: string;
}

interface VendorQueue {
  id: string;
  name: string;
  sampleQuestion: string;
  sampleAnswer: string;
  total: number;
  completed: number;
  percent: number;
  status: string;
}

const INITIAL_DOCS: SourceDoc[] = [
  {
    id: "soc2",
    title: "SOC 2 Type II Report 2024.pdf",
    subtitle: "Schellman & Co. · 84 pages indexed",
    icon: FileText,
    status: "streaming",
  },
  {
    id: "trust",
    title: "trust.yourdomain.com",
    subtitle: "Live Trust URL · 99.98% uptime, subprocessors",
    icon: Globe,
    status: "live sync",
  },
  {
    id: "policy",
    title: "Security & Encryption Policy v2.4",
    subtitle: "Sec 4.2: AES-256 KMS Key Rotation",
    icon: Lock,
    status: "parsed",
  },
  {
    id: "infra",
    title: "AWS Terraform & VPC Architecture",
    subtitle: "Git repo sync · TLS 1.3, Ephemeral bastion",
    icon: Cloud,
    status: "indexed",
  },
  {
    id: "past",
    title: "Enterprise Past Reviews (200+ Qs)",
    subtitle: "Verified vendor responses & legal notes",
    icon: History,
    status: "aligned",
  },
];

const INITIAL_VENDORS: VendorQueue[] = [
  {
    id: "acme",
    name: "Acme Corp Enterprise RFP",
    sampleQuestion: "Is customer data encrypted at rest?",
    sampleAnswer: "Yes, AES-256 via KMS [Verified § 4.2]",
    total: 140,
    completed: 129,
    percent: 92,
    status: "Review ready",
  },
  {
    id: "fintech",
    name: "FinTech Partner Review",
    sampleQuestion: "Are penetration tests performed annually?",
    sampleAnswer: "Yes, by Bishop Fox [Cited § 2.8]",
    total: 45,
    completed: 38,
    percent: 84,
    status: "Streaming",
  },
  {
    id: "health",
    name: "HealthTech HIPAA Assessment",
    sampleQuestion: "Audit logs retention period?",
    sampleAnswer: "365 days immutable S3 [Source linked]",
    total: 80,
    completed: 62,
    percent: 78,
    status: "Streaming",
  },
  {
    id: "bank",
    name: "Global Bank CAIQ v4.0",
    sampleQuestion: "Multi-factor authentication mandatory?",
    sampleAnswer: "Enforced via FIDO2 WebAuthn",
    total: 180,
    completed: 117,
    percent: 65,
    status: "Streaming",
  },
];

const TELEMETRY_POOL = [
  "[SOC 2 p.48] → Matched to Acme Corp REQ-42",
  "Verifying AES-256 KMS key rotation policy against REQ-108",
  "Parallel dispatching to 4 active buyer queues",
  "[Trust URL] Extracted 99.98% uptime SLA citation",
  "Matching HIPAA Audit Log standard to Policy Sec 8.1",
  "Global Bank CAIQ REQ-114 drafted with 99.4% confidence",
  "[Git Infra] Verified TLS 1.3 enforcement on API ingress",
  "Zero ungrounded assertions detected across 442 verified items",
];

export function EnginePipelineVisual() {
  const [activeDocId, setActiveDocId] = useState<string>("soc2");
  const [vendors, setVendors] = useState<VendorQueue[]>(INITIAL_VENDORS);
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([
    "[SOC 2 p.48] → Matched to Acme Corp REQ-42",
    "Verifying AES-256 KMS key rotation policy...",
    "Parallel dispatching to 4 vendor queues",
  ]);
  const [pulseCount, setPulseCount] = useState<number>(0);
  const [latency, setLatency] = useState<string>("0.12s");

  const triggerPulse = () => {
    setPulseCount((prev) => prev + 1);
    const randomLatency = (0.08 + Math.random() * 0.08).toFixed(2);
    setLatency(`${randomLatency}s`);

    // Pick random telemetry log
    const randomLog = TELEMETRY_POOL[Math.floor(Math.random() * TELEMETRY_POOL.length)];
    setTelemetryLogs((prev) => [randomLog, prev[0], prev[1]]);

    // Increment vendor percentages
    setVendors((prev) =>
      prev.map((v) => {
        if (v.percent >= 98) return v;
        const newPct = Math.min(99, v.percent + Math.floor(Math.random() * 3) + 1);
        const newCompleted = Math.round((newPct / 100) * v.total);
        return {
          ...v,
          percent: newPct,
          completed: newCompleted,
          status: newPct >= 95 ? "Review ready" : "Streaming",
        };
      })
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      triggerPulse();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="parallel-pipeline"
      className="rounded-xl bg-white border border-[#E7E5DE] shadow-[0_1px_3px_rgba(32,34,31,0.04)] overflow-hidden"
    >
      {/* Top Telemetry Ribbon */}
      <div className="h-11 bg-[#F4F4EF] border-b border-[#E7E5DE] px-4 sm:px-6 flex items-center justify-between flex-wrap gap-2 text-[12px]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E3DE] animate-pulse delay-100"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E3DE] animate-pulse" ></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E3DE] animate-pulse delay-200"></span>
          </div>
          {/* <div className="h-4 w-px bg-[#E2E3DE] mx-1"></div> */}
          <div className="flex items-center gap-2 font-mono text-[#566155] ">
            {/* <span className="inline-block w-2 h-2 rounded-full bg-[#28664A] animate-pulse"></span> */}
            {/* <span className="text-[#1A1C19] font-medium">pipeline: parallel_v4</span> */}
            {/* <span className="text-[#696B66] hidden sm:inline">
              · 5 sources active · 4 questionnaires filling in parallel
            </span> */}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 font-mono text-[#566155]">
            {/* <span>Throughput:</span> */}
            {/* <span className="text-[#074E34] font-medium font-mono">48 answers/min</span> */}
          </div>
          {/* <span className="px-2 py-0.5 rounded bg-[#DAE6D6] text-[#1A4C35] font-sans font-medium text-[11px] flex items-center gap-1">
            Parallel Active
          </span> */}
        </div>
      </div>

      {/* Main 3-Column Interactive Pipeline */}
      <div className="relative p-5 sm:p-7 lg:p-8 bg-[#FAF9F6]/40">
        {/* SVG Stream Lines behind columns on large screens */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0"
          preserveAspectRatio="none"
          viewBox="0 0 1200 500"
        >
          <defs>
            <linearGradient id="streamInGrad" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#bfc9c1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#28664a" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="streamOutGrad" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#28664a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#33644b" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          {/* Left into Center Engine */}
          <path
            className="stream-line-in"
            d="M 330 80 C 440 80, 480 230, 560 245"
            fill="none"
            stroke="url(#streamInGrad)"
            strokeWidth="2"
          />
          <path
            className="stream-line-in"
            d="M 330 155 C 440 155, 480 240, 560 250"
            fill="none"
            stroke="url(#streamInGrad)"
            strokeWidth="2"
          />
          <path
            className="stream-line-in"
            d="M 330 240 C 430 240, 490 250, 560 255"
            fill="none"
            stroke="url(#streamInGrad)"
            strokeWidth="2.5"
          />
          <path
            className="stream-line-in"
            d="M 330 325 C 440 325, 480 260, 560 260"
            fill="none"
            stroke="url(#streamInGrad)"
            strokeWidth="2"
          />
          <path
            className="stream-line-in"
            d="M 330 405 C 440 405, 480 275, 560 265"
            fill="none"
            stroke="url(#streamInGrad)"
            strokeWidth="2"
          />
          {/* Center Engine into Right Column */}
          <path
            className="stream-line-out"
            d="M 640 245 C 720 230, 750 85, 870 85"
            fill="none"
            stroke="url(#streamOutGrad)"
            strokeWidth="2.5"
          />
          <path
            className="stream-line-out"
            d="M 640 250 C 720 245, 750 185, 870 185"
            fill="none"
            stroke="url(#streamOutGrad)"
            strokeWidth="2"
          />
          <path
            className="stream-line-out"
            d="M 640 260 C 720 265, 750 295, 870 295"
            fill="none"
            stroke="url(#streamOutGrad)"
            strokeWidth="2.5"
          />
          <path
            className="stream-line-out"
            d="M 640 265 C 720 280, 750 400, 870 400"
            fill="none"
            stroke="url(#streamOutGrad)"
            strokeWidth="2"
          />
        </svg>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* COLUMN 1: MULTI-SOURCE INGESTION */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DE]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#28664A]"></span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#566155] font-semibold">
                  Multi-Source Ingestion
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#074E34] bg-[#DAE6D6] px-2 py-0.5 rounded">
                Continuous Sync
              </span>
            </div>

            <div className="space-y-2 flex-grow flex flex-col justify-between">
              {INITIAL_DOCS.map((doc) => {
                const IconComponent = doc.icon;
                const isSelected = activeDocId === doc.id;
                return (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => {
                      setActiveDocId(doc.id);
                      triggerPulse();
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-all duration-200 cursor-pointer ${isSelected
                      ? "bg-white border-[#28664A] shadow-sm ring-1 ring-[#28664A]/10"
                      : "bg-white border-[#E7E5DE] hover:border-[#28664A]/60"
                      }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded bg-[#DAE6D6] flex items-center justify-center text-[#28664A] shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-sans text-[13px] font-medium text-[#1A1C19] leading-tight">
                            {doc.title}
                          </div>
                          <div className="font-mono text-[11px] text-[#696B66] mt-0.5">
                            {doc.subtitle}
                          </div>
                        </div>
                      </div>
                      <span className="shrink-0 font-mono text-[11px] text-[#074E34] bg-[#F4F4EF] px-1.5 py-0.5 rounded">
                        {doc.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-2.5 rounded bg-[#F4F4EF] border border-[#E7E5DE] text-[#566155] font-mono text-[11px] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A]" />5 connected knowledge silos
              </span>
              <span className="text-[#1A1C19] font-medium">Embedding active</span>
            </div>
          </div>

          {/* Mobile Vertical Flow Conduit: Ingestion -> Center Engine */}
          <div className="lg:hidden flex justify-center items-center py-1 -my-2 select-none">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
              <line x1="4" y1="0" x2="4" y2="28" stroke="#E2E3DE" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="12" y1="0" x2="12" y2="28" stroke="#28664A" strokeWidth="2" strokeDasharray="4 4" className="stream-line-in" />
              <line x1="20" y1="0" x2="20" y2="28" stroke="#E2E3DE" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* COLUMN 2: EVIDENCE MATCHING ENGINE */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center py-4 lg:py-0">
            <div className="w-full h-full rounded-xl border border-[#28664A]/30 bg-[#F4F4EF] p-5 flex flex-col justify-between relative shadow-md overflow-hidden">
              {/* Radar Background animation */}
              <div className="absolute -inset-10 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-64 h-64 rounded-full border border-dashed border-[#28664A] radar-ring"></div>
                <div className="absolute w-48 h-48 rounded-full border border-[#28664A]/40 engine-pulse"></div>
              </div>

              {/* Engine Status Top */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#E7E5DE] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28664A]"></span>
                  <span className="font-mono text-[11px] uppercase font-semibold text-[#1A1C19] tracking-wider">
                    Evidence Matching Engine
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#1A4C35] bg-[#DAE6D6] px-2 py-0.5 rounded">
                  Grounded AI
                </span>
              </div>

              {/* Engine Center Graphic */}
              <div className="relative z-10 my-4 flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-2xl bg-white border-2 border-[#28664A] shadow-md flex items-center justify-center mb-2.5">
                  <div className="absolute inset-1.5 rounded-xl bg-[#DAE6D6]/50 engine-pulse"></div>
                  <div className="w-10 h-10 rounded-xl bg-[#28664A] text-white flex items-center justify-center shadow-inner relative z-10">
                    <Cpu className="w-5 h-5 text-white animate-spin" style={{ animationDuration: "20s" }} />
                  </div>
                  <span className="absolute -top-2 -right-2 px-1.5 py-0.2 rounded-full bg-[#074E34] text-white font-mono text-[9px]">
                    Active
                  </span>
                </div>
                <div className="font-sans text-[16px] font-semibold text-[#1A1C19]">
                  Grounding & Citation Core
                </div>
                <p className="font-sans text-[12.5px] text-[#566155] mt-1 max-w-[260px] leading-relaxed">
                  Deconstructs incoming requirements, matches exact policy sentences, and outputs citations in parallel.
                </p>
              </div>

              {/* Live Telemetry Log */}
              <div className="relative z-10 bg-white border border-[#E7E5DE] rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between text-[#566155] font-mono text-[11px] border-b border-[#E7E5DE] pb-1.5">
                  <span className="flex items-center gap-1.5 text-[#1A1C19] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28664A]"></span>
                    Telemetry Feed
                  </span>
                  <span className="text-[#1A4C35]">{latency} latency</span>
                </div>
                <div className="space-y-1 font-mono text-[11px] text-[#566155] leading-snug">
                  {telemetryLogs.map((log, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 truncate">
                      <span className="text-[#28664A] shrink-0">✓</span>
                      <span className="truncate">{log}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engine Footer */}
              <div className="relative z-10 mt-3 pt-2.5 border-t border-[#E7E5DE] flex items-center justify-between text-[11px]">
                {/* <span className="font-sans text-[#566155]">Zero hallucinations</span> */}
                {/* <span className="font-mono text-[#074E34] font-semibold">100% cited sources</span> */}
              </div>
            </div>
          </div>

          {/* Mobile Vertical Flow Conduit: Center Engine -> Parallel Buyer Queues */}
          <div className="lg:hidden flex justify-center items-center py-1 -my-2 select-none">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
              <line x1="4" y1="0" x2="4" y2="28" stroke="#E2E3DE" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="12" y1="0" x2="12" y2="28" stroke="#28664A" strokeWidth="2" strokeDasharray="4 4" className="stream-line-out" />
              <line x1="20" y1="0" x2="20" y2="28" stroke="#E2E3DE" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* COLUMN 3: PARALLEL QUESTIONNAIRE QUEUES */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E7E5DE]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#28664A]"></span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#566155] font-semibold">
                  Parallel Buyer Queues
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#074E34] bg-[#DAE6D6] px-2 py-0.5 rounded">
                Simultaneous
              </span>
            </div>

            <div className="space-y-2.5 flex-grow flex flex-col justify-between">
              {vendors.map((v) => (
                <div
                  key={v.id}
                  className="p-3 rounded-lg border border-[#E7E5DE] bg-white shadow-sm hover:border-[#28664A]/80 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#28664A]"></span>
                      <span className="font-sans text-[13px] font-semibold text-[#1A1C19]">
                        {v.name}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#1A4C35] font-medium">
                      {v.percent}% filled
                    </span>
                  </div>
                  <p className="font-sans text-[12px] text-[#566155] mb-2 truncate">
                    &ldquo;{v.sampleQuestion}&rdquo; →{" "}
                    <span className="text-[#074E34] font-medium">{v.sampleAnswer}</span>
                  </p>
                  <div className="w-full bg-[#EEEEE9] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#28664A] h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${v.percent}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-[#696B66] font-mono text-[10.5px]">
                    <span>
                      {v.completed} of {v.total} questions
                    </span>
                    <span className="text-[#1A4C35] flex items-center gap-1">
                      {v.status === "Review ready" ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-[#28664A]" /> Review ready
                        </>
                      ) : (
                        <>
                          <RotateCw className="w-3 h-3 text-[#28664A] animate-spin" /> Filling now
                        </>
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-2.5 rounded bg-[#F4F4EF] border border-[#E7E5DE] text-[#566155] font-mono text-[11px] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#28664A]" />4 parallel buyer pipelines
              </span>
              <span className="text-[#074E34] font-semibold">0 duplicate work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Action Bar */}
      <div className="p-4 bg-[#F4F4EF] border-t border-[#E7E5DE] flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-[13px] text-[#1A1C19]">
          <span className="font-semibold text-[#074E34]">Simultaneous Multi-Vendor Dispatch:</span>
          <span className="text-[#566155]">
            Ingest once from your real company docs. When multiple enterprise buyers send questionnaires at once, all queues fill concurrently.
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {/* <button
            type="button"
            onClick={triggerPulse}
            className="h-[34px] px-3.5 rounded border border-[#E7E5DE] bg-white hover:bg-[#EEEEE9] text-[#1A1C19] text-[12.5px] font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 text-[#28664A] fill-[#28664A]" />
            Simulate Ingestion Pulse
          </button> */}
          <a
            href="#early-access"
            className="h-[34px] px-3.5 rounded bg-[#28664A] hover:bg-[#1B4D36] text-white text-[12.5px] font-medium border border-[#1B4D36] transition-colors flex items-center gap-1"
          >
            Start Trial
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div >
  );
}
