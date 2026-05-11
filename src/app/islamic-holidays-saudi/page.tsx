"use client";

import { 
  Calendar, Star, Moon, Globe, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Plane, Building2, Landmark
} from "lucide-react";
import { useState } from "react";

export default function IslamicHolidaysPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Star size={16} /> Official Public Holidays
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Major Islamic Holidays in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Official guide to Eid al-Fitr, Eid al-Adha, and other religious observances with public sector and private sector holiday rules.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Main Holidays Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
          <HolidayCard 
            icon={<Moon className="text-[#006C35]" />}
            title="Eid al-Fitr"
            desc="Celebrates the end of Ramadan. Usually includes extended public holidays and government closures."
            features={["End of Fasting", "Charity (Zakat al-Fitr)", "Community Prayers"]}
          />
          <HolidayCard 
            icon={<Star className="text-orange-500" />}
            title="Eid al-Adha"
            desc="Occurs during Hajj season. Commemorates the sacrifice ritual with multi-day breaks."
            features={["Sacrifice Rituals", "Hajj Pilgrimage", "Family Feasts"]}
          />
        </div>

        {/* Calendar & Moon Sighting */}
        <div className="bg-white  rounded-3xl border border-slate-200  p-8 mb-12 shadow-sm">
           <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                 <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="text-blue-500"/> The Lunar Calendar</h2>
                 <p className="text-sm text-slate-600  leading-relaxed mb-6">
                   Islamic dates depend on the lunar calendar and the official <strong>moon sighting</strong> announcements issued by the Saudi Supreme Court.
                 </p>
                 <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 size={16} className="text-[#006C35]"/> Islamic New Year</div>
                    <div className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 size={16} className="text-[#006C35]"/> Day of Arafah</div>
                    <div className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 size={16} className="text-[#006C35]"/> Ramadan Start</div>
                 </div>
              </div>
              <div className="bg-slate-50  p-6 rounded-2xl border border-slate-100 w-full md:w-72">
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Official Announcements</h4>
                 <a href="https://www.spa.gov.sa" target="_blank" className="block p-3 bg-white  rounded-xl border border-slate-200 text-center hover:border-blue-500 transition-all">
                    <span className="text-xs font-bold">Saudi Press Agency (SPA) →</span>
                 </a>
              </div>
           </div>
        </div>

        {/* Sector Holiday Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="p-8 bg-blue-50/50  rounded-3xl border border-blue-100">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Building2 className="text-blue-600"/> Public Sector</h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">Government employees typically receive longer holiday durations, often ranging from 10 to 14 days during major Eids.</p>
              <div className="px-4 py-2 bg-blue-100  rounded-lg text-[10px] font-black text-blue-600 uppercase tracking-widest inline-block">Extended Vacations</div>
           </div>
           <div className="p-8 bg-[#006C35]/5 rounded-3xl border border-[#006C35]/10">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><ShieldCheck className="text-[#006C35]"/> Private Sector</h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">Private sector workers usually receive 4 to 5 days of paid holiday for Eid al-Fitr and Eid al-Adha, as regulated by the MHRSD.</p>
              <div className="px-4 py-2 bg-[#006C35]/10 rounded-lg text-[10px] font-black text-[#006C35] uppercase tracking-widest inline-block">MHRSD Regulated</div>
           </div>
        </div>

        {/* Travel Warning */}
        <div className="bg-orange-50  border border-orange-100  p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center mb-12">
           <div className="shrink-0 p-4 bg-orange-100 rounded-full text-orange-600"><Plane size={32}/></div>
           <div>
              <h3 className="text-lg font-bold text-orange-800  mb-2">Travel During Holidays</h3>
              <p className="text-sm text-orange-700  leading-relaxed">Travel demand increases significantly during Eid, Ramadan, and Hajj seasons. International flights, Haramain train seats, and local hotels often sell out months in advance.</p>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="When is the exact date of Eid announced?" answer="Exact dates are announced 1-2 days before the holiday based on official moon sightings confirmed by the Supreme Court." />
            <FAQItem question="Are private employees paid for these holidays?" answer="Yes, Eid al-Fitr and Eid al-Adha are mandatory paid public holidays for all employees in Saudi Arabia." />
            <FAQItem question="Do shops close on Eid?" answer="Most shops close during the morning Eid prayer but reopen in the afternoon with festive sales and events." />
          </div>
        </div>

      </div>
    </div>
  );
}

function HolidayCard({ icon, title, desc, features }: { icon: any, title: string, desc: string, features: string[] }) {
  return (
    <div className="bg-white  p-8 rounded-3xl border border-slate-200  shadow-sm hover:border-[#006C35] transition-all">
       <div className="mb-6 p-4 bg-slate-50  rounded-2xl inline-block">{icon}</div>
       <h3 className="text-xl font-bold mb-3">{title}</h3>
       <p className="text-sm text-slate-500 mb-6 leading-relaxed">{desc}</p>
       <ul className="space-y-2">
          {features.map((f, i) => (
             <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-600"><CheckCircle2 size={14} className="text-[#006C35]"/> {f}</li>
          ))}
       </ul>
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
