"use client";

import { 
  ShieldCheck, FileText, AlertCircle, Clock, CheckCircle2, 
  HelpCircle, Building, Users, Scale, ExternalLink, ChevronDown, ChevronUp, MapPin, CalendarDays
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function HajjLeaveGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-6">
            <CalendarDays size={16} /> Official Leave Entitlement
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            Hajj Leave in Saudi Arabia: Rules, Eligibility & Employee Rights
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            Hajj is one of the most important religious obligations for Muslims. For employees working in Saudi Arabia's private sector, understanding Hajj leave regulations is essential to ensure they can fulfill this religious duty without risking their salary, employment status, or legal rights.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-10 relative z-10">
          <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
            <Scale className="text-[#006C35]" /> What Is Hajj Leave?
          </h2>
          <p className="text-slate-600  leading-relaxed mb-4">
            Hajj leave is a legally protected <strong>paid leave</strong> granted to eligible Muslim employees so they can perform the annual pilgrimage to Makkah.
          </p>
          <p className="text-slate-600  leading-relaxed">
            This leave is not considered a company benefit or optional privilege. It is a statutory entitlement regulated under Saudi labor regulations for qualifying employees working in the private sector. Eligible employees are allowed to take leave specifically for performing Hajj while continuing to receive their salary during the approved leave period.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Legal Basis */}
          <div className="bg-[#006C35]/5 rounded-2xl p-8 border border-[#006C35]/10">
            <h3 className="text-xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <FileText className="text-[#006C35]" size={20} /> Legal Basis & Duration
            </h3>
            <p className="text-slate-600  mb-4">Under Saudi labor regulations, eligible employees may receive:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-[#006C35] shrink-0 mt-0.5" /> Fully paid leave
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-[#006C35] shrink-0 mt-0.5" /> A leave period ranging between <strong>10 and 15 days</strong>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-[#006C35] shrink-0 mt-0.5" /> Leave inclusive of Eid Al-Adha holidays
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-[#006C35] shrink-0 mt-0.5" /> A one-time entitlement during employment history
              </li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-slate-50  rounded-2xl p-8 border border-slate-200 ">
            <h3 className="text-xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <Users className="text-blue-500" size={20} /> Who Is Eligible?
            </h3>
            <p className="text-slate-600  mb-4">Not every employee automatically qualifies. Conditions include:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" /> <strong>Must Be Muslim:</strong> Leave applies to Muslim employees performing the pilgrimage.
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" /> <strong>First-Time Hajj:</strong> Intended for first-time performance only.
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" /> <strong>Minimum Service:</strong> Usually at least two consecutive years with the same employer.
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700 ">
                <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" /> <strong>Private Sector:</strong> Applies to employees working under private-sector labor regulations.
              </li>
            </ul>
          </div>
        </div>

        {/* Hajj vs Annual Leave Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Difference Between Hajj Leave and Annual Leave</h2>
          <p className="text-slate-600  mb-6">Many employees confuse Hajj leave with annual vacation leave. However, both are entirely separate statutory entitlements.</p>
          
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200 ">Feature</th>
                  <th className="px-6 py-4 border-b border-slate-200  bg-[#006C35]/5 text-[#006C35]">Hajj Leave</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Annual Leave</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Purpose</td>
                  <td className="px-6 py-4 bg-[#006C35]/5">Religious pilgrimage</td>
                  <td className="px-6 py-4">Vacation/rest</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Duration</td>
                  <td className="px-6 py-4 bg-[#006C35]/5 font-semibold">10–15 days</td>
                  <td className="px-6 py-4">Based on contract (Min 21 days)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Payment</td>
                  <td className="px-6 py-4 bg-[#006C35]/5">Fully paid</td>
                  <td className="px-6 py-4">Fully paid</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Frequency</td>
                  <td className="px-6 py-4 bg-[#006C35]/5">Usually once per career</td>
                  <td className="px-6 py-4">Every year</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Deducted from Annual Leave?</td>
                  <td className="px-6 py-4 bg-[#006C35]/5 font-bold text-red-500">No</td>
                  <td className="px-6 py-4">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Apply Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">How to Apply for Hajj Leave</h2>
          <p className="text-slate-600  mb-8">Employees should apply early and follow formal procedures to avoid misunderstandings or delays.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StepCard number="1" title="Submit a Formal Request">
              Submit a written leave request specifying proposed travel dates and expected leave duration through your HR department, portal, or direct manager.
            </StepCard>
            <StepCard number="2" title="Provide Supporting Docs">
              Employers may request Hajj registration confirmation, travel booking details, and a declaration confirming this is your first-time Hajj.
            </StepCard>
            <StepCard number="3" title="Confirm Service Duration">
              Ensure company records accurately reflect your joining date and continuous employment period. Correct any HR record errors before submission.
            </StepCard>
            <StepCard number="4" title="Obtain Written Approval">
              Always keep approved leave copies, email confirmations, and official HR approvals. Verbal approval alone may create future disputes.
            </StepCard>
          </div>
        </div>

        {/* Employer Rights vs What Not To Do */}
        <div className="mb-12 bg-white  rounded-2xl shadow-sm border border-slate-200  overflow-hidden">
          <div className="p-8 border-b border-slate-200 ">
            <h2 className="text-2xl font-bold text-slate-900  mb-2">Employer Rights Regarding Hajj Leave</h2>
            <p className="text-slate-600 ">Saudi labor regulations balance employee rights with operational business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 ">
            <div className="p-8">
              <h3 className="text-lg font-bold text-[#006C35] mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} /> What Employers May Do
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-slate-700 ">
                  <span className="w-1.5 h-1.5 bg-[#006C35] rounded-full mt-1.5 shrink-0" /> Verify eligibility (service duration, registration proof).
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 ">
                  <span className="w-1.5 h-1.5 bg-[#006C35] rounded-full mt-1.5 shrink-0" /> Organize leave scheduling to avoid major operational disruptions.
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 ">
                  <span className="w-1.5 h-1.5 bg-[#006C35] rounded-full mt-1.5 shrink-0" /> Limit simultaneous leave requests for operational continuity.
                </li>
              </ul>
            </div>
            <div className="p-8 bg-red-50/50 ">
              <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                <AlertCircle size={20} /> What Employers Should Not Do
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-slate-700 ">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" /> Deduct approved Hajj leave from annual leave.
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 ">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" /> Refuse eligible leave without valid reasons.
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 ">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" /> Reduce employee salary during approved leave.
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 ">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" /> Punish employees for requesting legal leave.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dispute Section */}
        <div className="mb-12 p-8 border-l-4 border-orange-500 bg-orange-50  rounded-r-xl">
          <h3 className="text-xl font-bold text-slate-900  mb-3">What to Do if Hajj Leave Is Refused?</h3>
          <p className="text-slate-700  text-sm leading-relaxed mb-4">
            If an eligible employee believes leave was refused unfairly, they should first keep all records (emails, applications) and attempt to resolve it internally with HR professionally. If the issue remains unresolved, employees may use official labor dispute channels. 
          </p>
          <p className="text-slate-700  text-sm font-semibold italic">
            Note: Approved legal leave generally should not be used as grounds for unfair termination or retaliation.
          </p>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Does Hajj leave apply to expatriates?" answer="Yes. Hajj leave is not limited to Saudi nationals only. Eligible Muslim expatriate employees working legally in Saudi Arabia may also receive Hajj leave if they meet all required conditions." />
            <FaqItem question="Is Hajj leave separate from annual leave?" answer="Yes. Hajj leave and annual leave are generally treated separately and cannot be merged or deducted from each other by the employer." />
            <FaqItem question="Does Hajj leave include Eid holidays?" answer="Yes. Eid Al-Adha holidays are usually included within the approved leave period of 10-15 days." />
            <FaqItem question="Can employees receive Hajj leave more than once?" answer="Typically, Hajj statutory leave is intended for first-time Hajj performance only during the course of employment." />
          </div>
        </div>

      </div>
    </div>
  );
}

function StepCard({ number, title, children }: { number: string, title: string, children: React.ReactNode }) {
  return (
    <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50  rounded-bl-full flex items-start justify-end p-4">
        <span className="text-2xl font-black text-slate-200 ">{number}</span>
      </div>
      <h3 className="font-bold text-lg text-slate-900  mb-3 pr-8">{title}</h3>
      <p className="text-sm text-slate-600  leading-relaxed">{children}</p>
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
