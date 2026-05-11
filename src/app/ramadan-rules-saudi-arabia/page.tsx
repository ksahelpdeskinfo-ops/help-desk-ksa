"use client";

import { 
  Moon, Clock, UtensilsCrossed, Briefcase, Info, CheckCircle2, ChevronDown, ChevronUp, Landmark, ShieldCheck
} from "lucide-react";
import { useState } from "react";

export default function RamadanRulesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the Ramadan working hours for Muslims in Saudi Arabia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Saudi labor law, Muslim employees work a maximum of 6 hours per day or 36 hours per week during Ramadan."
        }
      },
      {
        "@type": "Question",
        "name": "Can non-Muslims eat in public during Ramadan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eating, drinking, or smoking in public during fasting hours is restricted in many areas. Most restaurants remain closed until sunset (Maghrib)."
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Moon size={16} /> Ramadan Guidelines
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Ramadan Rules & Labor Law in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Official guide to fasting regulations, reduced work hours, business operations, and public behavior during the holy month.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Working Hours Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <Briefcase className="text-blue-500" /> Reduced Working Hours
              </h2>
              <p className="text-slate-600  leading-relaxed mb-6">
                Ramadan significantly changes daily life in Saudi Arabia. Government offices and businesses follow adjusted schedules to accommodate fasting periods.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-blue-50  rounded-xl border border-blue-100">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-1">Muslim Employees</span>
                    <p className="text-lg font-black">6 Hours Daily</p>
                    <p className="text-xs text-slate-500">Max 36 hours per week</p>
                 </div>
                 <div className="p-4 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Non-Muslims</span>
                    <p className="text-lg font-black">Varies by Employer</p>
                    <p className="text-xs text-slate-500">Often also reduced</p>
                 </div>
              </div>
            </div>
            <div className="bg-orange-50/50  p-6 rounded-2xl border border-orange-100 w-full md:w-72">
              <h3 className="font-bold text-orange-700 mb-4 text-center">Labor Rights</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={12} className="text-orange-500" /> Full salary rights maintained
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={12} className="text-orange-500" /> Overtime protections apply
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={12} className="text-orange-500" /> Weekly rest days guaranteed
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Public Behavior & Restaurants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <UtensilsCrossed className="text-red-500" /> Public Behavior
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">!</div>
                <p className="text-sm text-slate-600">Eating publicly may be restricted in many areas during fasting hours.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">!</div>
                <p className="text-sm text-slate-600">Most restaurants remain closed until Maghrib (sunset).</p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">!</div>
                <p className="text-sm text-slate-600">Respect for fasting culture and silence during prayer times is expected.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <Clock className="text-purple-500" /> Business Changes
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-slate-50  rounded-xl">
                <span className="text-sm font-bold">Office Hours</span>
                <span className="text-xs text-slate-500">Typically 10 AM - 3 PM</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50  rounded-xl">
                <span className="text-sm font-bold">Shopping</span>
                <span className="text-xs text-slate-500">Late night (until 2 AM)</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50  rounded-xl">
                <span className="text-sm font-bold">Restaurants</span>
                <span className="text-xs text-slate-500">Open after Iftar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Holy Cities Section */}
        <div className="bg-white border border-slate-200 text-slate-900 p-10 rounded-[2.5rem] mb-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
           <h3 className="text-2xl font-black mb-6 flex items-center gap-2"><Landmark className="text-orange-400"/> Ramadan in Makkah & Madinah</h3>
           <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed">The holy cities become extremely crowded during Ramadan. Be prepared for heavy traffic, packed mosques, and high transportation demand.</p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                 <span className="text-[10px] uppercase font-black text-orange-400 block mb-1">Crowds</span>
                 <span className="text-xs font-bold">Peak Levels</span>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                 <span className="text-[10px] uppercase font-black text-orange-400 block mb-1">Hotels</span>
                 <span className="text-xs font-bold">Early Booking</span>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                 <span className="text-[10px] uppercase font-black text-orange-400 block mb-1">Prayer</span>
                 <span className="text-xs font-bold">Taraweeh</span>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                 <span className="text-[10px] uppercase font-black text-orange-400 block mb-1">Transport</span>
                 <span className="text-xs font-bold">Haramain Train</span>
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Are non-Muslims required to fast?" answer="No, but they are expected to show respect for those fasting by avoiding public eating and drinking during daylight hours." />
            <FAQItem question="When does the school day start?" answer="School timings are typically delayed by 1-2 hours and sessions are shortened during Ramadan." />
            <FAQItem question="Is overtime paid during Ramadan?" answer="Yes, if an employee works beyond the reduced 6-hour limit, they are entitled to overtime pay as per labor law." />
          </div>
        </div>

        {/* Official Resources */}
        <div className="text-center py-12 border-t border-slate-200 ">
          <h3 className="text-xl font-bold mb-6">Official Labor Information</h3>
          <a href="https://www.hrsd.gov.sa" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#006C35] text-white rounded-xl font-bold shadow-lg shadow-[#006C35]/20 hover:scale-105 transition-transform">
             <ShieldCheck size={18} /> Visit MHRSD Portal
          </a>
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
        {isOpen ? <ChevronUp size={18} className="text-[#006C35]" /> : <ChevronDown size={18} className="text-slate-400" />}
      </button>
      {isOpen && <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{answer}</div>}
    </div>
  );
}
