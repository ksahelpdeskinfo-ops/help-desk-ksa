"use client";

import { 
  Clock, Globe, ShieldCheck, Landmark, Info, CheckCircle2, ChevronDown, ChevronUp, Bell, Map
} from "lucide-react";
import { useState } from "react";

export default function PrayerTimingsPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-6">
            <Clock size={16} /> Official Prayer Schedule
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Prayer Timings & Systems in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Complete guide to daily Islamic prayer schedules, determining factors, and official timing systems across the Kingdom.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Daily Prayers Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <h2 className="text-2xl font-bold text-slate-900  mb-8 flex items-center gap-2">
            <Bell className="text-[#006C35]" /> The Five Daily Prayers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
             <PrayerBox name="Fajr" time="Pre-sunrise" />
             <PrayerBox name="Dhuhr" time="Midday" />
             <PrayerBox name="Asr" time="Afternoon" />
             <PrayerBox name="Maghrib" time="Sunset" />
             <PrayerBox name="Isha" time="Night" />
          </div>
        </div>

        {/* Determination & Official Sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <Map className="text-blue-500" /> How Timing is Determined
            </h3>
            <p className="text-sm text-slate-600  mb-6 leading-relaxed">
              Prayer schedules in Saudi Arabia are precisely calculated based on:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 size={16} className="text-[#006C35]"/> Precise Sun Position</li>
              <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 size={16} className="text-[#006C35]"/> Geographic Location (Lat/Long)</li>
              <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 size={16} className="text-[#006C35]"/> Official Islamic Calculation Rules</li>
            </ul>
          </div>

          <div className="bg-[#006C35]/5 p-8 rounded-2xl border border-[#006C35]/10">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <Landmark className="text-[#006C35]" /> Official Sources
            </h3>
            <p className="text-sm text-slate-600  mb-6">Always rely on official sources for precise timings to ensure accuracy for your specific city.</p>
            <a href="https://www.gasgi.gov.sa" target="_blank" className="block p-4 bg-white  rounded-xl border border-[#006C35]/20 hover:border-[#006C35] transition-all group">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Geospatial Authority</span>
               <span className="text-sm font-bold group-hover:text-[#006C35]">GASGI Official Timings →</span>
            </a>
          </div>
        </div>

        {/* Friday & Ramadan Special Timing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-white border border-slate-200 text-slate-900 p-8 rounded-3xl shadow-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#00E676]"><Clock size={20}/> Friday Prayer Timing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Friday prayers (Jumu’ah) usually occur around the Dhuhr time slot but involve a longer sermon. Public services and businesses often pause during this period.</p>
           </div>
           <div className="bg-orange-600 text-slate-900 p-8 rounded-3xl shadow-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-orange-200"><Bell size={20}/> Ramadan Special Prayers</h3>
              <p className="text-xs text-slate-900/80 leading-relaxed mb-4">During the holy month, additional congregational prayers are performed:</p>
              <div className="flex flex-wrap gap-2">
                 <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold">Taraweeh</span>
                 <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold">Tahajjud</span>
                 <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold">Qiyam prayers</span>
              </div>
           </div>
        </div>

        {/* Digital Tools */}
        <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm text-center mb-12">
           <h3 className="text-xl font-bold text-slate-900  mb-4">Official & Popular Prayer Apps</h3>
           <div className="flex flex-wrap justify-center gap-4">
              <AppBadge name="Nusuk" />
              <AppBadge name="Tawakkalna" />
              <AppBadge name="Muslim Pro" />
              <AppBadge name="Athan App" />
           </div>
           <p className="text-xs text-slate-500 mt-6 max-w-lg mx-auto italic">These apps provide GPS-based timing and automated notifications for Adhan (Call to Prayer).</p>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Do shops close during prayer times?" answer="Historically, shops closed for 20-30 minutes during each prayer. Today, regulations have evolved, allowing many businesses to remain open, though many still choose to pause briefly for staff prayer." />
            <FAQItem question="How can I find the Qibla direction?" answer="Most official prayer apps like Nusuk and Tawakkalna include a built-in Qibla compass using your phone's GPS." />
            <FAQItem question="Is the Friday prayer time different?" answer="It aligns with the Dhuhr prayer time but follows the specific schedule of the local congregational mosque." />
          </div>
        </div>

      </div>
    </div>
  );
}

function PrayerBox({ name, time }: { name: string, time: string }) {
  return (
    <div className="p-4 bg-slate-50  rounded-2xl border border-slate-100 text-center">
       <span className="text-[10px] font-black uppercase text-[#006C35] block mb-1">{name}</span>
       <span className="text-sm font-bold">{time}</span>
    </div>
  );
}

function AppBadge({ name }: { name: string }) {
  return (
    <div className="px-4 py-2 bg-slate-50  border border-slate-100  rounded-full text-xs font-bold text-slate-700 ">
       {name}
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
