"use client";

import { 
  MapPin, Compass, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, Tent, Camera, Sun, Waves
} from "lucide-react";
import { useState } from "react";

export default function WeekendDestinationsPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Sun size={16} /> Short Getaways
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Popular Weekend Destinations in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Discover the best spots for a short weekend break, from pristine beaches and mountain retreats to desert camping adventures.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Top Weekend Spots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
          <SpotCard 
            icon={<Waves className="text-blue-500" />}
            title="Red Sea Beaches"
            city="Jeddah / Yanbu"
            desc="Crystal clear waters ideal for scuba diving, snorkeling, and luxury boat trips."
            bestFor="Relaxation & Water Sports"
          />
          <SpotCard 
            icon={<Tent className="text-[#006C35]" />}
            title="Desert Camping"
            city="Riyadh / Tabuk"
            desc="Stunning sand dunes and clear skies perfect for stargazing and bonfire nights."
            bestFor="Adventure & Peace"
          />
          <SpotCard 
            icon={<MapPin className="text-red-500" />}
            title="Taif Mountains"
            city="Near Jeddah"
            desc="Cooler temperatures, rose farms, and cable car rides with panoramic views."
            bestFor="Family Trips & Weather"
          />
          <SpotCard 
            icon={<Waves className="text-cyan-500" />}
            title="Al Khobar Corniche"
            city="Eastern Province"
            desc="Vibrant waterfront with high-end dining, parks, and proximity to Bahrain."
            bestFor="City Breaks & Shopping"
          />
        </div>

        {/* Travel Tips */}
        <div className="bg-white border border-slate-200 text-slate-900 p-10 rounded-[2.5rem] mb-12 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#006C35] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
           <h3 className="text-2xl font-black mb-6 flex items-center gap-2 text-[#00E676]"><Info size={24}/> Planning Your Getaway</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                 <h4 className="font-bold text-slate-200">Book Early</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">Resorts and popular camps sell out fast during peak winter weekends.</p>
              </div>
              <div className="space-y-2">
                 <h4 className="font-bold text-slate-200">Check Weather</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">Desert temperatures can drop significantly at night—pack accordingly.</p>
              </div>
              <div className="space-y-2">
                 <h4 className="font-bold text-slate-200">Local Apps</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">Use apps like 'Visit Saudi' and 'Hungerstation' for bookings and meals.</p>
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Can I go desert camping alone?" answer="It is highly recommended to go with a group or a professional tour guide, as desert navigation can be tricky and mobile signals are often weak in remote dunes." />
            <FAQItem question="Are there public beaches for families?" answer="Yes, many cities have public waterfronts (Corniche), while private beach clubs and resorts offer more secluded facilities for families." />
            <FAQItem question="Is the Bahrain bridge open for weekend travel?" answer="Yes, the King Fahd Causeway is open for residents with a valid Exit-Reentry visa, making Bahrain a very popular weekend destination from Khobar." />
          </div>
        </div>

      </div>
    </div>
  );
}

function SpotCard({ icon, title, city, desc, bestFor }: { icon: any, title: string, city: string, desc: string, bestFor: string }) {
  return (
    <div className="bg-white  p-8 rounded-3xl border border-slate-200  shadow-sm hover:border-orange-500 transition-all group">
       <div className="mb-6 p-4 bg-slate-50  rounded-2xl inline-block group-hover:scale-110 transition-transform">{icon}</div>
       <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="px-3 py-1 bg-slate-100  rounded-lg text-[10px] font-black text-slate-500 uppercase">{city}</span>
       </div>
       <p className="text-xs text-slate-500 mb-6 leading-relaxed">{desc}</p>
       <div className="p-3 bg-orange-50  rounded-xl border border-orange-100 flex items-center gap-2">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Best For:</span>
          <span className="text-xs font-bold">{bestFor}</span>
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
        {isOpen ? <ChevronUp size={18} className="text-orange-600" /> : <ChevronDown size={18} className="text-slate-400" />}
      </button>
      {isOpen && <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{answer}</div>}
    </div>
  );
}
