"use client";

import { 
  Smartphone, AlertTriangle, ShieldCheck, CreditCard, 
  Search, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, FileText, HelpCircle
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SimCardsIqamaCheckGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <Smartphone size={16} /> Digital Identity Verification
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            SIM Cards on Iqama Check: Full Guide, Limits & Safety
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            In Saudi Arabia, every mobile SIM card must be registered under a valid residency identity. Discovering unauthorized SIM cards linked to your name is a major security risk. This guide explains how to check your linked SIMs, fix unauthorized registrations, and stay legally compliant.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro & Risks Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <ShieldCheck className="text-[#006C35]" /> Why You Must Check Your SIMs
            </h2>
            <p className="text-slate-600  leading-relaxed mb-4">
              Every SIM card in the system is linked to a legal identity. This means any number registered under your identity can legally be traced back to you. Regular monitoring helps prevent long-term legal and financial problems.
            </p>
          </div>
          <div className="md:w-1/3 bg-red-50  border border-red-100  p-6 rounded-xl shrink-0">
            <h3 className="font-bold text-red-700  mb-4 flex items-center gap-2">
              <AlertTriangle size={18} /> Risks of Not Checking
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 ">
              <li>• Identity misuse or fraud</li>
              <li>• Unauthorized mobile bills</li>
              <li>• Legal responsibility for unknown activity</li>
              <li>• Issues during residency renewal</li>
              <li>• Security risks from unknown users</li>
            </ul>
          </div>
        </div>

        {/* 4 Methods to Check */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-8 text-center">Official SIM Check Methods</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MethodCard number="1" title="Official Telecom Identity Portal" bestFor="Primary government system for checking all SIM cards.">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">What You Need:</p>
              <ul className="text-sm text-slate-600  mb-4 list-disc ml-4">
                <li>Residency number</li>
                <li>Date of birth</li>
                <li>One registered mobile number (for OTP)</li>
              </ul>
              <div className="bg-slate-50  p-3 rounded-lg border border-slate-200  text-xs">
                <strong>Alternative Basic Check:</strong> Enter residency & DOB without a mobile number to see the total SIM count per provider (no full numbers displayed).
              </div>
            </MethodCard>

            <MethodCard number="2" title="Mobile Application Check" bestFor="Identity-based SIM management.">
              <ul className="text-sm text-slate-600  mb-4 space-y-1">
                <li>• Secure login system</li>
                <li>• Identity verification</li>
                <li>• SIM list viewing</li>
                <li>• Notifications for new registrations</li>
                <li>• Complaint submission options</li>
              </ul>
            </MethodCard>

            <MethodCard number="3" title="Government Services Platform" bestFor="Integrated government apps.">
              <ul className="text-sm text-slate-600  mb-4 list-decimal ml-4">
                <li>Log in to official government services app</li>
                <li>Access telecom or identity services section</li>
                <li>Select SIM inquiry option</li>
                <li>View linked mobile numbers</li>
              </ul>
              <div className="bg-slate-50  p-3 rounded-lg border border-slate-200  text-xs">
                <strong>Note:</strong> Often redirects to the main telecom identity system for final verification.
              </div>
            </MethodCard>

            <MethodCard number="4" title="Mobile Operator Verification" bestFor="In-person assistance (Indirect Method).">
              <ul className="text-sm text-slate-600  mb-4 list-decimal ml-4">
                <li>Visit any service center</li>
                <li>Provide residency document</li>
                <li>Request SIM registration report</li>
                <li>Verify active numbers</li>
              </ul>
            </MethodCard>
          </div>
        </div>

        {/* SIM Limits Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">SIM Card Limits Per Residency</h2>
          <p className="text-slate-600  mb-6">There are strict limits on how many SIM cards can be registered under one identity.</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm mb-6">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200  w-1/3">Category</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Maximum SIMs Allowed</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Individual Resident</td>
                  <td className="px-6 py-4 font-bold text-[#006C35]">Up to 10 SIMs total</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Per Telecom Provider</td>
                  <td className="px-6 py-4">Limited per provider</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Dependents</td>
                  <td className="px-6 py-4">Lower limits apply</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Business Accounts</td>
                  <td className="px-6 py-4">Higher limits with registration</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-orange-50  p-5 rounded-xl border border-orange-200 ">
            <strong className="text-orange-700  block mb-2 text-sm flex items-center gap-2">
              <AlertTriangle size={16} /> If You Exceed SIM Limits:
            </strong>
            <p className="text-sm text-slate-700 ">
              New SIM activation may be blocked, identity verification issues may occur, old SIMs may need to be deactivated, and system alerts may be triggered.
            </p>
          </div>
        </div>

        {/* What to Do If You Find Unknown SIMs */}
        <div className="mb-12 bg-[#006C35]/5 rounded-2xl p-8 border border-[#006C35]/10">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 text-center">What to Do If You Find Unknown SIM Cards</h2>
          <p className="text-center text-slate-600  mb-8">If you discover SIM cards you did not register, act immediately.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StepCard number="1" title="Save Evidence">
              Take screenshots of results, note unknown numbers, and save verification reports.
            </StepCard>
            <StepCard number="2" title="Contact Provider">
              Visit the nearest provider center with your Residency/Passport. Request immediate SIM deactivation.
            </StepCard>
            <StepCard number="3" title="File Official Complaint">
              If unresolved, submit a complaint through the official telecom complaint system and attach evidence.
            </StepCard>
            <StepCard number="4" title="Recheck Status">
              After resolution, repeat the SIM check process to confirm unknown SIMs are removed.
            </StepCard>
          </div>
        </div>

        {/* Results & Common Issues */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Status Meanings */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900  mb-6">Understanding Results</h2>
            <div className="bg-white  rounded-xl border border-slate-200  shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-200 ">
                <StatusRow status="Active" meaning="SIM registered & working" action="No action" color="text-[#006C35]" />
                <StatusRow status="Unknown" meaning="Not recognized" action="Investigate immediately" color="text-red-500" />
                <StatusRow status="Multiple" meaning="Several registered lines" action="Verify legitimacy" color="text-orange-500" />
                <StatusRow status="Suspended" meaning="Temporarily blocked" action="Check provider" color="text-slate-500" />
                <StatusRow status="Not found" meaning="No SIM linked" action="No action needed" color="text-slate-400" />
              </div>
            </div>
          </div>

          {/* Common Issues & Solutions */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900  mb-6">Common Issues</h2>
            <div className="space-y-4">
              <IssueCard 
                issue="No SIMs Found" 
                detail="Incorrect residency number or no SIMs registered." 
              />
              <IssueCard 
                issue="Wrong Number Appears" 
                detail="Possible identity misuse or unauthorized registration." 
              />
              <IssueCard 
                issue="System Error or Delay" 
                detail="Wait for system update and retry after 24–48 hours." 
              />
            </div>
          </div>
        </div>

        {/* Tips & Mistakes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="text-lg font-bold text-[#006C35] mb-4 flex items-center gap-2"><ShieldCheck size={20}/> Security Tips</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600 ">• Check SIM list every 3 months</li>
              <li className="text-sm text-slate-600 ">• Do not share identity documents carelessly</li>
              <li className="text-sm text-slate-600 ">• Avoid registering SIMs through unknown agents</li>
              <li className="text-sm text-slate-600 ">• Keep records of all SIM activations</li>
            </ul>
          </div>
          <div className="bg-white  p-8 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2"><AlertCircle size={20}/> Mistakes to Avoid</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600 ">• Ignoring unknown SIM alerts</li>
              <li className="text-sm text-slate-600 ">• Not checking regularly</li>
              <li className="text-sm text-slate-600 ">• Using unofficial websites</li>
              <li className="text-sm text-slate-600 ">• Sharing identity details with strangers</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Can I check SIM cards registered on someone else’s identity?" answer="No. SIM verification requires identity authentication and cannot be accessed without authorization." />
            <FaqItem question="Do all SIM types count?" answer="Yes. Both prepaid and postpaid SIMs are included in the total count." />
            <FaqItem question="Is SIM check service free?" answer="Yes. All official SIM verification services are completely free." />
            <FaqItem question="Can an expired residency still show SIMs?" answer="Yes, SIM records may still appear even if the residency is expired." />
          </div>
        </div>

      </div>
    </div>
  );
}

function MethodCard({ number, title, bestFor, children }: { number: string, title: string, bestFor: string, children: React.ReactNode }) {
  return (
    <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm relative overflow-hidden flex gap-4 items-start h-full flex-col">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold shrink-0">
          {number}
        </div>
        <h3 className="font-bold text-lg text-slate-900 ">{title}</h3>
      </div>
      <p className="text-xs font-semibold text-blue-600  mb-3">{bestFor}</p>
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}

function StepCard({ number, title, children }: { number: string, title: string, children: React.ReactNode }) {
  return (
    <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-12 h-12 bg-slate-50  rounded-bl-full flex items-start justify-end p-3">
        <span className="text-xl font-black text-slate-200 ">{number}</span>
      </div>
      <h3 className="font-bold text-base text-slate-900  mb-2 pr-6">{title}</h3>
      <p className="text-sm text-slate-600  leading-relaxed">{children}</p>
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

function IssueCard({ issue, detail }: { issue: string, detail: string }) {
  return (
    <div className="bg-white  p-4 rounded-xl border border-slate-200  shadow-sm">
      <strong className="text-slate-900  block mb-1">{issue}</strong>
      <p className="text-sm text-slate-600 ">{detail}</p>
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
