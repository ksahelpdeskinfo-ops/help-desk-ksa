"use client";

import { 
  ShieldAlert, ShieldCheck, Gavel, AlertTriangle, 
  Search, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Building2, UserX, Scale, PhoneCall, FileText
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function RightsProtectionGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <ShieldAlert size={16} /> Worker Protection Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            Rights Protection in Saudi Arabia
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            Reporting unsafe work, violations, and discrimination. Every worker is legally protected from abuse and exploitation under national labor regulations.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#006C35]" /> Core Protections
              </h2>
              <p className="text-slate-600  leading-relaxed mb-6">
                The system is designed so workers can report issues directly through official digital platforms without needing to depend on their employer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-700 ">
                  <CheckCircle2 size={16} className="text-[#006C35]" /> Safe working environments
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 ">
                  <CheckCircle2 size={16} className="text-[#006C35]" /> Fair treatment at work
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 ">
                  <CheckCircle2 size={16} className="text-[#006C35]" /> Protection from discrimination
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 ">
                  <CheckCircle2 size={16} className="text-[#006C35]" /> Proper contract enforcement
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Violations Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-8">Workplace Violations You Can Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ViolationCard 
              icon={<AlertTriangle size={24} className="text-orange-500" />}
              title="Unsafe Work"
              items={["No safety equipment", "Hazardous materials", "No emergency plans"]}
            />
            <ViolationCard 
              icon={<Gavel size={24} className="text-blue-500" />}
              title="Wage Abuse"
              items={["Delayed salary", "Missing overtime", "Unauthorized cuts"]}
            />
            <ViolationCard 
              icon={<UserX size={24} className="text-red-500" />}
              title="Discrimination"
              items={["Unequal treatment", "Workplace bullying", "Harassment"]}
            />
            <ViolationCard 
              icon={<FileText size={24} className="text-purple-500" />}
              title="Contract Issues"
              items={["Role mismatch", "Forced unpaid hours", "Terms violation"]}
            />
            <ViolationCard 
              icon={<Scale size={24} className="text-[#006C35]" />}
              title="Legal Breaches"
              items={["Illegal termination", "Document confiscation", "Movement restriction"]}
            />
          </div>
        </div>

        {/* Reporting Channels */}
        <div className="mb-16 bg-[#006C35]/5 rounded-2xl p-8 border border-[#006C35]/10">
          <h2 className="text-2xl font-bold text-slate-900  mb-8 text-center">Official Reporting Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChannelCard 
              title="Online Platform"
              desc="Submit complaints digitally through the official labor portal."
              action="Visit Platform"
            />
            <ChannelCard 
              title="Support Hotline"
              desc="Multilingual assistance for registration and guidance."
              action="Call 19911"
            />
            <ChannelCard 
              title="In-Person Offices"
              desc="Visit labor offices for document verification and mediation."
              action="Find Branch"
            />
          </div>
        </div>

        {/* Complaint Journey */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-8">What Happens After Filing?</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200  hidden md:block"></div>
            <div className="space-y-8 relative">
              <StepItem number="1" title="Case Registration" desc="Your complaint is officially recorded in the national system." />
              <StepItem number="2" title="Review Process" desc="Authorities analyze your evidence and documentation." />
              <StepItem number="3" title="Employer Contact" desc="The employer is contacted for clarification and response." />
              <StepItem number="4" title="Mediation Stage" desc="Attempt to resolve the issue through mutual agreement." />
              <StepItem number="5" title="Legal Judgment" desc="Unresolved cases are escalated for a final legal decision." />
            </div>
          </div>
        </div>

        {/* Evidence & Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  p-8 rounded-2xl border border-slate-200  shadow-sm">
            <h3 className="text-xl font-bold text-slate-900  mb-6">Required Evidence</h3>
            <ul className="space-y-3 text-sm text-slate-600 ">
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#006C35]" /> Employment contract copy</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#006C35]" /> Salary slips or bank transfers</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#006C35]" /> Photos or videos of violations</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#006C35]" /> Written communication (emails/chats)</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#006C35]" /> Attendance or work records</li>
            </ul>
          </div>
          <div className="bg-blue-50/50  p-8 rounded-2xl border border-blue-100 ">
            <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
              <AlertCircle size={20} className="text-blue-600" /> Important Tips
            </h3>
            <ul className="space-y-4 text-sm text-slate-700 ">
              <li>• Always keep written proof of employment terms.</li>
              <li>• Report issues early before they escalate.</li>
              <li>• Complaints are handled confidentially (no fear of retaliation).</li>
              <li>• Use official platforms only for valid protection.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

function ViolationCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-slate-900  mb-3">{title}</h3>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-slate-500">• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function ChannelCard({ title, desc, action }: { title: string; desc: string; action: string }) {
  return (
    <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm text-center">
      <h3 className="font-bold text-slate-900  mb-2">{title}</h3>
      <p className="text-xs text-slate-600  mb-4 leading-relaxed">{desc}</p>
      <button className="text-xs font-bold text-[#006C35] uppercase tracking-wider hover:underline">{action}</button>
    </div>
  );
}

function StepItem({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#006C35] text-white flex items-center justify-center text-xl font-bold border-4 border-white  shadow-sm z-10">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900  mb-1">{title}</h3>
        <p className="text-sm text-slate-600 ">{desc}</p>
      </div>
    </div>
  );
}
