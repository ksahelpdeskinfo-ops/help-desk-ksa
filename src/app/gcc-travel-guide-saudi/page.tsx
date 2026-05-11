"use client";

import { 
  Globe, Compass, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, Plane, MapPin, ShieldCheck, Globe2
} from "lucide-react";
import { useState } from "react";

export default function GCCTravelGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Globe2 size={16} /> Regional Mobility
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            GCC Travel Guide for Saudi Residents
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Essential guide to travel between Gulf Cooperation Council countries, covering visa rules, resident mobility, and documentation.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* GCC Countries Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <h2 className="text-2xl font-bold text-slate-900  mb-8 text-center">The Gulf Cooperation Council (GCC)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
             <CountryBadge name="Saudi Arabia" />
             <CountryBadge name="UAE" />
             <CountryBadge name="Qatar" />
             <CountryBadge name="Kuwait" />
             <CountryBadge name="Bahrain" />
             <CountryBadge name="Oman" />
          </div>
        </div>

        {/* Travel Notes & Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="p-8 bg-white  rounded-3xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><ShieldCheck className="text-[#006C35]"/> Key Travel Notes</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                 <li className="flex gap-3"><div className="w-5 h-5 rounded-full bg-[#006C35]/10 text-[#006C35] flex items-center justify-center shrink-0 mt-0.5">!</div> Visa rules depend on your nationality and profession.</li>
                 <li className="flex gap-3"><div className="w-5 h-5 rounded-full bg-[#006C35]/10 text-[#006C35] flex items-center justify-center shrink-0 mt-0.5">!</div> Expatriate residents usually need an eVisa for other GCC states.</li>
                 <li className="flex gap-3"><div className="w-5 h-5 rounded-full bg-[#006C35]/10 text-[#006C35] flex items-center justify-center shrink-0 mt-0.5">!</div> Passport validity must be at least 6 months.</li>
              </ul>
           </div>
           <div className="p-8 bg-blue-50/50  rounded-3xl border border-blue-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-600"><Plane size={20}/> Border Mobility</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">Traveling by land or air within the GCC is streamlined for citizens, while residents must follow specific entry protocols for each member state.</p>
              <div className="p-4 bg-white rounded-xl border border-blue-100">
                 <span className="text-[10px] font-black text-blue-600 uppercase block mb-1">Checklist</span>
                 <p className="text-xs font-bold">Passport, Resident ID, Exit-Reentry Visa, Destination eVisa.</p>
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Can Saudi residents enter UAE visa-free?" answer="No, most expatriate residents in Saudi Arabia need to apply for a GCC Resident eVisa before traveling to the UAE. Some professions may have easier approval processes." />
            <FAQItem question="Is a physical Iqama card required for GCC travel?" answer="Yes, it is highly recommended to carry your physical Iqama card when traveling between GCC countries for immigration verification." />
            <FAQItem question="How long can a resident stay in another GCC country?" answer="Typically, GCC resident eVisas allow a stay of up to 30 days, but this depends on the specific country's regulations and the type of visa issued." />
          </div>
        </div>

      </div>
    </div>
  );
}

function CountryBadge({ name }: { name: string }) {
  return (
    <div className="p-4 bg-slate-50  rounded-2xl border border-slate-100 text-center shadow-sm">
       <span className="text-[10px] font-black uppercase text-slate-400 block mb-1">GCC State</span>
       <span className="text-xs font-bold">{name}</span>
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
