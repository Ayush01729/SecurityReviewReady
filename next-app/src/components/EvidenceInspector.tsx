"use client";

import React, { useState } from "react";
import {
  Shield,
  FileCheck2,
  CheckCircle2,
  Search,
  Check,
  Edit3,
  ExternalLink,
  BookOpen,
} from "lucide-react";

interface QuestionItem {
  id: string;
  code: string;
  question: string;
  sourceFile: string;
  sourceSection: string;
  sourceQuote: string;
  matchScore: string;
  draftAnswer: string;
  status: "verified" | "review_ready" | "searching" | "queued";
}

const QUESTIONS: QuestionItem[] = [
  {
    id: "q1",
    code: "REQ-042",
    question: "Is customer data encrypted at rest?",
    sourceFile: "Security & Encryption Policy v2.4.pdf",
    sourceSection: "Section 4.2: Data Encryption & Key Management",
    sourceQuote:
      "All persistent datastores containing tenant or PII data are provisioned with AES-256 block-level encryption managed via AWS KMS with annual automatic key rotation.",
    matchScore: "98% match",
    draftAnswer:
      "Yes. Customer data is encrypted at rest using AES-256 with key management via AWS KMS, per Section 4.2 of our verified Security Policy. Encryption keys are rotated automatically on an annual basis with strict multi-party access authorization.",
    status: "verified",
  },
  {
    id: "q2",
    code: "REQ-043",
    question: "How is access to production systems controlled?",
    sourceFile: "Access Control & Infrastructure Handbook.md",
    sourceSection: "Section 3.1: Principle of Least Privilege and MFA",
    sourceQuote:
      "Production cluster access is strictly restricted to authorized SRE personnel via hardware-backed WebAuthn/FIDO2 keys through an ephemeral zero-trust bastion with automated 8-hour credential revocation.",
    matchScore: "99% match",
    draftAnswer:
      "Production access is restricted to designated SREs using hardware-backed MFA (WebAuthn/FIDO2). Bastion sessions are ephemeral with automated 8-hour credential expiration and audited session recordings.",
    status: "review_ready",
  },
  {
    id: "q3",
    code: "REQ-044",
    question: "Do you maintain an incident response policy?",
    sourceFile: "SOC 2 Type II Audit Report 2024.pdf",
    sourceSection: "Control CC7.3: Incident Management & Escalation",
    sourceQuote:
      "The organization tests its incident response plan annually. Security incidents trigger severity triage with a target 15-minute response SLA for critical findings.",
    matchScore: "96% match",
    draftAnswer:
      "Yes. We maintain a documented Incident Response Policy audited under SOC 2 CC7.3. The policy includes annual simulated tabletops, 24/7 on-call rotations, and guaranteed 15-minute response SLA for P0/P1 incidents.",
    status: "review_ready",
  },
  {
    id: "q4",
    code: "REQ-045",
    question: "How often are backups performed and tested?",
    sourceFile: "Disaster Recovery & Business Continuity Plan.pdf",
    sourceSection: "Section 6.4: RPO/RTO & Automated Snapshot Testing",
    sourceQuote:
      "Databases undergo automated continuous point-in-time snapshots to immutable AWS S3 buckets across dual regions with quarterly automated restore validation tests.",
    matchScore: "94% match",
    draftAnswer:
      "Automated continuous point-in-time snapshots are performed with an RPO of < 5 minutes and RTO of < 2 hours. Snapshot restores are programmatically validated on a quarterly schedule.",
    status: "queued",
  },
];

