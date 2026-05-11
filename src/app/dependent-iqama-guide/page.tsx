"use client";

import { 
  ShieldCheck, Smartphone, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, PhoneCall, FileText, Heart, GraduationCap
} from "lucide-react";
import { useState } from "react";

export default function DependentIqamaGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <ShieldCheck size={16} /> Legal Residency
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Dependent Iqama Guide: Saudi Residency
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Understanding the legal residency permit (Iqama) for family members, including rights, requirements, and renewal rules.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* What is Dependent Iqama? */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <ShieldCheck className="text-cyan-500" /> Digital Residency Status
              </h2>
              <p className="text-slate-600  leading-relaxed mb-6">
                A Dependent Iqama is the official residency permit issued for family members. It is digitally linked to the sponsor's residency and managed through the <strong>Absher</strong> and <strong>Tawakkalna</strong> platforms.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Duration</span>
                    <p className="text-xs font-bold">Linked to Sponsor</p>
                 </div>
                 <div className="p-4 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Status</span>
                    <p className="text-xs font-bold">Legal Residency</p>
                 </div>
              </div>
            </div>
            <div className="bg-cyan-50/50  p-6 rounded-2xl border border-cyan-100 w-full md:w-72">
              <h3 className="font-bold text-cyan-700 mb-4 text-center">What It Includes</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-cyan-500"/> Legal stay in KSA</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-cyan-500"/> Schooling access</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-cyan-500"/> Healthcare eligibility</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-cyan-500"/> Digital Identity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Issuance Requirements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <RequirementCard icon={<ShieldCheck size={20}/>} title="Sponsor Iqama" desc="Must be valid & active." />
             <RequirementCard icon={<FileText size={20}/>} title="Passport" desc="Visitor's original passport." />
             <RequirementCard icon={<Heart size={20}/>} title="Insurance" desc="Registered medical insurance." />
             <RequirementCard icon={<Smartphone size={20}/>} title="Photos" desc="Recent passport-size photo." />
          </div>
        </div>

        {/* Renewal & Limitations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold text-slate-900  mb-6">Renewal Rules</h3>
              <ul className="space-y-4">
                 <li className="flex gap-3 text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">✓</div> Must be renewed annually with the sponsor's Iqama.</li>
                 <li className="flex gap-3 text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">✓</div> Monthly dependent fees must be paid in full for the renewal period.</li>
                 <li className="flex gap-3 text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">✓</div> Late renewal results in fines starting from SAR 500.</li>
              </ul>
           </div>
           <div className="bg-red-50/50  p-8 rounded-2xl border border-red-100 shadow-sm">
              <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2"><Info size={24}/> Key Limitations</h3>
              <ul className="space-y-4 text-sm text-red-700 ">
                 <li className="flex items-start gap-2"><span>•</span> Cannot work legally without a separate work permit or transfer.</li>
                 <li className="flex items-start gap-2"><span>•</span> Dependents cannot sponsor other individuals.</li>
                 <li className="flex items-start gap-2"><span>•</span> International travel requires a separate Exit-Reentry visa.</li>
              </ul>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="What happens if the sponsor's Iqama expires?" answer="If the sponsor's Iqama expires, all dependent residency permits automatically become invalid, and international travel may be blocked until the sponsor renews." />
            <FAQItem question="Can a dependent student stay after 25?" answer="Generally, male dependents may need to transfer to a student or work visa after age 25, while female dependents can often remain under sponsorship if unmarried." />
            <FAQItem question="How do I get a digital copy of the Iqama?" answer="You can access the Digital ID for yourself and all dependents through the Absher Individual app or the Tawakkalna Services app." />
          </div>
        </div>

      </div>
    </div>
  );
}

function RequirementCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-6 bg-white  rounded-2xl border border-slate-200  shadow-sm text-center">
       <div className="mb-4 text-cyan-500 inline-block p-3 bg-cyan-50 rounded-xl">{icon}</div>
       <h4 className="font-bold text-sm mb-1">{title}</h4>
       <p className="text-[10px] text-slate-500 leading-relaxed">{desc}</p>
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
