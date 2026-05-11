"use client";

import { 
  Building2, AlertTriangle, ShieldCheck, DownloadCloud, 
  Search, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Smartphone, UserPlus, Clock, MonitorSmartphone, HelpCircle
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SponsorTransferStatusGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <UserPlus size={16} /> Official Transfer Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            Sponsor Transfer Status Check in Saudi Arabia 
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            Work transfer refers to changing your employer legally through the official labor system. This process is fully digital and regulated under national labor regulations.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Requirements & Eligibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 relative z-10">
            <h2 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2 border-b border-slate-100  pb-3">
              <ShieldCheck className="text-[#006C35]" /> Requirements Before Checking
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Valid residence ID number
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Border or visa number (if applicable)
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Registered mobile number
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Active account on labor systems
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Digital login verification access
              </li>
            </ul>
          </div>

          <div className="bg-blue-50/50  rounded-2xl shadow-sm border border-blue-100  p-8 relative z-10">
            <h2 className="text-xl font-bold text-blue-600  mb-6 flex items-center gap-2 border-b border-blue-200  pb-3">
              <Building2 size={24} /> Eligibility Conditions
            </h2>
            <p className="text-sm text-slate-600  mb-4">A transfer request is usually allowed if:</p>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <span className="text-blue-600 font-bold">•</span> Residence permit is valid
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <span className="text-blue-600 font-bold">•</span> No major legal violations recorded
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <span className="text-blue-600 font-bold">•</span> Minimum service period completed
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <span className="text-blue-600 font-bold">•</span> New employer is eligible
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <span className="text-blue-600 font-bold">•</span> Employment records properly updated
              </li>
            </ul>
          </div>
          
        </div>

        {/* How to Check Online (Main Method) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">How to Check Transfer Status Online</h2>
          <div className="bg-white  rounded-2xl border border-slate-200  shadow-sm overflow-hidden">
            <div className="bg-slate-50  p-6 border-b border-slate-200 ">
              <h3 className="font-bold text-slate-900  flex items-center gap-2">
                <MonitorSmartphone className="text-[#006C35]" /> Main Method (Labor Mobility Portal)
              </h3>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <StepItem number="1" title="Open Portal">
                  <p className="text-sm text-slate-600 ">Visit the Official Labor Mobility Services Portal.</p>
                </StepItem>
                <StepItem number="2" title="Sign In">
                  <p className="text-sm text-slate-600 ">Use your registered identity details and complete secure verification through your mobile device.</p>
                </StepItem>
                <StepItem number="3" title="Go to Transfer Services">
                  <div className="text-sm text-slate-600  font-mono bg-slate-50  p-2 rounded mt-2 border border-slate-100 ">
                    Employment Services → Transfer Requests → My Requests
                  </div>
                </StepItem>
              </div>

              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">Step 4: Understand Your Status</h4>
                <div className="space-y-3">
                  <StatusBadge status="Pending" color="bg-orange-100 text-orange-700  " desc="Under review. No action required." />
                  <StatusBadge status="Approved" color="bg-green-100 text-green-700  " desc="Transfer accepted. Proceed with next steps." />
                  <StatusBadge status="Rejected" color="bg-red-100 text-red-700  " desc="Not accepted. Review reason and reapply." />
                  <StatusBadge status="In Progress" color="bg-blue-100 text-blue-700  " desc="System is processing. Wait for updates." />
                  <StatusBadge status="Cancelled" color="bg-slate-100 text-slate-700  " desc="Request withdrawn or closed." />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Alternative Methods & Processing Time */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900  mb-6">Alternative Ways to Check Status</h2>
            <div className="space-y-4">
              <MethodCard title="1. Government Identity App" icon={<Smartphone className="text-blue-500" />}>
                <p className="text-sm text-slate-600  mb-2">Check through official identity verification systems.</p>
                <div className="text-xs font-mono bg-slate-50  p-2 border border-slate-100  rounded text-slate-500">
                  Log in → Service Inquiry → Employment Status → View Record
                </div>
              </MethodCard>
              
              <MethodCard title="2. Labor Support Inquiry Service" icon={<HelpCircle className="text-orange-500" />}>
                <p className="text-sm text-slate-600  mb-2">Contact the official support channel.</p>
                <ul className="text-xs text-slate-500 list-disc ml-4">
                  <li>Support available in Arabic, English, Urdu, Hindi.</li>
                  <li>Provide: ID number, mobile, request reference.</li>
                </ul>
              </MethodCard>
              
              <MethodCard title="3. Mobile Access Method" icon={<DownloadCloud className="text-[#006C35]" />}>
                <p className="text-sm text-slate-600  mb-2">Through official mobile labor services application.</p>
                <div className="flex gap-2">
                  <span className="bg-[#006C35]/10 text-[#006C35] text-[10px] px-2 py-1 rounded font-bold uppercase">Tracking</span>
                  <span className="bg-[#006C35]/10 text-[#006C35] text-[10px] px-2 py-1 rounded font-bold uppercase">Notifications</span>
                  <span className="bg-[#006C35]/10 text-[#006C35] text-[10px] px-2 py-1 rounded font-bold uppercase">Documents</span>
                </div>
              </MethodCard>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900  mb-6">Processing Time</h2>
            <div className="bg-white  rounded-xl border border-slate-200  shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm text-slate-600 ">
                <thead className="bg-slate-50  text-slate-900  font-bold uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border-b border-slate-200 ">Stage</th>
                    <th className="px-4 py-3 border-b border-slate-200 ">Estimated Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 ">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900 ">Submission</td>
                    <td className="px-4 py-3 font-bold text-[#006C35]">Instant</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900 ">Review</td>
                    <td className="px-4 py-3">3–7 working days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900 ">Approval/Rejection</td>
                    <td className="px-4 py-3">Up to 14 days</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-3 bg-red-50  border-t border-red-100 ">
                <p className="text-xs text-red-700  flex items-center gap-1">
                  <AlertTriangle size={14} /> Delays may occur due to verification checks.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-[#006C35]/5 rounded-xl border border-[#006C35]/10 p-5 shadow-sm">
              <h3 className="font-bold text-sm text-[#006C35] mb-2 uppercase tracking-wider">Fees Info</h3>
              <p className="text-sm text-slate-700 ">Most status checks are <span className="font-bold">free</span>. Administrative costs (if any) are handled by the employer depending on contract terms.</p>
            </div>
          </div>
          
        </div>

        {/* Common Issues & Solutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Common Issues & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IssueCard 
              title="Status Stuck on Review" 
              reason="Missing documents, verification delay, or system backlog." 
              fix="Wait a few days, recheck records, contact support."
            />
            <IssueCard 
              title="Request Rejected" 
              reason="Incomplete records, eligibility not met, or system mismatch." 
              fix="Review rejection reason, correct data, submit new request."
            />
            <IssueCard 
              title="Login Problems" 
              reason="Wrong credentials, old mobile number, or cache issues." 
              fix="Update mobile number, clear browser cache, retry."
            />
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white  p-8 rounded-xl border border-slate-200  shadow-sm mb-12">
          <h3 className="font-bold text-xl text-slate-900  mb-4 flex items-center gap-2 border-b border-slate-100  pb-3">
            <AlertCircle className="text-blue-500" /> Important Notes
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex gap-2 text-sm text-slate-600 ">
              <span className="text-blue-500 font-bold">•</span> All transfers are handled digitally.
            </li>
            <li className="flex gap-2 text-sm text-slate-600 ">
              <span className="text-blue-500 font-bold">•</span> Employer approval may or may not be required depending on contract rules.
            </li>
            <li className="flex gap-2 text-sm text-slate-600 ">
              <span className="text-blue-500 font-bold">•</span> Status updates are real-time in official systems.
            </li>
            <li className="flex gap-2 text-sm text-slate-600 ">
              <span className="text-blue-500 font-bold">•</span> Always keep records of your requests.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

function StepItem({ number, title, children }: { number: string, title: string, children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-[#006C35] text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="pt-1 flex-1">
        <h3 className="font-bold text-slate-900  mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function StatusBadge({ status, color, desc }: { status: string, color: string, desc: string }) {
  return (
    <div className="bg-white  border border-slate-100  rounded-lg p-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 shadow-sm">
      <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider w-fit sm:w-28 text-center ${color}`}>
        {status}
      </span>
      <span className="text-sm text-slate-600  flex-1">{desc}</span>
    </div>
  );
}

function MethodCard({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="bg-white  p-5 rounded-xl border border-slate-200  shadow-sm flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <h3 className="font-bold text-slate-900  text-base mb-2">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function IssueCard({ title, reason, fix }: { title: string, reason: string, fix: string }) {
  return (
    <div className="bg-white  p-5 rounded-xl border border-slate-200  shadow-sm flex flex-col h-full">
      <h3 className="font-bold text-slate-900  mb-3 border-b border-slate-100  pb-2">{title}</h3>
      <div className="mb-3 flex-1 text-sm">
        <span className="block text-slate-500 font-bold mb-1">Reason:</span>
        <span className="text-slate-600 ">{reason}</span>
      </div>
      <div className="text-sm bg-green-50  p-2 rounded border border-green-100 ">
        <span className="block text-[#006C35] font-bold mb-1">Solution:</span>
        <span className="text-green-700 ">{fix}</span>
      </div>
    </div>
  );
}
