"use client";

import { 
  FileText, ShieldCheck, AlertTriangle, Globe, 
  Search, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Building2, UserCheck, RefreshCw, PlaneTakeoff
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function WorkPermitsVisasGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the validity of a Saudi work permit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Work permits are typically issued for one year and must be renewed annually by the employer. Validity is linked to the worker's residency permit (Iqama)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I renew my work permit if I have traffic fines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, all government dues, including traffic violations and municipal fines, must be cleared before an Iqama or work permit can be renewed."
        }
      }
    ]
  };

  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-6">
            <Globe size={16} /> Official Visa & Permit Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Work Permits & Visas in Saudi Arabia: Official Guide
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Everything you need to know about work permit issuance, Iqama renewals, and Saudi visa regulations for expatriates.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#006C35]" /> Saudi Work Permit System
              </h2>
              <p className="text-slate-600  leading-relaxed mb-4">
                Understanding the <strong>work permit Saudi Arabia</strong> requirements is essential for every expatriate. A work permit is the primary legal authorization tied to your <strong>Iqama renewal online</strong> and digital employment contract.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50  p-3 rounded-lg border border-slate-200 ">
                  <span className="text-xs font-bold text-slate-400 uppercase">Linked To</span>
                  <p className="text-sm font-semibold">Iqama & Contract</p>
                </div>
                <div className="bg-slate-50  p-3 rounded-lg border border-slate-200 ">
                  <span className="text-xs font-bold text-slate-400 uppercase">Mandatory</span>
                  <p className="text-sm font-semibold">For All Expats</p>
                </div>
              </div>
            </div>
            <div className="bg-[#006C35]/5 p-6 rounded-2xl border border-[#006C35]/10 w-full md:w-64">
              <h3 className="font-bold text-slate-900  mb-4 text-center">Visa Categories</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> Work Visa
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> Iqama
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> Exit Re-Entry
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> Final Exit
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4">
            <FAQItem 
              question="What is the validity of a Saudi work permit?" 
              answer="Work permits are typically issued for one year and must be renewed annually by the employer. Validity is linked to the worker's residency permit (Iqama)."
            />
            <FAQItem 
              question="Can I renew my work permit if I have traffic fines?" 
              answer="No, all government dues, including traffic violations and municipal fines, must be cleared before an Iqama or work permit can be renewed."
            />
            <FAQItem 
              question="How can I check my work permit status online?" 
              answer="You can check your status through the Qiwa platform or the Ministry of Human Resources (MHRSD) official portal using your Iqama number."
            />
            <FAQItem 
              question="Is a profession change allowed on a work permit?" 
              answer="Yes, profession changes are allowed but require employer approval and must be updated in the labor office records through the Qiwa portal."
            />
          </div>
        </div>

        {/* Related Guides */}
        <div className="mb-12 border-t border-slate-200  pt-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 text-center">Explore Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RelatedLink href="/iqama-renewal-guide" title="Iqama Renewal Guide" desc="Step-by-step renewal process." />
            <RelatedLink href="/exit-reentry-visa-saudi" title="Exit Re-Entry Visa" desc="Check travel eligibility." />
            <RelatedLink href="/sponsor-transfer-status-saudi" title="Sponsor Transfer" desc="Track your Qiwa request." />
          </div>
        </div>

        {/* Processes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Issuance */}
          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <UserCheck className="text-blue-500" /> Issuance Process
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100  text-blue-600 flex items-center justify-center text-xs font-bold">1</div>
                <p className="text-sm text-slate-600 ">Job offer approved by employer & labor office</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100  text-blue-600 flex items-center justify-center text-xs font-bold">2</div>
                <p className="text-sm text-slate-600 ">Worker enters KSA on Work Visa</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100  text-blue-600 flex items-center justify-center text-xs font-bold">3</div>
                <p className="text-sm text-slate-600 ">Medical test & Biometrics completed</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100  text-blue-600 flex items-center justify-center text-xs font-bold">4</div>
                <p className="text-sm text-slate-600 ">Iqama & Work Permit issued digitally</p>
              </div>
            </div>
          </div>

          {/* Renewal */}
          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <RefreshCw className="text-[#006C35]" /> Renewal Rules
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-slate-600 ">
                <CheckCircle2 size={16} className="text-[#006C35]" /> Valid employment contract
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600 ">
                <CheckCircle2 size={16} className="text-[#006C35]" /> Updated health insurance
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600 ">
                <CheckCircle2 size={16} className="text-[#006C35]" /> Payment of government fees
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600 ">
                <CheckCircle2 size={16} className="text-[#006C35]" /> No legal violations or fines
              </li>
            </ul>
            <div className="bg-orange-50  p-4 rounded-lg border border-orange-100 ">
              <p className="text-xs text-orange-700  font-medium">
                Failure to renew on time may result in penalties or work suspension.
              </p>
            </div>
          </div>
        </div>

        {/* Profession Change & Exit Re-Entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Profession Change */}
          <div className="bg-[#006C35]/5 p-8 rounded-2xl border border-[#006C35]/10">
            <h3 className="text-xl font-bold text-slate-900  mb-4">Profession Change</h3>
            <p className="text-sm text-slate-600  mb-6">Allows updating your job title in official records when role changes or during transfer.</p>
            <div className="space-y-4">
              <div className="bg-white  p-4 rounded-xl shadow-sm border border-slate-200 ">
                <span className="text-xs font-bold text-[#006C35] uppercase mb-1 block">Process</span>
                <p className="text-sm text-slate-600 ">Employer submits request + Upload Qualification + Labor system approval.</p>
              </div>
              <p className="text-xs text-red-500 font-medium italic">
                *Profession must match actual work activity to avoid legal issues.
              </p>
            </div>
          </div>

          {/* Exit Re-Entry */}
          <div className="bg-blue-50/50  p-8 rounded-2xl border border-blue-100 ">
            <h3 className="text-xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <PlaneTakeoff className="text-blue-600" /> Exit & Re-Entry
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white  p-3 rounded-lg text-center">
                <span className="text-sm font-bold text-blue-600 block">Single</span>
                <span className="text-xs text-slate-400">One Trip</span>
              </div>
              <div className="bg-white  p-3 rounded-lg text-center">
                <span className="text-sm font-bold text-blue-600 block">Multiple</span>
                <span className="text-xs text-slate-400">Unlimited Trips</span>
              </div>
            </div>
            <ul className="text-xs space-y-2 text-slate-600 ">
              <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-500"/> Valid Iqama required</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-500"/> No unpaid traffic fines</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-500"/> Employer approval (most cases)</li>
            </ul>
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Common Issues & Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <IssueCard title="Delayed Issuance" solution="Verify records & follow up through portal" />
            <IssueCard title="Renewal Failure" solution="Clear all dues & check insurance status" />
            <IssueCard title="Profession Mismatch" solution="Request title correction via employer" />
            <IssueCard title="Exit Visa Block" solution="Resolve pending violations or disputes" />
          </div>
        </div>

        {/* Digital Platforms */}
        <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm text-center mb-12">
          <h3 className="text-xl font-bold text-slate-900  mb-4">Official Digital Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-slate-100  rounded-full text-sm font-medium">Qiwa (Labor Services)</span>
            <span className="px-4 py-2 bg-slate-100  rounded-full text-sm font-medium">Absher (Visa & Identity)</span>
            <span className="px-4 py-2 bg-slate-100  rounded-full text-sm font-medium">Muqeem (Corporate Portal)</span>
          </div>
        </div>

      </div>
    </div>
  );
}

function IssueCard({ title, solution }: { title: string; solution: string }) {
  return (
    <div className="bg-white  p-5 rounded-xl border border-slate-200  shadow-sm">
      <h4 className="font-bold text-slate-900  text-sm mb-2 flex items-center gap-2">
        <AlertTriangle size={14} className="text-orange-500" /> {title}
      </h4>
      <p className="text-xs text-slate-600 ">{solution}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white  border border-slate-200  rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50  transition-colors"
      >
        <span className="font-bold text-slate-900 ">{question}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-slate-600  text-sm leading-relaxed border-t border-slate-100  pt-4">
          {answer}
        </div>
      )}
    </div>
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
