"use client";

import { 
  ShieldCheck, Scale, DollarSign, Calculator, Briefcase, Users, ChevronRight, GraduationCap
} from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { GeminiNews } from "@/components/gemini-news";
import { AskQuestion } from "@/components/ask-question";
import { useState } from "react";

import { LaborAlerts } from "@/components/labor-alerts";
import { useLanguage } from "@/context/language-context";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Hero onSearch={setSearchQuery} />
      
      {/* SEO Silos / Authority Hub */}
      <section className="bg-white py-16 px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {t('home_hub_title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              {t('home_hub_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <SiloCard 
              title={t('home_silo_work_title')} 
              desc={t('home_silo_work_desc')}
              links={[
                { label: "Work Permits Saudi Arabia", href: "/work-permits-saudi-arabia" },
                { label: "Iqama Renewal Online", href: "/iqama-renewal-guide" },
                { label: "Exit Re-Entry Visa Check", href: "/exit-reentry-visa-saudi" }
              ]}
              icon={<ShieldCheck className="text-[#006C35]" size={28} />}
            />
            <SiloCard 
              title={t('home_silo_salary_title')} 
              desc={t('home_silo_salary_desc')}
              links={[
                { label: "Salary Certificate Download", href: "/salary-certificate-download" },
                { label: "GOSI Calculation Guide", href: "/salary-certificate-download" }
              ]}
              icon={<DollarSign className="text-blue-500" size={28} />}
            />
            <SiloCard 
              title={t('home_silo_eosb_title')} 
              desc={t('home_silo_eosb_desc')}
              links={[
                { label: "EOSB Calculator Saudi Arabia", href: "/end-of-service-saudi-calculator" },
                { label: "Resignation Rules KSA", href: "/end-of-service-saudi-calculator" }
              ]}
              icon={<Calculator className="text-purple-500" size={28} />}
            />
            <SiloCard 
              title={t('home_silo_rights_title')} 
              desc={t('home_silo_rights_desc')}
              links={[
                { label: "File Labor Complaint Saudi", href: "/labor-complaints-saudi-arabia" },
                { label: "Worker Rights Saudi Law", href: "/worker-rights-saudi-law" }
              ]}
              icon={<Scale className="text-red-500" size={28} />}
            />
            <SiloCard 
              title={t('home_silo_sponsor_title')} 
              desc={t('home_silo_sponsor_desc')}
              links={[
                { label: "Sponsor Transfer Saudi Arabia", href: "/sponsor-transfer-status-saudi" },
                { label: "Transfer Status Check", href: "/sponsor-transfer-status-saudi" }
              ]}
              icon={<Briefcase className="text-orange-500" size={28} />}
            />
            <SiloCard 
              title={t('home_silo_identity_title')} 
              desc={t('home_silo_identity_desc')}
              links={[
                { label: "National Address SPL Saudi", href: "/national-address-spl-saudi" },
                { label: "Absher Services Guide", href: "/iqama-services-guide" }
              ]}
              icon={<Users className="text-cyan-500" size={28} />}
            />
            <SiloCard 
              title={t('home_silo_edu_title')} 
              desc={t('home_silo_edu_desc')}
              links={[
                { label: "Schooling for Expats in KSA", href: "/schooling-expat-children-saudi" },
                { label: "GPA & Writing Tools", href: "/tools" },
                { label: "Word & Character Counter", href: "/tools" }
              ]}
              icon={<GraduationCap className="text-[#006C35]" size={28} />}
            />
          </div>

          {/* Quick Hub Access */}
          <div className="text-center">
            <Link 
              href="/saudi-workers-guide"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#006C35] text-white rounded-2xl font-bold hover:bg-[#005a2c] transition-all shadow-xl shadow-[#006C35]/20 text-lg"
            >
              {t('home_open_library_btn')} <ChevronRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      <LaborAlerts />
      <GeminiNews />
      
      {/* Community CTA Section */}
      <section className="bg-[#006C35] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wide mb-6">
            <Users size={16} /> {t('community_subtitle')}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('community_title')}
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light leading-relaxed">
            {t('community_desc')}
          </p>
          <Link 
            href="/community-chat"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#006C35] rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-2xl text-lg"
          >
            {t('community_join_btn')} <ChevronRight size={24} />
          </Link>
        </div>
      </section>

      <AskQuestion />
    </div>
  );
}

function SiloCard({ title, desc, links, icon }: { title: string, desc: string, links: {label: string, href: string}[], icon: any }) {
  return (
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-[#006C35] transition-all group text-left">
      <div className="mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed">{desc}</p>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="text-sm font-bold text-[#006C35] hover:underline flex items-center gap-1">
              {link.label} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
