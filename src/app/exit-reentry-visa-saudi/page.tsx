"use client";

import { 
  Plane, AlertTriangle, ShieldCheck, MapPin, Search, 
  FileText, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, HelpCircle
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ExitReEntryVisaGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Plane size={16} /> Official Travel Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            Exit Re-Entry Visa in Saudi Arabia: Status Check, Rules & Methods
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            For expatriates living in Saudi Arabia, the Exit Re-Entry visa is one of the most important travel documents. It allows residents to leave the country temporarily and return within a valid period while maintaining their residency status.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
            <ShieldCheck className="text-[#006C35]" /> What Is an Exit Re-Entry Visa?
          </h2>
          <p className="text-slate-600  leading-relaxed mb-4">
            An Exit Re-Entry visa is an official travel authorization for residents that allows temporary exit from the country and re-entry within a specified validity period. It is directly linked to residency validity and employer sponsorship conditions.
          </p>
          <div className="bg-red-50  border border-red-100  p-4 rounded-xl mt-4">
            <strong className="text-red-700  block mb-2 text-sm flex items-center gap-2">
              <AlertTriangle size={16} /> Without a valid visa:
            </strong>
            <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700 ">
              <li>Re-entry may be denied</li>
              <li>Residency status may be affected</li>
              <li>Travel restrictions may apply</li>
            </ul>
          </div>
        </div>

        {/* Types Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Types of Exit Re-Entry Visa</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200 ">Type</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Validity</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Purpose</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Single Exit Re-Entry</td>
                  <td className="px-6 py-4">Short-term (limited duration)</td>
                  <td className="px-6 py-4">One-time travel</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Multiple Exit Re-Entry</td>
                  <td className="px-6 py-4">Longer validity</td>
                  <td className="px-6 py-4">Multiple trips</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-red-500">Final Exit</td>
                  <td className="px-6 py-4">One-way exit</td>
                  <td className="px-6 py-4">Permanent departure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 5 Methods to Check */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-8 text-center">Main Methods to Check Status</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <MethodCard number="1" title="Government Residency Portal (Recommended)" bestFor="Most commonly used method for individuals.">
              <ul className="list-decimal ml-5 space-y-1 mb-4 text-slate-600  text-sm">
                <li>Access the official residency services portal</li>
                <li>Log in using your account credentials</li>
                <li>Go to passport or visa services &gt; visa inquiry</li>
                <li>Enter residency or visa details</li>
              </ul>
              <div className="bg-slate-50  p-3 rounded-lg border border-slate-200  text-xs">
                <strong>Information Displayed:</strong> Visa number, Visa type (single/multiple), Issue date, Expiry date, Validity duration, Current status.
              </div>
            </MethodCard>

            <MethodCard number="2" title="Ministry Visa Inquiry Service" bestFor="Direct government inquiry without complex login.">
              <ul className="list-decimal ml-5 space-y-1 mb-4 text-slate-600  text-sm">
                <li>Open official inquiry service portal</li>
                <li>Select visa or passport inquiry section</li>
                <li>Enter residency or border number</li>
                <li>Complete verification code and submit</li>
              </ul>
              <div className="bg-slate-50  p-3 rounded-lg border border-slate-200  text-xs">
                <strong>Features:</strong> Instant results, Available 24/7, Accessible for individuals.
              </div>
            </MethodCard>

            <MethodCard number="3" title="Employer Visa Management System" bestFor="Employers and authorized HR personnel.">
              <ul className="list-decimal ml-5 space-y-1 mb-4 text-slate-600  text-sm">
                <li>Log into employer management system</li>
                <li>Select employee services</li>
                <li>Search using residency number</li>
                <li>Open employee visa record</li>
              </ul>
              <div className="bg-slate-50  p-3 rounded-lg border border-slate-200  text-xs">
                <strong>Information Available:</strong> Employee details, Visa status, Travel eligibility, Remaining days.
              </div>
            </MethodCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MethodCard number="4" title="Mobile Application Check" bestFor="Smartphone users.">
                <ul className="list-decimal ml-5 space-y-1 text-slate-600  text-sm">
                  <li>Open official mobile application</li>
                  <li>Log in securely (Biometric support)</li>
                  <li>Go to visa services to view status</li>
                </ul>
              </MethodCard>

              <MethodCard number="5" title="Alternative Government App" bestFor="Travel & residency updates.">
                <ul className="list-decimal ml-5 space-y-1 text-slate-600  text-sm">
                  <li>Visa status viewing</li>
                  <li>Digital document access</li>
                  <li>Travel-related updates</li>
                </ul>
              </MethodCard>
            </div>
          </div>
        </div>

        {/* Status Meaning Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900  mb-6">Understanding Visa Status Results</h2>
            <div className="bg-white  rounded-xl border border-slate-200  shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-200 ">
                <StatusRow status="Active" meaning="Visa is valid" action="Ready for travel" color="text-[#006C35]" />
                <StatusRow status="Expired" meaning="Validity ended" action="Renew required" color="text-red-500" />
                <StatusRow status="Used" meaning="Single entry completed" action="New visa needed" color="text-slate-500" />
                <StatusRow status="Cancelled" meaning="Visa invalid" action="Contact employer" color="text-orange-500" />
                <StatusRow status="Pending" meaning="Under processing" action="Wait for update" color="text-blue-500" />
                <StatusRow status="Suspended" meaning="Blocked temporarily" action="Resolve issue first" color="text-red-700" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900  mb-6">Visa Fees (General Guide)</h2>
            <div className="bg-white  rounded-xl border border-slate-200  shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm text-slate-600 ">
                <thead className="bg-slate-50  text-slate-900  font-bold uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border-b border-slate-200 ">Duration</th>
                    <th className="px-4 py-3 border-b border-slate-200 ">Single Entry</th>
                    <th className="px-4 py-3 border-b border-slate-200 ">Multiple Entry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 ">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900 ">Short Term</td>
                    <td className="px-4 py-3">Lower fee</td>
                    <td className="px-4 py-3">Medium fee</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900 ">Medium Term</td>
                    <td className="px-4 py-3">Medium fee</td>
                    <td className="px-4 py-3">Higher fee</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900 ">Long Term</td>
                    <td className="px-4 py-3 text-slate-400 italic">Not available</td>
                    <td className="px-4 py-3">Highest fee range</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-3 text-xs text-slate-500 bg-slate-50  text-center italic">
                Fees may change based on official updates and regulations.
              </div>
            </div>
          </div>
        </div>

        {/* Common Problems & Solutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Common Problems & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProblemCard 
              title="Visa Not Found" 
              reasons={["Incorrect residency number", "System delay after issuance", "Visa not yet activated"]}
              solutions={["Recheck details", "Wait 24–48 hours", "Contact employer"]}
            />
            <ProblemCard 
              title="Login Issues" 
              reasons={["Incorrect password", "Browser errors", "Account lock"]}
              solutions={["Reset password", "Clear browser cache", "Try another device"]}
            />
            <ProblemCard 
              title="Expired Status After Renewal" 
              reasons={["System update delay", "Employer did not complete processing"]}
              solutions={["Wait for system sync", "Confirm with employer", "Recheck later"]}
            />
          </div>
        </div>

        {/* Rules & Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#006C35]/5 rounded-xl border border-[#006C35]/10 p-6">
            <h3 className="font-bold text-lg text-[#006C35] mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} /> Important Rules
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 ">
              <li>• Visa must be valid before departure</li>
              <li>• Overstaying outside may cancel residency status</li>
              <li>• Residency must be valid for visa issuance</li>
              <li>• Separate visas may apply for dependents</li>
              <li>• Any legal violations can block travel services</li>
            </ul>
          </div>
          <div className="bg-blue-50/50  rounded-xl border border-blue-100  p-6">
            <h3 className="font-bold text-lg text-blue-600 mb-4 flex items-center gap-2">
              <AlertCircle size={18} /> Common Mistakes to Avoid
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 ">
              <li>• Traveling with expired visa</li>
              <li>• Ignoring status updates</li>
              <li>• Using incorrect residency details</li>
              <li>• Assuming visa is active without checking</li>
              <li>• Delaying renewal requests</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Is visa status checking free?" answer="Yes, all official visa status checks are free of charge." />
            <FaqItem question="What happens if visa expires while abroad?" answer="You must contact your sponsor or employer for guidance and special re-entry procedures." />
            <FaqItem question="Can family members check their visa separately?" answer="Yes, each individual can check using their own residency number." />
            <FaqItem question="When should I check visa status before travel?" answer="It is strongly recommended to check at least 3–7 days before travel." />
            <FaqItem question="Can visa be checked without account login?" answer="Yes, some government inquiry services allow checking using residency number only without full login credentials." />
          </div>
        </div>

      </div>
    </div>
  );
}

function MethodCard({ number, title, bestFor, children }: { number: string, title: string, bestFor: string, children: React.ReactNode }) {
  return (
    <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm relative overflow-hidden flex gap-4 items-start h-full">
      <div className="w-10 h-10 rounded-full bg-[#006C35]/10 text-[#006C35] flex items-center justify-center font-bold shrink-0 mt-1">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg text-slate-900  mb-1">{title}</h3>
        <p className="text-xs font-semibold text-blue-600  mb-3">{bestFor}</p>
        <div>{children}</div>
      </div>
    </div>
  );
}

function StatusRow({ status, meaning, action, color }: { status: string, meaning: string, action: string, color: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-2">
      <div className={`font-bold ${color} w-32`}>{status}</div>
      <div className="text-sm text-slate-700  flex-1">{meaning}</div>
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 bg-slate-100  px-2 py-1 rounded w-fit sm:w-auto text-center">
        {action}
      </div>
    </div>
  );
}

function ProblemCard({ title, reasons, solutions }: { title: string, reasons: string[], solutions: string[] }) {
  return (
    <div className="bg-white  p-5 rounded-xl border border-slate-200  shadow-sm flex flex-col h-full">
      <h3 className="font-bold text-slate-900  mb-3 pb-2 border-b border-slate-100  text-center">{title}</h3>
      <div className="mb-4 flex-1">
        <strong className="text-xs text-slate-500 uppercase tracking-wide block mb-2">Possible Reasons:</strong>
        <ul className="text-sm text-slate-600  space-y-1 ml-3 list-disc">
          {reasons.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
      <div>
        <strong className="text-xs text-[#006C35] uppercase tracking-wide block mb-2">Solutions:</strong>
        <ul className="text-sm text-slate-600  space-y-1 ml-3 list-disc">
          {solutions.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
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
