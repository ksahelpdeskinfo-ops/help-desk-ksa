"use client";

import { 
  Users, ShieldCheck, Landmark, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Globe, FileText, DollarSign, Briefcase
} from "lucide-react";
import { useState } from "react";

export default function PermanentFamilyVisaPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-6">
            <Users size={16} /> Dependent Visa
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Permanent Family Visa Guide (Dependent Residency)
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Step-by-step guide for expatriates sponsoring family members for long-term residency in Saudi Arabia.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Sponsorship Info */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <Briefcase className="text-blue-500" /> Who Can Sponsor?
              </h2>
              <p className="text-slate-600  leading-relaxed mb-6">
                Expatriates working in professional or technical job categories can sponsor their immediate family for a permanent residence permit (Iqama).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-blue-50  rounded-xl border border-blue-100">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-1">Eligible Sponsors</span>
                    <p className="text-sm font-bold">Male Professionals</p>
                    <p className="text-[10px] text-slate-500">Some females (conditions apply)</p>
                 </div>
                 <div className="p-4 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Dependents</span>
                    <p className="text-sm font-bold">Wife & Children</p>
                    <p className="text-[10px] text-slate-500">Parents (restricted cases)</p>
                 </div>
              </div>
            </div>
            <div className="bg-[#006C35]/5 p-6 rounded-2xl border border-[#006C35]/10 w-full md:w-72">
              <h3 className="font-bold text-[#006C35] mb-4 text-center">Core Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-[#006C35]"/> Valid sponsor Iqama</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-[#006C35]"/> Minimum salary threshold</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-[#006C35]"/> Suitable housing proof</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-[#006C35]"/> Approved job category</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Process Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <StepCard num={1} title="Apply Online" desc="Submit request through official platform." />
             <StepCard num={2} title="Upload Docs" desc="Submit marriage/birth certs & contracts." />
             <StepCard num={3} title="Pay Fees" desc="Pay dependent residency fees via bank." />
             <StepCard num={4} title="Medical Insurance" desc="Register dependents in health system." />
          </div>
        </div>

        {/* Dependent Fees Info */}
        <div className="bg-orange-50  border border-orange-100  p-8 rounded-3xl mb-12">
           <div className="flex items-center gap-3 mb-4 text-orange-600">
              <DollarSign size={24} />
              <h3 className="text-xl font-bold">Dependent Fees & Costs</h3>
           </div>
           <p className="text-sm text-slate-600  mb-6 leading-relaxed">
             Saudi Arabia charges a <strong>monthly dependent fee</strong> for every family member under your sponsorship. This must be paid in full during the Iqama issuance or renewal process.
           </p>
           <div className="p-4 bg-white  rounded-xl border border-orange-100 text-center shadow-sm">
              <span className="text-xs font-bold text-slate-400 block mb-1 uppercase tracking-widest">Current Rate</span>
              <span className="text-2xl font-black text-orange-600">SAR 400 / Month / Dependent</span>
              <p className="text-[10px] text-slate-500 mt-2 italic">* Total cost = SAR 4,800 per year per family member.</p>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Can I sponsor my parents for a permanent visa?" answer="Sponsoring parents for permanent residency is highly restricted and usually requires special approval from the Ministry of Interior, often reserved for unique humanitarian or professional cases." />
            <FAQItem question="Is there a minimum salary to sponsor a family?" answer="Yes, the threshold varies but typically ranges between SAR 5,000 to SAR 10,000 depending on the profession and current regulations." />
            <FAQItem question="Can my wife work on a dependent visa?" answer="No, dependents cannot work legally without transferring their sponsorship to an employer or obtaining a separate work permit." />
          </div>
        </div>

      </div>
    </div>
  );
}

function StepCard({ num, title, desc }: { num: number, title: string, desc: string }) {
  return (
    <div className="p-6 bg-white  rounded-2xl border border-slate-200  shadow-sm text-center group">
       <div className="w-8 h-8 bg-slate-100  rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black text-slate-400 group-hover:bg-[#006C35] group-hover:text-slate-900 transition-colors">{num}</div>
       <h4 className="font-bold text-sm mb-1">{title}</h4>
       <p className="text-[10px] text-slate-500">{desc}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white  border border-slate-200  rounded-xl overflow-hidden shadow-sm">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors">
        <span className="font-bold text-sm">{question}</span>
        {isOpen ? <ChevronUp size={18} className="text-[#006C35]" /> : <ChevronDown size={18} className="text-slate-400" />}
      </button>
      {isOpen && <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{answer}</div>}
    </div>
  );
}
