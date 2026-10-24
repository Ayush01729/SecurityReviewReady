import React from "react";
import { Check, Shield, FileSpreadsheet, Sparkles } from "lucide-react";

interface FrameworkItem {
  name: string;
  category: string;
  sourceDoc: string;
  typicalCoverage: string;
  formats: string[];
}

const FRAMEWORKS: FrameworkItem[] = [
  {
    name: "SOC 2 Type II",
    category: "Trust Services Criteria",
    sourceDoc: "Annual CPA Audit Reports (Schellman, A-LIGN, etc.)",
    typicalCoverage: "98% auto-matched",
    formats: ["PDF", "Section mapping", "Trust Center"],
  },
  {
    name: "CAIQ v4.0.2",
    category: "Cloud Security Alliance",
    sourceDoc: "Cloud Infrastructure, KMS, Terraform & IAM configs",
    typicalCoverage: "96% auto-matched",
    formats: ["Excel (.xlsx)", "CSV", "Portal"],
  },
  {
    name: "ISO/IEC 27001:2022",
    category: "Information Security ISMS",
    sourceDoc: "Annex A controls, ISMS statements of applicability",
    typicalCoverage: "97% auto-matched",
    formats: ["PDF certs", "Notion", "Markdown"],
  },
  {
    name: "HIPAA Security Rule",
    category: "Healthcare Compliance",
    sourceDoc: "BAAs, encryption at rest policies, audit log specs",
    typicalCoverage: "95% auto-matched",
    formats: ["PDF", "Spreadsheet", "Vendor portal"],
  },
  {
    name: "SIG Core / SIG Lite",
    category: "Standardized Information Gathering",
    sourceDoc: "Company security policies, DR/BC plans, vendor assessments",
    typicalCoverage: "94% auto-matched",
    formats: ["Excel macro sheets", "CSV"],
  },
  {
    name: "Custom Enterprise RFPs",
    category: "Ad-hoc Buyer Spreadsheets",
    sourceDoc: "Consolidated knowledge base + prior verified answers",
    typicalCoverage: "92% auto-matched",
    formats: [".xlsx", ".csv", "Google Sheets"],
  },
];

export function FrameworkMatrix() {
  return (
    <section className="py-16 md:py-24 border-t border-[#E7E5DE] bg-[#FAF9F6]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-3xl flex flex-col gap-3 mb-12">
          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[40px] font-medium text-[#1A1C19] tracking-[-0.025em] leading-[1.2]">
            Universal framework & questionnaire coverage.
          </h2>
          <p className="font-sans text-[16px] sm:text-[17px] text-[#566155] leading-relaxed">
            Whether your prospective enterprise buyer uses industry standards or their own 180-row
            custom vendor questionnaire, our engine maps and extracts relevant evidence.
          </p>
        </div>

        {/* Tabular Matrix */}
        <div className="rounded-lg border border-[#E7E5DE] bg-white overflow-hidden shadow-[0_1px_3px_rgba(32,34,31,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E7E5DE] bg-[#F4F4EF] text-[12px] font-mono text-[#566155]">
                  <th className="py-3 px-5 font-semibold">Framework / Standard</th>
                  <th className="py-3 px-5 font-semibold">Classification</th>
                  <th className="py-3 px-5 font-semibold">Primary Grounding Evidence</th>
                  <th className="py-3 px-5 font-semibold">Typical Coverage</th>
                  <th className="py-3 px-5 font-semibold">Export Formats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7E5DE] text-[13px]">
                {FRAMEWORKS.map((f, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="py-3.5 px-5 font-medium text-[#1A1C19] flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-[#28664A]" />
                      <span>{f.name}</span>
                    </td>
                    <td className="py-3.5 px-5 text-[#566155] font-sans">{f.category}</td>
                    <td className="py-3.5 px-5 text-[#566155] font-sans">{f.sourceDoc}</td>
                    <td className="py-3.5 px-5 font-mono text-[12px] text-[#074E34] font-medium">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#DAE6D6]/70">
                        <Check className="w-3 h-3 text-[#28664A]" />
                        {f.typicalCoverage}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-[#696B66] font-mono text-[11.5px]">
                      {f.formats.join(" · ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-3.5 bg-[#F4F4EF] border-t border-[#E7E5DE] flex flex-wrap items-center justify-between text-[12px] text-[#566155] px-5">
            <span className="flex items-center gap-1.5">
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#28664A]" />
              Support for raw Excel formulas, multi-tab workbooks, and custom vendor portal copy-paste.
            </span>
            <span className="font-mono text-[#074E34] font-medium">Automated re-indexing on file upload</span>
          </div>
        </div>
      </div>
    </section>
  );
}