export function EvidenceInspector() {
  const [activeQId, setActiveQId] = useState<string>("q1");
  const [questions, setQuestions] = useState<QuestionItem[]>(QUESTIONS);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedAnswer, setEditedAnswer] = useState<string>("");

  const activeQuestion = questions.find((q) => q.id === activeQId) || questions[0];

  const handleSelectQuestion = (q: QuestionItem) => {
    setActiveQId(q.id);
    setIsEditing(false);
    setEditedAnswer(q.draftAnswer);
  };

  const handleApprove = () => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === activeQId ? { ...q, status: "verified" } : q))
    );
  };

  const handleSaveEdit = () => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === activeQId ? { ...q, draftAnswer: editedAnswer } : q))
    );
    setIsEditing(false);
  };

  return (
    <section id="inspector" className="py-12 md:py-16">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Mockup Window Card */}
        <div className="rounded-lg bg-white border border-[#E7E5DE] shadow-sm overflow-hidden">
          {/* Top Window Bar */}
          <div className="h-11 bg-[#F4F4EF] border-b border-[#E7E5DE] px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2E3DE]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2E3DE]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2E3DE]"></span>
              </div>
              <div className="h-4 w-px bg-[#E2E3DE] mx-1"></div>
              <div className="flex items-center gap-1.5 text-[#566155] text-[12px]">
                <Shield className="w-3.5 h-3.5 text-[#28664A]" />
                <span className="text-[#1A1C19] font-medium">
                  Verified Evidence & Human Approval Inspector
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-[#696B66] hidden sm:inline">
                Single Click Verification
              </span>
              <span className="px-2 py-0.5 rounded bg-[#DAE6D6] text-[#1A4C35] font-sans text-[11px] font-medium">
                Live Workspace
              </span>
            </div>
          </div>

          {/* 2-Panel Split Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
            {/* Left Panel: Questionnaire Requirements */}
            <div className="lg:col-span-5 bg-[#FAF9F6] border-b lg:border-b-0 lg:border-r border-[#E7E5DE] flex flex-col">
              <div className="p-3.5 border-b border-[#E7E5DE] flex items-center justify-between bg-[#F4F4EF]/50">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] text-[#1A1C19] font-medium">
                    Vendor Assessment
                  </span>
                  <span className="text-[#696B66] font-mono text-[11px]">
                    (CAIQ v4 & Custom RFP)
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#28664A]">4 loaded</span>
              </div>

              {/* Question list items */}
              <div className="p-3 flex flex-col gap-2 flex-grow overflow-y-auto">
                {questions.map((q) => {
                  const isSelected = q.id === activeQId;
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleSelectQuestion(q)}
                      className={`w-full text-left p-3.5 rounded border transition-all cursor-pointer ${
                        isSelected
                          ? "border-[#28664A] bg-white shadow-sm ring-1 ring-[#28664A]/10"
                          : "border-[#E7E5DE] bg-[#F4F4EF]/60 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="font-mono text-[11px] text-[#696B66]">{q.code}</span>
                        {q.status === "verified" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#DAE6D6] text-[#1A4C35] text-[11px] font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#28664A]"></span>
                            Verified
                          </span>
                        ) : q.status === "review_ready" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#EEEEE9] text-[#1A4C35] text-[11px] font-medium">
                            Ready for review
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#EEEEE9] text-[#696B66] text-[11px]">
                            In queue
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-[13.5px] font-medium text-[#1A1C19] leading-snug">
                        {q.question}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-[#696B66] text-[11.5px]">
                        <BookOpen className="w-3.5 h-3.5 text-[#28664A]" />
                        <span className="truncate">{q.sourceFile}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Panel: Suggested Response & Grounded Evidence */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Panel Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-[#E7E5DE]">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#DAE6D6] text-[#1A4C35] rounded font-mono text-[11px] font-semibold">
                      Suggested Response
                    </span>
                    <span className="text-[#696B66] font-mono text-[11px]">
                      Grounded in approved company docs
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#074E34] text-[12px] font-medium">
                    <FileCheck2 className="w-4 h-4 text-[#28664A]" />
                    <span>Evidence linked</span>
                  </div>
                </div>

                {/* Target Question Echo */}
                <div>
                  <div className="font-mono text-[11px] text-[#696B66] uppercase tracking-wider">
                    {activeQuestion.code} Target Question
                  </div>
                  <h3 className="font-sans text-[17px] font-semibold text-[#1A1C19] mt-1">
                    {activeQuestion.question}
                  </h3>
                </div>

                {/* Draft Answer Box */}
                <div className="p-3.5 rounded bg-[#F4F4EF] border border-[#E7E5DE] relative">
                  <span className="absolute top-2 right-2.5 font-mono text-[10px] text-[#696B66] uppercase">
                    {activeQuestion.status === "verified" ? "Approved" : "Draft"}
                  </span>
                  {isEditing ? (
                    <div>
                      <textarea
                        value={editedAnswer}
                        onChange={(e) => setEditedAnswer(e.target.value)}
                        className="w-full h-24 p-2 text-[13.5px] leading-relaxed bg-white border border-[#28664A] rounded text-[#1A1C19] focus:outline-none"
                      />
                      <div className="flex justify-end gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-2.5 py-1 text-[12px] text-[#566155] hover:text-[#1A1C19]"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveEdit}
                          className="px-3 py-1 bg-[#28664A] text-white text-[12px] rounded font-medium"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="font-sans text-[13.5px] text-[#1A1C19] leading-relaxed pr-8">
                      {activeQuestion.draftAnswer}
                    </p>
                  )}
                </div>

                {/* Verbatim Source Evidence Citation Card */}
                <div className="p-3.5 rounded border border-[#E7E5DE] bg-[#FAF9F6] flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#28664A]" />
                      <span className="font-sans text-[13px] font-semibold text-[#1A1C19]">
                        {activeQuestion.sourceFile}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#1A4C35] bg-[#DAE6D6] px-2 py-0.5 rounded">
                      {activeQuestion.matchScore}
                    </span>
                  </div>
                  <div className="text-[#566155] text-[12.5px] pl-6">
                    <span className="font-medium text-[#1A1C19]">
                      {activeQuestion.sourceSection}
                    </span>{" "}
                    — &ldquo;{activeQuestion.sourceQuote}&rdquo;
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-3 border-t border-[#E7E5DE] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setEditedAnswer(activeQuestion.draftAnswer);
                      setIsEditing(!isEditing);
                    }}
                    className="h-8 px-3 rounded border border-[#E7E5DE] bg-white text-[#566155] hover:text-[#1A1C19] hover:bg-[#F4F4EF] text-[12.5px] font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    {isEditing ? "Close editor" : "Edit answer"}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        `Source Document Viewer: Opening ${activeQuestion.sourceFile}\n\n${activeQuestion.sourceSection}\n"${activeQuestion.sourceQuote}"`
                      )
                    }
                    className="h-8 px-3 rounded border border-[#E7E5DE] bg-white text-[#566155] hover:text-[#1A1C19] hover:bg-[#F4F4EF] text-[12.5px] font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Review original doc
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleApprove}
                  className={`h-8 px-4 rounded text-white text-[12.5px] font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeQuestion.status === "verified"
                      ? "bg-[#1B4D36] border-[#074E34] opacity-90"
                      : "bg-[#28664A] hover:bg-[#1B4D36] border-[#1B4D36]"
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>
                    {activeQuestion.status === "verified" ? "Answer Approved" : "Approve Answer"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
