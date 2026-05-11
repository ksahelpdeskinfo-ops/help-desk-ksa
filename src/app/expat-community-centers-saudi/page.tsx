"use client";

import { 
  Users, MapPin, Heart, Globe, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, PhoneCall
} from "lucide-react";
import { useState } from "react";

export default function ExpatCommunityPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Users size={16} /> Community Support
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Expat Community Centers in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Guide to expatriate support services, cultural centers, community programs, and social organizations across the Kingdom.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <Heart className="text-cyan-500" /> Supporting Expatriate Life
              </h2>
              <p className="text-slate-600  leading-relaxed mb-4">
                Expat community centers play a vital role in helping residents adapt to life in Saudi Arabia by providing social networking, language support, and cultural orientation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-3 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Social</span>
                    <p className="text-xs font-bold">Networking & Events</p>
                 </div>
                 <div className="p-3 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Learning</span>
                    <p className="text-xs font-bold">Language Classes</p>
                 </div>
              </div>
            </div>
            <div className="bg-cyan-50/50  p-6 rounded-2xl border border-cyan-100 w-full md:w-72">
              <h3 className="font-bold text-cyan-700 mb-4 text-center">Common Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-cyan-500"/> Sports Activities</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-cyan-500"/> Religious Gatherings</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-cyan-500"/> Professional Networking</li>
                <li className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 size={12} className="text-cyan-500"/> Children’s Programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Embassy Support */}
        <div className="bg-white border border-slate-200 text-slate-900 p-10 rounded-[2.5rem] mb-12 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
           <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                 <h3 className="text-2xl font-black mb-4 flex items-center gap-2"><Landmark className="text-cyan-400"/> Embassy Support Services</h3>
                 <p className="text-slate-400 text-sm leading-relaxed mb-6">Embassies and consulates are primary hubs for expatriate communities, offering essential legal and administrative support.</p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold"><CheckCircle2 size={14} className="text-cyan-400"/> Legal Support</div>
                    <div className="flex items-center gap-2 text-xs font-bold"><CheckCircle2 size={14} className="text-cyan-400"/> Passport Services</div>
                    <div className="flex items-center gap-2 text-xs font-bold"><CheckCircle2 size={14} className="text-cyan-400"/> Emergency Help</div>
                    <div className="flex items-center gap-2 text-xs font-bold"><CheckCircle2 size={14} className="text-cyan-400"/> Cultural Celebrations</div>
                 </div>
              </div>
              <div className="shrink-0 p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                 <PhoneCall size={32} className="mx-auto mb-3 text-cyan-400" />
                 <span className="text-[10px] uppercase font-black text-slate-500 block">Emergency</span>
                 <span className="text-xs font-bold">Contact Your Embassy</span>
              </div>
           </div>
        </div>

        {/* Popular Cities & Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><MapPin className="text-red-500"/> Popular Expat Cities</h3>
              <div className="space-y-4">
                 <div className="flex justify-between border-b pb-2 border-slate-50">
                    <span className="text-sm font-bold">Riyadh</span>
                    <span className="text-xs text-slate-500">Capital Hub</span>
                 </div>
                 <div className="flex justify-between border-b pb-2 border-slate-50">
                    <span className="text-sm font-bold">Jeddah</span>
                    <span className="text-xs text-slate-500">Coastal Community</span>
                 </div>
                 <div className="flex justify-between border-b pb-2 border-slate-50">
                    <span className="text-sm font-bold">Al Khobar</span>
                    <span className="text-xs text-slate-500">Corporate & Oil Sector</span>
                 </div>
              </div>
           </div>
           <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Heart className="text-pink-500"/> Women & Family Groups</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">Dedicated groups focus on family wellbeing and social integration for spouses and children.</p>
              <div className="flex flex-wrap gap-2">
                 <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-[10px] font-black uppercase">Parenting Support</span>
                 <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-[10px] font-black uppercase">Women-Only Events</span>
                 <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-[10px] font-black uppercase">Family Gatherings</span>
              </div>
           </div>
        </div>

        {/* Guidelines */}
        <div className="bg-slate-50  p-8 rounded-3xl border border-slate-100 mb-12">
           <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><ShieldCheck className="text-[#006C35]"/> Cultural Respect Guidelines</h3>
           <p className="text-sm text-slate-500 mb-8 leading-relaxed">Expat communities thrive by respecting local customs and Saudi government regulations.</p>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                 <div className="shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">👔</div>
                 <div>
                    <h5 className="text-xs font-bold mb-1">Public Dress Code</h5>
                    <p className="text-[10px] text-slate-500 leading-relaxed">Follow modest clothing standards in public community spaces.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">🕌</div>
                 <div>
                    <h5 className="text-xs font-bold mb-1">Religious Sensitivity</h5>
                    <p className="text-[10px] text-slate-500 leading-relaxed">Be mindful of prayer times and local religious traditions.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Official Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
           <a href="https://www.moi.gov.sa" target="_blank" className="p-4 bg-white  border border-slate-100 rounded-2xl flex items-center justify-between hover:border-cyan-500 transition-all">
              <span className="text-xs font-bold">Ministry of Interior →</span>
              <Building2 size={16} className="text-slate-300" />
           </a>
           <a href="https://www.visitsaudi.com" target="_blank" className="p-4 bg-white  border border-slate-100 rounded-2xl flex items-center justify-between hover:border-cyan-500 transition-all">
              <span className="text-xs font-bold">Saudi Tourism Authority →</span>
              <Globe size={16} className="text-slate-300" />
           </a>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="How do I find an expat community center?" answer="Most are organized around compounds, embassies, or professional associations. Checking your country's embassy website is the best starting point." />
            <FAQItem question="Are there groups for non-working spouses?" answer="Yes, many communities have dedicated 'Family and Spouses' groups that organize coffee mornings, classes, and playgroups." />
            <FAQItem question="Is participation in community events free?" answer="Most embassy-led events are free or low-cost, while private club memberships may require a monthly or annual fee." />
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
        {isOpen ? <ChevronUp size={18} className="text-cyan-600" /> : <ChevronDown size={18} className="text-slate-400" />}
      </button>
      {isOpen && <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{answer}</div>}
    </div>
  );
}
