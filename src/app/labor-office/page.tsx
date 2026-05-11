"use client";

import { useState } from "react";
import { 
  ShieldCheck, Clock, MapPin, Building2, PhoneCall, Globe, 
  Briefcase, Users, FileText, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, DollarSign, ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/language-context";

export default function MaktabAmalGuide() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-left">
      
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-6">
            <ShieldCheck size={16} /> Official Advisory Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
            {t('labor_title')} <span className="text-[#006C35]">(Labor Office)</span> <br/>
            <span className="text-2xl md:text-3xl text-slate-500 mt-2 block font-light">{t('labor_subtitle')}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
            {t('labor_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-16 relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('labor_intro_title')}</h2>
            <p className="text-slate-600 leading-relaxed mb-4 font-light">
              {t('labor_intro_desc')}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-700 text-left">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#006C35]" /> {t('labor_feature_1')}</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#006C35]" /> {t('labor_feature_2')}</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#006C35]" /> {t('labor_feature_3')}</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#006C35]" /> {t('labor_feature_4')}</li>
            </ul>
          </div>
          <div className="w-full md:w-auto shrink-0 bg-slate-50 p-6 rounded-xl border border-slate-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#006C35] mb-1">920001177</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Unified Call Center 24/7</div>
              <a href="tel:920001177" className="btn-primary w-full py-2 shadow-lg shadow-[#006C35]/20">Call Now</a>
            </div>
          </div>
        </div>

        {/* Services Overview Table */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">{t('labor_services_title')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              {t('labor_services_desc')}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-8 py-5 text-sm font-bold text-[#006C35] uppercase tracking-wider w-1/3 text-left">Category</th>
                    <th className="px-8 py-5 text-sm font-bold text-[#006C35] uppercase tracking-wider text-left">Services Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-900 align-top">{t('labor_cat_work')}</td>
                    <td className="px-8 py-5 text-slate-600 leading-relaxed font-light text-sm">Issuance of new work permits, renewals, cancellation handling, work eligibility verification, employer-linked authorization updates</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-900 align-top">{t('labor_cat_contract')}</td>
                    <td className="px-8 py-5 text-slate-600 leading-relaxed font-light text-sm">Contract registration, digital validation, amendments, job role updates, contract termination processing, dispute prevention support</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-900 align-top">{t('labor_cat_wage')}</td>
                    <td className="px-8 py-5 text-slate-600 leading-relaxed font-light text-sm">Salary monitoring, delayed payment detection, wage compliance enforcement, payroll record verification, employer compliance tracking</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-900 align-top">{t('labor_cat_dispute')}</td>
                    <td className="px-8 py-5 text-slate-600 leading-relaxed font-light text-sm">Wage disputes, contract violations, unfair termination cases, mediation between worker and employer, escalation to legal review</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-900 align-top">{t('labor_cat_mobility')}</td>
                    <td className="px-8 py-5 text-slate-600 leading-relaxed font-light text-sm">Employer transfer requests, eligibility checks, status tracking, approval/rejection handling, mobility regulation compliance</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-900 align-top">{t('labor_cat_compliance')}</td>
                    <td className="px-8 py-5 text-slate-600 leading-relaxed font-light text-sm">Safety inspections, labor law compliance checks, violation reporting, corrective action monitoring, workplace standard enforcement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Digital Ecosystem & Fees */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">
              Digital Platforms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <PlatformCard 
                title="Qiwa (قوى)" 
                desc="Primary platform for work permits, employee transfers, and contract documentation. Over 3.8M monthly users." 
                url="www.qiwa.sa" 
              />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-left">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><FileText size={18} className="text-[#006C35]" /> Required Documents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600 font-light text-left">
                <ul className="list-disc space-y-2 ml-5">
                  <li>Valid Iqama / National ID</li>
                  <li>Original Passport & Copy</li>
                  <li>Employment Contract</li>
                </ul>
                <ul className="list-disc space-y-2 ml-5">
                  <li>Commercial Registration (Employers)</li>
                  <li>Salary Slips (For Complaints)</li>
                  <li>Medical Insurance Certificate</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#006C35] text-white rounded-2xl p-8 shadow-xl h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 rounded-lg"><DollarSign size={20} /></div>
              <h3 className="text-xl font-bold text-white">Official Fees</h3>
            </div>
            <div className="space-y-4 flex-grow text-left">
              <FeeRow service="Work Permit (Annual)" fee="9,600" />
              <FeeRow service="Profession Change" fee="1,000" />
              <FeeRow service="Establishment Transfer" fee="2,000" />
              <FeeRow service="Iqama Renewal" fee="650" />
              <FeeRow service="Dependent Iqama" fee="400" />
            </div>
            <div className="mt-6 text-xs text-white/70 italic bg-black/10 p-3 rounded-lg">
              Fees are subject to change. Verify rates on the Qiwa platform before payment. Processing times average 1-5 days.
            </div>
          </div>

        </div>

        {/* Locations & Hours Table */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('labor_location_title')}</h2>
              <p className="text-slate-600 font-light text-left">{t('labor_location_subtitle')}</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0 text-sm">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock size={16} className="text-[#006C35]" /> <span className="font-medium text-slate-700">Sun-Thu: 8:00 AM - 2:20 PM</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LocationCard city="Riyadh" name="Main Labor Office" address="King Fahd Road, Al Olaya District" map="https://www.google.com/maps/search/?api=1&query=Riyadh+Ministry+of+Human+Resources+Labor+Office+King+Fahd+Road+Al+Olaya" />
            <LocationCard city="Jeddah" name="Labor Office" address="Madinah Road, Al Sharafeyah" map="https://www.google.com/maps/search/?api=1&query=Jeddah+Labor+Office+Madinah+Road+Al+Sharafeyah" />
            <LocationCard city="Dammam" name="Eastern Province Office" address="King Saud Street, Dammam" map="https://www.google.com/maps/search/?api=1&query=Dammam+Labor+Office+King+Saud+Street" />
            <LocationCard city="Makkah" name="Labor Office" address="Al Aziziyah District, Makkah" map="https://www.google.com/maps/search/?api=1&query=Makkah+Labor+Office+Al+Aziziyah" />
          </div>
          <p className="text-xs text-slate-400 mt-4 italic font-light text-left">* Walk-ins are discouraged. Online appointments via Qiwa are mandatory.</p>
        </div>

        {/* FAQs */}
        <div className="pb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
            {t('labor_faq_title')}
          </h2>
          <div className="space-y-4">
            <FaqAccordion question="Can I visit Maktab Amal without an appointment?" answer="Walk-ins are mostly discouraged. Online appointment through the Qiwa portal is mandatory for most services." />
            <FaqAccordion question="How long does it take to resolve a labor dispute?" answer="Simple cases are generally resolved within 15 working days. Complex cases may take 30-45 days." />
            <FaqAccordion question="How can I complain about an employer?" answer="You can use the MHRSD online platform, call 19911, or file a complaint directly at the labor court." />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformCard({ title, desc, url }: { title: string, desc: string, url: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#006C35] transition-colors group text-left">
      <div className="flex items-center gap-2 mb-3">
        <Globe size={18} className="text-[#006C35]" />
        <h4 className="font-bold text-slate-900 group-hover:text-[#006C35] transition-colors">{title}</h4>
      </div>
      <p className="text-sm text-slate-600 mb-4 font-light">{desc}</p>
      <div className="text-xs font-bold text-[#006C35] bg-[#006C35]/10 inline-block px-2 py-1 rounded">
        {url}
      </div>
    </div>
  );
}

function FeeRow({ service, fee }: { service: string, fee: string }) {
  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
      <span className="text-sm font-medium text-white/90">{service}</span>
      <span className="font-bold text-lg text-white">SAR {fee}</span>
    </div>
  );
}

function LocationCard({ city, name, address, map }: { city: string, name: string, address: string, map: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#006C35] transition-colors shadow-sm flex flex-col h-full group text-left">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#006C35] transition-colors">{city} – {name}</h3>
          <p className="text-sm text-slate-500 mt-1 flex items-center gap-1 font-light">
            <MapPin size={14} className="text-slate-400" /> {address}
          </p>
        </div>
      </div>
      <div className="mt-auto pt-4 border-t border-slate-100">
        <a 
          href={map} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm font-bold text-[#006C35] flex items-center gap-1 hover:underline w-max"
        >
          View on Google Maps <Globe size={14} />
        </a>
      </div>
    </div>
  );
}

function FaqAccordion({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm text-left">
      <button 
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-900 px-4">{question}</span>
        {isOpen ? <ChevronUp className="text-slate-400 shrink-0" size={20} /> : <ChevronDown className="text-slate-400 shrink-0" size={20} />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2 font-light">
          {answer}
        </div>
      )}
    </div>
  );
}
