"use client";

import { 
  MapPin, Globe, CheckCircle2, ChevronDown, ChevronUp, Info, Building2, Landmark, DollarSign, Heart, Briefcase, TrendingUp
} from "lucide-react";
import { useState } from "react";

export default function BestCitiesExpatsPage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <MapPin size={16} /> Living in KSA
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Best Cities for Expats in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            An expert comparison of the top Saudi cities based on job opportunities, cost of living, family lifestyle, and savings.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Top 3 Cities Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
          <CityCard 
            city="Riyadh"
            tag="Business Hub"
            desc="The capital city and financial heart of the Kingdom. Highest job concentration."
            pros={["Highest Salaries", "Metropolitan Life", "Major Festivals"]}
            cons={["High Traffic", "Higher Cost of Living"]}
          />
          <CityCard 
            city="Jeddah"
            tag="Coastal Life"
            desc="The gateway to Makkah and a vibrant coastal city with a more relaxed vibe."
            pros={["Red Sea Access", "Historic Heritage", "Balanced Lifestyle"]}
            cons={["Humidity in Summer", "Ongoing Urban Re-dev"]}
          />
          <CityCard 
            city="Dammam / Khobar"
            tag="Industrial Hub"
            desc="The heart of the oil industry. Very family-friendly and close to Bahrain."
            pros={["Lower Living Costs", "Proximity to Bahrain", "Strong Oil Sector"]}
            cons={["Smaller Entertainment Scene"]}
          />
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white  rounded-3xl border border-slate-200  overflow-hidden shadow-sm mb-12">
           <div className="p-8 border-b border-slate-100 ">
              <h2 className="text-2xl font-bold">City Comparison Matrix</h2>
              <p className="text-xs text-slate-500 mt-2">Which city fits your career and family goals?</p>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-slate-50 ">
                       <th className="px-6 py-4 text-xs font-black uppercase text-slate-400">City</th>
                       <th className="px-6 py-4 text-xs font-black uppercase text-slate-400">Salary Potential</th>
                       <th className="px-6 py-4 text-xs font-black uppercase text-slate-400">Cost of Living</th>
                       <th className="px-6 py-4 text-xs font-black uppercase text-slate-400">Family Suitability</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm">
                    <tr className="border-b border-slate-50 ">
                       <td className="px-6 py-4 font-bold text-slate-900 ">Riyadh</td>
                       <td className="px-6 py-4 text-[#006C35] font-black">Very High</td>
                       <td className="px-6 py-4 text-red-500 font-bold">High</td>
                       <td className="px-6 py-4">High</td>
                    </tr>
                    <tr className="border-b border-slate-50 ">
                       <td className="px-6 py-4 font-bold text-slate-900 ">Jeddah</td>
                       <td className="px-6 py-4 text-[#006C35] font-black">High</td>
                       <td className="px-6 py-4 text-orange-500 font-bold">Medium</td>
                       <td className="px-6 py-4">Very High</td>
                    </tr>
                    <tr>
                       <td className="px-6 py-4 font-bold text-slate-900 ">Eastern Province</td>
                       <td className="px-6 py-4 text-[#006C35] font-black">Medium-High</td>
                       <td className="px-6 py-4 text-[#006C35] font-bold">Low-Medium</td>
                       <td className="px-6 py-4 font-black text-[#006C35]">Excellent</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>

        {/* Factors for Expats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="bg-white border border-slate-200 text-slate-900 p-8 rounded-3xl shadow-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-cyan-400"><TrendingUp size={20}/> Riyadh: The Jobs Machine</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">As the center of government and global business, Riyadh attracts the majority of high-level professional roles. It is the best choice for career growth but requires managing high housing costs and commute times.</p>
              <div className="flex gap-4">
                 <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-[10px] font-black uppercase">HQ Central</div>
                 <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-[10px] font-black uppercase">Tech Hub</div>
              </div>
           </div>
           <div className="bg-[#006C35]/5 p-8 rounded-3xl border border-[#006C35]/10">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#006C35]"><Heart size={20}/> Family-Friendly Khobar</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">Al Khobar is often rated as the most 'livable' city for families. With lower traffic, high-quality international schools, and easy weekend access to Bahrain, it offers a high quality of life with better savings potential.</p>
              <ul className="space-y-2">
                 <li className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><CheckCircle2 size={12} className="text-[#006C35]"/> Lower Housing Rent</li>
                 <li className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><CheckCircle2 size={12} className="text-[#006C35]"/> Better Air Quality</li>
              </ul>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Which city is the cheapest for expats?" answer="Generally, cities in the Eastern Province (Dammam/Khobar) and smaller cities like Jubail or Yanbu offer the best balance of decent salaries and lower living costs compared to Riyadh and Jeddah." />
            <FAQItem question="Is Riyadh safe for expat families?" answer="Riyadh is extremely safe with a very low crime rate. Most expat families live in dedicated compounds or modern neighborhoods like Al Olaya or Al Malqa which are very secure and family-friendly." />
            <FAQItem question="Can I move between cities for work?" answer="Yes, with your employer's coordination, you can transfer your job location. Many global companies have offices in both Riyadh and Jeddah, allowing for internal transfers." />
          </div>
        </div>

      </div>
    </div>
  );
}

function CityCard({ city, tag, desc, pros, cons }: { city: string, tag: string, desc: string, pros: string[], cons: string[] }) {
  return (
    <div className="bg-white  p-8 rounded-3xl border border-slate-200  shadow-sm hover:border-cyan-500 transition-all">
       <span className="text-[10px] uppercase font-black text-cyan-500 block mb-1">{tag}</span>
       <h3 className="text-xl font-bold mb-3">{city}</h3>
       <p className="text-xs text-slate-500 mb-6 leading-relaxed">{desc}</p>
       <div className="space-y-4">
          <div>
             <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">The Pros</h5>
             <ul className="space-y-1">
                {pros.map((p, i) => (
                   <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><CheckCircle2 size={12} className="text-[#006C35]"/> {p}</li>
                ))}
             </ul>
          </div>
          <div>
             <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">The Cons</h5>
             <ul className="space-y-1">
                {cons.map((p, i) => (
                   <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> {p}</li>
                ))}
             </ul>
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
