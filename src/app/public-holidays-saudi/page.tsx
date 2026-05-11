"use client";

import { 
  CalendarDays, Star, Moon, Flag, Building2, UserCircle, 
  MapPin, HelpCircle, FileText, CheckCircle2, ChevronDown, ChevronUp, AlertCircle
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function PublicHolidaysGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <CalendarDays size={16} /> Official Calendar Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            Public Holidays in Saudi Arabia
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            Saudi Arabia follows both the Gregorian and Hijri calendars to determine official holidays. This guide covers all official religious and national holidays, sector differences, and planning tips.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Key Facts Summary */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <Star className="text-[#006C35]" /> Key Facts at a Glance
            </h2>
            <p className="text-slate-600  leading-relaxed mb-4">
              Most religious holidays shift every year due to moon sighting. Islamic dates may change by 1–2 days depending on official announcements.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700  mt-6">
              <li className="flex gap-2 items-start"><CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={16} /> Total official holidays: 4</li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={16} /> Total days off (approx.): 13–15 days</li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={16} /> Weekend: Friday & Saturday</li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={16} /> Calendar system: Hijri + Gregorian</li>
              <li className="flex gap-2 items-start md:col-span-2"><CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={16} /> Authority responsible: Ministry of Human Resources and Social Development</li>
            </ul>
          </div>
        </div>

        {/* Complete List Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Complete List of Official Holidays</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200 ">Holiday</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Date </th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Duration</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Type</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Founding Day</td>
                  <td className="px-6 py-4">February 22</td>
                  <td className="px-6 py-4">1 day</td>
                  <td className="px-6 py-4 font-medium text-blue-600">National</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Eid al-Fitr</td>
                  <td className="px-6 py-4">March 20–23 <span className="text-xs text-slate-400">(approx.)</span></td>
                  <td className="px-6 py-4">4+ days</td>
                  <td className="px-6 py-4 font-medium text-[#006C35]">Religious</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Eid al-Adha</td>
                  <td className="px-6 py-4">May 27–31 <span className="text-xs text-slate-400">(approx.)</span></td>
                  <td className="px-6 py-4">4+ days</td>
                  <td className="px-6 py-4 font-medium text-[#006C35]">Religious</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">National Day</td>
                  <td className="px-6 py-4">September 23</td>
                  <td className="px-6 py-4">1 day</td>
                  <td className="px-6 py-4 font-medium text-blue-600">National</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Deep Dive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Religious Holidays */}
          <div className="bg-[#006C35]/5 rounded-xl border border-[#006C35]/10 p-6 sm:p-8">
            <h3 className="font-bold text-xl text-[#006C35] mb-6 flex items-center gap-2">
              <Moon size={24} /> Religious Holidays
            </h3>
            
            <div className="mb-6 bg-white  p-5 rounded-lg border border-slate-200 ">
              <strong className="text-lg text-slate-900  block mb-1">Eid al-Fitr</strong>
              <p className="text-sm text-slate-500 mb-3 italic">Expected: March 20–23</p>
              <p className="text-sm text-slate-600  mb-3">Marks the end of Ramadan fasting. One of the most important celebrations.</p>
              <ul className="list-disc ml-4 space-y-1 text-sm text-slate-700 ">
                <li>Special Eid prayers</li>
                <li>Family gatherings & traditional meals</li>
                <li>Charity & gift giving</li>
                <li>Nationwide closures</li>
              </ul>
            </div>

            <div className="bg-white  p-5 rounded-lg border border-slate-200 ">
              <strong className="text-lg text-slate-900  block mb-1">Eid al-Adha</strong>
              <p className="text-sm text-slate-500 mb-3 italic">Expected: May 27–31</p>
              <p className="text-sm text-slate-600  mb-3">Coincides with the annual pilgrimage (Hajj) season.</p>
              <ul className="list-disc ml-4 space-y-1 text-sm text-slate-700 ">
                <li>Ritual sacrifice (Qurbani)</li>
                <li>Distribution of meat to the needy</li>
                <li>Extended holiday travel peak</li>
              </ul>
            </div>
          </div>

          {/* National Holidays */}
          <div className="bg-blue-50/50  rounded-xl border border-blue-100  p-6 sm:p-8">
            <h3 className="font-bold text-xl text-blue-600 mb-6 flex items-center gap-2">
              <Flag size={24} /> National Holidays
            </h3>

            <div className="mb-6 bg-white  p-5 rounded-lg border border-slate-200 ">
              <strong className="text-lg text-slate-900  block mb-1">Founding Day</strong>
              <p className="text-sm text-slate-500 mb-3 italic">Date: February 22</p>
              <p className="text-sm text-slate-600  mb-3">Marks the establishment of the first Saudi state in the 18th century.</p>
              <ul className="list-disc ml-4 space-y-1 text-sm text-slate-700 ">
                <li>Cultural and historical events</li>
                <li>Traditional heritage displays</li>
                <li>Public festivals</li>
              </ul>
            </div>

            <div className="bg-white  p-5 rounded-lg border border-slate-200 ">
              <strong className="text-lg text-slate-900  block mb-1">National Day</strong>
              <p className="text-sm text-slate-500 mb-3 italic">Date: September 23</p>
              <p className="text-sm text-slate-600  mb-3">Celebrates the unification of the country in 1932.</p>
              <ul className="list-disc ml-4 space-y-1 text-sm text-slate-700 ">
                <li>Fireworks in major cities</li>
                <li>Cultural shows and concerts</li>
                <li>Street decorations in national colors</li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Private vs Public Sector */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Private Sector vs Public Sector Holidays</h2>
          <p className="text-slate-600  mb-6">Private employees and government employees may receive different holiday durations. Private sector employees are legally entitled to paid public holidays under labor regulations.</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200  w-1/3">Holiday Type</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Private Sector</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Government Sector</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Eid holidays</td>
                  <td className="px-6 py-4 text-orange-500 font-bold">Minimum 4 days</td>
                  <td className="px-6 py-4 text-[#006C35] font-bold">Extended (often 7–10+ days)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Founding Day</td>
                  <td className="px-6 py-4">1 day</td>
                  <td className="px-6 py-4">1 day</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">National Day</td>
                  <td className="px-6 py-4">1 day</td>
                  <td className="px-6 py-4">1 day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Planning Tips */}
        <div className="bg-white  rounded-2xl p-8 border border-slate-200  mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900  mb-8 text-center">Planning Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PlanningCard title="For Employees" icon={<UserCircle size={24} className="text-blue-500" />}>
              <ul className="space-y-2 text-sm text-slate-600  list-disc ml-4">
                <li>Apply for leave early around Eid periods</li>
                <li>Combine weekends for longer breaks</li>
                <li>Monitor official announcements for exact dates</li>
              </ul>
            </PlanningCard>
            
            <PlanningCard title="For Businesses" icon={<Building2 size={24} className="text-[#006C35]" />}>
              <ul className="space-y-2 text-sm text-slate-600  list-disc ml-4">
                <li>Plan deadlines outside Eid periods</li>
                <li>Prepare for reduced operations during holidays</li>
                <li>Update working hours in advance</li>
              </ul>
            </PlanningCard>
            
            <PlanningCard title="For Travelers" icon={<MapPin size={24} className="text-orange-500" />}>
              <ul className="space-y-2 text-sm text-slate-600  list-disc ml-4">
                <li>Book early during Eid seasons</li>
                <li>Expect high travel demand inside the country</li>
                <li>Avoid peak travel near pilgrimage periods</li>
              </ul>
            </PlanningCard>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Are Islamic holiday dates fixed?" answer="No, they follow the Hijri calendar and change every year based on official moon sighting." />
            <FaqItem question="Do expats get public holidays in Saudi Arabia?" answer="Yes, all employees (including expatriates) are entitled to official paid holidays under Saudi labor law." />
            <FaqItem question="Is Friday a holiday in Saudi Arabia?" answer="Yes, the official weekend for the majority of the workforce is Friday and Saturday." />
            <FaqItem question="When is Eid al-Fitr?" answer="It is expected around March 20–23, depending on the moon sighting." />
            <FaqItem question="How many public holidays are there?" answer="There are 4 official public holidays (2 National, 2 Religious), but total days off are usually 13–15 days including the extended Eid periods." />
          </div>
        </div>

      </div>
    </div>
  );
}

function PlanningCard({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="bg-slate-50  p-5 rounded-xl border border-slate-200  flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-bold text-slate-900 ">{title}</h3>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white  border border-slate-200  rounded-xl overflow-hidden shadow-sm">
      <button 
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50  transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-900  pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-slate-400 shrink-0" size={20} /> : <ChevronDown className="text-slate-400 shrink-0" size={20} />}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-1 text-sm text-slate-600  leading-relaxed border-t border-slate-100  mt-1">
          {answer}
        </div>
      )}
    </div>
  );
}
