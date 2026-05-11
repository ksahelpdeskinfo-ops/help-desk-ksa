"use client";

import { 
  MapPin, AlertTriangle, ShieldCheck, DownloadCloud, 
  Search, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Building2, Smartphone, Home, BarChart3, HelpCircle
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function NationalAddressGuidePage() {
  return (
    <div className="bg-slate-50  min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white  border-b border-slate-200  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <MapPin size={16} /> Official Location Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900  tracking-tight mb-6 leading-tight">
            How to Register Your National Address (SPL App)
          </h1>
          <p className="text-lg text-slate-600  leading-relaxed max-w-3xl mx-auto">
            The National Address System is the official addressing framework in Saudi Arabia. It is managed under the national postal infrastructure and is mandatory for all residents and citizens.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Intro & Key Components */}
        <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-8 mb-12 relative z-10">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <Home className="text-[#006C35]" /> Key Components of a National Address
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200  shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 ">
              <thead className="bg-slate-50  text-slate-900  font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200 ">Component</th>
                  <th className="px-6 py-4 border-b border-slate-200 ">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-slate-200 ">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Building Number</td>
                  <td className="px-6 py-4">Unique property number</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Street Name</td>
                  <td className="px-6 py-4">Official street identification</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">District</td>
                  <td className="px-6 py-4">Area or neighborhood</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">City</td>
                  <td className="px-6 py-4">City name</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Postal Code</td>
                  <td className="px-6 py-4">5-digit code</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900 ">Additional Number</td>
                  <td className="px-6 py-4">Secondary location identifier</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Registration is Mandatory */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Why Registration is Mandatory</h2>
          <p className="text-slate-600  mb-6">Registration is required for accessing almost all essential services in Saudi Arabia.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <UsageCard title="Government Services" desc="Digital platforms and IDs" />
            <UsageCard title="Banking" desc="Account opening and finance" />
            <UsageCard title="Employment" desc="Contracts and HR records" />
            <UsageCard title="Deliveries" desc="Online shopping and mail" />
            <UsageCard title="Vehicle Services" desc="Registration and traffic" />
            <UsageCard title="Telecom & Utilities" desc="SIMs, water, electricity" />
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Requirements Before Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReqCard title="For Citizens">
              <ul className="space-y-2 text-sm text-slate-600  list-disc ml-4">
                <li>Valid national identity</li>
                <li>Active digital gov account</li>
                <li>Registered mobile number</li>
                <li>Proof of residence (optional)</li>
              </ul>
            </ReqCard>
            <ReqCard title="For Residents">
              <ul className="space-y-2 text-sm text-slate-600  list-disc ml-4">
                <li>Valid residency permit</li>
                <li>Active digital gov account</li>
                <li>Mobile registered to ID</li>
                <li>Rental/housing agreement</li>
              </ul>
            </ReqCard>
            <ReqCard title="Technical Needs">
              <ul className="space-y-2 text-sm text-slate-600  list-disc ml-4">
                <li>Smartphone with GPS</li>
                <li>Internet connection</li>
                <li>Latest OS version</li>
                <li>Min 100 MB free storage</li>
              </ul>
            </ReqCard>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Step-by-Step Registration Guide</h2>
          <div className="bg-white  rounded-2xl border border-slate-200  shadow-sm p-8 space-y-8">
            
            <StepItem number="1" title="Download the Official App">
              <p className="text-sm text-slate-600  mb-2">Search for "SPL" or "Saudi postal app".</p>
              <div className="flex gap-4">
                <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline text-sm">Android Store</a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline text-sm">Apple Store</a>
              </div>
            </StepItem>

            <StepItem number="2" title="Create Your Account">
              <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 ">
                <li>• Open the app</li>
                <li>• Select registration</li>
                <li>• Enter ID/residency number</li>
                <li>• Enter mobile number</li>
                <li>• Verify OTP code</li>
                <li>• Set password</li>
              </ul>
            </StepItem>

            <StepItem number="3" title="Identity Verification">
              <ul className="text-sm text-slate-600 ">
                <li>• Log in through the official government login system.</li>
                <li>• Complete SMS verification.</li>
                <li>• Approve access permissions.</li>
              </ul>
            </StepItem>

            <StepItem number="4" title="Enable Location Access">
              <ul className="text-sm text-slate-600 ">
                <li>• Activate GPS and allow location permissions.</li>
                <li>• Stand at your residence for accurate mapping.</li>
              </ul>
            </StepItem>

            <StepItem number="5" title="Register Address">
              <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 ">
                <li>• Select "Register New Address"</li>
                <li>• Confirm map location</li>
                <li>• Enter Building, Street, District</li>
                <li>• Choose City & Postal Code</li>
                <li>• Choose housing type</li>
                <li>• Submit request</li>
              </ul>
            </StepItem>

            <StepItem number="6" title="Confirmation">
              <p className="text-sm text-slate-600  mb-2">After submission you will receive:</p>
              <ul className="text-sm text-[#006C35] font-medium">
                <li>✓ Instant SMS confirmation</li>
                <li>✓ Digital address available in app</li>
                <li>✓ Unique address code generated</li>
              </ul>
            </StepItem>

          </div>
        </div>

        {/* Common Errors & New Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-white  p-8 rounded-xl border border-slate-200  shadow-sm">
            <h3 className="font-bold text-xl text-slate-900  mb-6 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" /> Common Errors and Fixes
            </h3>
            <div className="space-y-4">
              <IssueFix title="Location Not Found" fix="Enable high accuracy GPS, restart app, move to open area." />
              <IssueFix title="Identity Verification Failed" fix="Check ID details, update mobile number, retry login." />
              <IssueFix title="Address Already Exists" fix="Contact support center, request update." />
              <IssueFix title="OTP Not Received" fix="Wait 2–3 minutes, resend OTP, check SMS blocking." />
              <IssueFix title="Invalid ID Error" fix="Recheck number format, ensure ID is valid/active." />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-[#006C35]/5 p-6 rounded-xl border border-[#006C35]/10 shadow-sm flex-1">
              <h3 className="font-bold text-lg text-[#006C35] mb-4">New Features (Update)</h3>
              <ul className="space-y-2 text-sm text-slate-700 ">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-[#006C35]"/> QR code sharing of address</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-[#006C35]"/> Multiple address storage</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-[#006C35]"/> Real-time delivery tracking</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-[#006C35]"/> Digital mailbox access</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-[#006C35]"/> Instant address updates</li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-[#006C35]"/> Business verification tools</li>
              </ul>
            </div>

            <div className="bg-blue-50/50  p-6 rounded-xl border border-blue-100  shadow-sm flex-1">
              <h3 className="font-bold text-lg text-blue-600 mb-4 flex items-center gap-2">
                <BarChart3 size={20} /> National Address Growth
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm border-b border-blue-200  pb-2">
                  <span className="text-slate-600 ">2024</span>
                  <span className="font-bold text-slate-900 ">18+ million</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-blue-200  pb-2">
                  <span className="text-slate-600 ">2025</span>
                  <span className="font-bold text-slate-900 ">21+ million</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600  font-bold">(expected)</span>
                  <span className="font-bold text-blue-600">24+ million</span>
                </div>
                <p className="text-xs text-slate-500 italic mt-2">Major cities account for the majority of registrations.</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Support Channels */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6">Support Channels (Official)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SupportCard title="Phone Support" detail="920005700" isLink={false} />
            <SupportCard title="Email Support" detail="care@sp.com.sa" isLink={false} />
            <SupportCard title="Online Support" detail="www.sp.com.sa" isLink={true} href="https://www.sp.com.sa" />
            <SupportCard title="Branch Locator" detail="Find nearest branch" isLink={true} href="https://www.sp.com.sa/en/branch-locator" />
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900  mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#006C35]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem question="Is registration free?" answer="Yes, it is completely free." />
            <FaqItem question="Can I register more than one address?" answer="Yes, multiple addresses are allowed in the system." />
            <FaqItem question="How long does it take?" answer="The digital process usually takes 5–10 minutes." />
            <FaqItem question="Can I update my address later?" answer="Yes, updates are allowed anytime through the app." />
            <FaqItem question="What if my building is not listed?" answer="You can manually pin the location on the map and submit it for verification." />
          </div>
        </div>

      </div>
    </div>
  );
}

function UsageCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-white  p-4 rounded-xl border border-slate-200  shadow-sm flex flex-col h-full">
      <h3 className="font-bold text-slate-900  text-sm mb-1">{title}</h3>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  );
}

function ReqCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-white  p-6 rounded-xl border border-slate-200  shadow-sm">
      <h3 className="font-bold text-slate-900  mb-4 border-b border-slate-100  pb-2">{title}</h3>
      {children}
    </div>
  );
}

function StepItem({ number, title, children }: { number: string, title: string, children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-[#006C35] text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="pt-1">
        <h3 className="font-bold text-slate-900  mb-2">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function IssueFix({ title, fix }: { title: string, fix: string }) {
  return (
    <div className="bg-slate-50  p-3 rounded border border-slate-100 ">
      <h4 className="font-bold text-slate-900  text-sm mb-1">{title}</h4>
      <p className="text-xs text-slate-600 "><span className="font-semibold text-orange-600 ">Fix:</span> {fix}</p>
    </div>
  );
}

function SupportCard({ title, detail, isLink, href }: { title: string, detail: string, isLink: boolean, href?: string }) {
  return (
    <div className="bg-white  p-4 rounded-xl border border-slate-200  shadow-sm text-center">
      <h4 className="font-bold text-slate-900  text-sm mb-2">{title}</h4>
      {isLink ? (
        <a href={href} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline text-sm">{detail}</a>
      ) : (
        <span className="text-sm text-slate-600 ">{detail}</span>
      )}
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
