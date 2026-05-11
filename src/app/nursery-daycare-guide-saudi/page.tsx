"use client";

import { 
  Heart, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, PhoneCall, FileText, Syringe, GraduationCap, MapPin, DollarSign, Camera, Users
} from "lucide-react";
import { useState } from "react";

export default function NurseryDaycareGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Heart size={16} /> Early Childhood
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Nursery & Daycare Guide in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Comprehensive guide to early childhood education, licensed childcare facilities, safety rules, and enrollment for expat families.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <Heart className="text-pink-500" /> Early Learning & Care
              </h2>
              <p className="text-slate-600  leading-relaxed mb-6">
                Saudi Arabia offers diverse early childhood facilities tailored for expatriate needs, ranging from international nurseries to corporate-sponsored childcare centers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-pink-50  rounded-xl border border-pink-100">
                    <span className="text-[10px] font-black text-pink-600 uppercase tracking-widest block mb-1">Age Range</span>
                    <p className="text-sm font-bold">6 Months – 6 Years</p>
                 </div>
                 <div className="p-4 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Structure</span>
                    <p className="text-sm font-bold">Nursery, Daycare, KG</p>
                 </div>
              </div>
            </div>
            <div className="bg-pink-50/50  p-6 rounded-2xl border border-pink-100 w-full md:w-72">
              <h3 className="font-bold text-pink-700 mb-4 text-center">Facility Types</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-pink-500"/> Private Nurseries</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-pink-500"/> International Centers</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-pink-500"/> Corporate Childcare</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-pink-500"/> Licensed Home Daycare</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Requirements & Safety */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
                 <FileText className="text-blue-500" /> Enrollment Requirements
              </h3>
              <ul className="space-y-4 text-sm text-slate-600">
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Child's Vaccination record (Mandatory)</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Dependent Iqama & Passport</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Parent ID / Iqama copy</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Emergency contact & Medical history</li>
              </ul>
           </div>
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
                 <ShieldCheck className="text-[#006C35]" /> Safety & Monitoring
              </h3>
              <div className="space-y-4">
                 <div className="flex gap-4">
                    <div className="p-3 bg-slate-50  rounded-xl text-[#006C35]"><Camera size={20}/></div>
                    <div>
                       <h5 className="text-sm font-bold">CCTV Monitoring</h5>
                       <p className="text-xs text-slate-500">Most centers offer live or recorded camera access for parents.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="p-3 bg-slate-50  rounded-xl text-[#006C35]"><Users size={20}/></div>
                    <div>
                       <h5 className="text-sm font-bold">Licensed Caregivers</h5>
                       <p className="text-xs text-slate-500">Only Ministry-licensed staff are authorized to work in childcare.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Cost Range */}
        <div className="bg-white border border-slate-200 text-slate-900 p-10 rounded-[2.5rem] mb-12 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
           <h3 className="text-2xl font-black mb-6 flex items-center gap-2 text-pink-400"><DollarSign size={24}/> Estimated Monthly Costs</h3>
           <p className="text-slate-400 mb-8 max-w-2xl text-sm leading-relaxed">Fees vary significantly based on the city, curriculum, and facility quality. Costs typically include tuition, meals, and specialized care programs.</p>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                 <span className="text-[10px] uppercase font-black text-pink-400 block mb-1">Budget Centers</span>
                 <span className="text-sm font-bold">SAR 1,000 – 2,500</span>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                 <span className="text-[10px] uppercase font-black text-pink-400 block mb-1">Mid-Range</span>
                 <span className="text-sm font-bold">SAR 2,500 – 4,500</span>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                 <span className="text-[10px] uppercase font-black text-pink-400 block mb-1">Premium / Int'l</span>
                 <span className="text-sm font-bold">SAR 5,000 – 8,000+</span>
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="What is the age cut-off for kindergarten?" answer="The cut-off usually aligns with the Ministry of Education's school calendar, typically requiring the child to be 4 years old by August or September for KG1." />
            <FAQItem question="Are nurseries open during school holidays?" answer="Many private nurseries and daycare centers remain open during mid-term breaks, though they may close during major Eid holidays." />
            <FAQItem question="Is transportation available for toddlers?" answer="Some premium nurseries offer specialized door-to-door transportation with child-safe seating and dedicated attendants." />
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
