import React from "react";
import { Link2, UserCheck, ShieldCheck, DatabaseZap } from "lucide-react";

export function SecurityPillars() {
  return (
    <section id="security" className="py-16 md:py-24 border-t border-[#E7E5DE] bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-3xl flex flex-col gap-3 mb-12">
          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[40px] font-medium text-[#1A1C19] tracking-[-0.025em] leading-[1.2]">
            Your security answers should be grounded in your own evidence.
          </h2>
          <p className="font-sans text-[16px] sm:text-[17px] text-[#566155] leading-relaxed">
            Security Review Ready is engineered to help your team work from existing documentation,
            keep sources visible, and review suggested responses before sharing them with enterprise buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Principle 1 */}
          <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] flex gap-4 shadow-[0_1px_3px_rgba(32,34,31,0.02)]">
            <div className="w-9 h-9 rounded bg-[#DAE6D6] shrink-0 flex items-center justify-center text-[#28664A] mt-0.5">
              <Link2 className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-sans text-[16px] font-semibold text-[#1A1C19] mb-1.5">
                Source-backed responses
              </h3>
              <p className="font-sans text-[14px] text-[#566155] leading-relaxed">
                Every suggested statement links back directly to a verified excerpt in your
                company&apos;s approved documents. If documentation is missing, the system alerts you
                rather than fabricating claims.
              </p>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] flex gap-4 shadow-[0_1px_3px_rgba(32,34,31,0.02)]">
            <div className="w-9 h-9 rounded bg-[#DAE6D6] shrink-0 flex items-center justify-center text-[#28664A] mt-0.5">
              <UserCheck className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-sans text-[16px] font-semibold text-[#1A1C19] mb-1.5">
                Human review by default
              </h3>
              <p className="font-sans text-[14px] text-[#566155] leading-relaxed">
                Suggested responses remain drafts until authorized team members review and approve
                them. You maintain complete control over what is communicated to enterprise buyers.
              </p>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] flex gap-4 shadow-[0_1px_3px_rgba(32,34,31,0.02)]">
            <div className="w-9 h-9 rounded bg-[#DAE6D6] shrink-0 flex items-center justify-center text-[#28664A] mt-0.5">
              <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-sans text-[16px] font-semibold text-[#1A1C19] mb-1.5">
                Controlled tenant isolation
              </h3>
              <p className="font-sans text-[14px] text-[#566155] leading-relaxed">
                Granular workspace permissions, AES-256 encryption at rest, TLS 1.3 in transit, and
                strict multi-tenant database isolation ensure your sensitive audits stay private.
              </p>
            </div>
          </div>

          {/* Principle 4 */}
          <div className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E7E5DE] flex gap-4 shadow-[0_1px_3px_rgba(32,34,31,0.02)]">
            <div className="w-9 h-9 rounded bg-[#DAE6D6] shrink-0 flex items-center justify-center text-[#28664A] mt-0.5">
              <DatabaseZap className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-sans text-[16px] font-semibold text-[#1A1C19] mb-1.5">
                Zero public model training
              </h3>
              <p className="font-sans text-[14px] text-[#566155] leading-relaxed">
                Your company policies, architecture diagrams, and security certifications are
                strictly never used to train public or foundational third-party AI models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
