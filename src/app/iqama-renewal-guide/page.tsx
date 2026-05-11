"use client";

import { 
  CreditCard, AlertTriangle, ShieldCheck, FileSearch, Building2, 
  MapPin, HelpCircle, FileText, CheckCircle2, ChevronDown, ChevronUp, UserCheck
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function FeePaymentStatusGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <CreditCard size={16} /> Official Verification Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            How to Check Work Permit & Maktab Amal Fee Status
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            In Saudi Arabia, work permit fees (Maktab Amal fees) are essential for maintaining legal employment status. If these fees are not paid, it may result in blocks in employment services, residency renewal delays, or job transfer issues.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Key Terms Table */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <FileText className="text-[#006C35]" /> Key Terms You Should Understand
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200  w-1/3">Term</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Work Permit</td>
                  <td className="px-6 py-4">Authorization linked to an employee's legal ability to work under an employer</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Labor / Work Permit Fees</td>
                  <td className="px-6 py-4">Government fees related to employment authorization and renewal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Labor Authority Services</td>
                  <td className="px-6 py-4">Official system handling employment regulations and labor records</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Employment Platform</td>
                  <td className="px-6 py-4">Digital system used by employers for workforce management</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Residency Platform</td>
                  <td className="px-6 py-4">System used to manage residency-related services</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Electronic Payment System</td>
                  <td className="px-6 py-4">National payment system used to pay government fees through banks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-[#006C35]/5 rounded-2xl p-8 border border-[#006C35]/10 mb-12">
          <h3 className="text-xl font-bold text-slate-900  mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-[#006C35]" /> What You Need Before Checking
          </h3>
          <p className="text-slate-600  mb-4">To avoid errors or missing results, prepare one of the following:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 ">
            <li className="flex gap-2"><span className="text-[#006C35] font-bold">•</span> Residency number (for existing residents)</li>
            <li className="flex gap-2"><span className="text-[#006C35] font-bold">•</span> Border number (for new arrivals)</li>
            <li className="flex gap-2"><span className="text-[#006C35] font-bold">•</span> Passport number (in some cases)</li>
            <li className="flex gap-2"><span className="text-[#006C35] font-bold">•</span> Employer/Company details (for HR)</li>
            <li className="flex gap-2"><span className="text-[#006C35] font-bold">•</span> Payment reference number (SADAD)</li>
          </ul>
        </div>

        {/* 4 Methods */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-8 text-center">Methods to Check Status</h2>
          
          <div className="space-y-6">
            
            <MethodCard number="1" title="Employer Labor System Check" bestFor="Employers managing multiple employees, HR departments">
              <p className="mb-3">Employers manage work permit records through official workforce management systems.</p>
              <ul className="list-decimal ml-5 space-y-1 mb-4 text-slate-600 ">
                <li>Log into the official employer labor system</li>
                <li>Navigate to employee/work permit services</li>
                <li>Search using residency or border number</li>
                <li>Open employee record to view status</li>
              </ul>
              <div className="bg-slate-50  p-4 rounded-lg border border-slate-200  text-sm">
                <strong>You can check:</strong> Permit status (active/pending/expired), Payment requirements, Renewal status, System alerts.
              </div>
            </MethodCard>

            <MethodCard number="2" title="Government Inquiry Service" bestFor="Employees checking personal status quickly without employer access">
              <p className="mb-3">Employees can check basic work permit status using official labor inquiry services.</p>
              <ul className="list-decimal ml-5 space-y-1 mb-4 text-slate-600 ">
                <li>Access official labor inquiry service portal</li>
                <li>Enter residency or border number</li>
                <li>Complete verification</li>
                <li>View status results</li>
              </ul>
            </MethodCard>

            <MethodCard number="3" title="Bank Payment Verification" bestFor="Disputes, delays, or when payment is completed but system shows 'pending'">
              <p className="mb-3">Bank payment systems are the most reliable proof if portals haven't updated yet.</p>
              <ul className="list-decimal ml-5 space-y-1 mb-4 text-slate-600 ">
                <li>Open your banking application</li>
                <li>Go to government payments section</li>
                <li>Check payment history</li>
                <li>Enter payment reference number</li>
              </ul>
            </MethodCard>

            <MethodCard number="4" title="Residency Platform Check" bestFor="Secondary confirmation related to employment compliance">
              <p className="mb-3">A residency management system may also show indirect status updates related to employment compliance.</p>
              <div className="bg-slate-50  p-4 rounded-lg border border-slate-200  text-sm">
                <strong>Limitations:</strong> Does not always show detailed fee records. Mainly used to confirm residency validity and system blocks.
              </div>
            </MethodCard>

          </div>
        </div>

        {/* Status Messages & Troubleshooting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <FileSearch className="text-blue-500" /> Common Status Messages
            </h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="font-bold text-red-600">Payment Required</span>
                <span className="text-sm text-slate-600 ">Fee not paid yet. Payment must be completed.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-orange-500">Pending</span>
                <span className="text-sm text-slate-600 ">System processing or waiting for update.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-[#006C35]">Active / Valid</span>
                <span className="text-sm text-slate-600 ">Permit is successfully active. No action required.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-slate-500">Expired</span>
                <span className="text-sm text-slate-600 ">Permit validity ended. Renewal required.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-slate-900 ">No Record Found</span>
                <span className="text-sm text-slate-600 ">Incorrect data or no request exists. Verify with HR.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white  p-8 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" /> How to Fix Status Issues
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-slate-600 ">If payment is made but status does not change immediately, follow these steps:</p>
              <ul className="space-y-3">
                <li className="text-sm text-slate-700 ">
                  <strong>1. Verify Receipt:</strong> Confirm payment reference number, bank confirmation, and transaction proof.
                </li>
                <li className="text-sm text-slate-700 ">
                  <strong>2. Recheck Details:</strong> Ensure correct residency or border number.
                </li>
                <li className="text-sm text-slate-700 ">
                  <strong>3. Contact HR:</strong> Employers can reassign payments, correct system entries, or resubmit requests.
                </li>
                <li className="text-sm text-slate-700 ">
                  <strong>4. Wait for Sync:</strong> Bulk payments sometimes take longer to process and assign properly.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work Permit vs Residency Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Work Permit vs Residency</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200  w-1/3">Category</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Work Permit</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Residency Permit</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Purpose</td>
                  <td className="px-6 py-4">Employment authorization</td>
                  <td className="px-6 py-4">Legal residence in the country</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Managed By</td>
                  <td className="px-6 py-4 text-blue-600 font-medium">Labor-related system</td>
                  <td className="px-6 py-4 text-[#006C35] font-medium">Interior/residency system</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Function</td>
                  <td className="px-6 py-4">Work eligibility</td>
                  <td className="px-6 py-4">Stay validity</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Dependency</td>
                  <td className="px-6 py-4">Linked to employment</td>
                  <td className="px-6 py-4">Linked to sponsorship</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Can employees check work permit status themselves?" answer="Yes, basic status can often be checked using official inquiry systems without requiring employer access." />
            <FaqItem question="Is bank payment enough proof?" answer="Yes, bank confirmation and reference numbers (SADAD) are valid proof of payment." />
            <FaqItem question="Why does status show pending after payment?" answer="It may be due to system delay or missing linkage between the bulk payment and your specific employee record." />
            <FaqItem question="Do all employees need work permit fee payments?" answer="Most expatriate employees under formal employment require it as part of standard compliance and residency renewal." />
          </div>
        </div>

      </div>
    </div>
  );
}

function MethodCard({ number, title, bestFor, children }: { number: string, title: string, bestFor: string, children: React.ReactNode }) {
  return (
    <div className="bg-white  p-6 sm:p-8 rounded-xl border border-slate-200  shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
      <div className="w-14 h-14 rounded-full bg-[#006C35]/10 text-[#006C35] flex items-center justify-center font-bold text-2xl shrink-0">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-xl text-slate-900  mb-2 pr-8">{title}</h3>
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-600  mb-4 bg-blue-50  inline-block px-3 py-1 rounded-md">
          Best For: {bestFor}
        </div>
        <div className="text-sm text-slate-600  leading-relaxed">
          {children}
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
