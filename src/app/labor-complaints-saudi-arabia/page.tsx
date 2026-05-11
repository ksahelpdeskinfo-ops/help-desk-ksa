"use client";

import { 
  ShieldCheck, FileText, AlertCircle, Clock, CheckCircle2, 
  HelpCircle, Building, Users, Scale, ExternalLink, ChevronDown, ChevronUp
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ComplaintGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <AlertCircle size={16} /> Official Resolution Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            File Labor Complaint Saudi Arabia: Official Process
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Step-by-step guide on how to <strong>file labor complaint Saudi Arabia</strong> for salary delays, contract violations, and worker rights protection.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-10 relative z-10">
          <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
            <Scale className="text-[#006C35]" /> Salary Delay Complaint Saudi
          </h2>
          <p className="text-slate-600  leading-relaxed mb-4">
            If you are facing workplace disputes, understanding your <strong>worker rights KSA</strong> is the first step. Saudi labor regulations provide a robust <strong>salary delay complaint Saudi</strong> system to ensure every worker receives their dues on time.
          </p>
          <p className="text-slate-600  leading-relaxed">
            Whether it is a private-sector contract or a domestic worker agreement, the Ministry of Human Resources (MHRSD) handles all disputes through the Friendly Settlement and Labor Court systems.
          </p>
        </div>

        {/* Related Guides */}
        <div className="mb-12 border-t border-slate-200  pt-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 text-center">Explore Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RelatedLink href="/worker-rights-saudi-law" title="Worker Rights" desc="Legal protections for all." />
            <RelatedLink href="/end-of-service-saudi-calculator" title="EOSB Calculator" desc="Calculate your settlement." />
            <RelatedLink href="/sponsor-transfer-status-saudi" title="Sponsor Transfer" desc="Track your Qiwa request." />
          </div>
        </div>

        {/* Common Reasons */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Common Reasons Employees File Labor Complaints</h2>
          <p className="text-slate-600  mb-6">Labor complaints usually arise when an employee believes their legal or contractual rights have been violated.</p>
          
          <div className="space-y-6">
            <ContentCard title="Salary Delays or Non-Payment" icon={<Clock className="text-orange-500"/>}>
              <p className="mb-3">One of the most common labor violations involves delayed salaries or unpaid wages. Employees have the right to receive salaries according to the agreed payment schedule stated in the contract.</p>
              <ul className="list-disc ml-5 space-y-1 text-slate-600 ">
                <li>Monthly salary delays</li>
                <li>Partial salary payments</li>
                <li>Unauthorized deductions</li>
                <li>Unpaid overtime</li>
                <li>Non-payment after resignation or termination</li>
              </ul>
            </ContentCard>

            <ContentCard title="Contract Violations" icon={<FileText className="text-blue-500"/>}>
              <p className="mb-3">Employment contracts define the responsibilities and rights of both parties. Complaints may occur when employers fail to follow agreed terms.</p>
              <ul className="list-disc ml-5 space-y-1 text-slate-600 ">
                <li>Changing salary without agreement</li>
                <li>Assigning different job roles unfairly</li>
                <li>Violating contract duration terms</li>
                <li>Failure to renew contracts properly</li>
                <li>Illegal probation extensions</li>
              </ul>
            </ContentCard>

            <ContentCard title="Unfair Termination" icon={<AlertCircle className="text-red-500"/>}>
              <p className="mb-3">Employees may challenge dismissals they believe are unfair or unlawful.</p>
              <ul className="list-disc ml-5 space-y-1 text-slate-600 ">
                <li>Termination without valid reason or notice period</li>
                <li>Denial of end-of-service benefits</li>
                <li>Retaliation after filing complaints</li>
                <li>Forced resignation pressure</li>
              </ul>
            </ContentCard>
          </div>
        </div>

        {/* Steps to File */}
        <div className="mb-12 bg-[#006C35]/5 rounded-2xl p-8 border border-[#006C35]/10">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 text-center">Steps to File a Labor Complaint</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#006C35] text-white flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900  mb-2">Attempt Internal Resolution</h3>
                <p className="text-slate-600 ">Before escalating the issue officially, attempt to resolve the matter internally by speaking with the manager, contacting HR, or sending formal written requests. Keep all communication documented.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#006C35] text-white flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900  mb-2">Gather Supporting Documents</h3>
                <p className="text-slate-600 ">Strong documentation significantly improves the complaint process. Prepare copies of your employment contract, Iqama, salary slips, bank statements, warning letters, and any email or WhatsApp communications.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#006C35] text-white flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900  mb-2">Submit Online via Official Platforms</h3>
                <p className="text-slate-600 ">Log into the labor service platform (MHRSD), select labor complaint services, enter details, upload supporting documents, and submit the complaint. You can also call the Unified Labor Support Number (19911).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dispute Resolution Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Labor Dispute Resolution Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-50  text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={24} />
              </div>
              <h3 className="font-bold text-slate-900  mb-2">1. Initial Review</h3>
              <p className="text-sm text-slate-600 ">Authorities review the complaint details, supporting evidence, and contract information.</p>
            </div>
            <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-50  text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-slate-900  mb-2">2. Mediation Stage</h3>
              <p className="text-sm text-slate-600 ">Both parties are contacted to explore settlement opportunities and negotiate solutions without legal procedures.</p>
            </div>
            <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm text-center">
              <div className="w-12 h-12 bg-red-50  text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale size={24} />
              </div>
              <h3 className="font-bold text-slate-900  mb-2">3. Legal Escalation</h3>
              <p className="text-sm text-slate-600 ">If mediation fails, the case proceeds to formal legal review where authorities issue a final decision based on evidence.</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Can expatriate workers file labor complaints?" answer="Yes. Foreign workers employed legally in Saudi Arabia can file complaints regarding labor violations." />
            <FaqItem question="Can salary complaints be filed online?" answer="Yes. Many salary and contract disputes can be submitted electronically through official labor systems." />
            <FaqItem question="What if the employer refuses to respond?" answer="Authorities may continue reviewing the complaint and take further legal action if necessary." />
            <FaqItem question="Is legal representation required?" answer="Not always. However, complex cases may benefit from professional legal guidance." />
            <FaqItem question="Are end-of-service benefits protected?" answer="Employees may still be entitled to end-of-service benefits depending on labor regulations and contract terms." />
          </div>
        </div>

        {/* References */}
        <div className="bg-slate-100  p-8 rounded-2xl mb-12">
          <h2 className="text-xl font-bold text-slate-900  mb-6">Official Saudi Labor References</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RefLink title="Reporting Violations" url="https://www.hrsd.gov.sa/en/node/1155111" />
            <RefLink title="Friendly Settlement Service" url="https://www.hrsd.gov.sa/en/ministry-services/services/269970" />
            <RefLink title="Complaints & Reports Portal" url="https://www.hrsd.gov.sa/hi/node/1083147" />
            <RefLink title="Saudi Labor Law Official" url="https://prod.hrsd.gov.sa/en/knowledge-centre" />
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200  text-center">
            <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">Unified Labor Support Number: <span className="text-slate-900  text-lg ml-2">19911</span></span>
          </div>
        </div>

      </div>
    </div>
  );
}

