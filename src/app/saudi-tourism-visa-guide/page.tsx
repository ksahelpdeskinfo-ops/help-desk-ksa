"use client";

import { 
  Globe, Compass, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, Plane, FileText, Smartphone, DollarSign, MapPin
} from "lucide-react";
import { useState } from "react";

export default function SaudiTourismVisaPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Globe size={16} /> Visit Saudi
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Saudi Arabia Tourism Visa Guide
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Complete overview of the Saudi tourist visa system, including eVisa eligibility, visa on arrival, and Umrah visitor rules.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Visa Types Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <Compass className="text-blue-500" /> Tourism Visa Categories
              </h2>
              <p className="text-slate-600  leading-relaxed mb-6">
                Saudi Arabia offers multiple entry pathways for tourists, making it easier than ever to explore the Kingdom's heritage and modern attractions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-blue-50  rounded-xl border border-blue-100">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-1">Tourist eVisa</span>
                    <p className="text-sm font-bold">Online Application</p>
                    <p className="text-[10px] text-slate-500">Fast approval in minutes</p>
                 </div>
                 <div className="p-4 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Visa on Arrival</span>
                    <p className="text-sm font-bold">At the Airport</p>
                    <p className="text-[10px] text-slate-500">For eligible countries</p>
                 </div>
              </div>
            </div>
            <div className="bg-blue-50/50  p-6 rounded-2xl border border-blue-100 w-full md:w-72">
              <h3 className="font-bold text-blue-700 mb-4 text-center">Visa Validity</h3>
              <ul className="space-y-4">
                <li className="text-center">
                   <p className="text-2xl font-black text-blue-600">1 Year</p>
                   <p className="text-[10px] uppercase font-bold text-slate-500">Multiple Entry</p>
                </li>
                <li className="text-center pt-4 border-t border-blue-100">
                   <p className="text-2xl font-black text-blue-600">90 Days</p>
                   <p className="text-[10px] uppercase font-bold text-slate-500">Stay Per Visit</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Requirements & Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="p-8 bg-white  rounded-3xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><FileText className="text-blue-500"/> Requirements</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Valid passport (min 6 months).</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Minimum age 18 (unaccompanied).</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Health insurance (included in fee).</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Return flight and accommodation.</li>
              </ul>
           </div>
           <div className="p-8 bg-[#006C35]/5 rounded-3xl border border-[#006C35]/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#006C35]"><MapPin size={20}/> Umrah Category</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">Tourist visa holders are permitted to perform Umrah. However, a separate Umrah visa is often used for specific religious groups and during peak seasons.</p>
              <div className="p-4 bg-white rounded-xl border border-[#006C35]/20">
                 <span className="text-[10px] font-black text-[#006C35] uppercase block mb-1">Permitted Activities</span>
                 <p className="text-xs font-bold">Tourism, Leisure, Umrah (outside Hajj season)</p>
              </div>
           </div>
        </div>

        {/* Official Resource */}
        <div className="text-center py-12 border-t border-slate-200 ">
          <h3 className="text-xl font-bold mb-6">Official eVisa Portal</h3>
          <a href="https://visa.visitsaudi.com" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#006C35] text-white rounded-xl font-bold shadow-lg shadow-[#006C35]/20 hover:scale-105 transition-transform">
             <Globe size={18} /> Apply for Saudi eVisa
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Can I work on a tourist visa?" answer="No, working on a tourist visa is strictly prohibited. You must have a valid work permit and a local sponsor to work legally in Saudi Arabia." />
            <FAQItem question="How long does approval take?" answer="Most eVisas are approved within 5 to 30 minutes. If your application requires manual review, it may take up to 48 hours." />
            <FAQItem question="Is health insurance mandatory?" answer="Yes, health insurance is mandatory for all tourists and is typically included in the total cost of the eVisa fee." />
          </div>
        </div>

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
        {isOpen ? <ChevronUp size={18} className="text-blue-600" /> : <ChevronDown size={18} className="text-slate-400" />}
      </button>
      {isOpen && <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{answer}</div>}
    </div>
  );
}
