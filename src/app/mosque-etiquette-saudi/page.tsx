"use client";

import { 
  Landmark, Info, ShieldCheck, Users, Shirt, VolumeX, CameraOff, Smartphone, ChevronDown, ChevronUp
} from "lucide-react";
import { useState } from "react";

export default function MosqueEtiquettePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Landmark size={16} /> Cultural Etiquette Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Mosque Etiquette in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            An essential guide for residents and visitors on respect, dress codes, and conduct when visiting mosques.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Dress Code Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <h2 className="text-2xl font-bold text-slate-900  mb-8 flex items-center gap-2">
            <Shirt className="text-blue-500" /> Proper Dress Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">For Men</h4>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Modest clothing (Thobe or long trousers)</li>
                   <li className="flex items-center gap-3 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Covered shoulders and knees</li>
                   <li className="flex items-center gap-3 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Clean, formal-casual attire</li>
                </ul>
             </div>
             <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">For Women</h4>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-[#006C35]"></div> Abaya is highly recommended</li>
                   <li className="flex items-center gap-3 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-[#006C35]"></div> Hair covering (Hijab) required in many mosques</li>
                   <li className="flex items-center gap-3 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-[#006C35]"></div> Modest, loose, full-body clothing</li>
                </ul>
             </div>
          </div>
        </div>

        {/* Prohibited Conduct Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Respect & Conduct Rules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             <ConductCard icon={<Smartphone size={24}/>} title="Silence Phones" desc="Disable ringtones and alarms before entering." />
             <ConductCard icon={<VolumeX size={24}/>} title="Quiet Conversations" desc="Avoid loud talking or laughter inside." />
             <ConductCard icon={<CameraOff size={24}/>} title="No Photography" desc="Photography is strictly restricted in many areas." />
          </div>
        </div>

        {/* Friday Prayer Section */}
        <div className="bg-blue-600 text-slate-900 p-10 rounded-[2.5rem] mb-12 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
           <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                 <h3 className="text-2xl font-black mb-4 tracking-tight">Friday Prayer (Jumu’ah)</h3>
                 <p className="text-blue-100 leading-relaxed text-sm mb-6">Friday is the main weekly congregational prayer. Mosques become extremely crowded, and roads near them may close temporarily. Arriving early (1 hour before) is highly recommended.</p>
                 <div className="flex gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs font-bold">12:00 - 1:00 PM Typical Timing</div>
                    <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs font-bold">Crowded Parking</div>
                 </div>
              </div>
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center border border-white/20 shrink-0">
                 <Users size={40} />
              </div>
           </div>
        </div>

        {/* Inside Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-lg font-bold mb-6">Inside the Mosque</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Always remove shoes at the designated racks.</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Do not cross in front of someone praying.</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Silence your mobile devices immediately.</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Respect segregated prayer halls for men and women.</li>
              </ul>
           </div>
           <div className="bg-slate-50  p-8 rounded-2xl border border-slate-200 ">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Info className="text-orange-500"/> Prohibited Conduct</h3>
              <p className="text-xs text-slate-500 mb-6">Avoid the following to ensure a respectful visit:</p>
              <div className="space-y-2">
                 <ProhibitedItem text="Political or controversial discussions" />
                 <ProhibitedItem text="Filming worshippers without explicit consent" />
                 <ProhibitedItem text="Blocking prayer lines or exits" />
                 <ProhibitedItem text="Distributive or loud behavior" />
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Can non-Muslims enter mosques?" answer="While the Holy Mosques in Makkah are for Muslims only, some mosques in other cities allow non-Muslims in designated areas. Always check local signs." />
            <FAQItem question="What should I do if I accidentally enter a prayer area with shoes?" answer="Apologize quietly, immediately remove them, and place them in the designated rack." />
            <FAQItem question="Is photography allowed in the courtyard?" answer="Courtyard photography is often tolerated for personal use, but always look for signs prohibiting cameras." />
          </div>
        </div>

      </div>
    </div>
  );
}

function ConductCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-6 bg-white  rounded-2xl border border-slate-200  shadow-sm text-center group hover:border-blue-500 transition-all">
       <div className="mb-4 text-blue-500 group-hover:scale-110 transition-transform inline-block p-4 bg-blue-50 rounded-full">{icon}</div>
       <h4 className="font-bold text-slate-900  mb-2">{title}</h4>
       <p className="text-xs text-slate-500">{desc}</p>
    </div>
  );
}

function ProhibitedItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-700">
       <div className="shrink-0 w-2 h-2 bg-red-400 rounded-full"></div>
       {text}
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