function ContentCard({ title, icon, children }: { title: string, icon: any, children: React.ReactNode }) {
  return (
    <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm flex gap-4">
      <div className="shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="font-bold text-lg text-slate-900  mb-2">{title}</h3>
        <div className="text-slate-600  text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white  border border-slate-200  rounded-xl overflow-hidden shadow-sm">
      <button 
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50  transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-900  pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-slate-400 shrink-0" size={20} /> : <ChevronDown className="text-slate-400 shrink-0" size={20} />}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-1 text-sm text-slate-600  leading-relaxed border-t border-slate-100  mt-1">
          {answer}
        </div>
      )}
    </div>
  );
}

function RefLink({ title, url }: { title: string, url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white  rounded-lg border border-slate-200  hover:border-[#006C35] hover:shadow-sm transition-all group">
      <span className="font-semibold text-slate-700  group-hover:text-[#006C35] transition-colors">{title}</span>
      <ExternalLink size={16} className="text-slate-400 group-hover:text-[#006C35]" />
    </a>
  );
}

function RelatedLink({ href, title, desc }: { href: string, title: string, desc: string }) {
  return (
    <Link href={href} className="bg-white  p-5 rounded-xl border border-slate-200  hover:border-[#006C35] transition-colors group">
      <h4 className="font-bold text-slate-900  mb-1 group-hover:text-[#006C35]">{title}</h4>
      <p className="text-xs text-slate-500">{desc}</p>
    </Link>
  );
}
