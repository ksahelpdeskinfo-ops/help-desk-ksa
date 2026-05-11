"use client";

import { 
  HeartPulse, ShieldCheck, AlertTriangle, Building2, 
  Stethoscope, Pill, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, FileText
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function HealthcareGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <HeartPulse size={16} /> Official Medical Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            Complete Guide to Healthcare for Expats in Saudi Arabia
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            Healthcare in Saudi Arabia is modern, well-developed, and highly regulated. For foreign residents, it is directly connected to residency rules and employment contracts, making health insurance mandatory.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <ShieldCheck className="text-[#006C35]" /> The Healthcare System
            </h2>
            <p className="text-slate-600  leading-relaxed mb-4">
              Healthcare for foreign residents is based on a mandatory insurance system linked to residency status. Every employed resident must have valid medical insurance provided through an employer.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700  mt-6">
              <li className="flex gap-2 items-start"><CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={16} /> Private hospitals and clinics for most treatments</li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={16} /> Mandatory insurance coverage for residents</li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={16} /> Emergency care access across the country</li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={16} /> Strict compliance linked to residency validity</li>
            </ul>
          </div>
        </div>

        {/* Public vs Private System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50/50  rounded-xl border border-blue-100  p-6">
            <h3 className="font-bold text-lg text-blue-600 mb-4 flex items-center gap-2">
              <Building2 size={20} /> Public Healthcare System
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 ">
              <li>• Primarily for citizens</li>
              <li>• Highly subsidized services</li>
              <li>• Government hospitals and clinics</li>
              <li>• Emergency treatment available for everyone</li>
            </ul>
          </div>
          <div className="bg-[#006C35]/5 rounded-xl border border-[#006C35]/10 p-6">
            <h3 className="font-bold text-lg text-[#006C35] mb-4 flex items-center gap-2">
              <Stethoscope size={20} /> Private Healthcare System
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 ">
              <li>• Main system used by foreign residents</li>
              <li>• Includes hospitals, clinics, and specialized centers</li>
              <li>• Faster service and wider language support</li>
              <li>• Covered by private insurance plans</li>
            </ul>
          </div>
        </div>

        {/* Mandatory Health Insurance & Employer Responsibilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 text-center">Mandatory Health Insurance</h2>
          <div className="bg-white  rounded-xl border border-slate-200  p-8 shadow-sm">
            <p className="text-slate-600  mb-6 text-center max-w-2xl mx-auto">
              Health insurance is a legal requirement for all foreign residents working in the country. Without valid insurance, residency renewal or work authorization is not possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="font-bold text-slate-900  mb-4 border-b border-slate-200  pb-2">Employer Responsibilities</h3>
                <ul className="space-y-2 text-sm text-slate-700 ">
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 shrink-0" size={16} /> Providing health insurance before employment starts</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 shrink-0" size={16} /> Maintaining continuous coverage</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 shrink-0" size={16} /> Covering insurance costs</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 shrink-0" size={16} /> Including eligible dependents</li>
                  <li className="flex gap-2"><CheckCircle2 className="text-blue-500 shrink-0" size={16} /> Ensuring renewal without gaps</li>
                </ul>
              </div>
              <div className="bg-red-50  p-5 rounded-lg border border-red-100 ">
                <h3 className="font-bold text-red-700  mb-3 flex items-center gap-2">
                  <AlertTriangle size={18} /> If insurance is not maintained:
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 ">
                  <li>• Residency renewal can be blocked</li>
                  <li>• Legal penalties may apply to the employer</li>
                  <li>• Employee may lose healthcare access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Classes & Coverage */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Insurance Classes & Coverage</h2>
          
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm mb-8">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200 ">Class</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Coverage Level</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Features</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Premium Level</td>
                  <td className="px-6 py-4 text-[#006C35] font-bold">Highest</td>
                  <td className="px-6 py-4">Full hospital access, higher limits</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Enhanced Level</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">Strong coverage</td>
                  <td className="px-6 py-4">Good hospital network, moderate limits</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Standard Level</td>
                  <td className="px-6 py-4 text-slate-700  font-bold">Basic legal coverage</td>
                  <td className="px-6 py-4">Limited network, basic services</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Basic Level</td>
                  <td className="px-6 py-4 text-orange-500 font-bold">Minimum required</td>
                  <td className="px-6 py-4">Restricted coverage and facilities</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm">
              <h3 className="font-bold text-lg text-slate-900  mb-4">What Basic Insurance Covers</h3>
              <ul className="space-y-2 text-sm text-slate-600 ">
                <li>• Hospital admission and treatment</li>
                <li>• Doctor consultations & Emergency care</li>
                <li>• Prescription medications</li>
                <li>• Maternity care (with waiting period)</li>
                <li>• Laboratory tests and imaging</li>
                <li>• Chronic illness management</li>
              </ul>
            </div>
            <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm">
              <h3 className="font-bold text-lg text-slate-900  mb-4">Common Exclusions</h3>
              <ul className="space-y-2 text-sm text-slate-600 ">
                <li>• Cosmetic procedures</li>
                <li>• Experimental treatments</li>
                <li>• Some dental and optical services (depends on plan)</li>
                <li>• Non-medical elective procedures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Costs & Billing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Healthcare Costs & Billing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CostCard 
              title="Consultations" 
              without="General: Low-Medium. Specialist: Higher fees."
              withIns="Low co-payment per visit based on policy limits."
            />
            <CostCard 
              title="Hospital Costs" 
              without="Emergency & Admission: Very expensive per day."
              withIns="Mostly covered based on policy limits."
            />
            <CostCard 
              title="Maternity Care" 
              without="Delivery costs can be very high out-of-pocket."
              withIns="Covered after waiting period (prenatal & delivery)."
            />
          </div>
        </div>

        {/* Facilities & Access */}
        <div className="bg-[#006C35]/5 rounded-2xl p-8 border border-[#006C35]/10 mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 text-center">Healthcare Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FacilityCard title="Private Hospitals" desc="Main treatment centers offering emergency care, surgery, specialists, and ICUs." />
            <FacilityCard title="Medical Centers" desc="Used for routine checkups, specialist visits, minor treatments, and diagnostic tests." />
            <FacilityCard title="Primary Care" desc="First point of contact for general illness, basic treatment, and specialist referrals." />
            <FacilityCard title="Specialized Centers" desc="Focus areas include dental care, eye care, physiotherapy, and fertility treatment." />
          </div>
        </div>

        {/* Patient Rights & Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="text-lg font-bold text-[#006C35] mb-4 flex items-center gap-2"><ShieldCheck size={20}/> Patient Rights</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600 ">• Confidential treatment</li>
              <li className="text-sm text-slate-600 ">• Emergency care</li>
              <li className="text-sm text-slate-600 ">• Medical records access</li>
              <li className="text-sm text-slate-600 ">• Second medical opinions</li>
              <li className="text-sm text-slate-600 ">• File complaints if needed</li>
            </ul>
          </div>
          <div className="bg-white  p-8 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2"><AlertCircle size={20}/> Health Tips for Residents</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600 ">• Keep insurance active at all times</li>
              <li className="text-sm text-slate-600 ">• Save emergency hospital numbers</li>
              <li className="text-sm text-slate-600 ">• Use network hospitals for lower costs</li>
              <li className="text-sm text-slate-600 ">• Keep digital copies of your insurance card</li>
              <li className="text-sm text-slate-600 ">• Schedule annual health checkups</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Is healthcare free for expats?" answer="No, it is covered through mandatory insurance, not free public access." />
            <FaqItem question="Can I use government hospitals?" answer="Only in extreme emergencies; most routine and specialized care is handled privately." />
            <FaqItem question="Do employers pay for insurance?" answer="Yes, employers are legally responsible for providing and paying for coverage." />
            <FaqItem question="What if I don’t have insurance?" answer="Your residency renewal will be blocked, and your legal stay may be affected." />
            <FaqItem question="Can dependents get insurance?" answer="Yes, but it depends on the employer sponsorship rules and policy agreements." />
          </div>
        </div>

      </div>
    </div>
  );
}

function CostCard({ title, without, withIns }: { title: string, without: string, withIns: string }) {
  return (
    <div className="bg-white  p-5 rounded-xl border border-slate-200  shadow-sm flex flex-col h-full">
      <h3 className="font-bold text-slate-900  mb-3 pb-2 border-b border-slate-100  text-center">{title}</h3>
      <div className="mb-4 flex-1">
        <strong className="text-xs text-red-500 uppercase tracking-wide block mb-1">Without Insurance:</strong>
        <p className="text-sm text-slate-600 ">{without}</p>
      </div>
      <div>
        <strong className="text-xs text-[#006C35] uppercase tracking-wide block mb-1">With Insurance:</strong>
        <p className="text-sm text-slate-600 ">{withIns}</p>
      </div>
    </div>
  );
}

function FacilityCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-white  p-5 rounded-lg border border-slate-200  shadow-sm text-center">
      <h4 className="font-bold text-slate-900  mb-2">{title}</h4>
      <p className="text-sm text-slate-600 ">{desc}</p>
    </div>
  );
}

// Ensure HelpCircle is imported or created locally if missed
function HelpCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
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
