"use client";

import { 
  GraduationCap, ShieldCheck, MapPin, Building2, Globe, 
  CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Info, Bus, Calendar, Landmark
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SchoolingExpatGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can expatriate children attend public schools in Saudi Arabia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, expatriates choose private or international schools, though some exceptions may apply for specific nationalities or under special government permits."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most common curriculum for expats in KSA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "British, American, and Indian (CBSE) curricula are among the most widely available and popular choices for expatriate families."
        }
      },
      {
        "@type": "Question",
        "name": "Are school fees expensive in Saudi Arabia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fees vary significantly depending on school quality and curriculum, ranging from SAR 8,000 for budget private schools to over SAR 100,000 for premium international institutions."
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
            <GraduationCap size={16} /> Education Hub
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Schooling for Expat Children in Saudi Arabia  – Complete Education Guide
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Everything you need to know about international schools, curricula, admission requirements, and education costs in the Kingdom.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#006C35]" /> Choosing the Right School
              </h2>
              <p className="text-slate-600  leading-relaxed mb-4">
                Choosing the right school for expatriate children in Saudi Arabia is one of the most important decisions for families relocating to the Kingdom. Saudi Arabia offers a wide range of international schools, private institutions, and foreign curriculum programs designed to serve the growing expatriate population.
              </p>
              <p className="text-slate-600  leading-relaxed">
                This guide explains the education system, school types, admission requirements, fees, transportation, and important considerations for expat families living in Saudi Arabia.
              </p>
            </div>
            <div className="bg-[#006C35]/5 p-6 rounded-2xl border border-[#006C35]/10 w-full md:w-72">
              <h3 className="font-bold text-slate-900  mb-4 text-center">School Types</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> International Schools
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> Private Arabic Schools
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> Community Schools
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Curriculum Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Popular Curricula for Expats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CurriculumCard title="British" target="UK, South Asia, Middle East" />
            <CurriculumCard title="American" target="US, Canada, International" />
            <CurriculumCard title="Indian (CBSE/ICSE)" target="Indian families" />
            <CurriculumCard title="Pakistani" target="Pakistani families" />
            <CurriculumCard title="Filipino" target="Filipino families" />
            <CurriculumCard title="International Baccalaureate" target="Multinational families" />
          </div>
        </div>

        {/* Admission & Fees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <Landmark className="text-blue-500" /> Admission Requirements
            </h3>
            <ul className="space-y-3">
              <RequirementItem text="Valid passport & Iqama (Residence permit)" />
              <RequirementItem text="Child's Birth certificate & Vaccination records" />
              <RequirementItem text="Previous school reports/transcripts" />
              <RequirementItem text="Transfer certificates & Passport-size photos" />
              <RequirementItem text="Entrance exams & English assessment interviews" />
            </ul>
          </div>

          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <Landmark className="text-[#006C35]" /> Estimated Annual Fees
            </h3>
            <div className="space-y-4">
              <FeeRow label="Budget Private Schools" fee="SAR 8k – 18k" />
              <FeeRow label="Mid-Level International" fee="SAR 20k – 45k" />
              <FeeRow label="Premium International" fee="SAR 50k – 100k+" />
              <div className="pt-4 border-t border-slate-100 ">
                 <p className="text-[10px] text-slate-400 italic leading-relaxed">
                   *Additional costs apply for uniforms, books, devices, and transport.
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cities & Transportation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <MapPin className="text-red-500" /> Education Cities
            </h3>
            <div className="space-y-4">
              <CityRow city="Riyadh" info="Largest international school market" />
              <CityRow city="Jeddah" info="Diverse expat communities" />
              <CityRow city="Dammam / Khobar" info="Strong corporate & oil sector schools" />
              <CityRow city="NEOM / Tabuk" info="New premium education projects" />
            </div>
          </div>

          <div className="bg-blue-50/50  p-8 rounded-2xl border border-blue-100 ">
            <h3 className="text-xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <Bus className="text-blue-600" /> Transportation Services
            </h3>
            <p className="text-sm text-slate-600  mb-6">Many schools offer GPS-enabled private buses with separate routes for boys and girls.</p>
            <div className="bg-white  p-4 rounded-xl border border-blue-100 text-center shadow-sm">
               <span className="text-xs font-bold text-slate-400 block mb-1 uppercase tracking-widest">Average Annual Cost</span>
               <span className="text-2xl font-black text-blue-600">SAR 2,000 – 8,000</span>
            </div>
          </div>
        </div>

        {/* Academic Year & Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <Calendar className="text-purple-500" /> Academic Year
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                <span className="text-slate-500">Duration</span>
                <span className="font-bold">Aug/Sept → June</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                <span className="text-slate-500">Breaks</span>
                <span className="font-bold">Winter, Spring, Eid</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Holidays</span>
                <span className="font-bold">Saudi National Day, Founding Day</span>
              </div>
            </div>
          </div>

          <div className="bg-[#006C35]/5 p-8 rounded-2xl border border-[#006C35]/10">
            <h3 className="text-xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <Info className="text-[#006C35]" /> Tips for Parents
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 size={12} className="text-[#006C35] shrink-0 mt-0.5" /> Apply early before academic year starts
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 size={12} className="text-[#006C35] shrink-0 mt-0.5" /> Keep all school records organized
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 size={12} className="text-[#006C35] shrink-0 mt-0.5" /> Compare transportation options carefully
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 size={12} className="text-[#006C35] shrink-0 mt-0.5" /> Verify curriculum accreditation before admission
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem 
              question="Can expatriate children attend public schools?" 
              answer="In most cases, expatriates choose private or international schools, though some exceptions may apply."
            />
            <FAQItem 
              question="What is the most common curriculum for expats?" 
              answer="British, American, and Indian curricula are among the most widely available."
            />
            <FAQItem 
              question="Are school fees expensive in Saudi Arabia?" 
              answer="Fees vary significantly depending on school quality and curriculum."
            />
            <FAQItem 
              question="Do employers provide school allowances?" 
              answer="Some companies offer education allowances as part of employment packages."
            />
            <FAQItem 
              question="Is transportation available?" 
              answer="Yes, many schools provide bus transportation services for students."
            />
          </div>
        </div>

        {/* Official Resources */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-12 text-center text-slate-900 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#006C35] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
             <h3 className="text-2xl font-bold mb-6">Official Resources</h3>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="#" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-xs font-bold">Ministry of Education</a>
                <a href="#" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-xs font-bold">National Ed. Portal</a>
                <a href="#" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-xs font-bold">Public Services Platform</a>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function CurriculumCard({ title, target }: { title: string, target: string }) {
  return (
    <div className="bg-white  p-6 rounded-2xl border border-slate-200  shadow-sm hover:border-[#006C35] transition-colors">
      <h4 className="font-bold text-slate-900  mb-2">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{target}</p>
    </div>
  );
}

function RequirementItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-600 ">
      <div className="shrink-0 w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mt-0.5">
        <CheckCircle2 size={12} />
      </div>
      {text}
    </li>
  );
}

function FeeRow({ label, fee }: { label: string, fee: string }) {
  return (
    <div className="flex justify-between items-center group">
      <span className="text-sm text-slate-600  group-hover:text-slate-900 transition-colors">{label}</span>
      <span className="font-bold text-[#006C35]">{fee}</span>
    </div>
  );
}

function CityRow({ city, info }: { city: string, info: string }) {
  return (
    <div className="flex flex-col border-l-2 border-red-100  pl-4 py-1">
      <span className="font-bold text-slate-900  text-sm">{city}</span>
      <span className="text-xs text-slate-500">{info}</span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white  border border-slate-200  rounded-xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50  transition-colors"
      >
        <span className="font-bold text-slate-900  text-sm">{question}</span>
        {isOpen ? <ChevronUp size={18} className="text-[#006C35]" /> : <ChevronDown size={18} className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-slate-600  text-sm leading-relaxed border-t border-slate-100  pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}
