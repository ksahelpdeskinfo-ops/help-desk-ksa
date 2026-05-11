"use client";

import { 
  Heart, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, PhoneCall, FileText, Syringe, GraduationCap
} from "lucide-react";
import { useState } from "react";

export default function VaccinationRulesPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Syringe size={16} /> Health Compliance
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Child Vaccination Rules in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Mandatory vaccination requirements for children entering schools and the residency system in the Kingdom.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Why Vaccination? */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <ShieldCheck className="text-red-500" /> Public Health Safety
              </h2>
              <p className="text-slate-600  leading-relaxed mb-6">
                Saudi Arabia enforces strict vaccination compliance for all residents. These records are mandatory for <strong>school admission</strong>, <strong>Iqama issuance</strong>, and general public health safety.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Required For</span>
                    <p className="text-xs font-bold">School & Residency</p>
                 </div>
                 <div className="p-4 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Compliance</span>
                    <p className="text-xs font-bold">Health Ministry Rules</p>
                 </div>
              </div>
            </div>
            <div className="bg-red-50/50  p-6 rounded-2xl border border-red-100 w-full md:w-72">
              <h3 className="font-bold text-red-700 mb-4 text-center">Mandatory Vaccines</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-red-500"/> Polio (OPV/IPV)</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-red-500"/> MMR (Measles, Mumps, Rubella)</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-red-500"/> Hepatitis B</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-red-500"/> Diphtheria & Tetanus</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Documentation & Sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
                 <FileText className="text-blue-500" /> Proof Required
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">Parents must maintain an updated vaccination card or digital health record.</p>
              <div className="space-y-3">
                 <div className="p-3 bg-slate-50  rounded-lg flex items-center justify-between">
                    <span className="text-xs font-bold">Physical Card</span>
                    <span className="text-[10px] text-slate-400">Vaccination Card</span>
                 </div>
                 <div className="p-3 bg-slate-50  rounded-lg flex items-center justify-between">
                    <span className="text-xs font-bold">Digital Record</span>
                    <span className="text-[10px] text-slate-400">Sehaty / Tawakkalna</span>
                 </div>
              </div>
           </div>
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
                 <Building2 className="text-[#006C35]" /> Where to Get Vaccinated
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                 <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#006C35] rounded-full"></div> Government Hospitals (Primary Health)</li>
                 <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#006C35] rounded-full"></div> Licensed Private Clinics</li>
                 <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#006C35] rounded-full"></div> School-linked health centers</li>
              </ul>
           </div>
        </div>

        {/* Official Resource */}
        <div className="text-center py-12 border-t border-slate-200 ">
          <h3 className="text-xl font-bold mb-6">Official Health Authority</h3>
          <a href="https://www.moh.gov.sa" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#006C35] text-white rounded-xl font-bold shadow-lg shadow-[#006C35]/20 hover:scale-105 transition-transform">
             <Landmark size={18} /> Visit Ministry of Health (MOH)
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Are vaccinations free for expatriate children?" answer="Vaccinations are generally free at government primary healthcare centers for all residents with a valid Iqama, though private clinics will charge fees based on their own rates." />
            <FAQItem question="What if my child was vaccinated in my home country?" answer="You must provide the original vaccination record from your home country. Most schools require this record to be translated and sometimes attested or verified by a local clinic." />
            <FAQItem question="Can I update records digitally?" answer="Yes, through the 'Sehaty' app, you can often link your child's vaccination history to their digital residency profile." />
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
