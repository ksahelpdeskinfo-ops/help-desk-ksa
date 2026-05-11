"use client";

import { 
  Plane, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, Globe, FileText, Smartphone, AlertTriangle
} from "lucide-react";
import { useState } from "react";

export default function AirportTravelRulesPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Plane size={16} /> Travel Compliance
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Airport Travel Rules in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Essential guide to travel regulations for residents and expatriates, covering visas, documentation, and biometric requirements.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Core Rules Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <ShieldCheck className="text-blue-500" /> Essential Travel Documents
              </h2>
              <p className="text-slate-600  leading-relaxed mb-6">
                All residents departing from or arriving in Saudi Arabia must ensure their legal documents are valid and updated in the government systems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-blue-50  rounded-xl border border-blue-100">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-1">Exit-Reentry</span>
                    <p className="text-sm font-bold">Mandatory for Expats</p>
                    <p className="text-[10px] text-slate-500">Check via Absher</p>
                 </div>
                 <div className="p-4 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Identity</span>
                    <p className="text-sm font-bold">Passport + Iqama</p>
                    <p className="text-[10px] text-slate-500">Min 6 months validity</p>
                 </div>
              </div>
            </div>
            <div className="bg-blue-50/50  p-6 rounded-2xl border border-blue-100 w-full md:w-72">
              <h3 className="font-bold text-blue-700 mb-4 text-center">Key Rules</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-blue-500"/> Valid Exit-Reentry Visa</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-blue-500"/> No unpaid traffic fines</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-blue-500"/> Biometric verification</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-blue-500"/> Baggage compliance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Customs & Security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
                 <AlertTriangle className="text-orange-500" /> Customs Regulations
              </h3>
              <ul className="space-y-4 text-sm text-slate-600">
                 <li className="flex gap-3"><div className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">!</div> Declaration required for cash/gold above SAR 60,000.</li>
                 <li className="flex gap-3"><div className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">!</div> Strictly prohibited items (alcohol, pork products, etc.).</li>
                 <li className="flex gap-3"><div className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">!</div> Prescription medications require official medical reports.</li>
              </ul>
           </div>
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
                 <Smartphone className="text-blue-500" /> Digital Integration
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">Ensure these apps are active and updated on your smartphone before reaching the airport:</p>
              <div className="space-y-3">
                 <div className="p-3 bg-slate-50  rounded-lg flex items-center justify-between">
                    <span className="text-xs font-bold">Absher</span>
                    <span className="text-[10px] text-slate-400">Visa Status</span>
                 </div>
                 <div className="p-3 bg-slate-50  rounded-lg flex items-center justify-between">
                    <span className="text-xs font-bold">Tawakkalna</span>
                    <span className="text-[10px] text-slate-400">Digital ID</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Official Reference */}
        <div className="text-center py-12 border-t border-slate-200 ">
          <h3 className="text-xl font-bold mb-6">Official Aviation Authority</h3>
          <a href="https://gaca.gov.sa" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#006C35] text-white rounded-xl font-bold shadow-lg shadow-[#006C35]/20 hover:scale-105 transition-transform">
             <Landmark size={18} /> Visit GACA Portal
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Do I need a physical Iqama card for travel?" answer="While the physical card is good to have, the digital Iqama on the Absher or Tawakkalna app is officially recognized at all Saudi airports. However, carry the physical card for international check-ins." />
            <FAQItem question="What is the fine for an expired Exit-Reentry?" answer="If you are outside the Kingdom and your visa expires, you cannot re-enter without a new visa. Fines for overstaying while inside the Kingdom start from SAR 1,000." />
            <FAQItem question="Can I travel if I have a pending labor dispute?" answer="A pending labor dispute might result in a travel ban. You must check your status on Absher to ensure there are no 'Stop Travel' orders before heading to the airport." />
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
        {isOpen ? <ChevronUp size={18} className="text-[#006C35]" /> : <ChevronDown size={18} className="text-slate-400" />}
      </button>
      {isOpen && <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{answer}</div>}
    </div>
  );
}
