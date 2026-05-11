"use client";

import { 
  FileBadge, AlertTriangle, ShieldCheck, DownloadCloud, 
  Search, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Building2, Smartphone, MonitorSmartphone, HelpCircle
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SalaryInsuranceCertificateGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <FileBadge size={16} /> Official Document Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            How to Download Salary Insurance Certificate in Saudi Arabia
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            The salary insurance certificate is an official digital document issued by the national social insurance system. It serves as one of the most trusted proof-of-income documents in the country.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro Section - What & Why */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 relative z-10">
            <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-2">
              <ShieldCheck className="text-[#006C35]" /> What is the Certificate?
            </h2>
            <p className="text-slate-600  leading-relaxed mb-4">
              It is stored electronically and proves the following details:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Monthly salary details
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Employment status
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Insurance contribution record
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Employer registration details
              </li>
              <li className="flex gap-2 items-start text-sm text-slate-700 ">
                <CheckCircle2 className="text-[#006C35] shrink-0 mt-0.5" size={18} /> Work history under insurance coverage
              </li>
            </ul>
          </div>

          <div className="bg-blue-50/50  rounded-2xl shadow-sm border border-blue-100  p-8 relative z-10">
            <h2 className="text-2xl font-bold text-blue-600  mb-4 flex items-center gap-2">
              <FileBadge size={24} /> Why It Is Important
            </h2>
            <p className="text-sm text-slate-600  leading-relaxed mb-4">
              This document is widely used in Saudi Arabia for official and financial purposes. Common uses include:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white  p-3 rounded-lg border border-slate-200  text-sm font-medium text-slate-700  shadow-sm">
                Bank loan applications
              </div>
              <div className="bg-white  p-3 rounded-lg border border-slate-200  text-sm font-medium text-slate-700  shadow-sm">
                Credit card approval
              </div>
              <div className="bg-white  p-3 rounded-lg border border-slate-200  text-sm font-medium text-slate-700  shadow-sm">
                Visa procedures
              </div>
              <div className="bg-white  p-3 rounded-lg border border-slate-200  text-sm font-medium text-slate-700  shadow-sm">
                Employment verification
              </div>
              <div className="bg-white  p-3 rounded-lg border border-slate-200  text-sm font-medium text-slate-700  shadow-sm">
                Housing finance
              </div>
              <div className="bg-white  p-3 rounded-lg border border-slate-200  text-sm font-medium text-slate-700  shadow-sm">
                Gov service eligibility
              </div>
            </div>
          </div>
        </div>

        {/* Who Can Download */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Who Can Download It?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WhoCard title="Employees" desc="Any registered private-sector employee can access it, including expatriates and citizens." />
            <WhoCard title="Employers / HR" desc="Used for verifying staff salary records and compliance." />
            <WhoCard title="Entities" desc="Financial & government entities use it for official verification of income and employment." />
          </div>
        </div>

        {/* 3 Methods to Download */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-8 text-center">Methods to Download </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MethodCard title="Official Portal" icon={<MonitorSmartphone size={24} className="text-[#006C35]" />} badge="Recommended">
              <ol className="list-decimal ml-4 space-y-2 text-sm text-slate-600 ">
                <li>Access official portal & login (ID/secure auth)</li>
                <li>Go to: Certificates &gt; Salary / Wage Certificate</li>
                <li>Select "Issue Certificate"</li>
                <li>Download or print the PDF</li>
              </ol>
            </MethodCard>

            <MethodCard title="Mobile App" icon={<Smartphone size={24} className="text-blue-500" />}>
              <ol className="list-decimal ml-4 space-y-2 text-sm text-slate-600  mb-4">
                <li>Install official app & login</li>
                <li>Open "Certificates"</li>
                <li>Select salary certificate</li>
                <li>Generate and download PDF</li>
              </ol>
              <div className="bg-blue-50  p-2 rounded border border-blue-100  text-xs text-blue-700  font-medium">
                Benefits: Instant access, mobile storage, easy sharing.
              </div>
            </MethodCard>

            <MethodCard title="Labor Platform" icon={<Building2 size={24} className="text-orange-500" />}>
              <ol className="list-decimal ml-4 space-y-2 text-sm text-slate-600 ">
                <li>Login to the labor platform</li>
                <li>Go to services section</li>
                <li>Select salary certificate option</li>
                <li>Download or print</li>
              </ol>
            </MethodCard>
          </div>
        </div>

        {/* Certificate Data & Processing Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-white  rounded-xl border border-slate-200  shadow-sm p-6">
            <h3 className="font-bold text-lg text-slate-900  mb-4">What Information It Includes</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600  list-disc ml-4">
              <li>Employee name</li>
              <li>ID/residence number</li>
              <li>Employer details</li>
              <li>Monthly salary</li>
              <li>Contribution period</li>
              <li>Work status</li>
              <li>Certificate reference ID</li>
            </ul>
          </div>

          <div className="bg-[#006C35]/5 rounded-xl border border-[#006C35]/10 p-6">
            <h3 className="font-bold text-lg text-[#006C35] mb-4">Processing Time & Fees</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-[#006C35]/10 pb-2 text-sm">
                <span className="text-slate-600 ">Processing time:</span>
                <span className="font-bold text-slate-900 ">Instant</span>
              </div>
              <div className="flex justify-between border-b border-[#006C35]/10 pb-2 text-sm">
                <span className="text-slate-600 ">Cost:</span>
                <span className="font-bold text-[#006C35]">Free</span>
              </div>
              <div className="flex justify-between border-b border-[#006C35]/10 pb-2 text-sm">
                <span className="text-slate-600 ">Format:</span>
                <span className="font-bold text-slate-900 ">PDF</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 ">Availability:</span>
                <span className="font-bold text-slate-900 ">24/7</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Benefits Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Benefits of the Certificate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <BenefitCard title="Financial" items={["Loan approval", "Credit card eligibility", "Credibility proof"]} color="bg-green-50  border-green-200 " textColor="text-green-700 " />
            <BenefitCard title="Legal" items={["Employment verification", "Labor dispute documentation"]} color="bg-blue-50  border-blue-200 " textColor="text-blue-700 " />
            <BenefitCard title="Immigration" items={["Visa processing support", "Residency applications"]} color="bg-orange-50  border-orange-200 " textColor="text-orange-700 " />
            <BenefitCard title="Government" items={["Access to official services", "Insurance entitlement"]} color="bg-purple-50  border-purple-200 " textColor="text-purple-700 " />
          </div>
        </div>

        {/* Common Issues & Platform Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          <div className="lg:col-span-2 bg-white  p-8 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="font-bold text-xl text-slate-900  mb-6 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" /> Common Issues & Fixes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <IssueFix title="Certificate Not Showing" reason="Employer not registered or data not updated." fix="Contact HR or wait for system update." />
              <IssueFix title="Login Error" reason="Wrong credentials." fix="Reset password or re-authenticate." />
              <IssueFix title="Incorrect Salary Info" reason="Employer reporting mismatch." fix="Request correction from employer." />
              <IssueFix title="System Not Loading" reason="Temporary technical issue." fix="Try mobile app or wait." />
            </div>
          </div>

          <div className="bg-slate-50  p-6 rounded-xl border border-slate-200  shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-900  mb-4">Platform Comparison</h3>
              <ul className="space-y-4">
                <li className="border-b border-slate-200  pb-2">
                  <strong className="block text-sm text-slate-900 ">Gov Portal</strong>
                  <span className="text-xs text-slate-500">Full access & official download</span>
                </li>
                <li className="border-b border-slate-200  pb-2">
                  <strong className="block text-sm text-slate-900 ">Mobile App</strong>
                  <span className="text-xs text-slate-500">Quick mobile access</span>
                </li>
                <li>
                  <strong className="block text-sm text-slate-900 ">Labor Platform</strong>
                  <span className="text-xs text-slate-500">Employment-related services</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-200 ">
              <h4 className="font-bold text-sm text-[#006C35] mb-2 flex items-center gap-1">
                <CheckCircle2 size={14} /> Verification Method
              </h4>
              <p className="text-xs text-slate-600 ">
                Certificates can be authenticated instantly via the official verification page using the Certificate Number and ID.
              </p>
            </div>
          </div>
          
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Can it be downloaded without employer approval?" answer="Yes, if the employee is properly registered in the system, it can be downloaded directly." />
            <FaqItem question="Is it required for bank loans?" answer="Yes, most financial institutions in Saudi Arabia require it as proof of income." />
            <FaqItem question="How long does it take?" answer="Generating the certificate is fully digital and usually takes less than a few minutes." />
            <FaqItem question="Can expatriates download it?" answer="Yes, all registered employees (both citizens and expatriates) can access their certificate." />
          </div>
        </div>

      </div>
    </div>
  );
}

function WhoCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-white  p-5 rounded-lg border border-slate-200  shadow-sm text-center">
      <h4 className="font-bold text-slate-900  mb-2">{title}</h4>
      <p className="text-sm text-slate-600 ">{desc}</p>
    </div>
  );
}

function MethodCard({ title, icon, badge, children }: { title: string, icon: React.ReactNode, badge?: string, children: React.ReactNode }) {
  return (
    <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm relative overflow-hidden flex flex-col h-full">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 ">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="font-bold text-lg text-slate-900 ">{title}</h3>
        </div>
        {badge && (
          <span className="text-xs font-bold uppercase tracking-wider bg-green-100  text-green-700  px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

function BenefitCard({ title, items, color, textColor }: { title: string, items: string[], color: string, textColor: string }) {
  return (
    <div className={`p-5 rounded-xl border ${color} shadow-sm h-full`}>
      <h4 className={`font-bold ${textColor} mb-3 border-b border-current/20 pb-2`}>{title}</h4>
      <ul className="space-y-1 text-sm text-slate-700 ">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className={textColor}>•</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IssueFix({ title, reason, fix }: { title: string, reason: string, fix: string }) {
  return (
    <div>
      <h4 className="font-bold text-slate-900  text-sm mb-1">{title}</h4>
      <div className="text-xs space-y-1">
        <p className="text-slate-500"><span className="font-semibold text-slate-600 ">Issue:</span> {reason}</p>
        <p className="text-[#006C35]"><span className="font-semibold">Fix:</span> {fix}</p>
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
