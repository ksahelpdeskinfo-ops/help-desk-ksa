"use client";

import { 
  MapPin, Globe, Compass, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, Plane, Camera, Tent
} from "lucide-react";
import { useState } from "react";

export default function DomesticTourismPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Compass size={16} /> Explore the Kingdom
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Domestic Tourism in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Guide to leisure travel, cultural heritage sites, and modern attractions for residents and visitors within Saudi Arabia.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <Globe className="text-blue-500" /> Vision 2030 Tourism
              </h2>
              <p className="text-slate-600  leading-relaxed mb-6">
                Saudi Arabia has rapidly developed its tourism infrastructure, opening up previously inaccessible heritage sites and building world-class resorts for domestic and international travelers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-3 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Destinations</span>
                    <p className="text-xs font-bold">Mountains to Beaches</p>
                 </div>
                 <div className="p-3 bg-slate-50  rounded-xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Infrastructure</span>
                    <p className="text-xs font-bold">New Resorts & Roads</p>
                 </div>
              </div>
            </div>
            <div className="bg-blue-50/50  p-6 rounded-2xl border border-blue-100 w-full md:w-72 text-center">
              <h3 className="font-bold text-blue-700 mb-4">Official Authority</h3>
              <a href="https://www.visitsaudi.com" target="_blank" className="p-4 bg-white  rounded-2xl border border-blue-100 block hover:scale-105 transition-transform">
                 <span className="text-xs font-bold">Visit Saudi Portal →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Popular Destinations Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Popular Domestic Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <DestinationCard title="AlUla" type="Heritage" desc="Ancient tombs and stunning desert landscapes." />
             <DestinationCard title="Abha" type="Mountains" desc="Cool climates and green mountain peaks." />
             <DestinationCard title="Jeddah" type="Coastal" desc="Historic Al Balad and Red Sea resorts." />
             <DestinationCard title="Riyadh" type="Metropolitan" desc="Modern landmarks and seasonal festivals." />
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white border border-slate-200 text-slate-900 p-10 rounded-[2.5rem] mb-12 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
           <h3 className="text-2xl font-black mb-6 flex items-center gap-2 text-blue-400"><Compass size={24}/> Key Benefits for Residents</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                 <h4 className="font-bold text-blue-300">Improved Highways</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">High-speed road networks connecting major tourist hubs across the Kingdom.</p>
              </div>
              <div className="space-y-2">
                 <h4 className="font-bold text-blue-300">Resort Access</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">Development of luxury and family resorts in Neom, the Red Sea, and AlUla.</p>
              </div>
              <div className="space-y-2">
                 <h4 className="font-bold text-blue-300">Seasonal Festivals</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">Events like Riyadh Season and Jeddah Season offering entertainment and culture.</p>
              </div>
           </div>
        </div>

        {/* Travel Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="p-8 bg-white  rounded-3xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Plane className="text-blue-500"/> Domestic Travel</h3>
              <div className="space-y-4">
                 <div className="flex justify-between items-center p-3 bg-slate-50  rounded-xl">
                    <span className="text-sm font-bold">Saudia / flynas</span>
                    <span className="text-xs text-slate-500">Fast connection</span>
                 </div>
                 <div className="flex justify-between items-center p-3 bg-slate-50  rounded-xl">
                    <span className="text-sm font-bold">Haramain Train</span>
                    <span className="text-xs text-slate-500">Makkah/Jeddah/Madinah</span>
                 </div>
                 <div className="flex justify-between items-center p-3 bg-slate-50  rounded-xl">
                    <span className="text-sm font-bold">Car Rental</span>
                    <span className="text-xs text-slate-500">Ideal for road trips</span>
                 </div>
              </div>
           </div>
           <div className="p-8 bg-white  rounded-3xl border border-slate-200  shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Tent className="text-[#006C35]"/> Adventure & Heritage</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#006C35] rounded-full"></div> Desert camping and stargazing experiences.</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#006C35] rounded-full"></div> Scuba diving and snorkeling in the Red Sea.</li>
                 <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#006C35] rounded-full"></div> UNESCO World Heritage site tours.</li>
              </ul>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Do residents need a permit to travel between cities?" answer="No, residents with a valid Iqama can travel freely between all cities in Saudi Arabia without any internal permits, except during specific seasons like Hajj for Makkah entry." />
            <FAQItem question="What is the best time for domestic travel?" answer="Winter (November to March) is ideal for desert and coastal trips, while Summer (June to August) is popular for the cooler mountain regions like Abha and Taif." />
            <FAQItem question="Are historical sites open to everyone?" answer="Yes, most major historical and heritage sites like Hegra in AlUla and Diriyah in Riyadh are open to all visitors with a valid ticket or registration." />
          </div>
        </div>

      </div>
    </div>
  );
}

function DestinationCard({ title, type, desc }: { title: string, type: string, desc: string }) {
  return (
    <div className="p-6 bg-white  rounded-2xl border border-slate-200  shadow-sm hover:border-blue-500 transition-all">
       <span className="text-[10px] uppercase font-black text-blue-500 block mb-1">{type}</span>
       <h4 className="font-bold text-slate-900  mb-2">{title}</h4>
       <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
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
