"use client";

import { 
  Briefcase, AlertTriangle, ShieldCheck, Clock, MonitorPlay, 
  MapPin, HelpCircle, FileText, CheckCircle2, ChevronDown, ChevronUp, DollarSign
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function PartTimeJobsGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Briefcase size={16} /> Official Employment Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            Part-Time Jobs in Saudi Arabia: Rules, Opportunities & Salaries
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            Part-time work in Saudi Arabia has become more structured and accessible in recent years. With labor market reforms and flexible work arrangements, individuals including expatriates, students, and residents can now explore legal part-time opportunities across multiple industries.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section & Warning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 relative z-10">
            <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <ShieldCheck className="text-[#006C35]" /> Is Part-Time Work Legal?
            </h2>
            <p className="text-slate-600  leading-relaxed mb-4">
              Yes, part-time work is legally recognized in Saudi Arabia under labor regulations that allow flexible working arrangements. Part-time employment generally refers to any job where working hours are less than the standard full-time working schedule.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-[#006C35] shrink-0 mt-0.5" /> Part-time contracts are legally allowed under Saudi labor regulations
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-[#006C35] shrink-0 mt-0.5" /> Work hours must be clearly defined in the contract
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-[#006C35] shrink-0 mt-0.5" /> Unauthorized work outside visa conditions is strictly prohibited
              </li>
            </ul>
          </div>

          <div className="bg-orange-50  rounded-2xl p-8 border border-orange-200  relative z-10">
            <h3 className="text-lg font-bold text-orange-700  mb-4 flex items-center gap-2">
              <AlertTriangle size={20} /> Legal Warning for Expats
            </h3>
            <p className="text-sm text-slate-700  mb-4">
              Expatriates must be especially careful. Always confirm your work eligibility before accepting any job.
            </p>
            <ul className="space-y-2 text-sm text-slate-700 ">
              <li className="flex gap-2"><span>•</span> Working without sponsor permission may violate visa conditions</li>
              <li className="flex gap-2"><span>•</span> Unauthorized secondary jobs can lead to penalties</li>
              <li className="flex gap-2"><span>•</span> Residency permits can be affected in serious violations</li>
            </ul>
          </div>
        </div>

        {/* Eligibility Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Who Can Work Part-Time?</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200 ">Category</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Eligibility</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Conditions</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Saudi Nationals</td>
                  <td className="px-6 py-4 text-[#006C35] font-bold">Fully Allowed</td>
                  <td className="px-6 py-4">Subject to private sector regulations</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Expatriates</td>
                  <td className="px-6 py-4 text-orange-500 font-bold">Conditionally Allowed</td>
                  <td className="px-6 py-4">Requires sponsor permission or legal work arrangement</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Students</td>
                  <td className="px-6 py-4 text-orange-500 font-bold">Limited</td>
                  <td className="px-6 py-4">Only under specific institutional approval</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Freelancers</td>
                  <td className="px-6 py-4 text-[#006C35] font-bold">Allowed</td>
                  <td className="px-6 py-4">Must follow freelance licensing rules</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Job Types - Online vs Offline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 text-center">Types of Part-Time Jobs</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Online Jobs */}
            <div className="bg-blue-50/50  p-8 rounded-2xl border border-blue-100 ">
              <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
                <MonitorPlay className="text-blue-500" /> Online & Remote Jobs
              </h3>
              <div className="space-y-6">
                <JobCard title="1. Online Teaching / Tutoring" desc="High demand for English, STEM, and test prep. Medium to high income." />
                <JobCard title="2. Freelance Writing & Translation" desc="Arabic-English translation and content writing for businesses and agencies." />
                <JobCard title="3. Social Media Management" desc="Posting and engagement for small businesses on Instagram, TikTok, Snapchat." />
                <JobCard title="4. Remote Customer Support" desc="Chat, email, or phone support with shift-based flexible schedules." />
                <JobCard title="5. IT Support & Web Services" desc="Website development and system support for highly skilled professionals." />
              </div>
            </div>

            {/* Offline Jobs */}
            <div className="bg-[#006C35]/5 p-8 rounded-2xl border border-[#006C35]/10">
              <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
                <MapPin className="text-[#006C35]" /> On-Site Part-Time Jobs
              </h3>
              <div className="space-y-6">
                <JobCard title="1. Private Tutoring" desc="Home tutoring remains popular in major cities with flexible timing." />
                <JobCard title="2. Retail Jobs" desc="Customer assistance and sales during peak holiday seasons. Entry-level friendly." />
                <JobCard title="3. Delivery Jobs" desc="Independent work with flexible hours. Requires driving license." />
                <JobCard title="4. Event Staff" desc="Temporary staff for exhibitions. Seasonal opportunities in large cities." />
                <JobCard title="5. Photography & Videography" desc="Project-based creative work for weddings and events. High income potential." />
              </div>
            </div>

          </div>
        </div>

        {/* Salary Matrix */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <DollarSign className="text-[#006C35]" /> Part-Time Salary Estimates
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200 ">Job Type</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Hourly Range</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Monthly Estimate</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Online Tutor</td>
                  <td className="px-6 py-4 text-green-600 font-bold">High</td>
                  <td className="px-6 py-4 text-green-600 font-bold">High</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">IT / Tech Work</td>
                  <td className="px-6 py-4 text-green-600 font-bold">High</td>
                  <td className="px-6 py-4 text-green-600 font-bold">High</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Content Writing</td>
                  <td className="px-6 py-4 text-orange-500 font-bold">Medium</td>
                  <td className="px-6 py-4 text-orange-500 font-bold">Medium</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Customer Support</td>
                  <td className="px-6 py-4">Low - Medium</td>
                  <td className="px-6 py-4">Low - Medium</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Retail / Delivery</td>
                  <td className="px-6 py-4 text-slate-500">Low</td>
                  <td className="px-6 py-4 text-slate-500">Low</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3 italic">* Rates vary widely depending on employer, industry, and experience level.</p>
        </div>

        {/* Tips & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="text-lg font-bold text-slate-900  mb-4">Tips to Get Hired</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600 "><strong>1. Check Eligibility:</strong> Ensure your visa status allows part-time work.</li>
              <li className="text-sm text-slate-600 "><strong>2. Clear CV:</strong> Include availability hours, skills, and experience.</li>
              <li className="text-sm text-slate-600 "><strong>3. Build Portfolio:</strong> Provide samples for creative or tech roles.</li>
              <li className="text-sm text-slate-600 "><strong>4. Networking:</strong> Many jobs are filled through referrals.</li>
              <li className="text-sm text-slate-600 "><strong>5. Highlight Languages:</strong> Bilingual candidates have higher chances.</li>
            </ul>
          </div>
          <div className="bg-white  p-8 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="text-lg font-bold text-slate-900  mb-4">Mistakes to Avoid</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-slate-600 "><AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5"/> Working without permission</li>
              <li className="flex gap-2 text-sm text-slate-600 "><AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5"/> Accepting informal jobs without contracts</li>
              <li className="flex gap-2 text-sm text-slate-600 "><AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5"/> Ignoring visa conditions</li>
              <li className="flex gap-2 text-sm text-slate-600 "><AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5"/> Failing to document work agreements</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Can expatriates work part-time?" answer="Yes, but only if visa conditions and employer permissions allow it. Working unauthorized is illegal." />
            <FaqItem question="Can students work part-time?" answer="Only under specific institutional approval in limited cases depending on university rules." />
            <FaqItem question="Is there a minimum wage for part-time jobs?" answer="No fixed minimum wage; salaries are market-based depending on the industry." />
            <FaqItem question="Do part-time workers get formal contracts?" answer="Yes, formal contracts are highly recommended and often required by Saudi labor law to define hours and wages." />
            <FaqItem question="Is social insurance required?" answer="It depends on the job type, contract structure, and whether the employee is a Saudi national." />
          </div>
        </div>

      </div>
    </div>
  );
}

function JobCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-white  p-5 rounded-lg border border-slate-200  shadow-sm">
      <h4 className="font-bold text-slate-900  mb-2">{title}</h4>
      <p className="text-sm text-slate-600  leading-relaxed">{desc}</p>
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
