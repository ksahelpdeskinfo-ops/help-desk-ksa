"use client";

import { 
  GraduationCap, BookOpen, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, Globe, FileText, Landmark as UniIcon
} from "lucide-react";
import { useState } from "react";

export default function UniversityAdmissionsPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <GraduationCap size={16} /> Higher Education
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            University Admissions for Expats in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Guide to university pathways, admission requirements, and scholarship opportunities for expatriate students in the Kingdom.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Admission Pathways */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <UniIcon className="text-purple-500" /> Education Pathways
              </h2>
              <p className="text-slate-600  leading-relaxed mb-6">
                Expatriate students in Saudi Arabia have several options for higher education, ranging from prestigious public universities to specialized private institutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-purple-50  rounded-xl border border-purple-100">
                    <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest block mb-1">Public Universities</span>
                    <p className="text-sm font-bold">Limited Seats for Expats</p>
                    <p className="text-[10px] text-slate-500">Often requires scholarships</p>
                 </div>
                 <div className="p-4 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Private Universities</span>
                    <p className="text-sm font-bold">More Accessible</p>
                    <p className="text-[10px] text-slate-500">Wide variety of programs</p>
                 </div>
              </div>
            </div>
            <div className="bg-purple-50/50  p-6 rounded-2xl border border-purple-100 w-full md:w-72">
              <h3 className="font-bold text-purple-700 mb-4 text-center">Popular Fields</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-purple-500"/> Medicine & Health</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-purple-500"/> Engineering</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-purple-500"/> Business & Finance</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-purple-500"/> IT & Computer Science</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Admission Requirements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <RequirementCard icon={<FileText size={20}/>} title="High School Cert" desc="Equivalency approval required." />
             <RequirementCard icon={<BookOpen size={20}/>} title="Entrance Exams" desc="SAT, Qudrat, or Tahsili." />
             <RequirementCard icon={<Globe size={20}/>} title="English Proficiency" desc="IELTS or TOEFL (if applicable)." />
             <RequirementCard icon={<UniIcon size={20}/>} title="Dependent Iqama" desc="Must be valid and active." />
          </div>
        </div>

        {/* Key Rules & Language */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold text-slate-900  mb-6">Language Requirements</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">Language of instruction varies by program and university type:</p>
              <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-sm font-bold text-slate-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div> Arabic (Common in Public Unis)</li>
                 <li className="flex items-center gap-3 text-sm font-bold text-slate-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div> English (Most International Programs)</li>
              </ul>
           </div>
           <div className="bg-orange-50/50  p-8 rounded-2xl border border-orange-100 shadow-sm">
              <h3 className="text-xl font-bold text-orange-600 mb-6 flex items-center gap-2"><Info size={24}/> Key Rules for Expats</h3>
              <ul className="space-y-4 text-sm text-orange-700 ">
                 <li className="flex items-start gap-2"><span>•</span> Seats in public universities are extremely competitive and limited for non-Saudis.</li>
                 <li className="flex items-start gap-2"><span>•</span> Private universities are more accessible but involve tuition fees.</li>
                 <li className="flex items-start gap-2"><span>•</span> Some universities offer full or partial scholarships for high-achieving expat students.</li>
              </ul>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Can expatriates study for free in Saudi Arabia?" answer="Expatriates can study for free in public universities if they are granted a government scholarship. These are awarded based on academic merit and available seats." />
            <FAQItem question="Do I need a separate visa to study?" answer="If you are already a resident under your parent's sponsorship (Dependent Iqama), you can usually study without a separate student visa, though you must transfer sponsorship after graduation to work." />
            <FAQItem question="Are international branch campuses available?" answer="Yes, several international universities have established branch campuses or partnerships in Saudi Arabia, particularly in Riyadh and Jeddah." />
          </div>
        </div>

      </div>
    </div>
  );
}

function RequirementCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-6 bg-white  rounded-2xl border border-slate-200  shadow-sm text-center">
       <div className="mb-4 text-purple-500 inline-block p-3 bg-purple-50 rounded-xl">{icon}</div>
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
