"use client";

import { 
  Calculator, AlertTriangle, ShieldCheck, Banknote, 
  Search, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Building2, Gavel, FileText, HelpCircle
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function EndOfServiceBenefitGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Banknote size={16} /> Official Financial Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900  tracking-tight mb-6 leading-tight">
            End of Service Calculator Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-slate-600  leading-relaxed max-w-3xl mx-auto font-light">
            Calculate your <strong>end of service benefits KSA</strong> accurately based on the latest Saudi Labor Law regulations.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section - What & Who */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 relative z-10">
            <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <ShieldCheck className="text-[#006C35]" /> Resignation Settlement Saudi Law
            </h2>
            <p className="text-slate-600  leading-relaxed mb-4">
              The <strong>EOSB calculator Saudi Arabia</strong> is based on specific legal formulas. Whether you are resigning or being terminated, your final settlement is determined by your basic salary and total years of service.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> <span className="font-bold text-slate-900 ">Basic salary only</span>
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Years of service
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Reason for job ending (resignation or termination)
              </li>
            </ul>
            <div className="bg-red-50  p-4 rounded-lg border border-red-100 ">
              <strong className="text-red-700  text-sm flex items-center gap-2 mb-1">
                <AlertTriangle size={16} /> Important Note
              </strong>
              <p className="text-sm text-slate-700 ">Allowances such as housing, transport, or bonuses are <span className="font-bold">not included</span>.</p>
            </div>
          </div>

          <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 relative z-10">
            <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <Building2 className="text-blue-500" /> Who is Eligible?
            </h2>
            
            <h3 className="font-bold text-[#006C35] text-sm uppercase tracking-wider mb-2 mt-4">You are generally eligible if:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <span className="text-[#006C35]">•</span> You are working under a valid employment contract
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <span className="text-[#006C35]">•</span> Your job is covered under labor regulations
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <span className="text-[#006C35]">•</span> You have completed at least 1 year of service
              </li>
            </ul>

            <h3 className="font-bold text-red-500 text-sm uppercase tracking-wider mb-2">Not eligible in cases such as:</h3>
            <ul className="space-y-2">
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <span className="text-red-500">•</span> Serious misconduct cases defined under labor rules
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <span className="text-red-500">•</span> Certain special employment categories with different regulations
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Rules & Payment Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#006C35]/5 rounded-xl border border-[#006C35]/10 p-6">
            <h3 className="font-bold text-lg text-[#006C35] mb-4 flex items-center gap-2">
              <Gavel size={20} /> Legal Rules Under Saudi Labor Law
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 ">
              <li className="flex gap-2"><CheckCircle2 className="text-[#006C35] shrink-0" size={16} /> EOSB is mandatory for eligible employees</li>
              <li className="flex gap-2"><CheckCircle2 className="text-[#006C35] shrink-0" size={16} /> Only basic salary is used for calculation</li>
              <li className="flex gap-2"><CheckCircle2 className="text-[#006C35] shrink-0" size={16} /> Employers must settle all dues after job termination</li>
              <li className="flex gap-2"><CheckCircle2 className="text-[#006C35] shrink-0" size={16} /> Rights apply equally to citizens and expatriates</li>
            </ul>
          </div>

          <div className="bg-blue-50/50  rounded-xl border border-blue-100  p-6">
            <h3 className="font-bold text-lg text-blue-600 mb-4 flex items-center gap-2">
              <Banknote size={20} /> Payment Timeline & Process
            </h3>
            <p className="text-sm text-slate-700  font-bold mb-3">By regulation:</p>
            <div className="bg-white  p-4 rounded-lg border border-slate-200  mb-4 text-center">
              <span className="font-bold text-slate-900 ">EOSB should be paid within 7–14 days</span>
              <p className="text-xs text-slate-500 mt-1">after the last working day</p>
            </div>
            <p className="text-sm text-slate-700  mb-2">Final settlement may include:</p>
            <ul className="text-sm text-slate-700  list-disc ml-5 mb-4">
              <li>EOSB</li>
              <li>Unpaid salary</li>
              <li>Unused leave balance</li>
            </ul>
            <p className="text-xs text-slate-500 italic">Delays can be escalated through official labor dispute channels.</p>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mb-12 border-t border-slate-200  pt-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 text-center">Explore Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RelatedLink href="/salary-certificate-download" title="Salary Guide" desc="Download insurance proof." />
            <RelatedLink href="/labor-complaints-saudi-arabia" title="Labor Complaints" desc="File a wage dispute." />
            <RelatedLink href="/worker-rights-saudi-law" title="Worker Rights" desc="Know your legal protections." />
          </div>
        </div>

        {/* How EOSB is Calculated */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <Calculator className="text-[#006C35]" /> How EOSB is Calculated
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white  rounded-xl border border-slate-200  shadow-sm overflow-hidden">
              <div className="bg-slate-50  p-4 border-b border-slate-200 ">
                <h3 className="font-bold text-slate-900 ">Standard Formula</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100  pb-3">
                  <span className="text-slate-600 ">First 5 years:</span>
                  <span className="font-bold text-slate-900 ">Half month salary per year</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-slate-600 ">After 5 years:</span>
                  <span className="font-bold text-slate-900 ">Full month salary per year</span>
                </div>
              </div>
            </div>

            <div className="bg-white  rounded-xl border border-slate-200  shadow-sm overflow-hidden">
              <div className="bg-slate-50  p-4 border-b border-slate-200 ">
                <h3 className="font-bold text-slate-900 ">Calculation Example</h3>
              </div>
              <div className="p-6">
                <div className="flex gap-4 mb-4 text-sm">
                  <div className="bg-slate-100  px-3 py-2 rounded">
                    <span className="block text-xs text-slate-500">Basic salary:</span>
                    <span className="font-bold">5,000 SAR</span>
                  </div>
                  <div className="bg-slate-100  px-3 py-2 rounded">
                    <span className="block text-xs text-slate-500">Service period:</span>
                    <span className="font-bold">7 years</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-600  font-mono bg-slate-50  p-4 rounded border border-slate-100 ">
                  <div className="flex justify-between">
                    <span>First 5 years (2,500 × 5)</span>
                    <span>12,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next 2 years (5,000 × 2)</span>
                    <span>10,000</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200  pt-2 mt-2 font-bold text-slate-900  text-base">
                    <span>Total EOSB =</span>
                    <span className="text-[#006C35]">22,500 SAR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resignation vs Termination */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Resignation vs Termination Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white  rounded-xl border border-slate-200  shadow-sm p-6">
              <h3 className="font-bold text-lg text-slate-900  mb-4 border-b border-slate-100  pb-2">If Employee Resigns</h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-slate-600 ">Less than 2 years</span>
                  <span className="font-bold text-red-500">No EOSB</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-slate-600 ">2 to 5 years</span>
                  <span className="font-bold text-orange-500">Partial benefit</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-slate-600 ">5 to 10 years</span>
                  <span className="font-bold text-blue-500">Higher partial benefit</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-slate-600 ">More than 10 years</span>
                  <span className="font-bold text-[#006C35]">Full benefit</span>
                </li>
              </ul>
            </div>

            <div className="bg-white  rounded-xl border border-slate-200  shadow-sm p-6">
              <h3 className="font-bold text-lg text-slate-900  mb-4 border-b border-slate-100  pb-2">If Employer Terminates</h3>
              <div className="flex items-center justify-center h-24 mb-2">
                <span className="text-2xl font-black text-[#006C35]">Full EOSB is paid</span>
              </div>
              <p className="text-xs text-center text-slate-500 bg-slate-50  p-2 rounded">
                *Except in serious misconduct cases defined by law (Article 80).
              </p>
            </div>
          </div>
        </div>

        {/* Official Calculator Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#006C35] to-[#004d26] rounded-2xl p-8 text-slate-900 shadow-lg text-center relative overflow-hidden">
          <Calculator className="absolute opacity-10 -right-10 -bottom-10" size={200} />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Official EOSB Calculator</h2>
          <p className="mb-8 text-green-50 max-w-2xl mx-auto relative z-10">
            The Ministry of Human Resources provides an official online calculator to estimate your End of Service Benefit based on Saudi labor regulations. This tool helps calculate resignation vs termination impacts and service durations accurately.
          </p>
          <a 
            href="https://www.hrsd.gov.sa/en/ministry-services/services/end-service-benefit-calculator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#006C35] hover:bg-green-50 font-bold px-8 py-4 rounded-xl transition-colors relative z-10 shadow-sm"
          >
            Open Official Calculator <Search size={18} />
          </a>
        </div>

        {/* Tips, Mistakes & Dispute */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="font-bold text-lg text-slate-900  mb-4 flex items-center gap-2">
              <ShieldCheck className="text-[#006C35]" /> Employee Tips
            </h3>
            <ul className="space-y-2 text-sm text-slate-600  list-disc ml-4">
              <li>Always keep a copy of your employment contract</li>
              <li>Save salary transfer records</li>
              <li>Track service duration carefully</li>
              <li>Do not sign final settlement without reviewing details</li>
              <li>Ensure all dues are cleared before final exit</li>
            </ul>
          </div>

          <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="font-bold text-lg text-slate-900  mb-4 flex items-center gap-2">
              <AlertCircle className="text-red-500" /> Common Mistakes
            </h3>
            <ul className="space-y-2 text-sm text-slate-600  list-disc ml-4">
              <li>Thinking allowances are included in EOSB</li>
              <li>Resigning before completing 2 years</li>
              <li>Accepting verbal promises instead of written settlement</li>
              <li>Not checking final settlement details</li>
              <li>Delaying complaint filing</li>
            </ul>
          </div>

          <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="font-bold text-lg text-slate-900  mb-4 flex items-center gap-2">
              <Gavel className="text-orange-500" /> Dispute Process
            </h3>
            <p className="text-sm text-slate-600  mb-3">If EOSB is delayed or unpaid, submit a complaint through the official labor dispute system. You must provide:</p>
            <ul className="space-y-1 text-sm text-slate-600  list-disc ml-4">
              <li>Contract copy</li>
              <li>Salary proof</li>
              <li>Service history</li>
              <li>Final working details</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Is EOSB mandatory?" answer="Yes, it is a legal requirement for eligible employees under labor regulations." />
            <FaqItem question="Does EOSB include allowances?" answer="No, only basic salary is used for the calculation." />
            <FaqItem question="Can employer refuse to pay EOSB?" answer="Only in limited legal cases involving serious misconduct proven by evidence (Article 80)." />
            <FaqItem question="Can EOSB be claimed after leaving the country?" answer="Yes, but it becomes significantly more difficult once the employee has exited. Always settle before final exit." />
            <FaqItem question="Is EOSB taxable?" answer="No personal income tax is applied on salaries or EOSB in Saudi Arabia." />
          </div>
        </div>

      </div>
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

function RelatedLink({ href, title, desc }: { href: string, title: string, desc: string }) {
  return (
    <Link href={href} className="bg-white  p-5 rounded-xl border border-slate-200  hover:border-[#006C35] transition-colors group">
      <h4 className="font-bold text-slate-900  mb-1 group-hover:text-[#006C35]">{title}</h4>
      <p className="text-xs text-slate-500">{desc}</p>
    </Link>
  );
}
