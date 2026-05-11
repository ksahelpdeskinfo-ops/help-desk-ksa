"use client";

import { 
  ShieldCheck, Clock, MapPin, Building2, PhoneCall, Globe, 
  Briefcase, Users, FileText, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, DollarSign, Landmark, GraduationCap, Compass, Heart, Star, RefreshCw
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function GuideLibraryPage() {
  const [dynamicGuides, setDynamicGuides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDynamicGuides();
  }, []);

  const fetchDynamicGuides = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("guides")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) setDynamicGuides(data);
    setLoading(false);
  };

  const getDynamicGuidesByCategory = (category: string) => {
    return dynamicGuides.filter(g => g.category === category);
  };
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-6">
            <ShieldCheck size={16} /> Official KSA Advisory Library
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Saudi Workers <span className="text-[#006C35]">Guide</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
            Access our complete collection of detailed, step-by-step instructional guides covering labor law, residency rules, and expatriate rights.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        <div className="grid grid-cols-1 gap-16 relative z-10">
          
          {/* Work & Visa Category */}
          <section>
            <div className="flex items-center gap-3 mb-6 px-4">
              <div className="p-2 bg-[#006C35]/10 text-[#006C35] rounded-lg"><Briefcase size={24} /></div>
              <h2 className="text-3xl font-bold text-slate-900">Work & Visa System</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceItem title="Work Permits & Visas" desc="Complete guide on issuance, renewals, and professional categories." href="/work-permits-saudi-arabia" />
              <ServiceItem title="Iqama Renewal Guide" desc="Step-by-step instructions for online renewal and fee payment." href="/iqama-renewal-guide" />
              <ServiceItem title="Exit Re-Entry Visa" desc="How to check status, validity, and travel eligibility." href="/exit-reentry-visa-saudi" />
              <ServiceItem title="Sponsor Transfer (Qiwa)" desc="Tracking your transfer request and legal requirements." href="/sponsor-transfer-status-saudi" />
              <ServiceItem title="Profession Change" desc="Rules for updating your job title in the labor system." href="/work-permits-saudi-arabia" />
              <ServiceItem title="SIM Cards for Expats" desc="How to check mobile numbers registered on your Iqama." href="/sim-cards-iqama-check" />
              {getDynamicGuidesByCategory("Work & Visa System").map(guide => (
                <ServiceItem key={guide.id} title={guide.title} desc={guide.description} href={guide.href} isDynamic />
              ))}
            </div>
          </section>

          {/* Salary & Finance Category */}
          <section>
            <div className="flex items-center gap-3 mb-6 px-4">
              <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg"><DollarSign size={24} /></div>
              <h2 className="text-3xl font-bold text-slate-900">Salary & Finance</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceItem title="Salary Certificate" desc="Official templates and download guide for bank requirements." href="/salary-certificate-download" />
              <ServiceItem title="EOSB Calculator" desc="Calculate your end-of-service benefit accurately." href="/end-of-service-saudi-calculator" />
              <ServiceItem title="GOSI Contributions" desc="Guide to social insurance records and calculation." href="/salary-certificate-download" />
              <ServiceItem title="Wage Protection System" desc="Monitoring your salary payments and reporting delays." href="/labor-office" />
              <ServiceItem title="Labor Complaints" desc="Filing official complaints for delayed or unpaid salaries." href="/labor-complaints-saudi-arabia" />
              {getDynamicGuidesByCategory("Salary & Finance").map(guide => (
                <ServiceItem key={guide.id} title={guide.title} desc={guide.description} href={guide.href} isDynamic />
              ))}
            </div>
          </section>

          {/* Life & Wellbeing Category */}
          <section>
            <div className="flex items-center gap-3 mb-6 px-4">
              <div className="p-2 bg-purple-500/10 text-purple-600 rounded-lg"><Clock size={24} /></div>
              <h2 className="text-3xl font-bold text-slate-900">Life & Rights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceItem title="Worker Rights (Law)" desc="Full summary of Saudi Labor Law for expatriate workers." href="/worker-rights-saudi-law" />
              <ServiceItem title="Healthcare for Expats" desc="Mandatory health insurance rules, hospital access, and medical costs." href="/healthcare-guide-saudi" />
              <ServiceItem title="Public Holidays" desc="Official calendar guide for religious and national holidays in KSA." href="/public-holidays-saudi" />
              <ServiceItem title="Hajj & Statutory Leave" desc="Understanding eligibility, paid leave duration, and legal rights." href="/leave-rules-saudi-arabia" />
              {getDynamicGuidesByCategory("Life & Rights").map(guide => (
                <ServiceItem key={guide.id} title={guide.title} desc={guide.description} href={guide.href} isDynamic />
              ))}
            </div>
          </section>

          {/* Family & Education Category */}
          <section>
            <div className="flex items-center gap-3 mb-6 px-4">
              <div className="p-2 bg-pink-500/10 text-pink-600 rounded-lg"><GraduationCap size={24} /></div>
              <h2 className="text-3xl font-bold text-slate-900">Family & Education</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceItem title="Schooling for Expats" desc="International schools, curricula, admission requirements, and costs." href="/schooling-expat-children-saudi" />
              <ServiceItem title="Family Visit Visa" desc="Guide for bringing relatives on temporary stay visas." href="/family-visit-visa-saudi" />
              <ServiceItem title="Permanent Family Visa" desc="Sponsoring dependents for long-term residency residency." href="/permanent-family-visa-saudi" />
              <ServiceItem title="Dependent Iqama Guide" desc="Legal residency permits for family members." href="/dependent-iqama-guide" />
              <ServiceItem title="Child Vaccination Rules" desc="Mandatory health requirements for school and residency." href="/child-vaccination-rules-saudi" />
              <ServiceItem title="University Admissions" desc="Higher education pathways and requirements for expats." href="/university-admissions-saudi" />
              <ServiceItem title="Nursery & Daycare" desc="Early childhood care, safety, and licensed facilities." href="/nursery-daycare-guide-saudi" />
              {getDynamicGuidesByCategory("Family & Education").map(guide => (
                <ServiceItem key={guide.id} title={guide.title} desc={guide.description} href={guide.href} isDynamic />
              ))}
            </div>
          </section>

          {/* Travel & Tourism Category */}
          <section>
            <div className="flex items-center gap-3 mb-6 px-4">
              <div className="p-2 bg-blue-400/10 text-blue-500 rounded-lg"><Compass size={24} /></div>
              <h2 className="text-3xl font-bold text-slate-900">Travel & Tourism</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceItem title="Domestic Tourism" desc="Explore heritage sites, resorts, and cities in Saudi Arabia." href="/domestic-tourism-saudi" />
              <ServiceItem title="Best Cities for Expats" desc="Comparing lifestyle, jobs, and savings across the Kingdom." href="/best-cities-expats-saudi" />
              <ServiceItem title="Weekend Destinations" desc="Top short getaway spots for residents and families." href="/weekend-destinations-saudi" />
              <ServiceItem title="Airport Travel Rules" desc="Essential documentation and customs rules for travelers." href="/airport-travel-rules-saudi" />
              <ServiceItem title="Saudi Tourism Visa" desc="Guide to eVisa system and Umrah visitor permits." href="/saudi-tourism-visa-guide" />
              <ServiceItem title="GCC Travel Guide" desc="Mobility and visa rules for traveling within the Gulf." href="/gcc-travel-guide-saudi" />
              {getDynamicGuidesByCategory("Travel & Tourism").map(guide => (
                <ServiceItem key={guide.id} title={guide.title} desc={guide.description} href={guide.href} isDynamic />
              ))}
            </div>
          </section>

          {/* Religion & Community Category */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6 px-4">
              <div className="p-2 bg-orange-500/10 text-orange-600 rounded-lg"><Landmark size={24} /></div>
              <h2 className="text-3xl font-bold text-slate-900">Religion & Community</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceItem title="Umrah Guide for Residents" desc="Permits, Nusuk registration, transportation, and official rules." href="/umrah-guide-saudi-residents" />
              <ServiceItem title="Ramadan Rules & Labor Law" desc="Fasting regulations, reduced work hours, and public conduct." href="/ramadan-rules-saudi-arabia" />
              <ServiceItem title="Mosque Etiquette" desc="Proper dress code, prayer conduct, and cultural respect guide." href="/mosque-etiquette-saudi" />
              <ServiceItem title="Prayer Timings" desc="Daily schedules, official timing systems, and mosque access." href="/prayer-timings-saudi-arabia" />
              <ServiceItem title="Islamic Holidays" desc="Eid al-Fitr, Eid al-Adha, and official vacation regulations." href="/islamic-holidays-saudi" />
              <ServiceItem title="Expat Community Centers" desc="Social networks, embassy services, and family support groups." href="/expat-community-centers-saudi" />
              {getDynamicGuidesByCategory("Religion & Community").map(guide => (
                <ServiceItem key={guide.id} title={guide.title} desc={guide.description} href={guide.href} isDynamic />
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

function ServiceItem({ title, desc, href, isDynamic }: { title: string, desc: string, href: string, isDynamic?: boolean }) {
  return (
    <Link 
      href={href}
      className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#006C35] hover:shadow-xl hover:shadow-[#006C35]/5 transition-all relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-2 h-0 bg-[#006C35] group-hover:h-full transition-all duration-300"></div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#006C35] transition-colors">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4 font-light">{desc}</p>
      <div className="flex items-center gap-2 text-xs font-bold text-[#006C35]">
        {isDynamic ? "New Guide" : "Read Guide"} <CheckCircle2 size={14} />
      </div>
    </Link>
  );
}
