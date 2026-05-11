"use client";

import { 
  Heart, MapPin, Globe, CheckCircle2, ChevronDown, ChevronUp, Users, Info, ShieldCheck, Landmark, AlertCircle
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function UmrahGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can residents perform Umrah without a permit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, all residents must obtain an official Umrah permit through the Nusuk app before traveling to Makkah to avoid fines and legal issues."
        }
      },
      {
        "@type": "Question",
        "name": "How often can I perform Umrah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regulations may vary, but generally, you can apply for a new permit once your current permit has been used or expired, subject to availability on the Nusuk platform."
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
            <Landmark size={16} /> Official Religious Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            Umrah Guide for Residents in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Complete guide for expatriates performing Umrah, including permits, Nusuk registration, and official requirements.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#006C35]" /> Official Umrah Permit System
              </h2>
              <p className="text-slate-600  leading-relaxed mb-4">
                Umrah is the voluntary Islamic pilgrimage performed in Makkah throughout the year. Unlike Hajj, Umrah is not limited to specific dates.
              </p>
              <p className="text-slate-600  leading-relaxed">
                Residents in Saudi Arabia — including expatriates with a valid Iqama — must obtain a permit through the official <strong>Nusuk platform</strong> before performing Umrah.
              </p>
            </div>
            <div className="bg-[#006C35]/5 p-6 rounded-2xl border border-[#006C35]/10 w-full md:w-72">
              <h3 className="font-bold text-slate-900  mb-4 text-center">Eligibility</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> Saudi Citizens
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> GCC Nationals
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> Expatriate Residents
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 ">
                  <CheckCircle2 size={14} className="text-[#006C35]" /> Visa Holders
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Requirements & Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6">Main Requirements</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600 ">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center mt-0.5">✓</div>
                <span>Valid Iqama & Active Passport</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 ">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center mt-0.5">✓</div>
                <span>Nusuk account registration</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 ">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center mt-0.5">✓</div>
                <span>Tawakkalna/Nafath verification</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 ">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center mt-0.5">✓</div>
                <span>Pre-arranged transportation</span>
              </li>
            </ul>
          </div>

          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6">Booking Process</h3>
            <div className="space-y-4">
              <ProcessStep num={1} title="Create Nusuk Account" desc="Use your Iqama and mobile number." />
              <ProcessStep num={2} title="Select Umrah Permit" desc="Choose date, time slot, and companions." />
              <ProcessStep num={3} title="Receive Digital Permit" desc="Appears in app and linked gov systems." />
              <ProcessStep num={4} title="Travel to Makkah" desc="Carry your digital permit on your phone." />
            </div>
          </div>
        </div>

        {/* Violations & Penalties */}
        <div className="bg-red-50  border border-red-100  rounded-3xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4 text-red-600">
            <AlertCircle size={24} />
            <h3 className="text-xl font-bold">Common Violations & Penalties</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-2 text-sm text-red-700 ">
              <li>• Entering restricted Hajj zones without authorization</li>
              <li>• Carrying or using fake permits</li>
              <li>• Overstaying visit visas</li>
              <li>• Performing Hajj without an official permit</li>
            </ul>
            <div className="bg-white/50  p-4 rounded-xl border border-red-100">
               <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Penalties include:</p>
               <p className="text-sm font-medium">Heavy Fines, Deportation, and Travel Bans from the Kingdom.</p>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Transportation Options</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TransportCard title="Haramain Train" desc="High-speed rail from Jeddah/Madinah" />
            <TransportCard title="SAPTCO Bus" desc="Reliable national bus service" />
            <TransportCard title="Private Transport" desc="Personal cars or taxi services" />
          </div>
        </div>

        {/* Official Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
           <a href="https://www.nusuk.sa" target="_blank" className="p-6 bg-[#006C35] text-white rounded-2xl shadow-xl flex items-center justify-between hover:scale-[1.02] transition-transform">
              <div>
                <h4 className="font-bold">Nusuk Platform</h4>
                <p className="text-xs text-slate-900/70">Official Umrah & Visit Portal</p>
              </div>
              <Globe size={24} />
           </a>
           <a href="https://www.haj.gov.sa" target="_blank" className="p-6 bg-white border border-slate-200 text-slate-900 rounded-2xl shadow-xl flex items-center justify-between hover:scale-[1.02] transition-transform">
              <div>
                <h4 className="font-bold">Ministry of Hajj</h4>
                <p className="text-xs text-slate-900/70">Policies & Official News</p>
              </div>
              <Landmark size={24} />
           </a>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Can children perform Umrah?" answer="Yes, but they may require separate registration on the Nusuk app depending on current age restrictions." />
            <FAQItem question="Is entry restricted during Hajj season?" answer="Yes, entry to Makkah is strictly restricted for residents without Hajj permits during the pilgrimage season." />
            <FAQItem question="How do I verify my permit?" answer="Your permit is verified digitally at checkpoints via the Nusuk or Tawakkalna apps." />
          </div>
        </div>

      </div>
    </div>
  );
}

function ProcessStep({ num, title, desc }: { num: number, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-6 h-6 rounded-full bg-[#006C35] text-white flex items-center justify-center text-[10px] font-black">{num}</div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 ">{title}</h4>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

function TransportCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 bg-white  rounded-2xl border border-slate-200  shadow-sm">
      <h4 className="font-bold text-slate-900  mb-1">{title}</h4>
      <p className="text-xs text-slate-500">{desc}</p>
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
