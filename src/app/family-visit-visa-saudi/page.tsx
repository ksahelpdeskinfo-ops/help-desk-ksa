"use client";

import { 
  Users, ShieldCheck, Globe, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, PhoneCall, FileText, DollarSign
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function FamilyVisitVisaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long can a family visit visa be extended?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visa validity varies, but single-entry visas can often be extended for up to 90 or 180 days in total, subject to Ministry of Interior approval and insurance renewal."
        }
      },
      {
        "@type": "Question",
        "name": "Can I apply for a family visit visa for my siblings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The family visit visa is primarily for first-degree relatives (parents, spouse, children). Approval for siblings is more restrictive and depends on current government policies."
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Users size={16} /> Family Visit Visa
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Family Visit Visa Guide – Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Bringing family members to Saudi Arabia on temporary visit visas. Learn about eligibility, requirements, and the application process.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#006C35]" /> Temporary Family Stay
              </h2>
              <p className="text-slate-600  leading-relaxed mb-4">
                A Family Visit Visa allowing expatriates to invite close relatives (parents, spouse, children) for a temporary stay in the Kingdom.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-3 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Stay Duration</span>
                    <p className="text-xs font-bold">30 – 90 Days (Extendable)</p>
                 </div>
                 <div className="p-3 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Invitees</span>
                    <p className="text-xs font-bold">First-Degree Relatives</p>
                 </div>
              </div>
            </div>
            <div className="bg-blue-50/50  p-6 rounded-2xl border border-blue-100 w-full md:w-72">
              <h3 className="font-bold text-blue-700 mb-4 text-center">Eligibility</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-blue-500"/> Valid Iqama holder</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-blue-500"/> Profession eligibility</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-blue-500"/> Sponsoring relative</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Requirements & Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <FileText className="text-blue-500" /> Required Documents
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600 ">
                <div className="shrink-0 w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mt-0.5">✓</div>
                <span>Passport copies of visitors</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 ">
                <div className="shrink-0 w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mt-0.5">✓</div>
                <span>Proof of relationship (Marriage/Birth certificates)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 ">
                <div className="shrink-0 w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mt-0.5">✓</div>
                <span>Iqama copy of the sponsor</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 ">
                <div className="shrink-0 w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mt-0.5">✓</div>
                <span>Employer approval (Chamber of Commerce)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6">Application Process</h3>
            <div className="space-y-4">
              <ProcessStep num={1} title="Online Request" desc="Submit request via official visa portal (MOFA)." />
              <ProcessStep num={2} title="Pay Visa Fees" desc="Complete payment through Enjaz or portal." />
              <ProcessStep num={3} title="Official Approval" desc="Request is reviewed by Saudi authorities." />
              <ProcessStep num={4} title="e-Visa Issued" desc="The visa is issued electronically for printing." />
            </div>
          </div>
        </div>

        {/* Important Rules */}
        <div className="bg-orange-50  border border-orange-100  rounded-3xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4 text-orange-600">
            <Info size={24} />
            <h3 className="text-xl font-bold">Important Stay Rules</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-2 text-sm text-orange-700 ">
              <li>• Must exit before expiry unless extended via Absher</li>
              <li>• Valid health insurance is mandatory for duration of stay</li>
              <li>• Overstaying results in heavy fines and deportation</li>
              <li>• Visit visa holders are not allowed to work</li>
            </ul>
            <div className="bg-white/50  p-4 rounded-xl border border-orange-100">
               <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Pro Tip:</p>
               <p className="text-sm font-medium">Always extend your visa at least 3 days before it expires to avoid system glitches and penalties.</p>
            </div>
          </div>
        </div>

        {/* Official Links */}
        <div className="text-center py-12 border-t border-slate-200 ">
          <h3 className="text-xl font-bold mb-6">Official Visa Services</h3>
          <a href="https://visa.mofa.gov.sa" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#006C35] text-white rounded-xl font-bold shadow-lg shadow-[#006C35]/20 hover:scale-105 transition-transform">
             <Globe size={18} /> Saudi Visa Services Portal
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Can I change a visit visa to an Iqama?" answer="Generally, a visit visa cannot be converted directly to a residence permit (Iqama). The person must exit and re-enter on a permanent visa." />
            <FAQItem question="Is there a salary limit for visit visas?" answer="While there isn't a strict salary limit for visits, your profession on the Iqama must be eligible to sponsor visitors." />
            <FAQItem question="Do I need to visit the embassy?" answer="For most countries, the process is entirely online through the MOFA portal and local Enjaz centers." />
          </div>
        </div>

      </div>
    </div>
  );
}

function ProcessStep({ num, title, desc }: { num: number, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500 text-slate-900 flex items-center justify-center text-[10px] font-black">{num}</div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 ">{title}</h4>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>
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
